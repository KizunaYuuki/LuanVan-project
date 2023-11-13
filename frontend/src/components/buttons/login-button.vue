<template>
    <button class="hover:scale-[1.03] transition-all duration-[0.3s] ease-in-out delay-[0ms] my-[8px] inline-flex items-center px-[8px] py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-[#0096faee] hover:bg-[#0096fa]" @click="handleLogin">Log In</button>
</template>
  
<script setup>
import { useAuth0 } from "@auth0/auth0-vue";

const { loginWithRedirect } = useAuth0();
const { user } = useAuth0();

const handleLogin = () => {
    loginWithRedirect({
        appState: {
            // target: window.location.pathname,
            target: "/profile",
        },
    });
};
</script>