<template>
    <main>
        <section class="flex flex-col max-w-[1024px] mx-auto my-[16px] border border-[#dadce0] rounded-[4px]">
            <ul>
                <!-- Nội dụng -->
                <li>
                    <div
                        class="cursor-pointer w-full border-b border-[#dadce0] p-[16px] mb-[-1px] min-[1024px]:h-[74px] text-[14px] font-[400] text-[#70757a] flex items-center">
                        <!-- Brand -->
                        <div class="w-[68px]">
                            <img src="https://www.gstatic.com/flights/airline_logos/70px/VJ.png" width="35" height="35"
                                alt="Thương hiệu của nhà cung cấp">
                        </div>

                        <!-- Ten dich vu -->
                        <div class="w-[300px]">
                            <h3>Vận chuyển Gia xúc - Sống</h3>
                            <h3>Công Ty Vận Tải Trường Giang</h3>
                        </div>

                        <!-- Chi phí -->
                        <div class="w-[200px]">
                            <span class="font-[500]">
                                {{ (860000).toLocaleString('vi-VN', {
                                    style: 'currency',
                                    currency: 'VND'
                                }) }}
                            </span>
                        </div>

                        <!-- Chi phí -->
                        <div class="min-[1024px]:block hidden w-[300px]">
                            <h3>Từ Hậu Giang</h3>
                            <h3>Đến TP. Hồ Chí Minh</h3>
                        </div>

                        <!-- Xoa -->
                        <div class="w-[122px] flex justify-center">
                            <button>Xoá</button>
                        </div>
                    </div>
                </li>
                                
            </ul>
        </section>
    </main>
</template>