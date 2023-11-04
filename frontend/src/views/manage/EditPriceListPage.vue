<template>
    <LayoutAuthenticated>
        <EditPriceListForm :id="props.id"></EditPriceListForm>
    </LayoutAuthenticated>
</template>

<script setup>
import LayoutAuthenticated from '@/components/manage/layouts/LayoutAuthenticated.vue'
import EditPriceListForm from '@/components/manage/form/EditPriceListForm.vue';

const props = defineProps({
    id: ''
})
</script>