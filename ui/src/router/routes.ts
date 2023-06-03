import {RouteRecordRaw} from "vue-router";
import Timeline from "@/views/Timeline/index.vue";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import Profile from "@/views/Profile/index.vue";
import Interactions from "@/views/Interactions/index.vue";

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

export default routes;
