<script setup lang="ts">
  import type { Product } from '@/interfaces/Product';
  import ProductItem from './ProductItem.vue';
    
  interface Props {
    products: Product[];
  }

  defineProps<Props>();
</script>

<template>
  <ul class="product-list">
    <li v-for="product in products" :key="id">
      <ProductItem :product="product" />
    </li>
  </ul>
</template>

<style scoped>
  .product-list {
    list-style: none;
  }
</style>
