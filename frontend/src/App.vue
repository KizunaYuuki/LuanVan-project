<template>
    <Header></Header>
    <header>
        <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->
        <div class="wrapper">
            <nav class="text-[#50d71e] flex flex-wrap content-center justify-center m-[4px]">
                <RouterLink to="/" class="m-[4px]">Home</RouterLink>
                <RouterLink to="/about" class=" m-[4px]">About</RouterLink>
            </nav>
        </div>
    </header>

    <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue';
</script>