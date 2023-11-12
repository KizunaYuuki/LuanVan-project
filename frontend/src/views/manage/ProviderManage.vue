<template>
    <LayoutAuthenticated>
        <div v-show="providers" class="mx-auto lg:max-w-[1024px] overflow-auto">
            <!-- Modal -->
            <TransitionRoot as="template" :show="isOpen" v-if="providerSelected?.id">
                <Dialog as="div" class="relative z-10" @close="isOpen = false">
                    <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0"
                        enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
                        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </TransitionChild>
                    <div
                        class="fixed inset-0 z-10 overflow-y-auto min-h-screen w-screen transition-position lg:w-auto">
                        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <TransitionChild as="template" enter="ease-out duration-300"
                                enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200"
                                leave-from="opacity-100 translate-y-0 sm:scale-100"
                                leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                                <DialogPanel
                                    class="relative transform rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full max-h-[70vh] overflow-y-auto max-w-3xl overflow-x-auto">
                                    <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                        <div class="sm:flex sm:items-start">
                                            <!-- View -->
                                            <div v-if="!edit" class="grow">
                                                <div class="px-4 sm:px-0">
                                                    <h3 class="text-base font-semibold leading-7 text-gray-900">Nhà cung cấp
                                                    </h3>
                                                    <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Thông tin chi
                                                        tiết.</p>
                                                </div>
                                                <div class="mt-6 border-t border-gray-100">
                                                    <dl class="divide-y divide-gray-100">
                                                        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                                            <dt class="text-sm font-medium leading-6 text-gray-900">Provider
                                                                ID</dt>
                                                            <dd
                                                                class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                                                {{ providerSelected.id }}</dd>
                                                        </div>
                                                        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                                            <dt class="text-sm font-medium leading-6 text-gray-900">
                                                                Tên nhà cung cấp</dt>
                                                            <dd
                                                                class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                                                {{ providerSelected.name }}</dd>
                                                        </div>
                                                        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                                            <dt class="text-sm font-medium leading-6 text-gray-900">Email
                                                            </dt>
                                                            <dd
                                                                class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                                                {{ providerSelected.email }}</dd>
                                                        </div>
                                                        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                                            <dt class="text-sm font-medium leading-6 text-gray-900">Số điện
                                                                thoại</dt>
                                                            <dd
                                                                class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                                                {{ providerSelected.phone }}</dd>
                                                        </div>
                                                        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                                            <dt class="text-sm font-medium leading-6 text-gray-900">Địa chỉ
                                                            </dt>
                                                            <dd
                                                                class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                                                {{ providerSelected.address }}</dd>
                                                        </div>
                                                        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                                            <dt class="text-sm font-medium leading-6 text-gray-900">Hình
                                                            </dt>
                                                            <dd
                                                                class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                                                {{ providerSelected.image }}</dd>
                                                        </div>
                                                    </dl>
                                                </div>
                                            </div>

                                            <!-- Edit -->
                                            <div v-if="edit" class="grow">
                                                <div class="px-4 sm:px-0">
                                                    <h3 class="text-base font-semibold leading-7 text-gray-900">Nhà cung cấp
                                                    </h3>
                                                    <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Thông tin chi
                                                        tiết.</p>
                                                </div>
                                                <div class="mt-6 border-t border-gray-100">
                                                    <dl class="divide-y divide-gray-100">
                                                        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                                            <dt class="text-sm font-medium leading-6 text-gray-900">Provider
                                                                ID</dt>
                                                            <dd
                                                                class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                                                {{ editProviderData.id }}</dd>
                                                        </div>
                                                        <div
                                                            class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 items-center">
                                                            <dt class="text-sm font-medium leading-6 text-gray-900">
                                                                Tên nhà cung cấp</dt>
                                                            <dd
                                                                class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                                                <input v-model="editProviderData.name" id="name" name="name"
                                                                    type="text"
                                                                    class="outline-none hover:border-[#9aa0a6] shadow-inner border border-gray-200 pl-[14px] block w-full rounded-md py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6">
                                                            </dd>
                                                        </div>
                                                        <div
                                                            class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 items-center">
                                                            <dt class="text-sm font-medium leading-6 text-gray-900">Email
                                                            </dt>
                                                            <dd
                                                                class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                                                <input v-model="editProviderData.email" id="email"
                                                                    name="email" type="text"
                                                                    class="outline-none hover:border-[#9aa0a6] shadow-inner border border-gray-200 pl-[14px] block w-full rounded-md py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6">
                                                            </dd>
                                                        </div>
                                                        <div
                                                            class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 items-center">
                                                            <dt class="text-sm font-medium leading-6 text-gray-900">Số điện
                                                                thoại</dt>
                                                            <dd
                                                                class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                                                <input v-model="editProviderData.phone" id="phone"
                                                                    name="phone" type="phone"
                                                                    class="outline-none hover:border-[#9aa0a6] shadow-inner border border-gray-200 pl-[14px] block w-full rounded-md py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6">
                                                            </dd>
                                                        </div>
                                                        <div
                                                            class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 items-center">
                                                            <dt class="text-sm font-medium leading-6 text-gray-900">Địa chỉ
                                                            </dt>
                                                            <dd
                                                                class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                                                <input v-model="editProviderData.address" id="address"
                                                                    name="address" type="phone"
                                                                    class="outline-none hover:border-[#9aa0a6] shadow-inner border border-gray-200 pl-[14px] block w-full rounded-md py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6">
                                                            </dd>
                                                        </div>
                                                        <div
                                                            class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 items-center">
                                                            <dt class="text-sm font-medium leading-6 text-gray-900">Hình
                                                            </dt>
                                                            <dd
                                                                class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                                            <dd
                                                                class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                                                <input v-model="editProviderData.image" id="image"
                                                                    name="image" type="text"
                                                                    class="outline-none hover:border-[#9aa0a6] shadow-inner border border-gray-200 pl-[14px] block w-full rounded-md py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6">
                                                            </dd>
                                                            </dd>
                                                        </div>
                                                    </dl>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="bg-gray-300 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                        <div v-if="!edit">
                                            <button type="button"
                                                class="inline-flex justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border cursor-pointer rounded border-white ring-gray-200 bg-red-400 text-gray-100 hover:bg-red-500 px-3 py-1"
                                                @click="deteleProviderAxios()">Xoá</button>
                                            <button type="button"
                                                class="ml-3 inline-flex justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border cursor-pointer rounded border-white ring-gray-200 bg-white text-black hover:bg-gray-100 px-3 py-1"
                                                @click="edit = true">Chỉnh sửa</button>
                                            <button type="button"
                                                class="ml-3 inline-flex justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border cursor-pointer rounded border-white ring-gray-200 bg-white text-black hover:bg-gray-100 px-3 py-1"
                                                @click="isOpen = false">Đóng</button>
                                        </div>
                                        <div v-else>
                                            <button type="button"
                                                class="inline-flex justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border cursor-pointer rounded border-white ring-gray-200 bg-white text-black hover:bg-gray-100 px-3 py-1"
                                                @click="edit = false">Huỷ</button>
                                            <button type="button"
                                                class="ml-3 inline-flex justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border cursor-pointer rounded border-white ring-gray-200 bg-white text-black hover:bg-gray-100 px-3 py-1"
                                                @click="updateProviderAxios()">Cập nhật</button>
                                        </div>
                                    </div>
                                </DialogPanel>
                            </TransitionChild>
                        </div>
                    </div>
                </Dialog>
            </TransitionRoot>

            <div class="">
                <!-- Title -->
                <div class="flex items-center">
                    <div class="flex-auto">
                        <h1 class="text-[#111827] leading-[3rem] font-[600] text-[1.5rem]">Nhà cung cấp</h1>
                        <p class="text-[#374151] text-[.875rem] leading-[1.25rem]">Hiển thị danh sách tất
                            cả nhà cung cấp</p>
                    </div>

                    <div class="min-[640px]:flex-none min-[640px]:mt-0 min-[640px]:ml-[4rem] mt-[1rem]">
                        <button @click="goToAddProviderPage()"
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
                                <span class="text-sm font-medium leading-6  ml-2">Thêm Nhà cung cấp</span>
                            </div>
                        </button>
                    </div>

                    <div class="min-[640px]:flex-none min-[640px]:mt-0 min-[640px]:ml-[2rem] mt-[1rem] flex items-center">
                        <button icon="pi pi-external-link" @click="exportCSV($event)"
                            class="mr-4 inline-flex justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border cursor-pointer rounded border-white ring-gray-200 bg-white text-black hover:bg-gray-100 px-3 py-1">
                            Export
                        </button>
                        <button @click="updateData()"
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
                                    columnResizeMode="fit" showGridlines :value="providers" dataKey="id" paginator :rows="5"
                                    :rowsPerPageOptions="[5, 10, 20, 50]" tableStyle="min-width: 50rem" ref="provider_dt"
                                    v-model:filters="filters" filterDisplay="menu" :loading="loading"
                                    :globalFilterFields="['id', 'name', 'email', 'phone', 'weight']" stateStorage="session"
                                    stateKey="provider_dt-state-session" class="text-sm" @rowSelect="handleRowSelect()"
                                    @rowUnselect="true" v-model:selection="providerSelected" :metaKeySelection="false">
                                    <template #header>
                                        <div
                                            class="flex flex-wrap gap-2 align-items-center justify-content-between items-center justify-between">
                                            <h4 class="m-0 text-xl">Quản lý Nhà cung cấp</h4>
                                            <span class="p-input-icon-left">
                                                <i class="pi pi-search" />
                                                <InputText
                                                    class="inline-flex justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border cursor-pointer rounded border-white ring-gray-200 bg-white text-black hover:bg-gray-100 p-1"
                                                    v-model="filters['global'].value" placeholder="Tìm kiếm..." />
                                            </span>
                                        </div>
                                    </template>
                                    <Column class="py-2 h-16 w-44" field="id" filterField="id" sortable header="Provider ID">
                                        <template #filter="{ filterModel }">
                                            <InputNumber placeholder="Nhập Provider ID"
                                                class="px-2 py-1 fo focus:shadow-none shadow-inner shadow-[#0096fa2e] border hover:border-gray-400 outline-none rounded bg-transparent"
                                                v-model="filterModel.value" />
                                        </template>
                                        <template #body="{ data }">
                                            <div class="flex items-center">
                                                <img :src="data.image" alt=""
                                                    class="h-5 w-5 flex-shrink-0 rounded-full bg-slate-400 mr-2" />
                                                <span>{{ data.id }}</span>
                                            </div>
                                        </template>
                                    </Column>
                                    <Column class="py-2 h-16" field="name" sortable header="Nhà cung cấp"></Column>
                                    <Column class="py-2 h-16" field="email" sortable header="Email"></Column>
                                    <Column class="py-2 h-16" field="phone" sortable header="Số điện thoại"></Column>
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
import { ref, onBeforeMount } from "vue";
import { useAuth0 } from "@auth0/auth0-vue";
import { getProviders, updateProvider, deteleProvider } from "@/services/provider.service";
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { FilterMatchMode, FilterOperator } from 'primevue/api';

// variables
const providers = ref('');
const providerSelected = ref();
const edit = ref(false);
const editProviderData = ref();

// get the token
const { getAccessTokenSilently } = useAuth0();

// modal
const isOpen = ref(false)
function setIsOpen(value) {
    isOpen.value = value
}

function handleRowSelect(event) {
    // console.log(providerSelected.value);
    editProviderData.value = providerSelected.value;
    setIsOpen(true);
}

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
const provider_dt = ref();

const filters = ref({
    'global': { value: null, matchMode: FilterMatchMode.CONTAINS },
    id: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
});

const exportCSV = () => {
    provider_dt.value.exportCSV();
};

const goToAddProviderPage = async () => {
    router.push('/management/provider/new');
};

const getProvidersAxios = async () => {
    const accessToken = await getAccessTokenSilently();
    const { data, error } = await getProviders(accessToken);
    if (data) {
        providers.value = data;
        loading.value = false;
        // console.log(data);
    }
    if (error) {
        // console.log(error.message);
    }
};

const deteleProviderAxios = async () => {
    const accessToken = await getAccessTokenSilently();
    const { data, error } = await deteleProvider(accessToken, providerSelected.value.id);
    // console.log(providerSelected.value.id);
    if (data) {
        // console.log(data);
        toast.success(data, { timeout: 3000 });
        edit.value = false;
        isOpen.value = false;
        updateData();
    }
    if (error) {
        // console.log(error.message);
    }
};

const updateProviderAxios = async () => {
    const accessToken = await getAccessTokenSilently();
    const { data, error } = await updateProvider(accessToken, editProviderData.value, editProviderData.value.id);
    // console.log(editProviderData.value.id);
    if (data) {
        // console.log(data);
        toast.success(data, { timeout: 3000 });
        edit.value = false;
    }
    if (error) {
        // console.log(error.message);
    }
};

const updateData = async () => {
    getProvidersAxios();
};

onBeforeMount(async () => {
    // run function
    getProvidersAxios();
});
</script>

<style>
input:enabled:focus {
    box-shadow: none;
}
</style>