/**
 * import and init global mixins
 */

import Vue from 'vue'

import currentUser from '../mixins/currentUser'
import jumpTo from '../mixins/jumpTo'
import qa from '../mixins/qa'
import finishedMeals from '../mixins/finishedMeals'
import weekProgress from './weekProgress'
import device from './device'

Vue.mixin(currentUser)
Vue.mixin(finishedMeals)
Vue.mixin(device)
Vue.mixin(weekProgress)
Vue.mixin(qa)
Vue.mixin(jumpTo)
