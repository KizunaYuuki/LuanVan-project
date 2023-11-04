<template>
    <!-- Wait auth0 load -->
    <div v-if="loading" class="page-layout">
        <PageLoader />
    </div>

    <div v-else>
        <div class="mx-auto max-w-5xl bg-white p-16 pb-4 rounded-lg">
            <!-- Title -->
            <div class="flex-auto mb-10">
                <h1 class="text-[#111827] leading-[3rem] font-[600] text-[1.5rem]">Cập nhật Bảng giá</h1>
            </div>

            <form class="max-w-4xl" @submit="submitHandle">
                <div class="space-y-12">
                    <!-- Service Types -->
                    <div class="border-b border-gray-900/10 pb-12">
                        <h2 class="text-base font-semibold leading-7 text-gray-900">Loại dịch vụ</h2>
                        <p class="mt-1 text-sm leading-6 text-gray-600">Những thông tin này có ảnh hưởng lớn đến giá dịch vụ
                        </p>
                        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div class="sm:col-span-3">
                                <div class="block text-sm font-medium leading-6 text-gray-900">Chọn Loại dịch vụ<strong
                                        class="text-[red] ml-[8px]">*</strong>
                                </div>
                                <Combobox v-model="selectedServiceType">
                                    <div class="relative mt-1">
                                        <div
                                            class="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                                            <ComboboxInput
                                                class="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0 outline-none"
                                                :displayValue="(serviceType) => serviceType.name"
                                                @change="queryServiceType = $event.target.value" />
                                            <ComboboxButton class="absolute inset-y-0 right-0 flex items-center pr-2">
                                                <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                                            </ComboboxButton>
                                        </div>
                                        <TransitionRoot leave="transition ease-in duration-100" leaveFrom="opacity-100"
                                            leaveTo="opacity-0" @after-leave="queryServiceType = ''">
                                            <ComboboxOptions
                                                class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                <div v-if="filteredServiceType.length === 0 && queryServiceType !== ''"
                                                    class="relative cursor-default select-none py-2 px-4 text-gray-700">
                                                    Chưa tìm thấy...
                                                </div>

                                                <ComboboxOption v-for="serviceType in filteredServiceType" as="template"
                                                    :key="serviceType.id" :value="serviceType" v-slot="{ selected, active }">
                                                    <li @click="changeProvider(serviceType.id)"
                                                        class="relative cursor-default select-none py-2 pl-10 pr-4" :class="{
                                                            'bg-sky-400 text-white': active,
                                                            'text-gray-900': !active,
                                                        }">
                                                        <div class="flex items-center">
                                                            <span class="block truncate"
                                                                :class="{ 'font-medium': selected, 'font-normal': !selected }">
                                                                {{ serviceType.name }}
                                                            </span>
                                                        </div>

                                                        <span v-if="selected"
                                                            class="absolute inset-y-0 left-0 flex items-center pl-3"
                                                            :class="{ 'text-white': active, 'text-teal-600': !active }">
                                                            <CheckIcon class="h-5 w-5" aria-hidden="true" />
                                                        </span>
                                                    </li>
                                                </ComboboxOption>
                                            </ComboboxOptions>
                                        </TransitionRoot>
                                    </div>
                                </Combobox>

                                <button @click="goToAddServiceTypePage()" type="button" class="flex items-center mt-4">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                            aria-hidden="true" width="20" height="20"
                                            class="text-white bg-[#0096fa] rounded-full">
                                            <path
                                                d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z">
                                            </path>
                                        </svg>
                                    </span>
                                    <span class="text-sm font-medium leading-6 text-gray-900 ml-2">Thêm Loại dịch vụ</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Info as name... -->
                    <div class="border-b border-gray-900/10 pb-12">
                        <h2 class="text-base font-semibold leading-7 text-gray-900">Thông tin cơ bản</h2>
                        <p class="mt-1 text-sm leading-6 text-gray-600">Cung cấp những thông tin chi tiết về trọng lượng</p>
                        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div class="sm:col-span-3">
                                <label for="start_weight" class="block text-sm font-medium leading-6 text-gray-900">Trọng
                                    lượng nhỏ nhất<span class="text-[#0096fa] ml-3">(Gram)</span><strong
                                        class="text-[red] ml-[8px]">*</strong></label>
                                <div class="mt-2">
                                    <input type="number" v-model="priceList.start_weight" name="start_weight"
                                        id="start_weight"
                                        class="outline-none hover:border-[#9aa0a6] shadow-inner border border-gray-200 pl-[14px] block w-full rounded-md py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6">
                                </div>
                            </div>
                            <div class="sm:col-span-3">
                                <label for="end_weight" class="block text-sm font-medium leading-6 text-gray-900">Trọng
                                    lượng lớn nhất<span class="text-[#0096fa] ml-3">(Gram)</span><strong
                                        class="text-[red] ml-[8px]">*</strong></label>
                                <div class="mt-2">
                                    <input type="number" v-model="priceList.end_weight" name="end_weight"
                                        id="end_weight"
                                        class="outline-none hover:border-[#9aa0a6] shadow-inner border border-gray-200 pl-[14px] block w-full rounded-md py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6">
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Price -->
                    <div class="border-b border-gray-900/10 pb-12">
                        <h2 class="text-base font-semibold leading-7 text-gray-900">Thông tin về giá</h2>
                        <p class="mt-1 text-sm leading-6 text-gray-600">Cung cấp những thông tin chi tiết về giá theo từng
                            khu vực</p>
                        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div class="sm:col-span-2">
                                <label for="inter_domain_price"
                                    class="block text-sm font-medium leading-6 text-gray-900">Giá Liên miền<span
                                        class="text-[#0096fa] ml-3">(VND)</span><strong
                                        class="text-[red] ml-[8px]">*</strong></label>
                                <div class="mt-2">
                                    <input type="number" v-model="priceList.inter_domain_price" name="inter_domain_price"
                                        id="inter_domain_price"
                                        class="outline-none hover:border-[#9aa0a6] shadow-inner border border-gray-200 pl-[14px] block w-full rounded-md py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6">
                                </div>
                            </div>
                            <div class="sm:col-span-2">
                                <label for="inter_provincial_price"
                                    class="block text-sm font-medium leading-6 text-gray-900">Giá Nội miền<span
                                        class="text-[#0096fa] ml-3">(VND)</span><strong
                                        class="text-[red] ml-[8px]">*</strong></label>
                                <div class="mt-2">
                                    <input type="number" v-model="priceList.inter_provincial_price"
                                        name="inter_provincial_price" id="inter_provincial_price"
                                        class="outline-none hover:border-[#9aa0a6] shadow-inner border border-gray-200 pl-[14px] block w-full rounded-md py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6">
                                </div>
                            </div>
                            <div class="sm:col-span-2">
                                <label for="intra_province_price"
                                    class="block text-sm font-medium leading-6 text-gray-900">Giá Nội tỉnh<span
                                        class="text-[#0096fa] ml-3">(VND)</span><strong
                                        class="text-[red] ml-[8px]">*</strong></label>
                                <div class="mt-2">
                                    <input type="number" v-model="priceList.intra_province_price"
                                        name="intra_province_price" id="intra_province_price"
                                        class="outline-none hover:border-[#9aa0a6] shadow-inner border border-gray-200 pl-[14px] block w-full rounded-md py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Button -->
                <div class="mt-6 flex items-center justify-end gap-x-6">
                    <RouterLink to="/management/price-list" class="text-sm font-semibold leading-6 text-gray-900">
                        <div class="">Huỷ</div>
                    </RouterLink>

                    <button type="submit"
                        class="hover:scale-[1.03] transition-all duration-[0.3s] ease-in-out delay-[0ms] my-[8px] inline-flex items-center px-[8px] py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-[#0096faee] hover:bg-[#0096fa]">
                        <div class="flex items-center">
                            <span class="text-sm font-medium leading-6">Cập nhật</span>
                        </div>
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { ref, computed, onBeforeMount } from "vue";
import { getServiceTypes } from "@/services/service-type.service";
import { getPriceListById, updatePriceList } from "@/services/price-list.service";
import { useAuth0 } from "@auth0/auth0-vue";
import PageLoader from "@/components/page-loader.vue";
import {
    Combobox,
    ComboboxInput,
    ComboboxButton,
    ComboboxOptions,
    ComboboxOption,
    TransitionRoot,
} from '@headlessui/vue'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid';
// toast
import { useToast } from "vue-toastification";
// Get toast interface
const toast = useToast();
// route
import { useRouter } from 'vue-router'
const router = useRouter()
// props
const props = defineProps({
    id: ''
})
const { getAccessTokenSilently } = useAuth0();

// variables
const priceList = ref();
const serviceTypes = ref();
const selectedServiceType = ref()
const loading = ref(true);
const queryServiceType = ref('');
let filteredServiceType = computed(() =>
    queryServiceType.value === ''
        ? serviceTypes.value
        : serviceTypes.value.filter((element) =>
            element.name
                .toLowerCase()
                .replace(/\s+/g, '')
                .includes(queryServiceType.value.toLowerCase().replace(/\s+/g, ''))
        )
)

function changeProvider(id) {
    // console.log(id);
    priceList.value.service_type_id = id;
}

const goToAddServiceTypePage = async () => {
    router.push('/management/service-type/new');
};

const getPriceListByIdHandle = async (id) => {
    const accessToken = await getAccessTokenSilently();
    const { data, error } = await getPriceListById(accessToken, id);
    if (data) {
        // console.log(data);
        // push price list data
        priceList.value = data;
        // push serviceType data
        serviceTypes.value.forEach(element => {
            if (element.id === data.service_type_id) {
                selectedServiceType.value = element;
            }
        });
        // Tải xong data, hiển thị trang
        loading.value = false;
    }
};

const getServiceTypesHandle = async () => {
    const accessToken = await getAccessTokenSilently();
    const { data, error } = await getServiceTypes(accessToken);
    if (data) {
        serviceTypes.value = data;
        getPriceListByIdHandle(props.id);
    }
};

const updatePriceListHandle = async (input, id) => {
    const accessToken = await getAccessTokenSilently();
    // validate
    if (priceList.value.start_weight === '' || priceList.value.end_weight === '' ||
        priceList.value.inter_domain_price === '' || priceList.value.inter_provincial_price === '' || priceList.value.intra_province_price === '' || 
        priceList.value.service_type_id === '') {
        toast.warning("Oh, Có thiếu sót gì đó! Xem lại những Input có * đỏ", { timeout: 3000 });
        return;
    }
    const { data, error } = await updatePriceList(accessToken, input, id);
    if (data) {
        // update location
        toast.success(data, { timeout: 3000 });
        // Về trang quản lý dịch vụ
        router.push('/management/price-list');
    }
};

// Submit
function submitHandle(event) {
    // Ngăn chặn sự kiện mặc định của form để tránh tải lại trang
    event.preventDefault();
    // Update service 
    updatePriceListHandle(priceList.value, props.id);
}

onBeforeMount(() => {
    getServiceTypesHandle();
})
</script>