import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import Timeline from '../views/Timeline.vue'
import Login from "../views/Login.vue"
import Profile from "../views/Profile.vue"
import Interactions from "../views/Interactions.vue"
import Register from "@/views/Register.vue";

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
        path: "/register",
        name: "Register",
        component: Register
    },
    {
        path: '/@:username',
        name: 'Profile',
        component: Profile
    },
    {
        path: '/interactions',
        name: 'Interactions',
        component: Interactions
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
