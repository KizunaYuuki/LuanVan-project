<template>
    <main>
        <!-- Van chuyen hanh khack - Hang khong -->
        <!-- <h1 class="text-[24px] text-[#202124] font-[500] text-center">Khám phá những dịch vụ của chúng tôi</h1> -->

        <!-- <div class="bg-[#0096fa0d] py-6">
            <h2 class="text-[24px] text-[#202124] font-[500] text-center mb-[16px]">Các chuyến bay phổ biến</h2>
            <section class="flex flex-wrap content-center justify-center items-center">
                <passengerProductCard></passengerProductCard>
                <passengerProductCard></passengerProductCard>
                <passengerProductCard></passengerProductCard>
                <passengerProductCard></passengerProductCard>
                <passengerProductCard></passengerProductCard>
                <passengerProductCard></passengerProductCard>
                <passengerProductCard></passengerProductCard>
            </section>
        </div> -->

        <!-- Gợi ý dịch vụ -->
        <div class="py-6">
            <h2 class="text-[24px] text-[#202124] font-[500] text-center mb-[16px]">Những dịch vụ vận chuyển được gợi ý dành
                riêng cho
                bạn</h2>
            <section class="flex flex-wrap content-center justify-center items-center">
                <freightProductCard></freightProductCard>
            </section>
        </div>


        <div class="py-6 bg-[#FFF7F5]">
            <h2 class="text-[24px] text-[#202124] font-[500] text-center mb-[16px]">Vận chuyển hàng hoá Quốc tế</h2>
            <section class="flex flex-wrap content-center justify-center items-center">
                <freightProductCard></freightProductCard>
                <freightProductCard></freightProductCard>
                <freightProductCard></freightProductCard>
                <freightProductCard></freightProductCard>
            </section>
        </div>

        <div class="bg-[#0096fa0d] py-6">
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
            <h2 class="text-[24px] text-[#202124] font-[500] text-center mb-[16px]">Đăng ký dịch vụ theo yêu cầu của bạn - Tuỳ chọn</h2>
            <h3>Xin chào. Bạn vận chuyển hàng từ đâu?</h3>
            <form action="POST">

            </form>
        </div> -->
    </main>
    <ServiceDetails>
        
    </ServiceDetails>
</template>

<script setup>
import { ref } from "vue";
import { useGtag } from "vue-gtag-next";
import freightProductCard from "../components/cards/freight-product-card.vue";
import passengerProductCard from "../components/cards/passenger-product-card.vue";
import domesticCard from "../components/cards/domestic-card.vue";
import ServiceDetails from "./ServiceDetails.vue";
const { pageview } = useGtag()
const track = () => {
    pageview({ page_path: "/about" });
};
track()
</script>