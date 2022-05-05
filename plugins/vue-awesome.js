// We list the icons we use explicitly because this reduces our bundle size.
// import 'vue-awesome/icons/address-book'
// import 'vue-awesome/icons/arrow-left'
// import 'vue-awesome/icons/arrow-circle-left'
// import 'vue-awesome/icons/arrow-circle-right'
// import 'vue-awesome/icons/angle-double-left'
// import 'vue-awesome/icons/angle-double-right'
// import 'vue-awesome/icons/angle-double-down'
// import 'vue-awesome/icons/baby-carriage'
// import 'vue-awesome/icons/balance-scale-left'
// import 'vue-awesome/icons/ban'
// import 'vue-awesome/icons/bars'
// import 'vue-awesome/icons/bath'
// import 'vue-awesome/icons/bed'
// import 'vue-awesome/icons/bell'
// import 'vue-awesome/icons/binoculars'
// import 'vue-awesome/icons/bicycle'
// import 'vue-awesome/icons/book-open'
// import 'vue-awesome/icons/briefcase'
// import 'vue-awesome/icons/bullhorn'
// import 'vue-awesome/icons/calculator'
// import 'vue-awesome/icons/calendar-alt'
// import 'vue-awesome/icons/camera'
// import 'vue-awesome/icons/car'
// import 'vue-awesome/icons/caret-down'
// import 'vue-awesome/icons/caret-up'
// import 'vue-awesome/icons/chart-bar'
// import 'vue-awesome/icons/check'
// import 'vue-awesome/icons/check-circle'
// import 'vue-awesome/icons/chevron-circle-right'
// import 'vue-awesome/icons/chevron-circle-up'
// import 'vue-awesome/icons/chevron-down'
// import 'vue-awesome/icons/circle'
// import 'vue-awesome/icons/cog'
// import 'vue-awesome/icons/copy'
// import 'vue-awesome/icons/clock'
// import 'vue-awesome/icons/cloud'
// import 'vue-awesome/icons/coffee'
// import 'vue-awesome/icons/comment'
// import 'vue-awesome/icons/comments'
// import 'vue-awesome/icons/crown'
// import 'vue-awesome/icons/download'
// import 'vue-awesome/icons/envelope'
// import 'vue-awesome/icons/equals'
// import 'vue-awesome/icons/eraser'
// import 'vue-awesome/icons/exclamation-triangle'
// import 'vue-awesome/icons/eye'
// import 'vue-awesome/icons/frown'
// import 'vue-awesome/icons/gavel'
// import 'vue-awesome/icons/globe-europe'
// import 'vue-awesome/icons/glass-martini'
// import 'vue-awesome/icons/hammer'
// import 'vue-awesome/icons/hand-paper'
// import 'vue-awesome/icons/hand-holding-heart'
// import 'vue-awesome/icons/handshake'
// import 'vue-awesome/icons/hands-helping'
// import 'vue-awesome/icons/hashtag'
// import 'vue-awesome/icons/hat-wizard'
// import 'vue-awesome/icons/headphones'
// import 'vue-awesome/icons/heart'
// import 'vue-awesome/icons/home'
// import 'vue-awesome/icons/info-circle'
// import 'vue-awesome/icons/laptop'
// import 'vue-awesome/icons/link'
// import 'vue-awesome/icons/list'
// import 'vue-awesome/icons/lock'
// import 'vue-awesome/icons/lock-open'
// import 'vue-awesome/icons/meh'
// import 'vue-awesome/icons/map-marker-alt'
// import 'vue-awesome/icons/map-marked-alt'
// import 'vue-awesome/icons/mobile-alt'
// import 'vue-awesome/icons/minus'
// import 'vue-awesome/icons/pause'
// import 'vue-awesome/icons/pen'
// import 'vue-awesome/icons/play'
// import 'vue-awesome/icons/plus'
// import 'vue-awesome/icons/print'
// import 'vue-awesome/icons/question-circle'
// import 'vue-awesome/icons/reply'
// import 'vue-awesome/icons/save'
// import 'vue-awesome/icons/share-alt'
// import 'vue-awesome/icons/shopping-cart'
// import 'vue-awesome/icons/sign-out-alt'
// import 'vue-awesome/icons/slash'
// import 'vue-awesome/icons/smile'
// import 'vue-awesome/icons/sms'
// import 'vue-awesome/icons/socks'
// import 'vue-awesome/icons/star'
// import 'vue-awesome/icons/sync'
// import 'vue-awesome/icons/tag'
// import 'vue-awesome/icons/tablet-alt'
// import 'vue-awesome/icons/th-list'
// import 'vue-awesome/icons/thumbs-down'
// import 'vue-awesome/icons/thumbs-up'
// import 'vue-awesome/icons/times'
// import 'vue-awesome/icons/times-circle'
// import 'vue-awesome/icons/truck'
// import 'vue-awesome/icons/tv'
// import 'vue-awesome/icons/umbrella'
// import 'vue-awesome/icons/user'
// import 'vue-awesome/icons/users'
// import 'vue-awesome/icons/utensils'
// import 'vue-awesome/icons/walking'
// import 'vue-awesome/icons/window-maximize'
// import 'vue-awesome/icons/window-restore'
//
// import 'vue-awesome/icons/brands/discourse'
// import 'vue-awesome/icons/brands/facebook'
// import 'vue-awesome/icons/brands/google-plus'
// import 'vue-awesome/icons/brands/pinterest'
// import 'vue-awesome/icons/brands/skype'
// import 'vue-awesome/icons/brands/telegram'
// import 'vue-awesome/icons/brands/twitter'
// import 'vue-awesome/icons/brands/whatsapp'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faArrowLeft,
  faBars,
  faBullhorn,
  faCamera,
  faCoffee,
  faCog,
  faCalendarAlt,
  faCrown,
  faEye,
  faGift,
  faHandsHelping,
  faHashtag,
  faHome,
  faLeaf,
  faLink,
  faPlus,
  faQuestionCircle,
  faSearch,
  faShoppingCart,
  faSignOutAlt,
  faSpinner,
  faTrashAlt,
  faUser,
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faArrowLeft,
  faBars,
  faBullhorn,
  faCamera,
  faCoffee,
  faCog,
  faCalendarAlt,
  faCrown,
  faEye,
  faGift,
  faHandsHelping,
  faHashtag,
  faHome,
  faLeaf,
  faLink,
  faPlus,
  faQuestionCircle,
  faSearch,
  faShoppingCart,
  faSignOutAlt,
  faSpinner,
  faTrashAlt,
  faUser
)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('VIcon', FontAwesomeIcon)
})
