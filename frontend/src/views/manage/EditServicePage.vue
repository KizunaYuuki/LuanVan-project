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
</script>