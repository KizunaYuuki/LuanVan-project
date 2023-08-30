<template>
    <main class="max-w-[1024px] container mx-auto flex min-[1024px]:items-start min-[1024px]:flex-row flex-col shadow shadow-[#0096fa3c]">
        <!-- Thông tin dịch vụ -->
        <section class="min-[1024px]:p-[1.25rem] p-[.75rem] flex flex-wrap content-center min-[1024px]:w-[40%]">
            <div class="text-[#757575]">
                <h1 class="text-[24px] font-[500]">FedEx Vận chuyển quốc tế</h1>
                <div class="text-[16px]">
                    <h2>Nhà cung cấp: <span class="text-[#0096fa] font-[500] hover:underline">FedEX</span></h2>
                    <h2>Thời gian: <span class="font-[500]">1 -> 2 ngày</span></h2>
                    <h2>Khối lượng: <span class="font-[500]">&le; 68kg</span></h2>
                    <h2>Chi phí: <span class="font-[500]">
                            {{ (860000).toLocaleString('vi-VN', {
                                style: 'currency',
                                currency: 'VND'
                            }) }}
                        </span></h2>
                    <h2>Nơi gởi hàng: <span class="font-[500]">Đà Lạt</span></h2>
                    <h2>Nơi nhận hàng: <span class="font-[500]">TP. Hồ Chí Minh</span></h2>
                </div>
                <div>
                    <button class="mr-[16px] my-[8px] inline-flex items-center px-[8px] py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-[#0096fa]">Đăng ký dịch vụ</button>
                    <button class="my-[8px] inline-flex items-center px-[8px] py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-[#0096fa]">Thêm vào giỏ hàng</button>
                    <!-- <button type="button"
                        class="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-indigo-500"
                        disabled="">
                        <svg class="motion-reduce:hidden animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4">
                            </circle>
                            <path class="opacity-75" fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                            </path>
                        </svg>
                        Processing...
                    </button> -->
                </div>
            </div>
            <!-- Đăng ký -->
            <div>

            </div>
        </section>

        <!-- Bình luận - Đánh giá -->
        <section class="min-[1024px]:p-[1.25rem] p-[.75rem] flex flex-wrap content-center items-center min-[1024px]:w-[60%] shadow shadow-[#0096fa3c]">
            <div class="text-[#757575]">
                <h1 class="text-[24px] font-[500]">Xếp hạng và Đánh giá</h1>
                <span class="text-[18px] text-[#757575] font-[500] inline-flex items-end">
                    <span class="mr-[4px]">{{
                        (4.7).toLocaleString('vi-VN', {
                            minimumFractionDigits: 1, // Số chữ số thập phân tối thiểu
                            maximumFractionDigits: 1, // Số chữ số thập phân tối đa
                        }) }}</span>
                    <svg width="24" height="24" viewBox="0 0 24 24" focusable="false" class="fill-current text-[#fbbc04]">
                        <path
                            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z">
                        </path>
                    </svg>
                    <span class="text-[12px] ml-[4px] overflow-hidden text-ellipsis whitespace-nowrap">
                        ({{
                            (8510).toLocaleString('vi-VN')
                        }}) đánh giá</span>
                </span>

                <h2 class="text-[16px]">Xếp hạng theo</h2>
                <div class="inline-block">
                    <div
                        class="text-[12px] text-[#1558d6] h-[36px] inline-flex items-center px-[12px] rounded-full border border-[#d2e3fc] hover:bg-[#d2e3fc] mr-[6px] my-[6px] bg-[#e8f0fe]">
                        <span>Mới nhất</span>
                    </div>
                    <div
                        class="text-[12px] h-[36px] inline-flex items-center px-[12px] rounded-full border mr-[6px] my-[6px] hover:bg-[#f8f9fa]">
                        <span>Cao nhất</span>
                    </div>
                    <div
                        class="text-[12px] h-[36px] inline-flex items-center px-[12px] rounded-full border mr-[6px] my-[6px] hover:bg-[#f8f9fa]">
                        <span>Thấp nhất</span>
                    </div>
                </div>

                <!-- Comment -->
                <div class="overflow-scroll max-h-[200px]">
                    <h2 class="text-[16px] font-[600] flex items-center justify-between py-[8px]">Xuân Hà Phạm
                        <svg width="24" height="24" class="fill-current text-[#70757a]" focusable="false"
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path
                                d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z">
                            </path>
                        </svg>
                    </h2>
                    <div>
                        <span></span>
                        <span>một tuần trước</span>
                        <span
                            class="text-[12px] h-[24px] inline-flex items-center px-[12px] rounded-[4px] border m-[6px] hover:bg-[#f8f9fa]">Mới</span>
                    </div>
                    <p>Mình ghé thăm vào tháng 08, trời Hà Nội khá là oi, đi dạo Hồ Hoàn Kiểm cả buổi sáng lẫn buổi chiều
                        điều cảm thấy oi - Nhưng vẻ đẹp của Hồ Hoàn Kiểm vẫn y như sách giáo khoa</p>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup>
import { ref } from "vue";
</script>