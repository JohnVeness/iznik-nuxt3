// We have some cases where components only get rendered conditionally, e.g. v-if.  The conventional way to handle
// this is to use $nextTick, but we've seen examples where it takes more than one tick to render.
//
// Another approach is to emit events when the component is ready.  But this potentially requires us to ripple the
// event up a component tree, which is quite clunky.
//
// So we have a cheap and cheerful poll timer.

import { useMiscStore } from '~/stores/misc'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.mixin({
    methods: {
      waitForRefTimer(name, resolve) {
        // Wait for no API calls.  This helps with async setup of components.  We think that the ref can exist while
        // the setup() method is still running (asynchronously) and therefore the ref is not really ready yet.
        const api = useMiscStore().apiCount
        if (this.$refs[name] && !api) {
          this.$nextTick(() => {
            this.$nextTick(() => {
              resolve()
            })
          })
        } else {
          setTimeout(() => {
            this.waitForRefTimer(name, resolve)
          }, 100)
        }
      },
      waitForRef(name) {
        // When a component is conditional using a v-if, it sometimes takes more than one tick for it to appear.  So
        // we have a bit of a timer.
        return new Promise((resolve) => {
          this.waitForRefTimer(name, resolve)
        })
      },
    },
  })
})
