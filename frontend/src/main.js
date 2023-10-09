import { createAuth0 } from "@auth0/auth0-vue";
import { createApp } from "vue";
import { createPinia } from 'pinia';

import App from "./App.vue";
import "./assets/css/styles.css";
import router from "./router";
import './assets/tailwind.css'
import VueGtag from "vue-gtag-next";
import InstantSearch from 'vue-instantsearch/vue3/es';
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

// Prevents toasts of the same type from appearing simultaneously, discarding duplicates
const filterBeforeCreate = (toast, toasts) => {
    if (toasts.filter(t => t.type === toast.type).length !== 0) {
        // Returning false discards the toast
        return false;
    }
    // You can modify the toast if you want
    return toast;
}

const app = createApp(App);

app
    .use(InstantSearch)
    .use(createPinia())
    .use(router)
    .use(
        createAuth0({
            domain: import.meta.env.VITE_AUTH0_DOMAIN,
            clientId: import.meta.env.VITE_AUTH0_CLIENT_ID,
            authorizationParams: {
                audience: import.meta.env.VITE_AUTH0_AUDIENCE,
                redirect_uri: import.meta.env.VITE_AUTH0_CALLBACK_URL,
            },
        })
    )
    .use(Toast, { filterBeforeCreate })
    .use(VueGtag, {
        property: [
            { id: 'G-T117TRW8PB', default: true }
        ]
    });

app.mount('#app')