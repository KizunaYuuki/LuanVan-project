<template>
    <main>
        <div class="flex h-[calc(100vh-208px)] items-center justify-center flex-col hover:scale-[1.01] transition-all duration-[0.3s] ease-in-out delay-[0ms]">
            <h1 id="page-title" class="text-[60px]">Lost your way?</h1>
            <h2>Sorry, we can't find that page. You'll find lots to explore on the home page. </h2>
            <RouterLink to="/" class="my-[8px] inline-flex items-center px-[8px] py-2 
                font-semibold leading-6 text-sm shadow rounded-md text-white bg-[#0096faee] hover:bg-[#0096fa]">Về Trang chủ</RouterLink>
            <h3>Error Code <strong>NSES-404</strong></h3>
        </div>
    </main>
</template>

<script setup>
import PageLayout from "@/components/page-layout.vue";
</script>
