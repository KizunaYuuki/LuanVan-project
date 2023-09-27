<template>
    <main>
        <div class="bg-[#ffffffbe]">
            <div class="pt-6">
                <nav aria-label="Breadcrumb">
                    <ol role="list" class="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                        <li v-for="breadcrumb in product.breadcrumbs" :key="breadcrumb.id">
                            <div class="flex items-center">
                                <a :href="breadcrumb.href" class="mr-2 text-sm font-medium text-gray-900">{{ breadcrumb.name
                                }}</a>
                                <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" aria-hidden="true"
                                    class="h-5 w-4 text-gray-300">
                                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                                </svg>
                            </div>
                        </li>
                        <li class="text-sm">
                            <a :href="product.href" aria-current="page"
                                class="font-medium text-gray-500 hover:text-gray-600">{{
                                    product.name }} {{ this.id }}</a>
                        </li>
                    </ol>
                </nav>

                <!-- Image gallery -->
                <!-- <div class="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
                    <div class="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
                        <img :src="product.images[0].src" :alt="product.images[0].alt"
                            class="h-full w-full object-cover object-center" />
                    </div>
                    <div class="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                        <div class="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                            <img :src="product.images[1].src" :alt="product.images[1].alt"
                                class="h-full w-full object-cover object-center" />
                        </div>
                        <div class="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                            <img :src="product.images[2].src" :alt="product.images[2].alt"
                                class="h-full w-full object-cover object-center" />
                        </div>
                    </div>
                    <div class="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
                        <img :src="product.images[3].src" :alt="product.images[3].alt"
                            class="h-full w-full object-cover object-center" />
                    </div>
                </div> -->

                <!-- Product info -->
                <div
                    class="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
                    <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                        <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{{ product.name }}</h1>
                    </div>

                    <!-- Options -->
                    <div class="mt-4 lg:row-span-3 lg:mt-0">
                        <h2 class="sr-only">Product information</h2>
                        <p class="text-3xl tracking-tight text-gray-900">
                            {{ (860000).toLocaleString('vi-VN', {
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
                                        :class="[reviews.average > rating ? 'text-gray-900' : 'text-gray-200', 'h-5 w-5 flex-shrink-0']"
                                        aria-hidden="true" />
                                </div>
                                <p class="sr-only">{{ reviews.average }} out of 5 stars</p>
                                <!-- <a :href="reviews.href"
                                    class="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">{{
                                        reviews.totalCount }} đánh giá</a> -->
                                <a href="#reviews"
                                    class="ml-3 text-sm font-medium text-[#0095f9a7] hover:text-[#0097f9] hover:underline">
                                    {{ reviews.totalCount }} đánh giá
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

                            <div class="">
                                <button type="button"
                                    class="mt-10 flex w-[100%] items-center justify-center border border-transparent px-[16px] py-[8px] font-medium text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 leading-6 text-base shadow rounded-md bg-[#0096faee] hover:bg-[#0096fa]">Đăng
                                    ký dịch vụ</button>
                                <button type="button"
                                    class="mt-10 flex w-[100%] items-center justify-center border border-transparent px-[16px] py-[8px] font-medium text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 leading-6 text-base shadow rounded-md bg-[#0096faee] hover:bg-[#0096fa]">Thêm
                                    vào giỏ hàng</button>
                            </div>
                        </form>
                    </div>

                    <div class="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">

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
                                                <span class="text-[#0096fa] font-[500] hover:underline">FedEX</span>
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
                                                Nơi nhận hàng: <span class="font-[500]">TP. Hồ Chí Minh</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <!-- Description and details -->
                        <div>
                            <h3 class="sr-only">Description</h3>

                            <div class="space-y-6">
                                <p class="text-base text-gray-900">{{ product.description }}</p>
                            </div>
                        </div>

                        <div class="mt-10 text-[16px]">
                            <h3 class="font-medium text-gray-900">Điểm nổi bật</h3>

                            <div class="mt-4">
                                <ul role="list" class="list-disc space-y-2 pl-4">
                                    <li v-for="highlight in product.highlights" :key="highlight" class="text-gray-400">
                                        <span class="text-gray-600">{{ highlight }}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <!-- Chi tiet -->
                        <div class="mt-10 text-[16px]">
                            <h2 class="font-medium text-gray-900">Chi tiết</h2>

                            <div class="mt-4 space-y-6">
                                <p class="text-gray-600">{{ product.details }}</p>
                            </div>
                        </div>

                        <!-- Bình luận - Đánh giá -->
                        <section id="reviews"
                            class="mt-[32px] pt-[32px] flex flex-wrap content-center items-center border-t">
                            <div class="text-[#757575]">
                                <div class="mb-[16px]">
                                    <h1 class="text-[24px] font-[500] py-[8px] flex justify-between">Xếp hạng và Đánh giá
                                        <button
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
                                            (4.7).toLocaleString('vi-VN', {
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
                                                (117).toLocaleString('vi-VN')
                                            }}) đánh giá</span>
                                    </span>

                                    <h2 class="text-[16px] py-[8px]">Xếp hạng theo</h2>
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
                                </div>

                                <!-- Comment -->
                                <div class="my-[4px]">
                                    <div>
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
                                                Xuân Hà Phạm
                                            </div>
                                            <menuButton></menuButton>
                                        </h2>
                                        <div>
                                            <span></span>
                                            <span>một tuần trước</span>
                                            <span
                                                class="text-[12px] h-[24px] inline-flex items-center px-[12px] rounded-[4px] border m-[6px] hover:bg-[#f8f9fa]">Mới</span>
                                        </div>
                                        <p>Dịch vụ gọn rẽ với giá khá tốt, đặc biệt nhân viên rất thân thiện. 9/10</p>
                                    </div>
                                    <div>
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
                                                Xuân Hà Phạm
                                            </div>
                                            <menuButton></menuButton>
                                        </h2>
                                        <div>
                                            <span></span>
                                            <span>một tuần trước</span>
                                            <span
                                                class="text-[12px] h-[24px] inline-flex items-center px-[12px] rounded-[4px] border m-[6px] hover:bg-[#f8f9fa]">Mới</span>
                                        </div>
                                        <p>Mình ghé thăm vào tháng 08, trời Hà Nội khá là oi, đi dạo Hồ Hoàn Kiểm cả buổi
                                            sáng
                                            lẫn buổi
                                            chiều
                                            điều cảm thấy oi - Nhưng vẻ đẹp của Hồ Hoàn Kiểm vẫn y như sách giáo khoa</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                </div>
            </div>
        </div>

        <!-- Goi y dich vu - San pham tuong tu -->
        <div class="bg-[#0096fa0d] py-6">
            <h2 class="text-[24px] text-[#202124] font-[500] text-center mb-[16px]">Những dịch vụ tương tự</h2>
            <section class="flex flex-wrap content-center justify-center items-center">
                <domesticCard></domesticCard>
                <domesticCard></domesticCard>
                <domesticCard></domesticCard>
                <domesticCard></domesticCard>
            </section>
        </div>
    </main>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from "vue";
import domesticCard from "../components/cards/domestic-card.vue";
import { StarIcon } from '@heroicons/vue/20/solid'
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from '@headlessui/vue'
import menuButton from "../components/buttons/menu-button.vue";

const props = defineProps({
    id: Number
})

const product = {
    name: 'FedEx Vận chuyển quốc tế',
    price: '$192',
    href: '#',
    breadcrumbs: [
        { id: 1, name: 'Quốc tế', href: '#' },
        // { id: 2, name: 'Clothing', href: '#' },
    ],
    images: [
        {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
            alt: 'Two each of gray, white, and black shirts laying flat.',
        },
        {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
            alt: 'Model wearing plain black basic tee.',
        },
        {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
            alt: 'Model wearing plain gray basic tee.',
        },
        {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
            alt: 'Model wearing plain white basic tee.',
        },
    ],
    colors: [
        { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
        { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
        { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
    ],
    sizes: [
        { name: 'XXS', inStock: false },
        { name: 'XS', inStock: true },
        { name: 'S', inStock: true },
        { name: 'M', inStock: true },
        { name: 'L', inStock: true },
        { name: 'XL', inStock: true },
        { name: '2XL', inStock: true },
        { name: '3XL', inStock: true },
    ],
    description:
        'Dịch vụ Giao hàng nhanh quốc tế (FedEx International Priority): Đây là dịch vụ ưu tiên giúp bạn gửi hàng hóa quốc tế một cách nhanh chóng. FedEx cam kết giao hàng đến nơi chỉ trong vài ngày làm việc, tùy thuộc vào điểm đến.',
    highlights: [
        'Tính nhanh chóng và ưu tiên: FedEx International Priority cam kết giao hàng nhanh chóng trong vài ngày làm việc, giúp bạn đáp ứng các khâu thời gian cố định cho giao hàng quốc tế.',
        'Tính hiệu quả chi phí: Dịch vụ FedEx International Economy cung cấp một lựa chọn tiết kiệm chi phí cho các cuộc giao hàng quốc tế không cần gấp.',
        'Dịch vụ đặc biệt: FedEx cung cấp các giải pháp vận chuyển hàng hóa đặc biệt cho hàng quý giá, hàng hóa cồng kềnh và hàng nặng.',
        'Tính tin cậy: FedEx là một trong những thương hiệu được tin dùng và có danh tiếng trong ngành vận chuyển quốc tế, với nhiều năm kinh nghiệm trong việc đảm bảo an toàn và đáng tin cậy trong vận chuyển hàng hóa.',
    ],
    details:
        'Các dịch vụ FedEx Vận chuyển quốc tế có thể thay đổi theo thời gian và địa điểm cụ thể. Để biết thông tin cụ thể và cập nhật nhất, bạn nên liên hệ trực tiếp với FedEx hoặc truy cập trang web của họ.',
}
const reviews = { href: '#', average: 4, totalCount: 117 }

const selectedColor = ref(product.colors[0])
const selectedSize = ref(product.sizes[2])
</script>