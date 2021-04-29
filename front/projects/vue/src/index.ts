import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import App from './App';
import primeUiConfig from './config/primeui';
import 'primevue/resources/themes/saga-blue/theme.css'; 
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';


createApp(App).use(PrimeVue, primeUiConfig).mount('#app');
