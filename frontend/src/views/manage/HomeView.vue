<template>
    <LayoutAuthenticated>
        <div v-show="userQuantity">
            <!-- Title -->
            <section class="mb-6 flex items-center justify-between">
                <div class="flex items-center justify-start"><span
                        class="inline-flex justify-center items-center w-12 h-12 rounded-full bg-white text-black   mr-3"><svg
                            viewBox="0 0 24 24" width="24" height="24" class="inline-block">
                            <path fill="currentColor"
                                d="M3,14L3.5,14.07L8.07,9.5C7.89,8.85 8.06,8.11 8.59,7.59C9.37,6.8 10.63,6.8 11.41,7.59C11.94,8.11 12.11,8.85 11.93,9.5L14.5,12.07L15,12C15.18,12 15.35,12 15.5,12.07L19.07,8.5C19,8.35 19,8.18 19,8A2,2 0 0,1 21,6A2,2 0 0,1 23,8A2,2 0 0,1 21,10C20.82,10 20.65,10 20.5,9.93L16.93,13.5C17,13.65 17,13.82 17,14A2,2 0 0,1 15,16A2,2 0 0,1 13,14L13.07,13.5L10.5,10.93C10.18,11 9.82,11 9.5,10.93L4.93,15.5L5,16A2,2 0 0,1 3,18A2,2 0 0,1 1,16A2,2 0 0,1 3,14Z">
                            </path>
                        </svg></span>
                    <h1 class="text-4xl leading-tight">Tổng Quan</h1>
                </div>
            </section>

            <!-- Info -->
            <div class="grid grid-cols-1 gap-6 lg:grid-cols-3 mb-6">
                <!-- Số lượng người dùng -->
                <div class="rounded-2xl flex-col  bg-white flex">
                    <div class="flex-1 p-6">
                        <div class="justify-between items-center flex mb-3">
                            <div class="flex items-center justify-center">
                                <!-- <div
                                    class="inline-flex items-center capitalize leading-none text-xs border rounded-full py-1 px-3 bg-emerald-500 border-emerald-500 text-white">
                                    <span class="inline-flex justify-center items-center w-4 h-4 mr-1">
                                        <svg viewBox="0 0 24 24" width="14" height="14" class="inline-block">
                                            <path fill="currentColor"
                                                d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z">
                                            </path>
                                        </svg>
                                    </span>
                                    <span>12%</span>
                                </div> -->
                            </div>

                            <div class="flex items-center justify-center">
                                <button
                                    class="inline-flex justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border cursor-pointer rounded border-gray-100  ring-gray-200 bg-gray-100 text-black  hover:bg-gray-200  p-1"
                                    type="button" icon-w="w-4" icon-h="h-4">
                                    <span class="inline-flex justify-center items-center w-6 h-6">
                                        <svg viewBox="0 0 24 24" width="16" height="16" class="inline-block">
                                            <path fill="currentColor"
                                                d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z">
                                            </path>
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div class="justify-between items-center flex">
                            <div class="flex items-center justify-center">
                                <div>
                                    <h3 class="text-lg leading-tight text-gray-500 ">Người dùng</h3>
                                    <h1 class="text-3xl leading-tight font-semibold">
                                        <div>{{ userQuantity }}</div>
                                    </h1>
                                </div>
                            </div>
                            <div class="flex items-center justify-center"><span
                                    class="inline-flex justify-center items-center  h-16 text-emerald-500">
                                    <svg viewBox="0 0 24 24" width="48" height="48" class="inline-block">
                                        <path fill="currentColor"
                                            d="M16 17V19H2V17S2 13 9 13 16 17 16 17M12.5 7.5A3.5 3.5 0 1 0 9 11A3.5 3.5 0 0 0 12.5 7.5M15.94 13A5.32 5.32 0 0 1 18 17V19H22V17S22 13.37 15.94 13M15 4A3.39 3.39 0 0 0 13.07 4.59A5 5 0 0 1 13.07 10.41A3.39 3.39 0 0 0 15 11A3.5 3.5 0 0 0 15 4Z">
                                        </path>
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Doanh thu tháng này -->
                <div class="rounded-2xl flex-col  bg-white flex">
                    <div class="flex-1 p-6">
                        <div class="justify-between items-center flex mb-3">
                            <div class="flex items-center justify-center">
                                <!-- Tăng -->
                                <div v-show="((parseFloat(currentMonthSales) / parseFloat(previousMonthSales) * 100) - 100) > 0"
                                    class="flex items-center justify-center">
                                    <div
                                        class="inline-flex items-center capitalize leading-none text-xs border rounded-full py-1 px-3 bg-emerald-500 border-emerald-500 text-white">
                                        <span class="inline-flex justify-center items-center w-4 h-4 mr-1">
                                            <svg viewBox="0 0 24 24" width="14" height="14" class="inline-block">
                                                <path fill="currentColor"
                                                    d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z">
                                                </path>
                                            </svg>
                                        </span>
                                        <span>{{
                                            ((parseFloat(currentMonthSales) / parseFloat(previousMonthSales) * 100) -
                                                100).toLocaleString('vi-VN', {
                                                    minimumFractionDigits: 1, // Số chữ số thập phân tối thiểu
                                                    maximumFractionDigits: 1, // Số chữ số thập phân tối đa
                                                }) }}%
                                        </span>
                                    </div>
                                </div>

                                <!-- Giảm -->
                                <div v-show="((parseFloat(currentMonthSales) / parseFloat(previousMonthSales) * 100) - 100) <= 0"
                                    class="inline-flex items-center capitalize leading-none text-xs border rounded-full py-1 px-3 bg-red-500 border-red-500 text-white">
                                    <span class="inline-flex justify-center items-center w-4 h-4 mr-1">
                                        <svg viewBox="0 0 24 24" width="14" height="14" class="inline-block">
                                            <path fill="currentColor"
                                                d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z">
                                            </path>
                                        </svg>
                                    </span>
                                    <span>{{
                                        ((parseFloat(currentMonthSales) / parseFloat(previousMonthSales) * 100) -
                                            100).toLocaleString('vi-VN', {
                                                minimumFractionDigits: 1, // Số chữ số thập phân tối thiểu
                                                maximumFractionDigits: 1, // Số chữ số thập phân tối đa
                                            }) }}%
                                    </span>
                                </div>
                            </div>
                            <div class="flex items-center justify-center">
                                <button
                                    class="inline-flex justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border cursor-pointer rounded border-gray-100  ring-gray-200 bg-gray-100 text-black  hover:bg-gray-200  p-1"
                                    type="button" icon-w="w-4" icon-h="h-4">
                                    <span class="inline-flex justify-center items-center w-6 h-6">
                                        <svg viewBox="0 0 24 24" width="16" height="16" class="inline-block">
                                            <path fill="currentColor"
                                                d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z">
                                            </path>
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div class="justify-between items-center flex">
                            <div class="flex items-center justify-center">
                                <div>
                                    <h3 class="text-lg leading-tight text-gray-500 ">Doanh thu</h3>
                                    <h1 class="text-3xl leading-tight font-semibold">
                                        <div>{{ (currentMonthSales || 0).toLocaleString('vi-VN',
                                            {
                                                style: 'currency',
                                                currency: 'VND'
                                            })
                                        }}</div>
                                    </h1>
                                </div>
                            </div>
                            <div class="flex items-center justify-center">
                                <span class="inline-flex justify-center items-center  h-16 text-blue-500">
                                    <svg viewBox="0 0 24 24" width="48" height="48" class="inline-block">
                                        <path fill="currentColor"
                                            d="M17,18A2,2 0 0,1 19,20A2,2 0 0,1 17,22C15.89,22 15,21.1 15,20C15,18.89 15.89,18 17,18M1,2H4.27L5.21,4H20A1,1 0 0,1 21,5C21,5.17 20.95,5.34 20.88,5.5L17.3,11.97C16.96,12.58 16.3,13 15.55,13H8.1L7.2,14.63L7.17,14.75A0.25,0.25 0 0,0 7.42,15H19V17H7C5.89,17 5,16.1 5,15C5,14.65 5.09,14.32 5.24,14.04L6.6,11.59L3,4H1V2M7,18A2,2 0 0,1 9,20A2,2 0 0,1 7,22C5.89,22 5,21.1 5,20C5,18.89 5.89,18 7,18M16,11L18.78,6H6.14L8.5,11H16Z">
                                        </path>
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Hiệu suất tháng này-->
                <!-- <div class="rounded-2xl flex-col  bg-white flex">
                    <div class="flex-1 p-6">
                        <div class="justify-between items-center flex mb-3">
                            <div class="flex items-center justify-center">
                                <div
                                    class="inline-flex items-center capitalize leading-none text-xs border rounded-full py-1 px-3 bg-yellow-500 border-yellow-500 text-white">
                                    <span class="inline-flex justify-center items-center w-4 h-4 mr-1">
                                        <svg viewBox="0 0 24 24" width="14" height="14" class="inline-block">
                                            <path fill="currentColor"
                                                d="M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z">
                                            </path>
                                        </svg>
                                    </span>
                                    <span>Overflow</span>
                                </div>
                            </div>
                            <div class="flex items-center justify-center">
                                <button
                                    class="inline-flex justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border cursor-pointer rounded border-gray-100  ring-gray-200 bg-gray-100 text-black  hover:bg-gray-200  p-1"
                                    type="button" icon-w="w-4" icon-h="h-4">
                                    <span class="inline-flex justify-center items-center w-6 h-6">
                                        <svg viewBox="0 0 24 24" width="16" height="16" class="inline-block">
                                            <path fill="currentColor"
                                                d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z">
                                            </path>
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div class="justify-between items-center flex">
                            <div class="flex items-center justify-center">
                                <div>
                                    <h3 class="text-lg leading-tight text-gray-500 ">Hiệu suất</h3>
                                    <h1 class="text-3xl leading-tight font-semibold">
                                        <div>256%</div>
                                    </h1>
                                </div>
                            </div>
                            <div class="flex items-center justify-center">
                                <span class="inline-flex justify-center items-center  h-16 text-red-500">
                                    <svg viewBox="0 0 24 24" width="48" height="48" class="inline-block">
                                        <path fill="currentColor"
                                            d="M3,14L3.5,14.07L8.07,9.5C7.89,8.85 8.06,8.11 8.59,7.59C9.37,6.8 10.63,6.8 11.41,7.59C11.94,8.11 12.11,8.85 11.93,9.5L14.5,12.07L15,12C15.18,12 15.35,12 15.5,12.07L19.07,8.5C19,8.35 19,8.18 19,8A2,2 0 0,1 21,6A2,2 0 0,1 23,8A2,2 0 0,1 21,10C20.82,10 20.65,10 20.5,9.93L16.93,13.5C17,13.65 17,13.82 17,14A2,2 0 0,1 15,16A2,2 0 0,1 13,14L13.07,13.5L10.5,10.93C10.18,11 9.82,11 9.5,10.93L4.93,15.5L5,16A2,2 0 0,1 3,18A2,2 0 0,1 1,16A2,2 0 0,1 3,14Z">
                                        </path>
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                </div> -->

                <!-- Số lượng đơn hàng chờ Xét duyệt-->
                <div class="rounded-2xl flex-col  bg-white flex">
                    <div class="flex-1 p-6">
                        <div class="justify-between items-center flex mb-3">
                            <div class="flex items-center justify-center">
                                <div
                                    class="inline-flex items-center capitalize leading-none text-xs border rounded-full py-1 px-3 bg-yellow-500 border-yellow-500 text-white">
                                    <span class="inline-flex justify-center items-center w-4 h-4">
                                        <svg viewBox="0 0 24 24" width="14" height="14" class="inline-block">
                                            <path fill="currentColor"
                                                d="M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z">
                                            </path>
                                        </svg>
                                    </span>
                                    <!-- <span>Overflow</span> -->
                                </div>
                            </div>
                            <div class="flex items-center justify-center">
                                <button
                                    class="inline-flex justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border cursor-pointer rounded border-gray-100  ring-gray-200 bg-gray-100 text-black  hover:bg-gray-200  p-1"
                                    type="button" icon-w="w-4" icon-h="h-4">
                                    <span class="inline-flex justify-center items-center w-6 h-6">
                                        <svg viewBox="0 0 24 24" width="16" height="16" class="inline-block">
                                            <path fill="currentColor"
                                                d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z">
                                            </path>
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div class="justify-between items-center flex">
                            <div class="flex items-center justify-center">
                                <div>
                                    <h3 class="text-lg leading-tight text-gray-500 ">Đơn hàng chờ Xác nhận</h3>
                                    <h1 class="text-3xl leading-tight font-semibold">
                                        <div>{{ waitOrderQuantity }}</div>
                                    </h1>
                                </div>
                            </div>
                            <div class="flex items-center justify-center">
                                <span class="inline-flex justify-center items-center  h-16 text-blue-500">
                                    <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="48" height="48"
                                        class="inline-block">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Title Chart -->
            <section class="pt-6 mb-6 flex items-center justify-between">
                <div class="flex items-center justify-start">
                    <span class="inline-flex justify-center items-center w-6 h-6 mr-2">
                        <svg viewBox="0 0 24 24" width="20" height="20" class="inline-block">
                            <path fill="currentColor"
                                d="M11,2V22C5.9,21.5 2,17.2 2,12C2,6.8 5.9,2.5 11,2M13,2V11H22C21.5,6.2 17.8,2.5 13,2M13,13V22C17.7,21.5 21.5,17.8 22,13H13Z">
                            </path>
                        </svg>
                    </span>
                    <h1 class="text-3xl leading-tight">Tổng quan về doanh thu</h1>
                </div>

                <div class="flex justify-center items-center">
                    <button @click="Week = true, Month = false"
                        class="mx-2 px-2 inline-flex justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border cursor-pointer rounded border-white ring-gray-200 bg-white text-black hover:bg-gray-100 p-1"
                        type="button">
                        <span class="inline-flex justify-center items-center">
                            Tuần
                        </span>
                    </button>
                    <button @click="Month = true, Week = false"
                        class="mx-2 px-2 inline-flex justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border cursor-pointer rounded border-white ring-gray-200 bg-white text-black hover:bg-gray-100 p-1"
                        type="button">
                        <span class="inline-flex justify-center items-center">
                            Tháng
                        </span>
                    </button>

                    <!-- Updata charts -->
                    <!-- <button
                        class="ml-2 pl-2 inline-flex justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border cursor-pointer rounded border-white ring-gray-200 bg-white text-black hover:bg-gray-100 p-1"
                        type="button"><span class="inline-flex justify-center items-center w-6 h-6">
                            <svg viewBox="0 0 24 24" width="16" height="16" class="inline-block">
                                <path fill="currentColor"
                                    d="M2 12C2 16.97 6.03 21 11 21C13.39 21 15.68 20.06 17.4 18.4L15.9 16.9C14.63 18.25 12.86 19 11 19C4.76 19 1.64 11.46 6.05 7.05C10.46 2.64 18 5.77 18 12H15L19 16H19.1L23 12H20C20 7.03 15.97 3 11 3C6.03 3 2 7.03 2 12Z">
                                </path>
                            </svg>
                        </span>
                    </button> -->
                </div>
            </section>

            <!-- Chart -->
            <div class="rounded-2xl flex-col bg-white flex mb-6">
                <div class="flex-1 p-6">
                    <div>
                        <ChartByMonth v-show="Month === true"></ChartByMonth>
                        <ChartByWeek v-show="Week === true"></ChartByWeek>
                    </div>
                </div>
            </div>
        </div>
    </LayoutAuthenticated>
</template>
<script setup>
import LayoutAuthenticated from '@/components/manage/layouts/LayoutAuthenticated.vue';
import ChartByMonth from '@/components/manage/charts/ChartByMonth.vue';
import ChartByWeek from '@/components/manage/charts/ChartByWeek.vue';
import { onMounted, ref, onBeforeMount } from "vue";

import format from 'date-fns/format'
import startOfMonth from 'date-fns/startOfMonth';
import endOfMonth from 'date-fns/endOfMonth';
import subMonths from 'date-fns/subMonths'

import { getQuantityUser } from "@/services/user.service";
import { getSales, getWaitOrders } from "@/services/order.service";

const Month = ref(false);
const Week = ref(true);
const userQuantity = ref();
const waitOrderQuantity = ref();

const previousMonthSales = ref();
const currentMonthSales = ref();

// get the token
const { getAccessTokenSilently } = useAuth0();

// Check role
import { useRouter } from 'vue-router'
const router = useRouter()
import { useAuth0 } from "@auth0/auth0-vue";
const { user } = useAuth0();
// Xác thực người dùng đã đăng nhập chưa 
const { isAuthenticated } = useAuth0();
if (isAuthenticated) {
    // console.log(user.role);
    if (user.value.role) {
        // console.log(user);
    }
    else {
        router.push('/');
    }
}

// Lấy số lượng người dùng
const getWaitOrdersAxios = async () => {
    const accessToken = await getAccessTokenSilently();
    const { data, error } = await getWaitOrders(accessToken);

    if (data) {
        waitOrderQuantity.value = data.quantity;
        // console.log(data);
    }
    if (error) {
        // console.log(error.message);
    }
};

// Lấy số lượng người dùng
const getQuantityUserAxios = async () => {
    const accessToken = await getAccessTokenSilently();
    const { data, error } = await getQuantityUser(accessToken);

    if (data) {
        userQuantity.value = data.user_quantity;
        // console.log(data);
    }
    if (error) {
        // console.log(error.message);
    }
};

// Lấy doanh thu theo khoảng thời gian by created của order
const getCurrentSalesAxios = async (startDate, endDate) => {
    const accessToken = await getAccessTokenSilently();
    const { data, error } = await getSales(accessToken, startDate, endDate);

    if (data) {
        // console.log(data);
        currentMonthSales.value = data.sales;
    }
    if (error) {
        // console.log(error.message);
    }
};

// Lấy doanh thu theo khoảng thời gian by created của order
const getPreviousSalesAxios = async (startDate, endDate) => {
    const accessToken = await getAccessTokenSilently();
    const { data, error } = await getSales(accessToken, startDate, endDate);

    if (data) {
        // console.log(data);
        previousMonthSales.value = data.sales;
    }
    if (error) {
        // console.log(error.message);
    }
};

onBeforeMount(async () => {
    // run function
    getQuantityUserAxios();
    getWaitOrdersAxios();
    getCurrentSalesAxios(format(startOfMonth(new Date()), 'yyyy-MM-dd'), format(endOfMonth(new Date()), 'yyyy-MM-dd'));
    getPreviousSalesAxios(format(startOfMonth(subMonths(new Date(), 1)), 'yyyy-MM-dd'), format(endOfMonth(subMonths(new Date(), 1)), 'yyyy-MM-dd'));
});
</script>