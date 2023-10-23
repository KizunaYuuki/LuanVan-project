<template>
    <Header></Header>
    <main class="leading-[131%]">
        <div class="bg-[#ffffffbe] min-h-screen max-w-5xl mx-auto">
            <!-- PC -->
            <div class="min-[1024px]:block hidden mx-auto max-w-[1280px] py-[32px]">
                <div class="flex items-center border-b border-[#ecedef] min-h-[50px] mb-[32px] pb-[32px] w-full">
                    <!-- <a href="/shopping/product/7709523306101892395?q=iphone+14&amp;sca_esv=564125615&amp;rlz=1C5CHFA_enVN1030VN1031&amp;biw=1378&amp;bih=758&amp;prds=eto:11631040611031032597_0,pid:3664884782502962629,rsk:PC_8053804293482199477" tabindex="-1" data-ved="0ahUKEwidr9Cx1p-BAxUaB4gKHUzuALQQyJ0ECA4"><img class="r4m4nf" src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQV4X0Vmp5MVKv4eTBtp7lnzMCyIA0V2LsLTvhZb4Bla5X1avUvs_udIqxKOXl-44WFmG93OTBFZ33bv0pcRLAc3yfvqKS09AmTbx6IG5rskO35mp3gQIPI8Q&amp;usqp=CAY" data-atf="0" data-frt="0"></a> -->
                    <!-- Tiêu đề -->
                    <span class="leading-[28px] text-[22px]">So sánh Dịch vụ: <strong></strong></span>
                </div>

                <!-- content -->
                <div class="mx-auto max-w-5xl">
                    <!-- content -->
                    <div class="mt-[1rem] flow-root">
                        <div class="overflow-x-auto">
                            <div class="align-middle min-w-[100%] inline-block">
                                <div
                                    class="bg-[white] min-w-[100%] indent-0 border-[0.5px] rounded-[8px] border-separate border-spacing-0">
                                    <!-- Service Title  -->
                                    <section class="flex bg-gray-100 rounded-t-lg">
                                        <div class="flex grow">
                                            <div
                                                class="w-[15%] text-[#70757a] font-[600] text-[.95rem] leading-[1.25rem] text-left px-[.75rem] py-[.875rem]">
                                                Nhà cung cấp</div>
                                            <div
                                                class="grow text-[#70757a] font-[600] text-[.95rem] leading-[1.25rem] text-left px-[.75rem] py-[.875rem]">
                                                Tên dịch vụ</div>
                                            <div
                                                class="w-[19%] text-[#70757a] font-[600] text-[.95rem] leading-[1.25rem] text-left px-[.75rem] py-[.875rem]">
                                                Thời gian vận chuyển</div>
                                            <div
                                                class="w-[12%] text-[#111827] font-[600] text-[.95rem] leading-[1.25rem] text-left px-[.75rem] py-[.875rem]">
                                                Trọng lượng</div>
                                            <div
                                                class="w-[12%] text-[#111827] font-[600] text-[.95rem] leading-[1.25rem] text-left px-[.75rem] py-[.875rem]">
                                                Giá dịch vụ</div>
                                            <div
                                                class="w-[6%] text-[#70757a] font-[600] text-[.95rem] leading-[1.25rem] text-left pr-[1rem] py-[.875rem] relative">
                                            </div>
                                        </div>
                                    </section>

                                    <!-- Service Card -->
                                    <section class="">
                                        <template v-for="service in services" :key="service.service_id">
                                            <div class="flex hover:shadow hover:bg-[#0096fa0d] border-t-0 border-b-0 border-l border-r-0 hover:border-l-[#d30038]"
                                                :class="{ 'bg-red-50/[.6]': (service.promotion_price) }">
                                                <RouterLink :to="{
                                                    name: 'Service Details',
                                                    params: { id: service.service_id },
                                                }" class="grow">
                                                    <div class="flex">
                                                        <div
                                                            class="w-[15%] flex items-center text-ellipsis border-[#dadce0] border-t px-[.75rem] text-[#111827] font-[500] text-[.95rem] leading-[1.25rem] pr-[.75rem] py-[1rem] whitespace-nowrap">
                                                            <div class="flex items-center text-ellipsis">
                                                                <img :src="service.image" alt=""
                                                                    class="h-5 w-5 flex-shrink-0 rounded-full bg-slate-400 mr-2" />
                                                                <span>{{ service.provider_name }}</span>
                                                            </div>
                                                        </div>
                                                        <div
                                                            class="grow flex items-center text-ellipsis border-[#dadce0] border-t text-[#6b7280] font-[500] text-[.95rem] leading-[1.25rem] px-[.75rem] py-[1rem] whitespace-nowrap">
                                                            {{ service.service_name }}</div>
                                                        <div
                                                            class="w-[19%] flex items-center text-ellipsis border-[#dadce0] border-t text-[#6b7280] font-[500] text-[.95rem] leading-[1.25rem] px-[.75rem] py-[1rem] whitespace-nowrap">
                                                            {{ service.delivery_date }}</div>
                                                        <div
                                                            class="w-[12%] flex items-center text-ellipsis border-[#dadce0] border-t text-[#6b7280] font-[600] text-[.95rem] leading-[1.25rem] px-[.75rem] py-[1rem] whitespace-nowrap">
                                                            {{
                                                                (service.weight >= 1000 ? (service.weight / 1000.0) :
                                                                    service.weight).toLocaleString('vi-VN', {
                                                                        minimumFractionDigits: 0, // Số chữ số thập phân tối thiểu
                                                                        maximumFractionDigits: 0, // Số chữ số thập phân tối đa
                                                                    })
                                                            }}
                                                            <span v-if="service.weight >= 1000">kg</span>
                                                            <span v-else>g</span>
                                                        </div>

                                                        <div v-if="service?.price && service.promotion_price"
                                                            class="w-[12%] flex items-center text-ellipsis border-[#dadce0] border-t text-sky-400 font-[600] text-[.95rem] leading-[1.25rem] px-[.75rem] py-[1rem] whitespace-nowrap">
                                                            {{ (service.price - (service.price * service.promotion_price /
                                                                100)
                                                                > 0
                                                                ?
                                                                (service.price - (service.price * service.promotion_price /
                                                                    100)) :
                                                                0).toLocaleString('vi-VN', {
                                                                    style: 'currency',
                                                                    currency: 'VND'
                                                                }) }}</div>

                                                        <div v-else-if="service?.price"
                                                            class="w-[12%] flex items-center text-ellipsis border-[#dadce0] border-t text-[#6b7280] font-[500] text-[.95rem] leading-[1.25rem] px-[.75rem] py-[1rem] whitespace-nowrap">
                                                            {{ (service.price).toLocaleString('vi-VN', {
                                                                style: 'currency',
                                                                currency: 'VND'
                                                            }) }}
                                                        </div>

                                                        <div
                                                            class="w-[6%] flex items-center justify-between border-[#dadce0] border-t min-[640px]:pr-0 font-[500] text-[.95rem] leading-[1.25rem] text-right pr-[1rem] py-[1rem] whitespace-nowrap relative">
                                                            <div class="flex items-center mr-2">
                                                                <button
                                                                    class="rounded-full hover:bg-gray-200 w-[48px] h-[48px] flex items-center justify-center hover:rotate-180"
                                                                    @click.prevent="service.append = !service.append">
                                                                    <svg focusable="false" width="24" height="24"
                                                                        viewBox="0 0 24 24"
                                                                        class="fill-current text-[#0096fa]">
                                                                        <path
                                                                            d="M12 16.41l-6.71-6.7 1.42-1.42 5.29 5.3 5.29-5.3 1.42 1.42z">
                                                                        </path>
                                                                    </svg>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div v-show="service.append"
                                                        class="mx-auto text-[15px] text-gray-600 flex">
                                                        <div class="w-[15%]">
                                                        </div>

                                                        <div v-if="service?.from" class="grow p-[12px] pb-4 font-[600]">
                                                            <span class="py-4">{{ service.from.province }} ,{{
                                                                service.from.district
                                                            }}</span>
                                                            <div class="py-4 font-medium">Đến</div>
                                                            <span class="py-4">{{ service.to.province }}, {{
                                                                service.to.district
                                                            }}</span>
                                                        </div>

                                                        <!-- Them vao gio -->
                                                        <div class="hidden">
                                                            <button @click.prevent="true"
                                                                class="inline-flex items-center justify-center shrink-0 flex-row py-[12px] px-[16px] m-[4px] h-[40px] w-[40px] z-10 text-white rounded-[100px] hover:bg-[#ebeff5]">
                                                                <span
                                                                    class="w-[24px] h-[24px] inline-block shrink-0 relative">
                                                                    <svg width="24" height="24" aria-hidden="true"
                                                                        class="fill-current text-[#d83737]"
                                                                        preserveAspectRatio="none" viewBox="0 0 24 24">
                                                                        <path
                                                                            d="M15.7 3c-1.4 0-2.6.4-3.7 1.2a6.1 6.1 0 0 0-8.2.8 7 7 0 0 0 0 9.2c.7 1 1.5 1.7 2.9 3l2.8 2.4.8.7c.5.5 1 .7 1.7.7.6 0 1.2-.2 1.7-.6 2-1.7 5.3-4.7 6.6-6.2a7 7 0 0 0-.1-9.2 6.2 6.2 0 0 0-4.5-2m0 1.8c1.1 0 2.3.5 3.2 1.4a5 5 0 0 1 0 6.8 88.2 88.2 0 0 1-6.9 6.2l-.6-.2-.8-.7L8 15.8c-1.4-1.2-2-2-2.8-2.8a5 5 0 0 1 0-6.8 4.5 4.5 0 0 1 6.5 0l.4.5.4-.5c1-.9 2-1.4 3.3-1.4">
                                                                        </path>
                                                                    </svg>

                                                                    <svg width="24" height="24" aria-hidden="true"
                                                                        class="fill-current text-[#ffd2d2] w-full h-full"
                                                                        preserveAspectRatio="none" viewBox="0 0 24 24">
                                                                        <path
                                                                            d="M15.3 4.1c-1.2 0-2.3.4-3.3 1a5.6 5.6 0 00-7.4.7 6 6 0 000 8.2c.7.7 1.3 1.4 2.6 2.5l2.5 2.2.7.6a2.4 2.4 0 003.2 0c1.7-1.4 4.7-4 5.8-5.3a6 6 0 000-8.2 5.6 5.6 0 00-4.1-1.7">
                                                                        </path>
                                                                    </svg>
                                                                </span>
                                                            </button>
                                                        </div>

                                                        <!-- Đánh giá sao -->
                                                        <div class="w-[12%] px-[12px] flex items-center">
                                                            <div v-show="service?.totalCount">
                                                                <div :data-tooltip="service.totalCount"
                                                                    class="tooltip text-[12px] text-[#757575] inline-flex items-center">
                                                                    <span class="mr-[4px]">{{
                                                                        (parseFloat(service.average_rate)).toLocaleString('vi-VN',
                                                                            {
                                                                                minimumFractionDigits: 1,
                                                                                maximumFractionDigits: 1,
                                                                            }) }}</span>
                                                                    <svg width="14" height="14"
                                                                        class="fill-current text-[#fbbc04]"
                                                                        data-testid="star-svg" preserveAspectRatio="none"
                                                                        viewBox="0 0 24 24">
                                                                        <path
                                                                            d="m12 20.6-5.86 3.23c-.7.38-1.57.1-1.94-.63-.15-.3-.2-.63-.14-.95l1.12-6.82L.43 10.6a1.55 1.55 0 0 1-.02-2.13c.22-.23.5-.39.82-.43l6.55-1 2.93-6.2a1.4 1.4 0 0 1 2.58 0l2.93 6.2 6.55 1a1.5 1.5 0 0 1 1.21 1.7c-.04.32-.19.63-.41.86l-4.75 4.83 1.12 6.82c.14.81-.39 1.59-1.17 1.73-.3.05-.63 0-.9-.15L12 20.6Z">
                                                                        </path>
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div
                                                            class="w-[18%] px-[12px] font-medium text-gray-500 flex items-center">
                                                            <div v-show="service?.promotion_price">
                                                                Khuyến mãi
                                                                <br />
                                                                Giảm {{ service.promotion_price }}%
                                                            </div>
                                                        </div>
                                                    </div>
                                                </RouterLink>
                                            </div>
                                        </template>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Moblie -->
            <div class="lg:hidden">
                <!-- Ten so sanh -->
                <div class="flex items-center min-h-[50px] mb-[32px] pb-[32px] p-[22px] w-full">
                    <!-- <a href="/shopping/product/7709523306101892395?q=iphone+14&amp;sca_esv=564125615&amp;rlz=1C5CHFA_enVN1030VN1031&amp;biw=1378&amp;bih=758&amp;prds=eto:11631040611031032597_0,pid:3664884782502962629,rsk:PC_8053804293482199477" tabindex="-1" data-ved="0ahUKEwidr9Cx1p-BAxUaB4gKHUzuALQQyJ0ECA4"><img class="r4m4nf" src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQV4X0Vmp5MVKv4eTBtp7lnzMCyIA0V2LsLTvhZb4Bla5X1avUvs_udIqxKOXl-44WFmG93OTBFZ33bv0pcRLAc3yfvqKS09AmTbx6IG5rskO35mp3gQIPI8Q&amp;usqp=CAY" data-atf="0" data-frt="0"></a> -->
                    <!-- Tiêu đề -->
                    <span class="leading-[28px] text-[18px]">So sánh Dịch vụ: <br class="sm:hidden" />
                        <strong></strong></span>
                </div>

                <!-- Noi dung -->
                <div class="px-[22px]">
                    <div class="focus-view-fade">
                        <div class=" text-[#5e5e5e] text-[12px] leading-[18px] py-[16px]" data-hveid="42"
                            jscontroller="d5bMlb">
                            <template v-for="service in services">
                                <div class="flex justify-between border-b border-[#d2d2d2]">
                                    <div>
                                        <div class="my-[5px]">{{ service.service_name }}</div>
                                        <span
                                            class="font-[600] pr-[4px] whitespace-nowrap text-[16px] leading-[20px] text-[#1f1f1f]">{{
                                                (service.price).toLocaleString('vi-VN',
                                                    {
                                                        style: 'currency',
                                                        currency: 'VND'
                                                    }) }}</span>
                                        <div class="my-[5px]">Thời gian: {{ service.delivery_date }}</div>
                                        <div class="my-[5px]">
                                            <a class="text-[#1f1f1f] inline-block font-[500]"
                                                href="/url?q=https://hoanghamobile.com/dien-thoai-di-dong/apple-iphone-14-128gb-chinh-hang-vn-a%3Fsrsltid%3DAfmBOootMpsfMLa5b3rd_Lv8AQfCicStgJRrnKb9Sg62iGHgV3vGmwcDSYk&amp;sa=U&amp;ved=0ahUKEwi71vDp-62BAxVWklYBHcTIAIQQ2ykIKw&amp;usg=AOvVaw3WcTT7e0D-fTUpuQVntYjv">
                                                {{ service.provider_name }}</a>
                                        </div>
                                    </div>
                                </div>
                            </template>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>
import Header from '../components/Header.vue';
import { ref, onBeforeMount } from "vue";
import { RouterLink } from 'vue-router';
import { getServiceById, getInfoReviews } from "@/services/service.service";
import { getPromotions } from "@/services/promotion.service";
import { getLocationsByServicId } from "@/services/location.service";
import getTime from 'date-fns/getTime'

// value
const services = ref([]);

// toast
import { useToast } from "vue-toastification";
// Get toast interface
const toast = useToast();

import { useRouter } from 'vue-router'
import { fi } from 'date-fns/locale';
const router = useRouter()


const getServiceByIdAxios = async (service_id) => {
    const { data, error } = await getServiceById(service_id);

    if (data) {
        console.log(data);
        services.value.push(data);
        await getLocationsByServicIdAxios(data.service_id);
    }

    if (error) {
        return data;
    }
};

const getCompareServices = async () => {
    // Lấy id service compare từ localhost
    let compareServices = localStorage.getItem('compareProductList');
    let temp = JSON.parse(compareServices);
    if (temp.length < 2) {
        router.push(`/`);
    }
    for (let i = 0; i < temp.length; i++) {
        getServiceByIdAxios(temp[i]);
        console.log(services.value);
    }

    await getInfoReviewsAxios();
    await getPromotionsAxios();
}

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

        // console.log(services.value);
    }

    if (error) {
        services.value = JSON.stringify(error, null, 2);
    }
};

const getInfoReviewsAxios = async () => {
    const { data, error } = await getInfoReviews();

    if (data) {
        console.log(data);
        for (let i = 0; services.value.length > i; i++) {
            for (let j = 0; data.length > j; j++) {
                if (services.value[i].service_id === data[j].service_id) {
                    services.value[i].average_rate = data[j].average_rate;
                    services.value[i].totalCount = data[j].totalCount;
                }
            }
        }
        console.log(services.value);
    }

    if (error) {
        services.value = JSON.stringify(error, null, 2);
    }
};

const getLocationsByServicIdAxios = async (service_id) => {
    const { data, error } = await getLocationsByServicId(service_id);

    if (data) {
        for (let i = 0; i < services.value.length; i++) {
            data.forEach(element => {
                if (element.service_id === services.value[i].service_id) {
                    if (element.type === "TO") {
                        services.value[i].to = element;
                    }
                    else {
                        services.value[i].from = element;
                    }
                }
            });
        }

    }

    if (error) {
        // console.log(error);
    }
};

onBeforeMount(() => {
    // run function
    getCompareServices();
})
</script>