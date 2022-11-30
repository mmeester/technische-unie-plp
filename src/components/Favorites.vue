<script setup lang="ts">
  import { ref } from 'vue';
  import type { Ref } from 'vue';
  import { getProducts } from '../services/product';
  import ProductList from './ProductList.vue';

  interface Product {
    id: number;
    name: string;
    description: string;
    image: string;
    price: number;
  }

  const favoritesStorage = localStorage.getItem('favorites');
  const favorites = favoritesStorage ? JSON.parse(favoritesStorage) : [];

  const products: Ref<Product[]> = ref([]);
  const data = await getProducts();

  products.value = data.products.filter((product: Product) => favorites.includes(product.id));
</script>

<template>
  <h1 class="page-heading">Favorieten</h1>
  <div class="page-nav">
    <p>Favorieten: {{ products.length }}</p>
    <nav>
      <router-link to="/producten" class="nav-link">Alle producten</router-link>
    </nav>
  </div>
  <ProductList :products="products" />
</template>

<style scoped>
</style>