<script setup lang="ts">
  import type { Product } from '../interfaces/Product';
  import FavoriteButton from './FavoriteButton.vue';
  
  interface Props {
    product: Product;
  }
  
  defineProps<Props>();
</script>

<template>
  <div class="product-item">
    <img class="product-item__image" :src="product.image">
    <div class="product-item__content">
      <h4 class="product-item__name">{{ product.name }}</h4>
      <p class="product-item__description">{{ product.description }}</p>
    </div>
    <div class="product-item__actions">
      <p class="product-item__price"><span>{{product.price }}</span> netto</p>
      <FavoriteButton :id="product.id" />
    </div>
  </div>
</template>

<style scoped>
  .product-item {
    padding: var(--whitespace-m);
    margin-bottom: var(--whitespace-m);
    border: 1px solid RGB(var(--color-grey-light));
  }

  @media screen and (min-width: 50rem) {
    .product-item {
      display: flex;
    }
  }

  .product-item__image {
    height: 10rem;
    width: 100%;
    object-fit: contain;
    margin-bottom: var(--whitespace-m);
  }

  @media screen and (min-width: 50rem) {
    .product-item__image {
      flex: 0 0 10rem;
      width: auto;
      margin-right: var(--whitespace-m);
      margin-bottom: 0;
    }
  }

  .product-item__content {
    margin-bottom: var(--whitespace-m);
  }

  @media screen and (min-width: 50rem) {
    .product-item__content {
      flex: 1;
      margin-bottom: 0;
    }
  }

  .product-item__name {
    margin-bottom: var(--whitespace-s);
    font-weight: bold;
  }

  .product-item__description {
    color: RGB(var(--color-grey-dark));
  }

  .product-item__actions {
    display: flex;
    justify-content: space-between;
  }

  @media screen and (min-width: 50rem) {
    .product-item__actions {
      display: block;
      flex: 0 0 10rem;
      margin-left: var(--whitespace-m);
    }
  }

  @media screen and (min-width: 50rem) {
    .product-item__price {
      margin-bottom: var(--whitespace-s);
    }
  }

  .product-item__price span {
    font-size: var(--font-size-l);
    font-weight: bold;
  }
</style>
