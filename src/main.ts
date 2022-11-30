import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import { worker } from './mocks/browser';
import Home from './components/Home.vue';
import Products from './components/Products.vue';
import Favorites from './components/Favorites.vue';

import './assets/css/main.css';

if (process.env.NODE_ENV === 'development') {
  worker.start();
}

const routes = [
  { path: '/', redirect: '/producten' },
  { path: '/producten', component: Products },
  { path: '/favorieten', component: Favorites },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

const app = createApp(App);

app.use(router);
app.mount('#app');
