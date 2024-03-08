import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import cabinRulesPage from '../views/cabinRulesPage.vue'
import airtypes from '../views/airtypes.vue'
import Rules from '@/views/Rules.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/cabinrules',
      name: 'cabinrules',
      component: cabinRulesPage
    },
    ,
    {
      path: '/airtypes',
      name: 'airtypes',
      component: airtypes
    },
    {
      path: '/Rules',
      name: 'Rules',
      component: Rules
    }
  ]
})

export default router
