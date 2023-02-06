import path from 'path-browserify'
import eslintPlugin from 'vite-plugin-eslint'
import legacy from '@vitejs/plugin-legacy'
import config from './config'

export default {
  debug: true,

  // Make the ~ and @ aliases work in Vite as per https://github.com/vitejs/vite/issues/382.
  resolve: {
    alias: [
      {
        find: /~(.+)/,
        replacement: path.join(process.cwd(), 'node_modules/$1'),
      },
      {
        find: /@\//,
        replacement: path.join(process.cwd(), './src/renderer') + '/',
      },
    ],
  },

  plugins: [
    // Make Lint errors cause build failures.
    // CC eslintPlugin(),
    /*legacy({ // CC Do not use this as it generates System.register which is not defined
      targets: ['> 0.5%, last 2 versions, Firefox ESR, not dead'],
    }),*/
  ],

  server: {
    proxy: {
      '/apiv1': {
        target: config.APIv1,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/apiv1/, '/'),
      },
      '/apiv2': {
        target: config.APIv2,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/apiv2/, '/'),
      },
    },
  },
}
