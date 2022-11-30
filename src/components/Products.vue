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

  const products: Ref<Product[]> = ref([]);
  const data = await getProducts();

  products.value = data.products.sort((productA: Product, productB: Product) => productA.price - productB.price);
</script>

<template>
  <h1 class="page-heading">Gevonden producten</h1>
  <div class="page-nav">
    <p>Zoekresultaten: {{ products.length }}</p>
    <nav>
      <router-link to="/favorieten" class="nav-link">Favorieten</router-link>
    </nav>
  </div>
  <ProductList :products="products" />
</template>

<style scoped>
</style>