<template>
    <Header :addToCart="addToCart"></Header>
    <main>
        <div class="content-layout max-w-[1024px] mx-auto p-0">
            <div class="content__body">
                <div v-if="userDataMySQL" class="profile-grid">
                    <div class="profile__header">
                        <img :src="user.picture" alt="Profile" class="profile__avatar" />
                        <div class="profile__headline">
                            <h2 class="profile__title text-slate-950">{{ userDataMySQL.name }}</h2>
                            <span class="profile__description">{{ user.email }}</span>
                        </div>
                    </div>

                    <div class="bg-gray-300 mt-8 rounded-t-lg px-8 py-4 text-3xl font-bold">
                        <span>Thông tin cá nhân</span>
                    </div>

                    <div class="bg-white px-8">
                        <dl class="divide-y divide-gray-100">
                            <div class="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 h-16 flex items-center">
                                <dt class="text-base font-medium leading-6 text-gray-900">User ID</dt>
                                <dd class="mt-1 text-base leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{{
                                    userDataMySQL.id }}</dd>
                            </div>
                            <div class="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 h-16 flex items-center">
                                <dt class="text-base font-medium leading-6 text-gray-900">Tên</dt>
                                <dd v-if="(!edit) || (GoolgeAccount === true)"
                                    class="mt-1 text-base leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{{
                                        userDataMySQL.name }}
                                    <div v-if="GoolgeAccount" class="text-red-500 text-sm">Không thể chỉnh sữa Tên nếu bạn
                                        đăng nhập thông qua Google</div>
                                </dd>
                                <dd v-else class="mt-1 text-base leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                    <input type="text" v-model="editData.name" name="name" id="name"
                                        class="w-64 outline-none hover:border-[#9aa0a6] shadow-inner border border-gray-200 pl-[14px] block rounded-md py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-base sm:leading-6">
                                </dd>
                            </div>
                            <div class="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 h-16 flex items-center">
                                <dt class="text-base font-medium leading-6 text-gray-900">Địa chỉ email</dt>
                                <dd class="mt-1 text-base leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{{
                                    userDataMySQL.email }}</dd>
                            </div>
                            <div class="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 h-16 flex items-center">
                                <dt class="text-base font-medium leading-6 text-gray-900">Số điện thoại</dt>
                                <dd v-if="!edit" class="mt-1 text-base leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{{
                                    userDataMySQL.phone }}</dd>

                                <dd v-else class="mt-1 text-base leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                    <input type="text" v-model="editData.phone" name="phone" id="phone"
                                        class="w-64 outline-none hover:border-[#9aa0a6] shadow-inner border border-gray-200 pl-[14px] block rounded-md py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-base sm:leading-6">
                                </dd>
                            </div>
                            <div class="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 h-16 flex items-center">
                                <dt class="text-base font-medium leading-6 text-gray-900">Vai trò</dt>
                                <dd class="mt-1 text-base leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{{
                                    userDataMySQL.role === 0 ? "Quản lý" : "Khách hàng" }}</dd>
                            </div>
                        </dl>
                    </div>

                    <div class="bg-gray-300 rounded-b-lg px-8 py-3 text-3xl font-bold flex justify-end">
                        <template v-if="edit">
                            <button
                                class="ml-3 hover:scale-[1.03] transition-all duration-[0.3s] ease-in-out delay-[0ms] inline-flex items-center px-[8px] py-1 font-semibold leading-6 text-sm shadow rounded-md text-white bg-[#0096faee] hover:bg-[#0096fa]"
                                @click="edit = false">Huỷ</button>
                            <button
                                class="ml-3 hover:scale-[1.03] transition-all duration-[0.3s] ease-in-out delay-[0ms] inline-flex items-center px-[8px] py-1 font-semibold leading-6 text-sm shadow rounded-md text-white bg-[#0096faee] hover:bg-[#0096fa]"
                                @click="handleSubmit(userDataMySQL.id)">Cập nhật</button>
                        </template>
                        <button v-else
                            class="hover:scale-[1.03] transition-all duration-[0.3s] ease-in-out delay-[0ms] inline-flex items-center px-[8px] py-1 font-semibold leading-6 text-sm shadow rounded-md text-white bg-[#0096faee] hover:bg-[#0096fa]"
                            @click="handleClickButtonUpdate()">Cập nhật</button>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
  
<script setup>
import Header from '@/components/Header.vue';
import { useAuth0 } from "@auth0/auth0-vue";
import { getUserByEmail, createUser, updateUser } from "@/services/user.service";
import { onBeforeMount, onMounted, reactive, ref } from "vue";

const { user } = useAuth0();
const code = user ? JSON.stringify(user.value, null, 2) : "";
const { getAccessTokenSilently } = useAuth0();
const userDataMySQL = ref();
let addToCart = reactive({
    value: false
});
const edit = ref(false);
const editData = ref({
    phone: '02'
});
const GoolgeAccount = ref(false);
// toast
import { useToast } from "vue-toastification";
// Get toast interface
const toast = useToast();

const handleClickButtonUpdate = async () => {
    GoolgeAccount.value = userDataMySQL.value.id.includes('google') ? true : false;
    edit.value = true;
}

const getUserByEmailAxios = async (user) => {
    // edit data
    const userData = {
        id: user.value.sub,
        email: user.value?.email,
        name: (user.value?.username) ? user.value?.username : user.value.name,
        phone: null
    }
    const accessToken = await getAccessTokenSilently();
    const { data, error } = await getUserByEmail(accessToken, userData);
    if (data) {
        // console.log(user);
        // console.log(data);
        userDataMySQL.value = data;
        editData.value.name = data.name;
        editData.value.phone = data.phone;
    } else {
        const { data, error } = await createUser(accessToken, userData);
        if (data) {
            // console.log(data);
            userDataMySQL.value = data; 
            // ERROR, userDataMySQL và editData tự động cập nhật khi mặt dù không dùng v-model hay hàm cập nhật nào (Xảy ra khi  editData.value = data || editData.value = userDataMySQL.value)
            // editData.value = data;
            editData.value.name = data.name;
            editData.value.phone = data.phone;
        }
    }
    if (error) {
        // console.log(error.message);
    }
};

const handleUpdateUser = async (userData, id) => {
    const accessToken = await getAccessTokenSilently();
    const { data, error } = await updateUser(accessToken, userData, id);
    if (data) {
        // console.log(user);
        // console.log(data);
        getUserByEmailAxios(user);
        toast.success("Đã Cập nhật thông tin tài khoản thành công", { timeout: 3000 });
        edit.value = false;
    }
    if (error) {
        // console.log(error.message);
    }
};

const handleSubmit = async (id) => {
    console.log(editData.value.phone);
    console.log(userDataMySQL.value.phone);
    if ((editData.value.name !== userDataMySQL.value.name) || (editData.value.phone !== userDataMySQL.value.phone)) {
        if (GoolgeAccount.value) {
            handleUpdateUser({
                phone: editData.value?.phone
            }, id);
        } else {
            handleUpdateUser({
                name: editData.value?.name,
                phone: editData.value?.phone
            }, id);
        }
    }
    else {
        return;
    }
}

onMounted(() => {
    // run function
    getUserByEmailAxios(user);
})
</script>