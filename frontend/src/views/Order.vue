<template>
    <main>
        <section
            class="flex flex-col max-w-[calc(1280px-64px)] mx-auto my-[16px] min-h-[calc(100vh)] min-[1280]:px-[0px] px-[8px]">

            <div class="bg-white">

                <!-- Form Đăng ký dịch vụ -->
                <form class="min-[1024px]:py-[64px] py-[16px]">

                    <!-- Buoc 1 Dien Thong tin -->
                    <div v-if="fillInformStep" class="">
                        <!-- Nav Steps - Thông tin dịch vụ -->
                        <div class="bg-[#fff] rounded-[0.375rem] min-[1024px]:block hidden">
                            <div class="mx-auto px-[2rem]">
                                <nav aria-label="Progress">
                                    <ol role="list"
                                        class="list-decimal ms-px me-px flex flex-wrap rounded-[4px] border-[1px]">
                                        <li class="relative flex flex-1">
                                            <a href="#" class="flex w-full items-center">
                                                <span
                                                    class="flex items-center py-[.5rem] px-[1.5rem] text-[#0096fa] font-[500]">
                                                    <span
                                                        class="flex items-center justify-center content-center border-[2px] border-[#0096fa] w-[2rem] h-[2rem] rounded-full">
                                                        <span class="">01</span>
                                                    </span>
                                                    <span class="ml-[16px]">Thông Tin Dịch Vụ</span>
                                                </span>
                                            </a>
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
                                            <a href="#" class=" flex items-center py-[.5rem] px-[1.5rem]">
                                                <span
                                                    class="flex items-center text-[#6b7280] font-[500] hover:text-[#111827]">
                                                    <span
                                                        class="flex items-center justify-center content-center border-[2px] border-[#d1d5db] hover:border-[#747981b7] w-[2rem] h-[2rem] rounded-full">
                                                        <span class="">02</span>
                                                    </span>
                                                    <span class="ml-[16px]">Thanh Toán</span>
                                                </span>
                                            </a>
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
                                            <a href="#" class=" flex items-center py-[.5rem] px-[1.5rem]">
                                                <span
                                                    class="flex items-center text-[#6b7280] font-[500] hover:text-[#111827]">
                                                    <span
                                                        class="flex items-center justify-center content-center border-[2px] border-[#d1d5db] hover:border-[#747981b7] w-[2rem] h-[2rem] rounded-full">
                                                        <span class="">03</span>
                                                    </span>
                                                    <span class="ml-[16px]">Hoàn Thành</span>
                                                </span>
                                            </a>
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>

                        <!-- Noi dung -->
                        <div class="max-w-7xl mx-auto px-4 sm:px-6 min-[1024px]:py-[64px] py-[16px] lg:px-8">
                            <div class="space-y-12 mx-auto max-w-2xl">
                                <!-- Thông tin cá nhân -->
                                <div class="border-b border-gray-900/10 pb-12">
                                    <h2 class="text-base font-semibold leading-7 text-gray-900">Thông tin liên hệ</h2>
                                    <p class="mt-1 text-sm leading-6 text-gray-600">Sử dụng những thông tin mà chúng tôi
                                        có thể liên hệ được với bạn khi cần thiết. <br /> Những thông tin có ký hiệu
                                        <strong class="text-[red]">*</strong> là thông tin bắt buộc phải nhập.
                                    </p>

                                    <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                        <div class="sm:col-span-2">
                                            <label for="first-name"
                                                class="block text-sm font-medium leading-6 text-gray-900">Tên<strong
                                                    class="text-[red] ml-[8px]">*</strong></label>
                                            <div class="mt-2">
                                                <input type="text" name="first-name" id="first-name"
                                                    autocomplete="given-name"
                                                    class="pl-[14px] block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                            </div>
                                        </div>

                                        <div class="sm:col-span-2">
                                            <label for="email" class="block text-sm font-medium leading-6 text-gray-900">
                                                Email<strong class="text-[red] ml-[8px]">*</strong></label>
                                            <div class="mt-2">
                                                <input id="email" name="email" type="email" autocomplete="email"
                                                    class="pl-[14px] block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                            </div>
                                        </div>

                                        <div class="sm:col-span-2">
                                            <label for="tel" class="block text-sm font-medium leading-6 text-gray-900">Số
                                                điện
                                                thoại<strong class="text-[red] ml-[8px]"></strong></label>
                                            <div class="mt-2">
                                                <input id="tel" name="tel" type="tel" autocomplete="tel"
                                                    class="pl-[14px] block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Thông tin Lô hàng -->
                                <div class="border-b border-gray-900/10 pb-12">
                                    <h2 class="text-base font-semibold leading-7 text-gray-900">Thông tin Lô hàng</h2>
                                    <p class="mt-1 text-sm leading-6 text-gray-600">Những thông tin này liên quan trực tiếp
                                        đến giá dịch vụ
                                    </p>

                                    <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                        <div class="sm:col-span-2 sm:col-start-1">
                                            <label for="height"
                                                class="block text-sm font-medium leading-6 text-gray-900">Chiều dài
                                                (<span class="text-[#0096fa]">cm</span>)</label>
                                            <div class="mt-2">
                                                <input type="text" name="height" id="height" autocomplete="height"
                                                    class="pl-[14px] block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                            </div>
                                        </div>

                                        <div class="sm:col-span-2">
                                            <label for="width"
                                                class="block text-sm font-medium leading-6 text-gray-900">Chiều rộng
                                                (<span class="text-[#0096fa]">cm</span>)</label>
                                            <div class="mt-2">
                                                <input type="text" name="width" id="width" autocomplete="width"
                                                    class="pl-[14px] block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                            </div>
                                        </div>

                                        <div class="sm:col-span-2">
                                            <label for="length"
                                                class="block text-sm font-medium leading-6 text-gray-900">Chiều cao
                                                (<span class="text-[#0096fa]">cm</span>)</label>
                                            <div class="mt-2">
                                                <input type="text" name="length" id="length" autocomplete="length"
                                                    class="pl-[14px] block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                            </div>
                                        </div>

                                        <div class="sm:col-span-2">
                                            <label for="volume"
                                                class="block text-sm font-medium leading-6 text-gray-900">Trọng lượng Lô
                                                hàng
                                                (<span class="text-[#0096fa]">Kg</span>)</label>
                                            <div class="mt-2">
                                                <input type="text" name="volume" id="volume" autocomplete="volume"
                                                    class="pl-[14px] block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Bạn vận chuyển lô hàng từ đâu? -->
                                <div class="border-b border-gray-900/10 pb-12">
                                    <h2 class="text-base font-semibold leading-7 text-gray-900">Bạn vận chuyển lô hàng
                                        từ đâu?</h2>
                                    <p class="mt-1 text-sm leading-6 text-gray-600">Thông tin về địa
                                        điểm cụ thể mà nhân viên vận chuyển đến để lấy lô hàng của bạn.</p>
                                    <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                                        <div class="sm:col-span-2 sm:col-start-1">
                                            <label for="city" class="block text-sm font-medium leading-6 text-gray-900">Tỉnh
                                                / Thành
                                                phố</label>
                                            <div class="mt-2">
                                                <input type="text" name="city" id="city" autocomplete="address-level2"
                                                    class="pl-[14px] block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                            </div>
                                        </div>

                                        <div class="sm:col-span-2">
                                            <label for="region"
                                                class="block text-sm font-medium leading-6 text-gray-900">Quận /
                                                Huyện</label>
                                            <div class="mt-2">
                                                <input type="text" name="region" id="region" autocomplete="address-level1"
                                                    class="pl-[14px] block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                            </div>
                                        </div>

                                        <div class="sm:col-span-2">
                                            <label for="ward" class="block text-sm font-medium leading-6 text-gray-900">Xã /
                                                Phường</label>
                                            <div class="mt-2">
                                                <input type="text" name="ward" id="ward" autocomplete="address-level3"
                                                    class="pl-[14px] block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Lô hàng của bạn gửi đi đâu? -->
                                <div class="border-b border-gray-900/10 pb-12">
                                    <h2 class="text-base font-semibold leading-7 text-gray-900">Lô hàng của bạn gửi đi
                                        đâu?</h2>
                                    <p class="mt-1 text-sm leading-6 text-gray-600">Thông tin về địa
                                        điểm cụ thể mà bạn muốn gửi hàng đến. Thông tin về
                                        địa chỉ rất quan trọng để đảm bảo rằng hàng hóa sẽ
                                        đến đúng địa điểm đích mà bạn muốn.</p>
                                    <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                        <div class="sm:col-span-2 sm:col-start-1">
                                            <label for="city" class="block text-sm font-medium leading-6 text-gray-900">Tỉnh
                                                / Thành
                                                phố</label>
                                            <div class="mt-2">
                                                <input type="text" name="city" id="city" autocomplete="address-level2"
                                                    class="pl-[14px] block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                            </div>
                                        </div>

                                        <div class="sm:col-span-2">
                                            <label for="region"
                                                class="block text-sm font-medium leading-6 text-gray-900">Quận /
                                                Huyện</label>
                                            <div class="mt-2">
                                                <input type="text" name="region" id="region" autocomplete="address-level1"
                                                    class="pl-[14px] block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                            </div>
                                        </div>

                                        <div class="sm:col-span-2">
                                            <label for="ward" class="block text-sm font-medium leading-6 text-gray-900">Xã /
                                                Phường</label>
                                            <div class="mt-2">
                                                <input type="text" name="ward" id="ward" autocomplete="address-level3"
                                                    class="pl-[14px] block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Button -->
                        <div class="px-4">
                            <div class="space-y-12 mx-auto max-w-2xl">
                                <div class="flex items-center justify-end gap-x-6">
                                    <RouterLink to="/"
                                        class="text-sm font-semibold leading-6 text-gray-900">
                                        Về Trang chủ
                                    </RouterLink>
                                    <button @click="paymentStep = !paymentStep, fillInformStep = !fillInformStep"
                                        type="button"
                                        class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Tiếp
                                        tục</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Buoc 2 Thanh toán -->
                    <div v-if="paymentStep" class="">
                        <!-- Nav Steps - Thanh toán -->
                        <div class="bg-[#fff] rounded-[0.375rem] min-[1024px]:block hidden">
                            <div class="mx-auto px-[2rem]">
                                <nav aria-label="Progress">
                                    <ol role="list"
                                        class="list-decimal ms-px me-px flex flex-wrap rounded-[4px] border-[1px]">
                                        <li class="relative flex flex-1">
                                            <a href="#" class="flex w-full items-center">
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
                                            </a>
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
                                            <a href="#" class="flex items-center py-[.5rem] px-[1.5rem]"
                                                aria-current="step">
                                                <span class="flex items-center text-[#0096fa] font-[500]">
                                                    <span
                                                        class="flex items-center justify-center content-center border-[2px] border-[#0096fa] w-[2rem] h-[2rem] rounded-full">
                                                        <span class="">02</span>
                                                    </span>
                                                    <span class="ml-[16px]">Thanh Toán</span>
                                                </span>
                                            </a>
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
                                            <a href="#" class=" flex items-center py-[.5rem] px-[1.5rem]">
                                                <span
                                                    class="flex items-center text-[#6b7280] font-[500] hover:text-[#111827]">
                                                    <span
                                                        class="flex items-center justify-center content-center border-[2px] border-[#d1d5db] hover:border-[#747981b7] w-[2rem] h-[2rem] rounded-full">
                                                        <span class="">03</span>
                                                    </span>
                                                    <span class="ml-[16px]">Hoàn Thành</span>
                                                </span>
                                            </a>
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>

                        <!-- Noi dung -->
                        <div class="max-w-7xl mx-auto px-4 sm:px-6 min-[1024px]:py-[64px] py-[16px] lg:px-8">
                            <div class="space-y-12 mx-auto max-w-2xl">

                                <!-- Thanh toán -->
                                <div class="border-b border-gray-900/10 pb-12">
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
                                                        <input class="w-[18px] h-[18px]" type="radio" name="pay" id="cash">
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
                                                        <input class="w-[18px] h-[18px]" type="radio" name="pay"
                                                            id="paypal">
                                                    </div>
                                                </label>
                                            </div>
                                        </div>

                                        <div class="col-span-full">
                                            <div class="flex justify-center">
                                                <h1>Bạn đã chọn thành toán bằng <span class="text-[#0096fa]">Tiền
                                                        mặt</span>, Click Đăng ký để hoàn thành đăng ký dịch vụ.</h1>
                                            </div>
                                            <div class="flex justify-center">
                                                <h1>Một bước nữa thôi, thanh toán bằng <span
                                                        class="text-[#0096fa]">Paypal</span> để
                                                    hoàn thành đăng ký dịch
                                                    vụ.</h1>
                                            </div>

                                            <div class="flex justify-center">
                                                <h1>Dịch vụ (Đơn hàng) bạn đã đăng ký sẽ được xét duyệt trong vòng <span
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
                                    <button @click="fillInformStep = !fillInformStep, paymentStep = !paymentStep"
                                        type="button" class="text-sm font-semibold leading-6 text-gray-900">Trở lại</button>
                                    <button @click="completeStep = !completeStep, paymentStep = !paymentStep" type="button"
                                        class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Đăng
                                        ký</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Buoc 3 Hoàn thành - Xem lại thông tin dịch vụ vừa mới đăng ký -->
                    <div v-if="completeStep" class="">
                        <!-- Nav Steps - Hoàn thành -->
                        <div class="bg-[#fff] rounded-[0.375rem] min-[1024px]:block hidden">
                            <div class="mx-auto px-[2rem]">
                                <nav aria-label="Progress">
                                    <ol role="list"
                                        class="list-decimal ms-px me-px flex flex-wrap rounded-[4px] border-[1px]">
                                        <li class="relative flex flex-1">
                                            <a href="#" class="flex w-full items-center">
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
                                            </a>
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
                                            <a href="#" class="flex w-full items-center">
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
                                            </a>
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
                                            <a href="#" class="flex items-center py-[.5rem] px-[1.5rem]">
                                                <span class="flex items-center text-[#0096fa] font-[500]">
                                                    <span
                                                        class="flex items-center justify-center content-center border-[2px] border-[#0096fa] w-[2rem] h-[2rem] rounded-full">
                                                        <span class="">03</span>
                                                    </span>
                                                    <span class="ml-[16px]">Hoàn Thành</span>
                                                </span>
                                            </a>
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>

                        <!-- Noi dung -->
                        <div class="max-w-7xl mx-auto px-4 sm:px-6 min-[1024px]:py-[64px] py-[16px] lg:px-8">
                            <div class="space-y-12 mx-auto max-w-2xl">

                                <!-- Tieu de -->
                                <div class="border-b border-gray-900/10 pb-12">
                                    <h2 class="text-base font-semibold leading-7 text-gray-900">Hoàn Thành</h2>
                                    <p class="mt-1 text-sm leading-6 text-gray-600">Đăng ký dịch vụ Thành công, bạn có thể
                                        xem lại thông tin dịch vụ đã đăng ký trước khi rời trang này</p>
                                    <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                                        <!-- Thông tin cá nhân -->
                                        <div class="col-span-full text-[14px]">

                                            <div class="py-[4px] leading-loose">
                                                <h1 class="font-[600]">Thông tin cá nhân</h1>
                                                <h1>Tên: <span class="text-[#0096fa] font-500">Trung Thành</span></h1>
                                                <h1>Địa chỉ Email: <span
                                                        class="text-[#0096fa] font-500">test@gmail.com</span></h1>
                                                <h1>Số điện thoại: <span class="text-[#0096fa] font-500">0332006710</span>
                                                </h1>

                                            </div>

                                            <div class="py-[4px] leading-loose">
                                                <h1 class="font-[600]">Địa chỉ</h1>
                                                <h1>Lô hàng được gửi từ:
                                                    <span class="text-[#0096fa] font-500">Thạnh Hoà, Phụng Hiệp, Hậu Giang,
                                                        Việt Nam.</span>
                                                </h1>
                                                <h1>Lô hàng được gửi đến:
                                                    <span class="text-[#0096fa] font-500">Quận 1, TP.HCM, Việt Nam</span>
                                                </h1>

                                            </div>

                                            <div class="py-[4px] leading-loose">
                                                <h1 class="font-[600]">Phương thức thanh toán:
                                                    <span class="text-[#0096fa] font-500">Tiền mặt</span>
                                                </h1>
                                            </div>

                                            <div class="py-[4px] leading-loose">
                                                <h1 class="font-[600]">Hình thức vận chuyển:
                                                    <span class="text-[#0096fa] font-500">Vận chuyển nhanh</span>
                                                </h1>
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
import { RouterLink, RouterView } from 'vue-router'

const fillInformStep = ref(true);
const paymentStep = ref(false);
const completeStep = ref(false);
</script>

<style scoped>
ol {
    margin-block-start: 1em;
    margin-block-end: 1em;
}</style>