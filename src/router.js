import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from './pages/HomePage.vue';
import TestPage from './pages/TestPage.vue';
import HTodoPage from './pages/HTodoPage.vue';

import VueTourDemo from './components/demo/VueTourDemo.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/test', component: TestPage },
  { path: '/h-todo', component: HTodoPage },
  { path: '/tour', component: VueTourDemo },
];

const router = createRouter({ history: createWebHashHistory(), routes });

export default router;