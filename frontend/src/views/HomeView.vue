<template>
    <Header></Header>
    <main>
        <!-- Băng rôn khuyến mãi -->
        <banner></banner>
        <!-- <h1 class="text-[24px] text-[#202124] font-[500] text-center">Khám phá những dịch vụ của chúng tôi</h1> -->

        <!-- Gợi ý dịch vụ -->
        <!-- <div class="py-6 bg-[#0096fa0d] hover:scale-[1.01] transition-all duration-[0.3s] ease-in-out delay-[0ms]">
            <h2 class="text-[24px] text-[#202124] font-[500] text-center mb-[16px]">Những dịch vụ vận chuyển được gợi ý dành
                riêng cho bạn</h2>
            <section class="flex flex-wrap content-center justify-center items-center">
                <domesticCard></domesticCard>
                <domesticCard></domesticCard>
                <domesticCard></domesticCard>
                <domesticCard></domesticCard>
            </section>
        </div> -->

        <!-- Vận chuyển quốc tế -->
        <!-- <div class="py-6 bg-[#FFF7F50d] hover:scale-[1.01] transition-all duration-[0.3s] ease-in-out delay-[0ms]">
            <h2 class="text-[24px] text-[#202124] font-[500] text-center mb-[16px]">Vận chuyển hàng hoá Quốc tế</h2>
            <section class="flex flex-wrap content-center justify-center items-center">
                <freightProductCard></freightProductCard>
                <freightProductCard></freightProductCard>
                <freightProductCard></freightProductCard>
                <freightProductCard></freightProductCard>
            </section>
        </div> -->

        <!-- Vận chuyển trong nước -->
        <div class="bg-[#0096fa0d] py-6 hover:scale-[1.01] transition-all duration-[0.3s] ease-in-out delay-[0ms]">
            <h2 class="text-[24px] text-[#202124] font-[500] text-center mb-[16px]">Những dịch vụ vận chuyển hàng hoá phổ
                biến - Trong nước</h2>
            <section class="flex flex-wrap content-center justify-center items-center">
                <domesticCard></domesticCard>
                <domesticCard></domesticCard>
                <domesticCard></domesticCard>
                <domesticCard></domesticCard>
            </section>
        </div>

        <!-- Đăng ký dịch vụ -->
        <!-- <div class="py-6 bg-[#FFF7F5]">
            <h2 class="text-[24px] text-[#202124] font-[500] text-center mb-[16px]">Đăng ký dịch vụ theo yêu cầu của bạn -
                Tuỳ chọn</h2>
            <h3>Xin chào. Bạn vận chuyển hàng từ đâu?</h3>
            <form action="POST">

            </form>
        </div> -->

        <!-- Tìm kiếm dịch vụ -->
        <div class="min-h-[80vh]">

            <!-- Input -->
            <div class="m-[16px] flex justify-between flex-wrap max-w-5xl mx-auto">

                <!-- Gửi từ -->
                <div>
                    <!-- Tỉnh -->
                    <div class="relative rounded-md shadow-sm h-[56px] ml-0 my-[8px]">
                        <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center ml-3">
                            <span class="text-gray-500 sm:text-sm">
                                <svg width="16" height="16" viewBox="0 0 24 24" focusable="false"
                                    class="text-inherit fill-current">
                                    <path
                                        d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12zm10 6c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6z">
                                    </path>
                                </svg>
                            </span>
                        </div>
                        <input type="text"
                            class="font-[500] block w-full h-full rounded-md border py-1.5 pl-[40px] pr-20 text-[#3c4043] placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6 border-[#dadce0]"
                            placeholder="" value="Hồ Chí Minh" />
                    </div>

                    <!-- Huyện -->
                    <div class="relative rounded-md shadow-sm h-[44px] ml-0 my-[8px]">
                        <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center ml-3">
                            <span class="text-gray-500 sm:text-sm">
                                <svg width="16" height="16" viewBox="0 0 24 24" focusable="false"
                                    class="text-inherit fill-current">
                                    <path
                                        d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12zm10 6c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6z">
                                    </path>
                                </svg>
                            </span>
                        </div>
                        <input type="text"
                            class="font-[500] block w-full h-full rounded-md border py-1.5 pl-[40px] pr-20 text-[#3c4043] placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6 border-[#dadce0]"
                            placeholder="" value="Quận 1" />
                    </div>
                </div>


                <!-- Gửi đến -->
                <div>
                    <!-- Tỉnh -->
                    <div class="relative rounded-md shadow-sm h-[56px] lg:ml-[8px] ml-0 my-[8px]">
                        <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <span class="text-gray-500 sm:text-sm">
                                <svg width="24" height="24" viewBox="0 0 24 24" focusable="false"
                                    class="text-inherit fill-current">
                                    <path
                                        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z">
                                    </path>
                                    <circle cx="12" cy="9" r="2.5"></circle>
                                </svg>
                            </span>
                        </div>
                        <input type="text"
                            class="font-[500] block w-full h-full rounded-md border py-1.5 pl-[40px] pr-20 text-[#3c4043] placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6 border-[#dadce0]"
                            placeholder="" value="Hậu giang" />
                    </div>

                    <!-- Huyện -->
                    <div class="relative rounded-md shadow-sm h-[44px] lg:ml-[8px] ml-0 my-[8px]">
                        <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <span class="text-gray-500 sm:text-sm">
                                <svg width="24" height="24" viewBox="0 0 24 24" focusable="false"
                                    class="text-inherit fill-current">
                                    <path
                                        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z">
                                    </path>
                                    <circle cx="12" cy="9" r="2.5"></circle>
                                </svg>
                            </span>
                        </div>
                        <input type="text"
                            class="font-[500] block w-full h-full rounded-md border py-1.5 pl-[40px] pr-20 text-[#3c4043] placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6 border-[#dadce0]"
                            placeholder="" value="Phụng hiệp" />
                    </div>
                </div>


                <!-- Loại dịch vụ và Khối lượng lô hàng -->
                <div>
                    <div class="relative rounded-md shadow-sm h-[56px] lg:ml-[8px] ml-0 my-[8px]">
                        <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <span class="pointer-events-none">
                                <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                            </span>
                        </div>
                        <input type="text"
                            class="font-[500] block w-full h-full rounded-md border py-1.5 pl-[40px] pr-20 text-[#3c4043] placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6 border-[#dadce0]"
                            placeholder="" value="Vận chuyển nhanh" />
                    </div>
                    <div class="relative rounded-md shadow-sm h-[44px] lg:ml-[8px] ml-0 my-[8px]">
                        <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <span class="text-gray-500 sm:text-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" focusable="false"
                                    class="text-inherit fill-current" viewBox="0 0 512 512">
                                    <path
                                        d="M128 176a128 128 0 1 1 256 0 128 128 0 1 1 -256 0zM391.8 64C359.5 24.9 310.7 0 256 0S152.5 24.9 120.2 64H64C28.7 64 0 92.7 0 128V448c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H391.8zM296 224c0-10.6-4.1-20.2-10.9-27.4l33.6-78.3c3.5-8.1-.3-17.5-8.4-21s-17.5 .3-21 8.4L255.7 184c-22 .1-39.7 18-39.7 40c0 22.1 17.9 40 40 40s40-17.9 40-40z" />
                                </svg>
                            </span>
                        </div>
                        <input type="text"
                            class="font-[500] block w-full h-full rounded-md border py-1.5 pl-[40px] pr-20 text-[#3c4043] placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6 border-[#dadce0]"
                            placeholder="" value="2000" />
                    </div>
                </div>
            </div>

            <!-- Filters -->
            <div class="m-[16px] flex justify-start mx-auto max-w-5xl">
                <div class="relative rounded-[16px] shadow-sm hover:text-[#1a73e8] bg-[white]">
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
                        class="hover:text-inherit font-[500] block w-full h-full rounded-md py-1.5 pl-[40px] pr-[16px] text-[#3c4043] outline-none sm:text-sm sm:leading-6">
                        Lọc</h2>
                </div>

                <!-- price filter -->
                <Listbox as="div" v-model="priceSelected" class="w-max ml-[8px]">
                    <!-- <ListboxLabel class="block text-sm font-medium leading-6 text-gray-900">Assigned to</ListboxLabel> -->
                    <div class="relative">
                        <ListboxButton
                            class="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                            <span class="flex items-center">
                                <!-- <img :src="selected.avatar" alt="" class="h-5 w-5 flex-shrink-0 rounded-full" /> -->
                                <span class="block truncate">{{ priceSelected.name }}</span>
                            </span>
                            <span class="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                            </span>
                        </ListboxButton>

                        <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100"
                            leave-to-class="opacity-0">
                            <ListboxOptions
                                class="absolute z-10 mt-1 max-h-56 w-max overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                <ListboxOption as="template" v-for="person in priceFilter" :key="person.id" :value="person"
                                    v-slot="{ active, selected }">
                                    <li
                                        :class="[active ? 'bg-indigo-600 text-white' : 'text-gray-900', 'relative cursor-default select-none py-2 pr-9']">
                                        <div class="flex items-center">
                                            <!-- <img :src="person.avatar" alt="" class="h-5 w-5 flex-shrink-0 rounded-full" /> -->
                                            <span
                                                :class="[selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate']">{{
                                                    person.name }}</span>
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

                <!-- time filter -->
                <Listbox as="div" v-model="timeSelected" class="w-max ml-[8px]">
                    <!-- <ListboxLabel class="block text-sm font-medium leading-6 text-gray-900">Assigned to</ListboxLabel> -->
                    <div class="relative">
                        <ListboxButton
                            class="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                            <span class="flex items-center">
                                <!-- <img :src="selected.avatar" alt="" class="h-5 w-5 flex-shrink-0 rounded-full" /> -->
                                <span class="block truncate">{{ timeSelected.name }}</span>
                            </span>
                            <span class="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                            </span>
                        </ListboxButton>

                        <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100"
                            leave-to-class="opacity-0">
                            <ListboxOptions
                                class="absolute z-10 mt-1 max-h-56 w-max overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                <ListboxOption as="template" v-for="person in timeFilter" :key="person.id" :value="person"
                                    v-slot="{ active, selected }">
                                    <li
                                        :class="[active ? 'bg-indigo-600 text-white' : 'text-gray-900', 'relative cursor-default select-none py-2 pr-9']">
                                        <div class="flex items-center">
                                            <!-- <img :src="person.avatar" alt="" class="h-5 w-5 flex-shrink-0 rounded-full" /> -->
                                            <span
                                                :class="[selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate']">{{
                                                    person.name }}</span>
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
            </div>

            <!-- Content - Dich vụ lọc được -->
            <div class="mx-auto max-w-5xl">
                <div
                    class="flex items-baseline lg:justify-between justify-end border-b border-gray-200 pb-6 pt-[24px] bg-[white] px-[8px] rounded-[4px]">
                    <h1 class="text-xl font-bold tracking-tight text-gray-900 hidden md:block">Vận chuyển hàng hoá</h1>

                    <div class="flex items-center">
                        <Menu as="div" class="relative inline-block text-left">
                            <div>
                                <MenuButton
                                    class="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                                    Sắp xếp
                                    <ChevronDownIcon
                                        class="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                        aria-hidden="true" />
                                </MenuButton>
                            </div>

                            <transition enter-active-class="transition ease-out duration-100"
                                enter-from-class="transform opacity-0 scale-95"
                                enter-to-class="transform opacity-100 scale-100"
                                leave-active-class="transition ease-in duration-75"
                                leave-from-class="transform opacity-100 scale-100"
                                leave-to-class="transform opacity-0 scale-95">
                                <MenuItems
                                    class="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div class="py-1">
                                        <MenuItem v-for="option in sortOptions" :key="option.name" v-slot="{ active }">
                                        <a :href="option.href"
                                            :class="[option.current ? 'font-medium text-gray-900' : 'text-gray-500', active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm']">{{
                                                option.name }}</a>
                                        </MenuItem>
                                    </div>
                                </MenuItems>
                            </transition>
                        </Menu>
                    </div>
                </div>

                <!-- Bảng dịch vụ -->
                <!-- content -->
                <div class="mt-[1rem] flow-root">
                    <div class="overflow-x-auto">
                        <div class="align-middle min-w-[100%] inline-block">
                            <table
                                class="bg-[white] min-w-[100%] indent-0 border rounded-[8px] border-separate border-spacing-0 table-fixed">
                                <thead>
                                    <tr class="">
                                        <th scope="col"
                                            class="text-[#70757a] font-[600] text-[12px] leading-[1.25rem] text-left px-[.75rem] py-[.875rem]">
                                            Nhà cung cấp dịch vụ</th>
                                        <th scope="col"
                                            class="text-[#70757a] font-[600] text-[12px] leading-[1.25rem] text-left px-[.75rem] py-[.875rem]">
                                            Tên dịch vụ</th>
                                        <th scope="col"
                                            class="text-[#70757a] font-[600] text-[12px] leading-[1.25rem] text-left px-[.75rem] py-[.875rem]">
                                            Thời gian vận chuyển</th>
                                        <th scope="col"
                                            class="text-[#111827] font-[600] text-[12px] leading-[1.25rem] text-left px-[.75rem] py-[.875rem]">
                                            Trọng lượng</th>
                                        <th scope="col"
                                            class="text-[#111827] font-[600] text-[12px] leading-[1.25rem] text-left px-[.75rem] py-[.875rem]">
                                            Giá dịch vụ</th>
                                        <th scope="col"
                                            class="text-[#70757a] font-[600] text-[12px] leading-[1.25rem] text-left pr-[1rem] py-[.875rem] relative">
                                            <span class="sr-only">Xoá</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody class="">
                                    <template v-for="service in services" :key="service.service_id">
                                        <tr v-if="service" class="mx-[4px] hover:shadow hover:bg-[#0096fa0d]">
                                            <td
                                                class="text-ellipsis border-[#dadce0] border-t px-[.75rem] text-[#111827] font-[500] text-[.875rem] leading-[1.25rem] pr-[.75rem] py-[1rem] whitespace-nowrap">
                                                <div class="flex items-center text-ellipsis">
                                                    <img :src="service.image" alt=""
                                                        class="h-5 w-5 flex-shrink-0 rounded-full bg-slate-400 mr-2" />
                                                    <span>{{ service.provider_name }}</span>
                                                </div>
                                            </td>
                                            <td
                                                class="text-ellipsis border-[#dadce0] border-t text-[#6b7280] font-[500] text-[.875rem] leading-[1.25rem] px-[.75rem] py-[1rem] whitespace-nowrap">
                                                {{ service.service_name }}</td>
                                            <td
                                                class="text-ellipsis border-[#dadce0] border-t text-[#6b7280] font-[500] text-[.875rem] leading-[1.25rem] px-[.75rem] py-[1rem] whitespace-nowrap">
                                                {{ service.delivery_date }}</td>
                                            <td
                                                class="text-ellipsis border-[#dadce0] border-t text-[#6b7280] font-[500] text-[.875rem] leading-[1.25rem] px-[.75rem] py-[1rem] whitespace-nowrap">
                                                {{ service.weight }} <span>kg</span></td>
                                            <td
                                                class="text-ellipsis border-[#dadce0] border-t text-[#6b7280] font-[500] text-[.875rem] leading-[1.25rem] px-[.75rem] py-[1rem] whitespace-nowrap">
                                                {{ (service.price).toLocaleString('vi-VN', {
                                                    style: 'currency',
                                                    currency: 'VND'
                                                }) }}</td>
                                            <td
                                                class="flex justify-between border-[#dadce0] border-t min-[640px]:pr-0 font-[500] text-[.875rem] leading-[1.25rem] text-right pr-[1rem] py-[1rem] whitespace-nowrap relative">
                                                <div class="float-left">
                                                    <RouterLink :to="{
                                                        name: 'Service Details',
                                                        params: { id: service.service_id },
                                                    }" class="text-[#0096fa] inherit py-[17px] hover:text-[#0060fa]">
                                                        <div
                                                            class="bg-[#e8f0fe] box-border rounded-[8px] inline-block text-[12px] leading-[20px] py-[6px] px-[10px] text-center w-[124px]">
                                                            Truy cập</div>
                                                        <span class="sr-only">Truy cập</span>
                                                    </RouterLink>
                                                </div>
                                                <div class="float-right">
                                                    <button @click="service.append = !service.append">
                                                        <svg focusable="false" width="24" height="24" viewBox="0 0 24 24"
                                                            class="fill-current text-[#0096fa]">
                                                            <path
                                                                d="M12 16.41l-6.71-6.7 1.42-1.42 5.29 5.3 5.29-5.3 1.42 1.42z">
                                                            </path>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>

                                        <tr v-if="service.append" class="mx-auto text-[12px]">

                                            <td>
                                                Từ Ha Noi
                                                Đến Can Tho
                                            </td>

                                            <td class="px-[16px]" v-if="service?.totalCount">
                                                <div>
                                                    <div :data-tooltip="service.totalCount"
                                                        class="tooltip text-[12px] text-[#757575] inline-flex items-center">
                                                        <span class="mr-[4px]">{{
                                                            (parseFloat(service.average_rate)).toLocaleString('vi-VN', {
                                                                minimumFractionDigits: 1, // Số chữ số thập phân tối thiểu
                                                                maximumFractionDigits: 1, // Số chữ số thập phân tối đa
                                                            }) }}</span>
                                                        <svg width="14" height="14" class="fill-current text-[#fbbc04]"
                                                            data-testid="star-svg" preserveAspectRatio="none"
                                                            viewBox="0 0 24 24">
                                                            <path
                                                                d="m12 20.6-5.86 3.23c-.7.38-1.57.1-1.94-.63-.15-.3-.2-.63-.14-.95l1.12-6.82L.43 10.6a1.55 1.55 0 0 1-.02-2.13c.22-.23.5-.39.82-.43l6.55-1 2.93-6.2a1.4 1.4 0 0 1 2.58 0l2.93 6.2 6.55 1a1.5 1.5 0 0 1 1.21 1.7c-.04.32-.19.63-.41.86l-4.75 4.83 1.12 6.82c.14.81-.39 1.59-1.17 1.73-.3.05-.63 0-.9-.15L12 20.6Z">
                                                            </path>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </td>

                                            <td class="">
                                                <!-- Them vao gio -->
                                                <button @click.prevent="true"
                                                    class="inline-flex items-center justify-center shrink-0 flex-row py-[12px] px-[16px] m-[4px] h-[40px] w-[40px] z-10 text-white rounded-[100px] hover:bg-[#ebeff5]">
                                                    <span class="w-[24px] h-[24px] inline-block shrink-0 relative">
                                                        <!-- <svg width="24" height="24" aria-hidden="true"
                                                            class="fill-current text-[#d83737]" preserveAspectRatio="none"
                                                            viewBox="0 0 24 24">
                                                            <path
                                                                d="M15.7 3c-1.4 0-2.6.4-3.7 1.2a6.1 6.1 0 0 0-8.2.8 7 7 0 0 0 0 9.2c.7 1 1.5 1.7 2.9 3l2.8 2.4.8.7c.5.5 1 .7 1.7.7.6 0 1.2-.2 1.7-.6 2-1.7 5.3-4.7 6.6-6.2a7 7 0 0 0-.1-9.2 6.2 6.2 0 0 0-4.5-2m0 1.8c1.1 0 2.3.5 3.2 1.4a5 5 0 0 1 0 6.8 88.2 88.2 0 0 1-6.9 6.2l-.6-.2-.8-.7L8 15.8c-1.4-1.2-2-2-2.8-2.8a5 5 0 0 1 0-6.8 4.5 4.5 0 0 1 6.5 0l.4.5.4-.5c1-.9 2-1.4 3.3-1.4">
                                                            </path>
                                                        </svg> -->

                                                        <svg width="24" height="24" aria-hidden="true"
                                                            class="fill-current text-[#ffd2d2] w-full h-full"
                                                            preserveAspectRatio="none" viewBox="0 0 24 24">
                                                            <path
                                                                d="M15.3 4.1c-1.2 0-2.3.4-3.3 1a5.6 5.6 0 00-7.4.7 6 6 0 000 8.2c.7.7 1.3 1.4 2.6 2.5l2.5 2.2.7.6a2.4 2.4 0 003.2 0c1.7-1.4 4.7-4 5.8-5.3a6 6 0 000-8.2 5.6 5.6 0 00-4.1-1.7">
                                                            </path>
                                                        </svg>
                                                    </span>
                                                </button>
                                            </td>

                                        </tr>
                                    </template>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from "vue";
import {
    Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions, Dialog, DialogPanel, Disclosure, DisclosureButton, DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    TransitionChild,
    TransitionRoot,
} from '@headlessui/vue';
import { CheckIcon, ChevronUpDownIcon, ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/vue/20/solid';
import { XMarkIcon } from '@heroicons/vue/24/outline'
import { useGtag } from "vue-gtag-next";
import freightProductCard from "../components/cards/freight-product-card.vue";
import domesticCard from "../components/cards/domestic-card.vue";
import banner from "../components/banner.vue";
import { useAuth0 } from "@auth0/auth0-vue";
import Header from '../components/Header.vue';

const { user } = useAuth0();

const code = user ? JSON.stringify(user.value, null, 2) : "";
console.log(user);

const { pageview } = useGtag()
const track = () => {
    pageview({ page_path: "/test" });

    console.log(localStorage.getItem('1323'))
};
track()

const priceFilter = [
    {
        id: 1,
        name: 'Theo giá',
        avatar:
            'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        id: 2,
        name: '100000 - 200000 VND',
    },
    {
        id: 3,
        name: '200000 - 300000 VND',
    }
]

const serivceTypeFilter = [
    {
        id: 1,
        name: 'Chuyển phát nhanh',
        avatar:
            'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        id: 2,
        name: 'Tiết kiệm',
    },
    {
        id: 3,
        name: 'Đặt biệt',
    }
]

const timeFilter = [
    {
        id: 1,
        name: 'Theo thời gian',
        avatar:
            'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        id: 2,
        name: '24h',
    },
    {
        id: 3,
        name: 'Hơn 24h',
    }
]

const priceSelected = ref(priceFilter[0])
const timeSelected = ref(timeFilter[0])


const sortOptions = [
    // { name: 'Phổ biến nhất', href: '#', current: true },
    { name: 'Đánh giá tốt nhất', href: '#', current: false },
    { name: 'Mới nhất', href: '#', current: false },
    { name: 'Giá: Thấp đến cao', href: '#', current: false },
    { name: 'Giá: Cao đến thấp', href: '#', current: false },
]


import { getServices, createService, updateService, deteleService, getServiceById } from "@/services/service.service";

const services = ref("");

const getServicesAxios = async () => {
    const { data, error } = await getServices();

    if (data) {
        services.value = data;
        for (let i = 0; services.value.length > i; i++) {
            services.value[0].append = false;
        }
    }

    if (error) {
        services.value = JSON.stringify(error, null, 2);
    }
    console.log(services.value);
};

getServicesAxios();

const testService = {
    "service_type_id": "1",
    "name": "Dich vu chuyen phat nhanh",
    "description": "Chat luong",
    "delivery_date": "1-2 ngay",
    "weight": 4,
    "price": 200000
}

// const createServiceAxios = async () => {
//     const { getAccessTokenSilently } = useAuth0();
//     const accessToken = await getAccessTokenSilently();
//     const { data, error } = await createService(accessToken, testService);

//     if (data) {
//         // message.value = JSON.stringify(data, null, 2);
//         services.value = data;
//     }

//     if (error) {
//         services.value = JSON.stringify(error, null, 2);
//     }
//     console.log(services.value);
// };
// createServiceAxios()
const service_id = 1
// const updateServiceAxios = async () => {
//     const { getAccessTokenSilently } = useAuth0();
//     const accessToken = await getAccessTokenSilently();
//     const { data, error } = await updateService(accessToken, testService, service_id);

//     if (data) {
//         // message.value = JSON.stringify(data, null, 2);
//         services.value = data;
//     }

//     if (error) {
//         services.value = JSON.stringify(error, null, 2);
//     }
//     console.log(services.value);
// };
// updateServiceAxios()


// const deleteServiceAxios = async () => {
//     const { getAccessTokenSilently } = useAuth0();
//     const accessToken = await getAccessTokenSilently();
//     const { data, error } = await deteleService(accessToken, service_id);

//     if (data) {
//         // message.value = JSON.stringify(data, null, 2);
//         services.value = data;
//     }

//     if (error) {
//         services.value = JSON.stringify(error, null, 2);
//     }
//     console.log(services.value);
// };
// deleteServiceAxios()

// const getServiceAxios = async () => {
//     const { getAccessTokenSilently } = useAuth0();
//     const accessToken = await getAccessTokenSilently();
//     const { data, error } = await getServiceById(accessToken, service_id);

//     if (data) {
//         // message.value = JSON.stringify(data, null, 2);
//         services.value = data;
//     }

//     if (error) {
//         services.value = JSON.stringify(error, null, 2);
//     }
//     console.log(services.value);
// };
// getServiceAxios()
</script>

<style scoped>
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
</style>