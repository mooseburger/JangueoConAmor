import './assets/main.css'

import { createApp } from 'vue'
import '../node_modules/bootstrap/scss/bootstrap.scss'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
