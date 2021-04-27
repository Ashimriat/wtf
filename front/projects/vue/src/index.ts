import { createApp } from 'vue';
import App from './App';
import PrimeVue from 'primevue/config';
import primeConfig from './config/primeui';


const app = createApp(App, primeConfig);
app.use(PrimeVue);
    