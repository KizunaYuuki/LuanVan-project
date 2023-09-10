<template>
    <main>
        <div class="bg-[#ffffffbe] py-[2.5rem]">
            <div class="mx-auto max-w-[1280px]">
                <div class="px-[14px]">
                    <div class="flex items-center">
                        <div class="flex-auto">
                            <h1 class="text-[#111827] leading-[1.5rem] font-[600] text-[16px]">Đơn hàng của bạn</h1>
                            <p class="text-[#374151] text-[.875rem] leading-[1.25rem] mt-[.5rem]">Hiển thị danh sách tất cả đơn hàng đã đăng ký</p>
                        </div>
                        <div class="min-[640px]:flex-none min-[640px]:mt-0 min-[640px]:ml-[4rem] mt-[1rem]">
                            <button type="button" class="text-[#fff] font-[600] text-[.875rem] leading-[1.25rem] text-center py-[.5rem] px-[.75rem] bg-[#0096fa] rounded-[.375rem]">Xuất đơn hàng</button>
                        </div>
                    </div>
                    <div class="flex justify-end">
                        <div class="min-[640px]:flex-none min-[640px]:mt-0 min-[640px]:ml-[4rem] mt-[1rem]">
                            <orderManageMenu></orderManageMenu>
                        </div>
                    </div>
                    <div class="mt-[1rem] flow-root">
                        <div class="overflow-x-auto">
                            <div class="align-middle min-w-[100%] inline-block">
                                <table class="min-w-[100%] indent-0 border-collapse bg-[#e6e6e6] rounded-[8px]">
                                    <thead>
                                        <tr class="border-b-[4px] border-[white]">
                                            <th scope="col" class="pl-[1rem] min-[640px]:pl-0 text-[#111827] font-[600] text-[.875rem] leading-[1.25rem] text-left pr-[.75rem] py-[.875rem]">Mã Đơn hàng</th>
                                            <th scope="col" class="min-[640px]:pl-0 text-[#111827] font-[600] text-[.875rem] leading-[1.25rem] text-left px-[.75rem] py-[.875rem]">Tên Khách hàng</th>
                                            <th scope="col" class="min-[640px]:pl-0 text-[#111827] font-[600] text-[.875rem] leading-[1.25rem] text-left px-[.75rem] py-[.875rem]">Thực hiện bởi</th>
                                            <th scope="col" class="min-[640px]:pl-0 text-[#111827] font-[600] text-[.875rem] leading-[1.25rem] text-left px-[.75rem] py-[.875rem]">Giá đơn hàng</th>
                                            <th scope="col" class="min-[640px]:pl-0 text-[#111827] font-[600] text-[.875rem] leading-[1.25rem] text-left px-[.75rem] py-[.875rem]">Trạng thái đơn hàng</th>
                                            <th scope="col" class="min-[640px]:pl-0 text-[#111827] font-[600] text-[.875rem] leading-[1.25rem] text-left pr-[1rem] py-[.875rem] relative"><span class="sr-only">Xoá</span></th>
                                        </tr>
                                    </thead>
                                    <tbody class="">
                                        <tr class="mx-[4px] border-b-[4px] border-[white]">
                                            <td class="pl-[1rem] min-[640px]:pl-0 text-[#111827] font-[500] text-[.875rem] leading-[1.25rem] pr-[.75rem] py-[1rem] whitespace-nowrap">1</td>
                                            <td class="text-[#6b7280] font-[500] text-[.875rem] leading-[1.25rem] px-[.75rem] py-[1rem] whitespace-nowrap">Front-end Developer</td>
                                            <td class="text-[#6b7280] font-[500] text-[.875rem] leading-[1.25rem] px-[.75rem] py-[1rem] whitespace-nowrap">FedEx</td>
                                            <td class="text-[#6b7280] font-[500] text-[.875rem] leading-[1.25rem] px-[.75rem] py-[1rem] whitespace-nowrap">860000Đ</td>
                                            <td class="text-[#6b7280] font-[500] text-[.875rem] leading-[1.25rem] px-[.75rem] py-[1rem] whitespace-nowrap">Đã giao</td>
                                            <td class="min-[640px]:pr-0 font-[500] text-[.875rem] leading-[1.25rem] text-right pr-[1rem] py-[1rem] whitespace-nowrap relative"><a href="#" class="text-[#0096fa] inherit">Edit<span class="sr-only">, Lindsay Walton</span></a>
                                            </td>
                                        </tr>
                                        <tr class="">
                                            <td class="pl-[1rem] min-[640px]:pl-0 text-[#111827] font-[500] text-[.875rem] leading-[1.25rem] pr-[.75rem] py-[1rem] whitespace-nowrap">1</td>
                                            <td class="text-[#6b7280] font-[500] text-[.875rem] leading-[1.25rem] px-[.75rem] py-[1rem] whitespace-nowrap">Front-end Developer</td>
                                            <td class="text-[#6b7280] font-[500] text-[.875rem] leading-[1.25rem] px-[.75rem] py-[1rem] whitespace-nowrap">FedEx</td>
                                            <td class="text-[#6b7280] font-[500] text-[.875rem] leading-[1.25rem] px-[.75rem] py-[1rem] whitespace-nowrap">860000Đ</td>
                                            <td class="text-[#6b7280] font-[500] text-[.875rem] leading-[1.25rem] px-[.75rem] py-[1rem] whitespace-nowrap">Đã giao</td>
                                            <td class="min-[640px]:pr-0 font-[500] text-[.875rem] leading-[1.25rem] text-right pr-[1rem] py-[1rem] whitespace-nowrap relative"><a href="#" class="text-[#0096fa] inherit">Edit<span class="sr-only">, Lindsay Walton</span></a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>

</template>

<script setup>
import orderManageMenu from '../components/drop-downs/order-manage-menu.vue';
</script>