import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { db } from './firebase'
import { collection, getDocs } from 'firebase/firestore/lite';

const app = createApp(App)

app.use(router)

app.mount('#app')

const citiesCol = collection(db, 'participants');
getDocs(citiesCol).then(citySnapshot => {
    const cityList = citySnapshot.docs.map(doc => doc.data());
    console.log(cityList);
});
