import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue"
import Signup from "../views/Signup.vue"
import Dashboard from "../views/Dashboard.vue";
import userStore from "../stores/user.js"

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: "/",
            component: Login,
            name: Login,
        },
        {
            path: "/signup",
            component: Signup,
            name: Signup,
        },
        {
            path: "/dashboard",
            component: Dashboard,
            name:Dashboard,
            meta: { requiresAuth: true }

        }
    ],
});
router.beforeEach((to) => {
    const store = userStore()
  
    if (to.meta.requiresAuth && !store.user) return '/'
  })
export default router;