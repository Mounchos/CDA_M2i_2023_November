<script setup>
import { ref, reactive, watch, watchEffect } from 'vue';

let count = ref(0);

let id = ref(1);
let data = ref(null);
let error = ref(null);

let person = reactive({ firstName: "Jean", lastName: "Dupont" });

// watch prend en paramètre une source reactive
// le second paramètre est une callback avec la nouvelle valeur ainsi que l'ancienne
watch(count, (newValue, oldValue) => {
  console.log("new value:", newValue, "old value:", oldValue);
}, { immediate: "true" });

// Sur les propriétés d'un objet, il faut utiliser une fonction getter
watch(() => person.firstName, (newFirstName) => {
  console.log(newFirstName);
});

watchEffect(async () => {
  try {
    console.log(id.value);
    const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${id.value}`);
  data.value = await result.json();
  } catch(e) {
    error.value = e;
  }
});


</script>

<template>
  <h1>{{ count }}</h1>
  <button @click="count++">add one</button>

  <input type="text" v-model="person.firstName">

  <div v-if="data">
    <input v-model="id">
  <p>{{ data.title }}</p>
  <p>{{ data.body }}</p>
  </div>


</template>

<style scoped></style>