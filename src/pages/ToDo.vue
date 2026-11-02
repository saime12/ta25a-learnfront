
<script setup>
import { computed, ref } from 'vue';
import ItemList from '../components/ItemList.vue';

let i = 0;

let items = ref([
  { id: i++, text: 'Piim', isDone: false, importance: 2 },
  { id: i++, text: 'Viin', isDone: true, importance: 1 },
  { id: i++, text: 'Sai', isDone: false, importance: 3 },
  { id: i++, text: 'Mac', isDone: true, importance: 2 },
]);

let newItem = ref('');
let newImportance = ref(2);

function add() {
  if (newItem.value.trim() !== '') {
    items.value.push({
      id: i++,
      text: newItem.value.trim(),
      isDone: false,
      importance: newImportance.value
    });
  }

  newItem.value = '';
  newImportance.value = 2;
}

let doneItems = computed(() =>
  items.value.filter(item => item.isDone)
);

let toDoItems = computed(() =>
  items.value.filter(item => !item.isDone)
);
</script>

<template>
  <div class="container content mt-3">
    <div class="field has-addons">
      <div class="control is-expanded">
        <input
          @keydown.enter="add"
          v-model="newItem"
          class="input"
          type="text"
          placeholder="Enter a new item"
        >
      </div>

      <div class="control">
        <div class="select">
          <select v-model="newImportance">
            <option :value="3">High</option>
            <option :value="2">Medium</option>
            <option :value="1">Low</option>
          </select>
        </div>
      </div>

      <div class="control">
        <button @click="add" class="button is-info">
          Add
        </button>
      </div>
    </div>

    <ItemList :items="items" title="All Items" />
    <ItemList :items="doneItems" title="Done Items" />
    <ItemList :items="toDoItems" title="ToDo Items" />
  </div>
</template>

<style></style>
