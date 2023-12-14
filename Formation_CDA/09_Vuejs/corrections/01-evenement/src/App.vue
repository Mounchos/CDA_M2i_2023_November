<script setup>
import { ref } from 'vue';

let message = ref("Vous êtes tous très beaux");

function inverseString() {
  message.value = message.value.split('').reverse().join('');
}

function addExclamation() {
  message.value += "!";
}

function alertUser() {
  alert(message.value)
}

</script>

<template>
  <h1>{{ message }}</h1>

  <div>
    <button v-on:click="inverseString">inverser</button>

    <button v-on:click="addExclamation">ajouter "!"</button>
  </div>

<div>
  <a v-on:click.prevent="alertUser">Lien alert message</a>
</div>
  
</template>

<style scoped></style>