<template>
    <div
        class="card rounded-t-[16px] rounded-b-[8px] bg-white hover:scale-[1.03] transition-all duration-[0.3s] ease-in-out delay-[0ms]">
        <!-- Hinh anh -->
        <div class="card-img rounded-[16px]">
            <div class="part-hidden " style="padding-top:35%"></div>
            <img class="img"
                src="https://storage.googleapis.com/futa-busline-cms-dev/Rectangle_23_2_8bf6ed1d78/Rectangle_23_2_8bf6ed1d78.png"
                alt="">
            <div class="absolute top-[32px] left-[8px] z-10 text-white"><span class="text-[15px]">Vận chuyển
                    từ</span><br><span class="text-xl font-semibold">Đà Lạt</span>
            </div>
        </div>
        <!-- Noi dung card -->
        <div class="card-text hover:bg-[#0096fa0d]">
            <div class="flex justify-between items-baseline">
                <h1 class="text-[20px] text-[#202124] font-[400]">Về TP. Hồ Chí Minh</h1>
                <h2 class="text-[16px] text-[#202124] font-[500] whitespace-nowrap">{{ (280000).toLocaleString('vi-VN', {
                    style: 'currency',
                    currency: 'VND'
                }) }}</h2>
            </div>
            <h5 class="text-[12px] text-[#757575]">310km - 8 giờ - 19/08/2023</h5>

            <!-- So sánh dịch vụ -->
            <div class="text-[12px] text-[#757575]">
                <!-- Xử lý if - else -->
                <span class="flex justify-between">
                    <div class="hover:text-[#0096fa] inline-flex items-center ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor"
                            class="bi bi-plus rounded-[50%] border" viewBox="0 0 16 16">
                            <path
                                d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                        </svg>
                        <span class="inline-flex pl-[4px]">So sánh</span>
                    </div>
                    <button id="quickviews" @click="quickviews = true" class="hover:text-[#0096fa] ">Xem trước</button>
                </span>

                <!-- <span class="hover:text-[#0096fa] inline-flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-check rounded-[50%] border" viewBox="0 0 16 16">
                        <path
                            d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                    </svg>
                    <span class="inline-flex pl-[4px]">Đã thêm so sánh</span>
                </span> -->
            </div>
        </div>
    </div>

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
                                    @click="quickviews = false">
                                    <span class="sr-only">Close</span>
                                    <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                                </button>

                                <div class="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                                    <div
                                        class="aspect-h-3 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
                                        <img :src="product.imageSrc" :alt="product.imageAlt"
                                            class="object-cover object-center" />
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

                                            <form>
                                                <!-- Colors -->
                                                <div>
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
                                                </div>

                                                <!-- Sizes -->
                                                <div class="mt-10">
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
                                                </div>

                                                <button type="submit"
                                                    class="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Add
                                                    to bag</button>
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

const product = {
    name: 'Basic Tee 6-Pack ',
    price: '$192',
    rating: 3.9,
    reviewCount: 117,
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-quick-preview-02-detail.jpg',
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

</script>

<style scoped>
/* Xu ly Animation cho card-skew, Github */
.card {
    color: #fff;
    margin: 8px;
    border: 1px solid #dadce0;
    width: 287.773px;
    /* height: 260.117px; */
    overflow: hidden;
    cursor: pointer;
    transition: transform .1s ease;
    /* transition: opacity 3s ease; */
}

.card:hover {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Text animation */
.card-text {
    padding: 8px;
    overflow: hidden;
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

.rating {
    color: #fbbc04;
    fill: currentColor;
    flex-shrink: 0;
}
</style>