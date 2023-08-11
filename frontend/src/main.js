// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import VueGtag from "vue-gtag-next";

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(VueGtag, {
    property: [
        { id: 'G-T117TRW8PB', default: true }
      ]
});

app.mount('#app')