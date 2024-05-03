import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/App.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  // Add more routes as needed
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;