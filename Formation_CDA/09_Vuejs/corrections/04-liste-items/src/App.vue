<script setup>
  import { ref } from 'vue';

  let isDisplayed = ref(true);

  let integers = ref([1, 3, 5, 12]);

  function addNumber() {
    integers.value.push(integers.value.length + 1);
  }

  function removeNumber() {
    integers.value.pop();
  }

  function inverseNumbers() {
    integers.value.reverse();
  }

</script>

<template>
  <div>
    <button @click="isDisplayed = !isDisplayed">afficher</button>
    <button @click="addNumber">ajouter nombre</button>
    <button @click="removeNumber">supprimer nombre</button>
    <button @click="inverseNumbers">inverser liste</button>
  </div>

  <div v-if="isDisplayed && integers.length">
    <ul>
      <li v-for="integer in integers">{{ integer }}</li>
    </ul>
  </div>
  <div v-else-if="integers.length">
    <p>La liste est cachée</p>
  </div>
  <div v-else>
    <p>La liste est vide</p>
  </div>
</template>

<style scoped>

</style>