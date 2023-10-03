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
            path: '/search',
            name: 'Trang tìm kiếm',
            component: () => import('../views/search-page.vue'),
            meta: {
                title: "Trang tìm kiếm",
            }
        },
        {
            path: '/order/services/:service_id',
            name: 'Create Order',
            component: () => import('../views/Order.vue'),
            beforeEnter: authGuard,
            props: true,
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
            component: () => import('../views/order-manage-user.vue'),
            beforeEnter: authGuard,
            meta: {
                title: "Quản lý Đơn hàng",
            }
        },
        {
            path: '/compare',
            name: 'Compare',
            component: () => import('../views/compare-page.vue'),
            meta: {
                title: "So sánh dịch vụ",
            }
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

        // Các trang của Management
        {
            path: '/testing',
            name: 'test',
            component: () => import('../views/manage/ServicePage.vue'),
            beforeEnter: authGuard,
            meta: {
                title: "test",
            }
        },
        {
            path: '/A',
            name: 'A',
            component: () => import('../views/paypay.vue'),
            meta: {
                title: "test",
            }
        },
        {
            path: '/management',
            name: 'Home Page - Management',
            component: () => import('../views/manage/HomeView.vue'),
            meta: {
                title: "Trang chủ - Quản lý",
            }
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
