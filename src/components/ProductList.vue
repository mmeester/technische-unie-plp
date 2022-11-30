<script setup lang="ts">
  import ProductItem from './ProductItem.vue';

  const props = defineProps<{
    products: {
      id: number;
      name: string;
      description: string;
      image: string;
      price: number;
    }[]
  }>();
</script>

<template>
  <ul class="product-list">
    <li v-for="{ id, name, description, image, price } in props.products" :key="id">
      <ProductItem :id="id" :name="name" :description="description" :image="image" :price="price" />
    </li>
  </ul>
</template>

<style scoped>
  .product-list {
    list-style: none;
  }
</style>
