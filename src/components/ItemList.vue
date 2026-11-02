
<script setup>
defineProps(['items', 'title']);
</script>

<template>
  <h1>{{ title }}</h1>

  <ul>
    <li v-for="item in items" :key="item.id">
      {{ item.text }} - 
      <span v-if="item.importance === 3">High</span>
      <span v-else-if="item.importance === 2">Medium</span>
      <span v-else>Low</span>

      <input type="checkbox" v-model="item.isDone">
    </li>
  </ul>
</template>
