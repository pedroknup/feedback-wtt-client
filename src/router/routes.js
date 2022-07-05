import homePage from '../pages/Home.vue'
import notFoundPage from '../pages/NotFound.vue'

import { DOMAIN_TITLE } from '../.env'

export const routes = [
  {
    path: '/',
    name: 'index',
    component: homePage,
    meta: { title: `${DOMAIN_TITLE}` }
  },
  {
    path: '/:userId',
    name: 'index',
    component: homePage,
    meta: { title: `${DOMAIN_TITLE}` }
  },
  {
    path: '*',
    component: notFoundPage,
    meta: { title: `${DOMAIN_TITLE} | not found` }
  }
]
