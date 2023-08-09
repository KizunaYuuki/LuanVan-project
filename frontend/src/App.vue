<template>
    <Header></Header>
    
    <!-- Noi dung trang -->
    <RouterView />

    <Footer></Footer>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
</script>