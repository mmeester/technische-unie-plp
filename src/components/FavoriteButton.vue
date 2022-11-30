<script setup lang="ts">
  import { ref } from 'vue';
  import type { Ref } from 'vue';
  import { isFavorite, addToFavorites, removeFromFavorites } from '../helpers/favorites';

  const props = defineProps<{
    id: number;
  }>();

  const isActive: Ref<boolean> = ref(isFavorite(props.id));

  function toggleFavorite() {
    isActive.value ? removeFromFavorites(props.id) : addToFavorites(props.id);
    isActive.value = !isActive.value;
  }
</script>

<template>
  <button class="favorite-button" :class="isActive && 'favorite-button--active'" @click="toggleFavorite">
    {{ isActive ? 'Verwijder van favorieten' : 'Voeg toe aan favorieten' }}
  </button>
</template>

<style scoped>
  .favorite-button {
    cursor: pointer;
    padding: var(--whitespace-xs);
    border: 0;
    border-radius: var(--border-radius);
  }

  .favorite-button--active {
    color: RGB(var(--color-white));
    background-color: RGB(var(--color-green));
  }
</style>
