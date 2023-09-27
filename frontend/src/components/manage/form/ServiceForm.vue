<template>
    <!-- Wait auth0 load -->
    <div v-if="isLoading" class="page-layout">
        <PageLoader />
    </div>

    <div v-else class="bg-white">
        <div class="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
            <div class="mx-auto max-w-2xl">
                <h1 class="text-[30px] text-[#0096fa] my-[32px]">Cập nhật dịch vụ </h1>
                <form @submit="submitHandle">
                    <div class="space-y-12">
                        <div class="border-b border-gray-900/10 pb-12">
                            <h2 class="text-base font-semibold leading-7 text-gray-900">Nhà cung cấp và Loại dịch vụ</h2>
                            <p class="mt-1 text-sm leading-6 text-gray-600">Những thông tin này có ảnh hưởng lớn đến giá
                                dịch vụ</p>

                            <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div class="sm:col-span-3">
                                    <Listbox as="div" v-model="selected">
                                        <ListboxLabel class="block text-sm font-medium leading-6 text-gray-900">Chọn
                                            nhà cung cấp dịch vụ
                                        </ListboxLabel>
                                        <div class="relative mt-2">
                                            <ListboxButton v-if="selected?.image"
                                                class="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                                                <span class="flex items-center">
                                                    <img :src="selected.image" alt=""
                                                        class="h-5 w-5 flex-shrink-0 rounded-full bg-[#607d8b]" />
                                                    <span v-if="selected?.name" class="ml-3 block truncate">{{ selected.name
                                                    }}</span>
                                                </span>
                                                <span
                                                    class="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                                    <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                                                </span>
                                            </ListboxButton>

                                            <transition leave-active-class="transition ease-in duration-100"
                                                leave-from-class="opacity-100" leave-to-class="opacity-0">
                                                <ListboxOptions
                                                    class="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                    <ListboxOption as="template" v-for="provider in providers"
                                                        :key="provider.id" :value="provider" v-slot="{ active, selected }">
                                                        <li @click="changeServiceType(provider.id)"
                                                            :class="[active ? 'bg-indigo-600 text-white' : 'text-gray-900', 'relative cursor-default select-none py-2 pl-3 pr-9']">
                                                            <div class="flex items-center">
                                                                <img :src="provider.image" alt=""
                                                                    class="h-5 w-5 flex-shrink-0 rounded-full bg-[#607d8b]" />
                                                                <span
                                                                    :class="[selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate']">{{
                                                                        provider.name }}</span>
                                                            </div>

                                                            <span v-if="selected"
                                                                :class="[active ? 'text-white' : 'text-indigo-600', 'absolute inset-y-0 right-0 flex items-center pr-4']">
                                                                <CheckIcon class="h-5 w-5" aria-hidden="true" />
                                                            </span>
                                                        </li>
                                                    </ListboxOption>
                                                </ListboxOptions>
                                            </transition>
                                        </div>
                                    </Listbox>
                                    <a href="#" target="_blank" class="flex items-center mt-4 pl-[12px]">
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                                aria-hidden="true" width="20" height="20"
                                                class="text-white bg-[#0096fa] rounded-full">
                                                <path
                                                    d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z">
                                                </path>
                                            </svg>
                                        </span>
                                        <span class="text-sm font-medium leading-6 text-gray-900 ml-2">Thêm nhà cung
                                            cấp</span>
                                    </a>
                                </div>

                                <div class="sm:col-span-3">
                                    <Listbox as="div" v-model="selectedServiceTypes">
                                        <ListboxLabel class="block text-sm font-medium leading-6 text-gray-900">Chọn
                                            loại dịch vụ
                                        </ListboxLabel>
                                        <div class="relative mt-2">
                                            <ListboxButton v-if="selectedServiceTypes?.name"
                                                class="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                                                <span class="flex items-center">
                                                    <span class="ml-3 block truncate">{{
                                                        selectedServiceTypes.name }}</span>
                                                </span>
                                                <span
                                                    class="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                                    <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                                                </span>
                                            </ListboxButton>

                                            <transition leave-active-class="transition ease-in duration-100"
                                                leave-from-class="opacity-100" leave-to-class="opacity-0">
                                                <ListboxOptions
                                                    class="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                    <ListboxOption as="template" v-for="serviceType in serviceTypes"
                                                        :key="serviceType.id" :value="serviceType"
                                                        v-slot="{ active, selectedServiceTypes }">
                                                        <li
                                                            :class="[active ? 'bg-indigo-600 text-white' : 'text-gray-900', 'relative cursor-default select-none py-2 pl-3 pr-9']">
                                                            <div class="flex items-center">
                                                                <span
                                                                    :class="[selectedServiceTypes ? 'font-semibold' : 'font-normal', 'ml-3 block truncate']">{{
                                                                        serviceType.name }}</span>
                                                            </div>

                                                            <span v-if="selectedServiceTypes"
                                                                :class="[active ? 'text-white' : 'text-indigo-600', 'absolute inset-y-0 right-0 flex items-center pr-4']">
                                                                <CheckIcon class="h-5 w-5" aria-hidden="true" />
                                                            </span>
                                                        </li>
                                                    </ListboxOption>
                                                </ListboxOptions>
                                            </transition>
                                        </div>
                                    </Listbox>
                                    <a href="#" target="_blank" class="flex items-center mt-4 pl-[12px]">
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                                aria-hidden="true" width="20" height="20"
                                                class="text-white bg-[#0096fa] rounded-full">
                                                <path
                                                    d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z">
                                                </path>
                                            </svg>
                                        </span>
                                        <span class="text-sm font-medium leading-6 text-gray-900 ml-2">Thêm loại dịch
                                            vụ</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div class="border-b border-gray-900/10 pb-12">
                            <h2 class="text-base font-semibold leading-7 text-gray-900">Thông tin cơ bản</h2>
                            <p class="mt-1 text-sm leading-6 text-gray-600">Cung cấp những thông tin như tên hay mô tả của
                                dịch vụ</p>

                            <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div class="sm:col-span-3">
                                    <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">Tên
                                        dịch vụ</label>
                                    <div class="mt-2">
                                        <input type="text" v-model="service.name" name="first-name" id="first-name"
                                            autocomplete="given-name"
                                            class="pl-[14px] block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                    </div>
                                </div>

                                <div class="col-span-full">
                                    <label for="about" class="block text-sm font-medium leading-6 text-gray-900">Mô tả về
                                        dịch vụ</label>
                                    <div class="mt-2">
                                        <textarea v-model="service.description" id="about" name="about" rows="3"
                                            class="pl-[14px] block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                    </div>
                                    <p class="mt-3 text-sm leading-6 text-gray-600">Viết mô tả ngắn gọn về dịch vụ vận
                                        chuyển
                                    </p>
                                </div>

                                <div class="sm:col-span-3">
                                    <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Thời
                                        gian vận chuyển</label>
                                    <div class="mt-2">
                                        <input v-model="service.delivery_date" placeholder="1-2 ngày" type="text"
                                            name="last-name" id="last-name" autocomplete="family-name"
                                            class="pl-[14px] block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                    </div>
                                </div>

                                <div class="sm:col-span-4">
                                    <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Khối lượng
                                        gói hàng</label>
                                    <div class="mt-2">
                                        <input v-model="service.weight" id="email" name="email" type="number"
                                            autocomplete="email"
                                            class="pl-[14px] block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                    </div>
                                </div>

                                <div class="sm:col-span-3">
                                    <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Giá dịch
                                        vụ</label>
                                    <div class="mt-2">
                                        <input v-model="service.price" id="email" name="email" type="number"
                                            autocomplete="email"
                                            class="pl-[14px] block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                    </div>
                                    <p class="mt-3 text-sm leading-6 text-gray-600">Giá dịch vụ được tính tự động theo bảng
                                        giá của nhà cung cấp</p>
                                </div>
                            </div>
                        </div>

                        <div class="border-b border-gray-900/10 pb-12">
                            <h2 class="text-base font-semibold leading-7 text-gray-900">Gói hàng được gửi từ đâu?</h2>
                            <p class="mt-1 text-sm leading-6 text-gray-600">Những thông tin này có ảnh hưởng đến giá dịch vụ
                                dịch vụ</p>
                            <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div class="sm:col-span-2 sm:col-start-1">
                                    <label for="ward" class="block text-sm font-medium leading-6 text-gray-900">Miền</label>
                                    <div class="mt-2">
                                        <input v-model="from.domain" type="text" name="ward" id="ward" autocomplete="address-level3"
                                            class="pl-[14px] block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                    </div>
                                </div>

                                <div class="sm:col-span-2">
                                    <label for="city" class="block text-sm font-medium leading-6 text-gray-900">Tỉnh
                                        / Thành
                                        phố</label>
                                    <div class="mt-2">
                                        <input v-model="from.province" type="text" name="city" id="city" autocomplete="address-level2"
                                            class="pl-[14px] block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                    </div>
                                </div>

                                <div class="sm:col-span-2">
                                    <label for="region" class="block text-sm font-medium leading-6 text-gray-900">Quận /
                                        Huyện</label>
                                    <div class="mt-2">
                                        <input v-model="from.district" type="text" name="region" id="region" autocomplete="address-level1"
                                            class="pl-[14px] block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="border-b border-gray-900/10 pb-12">
                            <h2 class="text-base font-semibold leading-7 text-gray-900">Gói hàng được gửi đến đâu?</h2>
                            <p class="mt-1 text-sm leading-6 text-gray-600">Những thông tin này có ảnh hưởng đến giá dịch vụ
                                dịch vụ</p>
                            <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div class="sm:col-span-2 sm:col-start-1">
                                    <label for="ward" class="block text-sm font-medium leading-6 text-gray-900">Miền</label>
                                    <div class="mt-2">
                                        <input v-model="to.domain" type="text" name="ward" id="ward" autocomplete="address-level3"
                                            class="pl-[14px] block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                    </div>
                                </div>

                                <div class="sm:col-span-2">
                                    <label for="city" class="block text-sm font-medium leading-6 text-gray-900">Tỉnh
                                        / Thành
                                        phố</label>
                                    <div class="mt-2">
                                        <input v-model="to.province" type="text" name="city" id="city" autocomplete="address-level2"
                                            class="pl-[14px] block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                    </div>
                                </div>

                                <div class="sm:col-span-2">
                                    <label for="region" class="block text-sm font-medium leading-6 text-gray-900">Quận /
                                        Huyện</label>
                                    <div class="mt-2">
                                        <input v-model="to.district" type="text" name="region" id="region" autocomplete="address-level1"
                                            class="pl-[14px] block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="mt-6 flex items-center justify-end gap-x-6">
                        <RouterLink to="/management" class="text-sm font-semibold leading-6 text-gray-900" target="_blank">
                            <div class="">
                                Huỷ</div>
                            <span class="sr-only">Huỷ</span>
                        </RouterLink>
                        <button type="submit"
                            class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Submit</button>
                    </div>
                </form>

            </div>
        </div>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { ref, onBeforeMount } from "vue";
import { getProviders } from "@/services/provider.service";
import { getServiceTypesByProviderId } from "@/services/service-type.service";
import { getServices, createService, updateService, deteleService, getServiceById } from "@/services/service.service";
import { createLocation } from "@/services/location.service";
import { useAuth0 } from "@auth0/auth0-vue";
import { Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions } from '@headlessui/vue'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid';
import PageLoader from "@/components/page-loader.vue";
const { getAccessTokenSilently } = useAuth0();

const service = ref(
    {
        service_type_id: 1,
        name: "",
        description: "",
        delivery_date: "",
        weight: "",
        price: "",
    }
)

const from = ref(
    {
        service_id: "",
        domain: "Miền Nam",
        province: "TP Hồ Chí Minh Minh",
        district: "Quận 1",
        type: "FROM"
    }
)
const to = ref(
    {
        service_id: "",
        domain: "Miền Bắc",
        province: "TP Hồ Chí Minh Minh",
        district: "Quận 1",
        type: "TO"
    }
)

// variables
const providers = ref();
const selected = ref()
const serviceTypes = ref();
const selectedServiceTypes = ref();
const { isLoading, } = useAuth0();

const getProvidersAxios = async () => {
    const accessToken = await getAccessTokenSilently();
    const { data, error } = await getProviders(accessToken);

    if (data) {
        providers.value = data;
        isLoading.value = false;
        getServiceTypesByProviderIdAxios(providers.value[0].id);
    }

    if (error) {
        // result.value = JSON.stringify(error, null, 2);
    }
};

const getServiceTypesByProviderIdAxios = async (providerId) => {
    const accessToken = await getAccessTokenSilently();
    const { data, error } = await getServiceTypesByProviderId(accessToken, providerId);

    if (data) {
        serviceTypes.value = data;
        selectedServiceTypes.value = serviceTypes.value[0]
    }

    if (error) {
        // result.value = JSON.stringify(error, null, 2);
    }
};

onBeforeMount(async () => {
    await getProvidersAxios();
    selected.value = providers.value[0]
})

// change provider
function changeServiceType(providerId) {
    getServiceTypesByProviderIdAxios(providerId);
}


// create service
const createServiceAxios = async () => {
    const accessToken = await getAccessTokenSilently();
    const { data, error } = await createService(accessToken, service.value);
    const result = ref({});

    if (data) {
        result.value = data;
        // edit data location
        from.value.service_id = data.id;
        to.value.service_id = data.id;

        // Create location
        createLocationAxios(from.value);
        createLocationAxios(to.value);
    }

    if (error) {
        result.value = JSON.stringify(error, null, 2);
    }
};

// create the location
const createLocationAxios = async (location) => {
    const accessToken = await getAccessTokenSilently();
    const { data, error } = await createLocation(accessToken, location);
    const result = ref({});

    if (data) {
        result.value = data;
    }

    if (error) {
        result.value = JSON.stringify(error, null, 2);
    }
    // console.log(result.value);
};

function submitHandle(event) {
    // Ngăn chặn sự kiện mặc định của form để tránh tải lại trang
    event.preventDefault();

    // edit data
    service.value.service_type_id = selectedServiceTypes.value.id;

    // Create service 
    createServiceAxios();
}
</script>