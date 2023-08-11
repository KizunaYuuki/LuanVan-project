import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
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
        }
    ]
})

export default router
