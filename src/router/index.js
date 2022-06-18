import { createRouter, createWebHistory } from "vue-router";
import Login from '../views/Login.vue';
import Main from '../views/Main.vue'

const routes = [
    {
        path: "/",
        component: Login,
    },
    // {
    //     path: "/register",
    //     component: Register,
    // },
    // {
    //     path: "/profile",
    //     name: "profile",
    //     // lazy-loaded
    //     component: Profile,
    // },
    {
        path: "/admin",
        name: "admin",
        // lazy-loaded
        component: Main,
    },
    // {
    //     path: "/mod",
    //     name: "moderator",
    //     // lazy-loaded
    //     component: BoardModerator,
    // },
    // {
    //     path: "/user",
    //     name: "user",
    //     // lazy-loaded
    //     component: BoardUser,
    // },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    const publicPages = ['/login', '/register', '/home'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem('user');

    // trying to access a restricted page + not logged in
    // redirect to login page
    if (authRequired && !loggedIn) {
        next('/login');
    } else {
        next();
    }
});

export default router;