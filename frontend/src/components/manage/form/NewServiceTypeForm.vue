<template>
    <!-- Wait auth0 load -->
    <div v-if="loading" class="page-layout">
        <PageLoader />
    </div>

    <div v-else>
        <div class="mx-auto max-w-5xl bg-white p-16 pb-4 rounded-lg">
            <!-- Title -->
            <div class="flex-auto mb-10">
                <h1 class="text-[#111827] leading-[3rem] font-[600] text-[1.5rem]">Thêm Loại dịch vụ</h1>
            </div>

            <form class="max-w-4xl" @submit="submitHandle">
                <div class="space-y-12">
                    <!-- Provider -->
                    <div class="border-b border-gray-900/10 pb-12">
                        <h2 class="text-base font-semibold leading-7 text-gray-900">Nhà cung cấp</h2>
                        <p class="mt-1 text-sm leading-6 text-gray-600">Những thông tin này có ảnh hưởng lớn đến giá dịch vụ
                        </p>
                        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div class="sm:col-span-3">
                                <div class="block text-sm font-medium leading-6 text-gray-900">Chọn
                                    nhà cung cấp dịch vụ<strong class="text-[red] ml-[8px]">*</strong>
                                </div>
                                <Combobox v-model="selectedProvider">
                                    <div class="relative mt-1">
                                        <div
                                            class="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                                            <ComboboxInput
                                                class="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0 outline-none"
                                                :displayValue="(provider) => provider.name"
                                                @change="queryProvider = $event.target.value" />
                                            <ComboboxButton class="absolute inset-y-0 right-0 flex items-center pr-2">
                                                <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                                            </ComboboxButton>
                                        </div>
                                        <TransitionRoot leave="transition ease-in duration-100" leaveFrom="opacity-100"
                                            leaveTo="opacity-0" @after-leave="queryProvider = ''">
                                            <ComboboxOptions
                                                class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                <div v-if="filteredProvider.length === 0 && queryProvider !== ''"
                                                    class="relative cursor-default select-none py-2 px-4 text-gray-700">
                                                    Chưa tìm thấy...
                                                </div>

                                                <ComboboxOption v-for="provider in filteredProvider" as="template"
                                                    :key="provider.id" :value="provider" v-slot="{ selected, active }">
                                                    <li @click="changeProvider(provider.id)"
                                                        class="relative cursor-default select-none py-2 pl-10 pr-4" :class="{
                                                            'bg-sky-400 text-white': active,
                                                            'text-gray-900': !active,
                                                        }">
                                                        <div class="flex items-center">
                                                            <img :src="provider.image" alt=""
                                                                class="h-5 w-5 flex-shrink-0 rounded-full bg-[#607d8b] mr-2" />
                                                            <span class="block truncate"
                                                                :class="{ 'font-medium': selected, 'font-normal': !selected }">
                                                                {{ provider.name }}
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

                                <button @click="goToAddProviderPage()" type="button" class="flex items-center mt-4">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                            aria-hidden="true" width="20" height="20"
                                            class="text-white bg-[#0096fa] rounded-full">
                                            <path
                                                d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z">
                                            </path>
                                        </svg>
                                    </span>
                                    <span class="text-sm font-medium leading-6 text-gray-900 ml-2">Thêm nhà cung cấp</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Info as name... -->
                    <div class="border-b border-gray-900/10 pb-12">
                        <h2 class="text-base font-semibold leading-7 text-gray-900">Thông tin cơ bản</h2>
                        <p class="mt-1 text-sm leading-6 text-gray-600">Cung cấp những thông tin chi tiết về Loại dịch vụ
                        </p>

                        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div class="sm:col-span-3">
                                <label for="service_name" class="block text-sm font-medium leading-6 text-gray-900">Tên Loại
                                    dịch
                                    vụ<strong class="text-[red] ml-[8px]">*</strong></label>
                                <div class="mt-2">
                                    <input type="text" v-model="serviceType.name" name="service_name" id="service_name"
                                        class="outline-none hover:border-[#9aa0a6] shadow-inner border border-gray-200 pl-[14px] block w-full rounded-md py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6">
                                </div>
                            </div>

                            <div class="sm:col-span-3">
                                <label for="break_weight" class="block text-sm font-medium leading-6 text-gray-900">Trọng
                                    lượng
                                    tối đa<span class="text-[#0096fa] ml-3">(Gram)</span><strong
                                        class="text-[red] ml-[8px]">*</strong></label>
                                <div class="mt-2">
                                    <input type="number" v-model="serviceType.break_weight" name="break_weight"
                                        id="break_weight"
                                        class="outline-none hover:border-[#9aa0a6] shadow-inner border border-gray-200 pl-[14px] block w-full rounded-md py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6">
                                </div>
                                <p class="mt-3 text-sm leading-6 text-gray-600">Nếu dịch vụ có trọng lượng lớn hơn mức này
                                    thì thì giá dịch vụ sẽ được tính theo giá tăng thêm mỗi 500g và theo vùng miền</p>
                            </div>
                        </div>
                    </div>

                    <!-- Price, time - Liên miền -->
                    <div class="border-b border-gray-900/10 pb-12">
                        <h2 class="text-base font-semibold leading-7 text-gray-900">Vận chuyển Liên miền</h2>
                        <p class="mt-1 text-sm leading-6 text-gray-600">Cung cấp những thông tin về giá và thời gian vận
                            chuyển Liên miền</p>

                        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div class="sm:col-span-2">
                                <label for="inter_domain_extra_price"
                                    class="block text-sm font-medium leading-6 text-gray-900">Giá công
                                    thêm - Mỗi 500g<strong class="text-[red] ml-[8px]">*</strong></label>
                                <div class="mt-2">
                                    <input type="text" v-model="serviceType.inter_domain_extra_price"
                                        name="inter_domain_extra_price" id="inter_domain_extra_price"
                                        class="outline-none hover:border-[#9aa0a6] shadow-inner border border-gray-200 pl-[14px] block w-full rounded-md py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6">
                                </div>
                            </div>

                            <div class="sm:col-span-2">
                                <label for="inter_domain_min_time"
                                    class="block text-sm font-medium leading-6 text-gray-900">Thời gian vận chuyển sớm
                                    nhất<span class="text-[#0096fa] ml-3">(Giờ)</span></label>
                                <div class="mt-2">
                                    <input type="number" v-model="serviceType.inter_domain_min_time"
                                        name="inter_domain_min_time" id="inter_domain_min_time"
                                        class="outline-none hover:border-[#9aa0a6] shadow-inner border border-gray-200 pl-[14px] block w-full rounded-md py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6">
                                </div>
                            </div>

                            <div class="sm:col-span-2">
                                <label for="inter_domain_max_time"
                                    class="block text-sm font-medium leading-6 text-gray-900">Thời gian vận chuyển trễ
                                    nhất<span class="text-[#0096fa] ml-3">(Giờ)</span><strong
                                        class="text-[red] ml-[8px]">*</strong></label>
                                <div class="mt-2">
                                    <input type="number" v-model="serviceType.inter_domain_max_time"
                                        name="inter_domain_max_time" id="inter_domain_max_time"
                                        class="outline-none hover:border-[#9aa0a6] shadow-inner border border-gray-200 pl-[14px] block w-full rounded-md py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6">
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Price, time - Nội miền -->
                    <div class="border-b border-gray-900/10 pb-12">
                        <h2 class="text-base font-semibold leading-7 text-gray-900">Vận chuyển Nội miền</h2>
                        <p class="mt-1 text-sm leading-6 text-gray-600">Cung cấp những thông tin về giá và thời gian vận
                            chuyển Nội miền</p>

                        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div class="sm:col-span-2">
                                <label for="inter_provincial_extra_price"
                                    class="block text-sm font-medium leading-6 text-gray-900">Giá công
                                    thêm - Mỗi 500g<strong class="text-[red] ml-[8px]">*</strong></label>
                                <div class="mt-2">
                                    <input type="text" v-model="serviceType.inter_provincial_extra_price"
                                        name="inter_provincial_extra_price" id="inter_provincial_extra_price"
                                        class="outline-none hover:border-[#9aa0a6] shadow-inner border border-gray-200 pl-[14px] block w-full rounded-md py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6">
                                </div>
                            </div>

                            <div class="sm:col-span-2">
                                <label for="inter_provincial_min_time"
                                    class="block text-sm font-medium leading-6 text-gray-900">Thời gian vận chuyển sớm
                                    nhất<span class="text-[#0096fa] ml-3">(Giờ)</span></label>
                                <div class="mt-2">
                                    <input type="number" v-model="serviceType.inter_provincial_min_time"
                                        name="inter_provincial_min_time" id="inter_provincial_min_time"
                                        class="outline-none hover:border-[#9aa0a6] shadow-inner border border-gray-200 pl-[14px] block w-full rounded-md py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6">
                                </div>
                            </div>

                            <div class="sm:col-span-2">
                                <label for="inter_provincial_max_time"
                                    class="block text-sm font-medium leading-6 text-gray-900">Thời gian vận chuyển trễ
                                    nhất<span class="text-[#0096fa] ml-3">(Giờ)</span><strong
                                        class="text-[red] ml-[8px]">*</strong></label>
                                <div class="mt-2">
                                    <input type="number" v-model="serviceType.inter_provincial_max_time"
                                        name="inter_provincial_max_time" id="inter_provincial_max_time"
                                        class="outline-none hover:border-[#9aa0a6] shadow-inner border border-gray-200 pl-[14px] block w-full rounded-md py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6">
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Price, time - Nội tỉnh -->
                    <div class="border-b border-gray-900/10 pb-12">
                        <h2 class="text-base font-semibold leading-7 text-gray-900">Vận chuyển Nội tỉnh</h2>
                        <p class="mt-1 text-sm leading-6 text-gray-600">Cung cấp những thông tin về giá và thời gian vận
                            chuyển Nội tỉnh</p>

                        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div class="sm:col-span-2">
                                <label for="intra_province_extra_price"
                                    class="block text-sm font-medium leading-6 text-gray-900">Giá công
                                    thêm - Mỗi 500g<strong class="text-[red] ml-[8px]">*</strong></label>
                                <div class="mt-2">
                                    <input type="text" v-model="serviceType.intra_province_extra_price"
                                        name="intra_province_extra_price" id="intra_province_extra_price"
                                        class="outline-none hover:border-[#9aa0a6] shadow-inner border border-gray-200 pl-[14px] block w-full rounded-md py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6">
                                </div>
                            </div>

                            <div class="sm:col-span-2">
                                <label for="intra_province_min_time"
                                    class="block text-sm font-medium leading-6 text-gray-900">Thời gian vận chuyển sớm
                                    nhất<span class="text-[#0096fa] ml-3">(Giờ)</span></label>
                                <div class="mt-2">
                                    <input type="number" v-model="serviceType.intra_province_min_time"
                                        name="intra_province_min_time" id="intra_province_min_time"
                                        class="outline-none hover:border-[#9aa0a6] shadow-inner border border-gray-200 pl-[14px] block w-full rounded-md py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6">
                                </div>
                            </div>

                            <div class="sm:col-span-2">
                                <label for="intra_province_max_time"
                                    class="block text-sm font-medium leading-6 text-gray-900">Thời gian vận chuyển trễ
                                    nhất<span class="text-[#0096fa] ml-3">(Giờ)</span><strong
                                        class="text-[red] ml-[8px]">*</strong></label>
                                <div class="mt-2">
                                    <input type="number" v-model="serviceType.intra_province_max_time"
                                        name="intra_province_max_time" id="intra_province_max_time"
                                        class="outline-none hover:border-[#9aa0a6] shadow-inner border border-gray-200 pl-[14px] block w-full rounded-md py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Button -->
                <div class="mt-6 flex items-center justify-end gap-x-6">
                    <RouterLink to="/management/service-type" class="text-sm font-semibold leading-6 text-gray-900">
                        <div class="">Huỷ</div>
                    </RouterLink>

                    <button type="submit"
                        class="hover:scale-[1.03] transition-all duration-[0.3s] ease-in-out delay-[0ms] my-[8px] inline-flex items-center px-[8px] py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-[#0096faee] hover:bg-[#0096fa]">
                        <div class="flex items-center">
                            <span class="text-sm font-medium leading-6">Thêm</span>
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
import { getProviders } from "@/services/provider.service";
import { getServiceTypeById, createServiceType } from "@/services/service-type.service";
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
const serviceType = ref({
    providers_id: '',
    name: '',
    area: 0,
    break_weight: '',
    intra_province_min_time: '',
    intra_province_max_time: '',
    inter_provincial_min_time: '',
    inter_provincial_max_time: '',
    inter_domain_min_time: '',
    inter_domain_max_time: '',
    intra_province_extra_price: '',
    inter_provincial_extra_price: '',
    inter_domain_extra_price: '',
});
const providers = ref();
const selectedProvider = ref()
const loading = ref(true);
const queryProvider = ref('');
let filteredProvider = computed(() =>
    queryProvider.value === ''
        ? providers.value
        : providers.value.filter((element) =>
            element.name
                .toLowerCase()
                .replace(/\s+/g, '')
                .includes(queryProvider.value.toLowerCase().replace(/\s+/g, ''))
        )
)

function changeProvider(id) {
    serviceType.value.providers_id = id;
}

const goToAddProviderPage = async () => {
    router.push('/management/provider/new');
};

const getProvidersAxios = async () => {
    const accessToken = await getAccessTokenSilently();
    const { data, error } = await getProviders(accessToken);
    if (data) {
        providers.value = data;
        selectedProvider.value = [];
        loading.value = false;
    }
};

const createServiceTypeAxios = async (input) => {
    const accessToken = await getAccessTokenSilently();
    // validate
    if (serviceType.value.name === '' || serviceType.value.break_weight === '' || serviceType.value.providers_id === '' ||
        serviceType.value.inter_domain_extra_price === '' || serviceType.value.inter_domain_max_time === '' ||
        serviceType.value.inter_provincial_extra_price === '' || serviceType.value.inter_provincial_max_time === '' ||
        serviceType.value.intra_province_extra_price === '' || serviceType.value.intra_province_max_time === '') {
        toast.warning("Oh, Có thiếu sót gì đó! Xem lại những Input có * đỏ", { timeout: 3000 });
        return;
    }

    // edit data
    if (serviceType.value.inter_domain_min_time === '') {
        serviceType.value.inter_domain_min_time = null;
    }
    if (serviceType.value.inter_provincial_min_time === '') {
        serviceType.value.inter_provincial_min_time = null;
    }
    if (serviceType.value.intra_province_min_time === '') {
        serviceType.value.intra_province_min_time = null;
    }

    const { data, error } = await createServiceType(accessToken, input);
    if (data) {
        // update location
        toast.success("Đã thêm loại dịch vụ thành công", { timeout: 3000 });
        // Về trang quản lý dịch vụ
        router.push('/management/service-type');
    }
};

// Submit
function submitHandle(event) {
    // Ngăn chặn sự kiện mặc định của form để tránh tải lại trang
    event.preventDefault();
    // Update service 
    createServiceTypeAxios(serviceType.value);
}

onBeforeMount(() => {
    getProvidersAxios();
})
</script>