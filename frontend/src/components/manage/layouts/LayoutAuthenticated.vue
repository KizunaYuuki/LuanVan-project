<template>
    <div class="overflow-hidden lg:overflow-visible">
        <div
            class="xl:pl-60 ml-60 lg:ml-0 min-h-screen w-screen transition-position lg:w-auto">
            <nav class="flex lg:items-stretch xl:mx-auto sticky top-0 bg-white z-[41] shadow-md shadow-[#0096fa2e]">
                <div class="flex flex-1 items-stretch h-14 xl:pl-[76px]">
                    <div
                        class="flex my-2 mx-3 navbar-item-label items-center cursor-pointer">
                        <div class="relative">
                            <input placeholder="Tìm kiếm" type="text"
                                class="px-4 shadow-inner shadow-[#0096fa2e] py-2 max-w-full border hover:border-gray-400 outline-none rounded w-full bg-transparent">
                        </div>
                    </div>
                </div>

                <div
                    class="xl:pr-[76px] max-h-screen-menu overflow-y-auto lg:overflow-visible absolute w-screen top-14 left-0 bg-gray-50 shadow-lg lg:w-auto lg:flex lg:static lg:shadow-none hidden">
                    <div
                        class="block lg:flex items-center relative cursor-pointer navbar-item-label lg:py-2 lg:px-3">
                        <div
                            class="flex items-center bg-gray-100 lg:bg-transparent p-3 lg:p-0">
                            <div class="w-6 h-6 mr-3 inline-flex">
                                <img :src="user.picture" alt="Profile" class="profile__avatar w-[24px] h-[24px]" />
                            </div>

                            <span class="px-2 transition-colors">{{ user.name }}</span>
                        </div>
                    </div>
                </div>
            </nav>

            <aside id="aside"
                class="lg:py-2 lg:pl-2 w-60 fixed flex z-40 top-0 h-screen transition-position overflow-hidden left-0 lg:hidden xl:flex">
                <div class="aside lg:rounded-2xl flex-1 flex flex-col overflow-hidden">
                    <div
                        class="hover:text-[#0096fa] hover:bg-slate-300 aside-brand flex flex-row items-center justify-between bg-gray-500 text-white">
                        <RouterLink aria-current="page" to="/management"
                            class="router-link-active router-link-exact-active flex cursor-pointer py-3 aside-menu-item">
                            <span
                                class="inline-flex justify-center items-center w-16 h-6 flex-none aside-menu-item-active font-bold">
                                <svg viewBox="0 0 24 24" width="18" height="18" class="inline-block">
                                    <path fill="currentColor"
                                        d="M21,16H3V4H21M21,2H3C1.89,2 1,2.89 1,4V16A2,2 0 0,0 3,18H10V20H8V22H16V20H14V18H21A2,2 0 0,0 23,16V4C23,2.89 22.1,2 21,2Z">
                                    </path>
                                </svg>
                            </span>
                            <span
                                class="grow text-ellipsis line-clamp-1 pr-12 aside-menu-item-active font-bold">Dashboard</span>
                        </RouterLink>
                    </div>

                    <!-- link -->
                    <div
                        class="flex-1 overflow-y-auto overflow-x-hidden aside-scrollbars text-[#000000cc] bg-white">
                        <ul>
                            <li class="hover:text-[#0096fa] hover:bg-slate-100">
                                <RouterLink to="/management/order"
                                    class="flex cursor-pointer py-3 aside-menu-item">
                                    <span class="inline-flex justify-center items-center w-16 h-6 flex-none">
                                        <svg viewBox="0 0 24 24" width="18" height="18" class="inline-block">
                                            <path fill="currentColor"
                                                d="M5,4H19A2,2 0 0,1 21,6V18A2,2 0 0,1 19,20H5A2,2 0 0,1 3,18V6A2,2 0 0,1 5,4M5,8V12H11V8H5M13,8V12H19V8H13M5,14V18H11V14H5M13,14V18H19V14H13Z">
                                            </path>
                                        </svg>
                                    </span>
                                    <span class="grow text-ellipsis line-clamp-1 pr-12">
                                        Đơn hàng</span>
                                </RouterLink>
                            </li>

                            <li class="hover:text-[#0096fa] hover:bg-slate-100">
                                <RouterLink to="/management/service"
                                    class="flex cursor-pointer py-3 aside-menu-item">
                                    <span class="inline-flex justify-center items-center w-16 h-6 flex-none">
                                        <svg viewBox="0 0 24 24" width="18" height="18" class="inline-block">
                                            <path fill="currentColor"
                                                d="M5,3C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19H5V5H12V3H5M17.78,4C17.61,4 17.43,4.07 17.3,4.2L16.08,5.41L18.58,7.91L19.8,6.7C20.06,6.44 20.06,6 19.8,5.75L18.25,4.2C18.12,4.07 17.95,4 17.78,4M15.37,6.12L8,13.5V16H10.5L17.87,8.62L15.37,6.12Z">
                                            </path>
                                        </svg>
                                    </span>
                                    <span class="grow text-ellipsis line-clamp-1 pr-12">
                                        Dịch vụ</span>
                                </RouterLink>
                            </li>

                            <li class="hover:text-[#0096fa] hover:bg-slate-100">
                                <RouterLink to="/management/promotion"
                                    class="flex cursor-pointer py-3 aside-menu-item">
                                    <span class="inline-flex justify-center items-center w-16 h-6 flex-none">
                                        <svg viewBox="0 0 24 24" width="18" height="18" class="inline-block">
                                            <path fill="currentColor"
                                                d="M21,17V5H3V17H21M21,3A2,2 0 0,1 23,5V17A2,2 0 0,1 21,19H16V21H8V19H3A2,2 0 0,1 1,17V5A2,2 0 0,1 3,3H21M5,7H11V11H5V7M5,13H11V15H5V13M13,7H19V9H13V7M13,11H19V15H13V11Z">
                                            </path>
                                        </svg>
                                    </span>
                                    <span class="grow text-ellipsis line-clamp-1 pr-12">Khuyến mãi</span>
                                </RouterLink>
                            </li>

                            <li class="hover:text-[#0096fa] hover:bg-slate-100">
                                <RouterLink to="/management/user"
                                    class="flex cursor-pointer py-3 aside-menu-item">
                                    <span class="inline-flex justify-center items-center w-16 h-6 flex-none">
                                        <svg width="18" height="18" viewBox="0 0 48 48" fill="currentColor"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path class="fill-current"
                                                d="M8.94 15.057a8.057 8.057 0 1116.114 0 8.057 8.057 0 01-16.114 0z"
                                                fill="var(--identicons-color-dark, #686868)"></path>
                                            <path class="fill-current"
                                                d="M6.554 28.554A8.718 8.718 0 0112.72 26h8.554a8.718 8.718 0 018.72 8.72v1.738a3.496 3.496 0 01-3.495 3.495H7.495A3.496 3.496 0 014 36.458V34.72c0-2.312.918-4.531 2.554-6.167z"
                                                fill="var(--identicons-color-light, #D7D7D7)"></path>
                                            <path class="fill-current"
                                                d="M43.737 20.255a1.953 1.953 0 00-1.744-.972l-.002-.007a1.486 1.486 0 01-1.288-2.26l-.006-.007c.014-.021.03-.042.042-.066a1.95 1.95 0 00-3.37-1.963c-.015.024-.026.05-.038.073l-.01-.002a1.488 1.488 0 01-2.584.019c-.005-.007-.007-.014-.012-.024-.005 0-.01.003-.012.003-.014-.026-.023-.05-.037-.076a1.95 1.95 0 00-2.665-.71 1.95 1.95 0 00-.748 2.589c.021.03.04.058.059.089a1.488 1.488 0 01-1.248 2.234v.002c-.026-.002-.052-.005-.08-.005a1.95 1.95 0 00-.037 3.898l.077-.002v.002a1.489 1.489 0 011.292 2.276l.003.002-.043.064a1.95 1.95 0 003.37 1.963c.013-.021.022-.043.034-.064h.002a1.488 1.488 0 012.596-.04c.01.014.017.03.024.045h.005a1.95 1.95 0 103.373-1.947l.002-.002a1.485 1.485 0 011.273-2.186c0-.003 0-.003.002-.005a1.949 1.949 0 001.77-2.921zm-5.983 1.932a2.006 2.006 0 11-3.465-2.02 2.006 2.006 0 013.465 2.02z"
                                                fill="var(--identicons-color-base, #B9B9B9)">
                                            </path>
                                        </svg>
                                    </span>
                                    <span class="grow text-ellipsis line-clamp-1 pr-12">Người dùng</span>
                                </RouterLink>
                            </li>
                        </ul>
                    </div>

                    <!-- Logout -->
                    <ul>
                        <li>
                            <button @click="handleLogout"
                                class="w-full flex cursor-pointer py-3 bg-[#0096fa] hover:bg-[#0096fad6] text-white hover:border-blue-700">
                                <span class="inline-flex justify-center items-center w-16 h-6 flex-none">
                                    <svg viewBox="0 0 24 24" width="18" height="18" class="inline-block">
                                        <path fill="currentColor"
                                            d="M16,17V14H9V10H16V7L21,12L16,17M14,2A2,2 0 0,1 16,4V6H14V4H5V20H14V18H16V20A2,2 0 0,1 14,22H5A2,2 0 0,1 3,20V4A2,2 0 0,1 5,2H14Z">
                                        </path>
                                    </svg>
                                </span>
                                <span class="grow text-ellipsis line-clamp-1 pr-12">Logout</span>
                            </button>
                        </li>
                    </ul>
                </div>
            </aside>

            <!-- Content -->
            <section class="p-6 xl:max-w-6xl xl:mx-auto">
                <slot></slot>
            </section>
        </div>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { useAuth0 } from "@auth0/auth0-vue";

// get the information user
const { user } = useAuth0();

const { logout } = useAuth0();

const handleLogout = () =>
    logout({
        logoutParams: {
            returnTo: window.location.origin,
        }
    });
</script>