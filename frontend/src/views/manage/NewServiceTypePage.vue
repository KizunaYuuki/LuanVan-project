<template>
    <LayoutAuthenticated>
        <NewServiceTypeForm></NewServiceTypeForm>
    </LayoutAuthenticated>
</template>

<script setup>
import LayoutAuthenticated from '@/components/manage/layouts/LayoutAuthenticated.vue'
import NewServiceTypeForm from '@/components/manage/form/NewServiceTypeForm.vue';
// Check role
import { useAuth0 } from "@auth0/auth0-vue";
import { useRouter } from 'vue-router'
const router = useRouter()
const { isAuthenticated } = useAuth0();
const { user } = useAuth0();
if (isAuthenticated) {
    // console.log(user.role);
    if (user.value.role) {
        // console.log(user);
    }
    else {
        router.push('/');
    }
}
</script>