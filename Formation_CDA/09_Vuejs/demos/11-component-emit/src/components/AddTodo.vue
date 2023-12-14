<script setup>
import {ref, defineEmits} from 'vue';

const newTodoText = ref('');
const emit = defineEmits(['add-todo']);

function emitAddTodo(){
  emit('add-todo', newTodoText.value);
  newTodoText.value = '';
}

</script>

<template>
  <div class="d-flex flex-row">
    <input type="text" placeholder="Saisir une tache" class="form-control mx-2" v-model="newTodoText" @keyup.enter="emitAddTodo">
    <button class="btn btn-primary" @click="emitAddTodo">Add</button>
  </div>
</template>

<style scoped>

</style>