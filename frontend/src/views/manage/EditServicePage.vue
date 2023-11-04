<template>
    <LayoutAuthenticated>
        <EditServiceForm :service_id="props.service_id"></EditServiceForm>
    </LayoutAuthenticated>
</template>

<script setup>
import LayoutAuthenticated from '@/components/manage/layouts/LayoutAuthenticated.vue'
import EditServiceForm from '@/components/manage/form/EditServiceForm.vue';

const props = defineProps({
    service_id: '' // Service Id
})
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