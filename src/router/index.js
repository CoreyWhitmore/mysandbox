import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Numbers from '../views/Numbers.vue'
import ParabolicTargeting from '../views/ParabolicTargeting.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/numbers',
    name: 'Numbers',
    component: Numbers
  },
  {
    path: '/parabolictargeting',
    name: 'ParabolicTargeting',
    component: ParabolicTargeting
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
