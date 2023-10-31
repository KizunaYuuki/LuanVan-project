<template>
    <Header></Header>
    <main>
        <!-- Tìm kiếm dịch vụ -->
        <div class="min-h-[80vh] pt-8">
            <!-- Input -->
            <div
                class="mx-1 font-[600] shadow-xl shadow-[#0096fa6a] outline-[0.01px] outline-[#0096fa] outline border-0 border-[#0096fa] bg-white p-4 m-[16px] flex md:justify-evenly justify-center flex-wrap max-w-5xl lg:mx-auto text-gray-600 rounded-lg">
                <!-- Gửi từ -->
                <div class="m-4">
                    <div class="flex items-center justify-between mb-2">
                        <div class="flex items-center">
                            <span class="text-gray-500 sm:text-sm">
                                <svg width="16" height="16" viewBox="0 0 24 24" focusable="false"
                                    class="text-inherit fill-current">
                                    <path
                                        d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12zm10 6c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6z">
                                    </path>
                                </svg>
                            </span>
                            <span class="ml-2">Gửi từ</span>
                        </div>
                        <button @click="resetFromData()"
                            class="inline-flex justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border cursor-pointer rounded border-white ring-gray-200 bg-gray-50 text-black hover:bg-gray-100 p-1"
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

                    <!-- Tỉnh -->
                    <Combobox v-model="filter.province_from">
                        <div class="relative mt-1 z-10 hover:border-[#9aa0a6] border rounded-md border-gray-50">
                            <div
                                class="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                                <ComboboxInput
                                    class="w-72 border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-500 focus:ring-0 outline-none h-11"
                                    :displayValue="(province_from) => province_from.Name"
                                    @change="queryProvinceFrom = $event.target.value" placeholder="Tỉnh/Thành Phố" />
                                <ComboboxButton class="absolute inset-y-0 right-0 flex items-center pr-2">
                                    <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                                </ComboboxButton>
                            </div>
                            <TransitionRoot leave="transition ease-in duration-100" leaveFrom="opacity-100"
                                leaveTo="opacity-0" @after-leave="queryProvinceFrom = ''">
                                <ComboboxOptions
                                    class="absolute mt-1 max-h-40 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                    <div v-if="filteredProvinceFrom?.length === 0 && queryProvinceFrom !== ''"
                                        class="relative cursor-default select-none py-2 px-4 text-gray-700">
                                        Chưa tìm thấy...
                                    </div>

                                    <ComboboxOption v-for="province_from in filteredProvinceFrom" as="template"
                                        :key="province_from.id" :value="province_from" v-slot="{ selected, active }">
                                        <li @click="changeProvinceFrom(province_from)"
                                            class="relative cursor-default select-none py-2 pl-10 pr-4" :class="{
                                                'bg-sky-400 text-white': active,
                                                'text-gray-900': !active,
                                            }">
                                            <span class="block truncate"
                                                :class="{ 'font-medium': selected, 'font-normal': !selected }">
                                                {{ province_from.Name }}
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

                    <!-- Huyện -->
                    <Combobox v-model="filter.district_from">
                        <div class="relative mt-1 z-[1] hover:border-[#9aa0a6] border rounded-md border-gray-50">
                            <div
                                class="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                                <ComboboxInput
                                    class="w-72 border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-500 focus:ring-0 outline-none h-11"
                                    :displayValue="(district_from) => district_from.Name"
                                    @change="queryDistrictFrom = $event.target.value" placeholder="Quận/Huyện" />
                                <ComboboxButton class="absolute inset-y-0 right-0 flex items-center pr-2">
                                    <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                                </ComboboxButton>
                            </div>
                            <TransitionRoot leave="transition ease-in duration-100" leaveFrom="opacity-100"
                                leaveTo="opacity-0" @after-leave="queryDistrictFrom = ''">
                                <ComboboxOptions
                                    class="absolute mt-1 max-h-40 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                    <div v-if="filteredDistrictFrom?.length === 0 && queryDistrictFrom !== ''"
                                        class="relative cursor-default select-none py-2 px-4 text-gray-700">
                                        Chưa tìm thấy...
                                    </div>

                                    <div v-if="(filteredDistrictFrom?.length === 0 || !filteredDistrictFrom) && queryDistrictFrom === ''"
                                        class="relative cursor-default select-none py-2 px-4 text-red-500">
                                        Hãy chọn Tỉnh/Thành phố
                                    </div>

                                    <ComboboxOption v-for="district_from in filteredDistrictFrom" as="template"
                                        :key="district_from.id" :value="district_from" v-slot="{ selected, active }">
                                        <li @click="changeDistrictFrom(district_from)"
                                            class="relative cursor-default select-none py-2 pl-10 pr-4" :class="{
                                                'bg-sky-400 text-white': active,
                                                'text-gray-900': !active,
                                            }">
                                            <span class="block truncate"
                                                :class="{ 'font-medium': selected, 'font-normal': !selected }">
                                                {{ district_from.Name }}
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

                <!-- Gửi đến -->
                <div class="m-4">
                    <div class="flex items-center justify-between mb-2">
                        <div class="flex items-center">
                            <span class="text-gray-500 sm:text-sm">
                                <svg width="24" height="24" viewBox="0 0 24 24" focusable="false"
                                    class="text-inherit fill-current">
                                    <path
                                        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z">
                                    </path>
                                    <circle cx="12" cy="9" r="2.5"></circle>
                                </svg>
                            </span>
                            <span class="ml-2">Gửi đến</span>
                        </div>
                        <button @click="resetToData()"
                            class="inline-flex justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border cursor-pointer rounded border-white ring-gray-200 bg-gray-50 text-black hover:bg-gray-100 p-1"
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

                    <!-- Tỉnh -->
                    <Combobox v-model="filter.province_to">
                        <div class="relative mt-1 z-10 hover:border-[#9aa0a6] border rounded-md border-gray-50">
                            <div
                                class="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                                <ComboboxInput
                                    class="w-72 border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-500 focus:ring-0 outline-none h-11"
                                    :displayValue="(province_to) => province_to.Name"
                                    @change="queryProvinceTo = $event.target.value" placeholder="Tỉnh/Thành Phố" />
                                <ComboboxButton class="absolute inset-y-0 right-0 flex items-center pr-2">
                                    <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                                </ComboboxButton>
                            </div>
                            <TransitionRoot leave="transition ease-in duration-100" leaveFrom="opacity-100"
                                leaveTo="opacity-0" @after-leave="queryProvinceTo = ''">
                                <ComboboxOptions
                                    class="absolute mt-1 max-h-40 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                    <div v-if="filteredProvinceTo?.length === 0 && queryProvinceTo !== ''"
                                        class="relative cursor-default select-none py-2 px-4 text-gray-700">
                                        Chưa tìm thấy...
                                    </div>

                                    <ComboboxOption v-for="province_to in filteredProvinceTo" as="template"
                                        :key="province_to.id" :value="province_to" v-slot="{ selected, active }">
                                        <li @click="changeProvinceTo(province_to)"
                                            class="relative cursor-default select-none py-2 pl-10 pr-4" :class="{
                                                'bg-sky-400 text-white': active,
                                                'text-gray-900': !active,
                                            }">
                                            <span class="block truncate"
                                                :class="{ 'font-medium': selected, 'font-normal': !selected }">
                                                {{ province_to.Name }}
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

                    <!-- Huyện -->
                    <Combobox v-model="filter.district_to">
                        <div class="relative mt-1 z-[1] hover:border-[#9aa0a6] border rounded-md border-gray-50">
                            <div
                                class="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                                <ComboboxInput
                                    class="w-72 border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-500 focus:ring-0 outline-none h-11"
                                    :displayValue="(district_to) => district_to.Name"
                                    @change="queryDistrictTo = $event.target.value" placeholder="Quận/Huyện" />
                                <ComboboxButton class="absolute inset-y-0 right-0 flex items-center pr-2">
                                    <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                                </ComboboxButton>
                            </div>
                            <TransitionRoot leave="transition ease-in duration-100" leaveFrom="opacity-100"
                                leaveTo="opacity-0" @after-leave="queryDistrictTo = ''">
                                <ComboboxOptions
                                    class="absolute mt-1 max-h-40 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                    <div v-if="filteredDistrictTo?.length === 0 && queryDistrictTo !== ''"
                                        class="relative cursor-default select-none py-2 px-4 text-gray-700">
                                        Chưa tìm thấy...
                                    </div>

                                    <div v-if="(filteredDistrictTo?.length === 0 || !filteredDistrictTo) && queryDistrictTo === ''"
                                        class="relative cursor-default select-none py-2 px-4 text-red-500">
                                        Hãy chọn Tỉnh/Thành phố
                                    </div>

                                    <ComboboxOption v-for="district_to in filteredDistrictTo" as="template"
                                        :key="district_to.id" :value="district_to" v-slot="{ selected, active }">
                                        <li @click="changeDistrictTo(district_to)"
                                            class="relative cursor-default select-none py-2 pl-10 pr-4" :class="{
                                                'bg-sky-400 text-white': active,
                                                'text-gray-900': !active,
                                            }">
                                            <span class="block truncate"
                                                :class="{ 'font-medium': selected, 'font-normal': !selected }">
                                                {{ district_to.Name }}
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

                <!-- Loại dịch vụ và Khối lượng lô hàng -->
                <div class="m-4">
                    <div class="flex items-center justify-between mb-2">
                        <div class="flex items-center">
                            <span class="text-gray-500 sm:text-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" focusable="false"
                                    class="text-inherit fill-current" viewBox="0 0 512 512">
                                    <path
                                        d="M128 176a128 128 0 1 1 256 0 128 128 0 1 1 -256 0zM391.8 64C359.5 24.9 310.7 0 256 0S152.5 24.9 120.2 64H64C28.7 64 0 92.7 0 128V448c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H391.8zM296 224c0-10.6-4.1-20.2-10.9-27.4l33.6-78.3c3.5-8.1-.3-17.5-8.4-21s-17.5 .3-21 8.4L255.7 184c-22 .1-39.7 18-39.7 40c0 22.1 17.9 40 40 40s40-17.9 40-40z" />
                                </svg>
                            </span>
                            <span class="ml-2">Trọng lượng</span>
                        </div>
                        <div
                            class="inline-flex justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border rounded border-white p-1">
                            <span class="inline-flex justify-center items-center w-6 h-6">
                            </span>
                        </div>
                    </div>

                    <Combobox>
                        <div class="relative mt-1 z-[1] hover:border-[#9aa0a6] border rounded-md border-gray-50">
                            <div
                                class="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                                <input @change="handleChangeWeight()" @input="handleChangeWeight" v-model="filter.weight" type="number"
                                    class="w-72 border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-500 focus:ring-0 outline-none h-11"
                                    placeholder="Trọng lượng gói hàng (g)" />
                            </div>
                        </div>
                    </Combobox>
                </div>
            </div>

            <!-- Filters -->
            <div class="rounded-lg m-[16px] flex lg:justify-start mx-auto max-w-5xl lg:pt-[24px] flex-wrap justify-center">
                <div class="relative rounded-[16px] shadow-sm text-[#0096fa] bg-[white] m-2">
                    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <span class="sm:text-sm">
                            <svg width="18" height="18" viewBox="0 0 24 24" focusable="false"
                                class="text-inherit fill-current">
                                <path
                                    d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z">
                                </path>
                            </svg>
                        </span>
                    </div>
                    <h2
                        class="text-inherit font-[500] block w-full h-full rounded-md py-1.5 pl-[40px] pr-[16px] text-[#3c4043] outline-none sm:text-sm sm:leading-6">
                        Lọc</h2>
                </div>

                <!-- price filter -->
                <div class="w-60">
                    <Listbox v-model="priceSelected" class="m-2 ml-[8px]">
                        <div class="relative">
                            <ListboxButton
                                class="hover:border-[#9aa0a6] border relative w-full cursor-default rounded-lg border-gray-50 bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                                <span class="block truncate">{{ priceSelected.name }}</span>
                                <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                    <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                                </span>
                            </ListboxButton>

                            <transition leave-active-class="transition duration-100 ease-in" leave-from-class="opacity-100"
                                leave-to-class="opacity-0">
                                <ListboxOptions
                                    class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                                    <ListboxOption v-slot="{ active, selected }" v-for="priceFilter in priceFilters"
                                        :key="priceFilter.name" :value="priceFilter" as="template">
                                        <li @click="priceFilterHandle(priceFilter)" class="m-1 rounded-md" :class="[
                                            active ? 'bg-sky-400 text-white' : 'text-gray-900',
                                            'relative cursor-default select-none py-2 pl-10 pr-4',
                                        ]">
                                            <span :class="[
                                                selected ? 'font-medium' : 'font-normal',
                                                'block truncate',
                                            ]">{{ priceFilter.name }}</span>
                                            <span v-if="selected"
                                                class="absolute inset-y-0 left-0 flex items-center pl-3 text-sky-400">
                                                <CheckIcon class="h-5 w-5" aria-hidden="true" />
                                            </span>
                                        </li>
                                    </ListboxOption>
                                </ListboxOptions>
                            </transition>
                        </div>
                    </Listbox>
                </div>

                <!-- time filter -->
                <div class="w-60">
                    <Listbox v-model="timeSelected" class="m-2 ml-[8px]">
                        <div class="relative">
                            <ListboxButton
                                class="hover:border-[#9aa0a6] border relative w-full cursor-default rounded-lg border-gray-50 bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                                <span class="block truncate">{{ timeSelected.name }}</span>
                                <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                    <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                                </span>
                            </ListboxButton>

                            <transition leave-active-class="transition duration-100 ease-in" leave-from-class="opacity-100"
                                leave-to-class="opacity-0">
                                <ListboxOptions
                                    class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                                    <ListboxOption v-slot="{ active, selected }" v-for="timeFilter in timeFilters"
                                        :key="timeFilter.name" :value="timeFilter" as="template">
                                        <li @click="timeFilterHandle(timeFilter)" class="m-1 rounded-md" :class="[
                                            active ? 'bg-sky-400 text-white' : 'text-gray-900',
                                            'relative cursor-default select-none py-2 pl-10 pr-4',
                                        ]">
                                            <span :class="[
                                                selected ? 'font-medium' : 'font-normal',
                                                'block truncate',
                                            ]">{{ timeFilter.name }}</span>
                                            <span v-if="selected"
                                                class="absolute inset-y-0 left-0 flex items-center pl-3 text-sky-400">
                                                <CheckIcon class="h-5 w-5" aria-hidden="true" />
                                            </span>
                                        </li>
                                    </ListboxOption>
                                </ListboxOptions>
                            </transition>
                        </div>
                    </Listbox>
                </div>
            </div>

            <!-- Content - Dich vụ lọc được -->
            <div v-if="isLoading" class="mx-auto max-w-5xl">
                <div class="loader h-56">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="text-gray-500">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                    </svg>
                </div>
            </div>

            <div v-else>
                <!-- PC -->
                <div class="mx-auto max-w-5xl lg:block hidden">
                    <!-- Sort -->
                    <div
                        class="flex items-baseline lg:justify-between justify-end shadow-md lg:px-[8px] lg:pb-5 lg:pt-5 pb-4 px-4 bg-[white] rounded-[8px]">
                        <h1 class="text-xl font-bold tracking-tight text-gray-900 hidden lg:block">Vận chuyển hàng hoá</h1>

                        <!-- Sort -->
                        <div class="flex items-center">
                            <!-- Button So sanh dich vu --> 
                            <div class="lg:block hidden">
                                <button @click="handleCompareService()"
                                    class="mr-3 hover:scale-[1.03] transition-all duration-[0.3s] ease-in-out delay-[0ms] m-[8px] inline-flex items-center px-[8px] py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-[#0096faee] hover:bg-[#0096fa]">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                        stroke="currentColor" class="w-5 h-5 mr-3">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                                    </svg>
                                    So sánh dịch vụ
                                </button>
                            </div>

                            <Menu as="div" class="relative inline-block text-left">
                                <div>
                                    <MenuButton
                                        class="group inline-flex justify-center text-sm font-medium text-[#0096fa] hover:text-gray-500">
                                        Sắp xếp
                                        <ChevronDownIcon
                                            class="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-[#0096fa] group-hover:text-gray-500"
                                            aria-hidden="true" />
                                    </MenuButton>
                                </div>

                                <transition enter-active-class="transition duration-100 ease-out"
                                    enter-from-class="transform scale-95 opacity-0"
                                    enter-to-class="transform scale-100 opacity-100"
                                    leave-active-class="transition duration-75 ease-in"
                                    leave-from-class="transform scale-100 opacity-100"
                                    leave-to-class="transform scale-95 opacity-0">
                                    <MenuItems
                                        class="z-[1] absolute right-[-8px] mt-2 w-44 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <div class="px-1 py-1">
                                            <MenuItem v-slot="{ active }">
                                            <button @click="bestRatingfilter()" :class="[
                                                active ? 'bg-sky-400 text-white' : 'text-gray-900',
                                                'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                                            ]">
                                                <div class="mr-2 h-5 w-2 text-violet-400"></div>
                                                Đánh giá tốt nhất
                                            </button>
                                            </MenuItem>
                                        </div>

                                        <div class="px-1 py-1">
                                            <MenuItem v-slot="{ active }">
                                            <button @click="newestfilter()" :class="[
                                                active ? 'bg-sky-400 text-white' : 'text-gray-900',
                                                'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                                            ]">
                                                <div class="mr-2 h-5 w-2 text-violet-400"></div>
                                                Mới nhất
                                            </button>
                                            </MenuItem>

                                            <MenuItem v-slot="{ active }">
                                            <button @click="priceLowToHighfilter()" :class="[
                                                active ? 'bg-sky-400 text-white' : 'text-gray-900',
                                                'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                                            ]">
                                                <div class="mr-2 h-5 w-2 text-violet-400"></div>
                                                Giá: Thấp đến cao
                                            </button>
                                            </MenuItem>
                                            <MenuItem v-slot="{ active }">
                                            <button @click="priceHighToLowfilter()" :class="[
                                                active ? 'bg-sky-400 text-white' : 'text-gray-900',
                                                'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                                            ]">
                                                <div class="mr-2 h-5 w-2 text-violet-400"></div>
                                                Giá: Cao đến thấp
                                            </button>
                                            </MenuItem>
                                        </div>
                                    </MenuItems>
                                </transition>
                            </Menu>
                        </div>
                    </div>

                    <!-- content -->
                    <div v-show="services.length !== 0" class="mt-[1rem] flow-root">
                        <div class="overflow-x-auto">
                            <div class="align-middle min-w-[100%] inline-block">
                                <!-- DataView -->
                                <div class="card max-w-5xl mx-auto">
                                    <!-- Service Title  -->
                                    <section class="flex bg-gray-200 rounded-t-lg">
                                        <div class="w-10"></div>

                                        <div class="flex grow">
                                            <div
                                                class="w-[17%] text-[#70757a] font-[600] text-[.95rem] leading-[1.25rem] text-left px-[.75rem] py-[.875rem]">
                                                Nhà cung cấp</div>
                                            <div
                                                class="grow text-[#70757a] font-[600] text-[.95rem] leading-[1.25rem] text-left px-[.75rem] py-[.875rem]">
                                                Dịch vụ</div>
                                            <div
                                                class="w-[19%] text-[#70757a] font-[600] text-[.95rem] leading-[1.25rem] text-left px-[.75rem] py-[.875rem]">
                                                Thời gian</div>
                                            <div
                                                class="w-[12%] text-[#111827] font-[600] text-[.95rem] leading-[1.25rem] text-left px-[.75rem] py-[.875rem]">
                                                Trọng lượng</div>
                                            <div
                                                class="w-[12%] text-[#111827] font-[600] text-[.95rem] leading-[1.25rem] text-left px-[.75rem] py-[.875rem]">
                                                Giá</div>
                                            <div
                                                class="w-[6%] text-[#70757a] font-[600] text-[.95rem] leading-[1.25rem] text-left pr-[1rem] py-[.875rem] relative">
                                            </div>
                                        </div>
                                    </section>

                                    <DataView :value="services" paginator :rows="5">
                                        <template #list="slotProps">
                                            <div class="hover:shadow-md hover:shadow-sky-200 hover:bg-[#0096fa0d] border-t-0 border-b-0 border-l border-r-0  hover:border-l-[#d30038]"
                                                :class="{ 'bg-red-50/[.6]': (slotProps.data.promotion_price) }">
                                                <RouterLink :to="{
                                                    name: 'Service Details',
                                                    params: { id: slotProps.data.service_id },
                                                }" class="">
                                                    <div class="flex">
                                                        <!-- So sánh -->
                                                        <div
                                                            class="w-10 flex items-center text-ellipsis border-[#dadce0] border-t px-[.75rem] text-[#111827] font-[500] text-[.95rem] leading-[1.25rem] pr-[.75rem] py-[1rem] whitespace-nowrap">

                                                            
                                                            <button v-show="!slotProps.data.isInCompareArray"
                                                                @click.prevent="changeCheckBoxCompare(slotProps.data.service_id)"
                                                                class="hover:scale-[1.05] transition-all duration-[0.3s] ease-in-out delay-[0ms] hover:text-[#0096fa] inline-flex items-center hover:bg-slate-200 rounded-lg">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                                    height="24" fill="currentColor"
                                                                    class="bi bi-plus rounded-[50%] border"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                                                </svg>
                                                            </button>

                                                            <button v-show="slotProps.data.isInCompareArray"
                                                                @click.prevent="changeCheckBoxCompare(slotProps.data.service_id)"
                                                                class="hover:scale-[1.05] transition-all duration-[0.3s] ease-in-out delay-[0ms] text-[#0096fa] inline-flex items-center hover:bg-slate-200 rounded-lg">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                                    height="24" fill="currentColor"
                                                                    class="bi bi-check rounded-[50%] border"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                                                </svg>
                                                            </button>
                                                        </div>

                                                        <div class="flex grow">
                                                            <div
                                                                class="w-[17%] flex items-center text-ellipsis border-[#dadce0] border-t px-[.75rem] text-[#111827] font-[500] text-[.95rem] leading-[1.25rem] pr-[.75rem] py-[1rem] whitespace-nowrap">
                                                                <div class="flex items-center text-ellipsis">
                                                                    <img :src="slotProps.data.image" alt=""
                                                                        class="h-5 w-5 flex-shrink-0 rounded-full bg-slate-400 mr-2" />
                                                                    <span>{{ slotProps.data.provider_name }}</span>
                                                                </div>
                                                            </div>

                                                            <div
                                                                class="grow flex items-center text-ellipsis border-[#dadce0] border-t text-[#6b7280] font-[500] text-[.95rem] leading-[1.25rem] px-[.75rem] py-[1rem] whitespace-nowrap">
                                                                {{ slotProps.data.service_name }}
                                                            </div>

                                                            <div
                                                                class="w-[19%] flex items-center text-ellipsis border-[#dadce0] border-t text-[#6b7280] font-[500] text-[.95rem] leading-[1.25rem] px-[.75rem] py-[1rem] whitespace-nowrap">
                                                                {{ slotProps.data.delivery_date }}
                                                            </div>

                                                            <div
                                                                class="w-[12%] flex items-center text-ellipsis border-[#dadce0] border-t text-[#6b7280] font-[600] text-[.95rem] leading-[1.25rem] px-[.75rem] py-[1rem] whitespace-nowrap">
                                                                {{
                                                                    (slotProps.data.weight >= 1000 ? (slotProps.data.weight /
                                                                        1000.0) :
                                                                        slotProps.data.weight).toLocaleString('vi-VN', {
                                                                            minimumFractionDigits: 0,
                                                                            maximumFractionDigits: 0,
                                                                        })
                                                                }}
                                                                <span v-if="slotProps.data.weight >= 1000">kg</span>
                                                                <span v-else>g</span>
                                                            </div>

                                                            <div v-if="slotProps.data?.price && slotProps.data.promotion_price"
                                                                class="w-[12%] flex items-center text-ellipsis border-[#dadce0] border-t text-sky-400 font-[600] text-[.95rem] leading-[1.25rem] px-[.75rem] py-[1rem] whitespace-nowrap">
                                                                {{ (slotProps.data.price - (slotProps.data.price *
                                                                    slotProps.data.promotion_price
                                                                    /
                                                                    100)
                                                                    > 0
                                                                    ?
                                                                    (slotProps.data.price - (slotProps.data.price *
                                                                        slotProps.data.promotion_price /
                                                                        100)) :
                                                                    0).toLocaleString('vi-VN', {
                                                                        style: 'currency',
                                                                        currency: 'VND'
                                                                    }) }}</div>

                                                            <div v-else-if="slotProps.data?.price"
                                                                class="w-[12%] flex items-center text-ellipsis border-[#dadce0] border-t text-[#6b7280] font-[500] text-[.95rem] leading-[1.25rem] px-[.75rem] py-[1rem] whitespace-nowrap">
                                                                {{ (slotProps.data.price).toLocaleString('vi-VN', {
                                                                    style: 'currency',
                                                                    currency: 'VND'
                                                                }) }}
                                                            </div>

                                                            <div
                                                                class="w-[6%] flex items-center justify-between border-[#dadce0] border-t min-[640px]:pr-0 font-[500] text-[.95rem] leading-[1.25rem] text-right pr-[1rem] py-[1rem] whitespace-nowrap relative">
                                                                <div class="flex items-center mr-2">
                                                                    <button
                                                                        class="rounded-full hover:bg-gray-200 w-[48px] h-[48px] flex items-center justify-center hover:rotate-180"
                                                                        @click.prevent="slotProps.data.append = !slotProps.data.append">
                                                                        <svg focusable="false" width="24" height="24"
                                                                            viewBox="0 0 24 24"
                                                                            class="fill-current text-[#0096fa]">
                                                                            <path
                                                                                d="M12 16.41l-6.71-6.7 1.42-1.42 5.29 5.3 5.29-5.3 1.42 1.42z">
                                                                            </path>
                                                                        </svg>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div v-show="slotProps.data.append"
                                                        class="mx-auto text-[15px] text-gray-600 flex">
                                                        <div class="w-10"></div>

                                                        <div class="flex grow">
                                                            <div class="w-[17%]"></div>

                                                            <div class="grow p-[12px] pb-4 font-[600]">
                                                                <span class="py-4">{{ slotProps.data.district_from }} ,{{
                                                                    slotProps.data.province_from
                                                                }}</span>
                                                                <div class="py-4 font-medium">Đến</div>
                                                                <span class="py-4">{{ slotProps.data.district_to }}, {{
                                                                    slotProps.data.province_to
                                                                }}</span>
                                                            </div>

                                                            <!-- Them vao gio -->
                                                            <div class="hidden">
                                                                <button @click.prevent="true"
                                                                    class="inline-flex items-center justify-center shrink-0 flex-row py-[12px] px-[16px] m-[4px] h-[40px] w-[40px] z-10 text-white rounded-[100px] hover:bg-[#ebeff5]">
                                                                    <span
                                                                        class="w-[24px] h-[24px] inline-block shrink-0 relative">
                                                                        <svg width="24" height="24" aria-hidden="true"
                                                                            class="fill-current text-[#d83737]"
                                                                            preserveAspectRatio="none" viewBox="0 0 24 24">
                                                                            <path
                                                                                d="M15.7 3c-1.4 0-2.6.4-3.7 1.2a6.1 6.1 0 0 0-8.2.8 7 7 0 0 0 0 9.2c.7 1 1.5 1.7 2.9 3l2.8 2.4.8.7c.5.5 1 .7 1.7.7.6 0 1.2-.2 1.7-.6 2-1.7 5.3-4.7 6.6-6.2a7 7 0 0 0-.1-9.2 6.2 6.2 0 0 0-4.5-2m0 1.8c1.1 0 2.3.5 3.2 1.4a5 5 0 0 1 0 6.8 88.2 88.2 0 0 1-6.9 6.2l-.6-.2-.8-.7L8 15.8c-1.4-1.2-2-2-2.8-2.8a5 5 0 0 1 0-6.8 4.5 4.5 0 0 1 6.5 0l.4.5.4-.5c1-.9 2-1.4 3.3-1.4">
                                                                            </path>
                                                                        </svg>

                                                                        <svg width="24" height="24" aria-hidden="true"
                                                                            class="fill-current text-[#ffd2d2] w-full h-full"
                                                                            preserveAspectRatio="none" viewBox="0 0 24 24">
                                                                            <path
                                                                                d="M15.3 4.1c-1.2 0-2.3.4-3.3 1a5.6 5.6 0 00-7.4.7 6 6 0 000 8.2c.7.7 1.3 1.4 2.6 2.5l2.5 2.2.7.6a2.4 2.4 0 003.2 0c1.7-1.4 4.7-4 5.8-5.3a6 6 0 000-8.2 5.6 5.6 0 00-4.1-1.7">
                                                                            </path>
                                                                        </svg>
                                                                    </span>
                                                                </button>
                                                            </div>

                                                            <!-- Đánh giá sao -->
                                                            <div class="w-[12%] px-[12px] flex items-center">
                                                                <div v-show="slotProps.data?.totalCount">
                                                                    <div :data-tooltip="slotProps.data.totalCount"
                                                                        class="tooltip text-[12px] text-[#757575] inline-flex items-center">
                                                                        <span class="mr-[4px]">{{
                                                                            (parseFloat(slotProps.data.average_rate)).toLocaleString('vi-VN',
                                                                                {
                                                                                    minimumFractionDigits: 1,
                                                                                    maximumFractionDigits: 1,
                                                                                }) }}</span>
                                                                        <svg width="14" height="14"
                                                                            class="fill-current text-[#fbbc04]"
                                                                            data-testid="star-svg"
                                                                            preserveAspectRatio="none" viewBox="0 0 24 24">
                                                                            <path
                                                                                d="m12 20.6-5.86 3.23c-.7.38-1.57.1-1.94-.63-.15-.3-.2-.63-.14-.95l1.12-6.82L.43 10.6a1.55 1.55 0 0 1-.02-2.13c.22-.23.5-.39.82-.43l6.55-1 2.93-6.2a1.4 1.4 0 0 1 2.58 0l2.93 6.2 6.55 1a1.5 1.5 0 0 1 1.21 1.7c-.04.32-.19.63-.41.86l-4.75 4.83 1.12 6.82c.14.81-.39 1.59-1.17 1.73-.3.05-.63 0-.9-.15L12 20.6Z">
                                                                            </path>
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div
                                                                class="w-[18%] px-[12px] font-medium text-gray-500 flex items-center">
                                                                <div v-show="slotProps.data?.promotion_price">
                                                                    Khuyến mãi
                                                                    <br />
                                                                    Giảm {{ slotProps.data.promotion_price }}%
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </RouterLink>
                                            </div>
                                        </template>
                                    </DataView>
                                </div>

                                <!-- hidden -->
                                <div v-show="false"
                                    class="bg-[white] min-w-[100%] indent-0 border-[0.5px] rounded-[8px] border-separate border-spacing-0">
                                    <!-- Service Title  -->
                                    <section class="flex bg-gray-200 rounded-t-lg">
                                        <div class="w-10"></div>

                                        <div class="flex grow">
                                            <div
                                                class="w-[17%] text-[#70757a] font-[600] text-[.95rem] leading-[1.25rem] text-left px-[.75rem] py-[.875rem]">
                                                Nhà cung cấp</div>
                                            <div
                                                class="grow text-[#70757a] font-[600] text-[.95rem] leading-[1.25rem] text-left px-[.75rem] py-[.875rem]">
                                                Tên dịch vụ</div>
                                            <div
                                                class="w-[19%] text-[#70757a] font-[600] text-[.95rem] leading-[1.25rem] text-left px-[.75rem] py-[.875rem]">
                                                Thời gian vận chuyển</div>
                                            <div
                                                class="w-[12%] text-[#111827] font-[600] text-[.95rem] leading-[1.25rem] text-left px-[.75rem] py-[.875rem]">
                                                Trọng lượng</div>
                                            <div
                                                class="w-[12%] text-[#111827] font-[600] text-[.95rem] leading-[1.25rem] text-left px-[.75rem] py-[.875rem]">
                                                Giá dịch vụ</div>
                                            <div
                                                class="w-[6%] text-[#70757a] font-[600] text-[.95rem] leading-[1.25rem] text-left pr-[1rem] py-[.875rem] relative">
                                            </div>
                                        </div>
                                    </section>

                                    <!-- Service Card -->
                                    <section class="">
                                        <template v-for="service in services" :key="service.service_id">
                                            <div class="hover:shadow-md hover:shadow-sky-200 hover:bg-[#0096fa0d] border-t-0 border-b-0 border-l border-r-0  hover:border-l-[#d30038]"
                                                :class="{ 'bg-red-50/[.6]': (service.promotion_price) }">
                                                <RouterLink :to="{
                                                    name: 'Service Details',
                                                    params: { id: service.service_id },
                                                }" class="">
                                                    <div v-show="service &&
                                                        (removeVietnameseTones(service.province_from).toLowerCase()).includes(removeVietnameseTones(filter.province_from?.Name ? filter.province_from?.Name : '').toLowerCase()) &&
                                                        (removeVietnameseTones(service.district_from).toLowerCase()).includes(removeVietnameseTones(filter.district_from?.Name ? filter.district_from?.Name : '').toLowerCase()) &&
                                                        (removeVietnameseTones(service.province_to).toLowerCase()).includes(removeVietnameseTones(filter.province_to?.Name ? filter.province_to?.Name : '').toLowerCase()) &&
                                                        (removeVietnameseTones(service.district_to).toLowerCase()).includes(removeVietnameseTones(filter.district_to?.Name ? filter.district_to?.Name : '').toLowerCase()) &&
                                                        ((filter.weight === '') || (filter.weight && (filter.weight >= service.weight)))"
                                                        class="flex">
                                                        <!-- So sánh dịch vụ -->
                                                        <div
                                                            class="w-10 flex items-center text-ellipsis border-[#dadce0] border-t px-[.75rem] text-[#111827] font-[500] text-[.95rem] leading-[1.25rem] pr-[.75rem] py-[1rem] whitespace-nowrap">
                                                            
                                                            <button v-show="!service.isInCompareArray"
                                                                @click.prevent="changeCheckBoxCompare(service.service_id)"
                                                                class="hover:scale-[1.05] transition-all duration-[0.3s] ease-in-out delay-[0ms] hover:text-[#0096fa] inline-flex items-center hover:bg-slate-200 rounded-lg">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                                    height="24" fill="currentColor"
                                                                    class="bi bi-plus rounded-[50%] border"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                                                </svg>
                                                            </button>

                                                            <button v-show="service.isInCompareArray"
                                                                @click.prevent="changeCheckBoxCompare(service.service_id)"
                                                                class="hover:scale-[1.05] transition-all duration-[0.3s] ease-in-out delay-[0ms] text-[#0096fa] inline-flex items-center hover:bg-slate-200 rounded-lg">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                                    height="24" fill="currentColor"
                                                                    class="bi bi-check rounded-[50%] border"
                                                                    viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                                                </svg>
                                                            </button>
                                                        </div>

                                                        <div class="flex grow">
                                                            <div
                                                                class="w-[17%] flex items-center text-ellipsis border-[#dadce0] border-t px-[.75rem] text-[#111827] font-[500] text-[.95rem] leading-[1.25rem] pr-[.75rem] py-[1rem] whitespace-nowrap">
                                                                <div class="flex items-center text-ellipsis">
                                                                    <img :src="service.image" alt=""
                                                                        class="h-5 w-5 flex-shrink-0 rounded-full bg-slate-400 mr-2" />
                                                                    <span>{{ service.provider_name }}</span>
                                                                </div>
                                                            </div>

                                                            <div
                                                                class="grow flex items-center text-ellipsis border-[#dadce0] border-t text-[#6b7280] font-[500] text-[.95rem] leading-[1.25rem] px-[.75rem] py-[1rem] whitespace-nowrap">
                                                                {{ service.service_name }}
                                                            </div>

                                                            <div
                                                                class="w-[19%] flex items-center text-ellipsis border-[#dadce0] border-t text-[#6b7280] font-[500] text-[.95rem] leading-[1.25rem] px-[.75rem] py-[1rem] whitespace-nowrap">
                                                                {{ service.delivery_date }}
                                                            </div>

                                                            <div
                                                                class="w-[12%] flex items-center text-ellipsis border-[#dadce0] border-t text-[#6b7280] font-[600] text-[.95rem] leading-[1.25rem] px-[.75rem] py-[1rem] whitespace-nowrap">
                                                                {{
                                                                    (service.weight >= 1000 ? (service.weight / 1000.0) :
                                                                        service.weight).toLocaleString('vi-VN', {
                                                                            minimumFractionDigits: 0,
                                                                            maximumFractionDigits: 0,
                                                                        })
                                                                }}
                                                                <span v-if="service.weight >= 1000">kg</span>
                                                                <span v-else>g</span>
                                                            </div>

                                                            <div v-if="service?.price && service.promotion_price"
                                                                class="w-[12%] flex items-center text-ellipsis border-[#dadce0] border-t text-sky-400 font-[600] text-[.95rem] leading-[1.25rem] px-[.75rem] py-[1rem] whitespace-nowrap">
                                                                {{ (service.price - (service.price * service.promotion_price
                                                                    /
                                                                    100)
                                                                    > 0
                                                                    ?
                                                                    (service.price - (service.price * service.promotion_price /
                                                                        100)) :
                                                                    0).toLocaleString('vi-VN', {
                                                                        style: 'currency',
                                                                        currency: 'VND'
                                                                    }) }}</div>

                                                            <div v-else-if="service?.price"
                                                                class="w-[12%] flex items-center text-ellipsis border-[#dadce0] border-t text-[#6b7280] font-[500] text-[.95rem] leading-[1.25rem] px-[.75rem] py-[1rem] whitespace-nowrap">
                                                                {{ (service.price).toLocaleString('vi-VN', {
                                                                    style: 'currency',
                                                                    currency: 'VND'
                                                                }) }}
                                                            </div>

                                                            <div
                                                                class="w-[6%] flex items-center justify-between border-[#dadce0] border-t min-[640px]:pr-0 font-[500] text-[.95rem] leading-[1.25rem] text-right pr-[1rem] py-[1rem] whitespace-nowrap relative">
                                                                <div class="flex items-center mr-2">
                                                                    <button
                                                                        class="rounded-full hover:bg-gray-200 w-[48px] h-[48px] flex items-center justify-center hover:rotate-180"
                                                                        @click.prevent="service.append = !service.append">
                                                                        <svg focusable="false" width="24" height="24"
                                                                            viewBox="0 0 24 24"
                                                                            class="fill-current text-[#0096fa]">
                                                                            <path
                                                                                d="M12 16.41l-6.71-6.7 1.42-1.42 5.29 5.3 5.29-5.3 1.42 1.42z">
                                                                            </path>
                                                                        </svg>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div v-show="service.append &&
                                                        (removeVietnameseTones(service.province_from).toLowerCase()).includes(removeVietnameseTones(filter.province_from?.Name ? filter.province_from?.Name : '').toLowerCase()) &&
                                                        (removeVietnameseTones(service.district_from).toLowerCase()).includes(removeVietnameseTones(filter.district_from?.Name ? filter.district_from?.Name : '').toLowerCase()) &&
                                                        (removeVietnameseTones(service.province_to).toLowerCase()).includes(removeVietnameseTones(filter.province_to?.Name ? filter.province_to?.Name : '').toLowerCase()) &&
                                                        (removeVietnameseTones(service.district_to).toLowerCase()).includes(removeVietnameseTones(filter.district_to?.Name ? filter.district_to?.Name : '').toLowerCase()) &&
                                                        ((filter.weight === '') || (filter.weight && (filter.weight >= service.weight)))"
                                                        class="mx-auto text-[15px] text-gray-600 flex">
                                                        <div class="w-10"></div>

                                                        <div class="flex grow">
                                                            <div class="w-[17%]"></div>

                                                            <div class="grow p-[12px] pb-4 font-[600]">
                                                                <span class="py-4">{{ service.district_from }} ,{{
                                                                    service.province_from
                                                                }}</span>
                                                                <div class="py-4 font-medium">Đến</div>
                                                                <span class="py-4">{{ service.district_to }}, {{
                                                                    service.province_to
                                                                }}</span>
                                                            </div>

                                                            <!-- Them vao gio -->
                                                            <div class="hidden">
                                                                <button @click.prevent="true"
                                                                    class="inline-flex items-center justify-center shrink-0 flex-row py-[12px] px-[16px] m-[4px] h-[40px] w-[40px] z-10 text-white rounded-[100px] hover:bg-[#ebeff5]">
                                                                    <span
                                                                        class="w-[24px] h-[24px] inline-block shrink-0 relative">
                                                                        <svg width="24" height="24" aria-hidden="true"
                                                                            class="fill-current text-[#d83737]"
                                                                            preserveAspectRatio="none" viewBox="0 0 24 24">
                                                                            <path
                                                                                d="M15.7 3c-1.4 0-2.6.4-3.7 1.2a6.1 6.1 0 0 0-8.2.8 7 7 0 0 0 0 9.2c.7 1 1.5 1.7 2.9 3l2.8 2.4.8.7c.5.5 1 .7 1.7.7.6 0 1.2-.2 1.7-.6 2-1.7 5.3-4.7 6.6-6.2a7 7 0 0 0-.1-9.2 6.2 6.2 0 0 0-4.5-2m0 1.8c1.1 0 2.3.5 3.2 1.4a5 5 0 0 1 0 6.8 88.2 88.2 0 0 1-6.9 6.2l-.6-.2-.8-.7L8 15.8c-1.4-1.2-2-2-2.8-2.8a5 5 0 0 1 0-6.8 4.5 4.5 0 0 1 6.5 0l.4.5.4-.5c1-.9 2-1.4 3.3-1.4">
                                                                            </path>
                                                                        </svg>

                                                                        <svg width="24" height="24" aria-hidden="true"
                                                                            class="fill-current text-[#ffd2d2] w-full h-full"
                                                                            preserveAspectRatio="none" viewBox="0 0 24 24">
                                                                            <path
                                                                                d="M15.3 4.1c-1.2 0-2.3.4-3.3 1a5.6 5.6 0 00-7.4.7 6 6 0 000 8.2c.7.7 1.3 1.4 2.6 2.5l2.5 2.2.7.6a2.4 2.4 0 003.2 0c1.7-1.4 4.7-4 5.8-5.3a6 6 0 000-8.2 5.6 5.6 0 00-4.1-1.7">
                                                                            </path>
                                                                        </svg>
                                                                    </span>
                                                                </button>
                                                            </div>

                                                            <!-- Đánh giá sao -->
                                                            <div class="w-[12%] px-[12px] flex items-center">
                                                                <div v-show="service?.totalCount">
                                                                    <div :data-tooltip="service.totalCount"
                                                                        class="tooltip text-[12px] text-[#757575] inline-flex items-center">
                                                                        <span class="mr-[4px]">{{
                                                                            (parseFloat(service.average_rate)).toLocaleString('vi-VN',
                                                                                {
                                                                                    minimumFractionDigits: 1,
                                                                                    maximumFractionDigits: 1,
                                                                                }) }}</span>
                                                                        <svg width="14" height="14"
                                                                            class="fill-current text-[#fbbc04]"
                                                                            data-testid="star-svg"
                                                                            preserveAspectRatio="none" viewBox="0 0 24 24">
                                                                            <path
                                                                                d="m12 20.6-5.86 3.23c-.7.38-1.57.1-1.94-.63-.15-.3-.2-.63-.14-.95l1.12-6.82L.43 10.6a1.55 1.55 0 0 1-.02-2.13c.22-.23.5-.39.82-.43l6.55-1 2.93-6.2a1.4 1.4 0 0 1 2.58 0l2.93 6.2 6.55 1a1.5 1.5 0 0 1 1.21 1.7c-.04.32-.19.63-.41.86l-4.75 4.83 1.12 6.82c.14.81-.39 1.59-1.17 1.73-.3.05-.63 0-.9-.15L12 20.6Z">
                                                                            </path>
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div
                                                                class="w-[18%] px-[12px] font-medium text-gray-500 flex items-center">
                                                                <div v-show="service?.promotion_price">
                                                                    Khuyến mãi
                                                                    <br />
                                                                    Giảm {{ service.promotion_price }}%
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </RouterLink>
                                            </div>
                                        </template>
                                    </section>
                                </div>
                            </div>

                            <div class="align-middle min-w-[100%] inline-block">

                            </div>
                        </div>
                    </div>

                    <!-- Không có dịch vụ -->
                    <div v-show="services.length === 0"
                        class="bg-white h-40 text-gray-500 flex items-center content-center justify-center rounded-md my-8 text-lg">
                        <div class="font-[600]">
                            <h1 class=" text-gray-500">Chưa có Dịch vụ nào! Thay đổi bộ lọc có thể giúp ích</h1>
                        </div>
                    </div>
                </div>

                <!-- Mobile -->
                <div class="lg:hidden">
                    <div class="no-scrollbar grid grid-cols-2 gap-x-1 gap-y-1">
                        <template v-for="service in services">
                            <domesticCard :service="service"></domesticCard>
                        </template>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { ref, computed, onBeforeMount } from "vue";
import {
    Listbox, ListboxButton, ListboxOption, ListboxOptions,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    Combobox,
    ComboboxInput,
    ComboboxButton,
    ComboboxOptions,
    ComboboxOption,
    TransitionRoot,
} from '@headlessui/vue';
import { CheckIcon, ChevronUpDownIcon, ChevronDownIcon } from '@heroicons/vue/20/solid';
// import { useGtag } from "vue-gtag-next";
import domesticCard from "@/components/cards/domestic-card.vue";
import Header from '@/components/Header.vue';
import getTime from 'date-fns/getTime'
import { getServices, getInfoReviews } from "@/services/service.service";
import { getPromotions } from "@/services/promotion.service";
import { getAddressForCreateOrder } from "@/services/address.service";
// toast
import { useToast } from "vue-toastification";
// Get toast interface
const toast = useToast();

// route
import { useRouter } from 'vue-router'
const router = useRouter()

// input ...
const isLoading = ref(true)
const address = ref();
const provinceDataFrom = ref([]);
const districtDataFrom = ref([]);

const provinceDataTo = ref([]);
const districtDataTo = ref([]);

let queryProvinceFrom = ref('');
let queryDistrictFrom = ref('');
let queryProvinceTo = ref('');
let queryDistrictTo = ref('');

let filteredProvinceFrom = computed(() =>
    queryProvinceFrom.value === ''
        ? provinceDataFrom.value
        : provinceDataFrom.value.filter((element) =>
            element.Name
                .toLowerCase()
                .replace(/\s+/g, '')
                .includes(queryProvinceFrom.value.toLowerCase().replace(/\s+/g, ''))
        )
)

let filteredDistrictFrom = computed(() =>
    queryDistrictFrom.value === ''
        ? districtDataFrom.value
        : districtDataFrom.value.filter((element) =>
            element.Name
                .toLowerCase()
                .replace(/\s+/g, '')
                .includes(queryDistrictFrom.value.toLowerCase().replace(/\s+/g, ''))
        )
)

let filteredProvinceTo = computed(() =>
    queryProvinceTo.value === ''
        ? provinceDataTo.value
        : provinceDataTo.value.filter((element) =>
            element.Name
                .toLowerCase()
                .replace(/\s+/g, '')
                .includes(queryProvinceTo.value.toLowerCase().replace(/\s+/g, ''))
        )
)

let filteredDistrictTo = computed(() =>
    queryDistrictFrom.value === ''
        ? districtDataTo.value
        : districtDataTo.value.filter((element) =>
            element.Name
                .toLowerCase()
                .replace(/\s+/g, '')
                .includes(queryDistrictFrom.value.toLowerCase().replace(/\s+/g, ''))
        )
)

function changeProvinceFrom(data) {
    // fillter service
    let temp = []
    if (data?.Name) {
        districtDataFrom.value = data.Districts;
        filter.value.district_from = [];

        // Nếu đã nhập tỉnh TO
        if (filter.value.province_to?.Name) {
            // Nếu đã nhập quận TO
            if (filter.value.district_to?.Name) {
                temp = filterServices.value.filter((element) => (element.province_from === data.Name && element.province_to === filter.value.province_to.Name && element.district_to === filter.value.district_to.Name));
                services.value = temp;
            }
            else {
                temp = filterServices.value.filter((element) => (element.province_from === data.Name && element.province_to === filter.value.province_to.Name));
                services.value = temp;
            }
        }
        else {

            temp = filterServices.value.filter((element) => element.province_from === data.Name);
            services.value = temp;
        }
    }
    changeWeight();
}

function changeDistrictFrom(data) {
    // console.log(filter.value);
    // console.log(data.Name);
    let temp = []
    if (data?.Name) {
        // Nếu đã nhập tỉnh TO
        if (filter.value.province_to?.Name) {
            // Nếu đã nhập quận TO
            if (filter.value.district_to?.Name) {
                temp = filterServices.value.filter((element) =>
                    (element.province_to === filter.value.province_to.Name && element.district_to === filter.value.district_to.Name) &&
                    (element.district_from === data.Name && element.province_from === filter.value.province_from.Name)
                );
                services.value = temp;
            }
            else {
                temp = filterServices.value.filter((element) =>
                    (element.province_to === filter.value.province_to.Name) &&
                    (element.district_from === data.Name && element.province_from === filter.value.province_from.Name)
                );
                services.value = temp;
            }
        }
        else {
            temp = filterServices.value.filter((element) => (element.district_from === data.Name) && (element.province_from === filter.value.province_from.Name));
            services.value = temp;
        }
    }
    else {
        // Nếu đã nhập tỉnh TO
        if (filter.value.province_to?.Name) {
            // Nếu đã nhập quận TO
            if (filter.value.district_to?.Name) {
                temp = filterServices.value.filter((element) =>
                    (element.province_to === filter.value.province_to.Name && element.district_to === filter.value.district_to.Name)
                );
                services.value = temp;
            }
            else {
                temp = filterServices.value.filter((element) =>
                    (element.province_to === filter.value.province_to.Name)
                );
                services.value = temp;
            }
        }
        else {
            services.value = filterServices.value;
        }
    }
    changeWeight();
}

function changeProvinceTo(data) {
    // fillter service
    let temp = []
    if (data?.Name) {
        districtDataTo.value = data.Districts;
        filter.value.district_to = [];

        // Nếu đã nhập tỉnh FROM
        if (filter.value.province_from?.Name) {
            // Nếu đã nhập quận FROM
            if (filter.value.district_from?.Name) {
                temp = filterServices.value.filter((element) => (element.province_to === data.Name && element.province_from === filter.value.province_from.Name && element.district_from === filter.value.district_from.Name));
                services.value = temp;
            }
            else {
                temp = filterServices.value.filter((element) => (element.province_to === data.Name && element.province_from === filter.value.province_from.Name));
                services.value = temp;
            }
        }
        else {
            temp = filterServices.value.filter((element) => element.province_to === data.Name);
            services.value = temp;
        }
    }
    changeWeight();
}

function changeDistrictTo(data) {
    // console.log(filter.value.district_to.Name);
    // console.log(data.Name);
    let temp = []
    if (data?.Name) {
        // Nếu đã nhập tỉnh FROM
        if (filter.value.province_from?.Name) {
            // Nếu đã nhập quận FROM
            if (filter.value.district_from?.Name) {
                temp = filterServices.value.filter((element) =>
                    (element.province_from === filter.value.province_from.Name && element.district_from === filter.value.district_from.Name) &&
                    (element.district_to === data.Name && element.province_to === filter.value.province_to.Name)
                );
                services.value = temp;
            }
            else {
                temp = filterServices.value.filter((element) =>
                    (element.province_from === filter.value.province_from.Name) &&
                    (element.district_to === data.Name && element.province_to === filter.value.province_to.Name)
                );
                services.value = temp;
            }
        }
        else {
            temp = filterServices.value.filter((element) => (element.district_to === data.Name) && (element.province_to === filter.value.province_to.Name));
            services.value = temp;
        }
    }
    else {
        // Nếu đã nhập tỉnh FROM
        if (filter.value.province_from?.Name) {
            // Nếu đã nhập quận FROM
            if (filter.value.district_from?.Name) {
                temp = filterServices.value.filter((element) =>
                    (element.province_from === filter.value.province_from.Name && element.district_from === filter.value.district_from.Name)
                );
                services.value = temp;
            }
            else {
                temp = filterServices.value.filter((element) =>
                    (element.province_from === filter.value.province_from.Name)
                );
                services.value = temp;
            }
        }
        else {
            services.value = filterServices.value;
        }
    }
    changeWeight();
}

function handleChangeWeight() {
    changeDistrictFrom();
    changeDistrictTo();
    // console.log(event.target.value);
    if (event.target.value) {
        const temp = services.value.filter((element) =>
            element.weight <= event.target.value
        );
        services.value = temp;
    }
}

function changeWeight() {
    if (filter.value?.weight) {
        const temp = services.value.filter((element) =>
            element.weight <= filter.value?.weight
        );
        services.value = temp;
    }
}

function resetFromData(data) {
    districtDataFrom.value = [];
    filter.value.district_from = [];
    filter.value.province_from = [];
    services.value = filterServices.value;
    changeDistrictFrom();
}

function resetToData(data) {
    districtDataTo.value = [];
    filter.value.district_to = [];
    filter.value.province_to = [];
    services.value = filterServices.value;
    changeDistrictTo();
}

// Google Analytics
// const { pageview } = useGtag()
// const track = () => {
//     pageview({ page_path: "/" });
// };
// track()

// Khai bao bien
const filter = ref({
    province_from: '',
    district_from: '',
    province_to: '',
    district_to: '',
    weight: '',
})

const priceFilters = ref([
    {
        id: 1,
        name: 'Theo giá',
        low: 0,
        high: 0,
    },
    {
        id: 2,
        name: '0 - 20.000 VND',
        low: 0,
        high: 20000,
    },
    {
        id: 3,
        name: '20.000 - 50.000 VND',
        low: 20000,
        high: 50000,
    },
    {
        id: 4,
        name: '50.000 - 100.000 VND',
        low: 50000,
        high: 100000,
    },
    {
        id: 4,
        name: '100.000 - 200.000 VND',
        low: 100000,
        high: 200000,
    },
    {
        id: 4,
        name: '200.000 - 500.000 VND',
        low: 200000,
        high: 500000,
    },
    {
        id: 4,
        name: '> 500.000 VND',
        low: 500000,
        high: '',
    }
])

const timeFilters = ref([
    {
        id: 1,
        name: 'Theo thời gian',
        min: 0,
        max: 0
    },
    {
        id: 2,
        name: '12 - 24 Giờ',
        min: 12,
        max: 24
    },
    {
        id: 3,
        name: '1 - 2 Ngày',
        min: 24,
        max: 48
    },
    {
        id: 4,
        name: '2 - 5 Ngày',
        min: 48,
        max: 120
    },
    {
        id: 4,
        name: '> 5 Ngày',
        min: 120,
        max: ''
    }
])

const priceSelected = ref(priceFilters.value[0])
const timeSelected = ref(timeFilters.value[0])
const filterServices = ref();

const services = ref("");
const rootServices = ref("");

const selectedService = ref();

// function
const handleCompareService = () => {
    let compareServices = localStorage.getItem('compareProductList');
    let temp = JSON.parse(compareServices);
    if (!temp?.length) {
        toast.warning("Oh, Phải chọn 2 dịch vụ trở lên", { timeout: 3000 });
        return;
    }

    if (temp.length >= 2) {
        router.push(`/compare`);
    }
    else {
        toast.warning("Oh, Phải chọn 2 dịch vụ trở lên", { timeout: 3000 });
    }
}

const changeCheckBoxCompare = (service_id) => {
    let compareServices = localStorage.getItem('compareProductList');
    let temp = JSON.parse(compareServices);
    if (compareServices && !service_id) {
        // Push data to services
        for (let i = 0; i < temp.length; i++) {
            for (let j = 0; j < services.value.length; j++) {
                if (services.value[j].service_id === temp[i]) {
                    // console.log(temp[i] + " " + services.value[j].service_id);
                    services.value[j].isInCompareArray = true;
                    break;
                }
            }
        }
    }
    else if (service_id) {
        // Nếu có mảng so sánh tồn tài trong localhost
        if (compareServices) {
            if (temp.includes(service_id)) {
                temp = temp.filter((element) => element !== service_id);
                services.value.forEach((element, index) => {
                    if (element.service_id === service_id) {
                        services.value[index].isInCompareArray = false;
                        // console.log(element, index);
                    }
                });
                // toast.warning("Dịch vụ đã xoá khỏi danh sách so sánh", { timeout: 3000 });
            } else {
                // Nếu nhiều hơn năm sản phầm thì thông báo lỗi
                if (temp.length > 4) {
                    // console.log(temp.length);
                    toast.warning("Oh, Chỉ so sánh tối đa 5 dịch vụ", { timeout: 3000 });
                } else {
                    services.value.forEach((element, index) => {
                        if (element.service_id === service_id) {
                            services.value[index].isInCompareArray = true;
                            // console.log(element, index);
                        }
                    });
                    // toast.success("Thêm thành công", { timeout: 3000 });
                    temp.push(service_id);
                }
            }

            // Chuyen sang json va luu
            localStorage.setItem('compareProductList', JSON.stringify(temp))
        }

        // Nếu có mảng so sánh chưa tồn tài trong localhost
        else {
            temp = []
            services.value.forEach((element, index) => {
                if (element.service_id === service_id) {
                    services.value[index].isInCompareArray = true;
                    // console.log(element, index);
                }
            });

            temp.push(service_id)
            // toast.success("Thêm thành công", { timeout: 3000 });

            // Chuyen sang json va luu
            localStorage.setItem('compareProductList', JSON.stringify(temp))
        }
    }
}

// Lọc theo giá
const priceFilterHandle = async (selected) => {
    let result = []
    // Nếu bộ lọc time đang hoạt động
    if (timeFilters.value[0].name !== timeSelected.value.name) {
        result = timeFilter(timeSelected.value, rootServices.value, timeFilters.value);
        // Nếu bộ lọc price không hoạt động
        if (selected.name === priceFilters.value[0].name) {
            services.value = result;

            filterServices.value = services.value;
            return;
        } else {
            services.value = priceFilter(selected, result, priceFilters.value);

            filterServices.value = services.value;
        }
    }
    else {
        // Nếu bộ lọc price không hoạt động
        if (selected.name === priceFilters.value[0].name) {
            services.value = rootServices.value;

            filterServices.value = services.value;
            return;
        } else {
            services.value = priceFilter(selected, rootServices.value, priceFilters.value);

            filterServices.value = services.value;
        }

    }
};

function priceFilter(selected, services, filter) {
    let result = []
    for (let i = 0; filter.length > i; i++) {
        if (selected.name === filter[i].name) {
            for (let j = 0; services.length > j; j++) {
                if ((services[j].price >= filter[i].low) && filter[i].high == '') {
                    result.push(services[j]);
                }
                else if ((services[j].price >= filter[i].low) && (services[j].price <= filter[i].high)) {
                    result.push(services[j]);
                }
            }
        }
    }
    return result;
};

// Lọc theo thời gian - Giờ
const timeFilterHandle = async (selected) => {
    let result = []
    // Nếu bộ lọc price đang hoạt động
    if (priceFilters.value[0].name !== priceSelected.value.name) {
        result = priceFilter(priceSelected.value, rootServices.value, priceFilters.value);
        // Nếu bộ lọc time không hoạt động
        if (selected.name === timeFilters.value[0].name) {
            services.value = result;

            filterServices.value = services.value;
            return;
        } else {
            services.value = timeFilter(selected, result, timeFilters.value);

            filterServices.value = services.value;
        }
    }
    else {
        if (selected.name === timeFilters.value[0].name) {
            services.value = rootServices.value;

            filterServices.value = services.value;
            return;
        } else {
            services.value = timeFilter(selected, rootServices.value, timeFilters.value);

            filterServices.value = services.value;
        }
    }
};

function timeFilter(selected, services, filter) {
    let result = []
    for (let i = 0; filter.length > i; i++) {
        if (selected.name === filter[i].name) {
            for (let j = 0; services.length > j; j++) {
                if ((services[j].delivery_min_time === null) && (services[j].delivery_max_time >= filter[i].min)) {
                    result.push(services[j]);
                }
                else if ((services[j].delivery_min_time >= filter[i].min) && (services[j].delivery_max_time <= filter[i].max)) {
                    result.push(services[j]);
                }
            }
        }
    }
    return result;
};

const bestRatingfilter = async () => {
    services.value = services.value.toSorted((a, b) => b.average_rate - a.average_rate);
};

const newestfilter = async () => {
    services.value = services.value.toSorted((a, b) => getTime(new Date(b.created)) - getTime(new Date(a.created)));
};

const priceLowToHighfilter = async () => {
    services.value = services.value.toSorted((a, b) => a.price - b.price);
};

const priceHighToLowfilter = async () => {
    services.value = services.value.toSorted((a, b) => b.price - a.price);
};

function removeVietnameseTones(str) {
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");
    // Some system encode vietnamese combining accent as individual utf-8 characters
    // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
    str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
    str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
    // Remove extra spaces
    // Bỏ các khoảng trắng liền nhau
    str = str.replace(/ + /g, " ");
    str = str.trim();
    // Remove punctuations
    // Bỏ dấu câu, kí tự đặc biệt
    str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, " ");
    return str;
}

const getServicesAxios = async () => {
    const { data, error } = await getServices();

    if (data) {
        // console.log(data);
        services.value = data;
        rootServices.value = data;
        let tempFrom = [];
        let tempTo = [];
        for (let i = 0; data.length > i; i++) {
            services.value[i].append = false;
            services.value[i].isInCompareArray = false;

            // Tao services root
            rootServices.value[i].append = false;
            rootServices.value[i].isInCompareArray = false;

            // Lấy dữ liệu cho autocomplete input location - 
            address.value.forEach(element => {
                // type from
                if (services.value[i].province_from === element.Name && !tempFrom.includes(element.Name)) {
                    provinceDataFrom.value.push(element);
                    tempFrom.push(element.Name)
                    // console.log(element);
                }

                // type to
                if (services.value[i].province_to === element.Name && !tempTo.includes(element.Name)) {
                    provinceDataTo.value.push(element);
                    tempTo.push(element.Name)
                    // console.log(element);
                }
            });
        }

        filterServices.value = services.value;

        await getInfoReviewsAxios();
        await getPromotionsAxios();

        // Load ok
        isLoading.value = false;

        // puhs data tu localhost neu co
        changeCheckBoxCompare();
    }

    if (error) {
        services.value = JSON.stringify(error, null, 2);
    }
    // console.log(services.value);
};

const getAddressForCreateOrderAxios = async () => {
    const { data, error } = await getAddressForCreateOrder();

    if (data) {
        // console.log(data);
        getServicesAxios();
        address.value = data;
    }

    if (error) {
        // console.log(error)
    }
};

const getPromotionsAxios = async () => {
    const { data, error } = await getPromotions();

    if (data) {
        // console.log(data);
        for (let i = 0; rootServices.value.length > i; i++) {
            for (let j = 0; data.length > j; j++) {
                if (rootServices.value[i].service_id === data[j].service_id && getTime(new Date()) >= getTime(new Date(data[j].start)) && getTime(new Date()) < getTime(new Date(data[j].end))) {
                    rootServices.value[i].promotion_price = data[j].price;
                }
            }
        }

        for (let i = 0; services.value.length > i; i++) {
            for (let j = 0; data.length > j; j++) {
                if (services.value[i].service_id === data[j].service_id && getTime(new Date()) >= getTime(new Date(data[j].start)) && getTime(new Date()) < getTime(new Date(data[j].end))) {
                    services.value[i].promotion_price = data[j].price;
                }
            }
        }

        filterServices.value = services.value;

        // console.log(services.value);
    }

    if (error) {
        services.value = JSON.stringify(error, null, 2);
    }
};

onBeforeMount(() => {
    // run function
    getAddressForCreateOrderAxios();
})


const getInfoReviewsAxios = async () => {
    const { data, error } = await getInfoReviews();

    if (data) {
        // console.log(data);
        for (let i = 0; services.value.length > i; i++) {
            for (let j = 0; data.length > j; j++) {
                if (services.value[i].service_id === data[j].service_id) {
                    services.value[i].average_rate = data[j].average_rate;
                    services.value[i].totalCount = data[j].totalCount;

                    // Tao services root
                    rootServices.value[i].average_rate = data[j].average_rate;
                    rootServices.value[i].totalCount = data[j].totalCount;
                }
            }
        }
        // console.log(services.value);

        filterServices.value = services.value;
    }

    if (error) {
        services.value = JSON.stringify(error, null, 2);
    }
};
</script>

<style>
.tooltip {
    position: relative;
}

.tooltip::before,
.tooltip::after {
    --scale: 0;
    --arrow-size: 10px;
    --tooltip-color: #333;

    position: absolute;
    top: -.25rem;
    left: 50%;
    transform: translateX(-50%) translateY(var(--translate-y, 0)) scale(var(--scale));
    transition: 150ms transform;
    transform-origin: bottom center;
}

.tooltip::before {
    --translate-y: calc(-100% - var(--arrow-size));

    content: attr(data-tooltip) " đánh giá";
    color: white;
    padding: .25rem;
    border-radius: .3rem;
    text-align: center;
    width: max-content;
    /* max-width: 70px; */
    background: var(--tooltip-color);
}

.tooltip:hover::before,
.tooltip:hover::after {
    --scale: 1;
}

.tooltip::after {
    --translate-y: calc(-1 * var(--arrow-size));

    content: '';
    border: var(--arrow-size) solid transparent;
    border-top-color: var(--tooltip-color);
    transform-origin: top center;
}

/* Chrome, Safari, Edge, Opera - Khoá spin trên input, type number */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

/* Hide scrollbar for Chrome, Safari and Opera */
.no-scrollbar::-webkit-scrollbar {
    display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.no-scrollbar {
    -ms-overflow-style: none;
    /* IE and Edge */
    scrollbar-width: none;
    /* Firefox */
}
</style>