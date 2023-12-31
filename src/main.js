import { createApp} from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router';

import TheFooter from './components/TheFooter.vue';
import TheHeader from './components/TheHeader.vue'

import TheHome from './components/pages/TheHome.vue'
import TheCervice from './components/pages/TheCervice.vue'
import TheContact from './components/pages/TheContact.vue'
import TheAdmin from './components/pages/TheAdmin.vue'

// const TheCervice = defineAsyncComponent(()=> import('./components/pages/TheCervice.vue'));
// const TheContact = defineAsyncComponent(()=> import('./components/pages/TheContact.vue'));

const router = createRouter({
    history:createWebHistory(),
    routes:[
        {path:'/', redirect:'/home'},
        {path:'/home', component:TheHome},
        {path:'/service', component:TheCervice},
        {path:'/contact', component:TheContact},
        {path:'/admin', component:TheAdmin},
        {path:'/:notFound(.*)', redirect:'/home'},
    ]
});


const app = createApp(App);

app.component('the-header', TheHeader);
app.component('the-footer', TheFooter);
app.use(router);

app.mount('#app')
