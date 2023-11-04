<template>
    <LayoutAuthenticated>
        <EditServiceTypeForm :id="props.id"></EditServiceTypeForm>
    </LayoutAuthenticated>
</template>

<script setup>
import LayoutAuthenticated from '@/components/manage/layouts/LayoutAuthenticated.vue'
import EditServiceTypeForm from '@/components/manage/form/EditServiceTypeForm.vue';

const props = defineProps({
    id: '' // Service Id
})
</script>