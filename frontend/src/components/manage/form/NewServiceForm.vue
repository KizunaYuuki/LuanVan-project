<template>
    <!-- Wait auth0 load -->
    <div v-if="isLoading" class="page-layout">
        <PageLoader />
    </div>

    <div v-else>
        <div class="mx-auto max-w-5xl bg-white p-16 rounded-lg">

            <!-- Title -->
            <div class="flex-auto mb-10">
                <h1 class="text-[#111827] leading-[3rem] font-[600] text-[1.5rem]">Thêm
                    dịch vụ</h1>
            </div>

            <form class="max-w-4xl" @submit="submitHandle">
                <div class="space-y-12">
                    <div class="border-b border-gray-900/10 pb-12">
                        <h2 class="text-base font-semibold leading-7 text-gray-900">Nhà cung cấp và Loại dịch vụ</h2>
                        <p class="mt-1 text-sm leading-6 text-gray-600">Những thông tin này có ảnh hưởng lớn đến giá
                            dịch vụ</p>

                        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div class="sm:col-span-3">
                                <!-- <Listbox as="div" v-model="selectedProvider">
                                    <ListboxLabel class="block text-sm font-medium leading-6 text-gray-900">Chọn
                                        nhà cung cấp dịch vụ
                                    </ListboxLabel>
                                    <div class="relative mt-2">
                                        <ListboxButton v-if="selectedProvider?.image"
                                            class="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                                            <span class="flex items-center">
                                                <img :src="selectedProvider.image" alt=""
                                                    class="h-5 w-5 flex-shrink-0 rounded-full bg-[#607d8b]" />
                                                <span v-if="selectedProvider?.name" class="ml-3 block truncate">{{
                                                    selectedProvider.name
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
                                                    <li @click="changeProvider(provider.id)"
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
                                </Listbox> -->
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
                                    <span class="text-sm font-medium leading-6 text-gray-900 ml-2">Thêm nhà cung
                                        cấp</span>
                                </button>
                            </div>

                            <div class="sm:col-span-3">
                                <!-- <Listbox as="div" v-model="selectedServiceType">
                                    <ListboxLabel class="block text-sm font-medium leading-6 text-gray-900">Chọn
                                        loại dịch vụ
                                    </ListboxLabel>
                                    <div class="relative mt-2">
                                        <ListboxButton v-if="selectedServiceType?.name"
                                            class="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                                            <span class="flex items-center">
                                                <span class="ml-3 block truncate">{{
                                                    selectedServiceType.name }}</span>
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
                                                    v-slot="{ active, selectedServiceType }">
                                                    <li @click="changeServiceType(serviceType.id)"
                                                        :class="[active ? 'bg-indigo-600 text-white' : 'text-gray-900', 'relative cursor-default select-none py-2 pl-3 pr-9']">
                                                        <div class="flex items-center">
                                                            <span
                                                                :class="[selectedServiceType ? 'font-semibold' : 'font-normal', 'ml-3 block truncate']">{{
                                                                    serviceType.name }}</span>
                                                        </div>

                                                        <span v-if="selectedServiceType"
                                                            :class="[active ? 'text-white' : 'text-indigo-600', 'absolute inset-y-0 right-0 flex items-center pr-4']">
                                                            <CheckIcon class="h-5 w-5" aria-hidden="true" />
                                                        </span>
                                                    </li>
                                                </ListboxOption>
                                            </ListboxOptions>
                                        </transition>
                                    </div>
                                </Listbox> -->
                                <div class="block text-sm font-medium leading-6 text-gray-900">Chọn
                                    loại dịch vụ<strong class="text-[red] ml-[8px]">*</strong>
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
                                                <div v-if="filteredServiceType.length === 0 && queryServiceType === ''"
                                                    class="relative cursor-default select-none py-2 px-4 text-gray-700">
                                                    Chưa tìm thấy loại dịch vụ nào
                                                </div>

                                                <ComboboxOption v-for="serviceType in filteredServiceType" as="template"
                                                    :key="serviceType.id" :value="serviceType"
                                                    v-slot="{ selected, active }">
                                                    <li @click="changeServiceType(serviceType.id)"
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
                                    <span class="text-sm font-medium leading-6 text-gray-900 ml-2">Thêm loại dịch
                                        vụ</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Info -->
                    <div class="border-b border-gray-900/10 pb-12">
                        <h2 class="text-base font-semibold leading-7 text-gray-900">Thông tin cơ bản</h2>
                        <p class="mt-1 text-sm leading-6 text-gray-600">Cung cấp những thông tin như tên hay mô tả của
                            dịch vụ</p>

                        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div class="sm:col-span-2">
                                <label for="service_name" class="block text-sm font-medium leading-6 text-gray-900">Tên
                                    dịch vụ<strong class="text-[red] ml-[8px]">*</strong></label>
                                <div class="mt-2">
                                    <input type="text" v-model="service.name" name="service_name" id="service_name"
                                        class="outline-none hover:border-[#9aa0a6] shadow-inner border border-gray-200 pl-[14px] block w-full rounded-md py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6">
                                </div>
                            </div>

                            <div class="col-span-full">
                                <label for="service_description"
                                    class="block text-sm font-medium leading-6 text-gray-900">Mô tả về
                                    dịch vụ</label>
                                <div class="mt-2">
                                    <textarea v-model="service.description" id="service_description"
                                        name="service_description" rows="3"
                                        class="outline-none hover:border-[#9aa0a6] shadow-inner border border-gray-200 pl-[14px] block w-full rounded-md py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6" />
                                </div>
                                <p class="mt-3 text-sm leading-6 text-gray-600">Viết mô tả ngắn gọn về dịch vụ vận
                                    chuyển
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- FROM -->
                    <div class="border-b border-gray-900/10 pb-12">
                        <h2 class="text-base font-semibold leading-7 text-gray-900">Gói hàng được gửi từ đâu?</h2>
                        <p class="mt-1 text-sm leading-6 text-gray-600">Những thông tin này có ảnh hưởng đến giá dịch vụ
                            dịch vụ</p>
                        <Location
                            @sendLocation="(data) => { updateFromLocation(data), from.domain = data.domain.Name, from.province = data.province.Name, from.district = data.district.Name, automaticPriceCalculation(data) }">
                        </Location>
                    </div>

                    <!-- TO -->
                    <div class="border-b border-gray-900/10 pb-12">
                        <h2 class="text-base font-semibold leading-7 text-gray-900">Gói hàng được gửi đến đâu?</h2>
                        <p class="mt-1 text-sm leading-6 text-gray-600">Những thông tin này có ảnh hưởng đến giá dịch vụ
                            dịch vụ</p>
                        <Location
                            @sendLocation="(data) => { to.domain = data.domain.Name, to.province = data.province.Name, to.district = data.district.Name, automaticPriceCalculation(data) }">
                        </Location>
                    </div>

                    <!-- Automatic -->
                    <div class="border-b border-gray-900/10 pb-12">
                        <h2 class="text-base font-semibold leading-7 text-gray-900">Thông tin Dịch vụ</h2>
                        <p class="mt-1 text-sm leading-6 text-gray-600">Khi nhập đầy đủ thông tin ở những phần trên, và nhập
                            thêm Trọng lượng tối đa của gói hàng. Các giá trị còn lại sẽ được tự động tính dựa vào Bảng giá
                            của nhà cung cấp</p>

                        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div class="sm:col-span-3">
                                <label for="service_weight" class="block text-sm font-medium leading-6 text-gray-900">Trọng
                                    lượng tối đa của
                                    gói hàng
                                    (<span class="text-[#0096fa]">Gram</span>)
                                    <strong class="text-[red] ml-[8px]">*</strong></label>
                                <div class="mt-2">
                                    <input @change="automaticPriceCalculation()" v-model="service.weight"
                                        id="service_weight" name="service_weight" type="number"
                                        autocomplete="service_weight"
                                        class="outline-none hover:border-[#9aa0a6] shadow-inner border border-gray-200 pl-[14px] block w-full rounded-md py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6">
                                </div>
                            </div>

                            <div class="sm:col-span-3">
                                <label for="service_price" class="block text-sm font-medium leading-6 text-gray-900">Giá
                                    dịch
                                    vụ<strong class="text-[red] ml-[8px]">*</strong></label>
                                <div class="mt-2">
                                    <input v-model="service.price" id="service_price" name="service_price" type="number"
                                        class="outline-none hover:border-[#9aa0a6] shadow-inner border border-gray-200 pl-[14px] block w-full rounded-md py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6">
                                </div>
                                <p class="mt-3 text-sm leading-6 text-gray-600">Giá dịch vụ được tính tự động theo bảng
                                    giá của nhà cung cấp khi đã điền đầy đủ thông tin</p>
                            </div>
                            <div class="sm:col-span-3">
                                <label for="service_delivery_min_time"
                                    class="block text-sm font-medium leading-6 text-gray-900">Thời
                                    gian vận chuyển sớm nhất (<span class="text-[#0096fa]">Tính theo giờ</span>)</label>
                                <div class="mt-2">
                                    <input v-model="service.delivery_min_time" type="number"
                                        name="service_delivery_min_time" id="service_delivery_min_time"
                                        class="outline-none hover:border-[#9aa0a6] shadow-inner border border-gray-200 pl-[14px] block w-full rounded-md py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6">
                                </div>
                            </div>

                            <div class="sm:col-span-3">
                                <label for="service_delivery_max_time"
                                    class="block text-sm font-medium leading-6 text-gray-900">Thời
                                    gian vận chuyển trể nhất (<span class="text-[#0096fa]">Tính theo giờ</span>)<strong
                                        class="text-[red] ml-[8px]">*</strong></label>
                                <div class="mt-2">
                                    <input v-model="service.delivery_max_time" type="number"
                                        name="service_delivery_max_time" id="service_delivery_max_time"
                                        class="outline-none hover:border-[#9aa0a6] shadow-inner border border-gray-200 pl-[14px] block w-full rounded-md py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Button -->
                <div class="mt-6 flex items-center justify-end gap-x-6">
                    <RouterLink to="/management/service" class="text-sm font-semibold leading-6 text-gray-900">
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
import { getProviders } from "@/services/provider.service";
import { getServiceTypesByProviderId } from "@/services/service-type.service";
import { getServices, createService, updateService, deteleService, getServiceById } from "@/services/service.service";
import { getPriceListsByServiceTypeId } from "@/services/price-list.service";
import { createLocation } from "@/services/location.service";
import { useAuth0 } from "@auth0/auth0-vue";
import { Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions } from '@headlessui/vue'
import PageLoader from "@/components/page-loader.vue";
import Location from '@/components/Location.vue';
import { getLocationsForCreateService } from "@/services/location.service";
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

import { useRouter } from 'vue-router'
const router = useRouter()

const { getAccessTokenSilently } = useAuth0();

const getEmitFromLocation = ref();
const getEmitToLocation = ref();

const service = ref(
    {
        service_type_id: 1,
        name: "",
        description: "",
        delivery_date: "",
        delivery_max_time: "",
        delivery_min_time: "",
        weight: "",
        price: "",
    }
)

const from = ref(
    {
        service_id: "",
        domain: "",
        province: "",
        district: "",
        type: "FROM"
    }
)
const to = ref(
    {
        service_id: "",
        domain: "",
        province: "",
        district: "",
        type: "TO"
    }
)

// variables
const providers = ref();
const selectedProvider = ref()
const serviceTypes = ref();
const selectedServiceType = ref();
const { isLoading, } = useAuth0();
const location = ref();
const price_list = ref();

const queryProvider = ref('');
const queryServiceType = ref('');

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

const getLocationsForCreateServiceAxios = async () => {
    const { data, error } = await getLocationsForCreateService();

    if (data) {
        // console.log(data);
        location.value = data
    }

    if (error) {
        // console.log(error)
    }
};

// Test data
function updateFromLocation(data) {
    // console.log(data);
}
const goToAddProviderPage = async () => {
    router.push('/management/provider/new');
};

const goToAddServiceTypePage = async () => {
    router.push('/management/service-type/new');
};

// Tính giá dịch vụ đựa vào bảng giá của nhà cung cấp
function automaticPriceCalculation(data) {
    // validate
    if ((to.value.district !== '' && to.value.district !== undefined) &&
        (from.value.district !== '' && from.value.district !== undefined) &&
        service.value.weight !== '' && service.value.weight !== undefined &&
        selectedServiceType.value && price_list.value) {
        if (to.value.domain === from.value.domain) {
            // console.log(price_list.value);
            // Nội miền - Nội tỉnh
            if (to.value.province === from.value.province) {
                // Tính thời gian cho dịch vụ
                // if (!service.value.delivery_max_time && !service.value.delivery_min_time) {
                //     if (selectedServiceType.value.intra_province_min_time !== 0) {
                //         service.value.delivery_min_time = selectedServiceType.value.intra_province_min_time;
                //         service.value.delivery_max_time = selectedServiceType.value.intra_province_max_time;
                //     } else {
                //         service.value.delivery_max_time = selectedServiceType.value.intra_province_max_time;
                //     }
                // }
                if (selectedServiceType.value.intra_province_min_time !== 0) {
                    service.value.delivery_min_time = selectedServiceType.value.intra_province_min_time;
                    service.value.delivery_max_time = selectedServiceType.value.intra_province_max_time;
                } else {
                    service.value.delivery_min_time = '';
                    service.value.delivery_max_time = selectedServiceType.value.intra_province_max_time;
                }

                price_list.value.forEach(element => {
                    if (service.value.weight > element.start_weight && service.value.weight <= element.end_weight && element.end_weight <= selectedServiceType.value.break_weight) {
                        // service.value.price
                        if (element.special_price !== 0) {
                            service.value.price = element.special_price;
                            // console.log('Nội miền - Nội tỉnh Đặt biệt ' + service.value.price);
                            return;
                        } else {
                            service.value.price = element.intra_province_price;
                            // console.log('Nội miền - Nội tỉnh ' + service.value.price);
                            return;
                        }
                    }
                });

                // Weight lớn hơn break_weight
                if (service.value.weight > selectedServiceType.value.break_weight && service.value.price !== 0) {
                    // Tính giá dựa vào khối lượng, mỗi 500g tăng giá theo bảng giá
                    let temp = service.value.weight - 2000;
                    temp = parseInt(temp / 500);

                    let tempPrice;
                    price_list.value.forEach(element => {
                        if (element.end_weight === selectedServiceType.value.break_weight) {
                            tempPrice = element.intra_province_price;
                        }
                    });

                    if (temp === 0) {
                        service.value.price = tempPrice + selectedServiceType.value.intra_province_extra_price;
                        // console.log(selectedServiceType.value.intra_province_extra_price);
                        // console.log('Nội miền - Nội tỉnh với trọng lượng > ' + selectedServiceType.value.break_weight + ":" + service.value.price);
                    }
                    else {
                        service.value.price = tempPrice + (selectedServiceType.value.intra_province_extra_price * temp);
                        // console.log(selectedServiceType.value.intra_province_extra_price);
                        // console.log('Nội miền - Nội tỉnh với trọng lượng > ' + selectedServiceType.value.break_weight + ":" + service.value.price);
                    }
                }
            }
            // Nội miền - Liên tỉnh
            else {
                // Tính thời gian cho dịch vụ
                // if (!service.value.delivery_max_time && !service.value.delivery_min_time) {
                //     if (selectedServiceType.value.inter_provincial_min_time !== 0) {
                //         service.value.delivery_min_time = selectedServiceType.value.inter_provincial_min_time;
                //         service.value.delivery_max_time = selectedServiceType.value.inter_provincial_max_time;
                //     } else {
                //         service.value.delivery_max_time = selectedServiceType.value.inter_provincial_max_time;
                //     }
                // }
                if (selectedServiceType.value.inter_provincial_min_time !== 0) {
                    service.value.delivery_min_time = selectedServiceType.value.inter_provincial_min_time;
                    service.value.delivery_max_time = selectedServiceType.value.inter_provincial_max_time;
                } else {
                    service.value.delivery_min_time = '';
                    service.value.delivery_max_time = selectedServiceType.value.inter_provincial_max_time;
                }

                price_list.value.forEach(element => {
                    if (service.value.weight > element.start_weight && service.value.weight <= element.end_weight && element.end_weight <= selectedServiceType.value.break_weight) {
                        // service.value.price
                        if (element.special_price !== 0) {
                            service.value.price = element.special_price;
                            // console.log('Nội miền - Liên tỉnh Đặt biệt ' + service.value.price);
                            return;
                        } else {
                            service.value.price = element.inter_provincial_price;
                            // console.log('Nội miền - Liên tỉnh ' + service.value.price);
                            return;
                        }
                    }
                });

                // Weight lớn hơn break_weight
                if (service.value.weight > selectedServiceType.value.break_weight && service.value.price !== 0) {
                    // Tính giá dựa vào khối lượng, mỗi 500g tăng giá theo bảng giá
                    let temp = service.value.weight - 2000;
                    temp = parseInt(temp / 500);

                    let tempPrice;
                    price_list.value.forEach(element => {
                        if (element.end_weight === selectedServiceType.value.break_weight) {
                            tempPrice = element.inter_provincial_price;
                        }
                    });

                    if (temp === 0) {
                        service.value.price = tempPrice + selectedServiceType.value.inter_provincial_extra_price;
                        // console.log(selectedServiceType.value.inter_provincial_extra_price);
                        // console.log('Nội miền - Liên tỉnh với trọng lượng > ' + selectedServiceType.value.break_weight + ":" + service.value.price);
                    }
                    else {
                        service.value.price = tempPrice + (selectedServiceType.value.inter_provincial_extra_price * temp);
                        // console.log(selectedServiceType.value.inter_provincial_extra_price);
                        // console.log('Nội miền - Liên tỉnh với trọng lượng > ' + selectedServiceType.value.break_weight + ":" + service.value.price);
                    }
                }
            }
        }
        //  Liên miền
        else {
            // Tính thời gian cho dịch vụ
            // if (!service.value.delivery_max_time && !service.value.delivery_min_time) {
            //     if (selectedServiceType.value.inter_domain_min_time !== 0) {
            //         service.value.delivery_min_time = selectedServiceType.value.inter_domain_min_time;
            //         service.value.delivery_max_time = selectedServiceType.value.inter_domain_max_time;
            //     }
            //     else {
            //         service.value.delivery_max_time = selectedServiceType.value.inter_domain_max_time;
            //     }
            // }
            if (selectedServiceType.value.inter_domain_min_time !== 0) {
                service.value.delivery_min_time = selectedServiceType.value.inter_domain_min_time;
                service.value.delivery_max_time = selectedServiceType.value.inter_domain_max_time;
            }
            else {
                service.value.delivery_min_time = '';
                service.value.delivery_max_time = selectedServiceType.value.inter_domain_max_time;
            }

            price_list.value.forEach(element => {
                if (service.value.weight > element.start_weight && service.value.weight <= element.end_weight && element.end_weight <= selectedServiceType.value.break_weight) {
                    // service.value.price
                    if (element.special_price !== 0) {
                        service.value.price = element.special_price;
                        // console.log('Liên miền Đặt biệt ' + service.value.price);
                        return;
                    } else {
                        service.value.price = element.inter_domain_price;
                        // console.log('Liên miền ' + service.value.price);
                        return;
                    }
                }
            });

            // Weight lớn hơn break_weight
            if (service.value.weight > selectedServiceType.value.break_weight && service.value.price !== 0) {
                // Tính giá dựa vào khối lượng, mỗi 500g tăng giá theo bảng giá
                let temp = service.value.weight - 2000;
                temp = parseInt(temp / 500);

                let tempPrice;
                price_list.value.forEach(element => {
                    if (element.end_weight === selectedServiceType.value.break_weight) {
                        tempPrice = element.inter_domain_price;
                    }
                });

                if (temp === 0) {
                    service.value.price = tempPrice + selectedServiceType.value.inter_domain_extra_price;
                    // console.log(selectedServiceType.value.inter_domain_extra_price);
                    // console.log('Liên miền với trọng lượng > ' + selectedServiceType.value.break_weight + ":" + service.value.price);
                }
                else {
                    service.value.price = tempPrice + (selectedServiceType.value.inter_domain_extra_price * temp);
                    // console.log(selectedServiceType.value.inter_domain_extra_price);
                    // console.log('Liên miền với trọng lượng > ' + selectedServiceType.value.break_weight + ":" + service.value.price);
                }
            }
        }
    } else {
        return;
    }
}

// change service type
async function changeServiceType(service_type_id) {
    // console.log(selectedServiceType.value);
    if (service_type_id) {
        await getPriceListsByServiceTypeIdAxios(service_type_id);
    }
    automaticPriceCalculation();
}

// change provider
function changeProvider(providerId) {
    getServiceTypesByProviderIdAxios(providerId);
}

const getProvidersAxios = async () => {
    const accessToken = await getAccessTokenSilently();
    const { data, error } = await getProviders(accessToken);

    if (data) {
        providers.value = data;
        selectedProvider.value = {}
        isLoading.value = false;

        // Khi chưa chọn Provider thì danh sách serviceType = []
        serviceTypes.value = [];
        selectedServiceType.value = []
        // console.log(data);
    }

    if (error) {
        // console.log(error);
    }
};

const getServiceTypesByProviderIdAxios = async (providerId) => {
    const accessToken = await getAccessTokenSilently();
    const { data, error } = await getServiceTypesByProviderId(accessToken, providerId);

    if (data) {
        serviceTypes.value = data;
        selectedServiceType.value = []
        // console.log(data);
    }

    if (error) {
        // console.log(error);
    }
};

const getPriceListsByServiceTypeIdAxios = async (service_type_id) => {
    const accessToken = await getAccessTokenSilently();
    const { data, error } = await getPriceListsByServiceTypeId(accessToken, service_type_id);

    if (data) {
        // console.log(data);
        price_list.value = data;
    }

    if (error) {
        // console.log(error);
    }
};

onBeforeMount(() => {
    getProvidersAxios();
    getLocationsForCreateServiceAxios();
})

// create service
const createServiceAxios = async () => {
    const accessToken = await getAccessTokenSilently();

    // validate
    if (service.value.name === '' || service.value.delivery_max_time === '' || service.value.price === '' || service.value.weight === '' ||
        to.value.domain === '' || to.value.province === '' || to.value.district === '' ||
        from.value.domain === '' || from.value.province === '' || from.value.district === '') {
        toast.warning("Oh, Có thiếu sót gì đó! Xem lại những Input có * đỏ", { timeout: 3000 });
        return;
    }

    // edit data service
    if (service.value.delivery_min_time === '' && service.value.delivery_max_time !== '') {
        if (service.value.delivery_max_time > 24) {
            service.value.delivery_date = `${service.value.delivery_max_time / 24.0} ngày`
        }
        else {
            service.value.delivery_date = `${service.value.delivery_max_time}h`
        }
        service.value.delivery_min_time = null;
    }
    else if (service.value.delivery_min_time !== '' && service.value.delivery_max_time !== '') {
        if (service.value.delivery_min_time >= 24) {
            service.value.delivery_date = `${service.value.delivery_min_time / 24.0} - ${service.value.delivery_max_time / 24.0} ngày`
        }
        else {
            service.value.delivery_date = `${service.value.delivery_min_time} - ${service.value.delivery_max_time}h`
        }
    }

    const { data, error } = await createService(accessToken, service.value);
    const result = ref({});

    if (data) {
        result.value = data;
        // console.log(data);

        // edit data location
        from.value.service_id = data.service_id;
        to.value.service_id = data.service_id;

        // Create location
        createLocationAxios(from.value);
        createLocationAxios(to.value);
        toast.success("Đã tạo dịch vụ thành công", { timeout: 3000 });

        // Về trang quản lý dịch vụ
        router.push('/management/service');
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
        // console.log(data);
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
    service.value.service_type_id = selectedServiceType.value.id;

    // Create service 
    createServiceAxios();
}
</script>