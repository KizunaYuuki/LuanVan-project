import { authGuard } from "@auth0/auth0-vue";
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HomePage from "@/views/home-page.vue";

const NotFoundPage = () => import("@/views/not-found-page.vue");
const ProfilePage = () => import("@/views/profile-page.vue");
const PublicPage = () => import("@/views/public-page.vue");
const ProtectedPage = () => import("@/views/protected-page.vue");
const AdminPage = () => import("@/views/admin-page.vue");
const CallbackPage = () => import("@/views/callback-page.vue");

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage,
        },
        {
            path: '/homepage',
            name: 'homepage',
            component: HomePage,
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/AboutView.vue')
        },
        {
            path: '/track',
            name: 'track',
            // component: () => import('../views/AboutView.vue')
        },
        {
            path: '/support',
            name: 'support',
            // component: () => import('../views/AboutView.vue')
        },
        {
            path: '/moving',
            name: 'moving',
            // component: () => import('../views/AboutView.vue')
        },
        {
            path: "/profile",
            name: "profile",
            component: ProfilePage,
            beforeEnter: authGuard,
        },
        {
            path: "/public",
            name: "public",
            component: PublicPage,
        },
        {
            path: "/protected",
            name: "protected",
            component: ProtectedPage,
            beforeEnter: authGuard,
        },
        {
            path: "/admin",
            name: "admin",
            component: AdminPage,
            beforeEnter: authGuard,
        },
        {
            path: "/callback",
            name: "callback",
            component: CallbackPage,
        },
        {
            path: "/:catchAll(.*)",
            name: "Not Found",
            component: NotFoundPage,
        },
    ]
})

export default router
