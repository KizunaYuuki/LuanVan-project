
<template>
    <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div class="sm:col-span-2 sm:col-start-1">
            <div class="block text-sm font-medium leading-6 text-gray-900">Miền<strong
                    class="text-[red] ml-[8px]">*</strong></div>
            <Combobox v-model="selectedDomain">
                <div class="relative mt-1">
                    <div
                        class="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                        <ComboboxInput
                            class="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0 outline-none"
                            :displayValue="(domain) => domain.Name" @change="queryDomain = $event.target.value" />
                        <ComboboxButton class="absolute inset-y-0 right-0 flex items-center pr-2">
                            <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                        </ComboboxButton>
                    </div>
                    <TransitionRoot leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0"
                        @after-leave="queryDomain = ''">
                        <ComboboxOptions
                            class="absolute mt-1 max-h-40 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            <div v-if="filteredDomain.length === 0 && queryDomain !== ''"
                                class="relative cursor-default select-none py-2 px-4 text-gray-700">
                                Chưa tìm thấy...
                            </div>

                            <ComboboxOption v-for="domain in filteredDomain" as="template" :key="domain.id" :value="domain"
                                v-slot="{ selected, active }">
                                <li @click="changeDomain(domain)"
                                    class="relative cursor-default select-none py-2 pl-10 pr-4" :class="{
                                        'bg-teal-600 text-white': active,
                                        'text-gray-900': !active,
                                    }">
                                    <span class="block truncate"
                                        :class="{ 'font-medium': selected, 'font-normal': !selected }">
                                        {{ domain.Name }}
                                    </span>
                                    <span v-if="selected" class="absolute inset-y-0 left-0 flex items-center pl-3"
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

        <div class="sm:col-span-2">
            <div class="block text-sm font-medium leading-6 text-gray-900">Tỉnh
                / Thành
                phố<strong class="text-[red] ml-[8px]">*</strong></div>
            <Combobox v-model="selectedProvince">
                <div class="relative mt-1">
                    <div
                        class="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                        <ComboboxInput
                            class="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0 outline-none"
                            :displayValue="(province) => province.Name" @change="queryProvince = $event.target.value" />
                        <ComboboxButton class="absolute inset-y-0 right-0 flex items-center pr-2">
                            <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                        </ComboboxButton>
                    </div>
                    <TransitionRoot leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0"
                        @after-leave="queryProvince = ''">
                        <ComboboxOptions
                            class="absolute mt-1 max-h-40 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            <div v-if="filteredProvince.length === 0 && queryProvince !== ''"
                                class="relative cursor-default select-none py-2 px-4 text-gray-700">
                                Chưa tìm thấy...
                            </div>

                            <ComboboxOption v-for="province in filteredProvince" as="template" :key="province.id"
                                :value="province" v-slot="{ selected, active }">
                                <li @click="changeProvince(province)"
                                    class="relative cursor-default select-none py-2 pl-10 pr-4" :class="{
                                        'bg-teal-600 text-white': active,
                                        'text-gray-900': !active,
                                    }">
                                    <span class="block truncate"
                                        :class="{ 'font-medium': selected, 'font-normal': !selected }">
                                        {{ province.Name }}
                                    </span>
                                    <span v-if="selected" class="absolute inset-y-0 left-0 flex items-center pl-3"
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

        <div class="sm:col-span-2">
            <div class="block text-sm font-medium leading-6 text-gray-900">Quận /
                Huyện<strong class="text-[red] ml-[8px]">*</strong></div>
            <Combobox v-model="selectedDistrict">
                <div class="relative mt-1">
                    <div
                        class="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                        <ComboboxInput
                            class="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0 outline-none"
                            :displayValue="(district) => district.Name" @change="queryDistrict = $event.target.value" />
                        <ComboboxButton class="absolute inset-y-0 right-0 flex items-center pr-2">
                            <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                        </ComboboxButton>
                    </div>
                    <TransitionRoot leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0"
                        @after-leave="queryDistrict = ''">
                        <ComboboxOptions
                            class="absolute mt-1 max-h-40 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            <div v-if="filteredDistrict.length === 0 && queryDistrict !== ''"
                                class="relative cursor-default select-none py-2 px-4 text-gray-700">
                                Chưa tìm thấy...
                            </div>

                            <ComboboxOption v-for="district in filteredDistrict" as="template" :key="district.id"
                                :value="district" v-slot="{ selected, active }">
                                <li @click="sendLocation(district)"
                                    class="relative cursor-default select-none py-2 pl-10 pr-4" :class="{
                                        'bg-teal-600 text-white': active,
                                        'text-gray-900': !active,
                                    }">
                                    <span class="block truncate"
                                        :class="{ 'font-medium': selected, 'font-normal': !selected }">
                                        {{ district.Name }}
                                    </span>
                                    <span v-if="selected" class="absolute inset-y-0 left-0 flex items-center pl-3"
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
    </div>
</template>

<script setup>
import { ref, computed, onBeforeMount } from 'vue'
import {
    Combobox,
    ComboboxInput,
    ComboboxButton,
    ComboboxOptions,
    ComboboxOption,
    TransitionRoot,
} from '@headlessui/vue'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid';
import { getLocationsForCreateService } from "@/services/location.service";

const emit = defineEmits(['sendLocation']);

const location = ref();
const province = ref();
const district = ref();

let selectedDomain = ref();
let selectedProvince = ref();
let selectedDistrict = ref();

let queryDomain = ref('');
let queryProvince = ref('');
let queryDistrict = ref('');

function sendLocation(district) {
    let location
    if (district) {
        location = {
            domain: selectedDomain.value,
            province: selectedProvince.value,
            district: district
        };
    } else {
        location = {
            domain: selectedDomain.value,
            province: selectedProvince.value,
            district: ''
        };
    }
    emit('sendLocation', location);
}

let filteredDomain = computed(() =>
    queryDomain.value === ''
        ? location.value
        : location.value.filter((element) =>
            element.Name
                .toLowerCase()
                .replace(/\s+/g, '')
                .includes(queryDomain.value.toLowerCase().replace(/\s+/g, ''))
        )
)

let filteredProvince = computed(() =>
    queryProvince.value === ''
        ? province.value
        : province.value.filter((element) =>
            element.Name
                .toLowerCase()
                .replace(/\s+/g, '')
                .includes(queryProvince.value.toLowerCase().replace(/\s+/g, ''))
        )
)

let filteredDistrict = computed(() =>
    queryDistrict.value === ''
        ? district.value
        : district.value.filter((element) =>
            element.Name
                .toLowerCase()
                .replace(/\s+/g, '')
                .includes(queryDistrict.value.toLowerCase().replace(/\s+/g, ''))
        )
)

function changeDomain(data) {
    console.log(data.Provice);
    province.value = data.Provice;
    selectedProvince.value = [];
    selectedDistrict.value = [];
    sendLocation();
}

function changeProvince(data) {
    console.log(data.Districts);
    district.value = data.Districts;
    selectedDistrict.value = [];
    sendLocation();
}

const getLocationsForCreateServiceAxios = async () => {
    const { data, error } = await getLocationsForCreateService();

    if (data) {
        console.log(data);
        location.value = data
        selectedDomain.value = ref(data[0])
    }

    if (error) {
        console.log(error)
    }
};

onBeforeMount(async () => {
    // run function
    getLocationsForCreateServiceAxios();
});
</script>
