<template>
    <!-- Wait -->
    <div v-if="loading" class="page-layout">
        <PageLoader />
    </div>

    <div v-else>
        <div class="mx-auto max-w-5xl bg-white px-16 py-4 rounded-lg">
            <!-- Title -->
            <div class="flex-auto mb-10">
                <h1 class="text-[#111827] leading-[3rem] font-[600] text-[1.5rem]">Thêm
                    Nhà cung cấp</h1>
            </div>

            <form class="max-w-4xl" @submit="submitHandle">
                <div class="space-y-12">
                    <!-- Info -->
                    <div class="border-b border-gray-900/10 pb-12">
                        <h2 class="text-base font-semibold leading-7 text-gray-900">Thông tin cơ bản</h2>
                        <p class="mt-1 text-sm leading-6 text-gray-600">Cung cấp những thông tin về nhà cung cấp</p>

                        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div class="sm:col-span-2">
                                <label for="name" class="block text-sm font-medium leading-6 text-gray-900">Tên
                                    nhà cung cấp<strong class="text-[red] ml-[8px]">*</strong></label>
                                <div class="mt-2">
                                    <input type="text" v-model="providerData.name" name="name" id="name"
                                        class="outline-none hover:border-[#9aa0a6] shadow-inner border border-gray-200 pl-[14px] block w-full rounded-md py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6">
                                </div>
                            </div>

                            <div class="sm:col-span-2">
                                <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email</label>
                                <div class="mt-2">
                                    <input v-model="providerData.email" type="email" name="email" id="email"
                                        class="outline-none hover:border-[#9aa0a6] shadow-inner border border-gray-200 px-[14px] block w-full rounded-md py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6">
                                </div>
                            </div>

                            <div class="sm:col-span-2">
                                <label for="phone" class="block text-sm font-medium leading-6 text-gray-900">Số
                                    điện thoại</label>
                                <div class="mt-2">
                                    <input v-model="providerData.phone" type="tel" name="phone" id="phone"
                                        class="outline-none hover:border-[#9aa0a6] shadow-inner border border-gray-200 px-[14px] block w-full rounded-md py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6">
                                </div>
                            </div>

                            <div class="sm:col-span-4">
                                <label for="address" class="block text-sm font-medium leading-6 text-gray-900">Địa
                                    chỉ<strong class="text-[red] ml-[8px]">*</strong></label>
                                <div class="mt-2">
                                    <input v-model="providerData.address" type="address" name="address" id="address"
                                        class="outline-none hover:border-[#9aa0a6] shadow-inner border border-gray-200 px-[14px] block w-full rounded-md py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6">
                                </div>
                            </div>

                            <div class="sm:col-span-4">
                                <label for="image" class="block text-sm font-medium leading-6 text-gray-900">Logo nhà cung
                                    cấp</label>
                                <div class="mt-2">
                                    <textarea v-model="providerData.image" id="image" name="image" rows="3"
                                        class="outline-none hover:border-[#9aa0a6] shadow-inner border border-gray-200 pl-[14px] block w-full rounded-md py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6" />
                                </div>
                                <p class="mt-3 text-sm leading-6 text-gray-600">Một URL hình ảnh</p>
                            </div>

                            <div v-if="providerData?.image" class="sm:col-span-2 flex items-center">
                                <div class="h-6"></div>
                                <div class="">
                                    <img :src="providerData?.image" alt=""
                                        class="h-16 w-16 flex-shrink-0 rounded-full bg-slate-400 mr-2" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Button -->
                <div class="mt-6 flex items-center justify-end gap-x-6">
                    <RouterLink to="/management/provider" class="text-sm font-semibold leading-6 text-gray-900">
                        <div class="">Huỷ</div>
                    </RouterLink>

                    <button type="submit"
                        class="hover:scale-[1.03] transition-all duration-[0.3s] ease-in-out delay-[0ms] my-[8px] inline-flex items-center px-[8px] py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-[#0096faee] hover:bg-[#0096fa]">
                        <div class="flex items-center">
                            <span class="text-sm font-medium leading-6">Submit</span>
                        </div>
                    </button>
                </div>
            </form>

        </div>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { onMounted, ref } from "vue";
import { useAuth0 } from "@auth0/auth0-vue";
import PageLoader from "@/components/page-loader.vue";
import { createProvider } from "@/services/provider.service";

// toast
import { useToast } from "vue-toastification";
// Get toast interface
const toast = useToast();

import { useRouter } from 'vue-router'
const router = useRouter()

const { getAccessTokenSilently } = useAuth0();

const loading = ref(true);
// name, phone, email, address, image
const providerData = ref({
    name: '',
    phone: '',
    email: '',
    address: '',
    image: ''
})

// create
const createProviderHangle = async () => {
    const accessToken = await getAccessTokenSilently();
    const { data, error } = await createProvider(accessToken, providerData.value);

    if (data) {
        // console.log(data);
        toast.success("Đã thêm nhà cung cấp thành công", { timeout: 3000 });
        // Về trang quản lý dịch vụ
        router.push('/management/provider');
    }

    if (error) {
        // console.log(error);
    }
};

function submitHandle(event) {
    // Ngăn chặn sự kiện mặc định của form để tránh tải lại trang
    event.preventDefault();
    // edit data
    if (providerData.value.name === '' || providerData.value.address === '' || providerData.value.image === '') {
        toast.warning("Oh, Có thiếu sót gì đó! Xem lại những Input có * đỏ", { timeout: 3000 });
        return;
    }
    console.log(providerData.value);

    // Create service 
    createProviderHangle();
}

onMounted(() => {
    loading.value = false;
})
</script>