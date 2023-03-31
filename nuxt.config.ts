import config from './config'

// Mobile version change:
// - config.js: MOBILE_VERSION eg 3.0.0
// - android\app\build.gradle
//    - versionCode eg 1200
//    - versionName eg "3.0.0"
// - ios\App\App.xcodeproj\project.pbxproj
//    - CURRENT_PROJECT_VERSION eg 1200 TWICE
//    - MARKETING_VERSION eg 3.0.0 TWICE

// @ts-ignore
export default defineNuxtConfig({
  _cli: false,

  // Rendering modes are confusing.
  //
  // - target can be:
  //   - static: can host on static hosting such as Azure Static Web Apps
  //   - server: requires a node server.
  // - ssr can be:
  //   - true: renders at
  //     - generate time for target: static, or
  //     - in node server for target: server)
  //   - false: renders on client.
  //
  // Ideally we'd use SSR so that we could render pages on the server or client depending on our hosting choice.
  // - But not all dependencies we use support SSR.
  // - Crucially, we use Bootstrap and bootstrap-vue-next.
  // - These do not yet support SSR.
  //
  // So we can't render full pages on the server any time soon. Can we just render purely on the client?
  //
  // Crawlers nowadays are smart enough to render pages on the client.  So that would be fine.
  // But Facebook link preview isn't, and we want that to work.
  //
  // However to get that preview working:
  // - We only really need the meta tags which are added in the setup() calls of
  //   individual pages.
  // - We don't need the full DOM rendered.
  // - So we can mask out bootstrap-containing elements using <client-only>, and use async component
  //   loading to avoid pulling in code if need be.
  //
  // We handle most of this in the pages, rather than in the components - pages are where we set the meta tags for
  // preview.
  //
  // Unfortunately:
  // - Nuxt/Vue has issues setting meta tags via useHead() when using the options API, where you can get
  //   an error saying the nuxt instance is not available if you've done an await first.
  // - Sometimes we do want to do that, e.g. to get a group so that we can use the info in the meta tags.
  // - In that case we've reworked the pages to use <script setup>.
  // - For historical reasons and preference we use the options API everywhere else.
  //
  // Sometimes when debugging it's useful to set ssr: false, because the errors are clearer when generated on the client.
  target: config.ISAPP ? 'static' : 'server',
  ssr: !config.ISAPP,

  routeRules: {
    // It's very possible that I misunderstand caching.  But it seems to me that we should never cache
    // the top-level route pages, because they will contain the names of top-level asset files, which will have
    // hashes in them.  If a new deployment happens, the hash will be wrong and the old files won't exist, so it
    // would be a mistake to serve them.
    //
    // This still leaves issues where a deployment happens while a page is partway through loading assets, or
    // later loads assets which are no longer present.  We handle that in deployment-workaround.client.js by
    // reloading the page.
    '/**': { headers: { 'cache-control': 'no-cache' } },
  },

  nitro: {
    prerender: {
      routes: ['/404.html', '/sitemap.xml'],

      // Don't crawl, else we end up with all the messages.
      crawlLinks: false,
    },
  },

  experimental: {
    emitRouteChunkError: 'reload',
  },

  build: {
    // Need to transpile otherwise SSR fails - see https://github.com/nuxt/framework/discussions/4523.
    transpile: [
      /bootstrap-vue-3/,
      /vue3-lazyload/,
      /vue-image-zoomer/,
      /vue3-draggable-resizable/,
      /pinia-plugin-persist/,
      /vue-social-sharing/,
    ],
  },

  webpack: {
    // Reduce size of CSS initial load.
    extractCSS: true,
  },

  modules: ['@pinia/nuxt'],

  buildModules: [
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore'],
      },
    ],
    'floating-vue/nuxt',
  ],

  axios: {
    proxy: true,
  },

  // Environment variables the client needs.
  runtimeConfig: {
    public: {
      APIv1: config.APIv1,
      APIv2: config.APIv2,
      OSM_TILE: config.OSM_TILE,
      GEOCODE: config.GEOCODE,
      FACEBOOK_APPID: config.FACEBOOK_APPID,
      YAHOO_CLIENTID: config.YAHOO_CLIENTID,
      GOOGLE_MAPS_KEY: config.GOOGLE_MAPS_KEY,
      GOOGLE_API_KEY: config.GOOGLE_API_KEY,
      GOOGLE_CLIENT_ID: config.GOOGLE_CLIENT_ID,
      USER_SITE: config.USER_SITE,
      IMAGE_SITE: config.IMAGE_SITE,
      SENTRY_DSN: config.SENTRY_DSN,
      BUILD_DATE: new Date().toISOString(),
      ISAPP: config.ISAPP,
      MOBILE_VERSION: config.MOBILE_VERSION,
    },
  },

  css: [
    '@/node_modules/@fortawesome/fontawesome-svg-core/styles.css',
    '@/assets/css/global.scss',
    'leaflet/dist/leaflet.css',
  ],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
            // Include some CSS in all components.
            // TODO MINOR Tried to include these but broke the colours:
            // @import '~bootstrap/scss/functions';
            // @import '~bootstrap/scss/variables';
            // @import '~bootstrap/scss/mixins/_breakpoints';
            //
            '@import "@/assets/css/_color-vars.scss";',
        },
      },
    },
  },

  app: {
    head: {
      title: "Freegle - Don't throw it away, give it away!",
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'author', name: 'author', content: 'Freegle' },
        { name: 'supported-color-schemes', content: 'light' },
        { name: 'color-scheme', content: 'light' },
        {
          name: 'facebook-domain-verification',
          content: 'zld0jt8mvf06rt1c3fnxvls3zntxj6',
        },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        {
          hid: 'description',
          name: 'description',
          content:
            "Give and get stuff for free in your local community.  Don't just recycle - reuse, freecycle and freegle!",
        },
        {
          hid: 'apple-mobile-web-app-title',
          name: 'apple-mobile-web-app-title',
          content:
            "Give and get stuff for free in your local community.  Don't just recycle - reuse, freecycle and freegle!",
        },

        {
          hid: 'og:image',
          property: 'og:image',
          content: config.USER_SITE + '/icon.png',
        },
        { hid: 'og:locale', property: 'og:locale', content: 'en_GB' },
        {
          hid: 'og:title',
          property: 'og:title',
          content: "Freegle - Don't throw it away, give it away!",
        },
        { hid: 'og:site_name', property: 'og:site_name', content: 'Freegle' },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://www.ilovefreegle.org',
        },
        {
          hid: 'fb:app_id',
          property: 'fb:app_id',
          content: config.FACEBOOK_APPID,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            "Give and get stuff for free in your local community.  Don't just recycle - reuse, freecycle and freegle!",
        },
        {
          hid: 'fb:app_id',
          property: 'og:site_name',
          content: config.FACEBOOK_APPID,
        },

        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: "Freegle - Don't throw it away, give it away!",
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content:
            "Give and get stuff for free in your local community.  Don't just recycle - reuse, freecycle and freegle!",
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: config.USER_SITE + '/icon.png',
        },
        {
          hid: 'twitter:image:alt',
          name: 'twitter:image:alt',
          content: 'The Freegle logo',
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        { hid: 'twitter:site', name: 'twitter:site', content: 'thisisfreegle' },
      ],
    },
  },
})
