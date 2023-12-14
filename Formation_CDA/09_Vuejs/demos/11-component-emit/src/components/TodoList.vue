<script setup>
import {ref} from 'vue';
import AddTodo from './AddTodo.vue';
import TodoItem from './TodoItem.vue';

const todos = ref([]);

const addTodo = newTodoText => {
  todos.value.push({text: newTodoText})
}

const removeTodo = index => {
  todos.value.splice(index,1)
}
</script>

<template>
  

<div>
  <AddTodo @add-todo="addTodo" />
  <h3 v-if="todos.length" class="mt-4"> Liste des tâches : </h3>
  <ul>
    <TodoItem v-for="(todo,index) in todos"
    :key="index"
    :todo="todo"
    :index="index"
    @remove-todo="removeTodo"/>
  </ul>

</div>


</template>

<style scoped>

</style>
