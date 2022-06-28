/**
 * import and init global mixins
 */

import Vue from 'vue'

import currentUser from '../mixins/currentUser'
import jumpTo from '../mixins/jumpTo'
import formatDateTime from '../mixins/formatDateTime'
import currentWeekPlan from '../mixins/currentWeekPlan'
import meta from '../mixins/meta'
import finishedMeals from '../mixins/finishedMeals'
import weekProgress from './weekProgress'
import device from './device'

Vue.mixin(currentUser)
Vue.mixin(finishedMeals)
Vue.mixin(device)
Vue.mixin(weekProgress)
Vue.mixin(meta)
Vue.mixin(currentWeekPlan)
Vue.mixin(jumpTo)
Vue.mixin(formatDateTime)
