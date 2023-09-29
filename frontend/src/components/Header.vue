<template>
    <header class="bg-white z-[9998]">
        <!-- PC -->
        <nav class="mx-auto flex max-w-[1280px] items-center justify-between p-[16px] lg:px-[32px]" aria-label="Global">
            <div class="flex lg:flex-1">
                <RouterLink to="/"
                    class="min-[1024px]:-m-1.5 p-1.5 text-[1rem] font-[700] tracking-[.125rem] text-[#0097f9] subpixel-antialiased hover:underline hover:underline-offset-[2px]">
                    <span class="sr-only">Freight service</span>
                    Freight service
                </RouterLink>
            </div>
            <div class="flex lg:hidden">
                <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    @click="mobileMenuOpen = true">
                    <span class="sr-only">Open main menu</span>
                    <Bars3Icon class="h-6 w-6" aria-hidden="true" />
                </button>
            </div>
            <PopoverGroup class="hidden lg:flex lg:gap-x-12 items-center">
                <Popover class="relative hidden">
                    <PopoverButton class="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                        Product
                        <ChevronDownIcon class="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                    </PopoverButton>

                    <transition enter-active-class="transition ease-out duration-200"
                        enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0"
                        leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0"
                        leave-to-class="opacity-0 translate-y-1">
                        <PopoverPanel
                            class="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                            <div class="p-4">
                                <div v-for="item in products" :key="item.name"
                                    class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                                    <div
                                        class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                        <component :is="item.icon" class="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                                            aria-hidden="true" />
                                    </div>
                                    <div class="flex-auto">
                                        <a :href="item.href" class="block font-semibold text-gray-900">
                                            {{ item.name }}
                                            <span class="absolute inset-0" />
                                        </a>
                                        <p class="mt-1 text-gray-600">{{ item.description }}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                                <a v-for="item in callsToAction" :key="item.name" :href="item.href"
                                    class="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100">
                                    <component :is="item.icon" class="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                                    {{ item.name }}
                                </a>
                            </div>
                        </PopoverPanel>
                    </transition>
                </Popover>
                <RouterLink to="/track" class="text-sm font-semibold leading-6 text-gray-900"
                    title="Quản lý đơn hàng của bạn">Sản phẩm</RouterLink>
                <RouterLink to="/track" class="text-sm font-semibold leading-6 text-gray-900"
                    title="Quản lý đơn hàng của bạn">Theo dõi</RouterLink>
                <!-- Thanh tìm kiếm -->
                <!-- <div
                    class="bg-white text-sm relative pointer-events-auto flex rounded-[0.5rem] ring-1 ring-slate-900/10 hover:ring-[#0096fa] focus:outline-none shadow-sm">
                    <input
                        class="hidden sm:flex items-center w-72 text-left space-x-3 px-4 h-[32px] focus:outline-none rounded-[0.5rem]"
                        type="text" placeholder="Quick search...">
                    <button class="w-[32px] h-[32px] flex flex-wrap items-center content-center justify-center">
                        <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round"
                            class="flex-none text-slate-300 dark:text-slate-400 hover:text-[#0096fa]" aria-hidden="true">
                            <path d="m19 19-3.5-3.5"></path>
                            <circle cx="11" cy="11" r="6"></circle>
                        </svg>
                    </button>
                </div> -->
            </PopoverGroup>
            <div class="hidden lg:flex lg:flex-1 lg:justify-end">
                <template v-if="!isAuthenticated">
                    <SignupButton class="mr-[16px]" />
                    <LoginButton />
                </template>
                <template v-if="isAuthenticated">
                    <!-- Cart -->
                    <button @click="cartOpen = true"
                        class="group -m-2 flex items-center p-2 mr-[4px] hover:scale-[1.03] transition-all duration-[0.3s] ease-in-out delay-[0ms]">
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
                    <LogoutButton />
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
                        class="-m-1.5 p-1.5 text-[1rem] text-[#0097f9] subpixel-antialiased hover:underline hover:underline-offset-[2px]">
                        <span class="sr-only">Freight service</span>
                        Freight service
                    </RouterLink>
                    <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
                        <span class="sr-only">Close menu</span>
                        <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div class="mt-6 flow-root">
                    <div class="-my-6 divide-y divide-gray-500/10">
                        <div class="space-y-2 py-6">
                            <Disclosure as="div" class="-mx-3" v-slot="{ open }">
                                <DisclosureButton
                                    class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                    Product
                                    <ChevronDownIcon :class="[open ? 'rotate-180' : '', 'h-5 w-5 flex-none']"
                                        aria-hidden="true" />
                                </DisclosureButton>
                                <DisclosurePanel class="mt-2 space-y-2">
                                    <DisclosureButton v-for="item in [...products, ...callsToAction]" :key="item.name"
                                        as="a" :href="item.href"
                                        class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                        {{ item.name }}</DisclosureButton>
                                </DisclosurePanel>
                            </Disclosure>
                            <RouterLink to="/track"
                                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                title="Quản lý đơn hàng của bạn">Theo dõi</RouterLink>
                            <template v-if="isAuthenticated">
                                <button @click="cartOpen = true"
                                    class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                    Giỏ hàng
                                </button>
                            </template>
                            <!-- Thanh tìm kiếm -->
                            <!-- <div
                                class="bg-white text-sm relative pointer-events-auto flex justify-between rounded-[0.5rem] ring-1 ring-slate-900/10 hover:ring-[#0096fa] focus:outline-none shadow-sm">
                                <input
                                    class="flex items-center w-72 text-left space-x-3 px-4 h-[32px] focus:outline-none rounded-[0.5rem]"
                                    type="text" placeholder="Quick search...">
                                <button class="w-[32px] h-[32px] flex flex-wrap items-center content-center justify-center">
                                    <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round"
                                        class="flex-none text-slate-300 dark:text-slate-400 hover:text-[#0096fa]"
                                        aria-hidden="true">
                                        <path d="m19 19-3.5-3.5"></path>
                                        <circle cx="11" cy="11" r="6"></circle>
                                    </svg>
                                </button>
                            </div> -->
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
                                                <button type="button"
                                                    class="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                                                    @click="cartOpen = false">
                                                    <span class="absolute -inset-0.5" />
                                                    <span class="sr-only">Close panel</span>
                                                    <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                                                </button>
                                            </div>
                                        </div>

                                        <div class="mt-8">
                                            <div class="flow-root">
                                                <ul role="list" class="-my-6 divide-y divide-gray-200">
                                                    <li v-for="cart in carts" :key="cart.id">
                                                        <RouterLink :to="{
                                                            name: 'Service Details',
                                                            params: { id: cart.service_id },
                                                        }"  class="flex py-6">
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
                                                                        <button @click.prevent="deteleCartAxios(cart.cart_id)"
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
import { ref } from 'vue'
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
            target: window.location.pathname,
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
        console.log(data);
        console.log(user_id.value);
    }

    if (error) {
        console.log(error.message);
    }
};

const getCartsByUserIdAxios = async (user_id) => {
    const accessToken = await getAccessTokenSilently();
    const { data, error } = await getCartsByUserId(accessToken, user_id);

    if (data) {
        carts.value = data;
        console.log(data);
    }

    if (error) {
        console.log(error.message);
    }
};

const deteleCartAxios = async (cart_id) => {
    const accessToken = await getAccessTokenSilently();
    const { data, error } = await deteleCart(accessToken, cart_id);

    if (data) {
        console.log(data);
        // edit cart data
        carts.value = carts.value.filter((element) => element.cart_id !== cart_id);
    }

    if (error) {
        console.log(error.message);
    }
};
// run function
getUserByEmailAxios(user)
</script>