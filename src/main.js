import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { makeServer } from './server'
import { createApp } from 'vue'
import { VeeValidate } from 'vee-validate';

import setupInterceptor from './api/setupInterceptor';

setupInterceptor(store);

createApp(App)
    .use(store)
    .use(router)
    .use(VeeValidate)
    .mount('#app');

if (process.env.NODE_ENV === "development") {
    makeServer();
}
