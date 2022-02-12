import { createApp } from 'vue';
import App from './App.vue';

// Vue Modules
import router from './router';
import store from './store/index';

// Adding Font Awesome icons to the application
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faArrowRight, faArrowLeft, faTimes, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faBars, faArrowRight, faArrowLeft, faTimes, faSearch);

createApp(App).use(store).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app');