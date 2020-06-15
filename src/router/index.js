import Vue from 'vue';
import VueRouter from 'vue-router';
import Dashboard from '../views/Dashboard.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/data-editor',
    name: 'DataEditor',
    component: () => import('../views/DataEditor.vue'),
  },
  {
    path: '/smart-search',
    name: 'SmartSearch',
    component: () => import('../views/SmartSearch.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
