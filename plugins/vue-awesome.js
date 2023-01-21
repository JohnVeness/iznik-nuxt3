// We list the icons we use explicitly because this reduces our bundle size.

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faAddressBook,
  faArrowCircleLeft,
  faArrowCircleRight,
  faAngleDoubleDown,
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faArrowLeft,
  faBan,
  faBars,
  faBell,
  faBicycle,
  faBookOpen,
  faBriefcase,
  faBullhorn,
  faCamera,
  faCar,
  faCaretUp,
  faCaretDown,
  faChartBar,
  faCheck,
  faCheckCircle,
  faChevronCircleDown,
  faChevronCircleUp,
  faCircle,
  faClipboard,
  faClock,
  faCoffee,
  faCog,
  faComment,
  faComments,
  faCalendarAlt,
  faCrown,
  faEnvelope,
  faExclamationTriangle,
  faEye,
  faFrown,
  faGavel,
  faGift,
  faGlobeEurope,
  faHandHoldingHeart,
  faHandsHelping,
  faHandshake,
  faHashtag,
  faHeart,
  faHome,
  faInfoCircle,
  faLeaf,
  faLink,
  faLock,
  faLockOpen,
  faMapMarkerAlt,
  faMeh,
  faMinus,
  faPen,
  faPlus,
  faQuestionCircle,
  faReply,
  faSave,
  faSearch,
  faShareAlt,
  faShoppingCart,
  faSignOutAlt,
  faSmile,
  faSpinner,
  faSync,
  faThumbsDown,
  faThumbsUp,
  faTimesCircle,
  faTrashAlt,
  faTrophy,
  faUser,
  faUsers,
  faWalking,
} from '@fortawesome/free-solid-svg-icons'

import {
  faFacebook,
  faTwitter,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons'

library.add(
  faAddressBook,
  faArrowLeft,
  faArrowCircleRight,
  faArrowCircleLeft,
  faArrowCircleRight,
  faAngleDoubleDown,
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faBan,
  faBars,
  faBell,
  faBicycle,
  faBookOpen,
  faBriefcase,
  faBullhorn,
  faCamera,
  faCar,
  faCaretUp,
  faCaretDown,
  faChartBar,
  faCheckCircle,
  faCheck,
  faChevronCircleDown,
  faChevronCircleUp,
  faCircle,
  faClipboard,
  faClock,
  faCog,
  faCoffee,
  faComment,
  faComments,
  faCalendarAlt,
  faCrown,
  faEnvelope,
  faExclamationTriangle,
  faEye,
  faFrown,
  faGavel,
  faGift,
  faGlobeEurope,
  faHandHoldingHeart,
  faHandsHelping,
  faHandshake,
  faHashtag,
  faHeart,
  faHome,
  faInfoCircle,
  faLeaf,
  faLink,
  faLock,
  faLockOpen,
  faMapMarkerAlt,
  faMeh,
  faMinus,
  faPen,
  faPlus,
  faQuestionCircle,
  faReply,
  faSave,
  faSearch,
  faShareAlt,
  faShoppingCart,
  faSignOutAlt,
  faSmile,
  faSpinner,
  faSync,
  faThumbsDown,
  faThumbsUp,
  faTimesCircle,
  faTrashAlt,
  faTrophy,
  faUser,
  faUsers,
  faWalking,
  faFacebook,
  faTwitter,
  faWhatsapp
)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('VIcon', FontAwesomeIcon)
})
