<template>
    <RouterLink :to="{
        name: 'Service Details',
        params: { id: props.service.service_id },
    }" class="">
        <div
            class="card bg-sky-50 hover:scale-[1.03] transition-all duration-[0.3s] ease-in-out delay-[0ms] w-[50vw] sm:w-full box-border">
            <!-- Hinh anh -->
            <div class="card-img relative" style="display: none;">
                <div class="part-hidden " style="padding-top:35%"></div>
                <img class="img"
                    src="https://storage.googleapis.com/futa-busline-cms-dev/Rectangle_23_2_8bf6ed1d78/Rectangle_23_2_8bf6ed1d78.png"
                    alt="">
                <div>
                    <!-- Giam gia -->
                    <span class="py-[12px] px-[16px] absolute top-[0px] left-0 z-10 text-white">
                        <span
                            class="text-[#e61919] bg-[#ffcfcf] inline-flex items-center justify-center shrink-0 relative text-[.75rem] font-[500] antialiased leading-[1] flex-row px-[8px] py-[5px] rounded-[4px]">
                            -44%
                        </span>
                    </span>

                    <!-- Them vao gio -->
                    <button @click.prevent="true"
                        class="inline-flex items-center justify-center shrink-0 flex-row py-[12px] px-[16px] m-[4px] h-[40px] w-[40px] absolute top-[0px] right-0 z-10 text-white rounded-[100px] hover:bg-[#ebeff5]">
                        <span class="w-[24px] h-[24px] inline-block shrink-0 relative">
                            <svg width="24" height="24" aria-hidden="true" class="fill-current text-[#d83737]"
                                preserveAspectRatio="none" viewBox="0 0 24 24">
                                <path
                                    d="M15.7 3c-1.4 0-2.6.4-3.7 1.2a6.1 6.1 0 0 0-8.2.8 7 7 0 0 0 0 9.2c.7 1 1.5 1.7 2.9 3l2.8 2.4.8.7c.5.5 1 .7 1.7.7.6 0 1.2-.2 1.7-.6 2-1.7 5.3-4.7 6.6-6.2a7 7 0 0 0-.1-9.2 6.2 6.2 0 0 0-4.5-2m0 1.8c1.1 0 2.3.5 3.2 1.4a5 5 0 0 1 0 6.8 88.2 88.2 0 0 1-6.9 6.2l-.6-.2-.8-.7L8 15.8c-1.4-1.2-2-2-2.8-2.8a5 5 0 0 1 0-6.8 4.5 4.5 0 0 1 6.5 0l.4.5.4-.5c1-.9 2-1.4 3.3-1.4">
                                </path>
                            </svg>

                            <svg width="24" height="24" aria-hidden="true" class="fill-current text-[#ffd2d2] w-full h-full"
                                preserveAspectRatio="none" viewBox="0 0 24 24">
                                <path
                                    d="M15.3 4.1c-1.2 0-2.3.4-3.3 1a5.6 5.6 0 00-7.4.7 6 6 0 000 8.2c.7.7 1.3 1.4 2.6 2.5l2.5 2.2.7.6a2.4 2.4 0 003.2 0c1.7-1.4 4.7-4 5.8-5.3a6 6 0 000-8.2 5.6 5.6 0 00-4.1-1.7">
                                </path>
                            </svg>
                        </span>

                    </button>
                </div>
                <div class="absolute top-[42px] left-[16px] z-10 text-white">
                    <span class="text-[15px]">Vận chuyển
                        từ</span><br><span class="text-xl font-semibold">Đà Lạt</span>
                </div>
            </div>
            <!-- Noi dung card -->
            <div v-if="props?.service?.service_id" class="hover:bg-[#0096fa0d] p-2">
                <div class="lg:text-lg text-[15px] font-[600] pb-3">
                    {{ props.service.service_name }}
                </div>

                <div class="lg:text-lg text-[15px] font-[500]">
                    <div class="pb-3">
                        <h1 class="text-[#747a84]">{{ props.service.province_from }}</h1>
                        <h1 class="text-[#747a84] font-light">Về</h1>
                        <h1 class="text-[#747a84]">{{ props.service.province_to }}</h1>
                    </div>

                    <div class="flex justify-between items-baseline">
                        <h2 class="text-[18px] text-[#202124] font-[500] whitespace-nowrap">{{
                            (props.service.price).toLocaleString('vi-VN',
                                {
                                    style: 'currency',
                                    currency: 'VND'
                                }) }}
                        </h2>
                        <span  v-show="props.service?.totalCount" class="">
                            <div :data-tooltip="props.service.totalCount"
                                class="tooltip text-sm font-semibold text-[#757575] inline-flex items-center">
                                <span class="mr-[4px]">{{
                                    (parseFloat(props.service.average_rate)).toLocaleString('vi-VN', {
                                        minimumFractionDigits: 1, // Số chữ số thập phân tối thiểu
                                        maximumFractionDigits: 1, // Số chữ số thập phân tối đa
                                    }) }}</span>
                                <svg width="14" height="14" class="fill-current text-[#fbbc04]" data-testid="star-svg"
                                    preserveAspectRatio="none" viewBox="0 0 24 24">
                                    <path
                                        d="m12 20.6-5.86 3.23c-.7.38-1.57.1-1.94-.63-.15-.3-.2-.63-.14-.95l1.12-6.82L.43 10.6a1.55 1.55 0 0 1-.02-2.13c.22-.23.5-.39.82-.43l6.55-1 2.93-6.2a1.4 1.4 0 0 1 2.58 0l2.93 6.2 6.55 1a1.5 1.5 0 0 1 1.21 1.7c-.04.32-.19.63-.41.86l-4.75 4.83 1.12 6.82c.14.81-.39 1.59-1.17 1.73-.3.05-.63 0-.9-.15L12 20.6Z">
                                    </path>
                                </svg>
                            </div>

                        </span>
                    </div>

                </div>

                <!-- So sánh dịch vụ -->
                <div class="text-[12px] text-[#757575] mt-[8px] hidden">

                    <span class="flex justify-between">
                        <!-- Xử lý if - else -->
                        <button @click.prevent="ToggleAddIntoCart" :class="{ 'hidden': isInCart }"
                            class="hover:scale-[1.05] transition-all duration-[0.3s] ease-in-out delay-[0ms] hover:text-[#0096fa] inline-flex items-center ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor"
                                class="bi bi-plus rounded-[50%] border" viewBox="0 0 16 16">
                                <path
                                    d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                            </svg>
                            <span class="inline-flex pl-[4px]">So sánh</span>
                        </button>

                        <button @click.prevent="true" :class="{ 'hidden': !isInCart }"
                            class="hover:scale-[1.05] transition-all duration-[0.3s] ease-in-out delay-[0ms] hover:text-[#0096fa] inline-flex items-center ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-check rounded-[50%] border" viewBox="0 0 16 16">
                                <path
                                    d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                            </svg>
                            <span class="inline-flex pl-[4px]">Đã thêm so sánh</span>
                        </button>

                        <button id="quickviews" @click.prevent="quickviews = true"
                            class="hover:text-[#0096fa] min-[1024px]:block hidden">Xem trước</button>
                    </span>

                </div>
            </div>
        </div>

    </RouterLink>

    <TransitionRoot as="template" :show="quickviews">
        <Dialog as="div" class="relative z-10" @close="quickviews = false">
            <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100"
                leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block" />
            </TransitionChild>

            <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div class="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
                    <TransitionChild as="template" enter="ease-out duration-300"
                        enter-from="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
                        enter-to="opacity-100 translate-y-0 md:scale-100" leave="ease-in duration-200"
                        leave-from="opacity-100 translate-y-0 md:scale-100"
                        leave-to="opacity-0 translate-y-4 md:translate-y-0 md:scale-95">
                        <DialogPanel
                            class="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
                            <div
                                class="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                                <button type="button"
                                    class="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
                                    @click.prevent="quickviews = false">
                                    <span class="sr-only">Close</span>
                                    <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                                </button>

                                <div class="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                                    <div
                                        class="aspect-h-3 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
                                        <!-- <img :src="product.imageSrc" :alt="product.imageAlt"
                                            class="object-cover object-center" /> -->
                                    </div>
                                    <div class="sm:col-span-8 lg:col-span-7">
                                        <h2 class="text-2xl font-bold text-gray-900 sm:pr-12">{{ product.name }}</h2>

                                        <section aria-labelledby="information-heading" class="mt-2">
                                            <h3 id="information-heading" class="sr-only">Product information</h3>

                                            <p class="text-2xl text-gray-900">{{ product.price }}</p>

                                            <!-- Reviews -->
                                            <div class="mt-6">
                                                <h4 class="sr-only">Reviews</h4>
                                                <div class="flex items-center">
                                                    <div class="flex items-center">
                                                        <StarIcon v-for="rating in [0, 1, 2, 3, 4]" :key="rating"
                                                            :class="[product.rating > rating ? 'text-gray-900' : 'text-gray-200', 'h-5 w-5 flex-shrink-0']"
                                                            aria-hidden="true" />
                                                    </div>
                                                    <p class="sr-only">{{ product.rating }} out of 5 stars</p>
                                                    <a href="#"
                                                        class="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">{{
                                                            product.reviewCount }} reviews</a>
                                                </div>
                                            </div>
                                        </section>

                                        <section aria-labelledby="options-heading" class="mt-10">
                                            <h3 id="options-heading" class="sr-only">Product options</h3>

                                            <!-- Thông tin dịch vụ -->
                                            <section class="flex flex-wrap content-center">
                                                <div class="text-[#757575]">
                                                    <!-- Tên dịch vụ -->
                                                    <!-- <h1 class="text-[30px] font-[500]">FedEx Vận chuyển quốc tế</h1> -->

                                                    <div class="text-[16px] my-[24px] leading-loose">
                                                        <h2 class="font-[500]">Thông tin dịch vụ</h2>
                                                        <div class="mt-4">
                                                            <ul role="list" class="list-disc space-y-2 pl-4 text-gray-700">
                                                                <li class="">
                                                                    Nhà cung cấp:
                                                                    <span
                                                                        class="text-[#0096fa] font-[500] hover:underline">FedEX</span>
                                                                </li>
                                                                <li class="">
                                                                    Thời gian: <span class="font-[500]">1 -> 2 ngày</span>
                                                                </li>
                                                                <li class="">
                                                                    Khối lượng: <span class="font-[500]">&le; 68kg</span>
                                                                </li>
                                                                <li class="">
                                                                    Nơi gởi hàng: <span class="font-[500]">Đà Lạt</span>
                                                                </li>
                                                                <li class="">
                                                                    Nơi nhận hàng: <span class="font-[500]">TP. Hồ Chí
                                                                        Minh</span>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>

                                            <form>
                                                <!-- Colors -->
                                                <!-- <div>
                                                    <h4 class="text-sm font-medium text-gray-900">Color</h4>

                                                    <RadioGroup v-model="selectedColor" class="mt-4">
                                                        <RadioGroupLabel class="sr-only">Choose a color</RadioGroupLabel>
                                                        <span class="flex items-center space-x-3">
                                                            <RadioGroupOption as="template" v-for="color in product.colors"
                                                                :key="color.name" :value="color"
                                                                v-slot="{ active, checked }">
                                                                <div
                                                                    :class="[color.selectedClass, active && checked ? 'ring ring-offset-1' : '', !active && checked ? 'ring-2' : '', 'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none']">
                                                                    <RadioGroupLabel as="span" class="sr-only">{{ color.name
                                                                    }}</RadioGroupLabel>
                                                                    <span aria-hidden="true"
                                                                        :class="[color.class, 'h-8 w-8 rounded-full border border-black border-opacity-10']" />
                                                                </div>
                                                            </RadioGroupOption>
                                                        </span>
                                                    </RadioGroup>
                                                </div> -->

                                                <!-- Sizes -->
                                                <!-- <div class="mt-10">
                                                    <div class="flex items-center justify-between">
                                                        <h4 class="text-sm font-medium text-gray-900">Size</h4>
                                                        <a href="#"
                                                            class="text-sm font-medium text-indigo-600 hover:text-indigo-500">Size
                                                            guide</a>
                                                    </div>

                                                    <RadioGroup v-model="selectedSize" class="mt-4">
                                                        <RadioGroupLabel class="sr-only">Choose a size</RadioGroupLabel>
                                                        <div class="grid grid-cols-4 gap-4">
                                                            <RadioGroupOption as="template" v-for="size in product.sizes"
                                                                :key="size.name" :value="size" :disabled="!size.inStock"
                                                                v-slot="{ active, checked }">
                                                                <div
                                                                    :class="[size.inStock ? 'cursor-pointer bg-white text-gray-900 shadow-sm' : 'cursor-not-allowed bg-gray-50 text-gray-200', active ? 'ring-2 ring-indigo-500' : '', 'group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1']">
                                                                    <RadioGroupLabel as="span">{{ size.name }}
                                                                    </RadioGroupLabel>
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

                                                <button type="submit"
                                                    class="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Thêm
                                                    vào giỏ hàng</button>
                                            </form>
                                        </section>
                                    </div>
                                </div>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref, onMounted } from 'vue';
import {
    Dialog,
    DialogPanel,
    RadioGroup,
    RadioGroupLabel,
    RadioGroupOption,
    TransitionChild,
    TransitionRoot,
} from '@headlessui/vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'
import { StarIcon } from '@heroicons/vue/20/solid'

// Khởi tạo biến lưu trạng thái của sản phẩm - Đã thêm vào giỏ hàng hay chưa
let isInCart = ref(false);

const props = defineProps({
    service: Object
})

const product = {
    name: 'FedEx Vận chuyển quốc tế ',
    price: '280.000 ₫',
    rating: 4.7,
    reviewCount: 117,
    href: '#',
    imageSrc: 'https://storage.googleapis.com/futa-busline-cms-dev/Rectangle_23_2_8bf6ed1d78/Rectangle_23_2_8bf6ed1d78.png',
    imageAlt: 'Two each of gray, white, and black shirts arranged on table.',
    colors: [
        { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
        { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
        { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
    ],
    sizes: [
        { name: 'XXS', inStock: true },
        { name: 'XS', inStock: true },
        { name: 'S', inStock: true },
        { name: 'M', inStock: true },
        { name: 'L', inStock: true },
        { name: 'XL', inStock: true },
        { name: 'XXL', inStock: true },
        { name: 'XXXL', inStock: false },
    ],
}

const quickviews = ref(false)
const selectedColor = ref(product.colors[0])
const selectedSize = ref(product.sizes[2])

onMounted(() => {
    // console.log(props.service);
})

</script>

<style scoped>
/* Xu ly Animation cho card-skew, Github */
.card {
    /* color: #fff; */
    /* margin: 8px; */
    /* border: 1px solid #dadce0; */
    /* width: 287.773px; */
    /* height: 260.117px; */
    /* overflow: hidden; */
    cursor: pointer;
    transition: transform .1s ease;
    /* transition: opacity 3s ease; */
}

.card:hover {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.card-img {
    display: block;
    overflow: hidden;
    position: relative;
}

.img {
    left: 0;
    min-height: 100%;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    position: absolute;
}

.part-hidden {
    visibility: hidden;
    width: 100%;
}

.tooltip {
    position: relative;
}

.tooltip::before,
.tooltip::after {
    --scale: 0;
    --arrow-size: 10px;
    --tooltip-color: #333;
    position: absolute;
    top: -.25rem;
    left: 50%;
    transform: translateX(-50%) translateY(var(--translate-y, 0)) scale(var(--scale));
    transition: 150ms transform;
    transform-origin: bottom center;
}

.tooltip::before {
    --translate-y: calc(-100% - var(--arrow-size));
    content: attr(data-tooltip) " đánh giá";
    color: white;
    padding: .25rem;
    border-radius: .3rem;
    text-align: center;
    width: max-content;
    /* max-width: 70px; */
    background: var(--tooltip-color);
}

.tooltip:hover::before,
.tooltip:hover::after {
    --scale: 1;
}

.tooltip::after {
    --translate-y: calc(-1 * var(--arrow-size));
    content: '';
    border: var(--arrow-size) solid transparent;
    border-top-color: var(--tooltip-color);
    transform-origin: top center;
}
</style>