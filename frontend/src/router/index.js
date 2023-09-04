import { authGuard } from "@auth0/auth0-vue";
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

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
            name: 'Home',
            component: HomeView,
            meta: {
                title: "Trang chủ",
            }
        },
        {
            path: '/test',
            name: 'test',
            component: HomeView,
            meta: {
                title: "Test",
            }
        },
        {
            path: '/cart',
            name: 'Cart',
            component: () => import('../views/Cart.vue'),
            beforeEnter: authGuard,
            meta: {
                title: "Giỏ hàng",
            }
        },
        {
            path: '/register-service',
            name: 'Register Service',
            component: () => import('../views/RegisterService.vue'),
            beforeEnter: authGuard,
            meta: {
                title: "Đăng ký dịch vụ",
            }
        },
        {
            path: `/services/:id`,
            name: 'Service Details',
            component: () => import('../views/ServiceDetails.vue'),
            props: true,
            meta: {
                title: "Chi tiết dịch vụ",
            }
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/AboutView.vue'),
            meta: {
                title: "Thông tin về chúng tôi",
            }
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
            meta: {
                title: "Quản lý thông tin cá nhân",
            }
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
            meta: {
                title: "Not Found",
            }
        },
    ]
})

// Xử lý title 
router.beforeEach(async (to, from, next) => {
    document.title = to.meta?.title ?? 'Web Application'

    next();
})

export default router
