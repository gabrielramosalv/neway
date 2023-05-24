import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Timeline from '../views/Timeline.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Timeline',
    component: Timeline
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
