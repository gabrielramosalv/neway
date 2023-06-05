import {RouteRecordRaw} from "vue-router";
import Timeline from "@/views/Timeline/index.vue";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import Profile from "@/views/Profile/index.vue";
import Interactions from "@/views/Interactions/index.vue";

export enum Paths {
    TIMELINE = "/timeline",
    LOGIN = "/login",
    REGISTER = "/register",
    PROFILE = "/@:username",
    INTERACTIONS = "/interactions"
}

const routes: Array<RouteRecordRaw> = [
    {
        path: Paths.TIMELINE,
        name: 'Timeline',
        component: Timeline
    },
    {
        path: Paths.LOGIN,
        name: 'Login',
        component: Login
    },
    {
        path: Paths.REGISTER,
        name: "Register",
        component: Register
    },
    {
        path: Paths.PROFILE,
        name: 'Profile',
        component: Profile
    },
    {
        path: Paths.INTERACTIONS,
        name: 'Interactions',
        component: Interactions
    }
]

export default routes;
