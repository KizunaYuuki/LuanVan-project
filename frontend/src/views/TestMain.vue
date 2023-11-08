<template>
    <main v-if="true">
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
                        <button
                            @click="resetFromData(priceSelect, timeSelect, serviceTypeSelect, providerSelect, '', '', inputFilter.province_to?.Name, inputFilter.district_to?.Name, weightSelect, [])"
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
                    <Combobox v-model="inputFilter.province_from">
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
                                        :key="province_from.Id" :value="province_from" v-slot="{ selected, active }">
                                        <li @click="handleFilterByProvinceFrom(priceSelect, timeSelect, serviceTypeSelect, providerSelect, province_from.Name, '', inputFilter.province_to?.Name, inputFilter.district_to?.Name, weightSelect, province_from)"
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
                    <Combobox v-model="inputFilter.district_from">
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
                                        <li @click="handleFilterByDistrictFrom(priceSelect, timeSelect, serviceTypeSelect, providerSelect, inputFilter.province_from?.Name, district_from.Name, inputFilter.province_to?.Name, inputFilter.district_to?.Name, weightSelect, province_from)"
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
                        <button
                            @click="resetToData(priceSelect, timeSelect, serviceTypeSelect, providerSelect, inputFilter.province_from?.Name, inputFilter.district_from?.Name, '', '', weightSelect, [])"
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
                    <Combobox v-model="inputFilter.province_to">
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
                                        <li @click="handleFilterByProvinceTo(priceSelect, timeSelect, serviceTypeSelect, providerSelect, inputFilter.province_from?.Name, inputFilter.district_from?.Name, province_to.Name, '', weightSelect, province_to)"
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
                    <Combobox v-model="inputFilter.district_to">
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
                                        <li @click="handleFilterByDistrictTo(priceSelect, timeSelect, serviceTypeSelect, providerSelect, inputFilter.province_from?.Name, inputFilter.district_from?.Name, inputFilter.province_to?.Name, district_to?.Name, weightSelect, province_from)"
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
            </div>

            <!-- Filters -->
            <div class="rounded-lg m-[16px] flex lg:justify-start mx-auto max-w-5xl lg:pt-[24px] flex-wrap justify-center">
                <!-- Title -->
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
                    <Listbox v-model="priceSelect" class="m-2 ml-[8px]">
                        <div class="relative">
                            <ListboxButton
                                class="hover:border-[#9aa0a6] border relative w-full cursor-default rounded-lg border-gray-50 bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                                <span class="block truncate">{{ priceSelect.name }}</span>
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
                                        <li @click="handleFilterByPrice(priceFilter, timeSelect, serviceTypeSelect, providerSelect, inputFilter.province_from?.Name, inputFilter.district_from?.Name, inputFilter.province_to?.Name, inputFilter.district_to?.Name, weightSelect)"
                                            class="m-1 rounded-md" :class="[
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
                    <Listbox v-model="timeSelect" class="m-2 ml-[8px]">
                        <div class="relative">
                            <ListboxButton
                                class="hover:border-[#9aa0a6] border relative w-full cursor-default rounded-lg border-gray-50 bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                                <span class="block truncate">{{ timeSelect.name }}</span>
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
                                        <li @click="handleFilterByPrice(priceSelect, timeFilter, serviceTypeSelect, providerSelect?.name, inputFilter.province_from?.Name, inputFilter.district_from?.Name, inputFilter.province_to?.Name, inputFilter.district_to?.Name, weightSelect)"
                                            class="m-1 rounded-md" :class="[
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

                <!-- PROVIDER FILTER -->
                <div class="w-60">
                    <Listbox v-model="providerSelect" class="m-2 ml-[8px]">
                        <div class="relative">
                            <ListboxButton
                                class="hover:border-[#9aa0a6] border relative w-full cursor-default rounded-lg border-gray-50 bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                                <span class="block truncate">{{ providerSelect.name }}</span>
                                <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                    <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                                </span>
                            </ListboxButton>

                            <transition leave-active-class="transition duration-100 ease-in" leave-from-class="opacity-100"
                                leave-to-class="opacity-0">
                                <ListboxOptions
                                    class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                                    <ListboxOption v-slot="{ active, selected }" v-for="providerFilter in providerFilters"
                                        :key="providerFilter.name" :value="providerFilter" as="template">
                                        <li @click="handleFilterByPrice(priceSelect, timeSelect, serviceTypeSelect, providerFilter.name, inputFilter.province_from?.Name, inputFilter.district_from?.Name, inputFilter.province_to?.Name, inputFilter.district_to?.Name, weightSelect)"
                                            class="m-1 rounded-md" :class="[
                                                active ? 'bg-sky-400 text-white' : 'text-gray-900',
                                                'relative cursor-default select-none py-2 pl-10 pr-4',
                                            ]">
                                            <span :class="[
                                                selected ? 'font-medium' : 'font-normal',
                                                'block truncate',
                                            ]">{{ providerFilter.name }}</span>
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
        </div>
    </main>

    <div class="card mt-60">
        <DataTable v-model:filters="filtered" :value="filtered" paginator :rows="5" dataKey="service_id"
            :rowsPerPageOptions="[5, 10, 20, 50]" class="text-xs">
            <Column field="service_id" header="service_id"></Column>
            <Column field="service_name" header="service_name"></Column>
            <Column field="delivery_date" header="delivery_date"></Column>
            <Column field="price" header="price"></Column>
            <Column field="delivery_min_time" header="min_time"></Column>
            <Column field="delivery_max_time" header="max_time"></Column>
            <Column field="service_types_name" header="service_types_name"></Column>
            <Column field="weight" header="weight"></Column>
            <Column field="" header="FROM">
                <template #body="{ data }">
                    {{ data.district_from }}, {{ data.province_from }}
                </template>
            </Column>
            <Column field="" header="TO">
                <template #body="{ data }">
                    {{ data.district_to }}, {{ data.province_to }}
                </template>
            </Column>
        </DataTable>
    </div>
</template>

<script setup>
import { ref, onBeforeMount, computed } from "vue";
import { getServices, getInfoReviews } from "@/services/service.service";
import { getPromotions } from "@/services/promotion.service";
import { getAddressForCreateOrder } from "@/services/address.service";
import getTime from 'date-fns/getTime';
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

const services = ref();
const address = ref();
const filtered = ref();
const inputFilter = ref({
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
        min: null,
        max: null,
    },
    {
        id: 2,
        name: '0 - 20.000 VND',
        min: 0,
        max: 20000,
    },
    {
        id: 3,
        name: '20.000 - 50.000 VND',
        min: 20000,
        max: 50000,
    },
    {
        id: 4,
        name: '50.000 - 100.000 VND',
        min: 50000,
        max: 100000,
    },
    {
        id: 4,
        name: '100.000 - 200.000 VND',
        min: 100000,
        max: 200000,
    },
    {
        id: 4,
        name: '≥ 200.000 VND',
        min: 200000,
        max: null,
    }
])
const timeFilters = ref([
    {
        id: 1,
        name: 'Theo thời gian',
        min: null,
        max: null
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
        name: '≥  5 Ngày',
        min: 120,
        max: null
    }
])
const weightFilters = ref([
    {
        id: 0,
        name: 'Theo trọng lượng',
        min: null,
        max: null
    },
    {
        id: 1,
        name: '0 - 50g',
        min: 0,
        max: 50
    },
    {
        id: 2,
        name: '50 - 100g',
        min: 50,
        max: 100
    },
    {
        id: 3,
        name: '250 - 500g',
        min: 250,
        max: 500
    },
    {
        id: 4,
        name: '500 - 1000g',
        min: 750,
        max: 1000
    },
    {
        id: 5,
        name: '1000 - 1500g',
        min: 1000,
        max: 1500
    },
    {
        id: 6,
        name: '1500 - 2000g',
        min: 1500,
        max: 2000
    },
    {
        id: 7,
        name: '≥  2000g',
        min: 2000,
        max: null
    },
])
const serviceTypeFilters = ref([
    {
        id: 0,
        name: 'Theo nhà cung cấp',
    },
    {
        id: 1,
        name: 'Dịch vụ chuyển phát Nhanh',
    },
    {
        id: 2,
        name: 'Dịch vụ chuyển phát Tối ưu',
    },
    {
        id: 3,
        name: 'Dịch vụ chuyển phát Tiêu chuẩn',
    }
])
const providerFilters = ref([
    {
        id: 0,
        name: 'Theo nhà cung cấp',
    },
    {
        id: 2,
        name: 'VIETTEL POST',
    },
    {
        id: 3,
        name: 'DHL EXPRESS',
    }
])
const priceSelect = ref(priceFilters.value[0]);
const timeSelect = ref(timeFilters.value[0]);
const weightSelect = ref(weightFilters.value[0]);
const serviceTypeSelect = ref('');
const providerSelect = ref(providerFilters.value[0]);
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
// RESET
function resetFromData(priceSelected, timeSelected, serviceTypeName, providerName, province_from, district_from, province_to, district_to, weight, province) {
    inputFilter.value.district_from = [];
    inputFilter.value.province_from = [];
    districtDataFrom.value = [];
    handleFilterByProvinceFrom(priceSelected, timeSelected, serviceTypeName, providerName, province_from, district_from, province_to, district_to, weight, province);
}
// RESET
function resetToData(priceSelected, timeSelected, serviceTypeName, providerName, province_from, district_from, province_to, district_to, weight, province) {
    inputFilter.value.district_to = [];
    inputFilter.value.province_to = [];
    districtDataTo.value = [];
    handleFilterByProvinceTo(priceSelected, timeSelected, serviceTypeName, providerName, province_from, district_from, province_to, district_to, weight, province);
}
// LỌC THEO PRICE
const handleFilterByPrice = function (priceSelected, timeSelected, serviceTypeName, providerName, province_from, district_from, province_to, district_to, weight) {
    filtered.value = services.value;

    if (priceSelected?.min || !(priceSelected?.min && priceSelected.max)) {
        filtered.value = priceFilter(services.value, priceSelected.min, priceSelected.max);
    }

    if (timeSelected?.min || !(timeSelected?.min && timeSelected?.max)) {
        filtered.value = timeFilter(filtered.value, timeSelected.min, timeSelected.max);
    }

    if (serviceTypeName) {
        filtered.value = serviceTypeFilter(filtered.value, serviceTypeName);
    }

    if (providerName) {         
        filtered.value = providerFilter(filtered.value, providerName);
    }

    if (province_from) {
        filtered.value = provinceFromFilter(filtered.value, province_from);
    }

    if (district_from) {
        filtered.value = districtFromFilter(filtered.value, district_from);
    }

    if (province_to) {
        filtered.value = provinceToFilter(filtered.value, province_to);
    }

    if (district_to) {
        filtered.value = districtToFilter(filtered.value, district_to);
    }

    if (weight) {
        filtered.value = weightFilter(filtered.value, weight.min, weight.max);
    }
}
// LỌC THEO PROVINCE - TYPE FROM
const handleFilterByProvinceFrom = async function (priceSelected, timeSelected, serviceTypeName, providerName, province_from, district_from, province_to, district_to, weight, province) {
    if (province?.Districts) {
        districtDataFrom.value = province.Districts;
    }
    inputFilter.value.district_from = '';
    let data = services.value;

    if (province_from) {
        data = provinceFromFilter(services.value, province_from);
    }

    if (district_from) {
        data = districtFromFilter(data, district_from);
    }

    if (province_to) {
        data = provinceToFilter(data, province_to);
    }

    if (district_to) {
        data = districtToFilter(data, district_to);
    }

    if (priceSelected?.min || !(priceSelected?.min && priceSelected.max)) {
        data = priceFilter(data, priceSelected.min, priceSelected.max);
    }

    if (timeSelected?.min || !(timeSelected?.min && timeSelected?.max)) {
        data = timeFilter(data, timeSelected.min, timeSelected.max);
    }

    if (serviceTypeName) {
        data = serviceTypeFilter(data, serviceTypeName);
    }

    if (providerName) {
        data = providerFilter(data, providerName);
    }

    if (weight) {
        data = weightFilter(data, weight.min, weight.max);
    }
    filtered.value = data;
}
// LỌC THEO DISTRICT - TYPE FROM
const handleFilterByDistrictFrom = function (priceSelected, timeSelected, serviceTypeName, providerName, province_from, district_from, province_to, district_to, weight) {
    let data = services.value;
    if (province_from) {
        data = provinceFromFilter(services.value, province_from);
    }

    if (district_from) {
        data = districtFromFilter(data, district_from);
    }

    if (province_to) {
        data = provinceToFilter(data, province_to);
    }

    if (district_to) {
        data = districtToFilter(data, district_to);
    }

    if (priceSelected?.min || !(priceSelected?.min && priceSelected.max)) {
        data = priceFilter(data, priceSelected.min, priceSelected.max);
    }

    if (timeSelected?.min || !(timeSelected?.min && timeSelected?.max)) {
        data = timeFilter(data, timeSelected.min, timeSelected.max);
    }

    if (serviceTypeName) {
        data = serviceTypeFilter(data, serviceTypeName);
    }

    if (providerName) {
        data = providerFilter(data, providerName);
    }

    if (weight) {
        data = weightFilter(data, weight.min, weight.max);
    }

    filtered.value = data;
}
// LỌC THEO PROVINCE - TYPE TO
const handleFilterByProvinceTo = async function (priceSelected, timeSelected, serviceTypeName, providerName, province_from, district_from, province_to, district_to, weight, province) {
    if (province?.Districts) {
        districtDataTo.value = province.Districts;
    }
    inputFilter.value.district_to = '';
    let data = services.value;
    console.log("province_to: " + province_to + '\n' + "province_from: " + province_from);

    if (province_to) {
        data = provinceToFilter(services.value, province_to);
    }

    if (district_to) {
        data = districtToFilter(data, district_to);
    }

    if (province_from) {
        data = provinceFromFilter(data, province_from);
    }

    if (district_from) {
        data = districtFromFilter(data, district_from);
    }

    if (priceSelected?.min || !(priceSelected?.min && priceSelected.max)) {
        data = priceFilter(data, priceSelected.min, priceSelected.max);
    }

    if (timeSelected?.min || !(timeSelected?.min && timeSelected?.max)) {
        data = timeFilter(data, timeSelected.min, timeSelected.max);
    }

    if (serviceTypeName) {
        data = serviceTypeFilter(data, serviceTypeName);
    }

    if (providerName) {
        data = providerFilter(data, providerName);
    }

    if (weight) {
        data = weightFilter(data, weight.min, weight.max);
    }
    filtered.value = data;
}
// LỌC THEO DISTRICT - TYPE TO
const handleFilterByDistrictTo = function (priceSelected, timeSelected, serviceTypeName, providerName, province_from, district_from, province_to, district_to, weight) {
    let data = services.value;

    if (province_to) {
        data = provinceToFilter(services.value, province_to);
    }

    if (district_to) {
        data = districtToFilter(data, district_to);
    }

    if (province_from) {
        data = provinceFromFilter(data, province_from);
    }

    if (district_from) {
        data = districtFromFilter(data, district_from);
    }

    if (priceSelected?.min || !(priceSelected?.min && priceSelected.max)) {
        data = priceFilter(data, priceSelected.min, priceSelected.max);
    }

    if (timeSelected?.min || !(timeSelected?.min && timeSelected?.max)) {
        data = timeFilter(data, timeSelected.min, timeSelected.max);
    }

    if (serviceTypeName) {
        data = serviceTypeFilter(data, serviceTypeName);
    }

    if (providerName) {
        data = providerFilter(data, providerName);
    }

    if (weight) {
        data = weightFilter(data, weight.min, weight.max);
    }

    filtered.value = data;
}
// FILTER FUNCTION
const priceFilter = function (data, minPrice, maxPrice) {
    console.log(minPrice + ' ' + maxPrice);
    return data.filter((element) => (minPrice === null ? true : (maxPrice === null ? (element.price >= minPrice) : (element.price >= minPrice && element.price <= maxPrice))))
}
const timeFilter = function (data, minTime, maxTime) {
    if (minTime === null && maxTime === null) {
        return data;
    } else
        return data.filter((element) => ((element.delivery_min_time === null ? true : (element.delivery_min_time >= minTime)) && element.delivery_max_time <= maxTime))
}
const serviceTypeFilter = function (data, serviceTypeName) {
    return data.filter((element) => (serviceTypeName === '' ? true : (element.service_types_name === serviceTypeName)))
}
const providerFilter = function (data, providerName) {
    if(providerName === providerFilters.value[0].name) {
        return data;
    }
    return data.filter((element) => (providerName === '' ? true : (element.provider_name === providerName)))
}
const provinceFromFilter = function (data, provinceName) {
    return data.filter((element) => (provinceName === '' ? true : (element.province_from === provinceName)))
}
const districtFromFilter = function (data, districtName) {
    return data.filter((element) => (districtName === '' ? true : (element.district_from === districtName)))
}
const provinceToFilter = function (data, provinceName) {
    return data.filter((element) => (provinceName === '' ? true : (element.province_to === provinceName)))
}
const districtToFilter = function (data, districtName) {
    return data.filter((element) => (districtName === '' ? true : (element.district_to === districtName)))
}
const weightFilter = function (data, minWeight, maxWeight) {
    return data.filter((element) => (minWeight === null ? true : (maxWeight === null ? (element.weight >= minWeight) : (element.weight >= minWeight && element.weight <= maxWeight))))
}
// GET DATA FUNCTION
const handleGetAddress = async () => {
    const { data, error } = await getAddressForCreateOrder();
    if (data) {
        address.value = data;
        await getServicesAxios();
    }
};
const getServicesAxios = async () => {
    const { data, error } = await getServices();
    if (data) {
        services.value = data;
        // define
        let tempFrom = [];
        let tempTo = [];
        for (let i = 0; data.length > i; i++) {
            // services.value[i].append = false;
            // services.value[i].isInCompareArray = false;
            // Lấy dữ liệu cho autocomplete input location - 
            address.value.forEach(element => {
                // type from
                if (services.value[i].province_from === element.Name && !tempFrom.includes(element.Name)) {
                    provinceDataFrom.value.push(element);
                    tempFrom.push(element.Name)
                }
                // type to
                if (services.value[i].province_to === element.Name && !tempTo.includes(element.Name)) {
                    provinceDataTo.value.push(element);
                    tempTo.push(element.Name)
                }
            });
        } console.log(provinceDataFrom.value);
        // Lấy thông tin promotion
        await getPromotionsAxios();
        // Load Complete
        // isLoading.value = false;
        // puhs data tu localhost neu co
        // changeCheckBoxCompare();
    }
};
const getPromotionsAxios = async () => {
    const { data, error } = await getPromotions();
    if (data) {
        for (let i = 0; services.value.length > i; i++) {
            for (let j = 0; data.length > j; j++) {
                if (services.value[i].service_id === data[j].service_id && getTime(new Date()) >= getTime(new Date(data[j].start)) && getTime(new Date()) < getTime(new Date(data[j].end))) {
                    services.value[i].promotion_price = data[j].price;
                }
            }
        }
        // Lấy thông tin review
        await getInfoReviewsAxios();
    }
};
const getInfoReviewsAxios = async () => {
    const { data, error } = await getInfoReviews();
    if (data) {
        for (let i = 0; services.value.length > i; i++) {
            for (let j = 0; data.length > j; j++) {
                if (services.value[i].service_id === data[j].service_id) {
                    services.value[i].average_rate = data[j].average_rate;
                    services.value[i].totalCount = data[j].totalCount;
                }
            }
        }
        console.log(services.value);
        filtered.value = services.value;
    }
};
// GET DATA
onBeforeMount(() => {
    // run function
    handleGetAddress();
})
</script>