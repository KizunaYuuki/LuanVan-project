<template>
    <!-- <Header></Header> -->

    <!-- <button @click="clickEventTest">Send Data to G4</button> -->
    <!-- Noi dung trang -->
    <!-- <RouterView /> -->

    <!-- <Footer></Footer> -->
    
    <div v-if="isLoading" class="page-layout">
        <PageLoader />
    </div>
    <router-view v-else />
</template>    

<script setup>
import { RouterLink, RouterView } from 'vue-router';
import PageLoader from "@/components/page-loader.vue";
import { useAuth0 } from "@auth0/auth0-vue";
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

// Test Google Analytics 4
import { useGtag } from "vue-gtag-next";
const { event } = useGtag()
function clickEventTest() {
    alert('Clicked')
    event('clickEventTest', {
        'event_category': 'Clicked',
        'event_label': 'Clicked Button Send Data to G4'
    })
}

const { isLoading } = useAuth0();
</script>
