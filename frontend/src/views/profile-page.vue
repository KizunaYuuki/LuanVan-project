<template>
    <Header></Header>
    <main>
        <div class="content-layout">
            <div class="content__body">
                <!-- <p id="page-description">
                <span>You can use the <strong>ID Token</strong> to get the profile
                    information of an authenticated user.</span>
                <span><strong>Only authenticated users can access this page.</strong></span>
            </p> -->
                <div class="profile-grid">
                    <div class="profile__header">
                        <img :src="user.picture" alt="Profile" class="profile__avatar" />
                        <div class="profile__headline">
                            <h2 class="profile__title text-slate-950">{{ user.name }}</h2>
                            <span class="profile__description">{{ user.email }}</span>
                        </div>
                    </div>
                    <div class="profile__details">
                        <CodeSnippet title="Thông tin cá nhân" :code="code" />
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
  
<script setup>
import CodeSnippet from "@/components/code-snippet.vue";
import Header from '../components/Header.vue';
import { useAuth0 } from "@auth0/auth0-vue";
import { getUserByEmail, createUser } from "@/services/user.service";

const { user } = useAuth0();
const code = user ? JSON.stringify(user.value, null, 2) : "";
const { getAccessTokenSilently } = useAuth0();

const getUserByEmailAxios = async (user) => {
    // edit data
    const userData = {
        email: user.value?.email,
        name: user.value?.name
    }

    const accessToken = await getAccessTokenSilently();
    const { data, error } = await getUserByEmail(accessToken, userData);

    if (data) {
        console.log(data);
    } else {
        const { data, error } = await createUser(accessToken, userData);
        if (data) {
            console.log(data);
        }
    }

    if (error) {
        console.log(error.message);
    }
};

// run function
getUserByEmailAxios(user);
</script>