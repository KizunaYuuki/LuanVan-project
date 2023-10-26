<template>
    <Header></Header>
    <main>
        <div v-show="orders" class="py-[2.5rem]">
            <div class="mx-auto lg:max-w-[1024px]">
                <div class="">
                    <!-- Title -->
                    <div class="flex items-center xl:p-0 p-2">
                        <div class="flex-auto">
                            <h1 class="text-[#111827] font-[600] sm:text-[2rem] text-xl leading-[3rem]">Đơn hàng</h1>
                            <p class="text-[#374151] text-[15px] leading-[1.25rem] mt-[.5rem]">Hiển thị danh sách tất
                                cả
                                đơn hàng của bạn</p>
                        </div>
                        <div class="min-[640px]:flex-none min-[640px]:mt-0 min-[640px]:ml-[4rem] mt-[1rem]">
                            <!-- <button type="button"
                                class="text-[#fff] font-[600] text-[.875rem] leading-[1.25rem] text-center py-[.5rem] px-[.75rem] bg-[#0096fa] rounded-[.375rem]">Xuất
                                đơn hàng</button> -->
                        </div>
                    </div>

                    <!-- Filter -->
                    <div class="flex justify-end xl:p-0 p-2">
                        <div class="min-[640px]:flex-none min-[640px]:mt-0 min-[640px]:ml-[4rem] mt-[1rem]">
                            <Menu as="div" class="relative inline-block text-left">
                                <div>
                                    <MenuButton
                                        class="inline-flex w-full justify-center gap-x-1.5 text-sm text-gray-900 shadow-sm bg-white hover:bg-gray-50 font-[600] text-[.875rem] leading-[1.25rem] text-center py-[.5rem] px-[.75rem] rounded-[.375rem]">
                                        Tuỳ chọn
                                        <ChevronDownIcon class="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                                    </MenuButton>
                                </div>

                                <transition enter-active-class="transition duration-100 ease-out"
                                    enter-from-class="transform scale-95 opacity-0"
                                    enter-to-class="transform scale-100 opacity-100"
                                    leave-active-class="transition duration-75 ease-in"
                                    leave-from-class="transform scale-100 opacity-100"
                                    leave-to-class="transform scale-95 opacity-0">
                                    <MenuItems
                                        class="z-[1] absolute right-0 mt-2 w-44 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <div class="px-1 py-1">
                                            <MenuItem v-slot="{ active }">
                                            <button @click="Nofilter()" :class="[
                                                active ? 'bg-sky-400 text-white' : 'text-gray-900',
                                                'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                                            ]">
                                                <div class="mr-2 h-5 w-2 text-violet-400"></div>
                                                Tất cả
                                            </button>
                                            </MenuItem>
                                        </div>

                                        <div class="px-1 py-1">
                                            <MenuItem v-slot="{ active }">
                                            <button @click="DaDangKyfilter()" :class="[
                                                active ? 'bg-sky-400 text-white' : 'text-gray-900',
                                                'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                                            ]">
                                                <div class="mr-2 h-5 w-2 text-violet-400"></div>
                                                Đã đăng ký
                                            </button>
                                            </MenuItem>

                                            <MenuItem v-slot="{ active }">
                                            <button @click="HuyBofilter()" :class="[
                                                active ? 'bg-sky-400 text-white' : 'text-gray-900',
                                                'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                                            ]">
                                                <div class="mr-2 h-5 w-2 text-violet-400"></div>
                                                Huỷ bỏ
                                            </button>
                                            </MenuItem>

                                            <MenuItem v-slot="{ active }">
                                            <button @click="HoanThanhfilter()" :class="[
                                                active ? 'bg-sky-400 text-white' : 'text-gray-900',
                                                'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                                            ]">
                                                <div class="mr-2 h-5 w-2 text-violet-400"></div>
                                                Hoàn thành
                                            </button>
                                            </MenuItem>

                                            <MenuItem v-slot="{ active }">
                                            <button @click="DaXacNhanfilter()" :class="[
                                                active ? 'bg-sky-400 text-white' : 'text-gray-900',
                                                'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                                            ]">
                                                <div class="mr-2 h-5 w-2 text-violet-400"></div>
                                                Đã xác nhận
                                            </button>
                                            </MenuItem>
                                        </div>
                                    </MenuItems>
                                </transition>
                            </Menu>
                        </div>
                    </div>

                    <!-- Content -->
                    <div class="sm:block hidden">
                        <div v-show="orders.length !== 0" class="mt-[1rem] flow-root">
                            <div class="">
                                <div class="align-middle min-w-[100%] inline-block">
                                    <table
                                        class="min-w-[100%] indent-0 border-collapse bg-[#edeff6] border-x border-[#d3e2fd]">
                                        <thead>
                                            <tr class="border-b-[4px] border-[white] text-slate-500 hover:text-[#5080db]">
                                                <th scope="col"
                                                    class="pl-[1rem] text-[#111827] font-[600] text-[.875rem] leading-[1.25rem] text-left pr-[.75rem] py-[.875rem]">
                                                    Mã Đơn hàng</th>
                                                <th scope="col"
                                                    class="min-[640px]:pl-0 text-[#111827] font-[600] text-[.875rem] leading-[1.25rem] text-left px-[.75rem] py-[.875rem]">
                                                    Email</th>
                                                <th scope="col"
                                                    class="min-[640px]:pl-0 text-[#111827] font-[600] text-[.875rem] leading-[1.25rem] text-left px-[.75rem] py-[.875rem]">
                                                    Số điện thoại liên hệ</th>
                                                <th scope="col"
                                                    class="min-[640px]:pl-0 text-[#111827] font-[600] text-[.875rem] leading-[1.25rem] text-left px-[.75rem] py-[.875rem]">
                                                    Ngày tạo</th>
                                                <th scope="col"
                                                    class="min-[640px]:pl-0 text-[#111827] font-[600] text-[.875rem] leading-[1.25rem] text-left px-[.75rem] py-[.875rem]">
                                                    Giá đơn hàng</th>
                                                <th scope="col"
                                                    class="min-[640px]:pl-0 text-[#111827] font-[600] text-[.875rem] leading-[1.25rem] text-left px-[.75rem] py-[.875rem]">
                                                    Trạng thái đơn hàng</th>
                                                <th scope="col"
                                                    class="min-[640px]:pl-0 text-[#111827] font-[600] text-[.875rem] leading-[1.25rem] text-left py-[.875rem] relative">
                                                    <span class="sr-only">Xoá</span>
                                                </th>
                                            </tr>
                                        </thead>

                                        <tbody class="">
                                            <tr v-for="order in orders" :key="order.order_id"
                                                class="mx-[4px] bg-white border-b-[4px] border-[white] hover:bg-[#e1e3e9] text-slate-500 hover:text-[#5080db]">
                                                <td
                                                    class="pl-[1rem] font-[500] text-[.875rem] leading-[1.25rem] pr-[.75rem] py-[1rem] whitespace-nowrap">
                                                    {{ order.order_id }}</td>
                                                <td
                                                    class="font-[500] text-[.875rem] leading-[1.25rem] pr-[.75rem] py-[1rem] whitespace-nowrap">
                                                    {{ order.email }}</td>
                                                <td
                                                    class="font-[500] text-[.875rem] leading-[1.25rem] pr-[.75rem] py-[1rem] whitespace-nowrap">
                                                    {{ order.phone }}</td>
                                                <td
                                                    class="font-[500] text-[.875rem] leading-[1.25rem] pr-[.75rem] py-[1rem] whitespace-nowrap">
                                                    {{ format(new Date(order.order_created), 'MM/dd/yyyy') }}</td>
                                                <td
                                                    class="font-[600] text-[.875rem] leading-[1.25rem] pr-[.75rem] py-[1rem] whitespace-nowrap">
                                                    {{ order.total_amount }}</td>
                                                <td
                                                    class="font-[500] text-[.875rem] leading-[1.25rem] pr-[.75rem] py-[1rem] whitespace-nowrap">
                                                    {{ order.status_name }}</td>
                                                <td
                                                    class="min-[640px]:pr-0 font-[500] text-[.875rem] leading-[1.25rem] text-right pr-[1rem] py-[1rem] whitespace-nowrap relative">
                                                    <Menu as="div" class="relative inline-block text-left">
                                                        <div>
                                                            <MenuButton
                                                                class="inline-flex w-full justify-center gap-x-1.5 rounded-full px-3 py-3 text-sm font-semibold hover:shadow-sm">
                                                                <svg width="24" height="24"
                                                                    class="fill-current hover:text-white text-[#70757a] cursor-pointer"
                                                                    focusable="false" xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 24 24">
                                                                    <path
                                                                        d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z">
                                                                    </path>
                                                                </svg>
                                                            </MenuButton>
                                                        </div>

                                                        <transition enter-active-class="transition duration-100 ease-out"
                                                            enter-from-class="transform scale-95 opacity-0"
                                                            enter-to-class="transform scale-100 opacity-100"
                                                            leave-active-class="transition duration-75 ease-in"
                                                            leave-from-class="transform scale-100 opacity-100"
                                                            leave-to-class="transform scale-95 opacity-0">
                                                            <MenuItems
                                                                class="z-[1] absolute right-[-1px] -mt-2 w-32 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                                <div class="px-1 py-1">
                                                                    <MenuItem v-show="order.status_name === 'Đã đăng ký'"
                                                                        v-slot="{ active }">
                                                                    <button @click="cancelOrderAxios(order.order_id)"
                                                                        :class="[
                                                                            active ? 'bg-sky-400 text-white' : 'text-gray-900',
                                                                            'group flex justify-center w-full items-center rounded-md px-2 py-2 text-sm',
                                                                        ]">
                                                                        <!-- <div class="mr-2 h-5 w-2 text-violet-400"></div> -->
                                                                        Huỷ đơn hàng
                                                                    </button>
                                                                    </MenuItem>

                                                                    <MenuItem v-slot="{ active }">
                                                                    <button @click="deteleOrderAxios(order.order_id)"
                                                                        :class="[
                                                                            active ? 'bg-sky-400 text-white' : 'text-gray-900',
                                                                            'group flex justify-center w-full items-center rounded-md px-2 py-2 text-sm',
                                                                        ]">
                                                                        <!-- <div class="mr-2 h-5 w-2 text-violet-400"></div> -->
                                                                        Xoá đơn hàng
                                                                    </button>
                                                                    </MenuItem>
                                                                </div>
                                                            </MenuItems>
                                                        </transition>
                                                    </Menu>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div v-show="orders.length === 0"
                            class="bg-white w-[1024px] max-h-full h-[420px] text-gray-500 flex items-center content-center justify-center mt-8 rounded-md">
                            <div class="text-[32px] font-[600]">
                                <h1 class=" text-gray-500">Chưa có đơn hàng nào</h1>
                            </div>
                        </div>
                    </div>

                    <div class="sm:hidden mt-4 rounded-md">
                        <div class="grid grid-cols-2 gap-x-1" v-show="orders.length !== 0">
                            <template v-for="order in orders" :key="order.order_id">
                                <div class="overflow-auto bg-white p-2">
                                    <div class="flex items-center justify-between mt-2 text-lg">
                                        <div class="py-2 font-semibold">
                                            <div>
                                                ID: <span>{{ order.order_id }}</span>
                                            </div>
                                        </div>

                                        <div class="py-2 font-medium text-gray-600">
                                            <div>
                                                <span>{{ order.total_amount.toLocaleString('vi-VN', {
                                                    style: 'currency',
                                                    currency: 'VND'
                                                }) }}</span>
                                            </div>
                                        </div>
                                    </div>


                                    <div class="py-2 font-medium text-gray-600 text-sm">
                                        <div class="flex items-center">
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>


                                            </span>
                                            <span class="ml-2">{{ order.status_name }}</span>
                                        </div>
                                    </div>

                                    <div class="py-2 font-medium text-gray-600 text-sm">
                                        <div class="flex items-center">
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>

                                            </span>
                                            <span class="ml-2">{{ order.payments_name }}</span>
                                        </div>
                                    </div>
                                </div>
                            </template>
                        </div>

                        <div v-show="orders.length === 0"
                            class="bg-white h-40 text-gray-500 flex items-center content-center justify-center rounded-md m-4">
                            <div class="font-[600]">
                                <h1 class=" text-gray-500">Chưa có đơn hàng nào</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>
import { ChevronDownIcon } from '@heroicons/vue/20/solid'
import Header from '../components/Header.vue';
import { onMounted, ref } from "vue";
import { useAuth0 } from "@auth0/auth0-vue";
import { RouterLink } from 'vue-router'
import { getOrdersByUserId, cancelOrder, deteleOrder } from "@/services/order.service";
import { getUserByEmail, createUser } from "@/services/user.service";
import { format } from "date-fns";
import { vi } from 'date-fns/locale'
import {
    RadioGroup, RadioGroupLabel, RadioGroupOption, Menu, MenuButton, MenuItem, MenuItems,
    Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot
} from '@headlessui/vue'

// variables
const user_id = ref('');
const orders = ref('');
const order_root = ref('');

// get the token
const { getAccessTokenSilently } = useAuth0();

// get the information user
const { user } = useAuth0();

// toast
import { useToast } from "vue-toastification";
// Get toast interface
const toast = useToast();

const getOrdersByUserIdAxios = async (user_id) => {
    const accessToken = await getAccessTokenSilently();
    const { data, error } = await getOrdersByUserId(accessToken, user_id);
    // console.log(user_id);

    if (data) {
        orders.value = data;
        order_root.value = data;
        // console.log(orders.value)
    }

    if (error) {
        // console.log(error)
    }
};

const cancelOrderAxios = async (order_id) => {
    // edit data
    let orderData = {
        status_id: 2
    }

    const accessToken = await getAccessTokenSilently();
    const { data, error } = await cancelOrder(accessToken, orderData, order_id);

    if (data) {
        // console.log(data);
        for (let i = 0; i < orders.value.length; i++) {
            if (orders.value[i].order_id == order_id) {
                orders.value[i].status_name = "Huỷ bỏ";
                order_root.value[i].status_name = "Huỷ bỏ";
            }
        }
        // Thong bao
        toast.success("Đã Huỷ Đơn hàng thành công", { timeout: 3000 });
    }

    if (error) {
        // console.log(error)
    }
};

const deteleOrderAxios = async (order_id) => {
    const accessToken = await getAccessTokenSilently();
    const { data, error } = await deteleOrder(accessToken, order_id);

    if (data) {
        // console.log(data);
        let tempOrders = orders.value;
        let tempOrder_root = order_root.value;
        orders.value = [];
        for (let i = 0; i < tempOrders.length; i++) {
            if (tempOrders[i].order_id !== order_id) {
                orders.value.push(tempOrders[i])
            }
        }

        order_root.value = [];
        for (let i = 0; i < tempOrder_root.length; i++) {
            if (tempOrder_root[i].order_id !== order_id) {
                order_root.value.push(tempOrder_root[i])
            }
        }
        // Thong bao
        toast.success("Đã xoá Đơn hàng thành công", { timeout: 3000 });
    }

    if (error) {
        // console.log(error)
    }
};

const getUserByEmailAxios = async (user) => {
    // edit data
    const userData = {
        email: user.value?.email,
        name: user.value?.name
    }

    const accessToken = await getAccessTokenSilently();
    const { data, error } = await getUserByEmail(accessToken, userData);

    if (data) {
        user_id.value = data.id;
        getOrdersByUserIdAxios(data.id)
        // console.log(data);
    }
    if (error) {
        // console.log(error.message);
    }
};

// filter
const DaDangKyfilter = () => {
    orders.value = [];
    for (let i = 0; i < order_root.value.length; i++) {
        if (order_root.value[i].status_name === 'Đã đăng ký') {
            orders.value.push(order_root.value[i])
        }
    }
};
const HuyBofilter = async () => {
    orders.value = [];
    for (let i = 0; i < order_root.value.length; i++) {
        if (order_root.value[i].status_name === 'Huỷ bỏ') {
            orders.value.push(order_root.value[i])
        }
    }
};
const HoanThanhfilter = async () => {
    orders.value = [];
    for (let i = 0; i < order_root.value.length; i++) {
        if (order_root.value[i].status_name === 'Hoàn thành') {
            orders.value.push(order_root.value[i])
        }
    }
};
const DaXacNhanfilter = async () => {
    orders.value = [];
    for (let i = 0; i < order_root.value.length; i++) {
        if (order_root.value[i].status_name === 'Đã xác nhận') {
            orders.value.push(order_root.value[i])
        }
    }

    // !important not run????????
    // orders.value = order_root.value.filter((element) => {
    //     element.status_name = 'Đã xác nhận';
    // });
};
const Nofilter = async () => {
    orders.value = order_root.value;
};

// run function
getUserByEmailAxios(user)
</script>