import homePage from '../pages/Home.vue'
import notFoundPage from '../pages/NotFound.vue'

require('dotenv').config()

const { VUE_APP_DOMAIN_TITLE } = process.env

export const routes = [
  {
    path: '/',
    name: 'index',
    component: homePage,
    meta: { title: `${VUE_APP_DOMAIN_TITLE}` }
  },
  {
    path: '/feedback-wtt-client/',
    name: 'index',
    component: homePage,
    meta: { title: `${VUE_APP_DOMAIN_TITLE}` }
  },
  {
    path: '/feedback-wtt-client/:userId',
    name: 'index',
    component: homePage,
    meta: { title: `${VUE_APP_DOMAIN_TITLE}` }
  },
  {
    path: '/:userId',
    name: 'index',
    component: homePage,
    meta: { title: `${VUE_APP_DOMAIN_TITLE}` }
  },
  {
    path: '*',
    component: notFoundPage,
    meta: { title: `${VUE_APP_DOMAIN_TITLE} | not found` }
  }
]
