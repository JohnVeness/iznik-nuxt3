import { useRoute } from 'vue-router'

export function buildHead(title, description, image = null, bodyAttrs = {}) {
  const runtimeConfig = useRuntimeConfig()

  const meta = [
    {
      hid: 'description',
      name: 'description',
      content: description,
    },
    { hid: 'og:title', property: 'og:title', content: title },
    {
      hid: 'og:description',
      property: 'og:description',
      content: description,
    },

    {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: title,
    },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content: description,
    },
  ]

  const retImage = image || runtimeConfig.public.USER_SITE + '/icon.png'

  meta.push({
    hid: 'og:image',
    property: 'og:image',
    content: retImage,
  })

  const route = useRoute()

  meta.push({
    hid: 'og:url',
    property: 'og:url',
    content: runtimeConfig.public.USER_SITE + route.fullPath,
  })

  meta.push({
    hid: 'twitter:image',
    property: 'twitter:image',
    content: retImage,
  })

  meta.push({ name: 'msapplication-TileColor', content: '#ffffff' })
  meta.push({
    name: 'msapplication-TileImage',
    content: '/icons/mstile-144x144.png',
  })
  meta.push({
    name: 'msapplication-config',
    content: '/icons/browserconfig.xml',
  })
  meta.push({ name: 'theme-color', content: '#ffffff' })

  return {
    title,
    meta,
    link: [
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/icons/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/icons/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/icons/favicon-16x16.png',
      },
      { href: '/icons/safari-pinned-tab.svg', color: '#5bbad5' },
      { rel: 'shortcut icon', href: '/icons/favicon.ico' },
    ],
  }
}
