import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Timeline from '../views/Timeline.vue'
import Login from "../views/Login.vue"
import Profile from "../views/Profile.vue"
import Interactions from "../views/Interactions.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Timeline',
    component: Timeline
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/interactions',
    name: 'Login',
    component: Interactions
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
