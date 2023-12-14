<script setup>
import { ref, computed } from 'vue';
import { v4 as uuidv4 } from 'uuid';

let todoInput = ref("");
let todos = ref([]);
let filterInput = ref("all");

let filteredTodos = computed(() => {
  switch (filterInput.value) {
    case "all":
      return todos.value;
    case "done":
      return todos.value.filter(t => t.checked);
    case "todo":
      return todos.value.filter(t => !t.checked)
  }
});

function createTodo() {
  if (!todoInput.value) return;
  let todo = { id: uuidv4(), title: todoInput.value, checked: false };
  todos.value.push(todo);
  todoInput.value = "";
}


</script>

<template>
  <div>
    <input type="text" placeholder="saisir une tâche ..." v-model="todoInput" @keyup.enter="createTodo">
    <select name="" id="" v-model="filterInput">
      <option value="all">all</option>
      <option value="done">done</option>
      <option value="todo">todo</option>
    </select>
  </div>


  <div>
    <ul>
      <li v-for="todo in filteredTodos" :key="todo.id">
        <span>{{ todo.title }}</span> <input type="checkbox" v-model="todo.checked">
      </li>
    </ul>
  </div>
</template> 

<style scoped>
input {
  padding: 12px 20px;
  border: none;
  border-bottom: 1px solid rgb(189, 189, 189);
}

input:focus {
  outline: none;
  border-bottom: 1px solid gold;
}

select {
  appearance: none;
  /* safari */
  -webkit-appearance: none;
  /* other styles for aesthetics */
  font-size: 1.15rem;
  padding: 0.675em 6em 0.675em 1em;
  background-color: #fff;
  border: 1px solid #caced1;
  border-radius: 0.25rem;
  color: #000;
  cursor: pointer;
}

select::after {
  --size: 0.3rem;
  position: absolute;
  content: "";
  right: 1rem;
  pointer-events: none;
}

select::before {
  border-left: var(--size) solid transparent;
  border-right: var(--size) solid transparent;
  border-bottom: var(--size) solid black;
  top: 40%;
}
</style>