<template>
    <!-- Wait auth0 load -->
    <div v-if="isLoading" class="page-layout">
        <PageLoader />
    </div>

    <div v-else>
        <div class="mx-auto max-w-5xl bg-white p-16 rounded-lg">
            <!-- Title -->
            <div class="flex-auto mb-10">
                <h1 class="text-[#111827] leading-[3rem] font-[600] text-[1.5rem]">Cập nhật
                    Khuyến mãi</h1>
            </div>

            <form class="max-w-4xl" @submit="submitHandle">
                <div class="space-y-12">
                    <!-- Info -->
                    <div class="border-b border-gray-900/10 pb-12">
                        <h2 class="text-base font-semibold leading-7 text-gray-900">Thông tin cơ bản</h2>
                        <p class="mt-1 text-sm leading-6 text-gray-600">Cung cấp những thông tin như tên hay mô tả của
                            khuyến mãi</p>

                        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div class="sm:col-span-2">
                                <label for="promotion_name" class="block text-sm font-medium leading-6 text-gray-900">Tên
                                    Khuyến mãi<strong class="text-[red] ml-[8px]">*</strong></label>
                                <div class="mt-2">
                                    <input type="text" v-model="promotion.name" name="promotion_name" id="promotion_name"
                                        class="pl-[14px] block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div class="col-span-full">
                                <label for="promotion_description"
                                    class="block text-sm font-medium leading-6 text-gray-900">Mô tả về
                                    Khuyến mãi</label>
                                <div class="mt-2">
                                    <textarea v-model="promotion.description" id="promotion_description"
                                        name="promotion_description" rows="3"
                                        class="pl-[14px] block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                                <p class="mt-3 text-sm leading-6 text-gray-600">Viết mô tả ngắn gọn về Khuyến mãi
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Automatic -->
                    <div class="border-b border-gray-900/10 pb-12">
                        <h2 class="text-base font-semibold leading-7 text-gray-900">Thông tin Khuyến mãi</h2>
                        <p class="mt-1 text-sm leading-6 text-gray-600">Thông tin về giá, thời gian khuyến mãi và dịch vụ
                            được áp dụng</p>

                        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div class="sm:col-span-3">
                                <label for="promotion_start" class="block text-sm font-medium leading-6 text-gray-900">Thời
                                    điểm bắt đầu<strong class="text-[red] ml-[8px]">*</strong></label>
                                <div class="mt-2">
                                    <input v-model="promotion.start" type="datetime-local" name="promotion_start"
                                        id="promotion_start"
                                        class="px-[14px] block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div class="sm:col-span-3">
                                <label for="promotion_end" class="block text-sm font-medium leading-6 text-gray-900">Thời
                                    điểm kết thúc<strong class="text-[red] ml-[8px]">*</strong></label>
                                <div class="mt-2">
                                    <input v-model="promotion.end" type="datetime-local" name="promotion_end"
                                        id="promotion_end"
                                        class="px-[14px] block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div class="sm:col-span-3">
                                <div class="block text-sm font-medium leading-6 text-gray-900">Chọn
                                    chọn dịch vụ áp dụng khuyến mãi<strong class="text-[red] ml-[8px]">*</strong>
                                </div>
                                <Combobox v-model="selectedService">
                                    <div class="relative mt-2">
                                        <div
                                            class="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                                            <ComboboxInput
                                                class="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0 outline-none"
                                                :displayValue="(service) => service.service_id !== undefined ? (`ID: ${service.service_id} , Tên: ${service.service_name}`) : ''"
                                                @change="queryService = $event.target.value" />
                                            <ComboboxButton class="absolute inset-y-0 right-0 flex items-center pr-2">
                                                <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                                            </ComboboxButton>
                                        </div>
                                        <TransitionRoot leave="transition ease-in duration-100" leaveFrom="opacity-100"
                                            leaveTo="opacity-0" @after-leave="queryService = ''">
                                            <ComboboxOptions
                                                class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                <div v-if="filteredServices?.length === 0 && queryService !== ''"
                                                    class="relative cursor-default select-none py-2 px-4 text-gray-700">
                                                    Chưa tìm thấy...
                                                </div>

                                                <ComboboxOption v-for="service in filteredServices" as="template"
                                                    :key="service.id" :value="service" v-slot="{ selected, active }">
                                                    <li @click="changeService(service.service_id)"
                                                        class="relative cursor-default select-none py-2 pl-10 pr-4" :class="{
                                                            'bg-sky-400 text-white': active,
                                                            'text-gray-900': !active,
                                                        }">
                                                        <div class="flex items-center">
                                                            <span class="block truncate"
                                                                :class="{ 'font-medium': selected, 'font-normal': !selected }">
                                                                ID: {{ service.service_id }}, Tên: {{ service.service_name
                                                                }}
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
                            </div>

                            <div class="sm:col-span-3">
                                <label for="promotion_price" class="block text-sm font-medium leading-6 text-gray-900">Giá
                                    trị
                                    Khuyến mãi (<span class="text-[#0096fa]">%</span>)
                                    <strong class="text-[red] ml-[8px]">*</strong>
                                </label>
                                <div class="mt-2">
                                    <input v-model="promotion.price" id="promotion_price" name="promotion_price"
                                        type="number"
                                        class="pl-[14px] block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Button -->
                <div class="mt-6 flex items-center justify-end gap-x-6">
                    <RouterLink to="/management/promotion" class="text-sm font-semibold leading-6 text-gray-900">
                        <div class="">Huỷ</div>
                    </RouterLink>

                    <button type="submit"
                        class="hover:scale-[1.03] transition-all duration-[0.3s] ease-in-out delay-[0ms] my-[8px] inline-flex items-center px-[8px] py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-[#0096faee] hover:bg-[#0096fa]">
                        <div class="flex items-center">
                            <span class="text-sm font-medium leading-6">Submit</span>
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
import { getServices } from "@/services/service.service";
import { createPromotion, getPromotionById, updatePromotion } from "@/services/promotion.service";

// toast
import { useToast } from "vue-toastification";
// Get toast interface
const toast = useToast();

import { useRouter } from 'vue-router'
import format from 'date-fns/format';
const router = useRouter()

const { getAccessTokenSilently } = useAuth0();

const props = defineProps({
    promotion_id: '' // Promotion Id
})

const isLoading = ref(true);

const promotion = ref({
    service_id: '',
    name: '',
    description: '',
    price: '',
    start: '',
    end: ''
})
const services = ref()

const getPromotionByIdAxios = async (promotion_id) => {
    const { data, error } = await getPromotionById(promotion_id);

    if (data) {
        // console.log(data);

        // Push data to form
        promotion.value.service_id = data.service_id;
        promotion.value.name = data.name;
        promotion.value.description = data.description;
        promotion.value.price = data.price;
        promotion.value.start = (format(new Date(data.start), `yyyy-MM-dd`).toString() + "T" + format(new Date(data.start), `H:mm`).toString()).toString();
        promotion.value.end = (format(new Date(data.end), `yyyy-MM-dd`).toString() + "T" + format(new Date(data.end), `H:mm`).toString()).toString();

        services.value.forEach(element => {
            if (element.service_id === data.service_id) {
                // console.log(element);
                selectedService.value = element;
            }
        });
    }

    if (error) {
        // console.log(error)
    }
};

const getServicesAxios = async () => {
    const { data, error } = await getServices();

    if (data) {
        services.value = data;
        selectedService.value = [];
        // console.log(data);
        await getPromotionByIdAxios(props.promotion_id);
        isLoading.value = false;
    }

    if (error) {
        // console.log(error)
    }
};

function changeService(service_id) {
    promotion.value.service_id = service_id;
}


let queryService = ref('');
const selectedService = ref();

let filteredServices = computed(() =>
    queryService.value === ''
        ? services.value
        : services.value.filter((element) =>
            ("ID: " + element.service_id + ", Tên: " + element.service_name).toString()
                .toLowerCase()
                .replace(/\s+/g, '')
                .includes(queryService.value.toLowerCase().replace(/\s+/g, ''))
        )
)

// create service
const updatePromotionAxios = async () => {
    const accessToken = await getAccessTokenSilently();
    const { data, error } = await updatePromotion(accessToken, promotion.value, props.promotion_id);

    if (data) {
        // console.log(data);

        toast.success("Đã Cập nhật Khuyến mãi thành công", { timeout: 3000 });

        // Về trang quản lý dịch vụ
        router.push('/management/promotion');
    }

    if (error) {
        // console.log(error);
    }
};

function submitHandle(event) {
    // Ngăn chặn sự kiện mặc định của form để tránh tải lại trang
    event.preventDefault();
    // edit data
    if (promotion.value.service_id === '' || promotion.value.name === '' || promotion.value.price === '' || promotion.value.start === '' || promotion.value.end === '') {
        toast.warning("Oh, Có thiếu sót gì đó! Xem lại những Input có * đỏ", { timeout: 3000 });
        return;
    }
    // console.log(promotion.value);

    // Create service 
    updatePromotionAxios();
}

onBeforeMount(() => {
    // Run function
    getServicesAxios();
})
</script>