<template>
    <Header></Header>
    <main v-show="service">
        <div class="bg-[#ffffffbe]">
            <div class="pt-6">
                <!-- Product info -->
                <div
                    class="mx-auto max-w-2xl pb-16 pt-10 lg:grid lg:max-w-5xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:pb-24 lg:pt-16">
                    <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                        <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{{
                            service?.service_name }}</h1>
                    </div>

                    <div class="mt-4 lg:row-span-3 lg:mt-0">
                        <h2 class="sr-only">Thông tin dịch vụ</h2>
                        <p v-if="service" class="text-3xl tracking-tight text-gray-900">
                            {{ (service.price).toLocaleString('vi-VN', {
                                style: 'currency',
                                currency: 'VND'
                            }) }}
                        </p>

                        <!-- Reviews -->
                        <div class="mt-6">
                            <h3 class="sr-only">Reviews</h3>
                            <div class="flex items-center">
                                <div class="flex items-center">
                                    <StarIcon v-for="rating in [0, 1, 2, 3, 4]" :key="rating"
                                        :class="[reviewsCal.average > rating ? 'text-gray-900' : 'text-gray-200', 'h-5 w-5 flex-shrink-0']"
                                        aria-hidden="true" />
                                </div>
                                <p class="sr-only">{{ reviewsCal.average }} out of 5 stars</p>
                                <a href="#reviews"
                                    class="ml-3 text-sm font-medium text-[#0095f9a7] hover:text-[#0097f9] hover:underline">
                                    {{ reviewsCal.totalCount }} đánh giá
                                </a>
                            </div>
                        </div>

                        <form class="mt-10">
                            <!-- Colors -->
                            <!-- <div>
                                <h3 class="text-sm font-medium text-gray-900">Color</h3>

                                <RadioGroup v-model="selectedColor" class="mt-4">
                                    <RadioGroupLabel class="sr-only">Choose a color</RadioGroupLabel>
                                    <div class="flex items-center space-x-3">
                                        <RadioGroupOption as="template" v-for="color in product.colors" :key="color.name"
                                            :value="color" v-slot="{ active, checked }">
                                            <div
                                                :class="[color.selectedClass, active && checked ? 'ring ring-offset-1' : '', !active && checked ? 'ring-2' : '', 'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none']">
                                                <RadioGroupLabel as="span" class="sr-only">{{ color.name }}
                                                </RadioGroupLabel>
                                                <span aria-hidden="true"
                                                    :class="[color.class, 'h-8 w-8 rounded-full border border-black border-opacity-10']" />
                                            </div>
                                        </RadioGroupOption>
                                    </div>
                                </RadioGroup>
                            </div> -->

                            <!-- Sizes -->
                            <!-- <div class="mt-10">
                                <div class="flex items-center justify-between">
                                    <h3 class="text-sm font-medium text-gray-900">Size</h3>
                                    <a href="#" class="text-sm font-medium text-indigo-600 hover:text-indigo-500">Size
                                        guide</a>
                                </div>

                                <RadioGroup v-model="selectedSize" class="mt-4">
                                    <RadioGroupLabel class="sr-only">Choose a size</RadioGroupLabel>
                                    <div class="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                                        <RadioGroupOption as="template" v-for="size in product.sizes" :key="size.name"
                                            :value="size" :disabled="!size.inStock" v-slot="{ active, checked }">
                                            <div
                                                :class="[size.inStock ? 'cursor-pointer bg-white text-gray-900 shadow-sm' : 'cursor-not-allowed bg-gray-50 text-gray-200', active ? 'ring-2 ring-indigo-500' : '', 'group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6']">
                                                <RadioGroupLabel as="span">{{ size.name }}</RadioGroupLabel>
                                                <span v-if="size.inStock"
                                                    :class="[active ? 'border' : 'border-2', checked ? 'border-indigo-500' : 'border-transparent', 'pointer-events-none absolute -inset-px rounded-md']"
                                                    aria-hidden="true" />
                                                <span v-else aria-hidden="true"
                                                    class="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200">
                                                    <svg class="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                                        viewBox="0 0 100 100" preserveAspectRatio="none"
                                                        stroke="currentColor">
                                                        <line x1="0" y1="100" x2="100" y2="0"
                                                            vector-effect="non-scaling-stroke" />
                                                    </svg>
                                                </span>
                                            </div>
                                        </RadioGroupOption>
                                    </div>
                                </RadioGroup>
                            </div> -->

                            <!-- Button -->
                            <div class="">
                                <RouterLink :to="{
                                    name: 'Create Order',
                                    params: {
                                        service_id: props.id,
                                    },
                                }"
                                    class="mt-10 flex w-[100%] items-center justify-center border border-transparent px-[16px] py-[8px] font-medium text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 leading-6 text-base shadow rounded-md bg-[#0096faee] hover:bg-[#0096fa]">
                                    <div class="">
                                        Đăng ký dịch vụ</div>
                                </RouterLink>
                                <button @click="createCartAxios(user_id)" type="button"
                                    class="mt-10 flex w-[100%] items-center justify-center border border-transparent px-[16px] py-[8px] font-medium text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 leading-6 text-base shadow rounded-md bg-[#0096faee] hover:bg-[#0096fa]">Thêm
                                    vào giỏ hàng</button>
                            </div>
                        </form>

                        <br />
                        <!-- Related Product -->
                        <div v-show="relatedProduct?.service_id">
                            <h2 class="text-2xl py-4">Dịch vụ tương tự</h2>
                            <div class="p-2 bg-gray-100 rounded-lg">
                                <RouterLink :to="{
                                    name: 'Service Details',
                                    params: { id: relatedProduct?.service_id },
                                }" class="flex p-2 bg-white rounded-lg">
                                    <div
                                        class="flex items-center h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                        <img :src="relatedProduct?.image" class="w-full flex-shrink-0 bg-[#607d8b]" />
                                    </div>

                                    <div class="ml-4 flex flex-1 flex-col">
                                        <div>
                                            <div class="flex justify-between text-base font-medium text-gray-900">
                                                <div class="text-ellipsis overflow-hidden">
                                                    <h3 class="">
                                                        {{ relatedProduct?.service_name }}
                                                    </h3>
                                                </div>
                                            </div>
                                            <p class="mt-1 text-sm text-gray-500">{{
                                                relatedProduct?.provider_name
                                            }}</p>
                                        </div>
                                        <div class="flex justify-end">
                                            <p class="font-medium text-gray-500">{{
                                                (relatedProduct?.price || 0).toLocaleString('vi-VN',
                                                    {
                                                        style: 'currency',
                                                        currency: 'VND'
                                                    }) }}</p>
                                        </div>
                                    </div>
                                </RouterLink>
                            </div>
                        </div>


                    </div>

                    <div class="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">

                        <!-- Thông tin dịch vụ -->
                        <section class="flex flex-wrap content-center">
                            <div class="text-[#757575]">
                                <div class="text-[16px] my-[24px] leading-loose">
                                    <h2 class="font-[500]">Thông tin dịch vụ</h2>
                                    <div v-if="service" class="mt-4">
                                        <ul role="list" class="list-disc space-y-2 pl-4 text-gray-700">
                                            <li class="">
                                                Nhà cung cấp:
                                                <span class="text-[#0096fa] font-[500] hover:underline">{{
                                                    service.provider_name }}</span>
                                            </li>
                                            <li class="">
                                                Thời gian: <span class="font-[500]">{{ service.delivery_date }}</span>
                                            </li>
                                            <li class="">
                                                Khối lượng: <span class="font-[500]">&le; {{ service.weight }}
                                                    <span>kg</span></span>
                                            </li>
                                            <li class="" v-if="from">
                                                Gởi hàng từ: <span class="font-[500]">{{ from.district }}, {{ from.province
                                                }}</span>
                                            </li>
                                            <li class="" v-if="to">
                                                Gởi hàng đến: <span class="font-[500]">{{ to.district }}, {{ to.province
                                                }}</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <!-- Description and details -->
                        <div>
                            <h3 class="sr-only">Mô tả</h3>

                            <div v-if="service" class="space-y-6">
                                <p class="text-base text-gray-900">{{ service.description }}</p>
                            </div>
                        </div>

                        <!-- Bình luận - Đánh giá -->
                        <section id="reviews" class="mt-[32px] pt-[32px] border-t">
                            <div class="text-[#757575]">
                                <div class="mb-[16px]">
                                    <h1 class="text-[24px] font-[500] py-[8px] flex justify-between">Xếp hạng và Đánh giá
                                        <button @click="openReviewForm()"
                                            class="hover:scale-[1.03] transition-all duration-[0.3s] ease-in-out delay-[0ms] my-[8px] inline-flex items-center px-[8px] py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-[#0096faee] hover:bg-[#0096fa]">
                                            <span class="inline-flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    fill="currentColor" class="bi bi-pen" viewBox="0 0 16 16">
                                                    <path
                                                        d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z" />
                                                </svg>
                                                <strong class="mx-[4px]">Viết đánh giá</strong>
                                            </span>
                                        </button>
                                    </h1>
                                    <span class="text-[18px] text-[#757575] font-[500] inline-flex py-[8px]">
                                        <span class="mr-[4px]">{{
                                            (reviewsCal.average || 0).toLocaleString('vi-VN', {
                                                minimumFractionDigits: 1, // Số chữ số thập phân tối thiểu
                                                maximumFractionDigits: 1, // Số chữ số thập phân tối đa
                                            }) }}</span>
                                        <svg width="24" height="24" viewBox="0 0 24 24" focusable="false"
                                            class="fill-current text-[#fbbc04]">
                                            <path
                                                d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z">
                                            </path>
                                        </svg>
                                        <span class="ml-[4px] overflow-hidden text-ellipsis whitespace-nowrap">
                                            ({{
                                                (reviewsCal.totalCount).toLocaleString('vi-VN')
                                            }}) đánh giá</span>
                                    </span>

                                    <h2 class="text-[16px] py-[8px]">Xếp hạng theo</h2>
                                    <div class="inline-block">
                                        <button @click="newestSort()"
                                            :class="{ 'border-[#d2e3fc] hover:bg-[#d2e3fc] text-[#1558d6] mr-[6px] my-[6px] bg-[#e8f0fe]': isNewest }"
                                            class="text-[12px] h-[36px] inline-flex items-center px-[12px] rounded-full border mr-[6px] my-[6px] hover:bg-[#f8f9fa]">
                                            <span>Mới nhất</span>
                                        </button>
                                        <button @click="highestPriceSort()"
                                            :class="{ 'border-[#d2e3fc] hover:bg-[#d2e3fc] text-[#1558d6] mr-[6px] my-[6px] bg-[#e8f0fe]': isHightestPrice }"
                                            class="text-[12px] h-[36px] inline-flex items-center px-[12px] rounded-full border mr-[6px] my-[6px] hover:bg-[#f8f9fa]">
                                            <span>Cao nhất</span>
                                        </button>
                                        <button @click="lowestPriceSort()"
                                            :class="{ 'border-[#d2e3fc] hover:bg-[#d2e3fc] text-[#1558d6] mr-[6px] my-[6px] bg-[#e8f0fe]': isLowestPrice }"
                                            class="text-[12px] h-[36px] inline-flex items-center px-[12px] rounded-full border mr-[6px] my-[6px] hover:bg-[#f8f9fa]">
                                            <span>Thấp nhất</span>
                                        </button>
                                    </div>
                                </div>

                                <!-- Comment -->
                                <div class="my-[4px]">
                                    <div v-for="review in reviews">
                                        <h2 class="text-[16px] font-[600] flex items-center justify-between py-[8px]">
                                            <div class="flex items-end">
                                                <span class="mr-[8px]">
                                                    <svg class="border fill-current text-[#70757a] inline-block rounded-full ring-2 ring-white"
                                                        width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                                        <path
                                                            d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z">
                                                        </path>
                                                    </svg>

                                                </span>
                                                <span>{{ review.name }}</span>
                                            </div>
                                            <Menu as="div" class="relative inline-block text-left">
                                                <div>
                                                    <MenuButton
                                                        class="inline-flex w-full justify-center gap-x-1.5 rounded-full px-3 py-3 text-sm font-semibold hover:shadow-sm hover:bg-[#cfcfcf]">
                                                        <svg width="24" height="24"
                                                            class="fill-current text-[#70757a] cursor-pointer"
                                                            focusable="false" xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24">
                                                            <path
                                                                d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z">
                                                            </path>
                                                        </svg>
                                                        <!-- <ChevronDownIcon class="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" /> -->
                                                    </MenuButton>
                                                </div>

                                                <transition enter-active-class="transition ease-out duration-100"
                                                    enter-from-class="transform opacity-0 scale-95"
                                                    enter-to-class="transform opacity-100 scale-100"
                                                    leave-active-class="transition ease-in duration-75"
                                                    leave-from-class="transform opacity-100 scale-100"
                                                    leave-to-class="transform opacity-0 scale-95">
                                                    <MenuItems
                                                        class="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                        <div class="py-1">
                                                            <MenuItem v-slot="{ active }">
                                                            <a href="#"
                                                                :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Báo
                                                                bài đánh giá vi phạm</a>
                                                            </MenuItem>
                                                        </div>
                                                        <div class="py-1"
                                                            v-if="isAuthenticated && user.email === review.email">
                                                            <MenuItem v-slot="{ active }">
                                                            <button @click="deteleReviewAxios(review.review_id)"
                                                                :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Xoá</button>
                                                            </MenuItem>
                                                        </div>
                                                    </MenuItems>
                                                </transition>
                                            </Menu>
                                        </h2>
                                        <div class="flex items-center">
                                            <span>
                                                <div class="flex items-center">
                                                    <StarIcon v-for="rating in [0, 1, 2, 3, 4]" :key="rating"
                                                        :class="[review.rate > rating ? 'text-gray-900' : 'text-gray-200', 'h-5 w-5 flex-shrink-0']"
                                                        aria-hidden="true" />
                                                </div>
                                            </span>
                                            <span class="ml-3">
                                                {{ formatDistanceToNow(
                                                    new Date(review.reviews_created),
                                                    { includeSeconds: true, locale: vi },
                                                ) }} trước
                                            </span>
                                            <span
                                                class="text-[12px] h-[24px] inline-flex items-center px-[12px] rounded-[4px] border m-[6px] hover:bg-[#f8f9fa]">Mới</span>
                                        </div>
                                        <p>{{ review.comment }}</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal write review -->
        <TransitionRoot as="template" :show="openWriteReviewModal">
            <Dialog as="div" class="relative z-10" @close="openWriteReviewModal = false">
                <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100"
                    leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
                    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </TransitionChild>

                <div class="fixed inset-0 z-10 w-screen overflow-y-auto bg-[#0096fa40]">
                    <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <TransitionChild as="template" enter="ease-out duration-300"
                            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200"
                            leave-from="opacity-100 translate-y-0 sm:scale-100"
                            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                            <DialogPanel
                                class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                    <div class="">
                                        <div class="mt-3 text-center sm:mt-0 sm:text-left">
                                            <DialogTitle as="h3" class="text-[24px] font-semibold leading-6 text-gray-900">
                                                Viết đánh giá</DialogTitle>

                                            <div class="mt-2">
                                                <!-- Content Review Form -->
                                                <form>
                                                    <div class="space-y-12">
                                                        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                                            <div class="col-span-full">
                                                                <!-- Đánh giá  -->
                                                                <div
                                                                    class="form-group fs-6 mb-2 d-flex justify-content-end">
                                                                    <star-rating :show-rating="false" :increment="1"
                                                                        v-model:rating="review.rate" :star-size="32" />
                                                                </div>
                                                            </div>

                                                            <div class="col-span-full">
                                                                <label for="about"
                                                                    class="block text-sm font-medium leading-6 text-gray-900">Bình
                                                                    luận</label>
                                                                <div class="mt-2">
                                                                    <textarea v-model="review.comment" id="about"
                                                                        name="about" rows="3"
                                                                        class="pl-[14px] block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                                                </div>
                                                                <p class="mt-3 text-sm leading-6 text-gray-600">Viết suy
                                                                    nghĩ của bạn về dịch vụ này.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                    <button @click="submitCreateReviewHandle(review, user_id)" type="button"
                                        class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto">Submit</button>
                                    <button type="button"
                                        class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                        @click="openWriteReviewModal = false" ref="cancelButtonRef">Huỷ</button>
                                </div>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </TransitionRoot>
    </main>
</template>

<script setup>
import Header from '../components/Header.vue';
import { RouterLink } from 'vue-router'
import { ref } from "vue";
import domesticCard from "../components/cards/domestic-card.vue";
import { StarIcon } from '@heroicons/vue/20/solid'
import { ExclamationTriangleIcon } from '@heroicons/vue/24/outline'
import {
    RadioGroup, RadioGroupLabel, RadioGroupOption, Menu, MenuButton, MenuItem, MenuItems,
    Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot
} from '@headlessui/vue'
import menuButton from "../components/buttons/menu-button.vue";
import { getServiceById } from "@/services/service.service";
import { createReview, getReviewsByServiceId, deteleReview } from "@/services/review.service";
import { useAuth0 } from "@auth0/auth0-vue";
import { format } from "date-fns";
import { vi } from 'date-fns/locale'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import StarRating from 'vue-star-rating';
import { getUserByEmail, createUser } from "@/services/user.service";
import { getLocationsByServicId } from "@/services/location.service";
import { createCart } from "@/services/cart.service";

// toast
import { useToast } from "vue-toastification";
// Get toast interface
const toast = useToast();

const openWriteReviewModal = ref(false)

// login if loggin yet
const { loginWithRedirect } = useAuth0();
const handleLogin = () => {
    loginWithRedirect({
        appState: {
            target: window.location.pathname,
        },
    });
};

// Xác thực người dùng đã đăng nhập chưa 
const { isAuthenticated } = useAuth0();

// get the token
const { getAccessTokenSilently } = useAuth0();

// get the information user
const { user } = useAuth0();
const props = defineProps({
    id: '' // Service Id
})

// variables
const isNewest = ref(true);
const isHightestPrice = ref(false);
const isLowestPrice = ref(false);

const to = ref('');
const from = ref('');

const service = ref();
const relatedProduct = ref();
const reviews = ref([]);
const unOrderReviews = ref();
const user_id = ref('');
const review = ref(
    {
        user_id: 1,
        service_id: 1,
        rate: 0,
        comment: ""
    }
);
const reviewsCal = ref(
    {
        href: '#',
        average: 0,
        totalCount: ""
    }
);
import axios from "axios";
const apiServerUrl = import.meta.env.VITE_API_SERVER_URL;
const getRelatedProductAxios = async (provider, service_type, weight) => {
    // console.log(`${apiServerUrl}/related-product?provider=${provider}&service_type=${service_type}&weight=${weight}`);
    await axios.get(`${apiServerUrl}/related-product?provider=${provider}&service_type=${service_type}&weight=${weight}`)
        .then(function (response) {
            // handle success
            console.log(response.data);
            relatedProduct.value = response.data
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });
};

const deteleReviewAxios = async (id) => {
    const accessToken = await getAccessTokenSilently();
    const { data, error } = await deteleReview(accessToken, id);

    // loggin if loggin yet exists
    if (!isAuthenticated.value) {
        handleLogin();
        return
    }

    if (data) {
        // console.log(data);
        let tempData = reviews.value
        reviews.value = []
        for (let i = 0; i < tempData.length; i++) {
            if (tempData[i].review_id !== id) {
                reviews.value.push(tempData[i])
            }
        }
    }

    if (error) {
        // console.log(error);
    }
};

const getServiceByIdAxios = async (id) => {
    const { data, error } = await getServiceById(id);

    if (data) {
        service.value = data;
        // console.log(data.provider_name, data.service_types_name, data.weight);
        getRelatedProductAxios(data.provider_name, data.service_types_name, data.weight);
        // console.log(service.value);
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
                to.value = element;
            }
            else {
                from.value = element;
            }
        });
    }

    if (error) {
        // console.log(error);
    }
};


const createReviewAxios = async (reviewData) => {
    const accessToken = await getAccessTokenSilently();
    const { data, error } = await createReview(accessToken, reviewData);
    if (data) {
        getReviewByServiceIdAxios(props.id);
        // Xoa data
        review.value.rate = 0;
        review.value.comment = '';

        toast.success("Đã thêm đánh giá cho dịch vu", { timeout: 3000 });
        // console.log(review.value);
    }
    if (error) {
        // result.value = JSON.stringify(error, null, 2);
    }
    openWriteReviewModal.value = false;
};

const getReviewByServiceIdAxios = async (id) => {
    const { data, error } = await getReviewsByServiceId(id);

    if (data) {
        reviews.value = data;
        unOrderReviews.value = data;
        // console.log(reviews.value);
        reviewsCal.value.totalCount = data.length;

        data.forEach((element) => {
            reviewsCal.value.average = element.rate + reviewsCal.value.average;
        });
        reviewsCal.value.average = reviewsCal.value.average / data.length;
        // console.log(reviewsCal.value)
    }

    if (error) {
        // result.value = JSON.stringify(error, null, 2);
    }
};

const newestSort = async () => {
    if (isNewest.value === false) {

        reviews.value = unOrderReviews.value;

        // update status
        isLowestPrice.value = false;
        isNewest.value = true;
        isHightestPrice.value = false;
    }
};

const highestPriceSort = async () => {
    if (isHightestPrice.value === false) {

        reviews.value = unOrderReviews.value;
        reviews.value = reviews.value.toSorted((a, b) => b.rate - a.rate);

        // update status
        isLowestPrice.value = false;
        isNewest.value = false;
        isHightestPrice.value = true;
    }
};

const lowestPriceSort = async () => {
    if (isLowestPrice.value === false) {

        reviews.value = unOrderReviews.value;
        reviews.value = reviews.value.toSorted((a, b) => a.rate - b.rate);

        // update status
        isLowestPrice.value = true;
        isNewest.value = false;
        isHightestPrice.value = false;
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
        // console.log(data);
        // console.log(user_id.value);
    } else {
        const { data, error } = await createUser(accessToken, userData);
        if (data) {
            user_id.value = data.id;
            // console.log(data);
            // console.log(user_id.value);
        }
    }

    if (error) {
        // console.log(error.message);
    }
};

const createCartAxios = async (user_id) => {
    // loggin if loggin yet exists
    if (!isAuthenticated.value) {
        handleLogin();
    } else {
        // edit data
        const cartData = {
            user_id: user_id,
            service_id: props.id
        }

        const accessToken = await getAccessTokenSilently();
        const { data, error } = await createCart(accessToken, cartData);

        if (data) {
            if (data !== 'Giỏ hàng đã tồn tại') {
                toast.success("Đã thêm dịch vụ vào giỏ hàng", { timeout: 3000 });
            } else {
                toast.warning("Oh, Dịch vụ đã có trong giỏ hàng", { timeout: 3000 });
            }
            // console.log(data);
        }

        if (error) {
            // console.log(error.message);
        }
    }
};

const submitCreateReviewHandle = async (reviewData, user_id) => {
    // loggin if loggin yet exists
    if (!isAuthenticated.value) {
        handleLogin();
        return
    }

    // edit data
    reviewData.user_id = user_id;
    reviewData.service_id = props.id;
    if (review.value.rate === 0) {
        toast.warning("Oh, Hãy đánh giá dịch vụ với số sao từ 1 đến 5", { timeout: 3000 });
        return;
    } else {
        createReviewAxios(reviewData);
    }
};

const openReviewForm = async () => {
    // loggin if loggin yet exists
    if (!isAuthenticated.value) {
        handleLogin();
    } else {
        openWriteReviewModal.value = true
    }
};

// run function
getServiceByIdAxios(props.id);
getReviewByServiceIdAxios(props.id);
getUserByEmailAxios(user);
getLocationsByServicIdAxios(props.id);
</script>