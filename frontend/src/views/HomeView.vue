<template>
    <main>
        <h1 class="h-[100vh]">Home page</h1>
    </main>
</template>

<script setup>
import { useGtag } from "vue-gtag-next";
const { pageview } = useGtag()
const track = () => {
    pageview({ page_path: "/about" });
};
track()
</script>