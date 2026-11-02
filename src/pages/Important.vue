<script setup>
import { computed } from 'vue';
import ItemList from '../components/ItemList.vue';
import { items } from '../items.js';

let importantItems = computed(() =>
  [...items.value]
    .filter(item => item.importance === 3)
    .sort((a, b) => b.importance - a.importance)
);
</script>

<template>
  <div class="container content mt-3">
    <ItemList :items="importantItems" title="Important Items" />
  </div>
</template>

<style></style>
