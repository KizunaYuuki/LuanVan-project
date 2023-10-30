<template>
    <LayoutAuthenticated>
        <div class="mx-auto lg:max-w-[1024px]">
            <div class="">
                <!-- Title -->
                <div class="flex items-center">
                    <div class="flex-auto">
                        <h1 class="text-[#111827] leading-[3rem] font-[600] text-[1.5rem]">Khuyến mãi</h1>
                        <p class="text-[#374151] text-[.875rem] leading-[1.25rem]">Hiển thị danh sách tất
                            cả Khuyến mãi</p>
                    </div>
                    <div class="min-[640px]:flex-none min-[640px]:mt-0 min-[640px]:ml-[4rem] mt-[1rem]">
                        <button @click="goToAddPromotionPage()"
                            class="hover:scale-[1.03] transition-all duration-[0.3s] ease-in-out delay-[0ms] my-[8px] inline-flex items-center px-[8px] py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-[#0096faee] hover:bg-[#0096fa]">
                            <div class="flex items-center">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                        aria-hidden="true" width="20" height="20"
                                        class="text-white bg-[#0096fa] rounded-full">
                                        <path
                                            d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z">
                                        </path>
                                    </svg>
                                </span>
                                <span class="text-sm font-medium leading-6  ml-2">Thêm Khuyến mãi</span>
                            </div>
                        </button>
                    </div>

                    <div class="min-[640px]:flex-none min-[640px]:mt-0 min-[640px]:ml-[2rem] mt-[1rem] flex items-center">
                        <button icon="pi pi-external-link" @click="exportCSV($event)"
                            class="mr-4 inline-flex justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border cursor-pointer rounded border-white ring-gray-200 bg-white text-black hover:bg-gray-100 px-3 py-1">
                            Export
                        </button>

                        <button @click="updatePromotions()"
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

                <!-- Content -->
                <div v-show="promotions.length !== 0" class="mt-[1rem] flow-root">
                    <div class="">
                        <div class="align-middle min-w-[100%] inline-block">
                            <table
                                class="hidden min-w-[100%] indent-0 border-collapse bg-[#edeff6] border-x border-[#d3e2fd]">
                                <thead>
                                    <tr class="border-b-[1px] border-[white] bg-gray-300">
                                        <th scope="col"
                                            class="pl-[1rem] text-gray-600 text-[.875rem] leading-[1.25rem] text-left pr-[.75rem] py-[.875rem]">
                                            Promotion ID</th>
                                        <th scope="col"
                                            class="min-[640px]:pl-0 text-gray-600 text-[.875rem] leading-[1.25rem] text-left px-[.75rem] py-[.875rem]">
                                            Tên</th>
                                        <th scope="col"
                                            class="min-[640px]:pl-0 text-gray-600 text-[.875rem] leading-[1.25rem] text-left px-[.75rem] py-[.875rem]">
                                            Service ID</th>
                                        <th scope="col" title="Trọng lượng tối đa của Gói hàng muốn vận chuyển"
                                            class="min-[640px]:pl-0 text-gray-600 text-[.875rem] leading-[1.25rem] text-left px-[.75rem] py-[.875rem]">
                                            Bắt đầu</th>
                                        <th scope="col"
                                            class="min-[640px]:pl-0 text-gray-600 text-[.875rem] leading-[1.25rem] text-left px-[.75rem] py-[.875rem]">
                                            Kết thúc</th>
                                        <th scope="col"
                                            class="min-[640px]:pl-0 text-gray-600 text-[.875rem] leading-[1.25rem] text-left px-[.75rem] py-[.875rem]">
                                            Giá trị</th>
                                        <th scope="col"
                                            class="min-[640px]:pl-0 text-gray-600 text-[.875rem] leading-[1.25rem] text-left py-[.875rem] relative">
                                            <span class="sr-only">Xoá</span>
                                        </th>
                                    </tr>
                                </thead>

                                <tbody class="">
                                    <tr v-for="promotion in promotions" :key="promotion.id"
                                        class="mx-[4px] border-b-[1px] border-[white] hover:bg-[#e1e3e9] text-slate-500 hover:text-[#5080db]">
                                        <td
                                            class="pl-[1rem] font-[500] text-[.875rem] leading-[1.25rem] pr-[.75rem] py-[1rem] whitespace-nowrap">
                                            {{ promotion.id }}</td>
                                        <td
                                            class="font-[500] text-[.875rem] leading-[1.25rem] pr-[.75rem] py-[1rem] whitespace-nowrap">
                                            {{ promotion.name }}</td>
                                        <td
                                            class="font-[500] text-[.875rem] leading-[1.25rem] pr-[.75rem] py-[1rem] whitespace-nowrap">
                                            {{ promotion.service_id }}</td>
                                        <td
                                            class="font-[500] text-[.875rem] leading-[1.25rem] pr-[.75rem] py-[1rem] whitespace-nowrap">
                                            {{ format(new Date(promotion.start), 'PPpp', { locale: vi }) }}</td>
                                        <td
                                            class="font-[600] text-[.875rem] leading-[1.25rem] pr-[.75rem] py-[1rem] whitespace-nowrap">
                                            {{ format(new Date(promotion.end), 'PPpp', { locale: vi }) }}</td>
                                        <td
                                            class="font-[500] text-[.875rem] leading-[1.25rem] pr-[.75rem] py-[1rem] whitespace-nowrap">
                                            {{ promotion.price }}</td>
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
                                                        class="z-[1] absolute right-0 -mt-2 w-32 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                        <div class="px-1 py-1">
                                                            <MenuItem v-slot="{ active }">
                                                            <button @click="goToEditPromotionPage(promotion.id)" :class="[
                                                                active ? 'bg-sky-400 text-white' : 'text-gray-900',
                                                                'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                                                            ]">
                                                                <div class="mr-2 h-5 w-2 text-violet-400"></div>
                                                                Chỉnh sửa
                                                            </button>
                                                            </MenuItem>
                                                        </div>

                                                        <div class="px-1 py-1">
                                                            <MenuItem v-slot="{ active }">
                                                            <button @click="detelePromotionAxios(promotion.id)" :class="[
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
                                <DataTable selectionMode="single" removableSort sortField="id" :sortOrder="1"
                                    columnResizeMode="fit" showGridlines :value="promotions" dataKey="id" paginator
                                    :rows="5" :rowsPerPageOptions="[5, 10, 20, 50]" tableStyle="min-width: 50rem"
                                    ref="promotion_dt" v-model:filters="filters" filterDisplay="menu" :loading="loading"
                                    :globalFilterFields="['id', 'name', 'service_id', 'start', 'end', 'price']" stateStorage="session"
                                    stateKey="promotion_dt-state-session">
                                    <template #header>
                                        <div
                                            class="flex flex-wrap gap-2 align-items-center justify-content-between items-center justify-between">
                                            <h4 class="m-0 text-xl">Quản lý Khuyến mãi</h4>
                                            <span class="p-input-icon-left">
                                                <i class="pi pi-search" />
                                                <InputText
                                                    class="inline-flex justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border cursor-pointer rounded border-white ring-gray-200 bg-white text-black hover:bg-gray-100 p-1"
                                                    v-model="filters['global'].value" placeholder="Tìm kiếm..." />
                                            </span>
                                        </div>
                                    </template>
                                    <Column field="id" filterField="id" sortable header="Promotion ID">
                                        <template #filter="{ filterModel }">
                                            <InputNumber placeholder="Nhập Promotion ID"
                                                class="px-2 py-1 fo focus:shadow-none shadow-inner shadow-[#0096fa2e] border hover:border-gray-400 outline-none rounded bg-transparent"
                                                v-model="filterModel.value" />
                                        </template>
                                    </Column>
                                    <Column field="name" sortable header="Tên"></Column>
                                    <Column field="service_id" sortable header="Service ID"></Column>
                                    <Column field="start" sortable header="Bắt đầu" dataType="date">
                                        <template #body="{ data }">
                                            {{ format(new Date(data.start), 'dd/MM/yyyy - HH:mm:ss', { locale: vi }) }}
                                        </template>
                                    </Column>
                                    <Column field="end" sortable header="Kết thúc" dataType="date">
                                        <template #body="{ data }">
                                            {{ format(new Date(data.end), 'dd/MM/yyyy - HH:mm:ss', { locale: vi }) }}
                                        </template>
                                    </Column>
                                    <Column field="price" sortable header="Giá trị" dataType="numeric">
                                        <template #body="{ data }">
                                            {{ data.price }}%
                                        </template>
                                    </Column>
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
                                                            class="z-[1] absolute right-0 -mt-2 w-32 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                            <div class="px-1 py-1">
                                                                <MenuItem v-slot="{ active }">
                                                                <button @click="goToEditPromotionPage(data.id)" :class="[
                                                                    active ? 'bg-sky-400 text-white' : 'text-gray-900',
                                                                    'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                                                                ]">
                                                                    <div class="mr-2 h-5 w-2 text-violet-400"></div>
                                                                    Chỉnh sửa
                                                                </button>
                                                                </MenuItem>
                                                            </div>

                                                            <div class="px-1 py-1">
                                                                <MenuItem v-slot="{ active }">
                                                                <button @click="detelePromotionAxios(data.id)" :class="[
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

                <div v-show="promotions.length === 0"
                    class="bg-white h-40 text-gray-500 flex items-center content-center justify-center rounded-md my-8">
                    <div class="text-xl font-[600]">
                        <h1 class="text-gray-500">Chưa có khuyến mãi nào</h1>
                    </div>
                </div>
            </div>
        </div>
    </LayoutAuthenticated>
</template>

<script setup>
import LayoutAuthenticated from '../../components/manage/layouts/LayoutAuthenticated.vue'
import { onMounted, ref, onBeforeMount } from "vue";
import { useAuth0 } from "@auth0/auth0-vue";
import { getPromotions, detelePromotion } from "@/services/promotion.service";
import { getUserByEmail } from "@/services/user.service";
import {
    Menu, MenuButton, MenuItem, MenuItems
} from '@headlessui/vue'
import format from 'date-fns/format';
import { vi } from 'date-fns/locale';
import { FilterMatchMode, FilterOperator } from 'primevue/api';

const goToAddPromotionPage = async () => {
    router.push('/management/promotion/new');
};

const goToEditPromotionPage = async (promotion_id) => {
    router.push(`/management/promotion/edit/${promotion_id}`);
};

// variables
const user_id = ref('');
const promotions = ref('');

// get the token
const { getAccessTokenSilently } = useAuth0();

// get the information user
const { user } = useAuth0();

// Check role
import { useRouter } from 'vue-router'
const router = useRouter()
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

// toast
import { useToast } from "vue-toastification";
// Get toast interface
const toast = useToast();


const loading = ref(true);
const promotion_dt = ref();

const filters = ref({
    'global': { value: null, matchMode: FilterMatchMode.CONTAINS },
    id: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
});

const exportCSV = () => {
    promotion_dt.value.exportCSV();
};

const getPromotionsAxios = async () => {
    const { data, error } = await getPromotions();

    if (data) {
        promotions.value = data
        loading.value = false;
        // console.log(data);
    }
    if (error) {
        // console.log(error.message);
    }
};

const detelePromotionAxios = async (promotion_id) => {
    const accessToken = await getAccessTokenSilently();
    const { data, error } = await detelePromotion(accessToken, promotion_id);

    if (data) {
        // console.log(data);
        toast.success("Xoá Khuyến mãi thành công", { timeout: 3000 });
        await getPromotionsAxios();
    }
    if (error) {
        // console.log(error.message);
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
        // console.log(data);
    }
    if (error) {
        // console.log(error.message);
    }
};

const updatePromotions = async () => {
    getPromotionsAxios();
};

onBeforeMount(async () => {
    // run function
    getUserByEmailAxios(user);
    getPromotionsAxios();
});

</script>

<style>
input:enabled:focus {
    box-shadow: none;
}
</style>