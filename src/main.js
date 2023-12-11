import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router';

import App from './App.vue'
import TheFooter from './components/TheFooter.vue';
import TheHeader from './components/TheHeader.vue'

import TheHome from './components/pages/TheHome.vue'
import TheCervice from './components/pages/TheCervice.vue'

const router = createRouter({
    history:createWebHistory(),
    routes:[
        {path:'/home', component:TheHome},
        {path:'/serviece', component:TheCervice},
    ]
});


const app = createApp(App);
app.use(router);

app.component('the-footer', TheFooter);
app.component('the-header', TheHeader);
app.mount('#app')
