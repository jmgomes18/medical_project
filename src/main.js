import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { makeServer } from './server'
import { createApp } from 'vue'

createApp(App).use(store).use(router).mount('#app');

if (process.env.NODE_ENV === "development") {
    makeServer();
}
