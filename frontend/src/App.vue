<template>
    <Header></Header>

    <button @click="clickEventTest">Send Data to G4</button>
    <!-- Noi dung trang -->
    <RouterView />

    <Footer></Footer>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

import { useGtag } from "vue-gtag-next";


const { event } = useGtag()
function clickEventTest() {
    alert('Clicked')
    event('clickEventTest', {
        'event_category': 'Clicked',
        'event_label': 'Clicked Button Send Data to G4'
    })
}
</script>