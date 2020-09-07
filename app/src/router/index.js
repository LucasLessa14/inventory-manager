import Vue from 'vue'
import VueRouter from 'vue-router'
import Components from '../views/Components.vue'
import Categories from '../views/Categories.vue'
import Compartments from '../views/Compartments.vue'
import Schedule from '../views/Schedule.vue'
import Borrow from '../views/Borrow.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/components',
      name: 'Components',
      component: Components
    },
    {
      path: '/categories',
      name: 'Categories',
      component: Categories
    },
    {
      path: '/compartments',
      name: 'Compartments',
      component: Compartments
    },
    {
      path: '/borrow',
      name: 'Borrow',
      component: Borrow
    },
    {
      path: '/cchedule',
      name: 'Schedule',
      component: Schedule
    }
  ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
