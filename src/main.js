import { createApp } from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'buefy/dist/buefy.css'

createApp(App).use(store).use(router).use(Buefy).mount('#app')
