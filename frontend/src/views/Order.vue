<template>
    <Header></Header>
    <!-- <div id="paypal" ref="paypal"></div> -->
    <main>
        <section class="flex flex-col max-w-[calc(1040px)] mx-auto my-[16px] min-h-[calc(100vh)] min-[1280px]:px-0">
            <div class="bg-gray-50 rounded-lg">
                <!-- Form Đăng ký dịch vụ -->
                <form class="max-w-5xl min-[1024px]:py-[64px] py-[16px] mx-auto">
                    <!-- Buoc 1 Dien Thong tin -->
                    <div v-show="fillInformStep" class="">
                        <!-- Nav Steps - Thông tin dịch vụ -->
                        <div class="bg-[#fff] rounded-[0.375rem] min-[1024px]:block hidden sticky top-0 z-[101]">
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
                                        <Address :addressData="locationFrom"
                                            @sendAddress="(data) => { addressFrom.province = data.province.Name, addressFrom.district = data.district.Name, addressFrom.ward = data.ward.Name }">
                                        </Address>
                                    </div>

                                    <!-- Lô hàng của bạn gửi đi đâu? TO -->
                                    <div class="border-b border-gray-900/10 pb-12">
                                        <h2 class="text-base font-semibold leading-7 text-gray-900">Lô hàng của bạn gửi đi
                                            đâu?</h2>
                                        <p class="mt-1 text-sm leading-6 text-gray-600">Thông tin về địa
                                            điểm cụ thể mà bạn muốn gửi hàng đến. Thông tin về
                                            địa chỉ rất quan trọng để đảm bảo rằng hàng hóa sẽ
                                            đến đúng địa điểm đích mà bạn muốn.</p>
                                        <Address :addressData="locationTo"
                                            @sendAddress="(data) => { addressTo.province = data.province.Name, addressTo.district = data.district.Name, addressTo.ward = data.ward.Name }">
                                        </Address>
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
                                                <span class="ml-4" v-if="service.promotion_price || service.promotion_price === 0">
                                                    {{ (service.promotion_price).toLocaleString('vi-VN', {
                                                        style: 'currency',
                                                        currency: 'VND'
                                                    }) }}
                                                </span>
                                                <span class="ml-4" v-else>
                                                    {{ (service.price).toLocaleString('vi-VN', {
                                                        style: 'currency',
                                                        currency: 'VND'
                                                    }) }}
                                                </span>
                                            </div>
                                            <p class="mt-1 text-sm text-gray-500">{{ service.provider_name }}</p>
                                        </div>
                                    </div>
                                </RouterLink>
                                <div v-if="service" class="flex items-center justify-between pt-4">
                                    <span>Tổng giá dịch vụ</span>
                                    <span class="" v-if="service.promotion_price || service.promotion_price === 0">
                                        {{ (service.promotion_price).toLocaleString('vi-VN', {
                                            style: 'currency',
                                            currency: 'VND'
                                        }) }}
                                    </span>
                                    <span class="" v-else>
                                        {{ (service.price).toLocaleString('vi-VN', {
                                            style: 'currency',
                                            currency: 'VND'
                                        }) }}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Buoc 2 Thanh toán -->
                    <div v-show="paymentStep" class="">
                        <!-- Nav Steps - Thanh toán -->
                        <div class="bg-[#fff] rounded-[0.375rem] min-[1024px]:block hidden sticky top-0 z-[101]">
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
                                        <h2 class="text-base font-semibold leading-7 text-gray-900">Chọn Phương thức Thanh
                                            toán</h2>
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

                                                    <label v-if="!(service?.promotion_price === 0)" for="payment"
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
                                                                id="payment">
                                                        </div>
                                                    </label>
                                                </div>
                                            </div>

                                            <div class="col-span-full">
                                                <div v-show="order.payment_id === 1" class="flex justify-center">
                                                    <h1>Bạn đã chọn thành toán bằng <span class="text-[#0096fa]">Tiền
                                                            mặt</span>, Click Đăng ký để hoàn thành đăng ký dịch vụ.</h1>
                                                </div>
                                                <div v-show="order.payment_id === 2" class="flex justify-center z-1">
                                                    <h1>Một bước nữa thôi, thanh toán bằng <span
                                                            class="text-[#0096fa]">Paypal</span> để
                                                        hoàn thành đăng ký dịch
                                                        vụ.</h1>
                                                </div>
                                                <div v-show="order.payment_id === 2"
                                                    class="p-8 flex items-center justify-center">
                                                    <div v-show="USDToVND && service">
                                                        <div v-show="USDToVND" style="width: 500px" ref="paypal"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Button -->
                                <div v-if="order.payment_id === 1" class="py-4">
                                    <div class="space-y-12 mx-auto max-w-2xl">
                                        <div class="mt-6 flex items-center justify-end gap-x-6">
                                            <button @click="fillInformStep = !fillInformStep, paymentStep = !paymentStep"
                                                type="button" class="text-sm font-semibold leading-6 text-gray-900">Trở
                                                lại</button>
                                            <button @click="createOrderAxios(order)" type="button"
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
                                                <span class="ml-4" v-if="service.promotion_price || service.promotion_price === 0">
                                                    {{ (service.promotion_price).toLocaleString('vi-VN', {
                                                        style: 'currency',
                                                        currency: 'VND'
                                                    }) }}
                                                </span>
                                                <span class="ml-4" v-else>
                                                    {{ (service.price).toLocaleString('vi-VN', {
                                                        style: 'currency',
                                                        currency: 'VND'
                                                    }) }}
                                                </span>
                                            </div>
                                            <p class="mt-1 text-sm text-gray-500">{{ service.provider_name }}</p>
                                        </div>
                                    </div>
                                </RouterLink>
                                <div v-if="service" class="flex items-center justify-between pt-4">
                                    <span>Tổng giá dịch vụ</span>
                                    <span v-if="service.promotion_price || service.promotion_price === 0">
                                        {{ (service.promotion_price).toLocaleString('vi-VN', {
                                            style: 'currency',
                                            currency: 'VND'
                                        }) }}
                                        <span v-if="changedPrice" class="font-[500]">
                                            ~ {{
                                                (parseFloat(changedPrice)).toLocaleString('en-US',
                                                    {
                                                        style: 'currency',
                                                        currency: 'USD'
                                                    }) }}
                                        </span>
                                    </span>
                                    <span v-else>
                                        {{ (service.price).toLocaleString('vi-VN', {
                                            style: 'currency',
                                            currency: 'VND'
                                        }) }}
                                        <span v-if="changedPrice" class="font-[500]">
                                            ~ {{
                                                (parseFloat(changedPrice)).toLocaleString('en-US',
                                                    {
                                                        style: 'currency',
                                                        currency: 'USD'
                                                    }) }}
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Buoc 3 Hoàn thành - Xem lại thông tin dịch vụ vừa mới đăng ký -->
                    <div v-if="completeStep" class="">
                        <!-- Nav Steps - Hoàn thành -->
                        <div class="bg-[#fff] rounded-[0.375rem] min-[1024px]:block hidden sticky top-0 z-[101]">
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
                            <div class="space-y-12 mx-auto max-w-4xl">
                                <div class="border-b border-gray-900/10 pb-12 bg-white p-[32px] rounded-lg">
                                    <div class="p-4">
                                        <!-- Tieu de -->
                                        <div class="p-4 sm:px-0">
                                            <h2 class="font-semibold leading-7 text-gray-900 text-[1.25rem]">Hoàn Thành
                                                - Đăng ký thành công
                                            </h2>
                                            <p class="mt-1 leading-6 text-gray-600">Đăng ký dịch vụ Thành công, bạn có
                                                thể
                                                xem lại thông tin dịch vụ đã đăng ký trước khi rời trang này</p>
                                        </div>
                                        <!-- Content -->
                                        <div v-if="orderResutl?.user_name" class="mt-6 border-t border-gray-100">
                                            <dl class="divide-y divide-gray-100">
                                                <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                                    <dt class="text-sm font-medium leading-6 text-gray-900">Tên dịch vụ</dt>
                                                    <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                                        {{ service.service_name }}
                                                    </dd>
                                                </div>
                                                <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                                    <dt class="text-sm font-medium leading-6 text-gray-900">Tên Khách hàng
                                                        đăng ký dịch vụ: </dt>
                                                    <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                                        {{ orderResutl.user_name }}
                                                    </dd>
                                                </div>
                                                <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                                    <dt class="text-sm font-medium leading-6 text-gray-900">Địa chỉ
                                                        Email: </dt>
                                                    <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                                        {{ orderResutl.email }}
                                                    </dd>
                                                </div>
                                                <div v-if="orderResutl?.phone"
                                                    class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                                    <dt class="text-sm font-medium leading-6 text-gray-900">Số điện
                                                        thoại: </dt>
                                                    <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                                        {{ orderResutl.phone }}</dd>
                                                </div>
                                                <div v-if="packageResutl?.weight"
                                                    class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                                    <dt class="text-sm font-medium leading-6 text-gray-900">Trọng lượng
                                                        gói hàng: </dt>
                                                    <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                                        {{ packageResutl.weight }}</dd>
                                                </div>
                                                <div v-show="packageResutl?.price"
                                                    class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                                    <dt class="text-sm font-medium leading-6 text-gray-900">Giá trị
                                                        gói hàng: </dt>
                                                    <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                                        {{ packageResutl?.price }}</dd>
                                                </div>
                                                <div v-if="addressFromResutl?.ward"
                                                    class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                                    <dt class="text-sm font-medium leading-6 text-gray-900">Lô hàng được
                                                        gửi từ: </dt>
                                                    <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                                        {{ addressFromResutl.ward }},
                                                        {{ addressFromResutl.district }},
                                                        {{ addressFromResutl.province }}.
                                                    </dd>
                                                </div>
                                                <div v-if="addressToResutl?.ward"
                                                    class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                                    <dt class="text-sm font-medium leading-6 text-gray-900">Lô hàng được
                                                        gửi đến:</dt>
                                                    <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                                        {{ addressToResutl.ward }},
                                                        {{ addressToResutl.district }},
                                                        {{ addressToResutl.province }}.
                                                    </dd>
                                                </div>
                                                <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                                    <dt class="text-sm font-medium leading-6 text-gray-900">Phương thức
                                                        thanh toán:</dt>
                                                    <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                                        <span v-if="orderResutl.payment_id === 1" class="font-500">Tiền
                                                            mặt</span>
                                                        <span v-if="orderResutl.payment_id === 2"
                                                            class="font-500">Paypal</span>
                                                    </dd>
                                                </div>
                                                <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                                    <dt class="text-sm font-medium leading-6 text-gray-900">Loại dịch vụ:
                                                    </dt>
                                                    <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                                        {{ service.service_types_name }}</dd>
                                                </div>
                                                <div v-if="orderResutl?.total_amount || orderResutl.total_amount === 0"
                                                    class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                                    <dt class="text-sm font-medium leading-6 text-gray-900">Phí dịch vụ:
                                                    </dt>
                                                    <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                                        {{
                                                            (orderResutl?.total_amount || 0).toLocaleString('vi-VN',
                                                                {
                                                                    style: 'currency',
                                                                    currency: 'VND'
                                                                })
                                                        }}
                                                    </dd>
                                                </div>
                                                <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                                    <dt class="text-sm font-medium leading-6 text-gray-900"></dt>
                                                    <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                                        <div class="flex">
                                                            <h1>Dịch vụ (Đơn hàng) này sẽ được xét duyệt trong vòng
                                                                <span class="text-[#0096fa]">24h</span>
                                                            </h1>
                                                        </div>
                                                    </dd>
                                                </div>
                                            </dl>
                                        </div>
                                    </div>

                                    <div v-if="false" class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                        <!-- Thông tin cá nhân -->
                                        <div class="col-span-full text-[16px]">

                                            <div class="py-[4px] leading-loose">
                                                <h1 class="font-[600]">Thông tin dịch vụ</h1>
                                                <h1 v-if="service">Tên: <span class="font-500">{{ service.service_name
                                                }}</span>
                                                </h1>
                                            </div>

                                            <div class="py-[4px] leading-loose">
                                                <h1 class="font-[600]">Thông tin cá nhân</h1>
                                                <h1 v-if="orderResutl.user_name">Tên: <span class="font-500">{{
                                                    orderResutl.user_name }}</span>
                                                </h1>
                                                <h1>Địa chỉ Email: <span class="font-500">{{
                                                    orderResutl.email }}</span></h1>
                                                <h1>Số điện thoại: <span class="font-500">{{
                                                    orderResutl.phone }}</span>
                                                </h1>
                                            </div>

                                            <div class="py-[4px] leading-loose">
                                                <h1 class="font-[600]">Thông tin Gói hàng</h1>
                                                <h1 v-if="packageResutl">Trọng lượng gói hàng: <span class="font-500">{{
                                                    packageResutl.weight }} (Gram)</span>
                                                </h1>
                                            </div>

                                            <div v-if="addressFromResutl && addressToResutl" class="py-[4px] leading-loose">
                                                <h1 class="font-[600]">Địa chỉ</h1>
                                                <h1>Lô hàng được gửi từ:
                                                    <span class="font-500">{{ addressFromResutl.ward }}, {{
                                                        addressFromResutl.district }}, {{ addressFromResutl.province
    }}.</span>
                                                </h1>
                                                <h1>Lô hàng được gửi đến:
                                                    <span class="font-500">{{ addressToResutl.ward }}, {{
                                                        addressToResutl.district }}, {{ addressToResutl.province }}.</span>
                                                </h1>
                                            </div>

                                            <div class="py-[4px] leading-loose">
                                                <h1 class="font-[600]">Phương thức thanh toán:
                                                    <span v-if="orderResutl.payment_id === 1" class="font-500">Tiền
                                                        mặt</span>
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
                            <div class="space-y-12 mx-auto max-w-4xl">
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
import { RouterLink } from 'vue-router'
import axios from 'axios';

import { getUserByEmail } from "@/services/user.service";
import { createOrder } from "@/services/order.service";
import { createAddress } from "@/services/address.service";
import { createPackage } from "@/services/package.service";
import { getServiceById } from "@/services/service.service";
import { getLocationsByServicId } from "@/services/location.service";
import { getPromotionByServiceId } from "@/services/promotion.service";
import Address from "@/components/Address.vue";
import getTime from 'date-fns/getTime'

// toast
import { useToast } from "vue-toastification";
// Get toast interface
const toast = useToast();

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

const paypal = ref(null);
const USDToVND = ref();
const paidFor = ref(false);
const loaded = ref(false);
const changedPrice = ref();

const script = ref();

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

const locationFrom = ref();
const locationTo = ref();

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
    if (packageData.value.weight > service.value.weight) {
        toast.warning(`Oh, Trọng lượng gói hàng không được > ${service.value.weight}`, { timeout: 5000 });
    }

    // reset data
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

const getLocationsByServicIdAxios = async (service_id) => {
    const { data, error } = await getLocationsByServicId(service_id);

    if (data) {
        data.forEach(element => {
            if (element.type === "TO") {
                locationTo.value = element;
            }
            else {
                locationFrom.value = element;
            }
        });
    }

    if (error) {
        // console.log(error);
    }
};

const getPromotionByServiceIdAxios = async (service_id) => {
    const { data, error } = await getPromotionByServiceId(service_id);

    if (data) {
        // console.log(data);
        data.forEach(element => {
            if (getTime(new Date()) >= getTime(new Date(element.start)) && getTime(new Date()) < getTime(new Date(element.end))) {
                console.log(element);
                if (element.price < 100 && element.price > 0)
                    service.value.promotion_price = service.value.price - (service.value.price * element.price / 100);
                else {
                    service.value.promotion_price = 0;
                }
            }
        });
    }

    if (error) {
        // console.log(error);
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
    }
    if (error) {
        console.log(error.message);
    }
};

const createOrderAxios = async (orderData) => {
    // edit data order
    order.value.user_id = user_id.value;
    order.value.service_id = parseInt(props.service_id);

    // Nếu có khuyến mãi
    if (service.value?.promotion_price || service.value?.promotion_price === 0) {
        order.value.total_amount = service.value.promotion_price;
    } else {
        order.value.total_amount = service.value.price;
    }
    const accessToken = await getAccessTokenSilently();
    const { data, error } = await createOrder(accessToken, orderData);

    if (data) {
        console.log(data);
        toast.success("Đã tạo đơn hàng thành công", { timeout: 3000 });
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
    completeStep.value = !completeStep.value, paymentStep.value = !paymentStep.value;
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
        toast.warning("Oh, Có thiếu sót gì đó! Xem lại những Input báo đỏ", { timeout: 3000 });
    }
    else if (packageData.value.weight > service.value.weight) {
        toast.warning(`Oh, Trọng lượng gói hàng không được > ${service.value.weight}`, { timeout: 5000 });
    }
    else {
        paymentStep.value = !paymentStep.value;
        fillInformStep.value = !fillInformStep.value;
    }
};

onMounted(async () => {
    // Load ty le ngoai le
    await axios
        .get(`http://localhost:6060/google-finance`, {
            // withCredentials: true
        })
        .then((response) => {
            const data = response.data;
            const exchangeRateRegex = /<div class="YMlKec fxKbKc">([\d.,]+)<\/div>/;
            const exchangeRateMatch = data.match(exchangeRateRegex);
            if (exchangeRateMatch) {
                const exchangeRate = exchangeRateMatch[1];
                USDToVND.value = parseFloat(exchangeRate, 10) * 1000;
            }
        })
    console.log(USDToVND.value);

    let script = document.createElement('script');
    script.setAttribute("data-namespace", "paypal_sdk");
    script.src =
        "https://www.paypal.com/sdk/js?client-id=Af1NckO7mVTPI_VUoRGDxRhWQKwxkvFrbISLch5alNr06SslxwxiorKzaHNIxg8qGdPvwcWk6_-eerwW";

    // Tải button Paypal
    script.addEventListener('load', () => {
        loaded.value = true;
        let price
        if (service.value?.promotion_price || service.value?.promotion_price === 0) {
            price = parseFloat(service.value.promotion_price / USDToVND.value).toFixed(2);
        }
        else {
            price = parseFloat(service.value.price / USDToVND.value).toFixed(2);
        }

        changedPrice.value = price
        paypal_sdk
            .Buttons({
                style: {
                    // layout: 'horizontal',
                    color: 'blue',
                    shape: 'rect',
                    size: 'responsive',
                    label: 'checkout',
                    tagline: false,
                },
                createOrder: (data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                // items: [{
                                //     name: 'Tên dịch vụ',
                                //     description: "Mô tả",
                                //     quantity: 1,
                                //     unit_amount: {
                                //         currency_code: "USD",
                                //         value: this.product.price,
                                //     }
                                // }],
                                description: service.value.service_name,
                                amount: {
                                    currency_code: "USD",
                                    value: price,
                                    // breakdown: {
                                    //     item_total: {
                                    //         currency_code: "USD",
                                    //         value: this.product.price
                                    //     }
                                    // }
                                }
                            }
                        ]
                    });
                },
                onApprove: async (data, actions) => {
                    const result = await actions.order.capture();
                    paidFor.value = true;
                    createOrderAxios(order.value)
                    console.log(result);
                },
                onError: err => {
                    console.log(err);
                }
            })
            .render(paypal.value)
    })
    document.body.appendChild(script);
})

// run function
getUserByEmailAxios(user);
getServiceByIdAxios(props.service_id);
getLocationsByServicIdAxios(props.service_id);
getPromotionByServiceIdAxios(props.service_id)
</script>

<style scoped>
ol {
    margin-block-start: 1em;
    margin-block-end: 1em;
}

/* Chrome, Safari, Edge, Opera - Khoá spin trên input, type number */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
</style>