import { ref } from 'vue';

let i = 0;

export const items = ref([
  { id: i++, text: 'Piim', isDone: false, importance: 2 },
  { id: i++, text: 'Viin', isDone: true, importance: 1 },
  { id: i++, text: 'Sai', isDone: false, importance: 3 },
  { id: i++, text: 'Mac', isDone: true, importance: 2 },
]);
