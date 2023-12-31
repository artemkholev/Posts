import components from './shered/UI';
import './app/index.scss';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from '@/app/App.vue';
import router from '@/pages';

const app = createApp(App)

components.forEach(component => {
  app.component(component.name, component)
})


app
  .use(createPinia())
  .use(router)
  .mount('#app')