import { createApp } from 'vue'
import App from './App.vue'
import TheFooter from './components/TheFooter.vue';
import TheHeader from './components/TheHeader.vue'

const app = createApp(App);
app.component('the-footer', TheFooter);
app.component('the-header', TheHeader);
app.mount('#app')
