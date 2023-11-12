<template>
    <Header :addToCart="addToCart"></Header>
    <main>
        <div class="content-layout max-w-[1024px] mx-auto p-0">
            <div class="content__body">
                <div v-if="userDataMySQL" class="profile-grid">
                    <div class="profile__header">
                        <img :src="user.picture" alt="Profile" class="profile__avatar" />
                        <div class="profile__headline">
                            <h2 class="profile__title text-slate-950">{{ user.name }}</h2>
                            <span class="profile__description">{{ user.email }}</span>
                        </div>
                    </div>

                    <div class="bg-gray-300 mt-8 rounded-t-lg px-8 py-6 text-3xl font-bold">
                        <span>Thông tin cá nhân</span>
                    </div>

                    <div class="bg-white p-8">
                        <div class="mt-6">
                            <dl class="divide-y divide-gray-100">
                                <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                    <dt class="text-sm font-medium leading-6 text-gray-900">User ID</dt>
                                    <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{{ userDataMySQL.id }}</dd>
                                </div>
                                <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                    <dt class="text-sm font-medium leading-6 text-gray-900">Tên</dt>
                                    <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{{ userDataMySQL.name }}
                                    </dd>
                                </div>
                                <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                    <dt class="text-sm font-medium leading-6 text-gray-900">Địa chỉ email</dt>
                                    <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{{ userDataMySQL.email }}</dd>
                                </div>
                                <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                    <dt class="text-sm font-medium leading-6 text-gray-900">Số điện thoại</dt>
                                    <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{{ userDataMySQL.phone }}</dd>
                                </div>
                                <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                    <dt class="text-sm font-medium leading-6 text-gray-900">Vai trò</dt>
                                    <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{{ userDataMySQL.role ===0 ? "Quản lý" : "Khách hàng" }}</dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
  
<script setup>
import Header from '@/components/Header.vue';
import { useAuth0 } from "@auth0/auth0-vue";
import { getUserByEmail, createUser } from "@/services/user.service";
import { onBeforeMount, reactive, ref } from "vue";

const { user } = useAuth0();
const code = user ? JSON.stringify(user.value, null, 2) : "";
const { getAccessTokenSilently } = useAuth0();
const userDataMySQL = ref();
let addToCart = reactive({
    value: false
});

const getUserByEmailAxios = async (user) => {
    // edit data
    const userData = {
        id: user.value.sub,
        email: user.value?.email,
        name: user.value?.username,
        phone: null
    }
    const accessToken = await getAccessTokenSilently();
    const { data, error } = await getUserByEmail(accessToken, userData);
    if (data) {
        // console.log(user);
        // console.log(data);
        userDataMySQL.value = data;
    } else {
        const { data, error } = await createUser(accessToken, userData);
        if (data) {
            // console.log(data);
            userDataMySQL.value = data;
        }
    }
    if (error) {
        // console.log(error.message);
    }
};

onBeforeMount(() => {
    // run function
    getUserByEmailAxios(user);
})
</script>