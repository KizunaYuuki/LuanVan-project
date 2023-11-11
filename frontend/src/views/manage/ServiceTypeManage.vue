<template>
    <LayoutAuthenticated>
        <div v-show="serviceTypes" class="mx-auto lg:max-w-[1024px] overflow-auto">
            <div class="">
                <!-- Title -->
                <div class="flex items-center">
                    <div class="flex-auto">
                        <h1 class="text-[#111827] leading-[3rem] font-[600] text-[1.5rem]">Loại dịch vụ</h1>
                        <p class="text-[#374151] text-[.875rem] leading-[1.25rem]">Hiển thị danh sách tất
                            cả loại dịch vụ</p>
                    </div>

                    <div class="min-[640px]:flex-none min-[640px]:mt-0 min-[640px]:ml-[4rem] mt-[1rem]">
                        <button @click="goToAddServiceTypePage()"
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
                                <span class="text-sm font-medium leading-6  ml-2">Thêm Loại dịch vụ</span>
                            </div>
                        </button>
                    </div>

                    <div class="min-[640px]:flex-none min-[640px]:mt-0 min-[640px]:ml-[2rem] mt-[1rem] flex items-center">
                        <button icon="pi pi-external-link" @click="exportCSV($event)"
                            class="mr-4 inline-flex justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border cursor-pointer rounded border-white ring-gray-200 bg-white text-black hover:bg-gray-100 px-3 py-1">
                            Export
                        </button>
                        <button @click="updateServices()"
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
                <div class="mt-[1rem] flow-root">
                    <div class="">
                        <div class="align-middle min-w-[100%] inline-block">
                            <!-- DataTable PrimeVue -->
                            <div class="card">
                                <DataTable selectionMode="single" removableSort sortField="id" :sortOrder="1"
                                    columnResizeMode="fit" showGridlines :value="serviceTypes" dataKey="id" paginator
                                    :rows="5" :rowsPerPageOptions="[5, 10, 20, 50]" tableStyle="min-width: 50rem"
                                    ref="serviceType_dt" v-model:filters="filters" filterDisplay="menu" :loading="loading"
                                    :globalFilterFields="['id', 'name', 'providers_id', 'area', 'break_weight']"
                                    stateStorage="session" stateKey="serviceType_dt-state-session" class="text-sm">
                                    <template #header>
                                        <div
                                            class="flex flex-wrap gap-2 align-items-center justify-content-between items-center justify-between">
                                            <h4 class="m-0 text-xl">Quản lý Dịch vụ</h4>
                                            <span class="p-input-icon-left">
                                                <i class="pi pi-search" />
                                                <InputText
                                                    class="inline-flex justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border cursor-pointer rounded border-white ring-gray-200 bg-white text-black hover:bg-gray-100 p-1"
                                                    v-model="filters['global'].value" placeholder="Tìm kiếm..." />
                                            </span>
                                        </div>
                                    </template>
                                    <Column class="py-2 h-14 w-48" field="id" filterField="id" sortable header="Service type ID">
                                        <template #filter="{ filterModel }">
                                            <InputNumber placeholder="Nhập Service type ID"
                                                class="px-2 py-1 fo focus:shadow-none shadow-inner shadow-[#0096fa2e] border hover:border-gray-400 outline-none rounded bg-transparent"
                                                v-model="filterModel.value" />
                                        </template>
                                    </Column>
                                    <Column class="py-2 h-14" field="name" sortable header="Loại dịch vụ"></Column>
                                    <Column class="py-2 h-14" field="providers_id" sortable header="Provider ID"></Column>
                                    <Column class="py-2 h-14" field="area" sortable header="Khu vực">
                                        <template #body="{ data }">
                                            {{ data.area === 0 ? "Trong nước" : "Quốc tế" }}
                                        </template>
                                    </Column>
                                    <Column class="py-2 h-14" field="break_weight" sortable header="Trọng lượng"
                                        title="Nếu dịch vụ có trọng lượng lớn hơn trọng mức này sẽ được tính tự động theo bảng giá của từng khu vực dựa vào giá trị tăng thêm">
                                        <template #body="{ data }">
                                            {{ data.break_weight }} g
                                        </template>
                                    </Column>

                                    <Column class="py-2 h-14" header="">
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
                                                            <RouterLink :to="{
                                                                name: 'Edit Service Type - Management',
                                                                params: { id: data.id },
                                                            }" :class="[
                                                                        active ? 'bg-sky-400 text-white' : 'text-gray-900',
                                                                        'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                                                                    ]">
                                                                <div class="mr-2 h-5 w-2 text-violet-400"></div>
                                                                Chỉnh sửa
                                                            </RouterLink>
                                                            </MenuItem>
                                                        </div>

                                                        <div class="px-1 py-1">
                                                            <MenuItem v-slot="{ active }">
                                                            <button @click="deteleServiceTypeAxios(data.id)" :class="[
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
            </div>
        </div>
    </LayoutAuthenticated>
</template>

<script setup>
import LayoutAuthenticated from '../../components/manage/layouts/LayoutAuthenticated.vue'
import { RouterLink } from 'vue-router'
import { ref, onBeforeMount } from "vue";
import { useAuth0 } from "@auth0/auth0-vue";
import { getServiceTypes, deteleServiceType } from "@/services/service-type.service";
import {
    Menu, MenuButton, MenuItem, MenuItems
} from '@headlessui/vue';
import { FilterMatchMode, FilterOperator } from 'primevue/api';

// variables
const serviceTypes = ref('');

// get the token
const { getAccessTokenSilently } = useAuth0();

// toast
import { useToast } from "vue-toastification";
// Get toast interface
const toast = useToast();

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

const loading = ref(true);
const serviceType_dt = ref();

const filters = ref({
    'global': { value: null, matchMode: FilterMatchMode.CONTAINS },
    id: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
});

const exportCSV = () => {
    serviceType_dt.value.exportCSV();
};


const goToAddServiceTypePage = async () => {
    router.push('/management/service-type/new');
};

const deteleServiceTypeAxios = async (id) => {
    const accessToken = await getAccessTokenSilently();
    const { data, error } = await deteleServiceType(accessToken, id);

    if (data) {
        await getServiceTypesAxios();
        // Thong bao
        toast.success("Đã xoá Loại dịch vụ thành công", { timeout: 3000 });
    }
    if (error) {
        // console.log(error.message);
    }
};

const getServiceTypesAxios = async () => {
    const accessToken = await getAccessTokenSilently();
    const { data, error } = await getServiceTypes(accessToken);

    if (data) {
        serviceTypes.value = data;
        loading.value = false;
        // console.log(data);
    }
    if (error) {
        // console.log(error.message);
    }
};

const updateServices = async () => {
    getServiceTypesAxios();
};

onBeforeMount(async () => {
    // run function
    getServiceTypesAxios();
});

</script>

<style>
input:enabled:focus {
    box-shadow: none;
}
</style>