import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue"
import Signup from "../views/Signup.vue"
import Dashboard from "../views/Dashboard.vue";

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: "/",
            component: Login,
        },
        {
            path: "/signup",
            component: Signup,
        },
        {
            path: "/dashboard",
            component: Dashboard,
        }
    ],
});

export default router;