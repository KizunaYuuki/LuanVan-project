<template>
    <header class="bg-white z-[9998] shadow-[#0096fa18] shadow-md xl:p-0 px-4">
        <!-- PC -->
        <nav class="mx-auto flex max-w-6xl items-center justify-between py-[4px]" aria-label="Global">
            <div class="flex lg:flex-1">
                <RouterLink to="/"
                    class="lg:p-0 p-[10px] text-[1.25rem] font-[700] tracking-[.125rem] text-[#0096fa] subpixel-antialiased hover:underline hover:underline-offset-[2px]">
                    BestChoice
                </RouterLink>
            </div>
            <div class="flex lg:hidden">
                <button type="button" class="inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    @click="mobileMenuOpen = true">
                    <span class="sr-only">Open main menu</span>
                    <Bars3Icon class="h-6 w-6" aria-hidden="true" />
                </button>
            </div>
            <PopoverGroup class="hidden lg:flex lg:gap-x-12 items-center">
                <RouterLink to="/profile"
                    class="text-[.95rem] font-semibold leading-6 text-[#0096fa] hover:bg-slate-100 p-2 rounded-md"
                    title="Quản lý đơn hàng của bạn">Thông tin tài khoản</RouterLink>
                <RouterLink to="/track"
                    class="text-[.94rem] font-semibold leading-6 text-[#0096fa] hover:bg-slate-100 p-2 rounded-md"
                    title="Quản lý đơn hàng của bạn">Theo dõi đơn hàng</RouterLink>
            </PopoverGroup>
            <div class="hidden lg:flex lg:flex-1 lg:justify-end">
                <template v-if="!isAuthenticated">
                    <SignupButton class="mr-[16px]" />
                    <LoginButton />
                </template>
                <template v-if="isAuthenticated">
                    <div class="flex items-center">
                        <button
                            class="group flex items-center p-2 mr-[4px] hover:scale-[1.03] transition-all duration-[0.3s] ease-in-out delay-[0ms]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                            </svg>
                            <span class="sr-only">NOCITE</span>
                        </button>
                        <!-- Cart -->
                        <button @click="cartOpen = true"
                            class="group flex items-center p-2 mr-[4px] hover:scale-[1.03] transition-all duration-[0.3s] ease-in-out delay-[0ms]">
                            <svg class="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500" fill="none"
                                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z">
                                </path>
                            </svg>
                            <span v-if="carts" class="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800"> {{
                                carts.length }} </span>
                            <span class="sr-only">items in cart, view bag</span>
                        </button>
                        <div>
                            <!-- Profile dropdown -->
                            <Menu as="div" class="relative mx-3">
                                <div>
                                    <MenuButton
                                        class="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500">
                                        <span class="absolute -inset-1.5" />
                                        <span class="sr-only">Open user menu</span>
                                        <img class="h-8 w-8 rounded-full" :src="user.picture" alt="" />
                                    </MenuButton>
                                </div>
                                <transition enter-active-class="transition ease-out duration-100"
                                    enter-from-class="transform opacity-0 scale-95"
                                    enter-to-class="transform opacity-100 scale-100"
                                    leave-active-class="transition ease-in duration-75"
                                    leave-from-class="transform opacity-100 scale-100"
                                    leave-to-class="transform opacity-0 scale-95">
                                    <MenuItems
                                        class="absolute right-0 z-10 mt-2 w-52 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <MenuItem v-slot="{ active }">
                                        <RouterLink to="/profile"
                                            :class="[active ? 'bg-sky-400 text-white' : 'text-gray-900', 'px-4 py-2 mx-1 text-sm text-gray-700 rounded-md flex items-center']">
                                            <span class="mr-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                            </span>
                                            <span>Thông tin cá nhân</span>
                                        </RouterLink>
                                        </MenuItem>
                                        <MenuItem v-slot="{ active }">
                                        <RouterLink to="/#"
                                            :class="[active ? 'bg-sky-400 text-white' : 'text-gray-900', 'px-4 py-2 mx-1 text-sm text-gray-700 rounded-md flex items-center']">
                                            <span class="mr-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
                                                </svg>
                                            </span>
                                            <span>Cài đặt</span>
                                        </RouterLink>
                                        </MenuItem>
                                        <MenuItem v-slot="{ active }">
                                        <a @click.prevent="handleLogout"
                                            :class="[active ? 'bg-sky-400 text-white' : 'text-gray-900', 'px-4 py-2 mx-1 text-sm text-gray-700 rounded-md flex items-center']">
                                            <span class="mr-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                                                </svg>
                                            </span>
                                            <span>Đăng xuất</span>
                                        </a>
                                        </MenuItem>
                                    </MenuItems>
                                </transition>
                            </Menu>
                        </div>
                        <!-- <LogoutButton /> -->
                    </div>
                </template>
            </div>
        </nav>
        <!-- Mobile -->
        <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
            <div class="fixed inset-0 z-10" />
            <DialogPanel
                class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div class="flex items-center justify-between">
                    <RouterLink to="/"
                        class="text-lg font-semibold text-[#0097f9] subpixel-antialiased hover:underline hover:underline-offset-[2px]">
                        <span class="sr-only">BestChoice</span>
                        BestChoice
                    </RouterLink>
                    <button type="button" class="rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
                        <span class="sr-only">Close menu</span>
                        <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div class="mt-6 flow-root">
                    <div class="-my-6 divide-y divide-gray-500/10">
                        <div class="space-y-2 py-6">
                            <RouterLink to="/profile"
                                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                title="Thông tin tài khoản">Thông tin tài khoản</RouterLink>
                            <RouterLink to="/track"
                                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                title="Theo dõi đơn hàng">Theo dõi đơn hàng</RouterLink>
                            <template v-if="isAuthenticated">
                                <button @click="cartOpen = true"
                                    class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                    Giỏ hàng
                                </button>
                            </template>
                        </div>
                        <div class="py-6">
                            <template v-if="!isAuthenticated">
                                <button @click="handleLogin"
                                    class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Đăng
                                    nhập</button>
                            </template>
                            <template v-if="isAuthenticated">
                                <button @click="handleLogout"
                                    class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Đăng
                                    xuất</button>
                            </template>
                        </div>
                    </div>
                </div>
            </DialogPanel>
        </Dialog>
    </header>

    <!-- Shopping Carts - Slide-over -->
    <TransitionRoot class="z-[9999]" as="template" :show="cartOpen">
        <Dialog as="div" class="relative z-10" @close="cartOpen = false">
            <TransitionChild as="template" enter="ease-in-out duration-500" enter-from="opacity-0" enter-to="opacity-100"
                leave="ease-in-out duration-500" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </TransitionChild>

            <div class="fixed inset-0 overflow-hidden">
                <div class="absolute inset-0 overflow-hidden">
                    <div class="pointer-events-none fixed inset-y-0 right-0 flex pl-10">
                        <TransitionChild as="template" enter="transform transition ease-in-out duration-500 sm:duration-700"
                            enter-from="translate-x-full" enter-to="translate-x-0"
                            leave="transform transition ease-in-out duration-500 sm:duration-700" leave-from="translate-x-0"
                            leave-to="translate-x-full">
                            <DialogPanel class="pointer-events-auto w-screen max-w-md">
                                <div class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                                    <div class="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                                        <div class="flex items-start justify-between">
                                            <DialogTitle class="text-lg font-medium text-gray-900">Giỏ hàng
                                            </DialogTitle>
                                            <div class="ml-3 flex h-7 items-center">
                                                <button type="button" class="relative p-2 text-gray-400 hover:text-gray-500"
                                                    @click="cartOpen = false">
                                                    <span class="absolute -inset-0.5" />
                                                    <span class="sr-only">Close panel</span>
                                                    <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                                                </button>
                                            </div>
                                        </div>
                                        <!-- CART CONTENT -->
                                        <div v-show="carts.length !== 0" class="mt-8">
                                            <div class="flow-root">
                                                <ul role="list" class="-my-6 divide-y divide-gray-200">
                                                    <li v-for="cart in carts" :key="cart.id">
                                                        <RouterLink :to="{
                                                            name: 'Service Details',
                                                            params: { id: cart.service_id },
                                                        }" class="flex py-6">
                                                            <div
                                                                class="flex items-center h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                                <img :src="cart.image"
                                                                    class="w-full flex-shrink-0 bg-[#607d8b]" />
                                                            </div>

                                                            <div class="ml-4 flex flex-1 flex-col">
                                                                <div>
                                                                    <div
                                                                        class="flex justify-between text-base font-medium text-gray-900">
                                                                        <h3>
                                                                            <a :href="cart.href">{{ cart.service_name }}</a>
                                                                        </h3>
                                                                        <p class="ml-4">{{
                                                                            (cart.service_price).toLocaleString('vi-VN',
                                                                                {
                                                                                    style: 'currency',
                                                                                    currency: 'VND'
                                                                                }) }}</p>
                                                                    </div>
                                                                    <p class="mt-1 text-sm text-gray-500">{{
                                                                        cart.provider_name
                                                                    }}</p>
                                                                </div>
                                                                <div class="flex flex-1 items-end justify-between text-sm">
                                                                    <!-- <p class="text-gray-500">Qty {{ cart.quantity }}</p> -->

                                                                    <div class="flex">
                                                                        <button
                                                                            @click.prevent="deteleCartAxios(cart.cart_id)"
                                                                            type="button"
                                                                            class="font-medium text-[#0096fab7] hover:text-[#0096fa]">Xoá</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </RouterLink>

                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <!-- NO SERVICE IN CART -->
                                        <div v-show="carts.length === 0"
                                            class="bg-white text-gray-500 flex items-center content-center justify-center rounded-md my-8 text-lg">
                                            <div class="font-[600]">
                                                <h1 class=" text-gray-500">
                                                    Chưa có dịch vụ nào trong Giỏ hàng
                                                </h1>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- <div class="border-t border-gray-200 px-4 py-6 sm:px-6">
                                        <div class="flex justify-between text-base font-medium text-gray-900">
                                            <p>Subtotal</p>
                                            <p>$262.00</p>
                                        </div>
                                        <p class="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.
                                        </p>
                                        <div class="mt-6">
                                            <a href="#"
                                                class="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Checkout</a>
                                        </div>
                                        <div class="mt-6 flex justify-center text-center text-sm text-gray-500">
                                            <p>
                                                or
                                                <button type="button"
                                                    class="font-medium text-indigo-600 hover:text-indigo-500"
                                                    @click="cartOpen = false">
                                                    Continue Shopping
                                                    <span aria-hidden="true"> &rarr;</span>
                                                </button>
                                            </p>
                                        </div>
                                    </div> -->
                                </div>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import LoginButton from "@/components/buttons/login-button.vue";
import LogoutButton from "@/components/buttons/logout-button.vue";
import SignupButton from "@/components/buttons/signup-button.vue";
import { useAuth0 } from "@auth0/auth0-vue";
import { onMounted, ref, watch } from 'vue'
import {
    Dialog,
    DialogPanel,
    DialogTitle,
    Disclosure,
    TransitionChild,
    TransitionRoot,
    DisclosureButton,
    DisclosurePanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    Menu, MenuButton, MenuItem, MenuItems
} from '@headlessui/vue'
import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
} from '@heroicons/vue/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/vue/20/solid';
import { getUserByEmail } from "@/services/user.service";
import { getCartsByUserId, deteleCart } from "@/services/cart.service";
// Login
const { loginWithRedirect } = useAuth0();
const handleLogin = () => {
    loginWithRedirect({
        appState: {
            // target: window.location.pathname,
            target: "/management",
        },
    });
};

const { logout } = useAuth0();

const handleLogout = () =>
    logout({
        logoutParams: {
            returnTo: window.location.origin,
        }
    });

const props = defineProps({
    addToCart: {}
})
// San pham trong gio hang
const cartProducts = [
    {
        id: 1,
        name: 'Throwback Hip Bag',
        href: '#',
        color: 'Salmon',
        price: '$90.00',
        quantity: 1,
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-cart-01.jpg',
        imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
    },
    {
        id: 2,
        name: 'Medium Stuff Satchel',
        href: '#',
        color: 'Blue',
        price: '$32.00',
        quantity: 1,
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-cart-02.jpg',
        imageAlt:
            'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
    },
    // More products...
]
// Trạng thái đóng mở Giỏ hàng
const cartOpen = ref(false);

// Xác thực người dùng đã đăng nhập chưa 
const { isAuthenticated } = useAuth0();

// Danh sách sản phẩm
const products = [
    { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
    { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
    { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
    { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
    { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]
const callsToAction = [
    { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
    { name: 'Contact sales', href: '#', icon: PhoneIcon },
]
// variables
const user_id = ref();
const carts = ref();

const mobileMenuOpen = ref(false)
// get the information user
const { user } = useAuth0();
const { isLoading } = useAuth0();
// get the token
const { getAccessTokenSilently } = useAuth0();

const getUserByEmailAxios = async (user) => {
    // edit data
    const userData = {
        email: user.value?.email
    }

    const accessToken = await getAccessTokenSilently();
    const { data, error } = await getUserByEmail(accessToken, userData);


    if (data) {
        user_id.value = data.id;
        getCartsByUserIdAxios(data.id);
        // console.log(data);
        // console.log(user_id.value);
    }

    if (error) {
        // console.log(error.message);
    }
};

const getCartsByUserIdAxios = async (user_id) => {
    const accessToken = await getAccessTokenSilently();
    const { data, error } = await getCartsByUserId(accessToken, user_id);

    if (data) {
        carts.value = data;
        // console.log(data);
    }

    if (error) {
        // console.log(error.message);
    }
};

const deteleCartAxios = async (cart_id) => {
    const accessToken = await getAccessTokenSilently();
    const { data, error } = await deteleCart(accessToken, cart_id);

    if (data) {
        // console.log(data);
        // edit cart data
        carts.value = carts.value.filter((element) => element.cart_id !== cart_id);
    }

    if (error) {
        // console.log(error.message);
    }
};
// run function
onMounted(() => {
    if (isLoading && isAuthenticated && user.value?.name) {
        getUserByEmailAxios(user);
    }
})
watch(props?.addToCart, async () => {
    await getUserByEmailAxios(user);
})
</script>