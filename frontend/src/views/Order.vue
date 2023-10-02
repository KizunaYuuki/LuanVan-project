<template>
    <Header></Header>

    <main>
        <section class="flex flex-col max-w-[calc(1280px-64px)] mx-auto my-[16px] min-h-[calc(100vh)] min-[1280px]:px-0">
            <div class="bg-gray-50 rounded-lg">
                <!-- Form Đăng ký dịch vụ -->
                <form class="max-w-5xl min-[1024px]:py-[64px] py-[16px] mx-auto">
                    <!-- Buoc 1 Dien Thong tin -->
                    <div v-if="fillInformStep" class="">
                        <!-- Nav Steps - Thông tin dịch vụ -->
                        <div class="bg-[#fff] rounded-[0.375rem] min-[1024px]:block hidden sticky top-0">
                            <div class="mx-auto">
                                <nav aria-label="Progress">
                                    <ol role="list"
                                        class="list-decimal ms-px me-px flex flex-wrap rounded-[4px] border-[1px]">
                                        <li class="relative flex flex-1">
                                            <div class="flex w-full items-center">
                                                <span
                                                    class="flex items-center py-[.5rem] px-[1.5rem] text-[#0096fa] font-[500]">
                                                    <span
                                                        class="flex items-center justify-center content-center border-[2px] border-[#0096fa] w-[2rem] h-[2rem] rounded-full">
                                                        <span class="">01</span>
                                                    </span>
                                                    <span class="ml-[16px]">Thông Tin Dịch Vụ</span>
                                                </span>
                                            </div>
                                            <div class="absolute right-0 top-0 h-full w-[1.25rem] min-[768px]:block"
                                                aria-hidden="true">
                                                <svg class="h-full w-full text-[#d1d5db]" viewBox="0 0 22 80" fill="none"
                                                    preserveAspectRatio="none">
                                                    <path d="M0 -2L20 40L0 82" vector-effect="non-scaling-stroke"
                                                        stroke="currentcolor" stroke-linejoin="round">
                                                    </path>
                                                </svg>
                                            </div>
                                        </li>
                                        <li class="relative flex flex-1">
                                            <div class=" flex items-center py-[.5rem] px-[1.5rem]">
                                                <span
                                                    class="flex items-center text-[#6b7280] font-[500] hover:text-[#111827]">
                                                    <span
                                                        class="flex items-center justify-center content-center border-[2px] border-[#d1d5db] hover:border-[#747981b7] w-[2rem] h-[2rem] rounded-full">
                                                        <span class="">02</span>
                                                    </span>
                                                    <span class="ml-[16px]">Thanh Toán</span>
                                                </span>
                                            </div>
                                            <div class="absolute right-0 top-0 h-full w-[1.25rem] min-[768px]:block"
                                                aria-hidden="true">
                                                <svg class="h-full w-full text-[#d1d5db]" viewBox="0 0 22 80" fill="none"
                                                    preserveAspectRatio="none">
                                                    <path d="M0 -2L20 40L0 82" vector-effect="non-scaling-stroke"
                                                        stroke="currentcolor" stroke-linejoin="round">
                                                    </path>
                                                </svg>
                                            </div>
                                        </li>
                                        <li class="relative flex flex-1">
                                            <div class=" flex items-center py-[.5rem] px-[1.5rem]">
                                                <span
                                                    class="flex items-center text-[#6b7280] font-[500] hover:text-[#111827]">
                                                    <span
                                                        class="flex items-center justify-center content-center border-[2px] border-[#d1d5db] hover:border-[#747981b7] w-[2rem] h-[2rem] rounded-full">
                                                        <span class="">03</span>
                                                    </span>
                                                    <span class="ml-[16px]">Hoàn Thành</span>
                                                </span>
                                            </div>
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>

                        <!-- Noi dung -->
                        <div class="flex items-stretch">
                            <div class="max-w-5xl mx-auto px-4 min-[1024px]:py-[64px] py-[16px]">
                                <div class="space-y-12 mx-auto w-[calc(1024px-396px)] max-w-2xl">
                                    <!-- Thông tin cá nhân -->
                                    <div class="border-b border-gray-900/10 pb-12">
                                        <h2 class="text-base font-semibold leading-7 text-gray-900">Thông tin liên hệ</h2>
                                        <p class="mt-1 text-sm leading-6 text-gray-600">Sử dụng những thông tin mà chúng tôi
                                            có thể liên hệ được với bạn khi cần thiết. <br /> Những thông tin có ký hiệu
                                            <strong class="text-[red]">*</strong> là thông tin bắt buộc phải nhập.
                                        </p>

                                        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                            <div class="sm:col-span-2">
                                                <label for="name"
                                                    class="block text-sm font-medium leading-6 text-gray-900">Tên<strong
                                                        class="text-[red] ml-[8px]">*</strong></label>
                                                <div class="mt-2">
                                                    <input
                                                        :class="{ 'border-red-600 border': (isValidationError && order.user_name === '') }"
                                                        v-model="order.user_name" type="text" name="name" id="name"
                                                        autocomplete="given-name"
                                                        class="pl-[14px] block w-full rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                                </div>
                                            </div>

                                            <div class="sm:col-span-2">
                                                <label for="email"
                                                    class="block text-sm font-medium leading-6 text-gray-900">
                                                    Email<strong class="text-[red] ml-[8px]">*</strong></label>
                                                <div class="mt-2">
                                                    <input
                                                        :class="{ 'border-red-600 border': (isValidationError && order.email === '') }"
                                                        v-model="order.email" id="email" name="email" type="email"
                                                        autocomplete="email"
                                                        class="pl-[14px] block w-full rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                                </div>
                                            </div>

                                            <div class="sm:col-span-2">
                                                <label for="tel"
                                                    class="block text-sm font-medium leading-6 text-gray-900">Số
                                                    điện
                                                    thoại<strong class="text-[red] ml-[8px]"></strong>
                                                </label>
                                                <div class="mt-2">
                                                    <input v-model="order.phone" id="tel" name="tel" type="tel"
                                                        autocomplete="tel"
                                                        class="pl-[14px] block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- Thông tin Gói hàng -->
                                    <div class="border-b border-gray-900/10 pb-12">
                                        <h2 class="text-base font-semibold leading-7 text-gray-900">Thông tin Gói hàng</h2>
                                        <p class="mt-1 text-sm leading-6 text-gray-600">Trọng lượng khối hàng liên quan trực
                                            tiếp đến giá dịch vụ. <br />
                                            <span class="text-[#0096fa]">Trọng lượng = Chiều Dài x Chiều Rộng x Chiều Cao :
                                                5 (Gram)</span> <br />
                                            Trọng lượng sẽ được tính tự động nếu bạn nhập đầy đủ giá trị Chiều Dài, Chiều
                                            Rộng
                                            và Chiều Cao
                                        </p>

                                        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                            <div class="sm:col-span-2 sm:col-start-1">
                                                <label for="height"
                                                    class="block text-sm font-medium leading-6 text-gray-900">Chiều dài
                                                    (<span class="text-[#0096fa]">cm</span>)</label>
                                                <div class="mt-2">
                                                    <input @change="weightCal()" v-model="packageData.height" type="number"
                                                        name="height" id="height" autocomplete="height"
                                                        class="pl-[14px] block w-full rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                                </div>
                                            </div>

                                            <div class="sm:col-span-2">
                                                <label for="width"
                                                    class="block text-sm font-medium leading-6 text-gray-900">Chiều rộng
                                                    (<span class="text-[#0096fa]">cm</span>)</label>
                                                <div class="mt-2">
                                                    <input @change="weightCal()" v-model="packageData.width" type="number"
                                                        name="width" id="width" autocomplete="width"
                                                        class="pl-[14px] block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                                </div>
                                            </div>

                                            <div class="sm:col-span-2">
                                                <label for="lenght"
                                                    class="block text-sm font-medium leading-6 text-gray-900">Chiều cao
                                                    (<span class="text-[#0096fa]">cm</span>)</label>
                                                <div class="mt-2">
                                                    <input @change="weightCal()" v-model="packageData.lenght" type="number"
                                                        name="lenght" id="lenght" autocomplete="lenght"
                                                        class="pl-[14px] block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                                </div>
                                            </div>

                                            <div class="sm:col-span-2">
                                                <label for="volume"
                                                    class="block text-sm font-medium leading-6 text-gray-900">Trọng lượng
                                                    (<span class="text-[#0096fa]">Gram</span>)
                                                    <strong class="text-[red] ml-[8px]">*</strong></label>
                                                <div class="mt-2 flex items-center">
                                                    <input @change="weightChange()"
                                                        :class="{ 'border-red-600 border': (isValidationError && packageData.weight === '') }"
                                                        v-model="packageData.weight" type="number" name="volume" id="volume"
                                                        autocomplete="volume"
                                                        class="pl-[14px] block w-full rounded-l-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                                    <span v-if="service"
                                                        class="px-4 bg-gray-300 whitespace-nowrap rounded-r-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 ">&le;
                                                        {{ service.weight }}</span>
                                                </div>
                                            </div>

                                            <div class="sm:col-span-2">
                                                <label for="price"
                                                    class="block text-sm font-medium leading-6 text-gray-900">Giá
                                                    trị Gói hàng
                                                    (<span class="text-[#0096fa]">VND</span>)</label>
                                                <div class="mt-2 flex items-center">
                                                    <input v-model="packageData.price" type="text" name="price" id="price"
                                                        autocomplete="price"
                                                        class="pl-[14px] block w-full rounded-l-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                                </div>
                                            </div>


                                            <div class="sm:col-span-full">
                                                <label for="description"
                                                    class="block text-sm font-medium leading-6 text-gray-900">Mô tả về gói
                                                    hàng</label>
                                                <div class="mt-2 flex items-center">
                                                    <input v-model="packageData.description" type="text" name="description"
                                                        id="description" autocomplete="description"
                                                        class="pl-[14px] block w-full rounded-l-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- Bạn vận chuyển lô hàng từ đâu? FROM -->
                                    <div class="border-b border-gray-900/10 pb-12">
                                        <h2 class="text-base font-semibold leading-7 text-gray-900">Bạn vận chuyển lô hàng
                                            từ đâu?</h2>
                                        <p class="mt-1 text-sm leading-6 text-gray-600">Thông tin về địa
                                            điểm cụ thể mà nhân viên vận chuyển đến để lấy lô hàng của bạn.</p>
                                        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                                            <div class="sm:col-span-2 sm:col-start-1">
                                                <label for="provinceFROM"
                                                    class="block text-sm font-medium leading-6 text-gray-900">Tỉnh
                                                    / Thành
                                                    phố<strong class="text-[red] ml-[8px]">*</strong></label>
                                                <div class="mt-2">
                                                    <input
                                                        :class="{ 'border-red-600 border': (isValidationError && addressFrom.province === '') }"
                                                        v-model="addressFrom.province" type="text" name="provinceFROM"
                                                        id="provinceFROM" autocomplete="address-level2"
                                                        class="pl-[14px] block w-full rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                                </div>
                                            </div>

                                            <div class="sm:col-span-2">
                                                <label for="districtFROM"
                                                    class="block text-sm font-medium leading-6 text-gray-900">Quận /
                                                    Huyện<strong class="text-[red] ml-[8px]">*</strong></label>
                                                <div class="mt-2">
                                                    <input
                                                        :class="{ 'border-red-600 border': (isValidationError && addressFrom.district === '') }"
                                                        v-model="addressFrom.district" type="text" name="districtFROM"
                                                        id="districtFROM" autocomplete="address-level1"
                                                        class="pl-[14px] block w-full rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                                </div>
                                            </div>

                                            <div class="sm:col-span-2">
                                                <label for="wardFROM"
                                                    class="block text-sm font-medium leading-6 text-gray-900">Xã /
                                                    Phường<strong class="text-[red] ml-[8px]">*</strong></label>
                                                <div class="mt-2">
                                                    <input
                                                        :class="{ 'border-red-600 border': (isValidationError && addressFrom.ward === '') }"
                                                        v-model="addressFrom.ward" type="text" name="wardFROM" id="wardFROM"
                                                        autocomplete="address-level3"
                                                        class="pl-[14px] block w-full rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- Lô hàng của bạn gửi đi đâu? TO -->
                                    <div class="border-b border-gray-900/10 pb-12">
                                        <h2 class="text-base font-semibold leading-7 text-gray-900">Lô hàng của bạn gửi đi
                                            đâu?</h2>
                                        <p class="mt-1 text-sm leading-6 text-gray-600">Thông tin về địa
                                            điểm cụ thể mà bạn muốn gửi hàng đến. Thông tin về
                                            địa chỉ rất quan trọng để đảm bảo rằng hàng hóa sẽ
                                            đến đúng địa điểm đích mà bạn muốn.</p>
                                        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                            <div class="sm:col-span-2 sm:col-start-1">
                                                <label for="provinceTO"
                                                    class="block text-sm font-medium leading-6 text-gray-900">Tỉnh
                                                    / Thành
                                                    phố<strong class="text-[red] ml-[8px]">*</strong></label>
                                                <div class="mt-2">
                                                    <input
                                                        :class="{ 'border-red-600 border': (isValidationError && addressTo.province === '') }"
                                                        v-model="addressTo.province" type="text" name="provinceTO"
                                                        id="provinceTO" autocomplete="address-level2"
                                                        class="pl-[14px] block w-full rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                                </div>
                                            </div>

                                            <div class="sm:col-span-2">
                                                <label for="districtTO"
                                                    class="block text-sm font-medium leading-6 text-gray-900">Quận /
                                                    Huyện<strong class="text-[red] ml-[8px]">*</strong></label>
                                                <div class="mt-2">
                                                    <input
                                                        :class="{ 'border-red-600 border': (isValidationError && addressTo.district === '') }"
                                                        v-model="addressTo.district" type="text" name="districtTO"
                                                        id="districtTO" autocomplete="address-level1"
                                                        class="pl-[14px] block w-full rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                                </div>
                                            </div>

                                            <div class="sm:col-span-2">
                                                <label for="wardTO"
                                                    class="block text-sm font-medium leading-6 text-gray-900">Xã
                                                    /
                                                    Phường<strong class="text-[red] ml-[8px]">*</strong></label>
                                                <div class="mt-2">
                                                    <input
                                                        :class="{ 'border-red-600 border': (isValidationError && addressTo.ward === '') }"
                                                        v-model="addressTo.ward" type="text" name="wardTO" id="wardTO"
                                                        autocomplete="address-level3"
                                                        class="pl-[14px] block w-full rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- Button -->
                                <div class="py-4">
                                    <div class="space-y-12 mx-auto max-w-2xl">
                                        <div class="flex items-center justify-end gap-x-6">
                                            <RouterLink to="/" class="text-sm font-semibold leading-6 text-gray-900">
                                                Về Trang chủ
                                            </RouterLink>
                                            <button @click="stepTwo()" type="button"
                                                class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Tiếp
                                                tục</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Sunmary -->
                            <div
                                class="hidden lg:block border-[#e5e7eb] border bg-white sticky top-[66px] h-max w-[360px] p-4 rounded-lg">
                                Tổng đơn hàng
                                <!-- content -->
                                <RouterLink v-if="service" :to="{
                                    name: 'Service Details',
                                    params: { id: service.service_id },
                                }" class="flex py-6 border-b">
                                    <div class="flex flex-1 flex-col">
                                        <div v-if="service">
                                            <div class="flex justify-between text-base font-medium text-gray-900">
                                                <h3>
                                                    <span>{{ service.service_name }}</span>
                                                </h3>
                                                <p class="ml-4">{{
                                                    (service.price).toLocaleString('vi-VN',
                                                        {
                                                            style: 'currency',
                                                            currency: 'VND'
                                                        }) }}</p>
                                            </div>
                                            <p class="mt-1 text-sm text-gray-500">{{ service.provider_name }}</p>
                                        </div>
                                    </div>
                                </RouterLink>
                                <div v-if="service" class="flex items-center justify-between pt-4">
                                    <span>Tổng giá dịch vụ</span>
                                    <span>{{
                                        (service.price).toLocaleString('vi-VN',
                                            {
                                                style: 'currency',
                                                currency: 'VND'
                                            }) }}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Buoc 2 Thanh toán -->
                    <div v-if="paymentStep" class="">
                        <!-- Nav Steps - Thanh toán -->
                        <div class="bg-[#fff] rounded-[0.375rem] min-[1024px]:block hidden sticky top-0">
                            <div class="mx-auto">
                                <nav aria-label="Progress">
                                    <ol role="list"
                                        class="list-decimal ms-px me-px flex flex-wrap rounded-[4px] border-[1px]">
                                        <li class="relative flex flex-1">
                                            <div class="flex w-full items-center">
                                                <span class="flex items-center py-[.5rem] px-[1.5rem] font-[500]">
                                                    <span
                                                        class="flex items-center justify-center content-center bg-[#0096fa] w-[2rem] h-[2rem] rounded-full">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                            viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                                                            class="text-[#fff]">
                                                            <path fill-rule="evenodd"
                                                                d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                                                                clip-rule="evenodd">
                                                            </path>
                                                        </svg>
                                                    </span>
                                                    <span class="ml-[16px]">Thông Tin Dịch Vụ</span>
                                                </span>
                                            </div>
                                            <div class="absolute right-0 top-0 h-full w-[1.25rem] min-[768px]:block"
                                                aria-hidden="true">
                                                <svg class="h-full w-full text-[#d1d5db]" viewBox="0 0 22 80" fill="none"
                                                    preserveAspectRatio="none">
                                                    <path d="M0 -2L20 40L0 82" vector-effect="non-scaling-stroke"
                                                        stroke="currentcolor" stroke-linejoin="round">
                                                    </path>
                                                </svg>
                                            </div>
                                        </li>
                                        <li class="relative flex flex-1">
                                            <div class="flex items-center py-[.5rem] px-[1.5rem]" aria-current="step">
                                                <span class="flex items-center text-[#0096fa] font-[500]">
                                                    <span
                                                        class="flex items-center justify-center content-center border-[2px] border-[#0096fa] w-[2rem] h-[2rem] rounded-full">
                                                        <span class="">02</span>
                                                    </span>
                                                    <span class="ml-[16px]">Thanh Toán</span>
                                                </span>
                                            </div>
                                            <div class="absolute right-0 top-0 h-full w-[1.25rem] min-[768px]:block"
                                                aria-hidden="true">
                                                <svg class="h-full w-full text-[#d1d5db]" viewBox="0 0 22 80" fill="none"
                                                    preserveAspectRatio="none">
                                                    <path d="M0 -2L20 40L0 82" vector-effect="non-scaling-stroke"
                                                        stroke="currentcolor" stroke-linejoin="round">
                                                    </path>
                                                </svg>
                                            </div>
                                        </li>
                                        <li class="relative flex flex-1">
                                            <div class=" flex items-center py-[.5rem] px-[1.5rem]">
                                                <span
                                                    class="flex items-center text-[#6b7280] font-[500] hover:text-[#111827]">
                                                    <span
                                                        class="flex items-center justify-center content-center border-[2px] border-[#d1d5db] hover:border-[#747981b7] w-[2rem] h-[2rem] rounded-full">
                                                        <span class="">03</span>
                                                    </span>
                                                    <span class="ml-[16px]">Hoàn Thành</span>
                                                </span>
                                            </div>
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>

                        <!-- Noi dung -->
                        <div class="flex items-stretch">
                            <div class="max-w-5xl mx-auto px-4 min-[1024px]:py-[64px] py-[16px]">
                                <div class="space-y-12 mx-auto max-w-2xl">

                                    <!-- Thanh toán -->
                                    <div class="border-b border-gray-900/10 pb-12 w-[calc(1024px-396px)] mx-auto">
                                        <h2 class="text-base font-semibold leading-7 text-gray-900">Thanh toán</h2>
                                        <p class="mt-1 text-sm leading-6 text-gray-600">Có hai phương thức là tiền mặt hoặc
                                            thông qua PayPal</p>
                                        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                                            <!-- Chon phuong thuc thanh toan -->
                                            <div class="col-span-full">
                                                <div
                                                    class="flex min-[768px]:flex-row flex-col min-[768px]:justify-center items-center">
                                                    <label for="cash"
                                                        class="text-[14px] flex w-[268px] cursor-pointer p-[16px] border-[1px] hover:ring-4 hover:border-[#0096fa] border-[#d1d5db] rounded-[4px]">
                                                        <div>
                                                            <span class="text-[#111827]">Tiền mặt</span>
                                                            <br />
                                                            <span class="text-[#6b7280]">
                                                                Thanh toán khi nhân viên đến lấy Lô hàng.
                                                            </span>
                                                        </div>
                                                        <div class="">
                                                            <input v-model="order.payment_id" :value=1
                                                                class="w-[18px] h-[18px]" type="radio" name="pay" id="cash">
                                                        </div>
                                                    </label>

                                                    <label for="paypal"
                                                        class="text-[14px] min-[768px]:ml-[16px] min-[768px]:mt-0 mt-[16px] flex w-[268px] cursor-pointer p-[16px] border-[1px] hover:ring-4 hover:border-[#0096fa] border-[#d1d5db] rounded-[4px]">
                                                        <div>
                                                            <span class="text-[#111827]">Paypal</span>
                                                            <br />
                                                            <span class="text-[#6b7280]">
                                                                Thanh toán trực tuyến bằng Paypal
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <input v-model="order.payment_id" :value=2
                                                                class="w-[18px] h-[18px]" type="radio" name="pay"
                                                                id="paypal">
                                                        </div>
                                                    </label>
                                                </div>
                                            </div>

                                            <div class="col-span-full">
                                                <div v-if="order.payment_id === 1" class="flex justify-center">
                                                    <h1>Bạn đã chọn thành toán bằng <span class="text-[#0096fa]">Tiền
                                                            mặt</span>, Click Đăng ký để hoàn thành đăng ký dịch vụ.</h1>
                                                </div>
                                                <div v-if="order.payment_id === 2" class="flex justify-center">
                                                    <h1>Một bước nữa thôi, thanh toán bằng <span
                                                            class="text-[#0096fa]">Paypal</span> để
                                                        hoàn thành đăng ký dịch
                                                        vụ.</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Button -->
                                <div @click="createOrderAxios(order)" v-if="order.payment_id !== '2'" class="py-4">
                                    <div class="space-y-12 mx-auto max-w-2xl">
                                        <div class="mt-6 flex items-center justify-end gap-x-6">
                                            <button @click="fillInformStep = !fillInformStep, paymentStep = !paymentStep"
                                                type="button" class="text-sm font-semibold leading-6 text-gray-900">Trở
                                                lại</button>
                                            <button @click="completeStep = !completeStep, paymentStep = !paymentStep"
                                                type="button"
                                                class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Đăng
                                                ký</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Sunmary -->
                            <div
                                class="hidden lg:block border-[#e5e7eb] border bg-white sticky top-[66px] h-max w-[360px] p-4 rounded-lg">
                                Tổng đơn hàng
                                <!-- content -->
                                <RouterLink v-if="service" :to="{
                                    name: 'Service Details',
                                    params: { id: service.service_id },
                                }" class="flex py-6 border-b">
                                    <div class="flex flex-1 flex-col">
                                        <div v-if="service">
                                            <div class="flex justify-between text-base font-medium text-gray-900">
                                                <h3>
                                                    <span>{{ service.service_name }}</span>
                                                </h3>
                                                <p class="ml-4">{{
                                                    (service.price).toLocaleString('vi-VN',
                                                        {
                                                            style: 'currency',
                                                            currency: 'VND'
                                                        }) }}</p>
                                            </div>
                                            <p class="mt-1 text-sm text-gray-500">{{ service.provider_name }}</p>
                                        </div>
                                    </div>
                                </RouterLink>
                                <div v-if="service" class="flex items-center justify-between pt-4">
                                    <span>Tổng giá dịch vụ</span>
                                    <span>{{
                                        (service.price).toLocaleString('vi-VN',
                                            {
                                                style: 'currency',
                                                currency: 'VND'
                                            }) }}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Buoc 3 Hoàn thành - Xem lại thông tin dịch vụ vừa mới đăng ký -->
                    <div v-if="completeStep" class="">
                        <!-- Nav Steps - Hoàn thành -->
                        <div class="bg-[#fff] rounded-[0.375rem] min-[1024px]:block hidden sticky top-0">
                            <div class="mx-auto">
                                <nav aria-label="Progress">
                                    <ol role="list"
                                        class="list-decimal ms-px me-px flex flex-wrap rounded-[4px] border-[1px]">
                                        <li class="relative flex flex-1">
                                            <div class="flex w-full items-center">
                                                <span class="flex items-center py-[.5rem] px-[1.5rem] font-[500]">
                                                    <span
                                                        class="flex items-center justify-center content-center bg-[#0096fa] w-[2rem] h-[2rem] rounded-full">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                            viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                                                            class="text-[#fff]">
                                                            <path fill-rule="evenodd"
                                                                d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                                                                clip-rule="evenodd">
                                                            </path>
                                                        </svg>
                                                    </span>
                                                    <span class="ml-[16px]">Thông Tin Dịch Vụ</span>
                                                </span>
                                            </div>
                                            <div class="absolute right-0 top-0 h-full w-[1.25rem] min-[768px]:block"
                                                aria-hidden="true">
                                                <svg class="h-full w-full text-[#d1d5db]" viewBox="0 0 22 80" fill="none"
                                                    preserveAspectRatio="none">
                                                    <path d="M0 -2L20 40L0 82" vector-effect="non-scaling-stroke"
                                                        stroke="currentcolor" stroke-linejoin="round">
                                                    </path>
                                                </svg>
                                            </div>
                                        </li>
                                        <li class="relative flex flex-1">
                                            <div class="flex w-full items-center">
                                                <span class="flex items-center py-[.5rem] px-[1.5rem] font-[500]">
                                                    <span
                                                        class="flex items-center justify-center content-center bg-[#0096fa] w-[2rem] h-[2rem] rounded-full">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                            viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                                                            class="text-[#fff]">
                                                            <path fill-rule="evenodd"
                                                                d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                                                                clip-rule="evenodd">
                                                            </path>
                                                        </svg>
                                                    </span>
                                                    <span class="ml-[16px]">Thanh Toán</span>
                                                </span>
                                            </div>
                                            <div class="absolute right-0 top-0 h-full w-[1.25rem] min-[768px]:block"
                                                aria-hidden="true">
                                                <svg class="h-full w-full text-[#d1d5db]" viewBox="0 0 22 80" fill="none"
                                                    preserveAspectRatio="none">
                                                    <path d="M0 -2L20 40L0 82" vector-effect="non-scaling-stroke"
                                                        stroke="currentcolor" stroke-linejoin="round">
                                                    </path>
                                                </svg>
                                            </div>
                                        </li>
                                        <li class="relative flex flex-1">
                                            <div class="flex items-center py-[.5rem] px-[1.5rem]">
                                                <span class="flex items-center text-[#0096fa] font-[500]">
                                                    <span
                                                        class="flex items-center justify-center content-center border-[2px] border-[#0096fa] w-[2rem] h-[2rem] rounded-full">
                                                        <span class="">03</span>
                                                    </span>
                                                    <span class="ml-[16px]">Hoàn Thành</span>
                                                </span>
                                            </div>
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>

                        <!-- Noi dung -->
                        <div class="max-w-7xl mx-auto px-4 sm:px-6 min-[1024px]:pt-[64px] py-[16px] lg:px-8">
                            <div class="space-y-12 mx-auto max-w-2xl">

                                <!-- Tieu de -->
                                <div class="border-b border-gray-900/10 pb-12 bg-white p-4 rounded-lg">
                                    <h2 class="font-semibold leading-7 text-gray-900 text-[1.25rem]">Hoàn Thành</h2>
                                    <p class="mt-1 leading-6 text-gray-600">Đăng ký dịch vụ Thành công, bạn có thể
                                        xem lại thông tin dịch vụ đã đăng ký trước khi rời trang này</p>
                                    <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                                        <!-- Thông tin cá nhân -->
                                        <div class="col-span-full text-[16px]">

                                            <div class="py-[4px] leading-loose">
                                                    <h1 class="font-[600]">Thông tin dịch vụ</h1>
                                                    <h1 v-if="service">Tên: <span
                                                            class="font-500">{{ service.service_name }}</span>
                                                    </h1>
                                                </div>

                                            <div class="py-[4px] leading-loose">
                                                <h1 class="font-[600]">Thông tin cá nhân</h1>
                                                <h1 v-if="orderResutl.user_name">Tên: <span
                                                        class="font-500">{{ orderResutl.user_name }}</span>
                                                </h1>
                                                <h1>Địa chỉ Email: <span class="font-500">{{
                                                    orderResutl.email }}</span></h1>
                                                <h1>Số điện thoại: <span class="font-500">{{
                                                    orderResutl.phone }}</span>
                                                </h1>
                                            </div>

                                            <div class="py-[4px] leading-loose">
                                                    <h1 class="font-[600]">Thông tin Gói hàng</h1>
                                                    <h1 v-if="packageResutl">Trọng lượng gói hàng: <span
                                                            class="font-500">{{ packageResutl.weight }} (Gram)</span>
                                                    </h1>
                                                </div>

                                            <div class="py-[4px] leading-loose">
                                                <h1 class="font-[600]">Địa chỉ</h1>
                                                <h1>Lô hàng được gửi từ:
                                                    <span class="font-500">{{ addressFromResutl.ward }}, {{
                                                        addressFromResutl.district }}, {{ addressFromResutl.province }}.</span>
                                                </h1>
                                                <h1>Lô hàng được gửi đến:
                                                    <span class="font-500">{{ addressToResutl.ward }}, {{
                                                        addressToResutl.district }}, {{ addressToResutl.province }}.</span>
                                                </h1>
                                            </div>

                                            <div class="py-[4px] leading-loose">
                                                <h1 class="font-[600]">Phương thức thanh toán:
                                                    <span v-if="orderResutl.payment_id === 1" class="font-500">Tiền mặt</span>
                                                    <span v-if="orderResutl.payment_id === 2" class="font-500">Paypal</span>
                                                </h1>
                                            </div>

                                            <!-- <div class="py-[4px] leading-loose">
                                                <h1 class="font-[600]">Hình thức vận chuyển:
                                                    <span class="font-500">Vận chuyển nhanh</span>
                                                </h1>
                                            </div> -->

                                            <div class="flex">
                                                <h1>Dịch vụ (Đơn hàng) này sẽ được xét duyệt trong vòng <span
                                                        class="text-[#0096fa]">24h</span></h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Button -->
                        <div class="px-4">
                            <div class="space-y-12 mx-auto max-w-2xl">
                                <div class="mt-6 flex items-center justify-end gap-x-6">
                                    <RouterLink to="/"
                                        class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                        <span class="sr-only">Moving Service</span>
                                        <!-- <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt=""> -->
                                        Về Trang chủ
                                    </RouterLink>
                                </div>
                            </div>
                        </div>

                    </div>
                </form>

            </div>

        </section>
    </main>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useAuth0 } from "@auth0/auth0-vue";
import Header from '../components/Header.vue';
import { RouterLink, RouterView } from 'vue-router'

import { getUserByEmail, createUser } from "@/services/user.service";
import { createOrder } from "@/services/order.service";
import { createAddress } from "@/services/address.service";
import { createPackage } from "@/services/package.service";
import { getServiceById } from "@/services/service.service";

const props = defineProps({
    service_id: {} // Service Id
})

// get the information user
const { user } = useAuth0();

// get the token
const { getAccessTokenSilently } = useAuth0();

const fillInformStep = ref(true);
const paymentStep = ref(false);
const completeStep = ref(false);
const user_id = ref();
const service = ref();
const orderResutl = ref();
const addressFromResutl = ref();
const addressToResutl = ref();
const packageResutl = ref();
const isValidationError = ref(false);

const order = ref(
    {
        user_id: '',
        status_id: 1,
        service_id: '',
        payment_id: '',
        total_amount: '',
        email: '',
        phone: '',
        user_name: ''
    },
);
const packageData = ref(
    {
        order_id: '',
        lenght: undefined,
        width: undefined,
        height: undefined,
        weight: '',
        price: undefined,
        description: undefined,
    }
);

const addressFrom = ref(
    {
        order_id: '',
        province: '',
        district: '',
        ward: '',
        type: "FROM"
    }
);

const addressTo = ref(
    {
        order_id: '',
        province: '',
        district: '',
        ward: '',
        type: "TO"
    }
);

const weightChange = async () => {
    if (packageData.value.weight) {

        packageData.value.width = undefined;
        packageData.value.height = undefined;
        packageData.value.lenght = undefined;
    }
};

const weightCal = async () => {
    if (packageData.value.lenght && packageData.value.width && packageData.value.height) {
        packageData.value.weight = (packageData.value.width * packageData.value.height * packageData.value.lenght) / 5;
    }
};

const getServiceByIdAxios = async (id) => {
    const { data, error } = await getServiceById(id);

    if (data) {
        service.value = data;
        console.log(service.value);
    }

    if (error) {
        // result.value = JSON.stringify(error, null, 2);
    }
};

const getUserByEmailAxios = async (user) => {
    // edit data
    const userData = {
        email: user.value?.email,
        name: user.value?.name
    }

    const accessToken = await getAccessTokenSilently();
    const { data, error } = await getUserByEmail(accessToken, userData);

    if (data) {
        user_id.value = data.id;
        console.log(data);
        console.log(user_id.value);
    } else {
        const { data, error } = await createUser(accessToken, userData);
        if (data) {
            user_id.value = data.id;
            console.log(data);
            console.log(user_id.value);
        }
    }

    if (error) {
        console.log(error.message);
    }
};

const createOrderAxios = async (orderData) => {
    // edit data order
    order.value.user_id = user_id.value;
    order.value.service_id = parseInt(props.service_id);
    order.value.total_amount = service.value.price;

    const accessToken = await getAccessTokenSilently();
    const { data, error } = await createOrder(accessToken, orderData);

    if (data) {
        console.log(data);
        orderResutl.value = data;

        // edit data address
        addressFrom.value.order_id = data.id;
        addressTo.value.order_id = data.id;

        // edit data package
        packageData.value.order_id = data.id;

        // Tao Package
        createPackageAxios();

        // Tao address
        createAddressFromAxios();
        createAddressToAxios();
    }
    if (error) {
        console.log(error);
    }
};

const createAddressFromAxios = async () => {
    const accessToken = await getAccessTokenSilently();
    const { data, error } = await createAddress(accessToken, addressFrom.value);

    if (data) {
        addressFromResutl.value = data;
        console.log(data);
    }

    if (error) {
        console.log(error);
    }
};

const createAddressToAxios = async () => {
    const accessToken = await getAccessTokenSilently();
    const { data, error } = await createAddress(accessToken, addressTo.value);

    if (data) {
        addressToResutl.value = data;
        console.log(data);
    }

    if (error) {
        console.log(error);
    }
};

const createPackageAxios = async () => {
    const accessToken = await getAccessTokenSilently();
    const { data, error } = await createPackage(accessToken, packageData.value);

    if (data) {
        packageResutl.value = data;
        console.log(data);
    }

    if (error) {
        console.log(error);
    }
};

const stepTwo = async () => {
    // validate data
    if (order.value.email === '' || order.value.user_name === '' || packageData.value.weight === '' ||
        addressFrom.value.province === '' || addressFrom.value.district === '' || addressFrom.value.ward === '' ||
        addressTo.value.province === '' || addressTo.value.district === '' || addressTo.value.ward === '') {
        isValidationError.value = true;
        alert('Hãy nhập đầy đủ thông tin cần thiết để đến bước tiếp theo');
    } else {
        paymentStep.value = !paymentStep.value;
        fillInformStep.value = !fillInformStep.value;
    }
};

const stepThree = async () => {
    // validate data
    if (order.value.payment_id === '') {
        isValidationError.value = true;
        alert('Hãy chọn một phương thức thanh toán');
    } else {
        paymentStep.value = !paymentStep.value;
        fillInformStep.value = !fillInformStep.value;
    }
};

// run function
getUserByEmailAxios(user);
getServiceByIdAxios(props.service_id);
</script>

<style scoped>ol {
    margin-block-start: 1em;
    margin-block-end: 1em;
}

/* Chrome, Safari, Edge, Opera - Khoá spin trên input, type number */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}</style>