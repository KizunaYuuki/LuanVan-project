<template>
    <LayoutAuthenticated>
        <EditPromotionForm :promotion_id="props.promotion_id"></EditPromotionForm>
    </LayoutAuthenticated>
</template>

<script setup>
import LayoutAuthenticated from '@/components/manage/layouts/LayoutAuthenticated.vue';
import EditPromotionForm from '../../components/manage/form/EditPromotionForm.vue';

const props = defineProps({
    promotion_id: '' // Promotion Id
})
</script>