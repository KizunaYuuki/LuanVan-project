<template>
    <LayoutAuthenticated>
        <PageLoader v-show="!orders" />

        <div v-show="orders">
            <div class="mx-auto lg:max-w-[1024px]">
                <div class="">
                    <!-- Title -->
                    <div class="flex items-center">
                        <div class="flex-auto">
                            <h1 class="text-[#111827] leading-[3rem] font-[600] text-[1.5rem]">Đơn hàng</h1>
                            <p class="text-[#374151] text-[.875rem] leading-[1.25rem]">Hiển thị danh sách tất
                                cả
                                đơn hàng</p>
                        </div>
                        <div
                            class="min-[640px]:flex-none min-[640px]:mt-0 min-[640px]:ml-[4rem] mt-[1rem] flex items-center">
                            <button icon="pi pi-external-link" @click="exportCSV($event)"
                                class="mr-4 inline-flex justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border cursor-pointer rounded border-white ring-gray-200 bg-white text-black hover:bg-gray-100 px-3 py-1">
                                Export
                            </button>

                            <button @click="updateOrder()"
                                class="inline-flex justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border cursor-pointer rounded border-white ring-gray-200 bg-white text-black hover:bg-gray-100 p-1"
                                type="button" title="Tải lại">
                                <span class="inline-flex justify-center items-center w-6 h-6">
                                    <svg viewBox="0 0 24 24" width="16" height="16" class="inline-block">
                                        <path fill="currentColor"
                                            d="M2 12C2 16.97 6.03 21 11 21C13.39 21 15.68 20.06 17.4 18.4L15.9 16.9C14.63 18.25 12.86 19 11 19C4.76 19 1.64 11.46 6.05 7.05C10.46 2.64 18 5.77 18 12H15L19 16H19.1L23 12H20C20 7.03 15.97 3 11 3C6.03 3 2 7.03 2 12Z">
                                        </path>
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </div>

                    <!-- Filter -->
                    <div class="flex justify-end">
                        <div class="min-[640px]:flex-none min-[640px]:mt-0 min-[640px]:ml-[4rem] mt-[1rem]">
                            <Menu as="div" class="relative inline-block text-left">
                                <div>
                                    <MenuButton
                                        class="inline-flex justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border cursor-pointer rounded border-white ring-gray-200 bg-white text-black hover:bg-gray-100 py-1 px-3">
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
                    <div v-show="orders.length !== 0" class="mt-[1rem] flow-root">
                        <div class="">
                            <div class="align-middle min-w-[100%] inline-block">
                                <table
                                    class="hidden min-w-[100%] indent-0 border-collapse bg-[#edeff6] border-x border-[#d3e2fd]">
                                    <thead>
                                        <tr class="border-b-[1px] border-[white] bg-gray-300">
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
                                            class="mx-[4px] border-b-[1px] border-[white] hover:bg-[#e1e3e9] text-slate-500 hover:text-[#5080db]">
                                            <td
                                                class="pl-[1rem] font-[500] text-[.875rem] leading-[1.25rem] pr-[.75rem] py-[1rem] whitespace-nowrap">
                                                {{ order.order_id }}</td>
                                            <td
                                                class="font-[500] text-[.875rem] leading-[1.25rem] pr-[.75rem] py-[1rem] whitespace-nowrap">
                                                {{ order.email }}</td>
                                            <td
                                                class="font-[500] text-[.875rem] leading-[1.25rem] pr-[.75rem] py-[1rem] whitespace-nowrap">
                                                {{ order.phone || '' }}</td>
                                            <td
                                                class="font-[500] text-[.875rem] leading-[1.25rem] pr-[.75rem] py-[1rem] whitespace-nowrap">
                                                {{ format(new Date(order.order_created), 'MM/dd/yyyy') }}</td>
                                            <td
                                                class="font-[600] text-[.875rem] leading-[1.25rem] pr-[.75rem] py-[1rem] whitespace-nowrap">
                                                {{
                                                    (order.total_amount).toLocaleString('vi-VN',
                                                        {
                                                            style: 'currency',
                                                            currency: 'VND'
                                                        })
                                                }}
                                            </td>
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
                                                                <button @click="confirmOrderAxios(order.order_id)" :class="[
                                                                    active ? 'bg-sky-400 text-white' : 'text-gray-900',
                                                                    'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                                                                ]">
                                                                    <div class="mr-2 h-5 w-2 text-violet-400"></div>
                                                                    Xác nhận
                                                                </button>
                                                                </MenuItem>

                                                                <MenuItem v-show="order.status_name === 'Đã xác nhận'"
                                                                    v-slot="{ active }">
                                                                <button @click="completeOrderAxios(order.order_id)" :class="[
                                                                    active ? 'bg-sky-400 text-white' : 'text-gray-900',
                                                                    'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                                                                ]">
                                                                    <div class="mr-2 h-5 w-2 text-violet-400"></div>
                                                                    Hoàn thành
                                                                </button>
                                                                </MenuItem>

                                                                <MenuItem v-show="order.status_name === 'Đã đăng ký'"
                                                                    v-slot="{ active }">
                                                                <button @click="cancelOrderAxios(order.order_id)" :class="[
                                                                    active ? 'bg-sky-400 text-white' : 'text-gray-900',
                                                                    'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                                                                ]">
                                                                    <div class="mr-2 h-5 w-2 text-violet-400"></div>
                                                                    Huỷ
                                                                </button>
                                                                </MenuItem>

                                                                <MenuItem v-slot="{ active }">
                                                                <button @click="deteleOrderAxios(order.order_id)" :class="[
                                                                    active ? 'bg-sky-400 text-white' : 'text-gray-900',
                                                                    'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                                                                ]">
                                                                    <div class="mr-2 h-5 w-2 text-violet-400"></div>
                                                                    Xoá
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

                                <!-- DataTable PrimeVue -->
                                <div class="card">
                                    <DataTable selectionMode="single" removableSort sortField="order_id" :sortOrder="1"
                                        columnResizeMode="fit" showGridlines :value="orders" dataKey="order_id" paginator
                                        :rows="5" :rowsPerPageOptions="[5, 10, 20, 50]" tableStyle="min-width: 50rem"
                                        ref="dt" v-model:filters="filters" filterDisplay="menu" :loading="loading"
                                        :globalFilterFields="['order_id', 'email', 'phone', 'order_created', 'total_amount', 'status_name']"
                                        stateStorage="session" stateKey="dt-state-session" class="text-sm">
                                        <template #header>
                                            <div
                                                class="flex flex-wrap gap-2 align-items-center justify-content-between items-center justify-between">
                                                <h4 class="m-0 text-xl">Quản lý Đơn hàng</h4>
                                                <span class="p-input-icon-left">
                                                    <i class="pi pi-search" />
                                                    <InputText
                                                        class="inline-flex justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border cursor-pointer rounded border-white ring-gray-200 bg-white text-black hover:bg-gray-100 p-1"
                                                        v-model="filters['global'].value" placeholder="Tìm kiếm..." />
                                                </span>
                                            </div>
                                        </template>
                                        <Column field="order_id" filterField="order_id" sortable header="Order ID"
                                            dataType="numeric">
                                            <template #filter="{ filterModel }">
                                                <InputNumber placeholder="Nhập Order ID"
                                                    class="px-2 py-1 fo focus:shadow-none shadow-inner shadow-[#0096fa2e] border hover:border-gray-400 outline-none rounded bg-transparent"
                                                    v-model="filterModel.value" />
                                            </template>
                                        </Column>
                                        <Column field="email" sortable header="Email"></Column>
                                        <Column field="phone" sortable header="Số điện thoại"></Column>
                                        <Column field="order_created" sortable header="Ngày tạo" dataType="date">
                                            <template #body="{ data }">
                                                {{ format(new Date(data.order_created), 'dd/MM/yyyy') }}
                                            </template>
                                        </Column>
                                        <Column field="total_amount" sortable header="Giá">
                                            <template #body="{ data }">
                                                {{ (data.total_amount).toLocaleString('vi-VN',
                                                    {
                                                        style: 'currency',
                                                        currency: 'VND'
                                                    }) }}
                                            </template>
                                        </Column>
                                        <Column field="status_name" sortable header="Trạng thái"></Column>
                                        <Column style="flex: 0 0 4rem" header="">
                                            <template #body="{ data }">
                                                <Menu as="div" class="relative inline-block text-left">
                                                    <div>
                                                        <MenuButton
                                                            class="inline-flex w-full justify-center gap-x-1.5 rounded-full px-3 py-3 text-sm font-semibold hover:shadow-sm">
                                                            <svg width="24" height="24"
                                                                class="fill-current hover:text-sky-500 text-[#70757a] cursor-pointer"
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
                                                            class="z-[1000] absolute right-[-1px] -mt-2 w-32 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                            <div class="px-1 py-1">
                                                                <MenuItem v-show="data.status_name === 'Đã đăng ký'"
                                                                    v-slot="{ active }">
                                                                <button @click="confirmOrderAxios(data.order_id)" :class="[
                                                                    active ? 'bg-sky-400 text-white' : 'text-gray-900',
                                                                    'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                                                                ]">
                                                                    <div class="mr-2 h-5 w-2 text-violet-400"></div>
                                                                    Xác nhận
                                                                </button>
                                                                </MenuItem>

                                                                <MenuItem v-show="data.status_name === 'Đã xác nhận'"
                                                                    v-slot="{ active }">
                                                                <button @click="completeOrderAxios(data.order_id)" :class="[
                                                                    active ? 'bg-sky-400 text-white' : 'text-gray-900',
                                                                    'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                                                                ]">
                                                                    <div class="mr-2 h-5 w-2 text-violet-400"></div>
                                                                    Hoàn thành
                                                                </button>
                                                                </MenuItem>

                                                                <MenuItem v-show="data.status_name === 'Đã đăng ký'"
                                                                    v-slot="{ active }">
                                                                <button @click="cancelOrderAxios(data.order_id)" :class="[
                                                                    active ? 'bg-sky-400 text-white' : 'text-gray-900',
                                                                    'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                                                                ]">
                                                                    <div class="mr-2 h-5 w-2 text-violet-400"></div>
                                                                    Huỷ
                                                                </button>
                                                                </MenuItem>

                                                                <MenuItem v-slot="{ active }">
                                                                <button @click="deteleOrderAxios(data.order_id)" :class="[
                                                                    active ? 'bg-sky-400 text-white' : 'text-gray-900',
                                                                    'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                                                                ]">
                                                                    <div class="mr-2 h-5 w-2 text-violet-400"></div>
                                                                    Xoá
                                                                </button>
                                                                </MenuItem>
                                                            </div>
                                                        </MenuItems>
                                                    </transition>
                                                </Menu>
                                            </template>
                                        </Column>
                                    </DataTable>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div v-show="orders.length === 0"
                        class="bg-white h-40 text-gray-500 flex items-center content-center justify-center rounded-md my-8">
                        <div class="text-xl font-[600]">
                            <h1 class="text-gray-500">Chưa có đơn hàng nào</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </LayoutAuthenticated>
</template>
<script setup>
import LayoutAuthenticated from '../../components/manage/layouts/LayoutAuthenticated.vue'

import { ChevronDownIcon } from '@heroicons/vue/20/solid'
import { ref, onBeforeMount } from "vue";
import { useAuth0 } from "@auth0/auth0-vue";
import { getOrders, cancelOrder, deteleOrder } from "@/services/order.service";
import { format } from "date-fns";
import {
    Menu, MenuButton, MenuItem, MenuItems
} from '@headlessui/vue'
import PageLoader from "@/components/page-loader.vue";
import { FilterMatchMode, FilterOperator } from 'primevue/api';

// variables
const orders = ref('');
const order_root = ref('');

// get the token
const { getAccessTokenSilently } = useAuth0();

// toast
import { useToast } from "vue-toastification";
// Get toast interface
const toast = useToast();

// Check role
import { useRouter } from 'vue-router'
const router = useRouter()
const { user } = useAuth0();
// Xác thực người dùng đã đăng nhập chưa 
const { isAuthenticated } = useAuth0();
if (isAuthenticated) {
    // console.log(user.role);
    if (user.value.role) {
        // console.log(user);
    }
    else {
        router.push('/');
    }
}

const loading = ref(true);
const dt = ref();

const filters = ref({
    'global': { value: null, matchMode: FilterMatchMode.CONTAINS },
    order_id: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
});

const exportCSV = () => {
    dt.value.exportCSV();
};

const getOrdersIdAxios = async () => {
    const accessToken = await getAccessTokenSilently();
    const { data, error } = await getOrders(accessToken);

    if (data) {
        orders.value = data;
        order_root.value = data;
        loading.value = false;
        // console.log(orders.value)
    }

    if (error) {
        // console.log(error)
    }
};

const completeOrderAxios = async (order_id) => {
    // edit data
    let orderData = {
        status_id: 3
    }

    const accessToken = await getAccessTokenSilently();
    const { data, error } = await cancelOrder(accessToken, orderData, order_id);

    if (data) {
        // console.log(data);
        for (let i = 0; i < orders.value.length; i++) {
            if (orders.value[i].order_id == order_id) {
                orders.value[i].status_name = "Hoàn thành";
                order_root.value[i].status_name = "Hoàn thành";
            }
        }
        // Thong bao
        toast.success("Đã Cập nhật trạng thái Đơn hàng thành công", { timeout: 3000 });
    }

    if (error) {
        // console.log(error)
    }
};

const confirmOrderAxios = async (order_id) => {
    // edit data
    let orderData = {
        status_id: 4
    }

    const accessToken = await getAccessTokenSilently();
    const { data, error } = await cancelOrder(accessToken, orderData, order_id);

    if (data) {
        // console.log(data);
        for (let i = 0; i < orders.value.length; i++) {
            if (orders.value[i].order_id == order_id) {
                orders.value[i].status_name = "Đã xác nhận";
                order_root.value[i].status_name = "Đã xác nhận";
            }
        }
        // Thong bao
        toast.success("Đơn hàng đã được xác nhận thành công", { timeout: 3000 });
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
        toast.success("Đơn hàng đã bị Huỷ bỏ", { timeout: 3000 });
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

const updateOrder = async () => {
    getOrdersIdAxios();
};

onBeforeMount(async () => {
    // run function
    getOrdersIdAxios();
});
</script>

<style>
input:enabled:focus {
    box-shadow: none;
}
</style>