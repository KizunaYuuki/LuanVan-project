<template>
    <div class="overflow-hidden lg:overflow-visible">
        <nav class="flex lg:items-stretch shadow-md shadow-[#0096fa2e]">
            <!-- NAV AND INPUT -->
            <div class="flex flex-1 items-stretch h-16">
                <div class="flex my-2 mx-3 navbar-item-label items-center text-2xl">
                    <button @click="open = !open"
                        class="text-[#0096fa] hover:text-white hover:bg-[#4e4e4e] rounded-full w-10 h-10 flex justify-center items-center mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                    <RouterLink to="/" class="flex cursor-pointer py-3 aside-menu-item text-[#0096fa] hover:text-[#7a7a7a]">
                        <span class="grow text-ellipsis line-clamp-1 aside-menu-item-active font-bold">BestChoice</span>
                    </RouterLink>
                    <!-- <div class="relative">
                        <input placeholder="Tìm kiếm" type="text"
                            class="px-4 shadow-inner shadow-[#0096fa2e] py-1 max-w-full border hover:border-gray-400 outline-none rounded w-full bg-transparent">
                    </div> -->
                </div>
            </div>
            <!-- ICON -->
            <!-- <div
                class="xl:pr-[76px] max-h-screen-menu overflow-y-auto lg:overflow-visible absolute w-screen top-14 left-0 shadow-lg lg:w-auto lg:flex lg:static lg:shadow-none hidden">
                <div class="block lg:flex items-center relative navbar-item-label lg:py-2 lg:px-3">
                    <div class="flex items-center lg:bg-transparent p-3 lg:p-0">
                        <div class="w-6 h-6 mr-3 inline-flex">
                            <img :src="user.picture" alt="Profile" class="profile__avatar w-[24px] h-[24px]" />
                        </div>
                        <span class="px-2 font-[600] text-[18px] transition-colors">{{ user.name }}</span>
                    </div>
                </div>
            </div> -->
        </nav>

        <div class="z-1 transition-position lg:w-auto">
            <TransitionRoot as="template" :show="open">
                <Dialog as="div" class="relative z-10" @close="open = false">
                    <TransitionChild as="template" enter="ease-in-out duration-500" enter-from="opacity-0"
                        enter-to="opacity-100" leave="ease-in-out duration-500" leave-from="opacity-100"
                        leave-to="opacity-0">
                        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </TransitionChild>

                    <div class="fixed inset-0 overflow-hidden">
                        <div class="absolute inset-0 overflow-hidden">
                            <div class="pointer-events-none fixed inset-y-0 left-0 flex max-w-full">
                                <TransitionChild as="template"
                                    enter="transform transition ease-in-out duration-500 sm:duration-700"
                                    enter-from="-translate-x-full" enter-to="translate-x-0"
                                    leave="transform transition ease-in-out duration-500 sm:duration-700"
                                    leave-from="translate-x-0" leave-to="-translate-x-full">
                                    <DialogPanel class="pointer-events-auto relative w-screen max-w-[16rem]">
                                        <TransitionChild as="template" enter="ease-in-out duration-500"
                                            enter-from="opacity-0" enter-to="opacity-100" leave="ease-in-out duration-500"
                                            leave-from="opacity-100" leave-to="opacity-0">
                                            <div class="absolute -right-20 top-0 flex pr-2 pt-4 sm:pr-4">
                                                <button type="button"
                                                    class="relative rounded-md text-gray-100 hover:text-gray-600 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-white"
                                                    @click="open = false">
                                                    <span class="absolute -inset-2.5" />
                                                    <span class="sr-only">Close panel</span>
                                                    <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                                                </button>
                                            </div>
                                        </TransitionChild>
                                        <div class="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                                            <div class="px-4 sm:px-6">
                                                <DialogTitle class="text-base font-semibold leading-6 text-gray-900">Panel title</DialogTitle>
                                            </div>
                                            <div class="relative mt-6 flex-1 px-4 sm:px-6">
                                                <!-- Your content -->
                                                <aside id="aside" ref="side"
                                                    class="w-64 fixed flex z-[41] top-0 h-screen transition-position overflow-hidden left-0 xl:flex border-r border-r-[#383838]">
                                                    <div class="aside flex-1 flex flex-col overflow-hidden bg-[#191919]">
                                                        <div
                                                            class="aside-brand flex flex-row items-center text-center h-16 mx-3 text-2xl">
                                                            <button @click="open = !open"
                                                                class="text-[#0096fa] hover:text-white hover:bg-[#4e4e4e] rounded-full w-10 h-10 flex justify-center items-center mr-4">
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                                    viewBox="0 0 24 24" stroke-width="1.5"
                                                                    stroke="currentColor" class="w-6 h-6">
                                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                                                </svg>
                                                            </button>
                                                            <RouterLink to="/"
                                                                class="flex cursor-pointer py-3 aside-menu-item text-[#0096fa] hover:text-[#7a7a7a]">
                                                                <span
                                                                    class="grow text-ellipsis line-clamp-1 aside-menu-item-active font-bold">BestChoice</span>
                                                            </RouterLink>
                                                        </div>
                                                        <!-- link -->
                                                        <div
                                                            class="flex-1 overflow-y-auto overflow-x-hidden aside-scrollbars text-[#4e4e4e] bg-[#191919] font-extrabold border-t border-[#383838] mx-3">
                                                            <ul>
                                                                <li class="rounded-md text-[#7a7a7a]">
                                                                    <span class="grow text-ellipsis line-clamp-1 py-4">
                                                                        Menu</span>
                                                                </li>

                                                                <li class="hover:text-white hover:bg-white/5 rounded-md">
                                                                    <RouterLink to="/management"
                                                                        class="flex cursor-pointer py-3 aside-menu-item">
                                                                        <span
                                                                            class="inline-flex justify-center items-center w-10 h-6 flex-none aside-menu-item-active font-bold">
                                                                            <svg viewBox="0 0 24 24" width="18" height="18"
                                                                                class="inline-block">
                                                                                <path fill="currentColor"
                                                                                    d="M21,16H3V4H21M21,2H3C1.89,2 1,2.89 1,4V16A2,2 0 0,0 3,18H10V20H8V22H16V20H14V18H21A2,2 0 0,0 23,16V4C23,2.89 22.1,2 21,2Z">
                                                                                </path>
                                                                            </svg>
                                                                        </span>
                                                                        <span class="grow text-ellipsis line-clamp-1">
                                                                            Dashboard</span>
                                                                    </RouterLink>
                                                                </li>

                                                                <li class="hover:text-white hover:bg-white/5 rounded-md">
                                                                    <RouterLink to="/management/order"
                                                                        class="flex cursor-pointer py-3 aside-menu-item">
                                                                        <span
                                                                            class="inline-flex justify-center items-center w-10 h-6 flex-none">
                                                                            <svg viewBox="0 0 24 24" width="18" height="18"
                                                                                class="inline-block">
                                                                                <path fill="currentColor"
                                                                                    d="M5,4H19A2,2 0 0,1 21,6V18A2,2 0 0,1 19,20H5A2,2 0 0,1 3,18V6A2,2 0 0,1 5,4M5,8V12H11V8H5M13,8V12H19V8H13M5,14V18H11V14H5M13,14V18H19V14H13Z">
                                                                                </path>
                                                                            </svg>
                                                                        </span>
                                                                        <span class="grow text-ellipsis line-clamp-1">
                                                                            Đơn hàng</span>
                                                                    </RouterLink>
                                                                </li>

                                                                <li class="hover:text-white hover:bg-white/5 rounded-md">
                                                                    <RouterLink to="/management/service"
                                                                        class="flex cursor-pointer py-3 aside-menu-item">
                                                                        <span
                                                                            class="inline-flex justify-center items-center w-10 h-6 flex-none">
                                                                            <svg viewBox="0 0 24 24" width="18" height="18"
                                                                                class="inline-block">
                                                                                <path fill="currentColor"
                                                                                    d="M5,3C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19H5V5H12V3H5M17.78,4C17.61,4 17.43,4.07 17.3,4.2L16.08,5.41L18.58,7.91L19.8,6.7C20.06,6.44 20.06,6 19.8,5.75L18.25,4.2C18.12,4.07 17.95,4 17.78,4M15.37,6.12L8,13.5V16H10.5L17.87,8.62L15.37,6.12Z">
                                                                                </path>
                                                                            </svg>
                                                                        </span>
                                                                        <span class="grow text-ellipsis line-clamp-1">
                                                                            Dịch vụ</span>
                                                                    </RouterLink>
                                                                </li>

                                                                <li class="hover:text-white hover:bg-white/5 rounded-md">
                                                                    <RouterLink to="/management/promotion"
                                                                        class="flex cursor-pointer py-3 aside-menu-item">
                                                                        <span
                                                                            class="inline-flex justify-center items-center w-10 h-6 flex-none">
                                                                            <svg viewBox="0 0 24 24" width="18" height="18"
                                                                                class="inline-block">
                                                                                <path fill="currentColor"
                                                                                    d="M21,17V5H3V17H21M21,3A2,2 0 0,1 23,5V17A2,2 0 0,1 21,19H16V21H8V19H3A2,2 0 0,1 1,17V5A2,2 0 0,1 3,3H21M5,7H11V11H5V7M5,13H11V15H5V13M13,7H19V9H13V7M13,11H19V15H13V11Z">
                                                                                </path>
                                                                            </svg>
                                                                        </span>
                                                                        <span class="grow text-ellipsis line-clamp-1">Khuyến
                                                                            mãi</span>
                                                                    </RouterLink>
                                                                </li>

                                                                <li class="hover:text-white hover:bg-white/5 rounded-md">
                                                                    <RouterLink to="/management/user"
                                                                        class="flex cursor-pointer py-3 aside-menu-item">
                                                                        <span
                                                                            class="inline-flex justify-center items-center w-10 h-6 flex-none">
                                                                            <svg width="18" height="18" viewBox="0 0 48 48"
                                                                                fill="currentColor"
                                                                                xmlns="http://www.w3.org/2000/svg">
                                                                                <path class="fill-current"
                                                                                    d="M8.94 15.057a8.057 8.057 0 1116.114 0 8.057 8.057 0 01-16.114 0z"
                                                                                    fill="var(--identicons-color-dark, #686868)">
                                                                                </path>
                                                                                <path class="fill-current"
                                                                                    d="M6.554 28.554A8.718 8.718 0 0112.72 26h8.554a8.718 8.718 0 018.72 8.72v1.738a3.496 3.496 0 01-3.495 3.495H7.495A3.496 3.496 0 014 36.458V34.72c0-2.312.918-4.531 2.554-6.167z"
                                                                                    fill="var(--identicons-color-light, #D7D7D7)">
                                                                                </path>
                                                                                <path class="fill-current"
                                                                                    d="M43.737 20.255a1.953 1.953 0 00-1.744-.972l-.002-.007a1.486 1.486 0 01-1.288-2.26l-.006-.007c.014-.021.03-.042.042-.066a1.95 1.95 0 00-3.37-1.963c-.015.024-.026.05-.038.073l-.01-.002a1.488 1.488 0 01-2.584.019c-.005-.007-.007-.014-.012-.024-.005 0-.01.003-.012.003-.014-.026-.023-.05-.037-.076a1.95 1.95 0 00-2.665-.71 1.95 1.95 0 00-.748 2.589c.021.03.04.058.059.089a1.488 1.488 0 01-1.248 2.234v.002c-.026-.002-.052-.005-.08-.005a1.95 1.95 0 00-.037 3.898l.077-.002v.002a1.489 1.489 0 011.292 2.276l.003.002-.043.064a1.95 1.95 0 003.37 1.963c.013-.021.022-.043.034-.064h.002a1.488 1.488 0 012.596-.04c.01.014.017.03.024.045h.005a1.95 1.95 0 103.373-1.947l.002-.002a1.485 1.485 0 011.273-2.186c0-.003 0-.003.002-.005a1.949 1.949 0 001.77-2.921zm-5.983 1.932a2.006 2.006 0 11-3.465-2.02 2.006 2.006 0 013.465 2.02z"
                                                                                    fill="var(--identicons-color-base, #B9B9B9)">
                                                                                </path>
                                                                            </svg>
                                                                        </span>
                                                                        <span class="grow text-ellipsis line-clamp-1">Người
                                                                            dùng</span>
                                                                    </RouterLink>
                                                                </li>

                                                                <li class="hover:text-white hover:bg-white/5 rounded-md">
                                                                    <RouterLink to="/management/provider"
                                                                        class="flex cursor-pointer py-3 aside-menu-item">
                                                                        <span
                                                                            class="inline-flex justify-center items-center w-10 h-6 flex-none">
                                                                            <svg width="18" height="18"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                fill="none" viewBox="0 0 24 24"
                                                                                stroke-width="1.5" stroke="currentColor">
                                                                                <path stroke-linecap="round"
                                                                                    stroke-linejoin="round"
                                                                                    d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
                                                                            </svg>
                                                                        </span>
                                                                        <span class="grow text-ellipsis line-clamp-1">Nhà
                                                                            cung cấp</span>
                                                                    </RouterLink>
                                                                </li>

                                                                <li class="hover:text-white hover:bg-white/5 rounded-md">
                                                                    <RouterLink to="/management/service-type"
                                                                        class="flex cursor-pointer py-3 aside-menu-item">
                                                                        <span
                                                                            class="inline-flex justify-center items-center w-10 h-6 flex-none">
                                                                            <svg width="18" height="18"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                fill="none" viewBox="0 0 24 24"
                                                                                stroke-width="1.5" stroke="currentColor">
                                                                                <path stroke-linecap="round"
                                                                                    stroke-linejoin="round"
                                                                                    d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                                                            </svg>
                                                                        </span>
                                                                        <span class="grow text-ellipsis line-clamp-1">Loại
                                                                            dịch vụ</span>
                                                                    </RouterLink>
                                                                </li>

                                                                <li class="hover:text-white hover:bg-white/5 rounded-md">
                                                                    <RouterLink to="/management/price-list"
                                                                        class="flex cursor-pointer py-3 aside-menu-item">
                                                                        <span
                                                                            class="inline-flex justify-center items-center w-10 h-6 flex-none">
                                                                            <svg width="18" height="18"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                fill="none" viewBox="0 0 24 24"
                                                                                stroke-width="1.5" stroke="currentColor">
                                                                                <path stroke-linecap="round"
                                                                                    stroke-linejoin="round"
                                                                                    d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0112 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5" />
                                                                            </svg>
                                                                        </span>
                                                                        <span class="grow text-ellipsis line-clamp-1">Bảng
                                                                            giá</span>
                                                                    </RouterLink>
                                                                </li>
                                                            </ul>
                                                        </div>

                                                        <!-- Logout -->
                                                        <ul class="text-sm">
                                                            <li>
                                                                <div
                                                                    class="block lg:flex items-center relative navbar-item-label lg:py-2 lg:px-3 border-b border-[#383838]">
                                                                    <div class="lg:bg-transparent p-3 lg:p-0">
                                                                        <div class="text-[#7a7a7a]">
                                                                            Đăng nhập bởi
                                                                        </div>
                                                                        <div class="font-[500] text-white">{{ user.email }}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>

                                                            <li>
                                                                <button @click="handleLogout"
                                                                    class="w-full flex cursor-pointer px-3 py-5 text-[#7a7a7a] font-semibold hover:text-white">
                                                                    <span class="text-ellipsis line-clamp-1 mr-3">Đăng xuất</span>
                                                                    <span
                                                                        class="inline-flex justify-center items-center h-6">
                                                                        <svg viewBox="0 0 24 24" width="18" height="18"
                                                                            class="inline-block">
                                                                            <path fill="currentColor"
                                                                                d="M16,17V14H9V10H16V7L21,12L16,17M14,2A2,2 0 0,1 16,4V6H14V4H5V20H14V18H16V20A2,2 0 0,1 14,22H5A2,2 0 0,1 3,20V4A2,2 0 0,1 5,2H14Z">
                                                                            </path>
                                                                        </svg>
                                                                    </span>
                                                                </button>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </aside>
                                            </div>
                                        </div>
                                    </DialogPanel>
                                </TransitionChild>
                            </div>
                        </div>
                    </div>
                </Dialog>
            </TransitionRoot>

            <!-- Content -->
            <section class="p-6 xl:max-w-6xl xl:mx-auto">
                <slot></slot>
            </section>
        </div>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { useAuth0 } from "@auth0/auth0-vue";
import { ref } from 'vue';
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue';
import { XMarkIcon } from '@heroicons/vue/24/outline';
// VARIABLE
const open = ref(false);
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