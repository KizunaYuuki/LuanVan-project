<template>
    <LayoutAuthenticated>
        <ServiceForm :action="'ADD'"></ServiceForm>
    </LayoutAuthenticated>
</template>

<script setup>
import LayoutAuthenticated from '@/components/manage/layouts/LayoutAuthenticated.vue'
import ServiceForm from '@/components/manage/form/ServiceForm.vue';
</script>