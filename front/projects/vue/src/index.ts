import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import App from './App.vue';
import primeUiConfig from './primeui';
import 'primevue/resources/themes/saga-blue/theme.css'; 
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';


createApp(App).use(PrimeVue, primeUiConfig).mount('#app');
