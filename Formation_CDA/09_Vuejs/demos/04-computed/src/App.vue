<script setup>
import { ref, computed } from 'vue';
let numbers = ref([1, 4, 12, 16, 15, 4]);

let nombrePairs = computed(() => {
  return numbers.value.filter(n => n % 2 === 0).length;
})

function addToNumbers() {
  numbers.value.push(Math.floor(Math.random() * 100));
}

</script>

<template>
  <h1>Voici des nombres</h1>
  <p>{{ numbers.toString() }}</p>
  <h2>Il y a {{ nombrePairs }} dans ce tableau</h2>
  <button v-on:click="addToNumbers">Ajouter un nombre</button>
</template>

<style scoped></style>