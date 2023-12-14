<script setup>

import { ref } from 'vue';

let inputValue = ref('');

let monInput = ref("");

function sayHello() {
  alert("hello");
}

function enterInputHandler() {
  console.log(inputValue.value);
  inputValue.value = '';
}

function sayHelloTo(name, e) {
  console.log(e);
  console.log(name)
}

</script>

<template>

  <!-- v-on pour écouter un évènement sur un élément HTML -->
  <button v-on:click="sayHello">Hello</button>

  <!-- Utilisation du raccourci @ -->
  <button @click="sayHello">Version avec le shortcut @</button>

  <!-- Exécuter du code inline -->
  <button @click="(e) => console.log('hello' + e.target.toString())">version avec le code inline</button>

  <!-- Utilisation des modificateurs d'évènements -->
  <a href="#" @click.prevent="console.error('aie')">Mon lien</a>
  <a href="#" @click.once="console.error('once')">Mon lien</a>

  <!-- Vue fourni une variable spéciale $event pour récupérer l'évènement du DOM -->
  <a href="#" @click="sayHelloTo(monInput, $event)">Variable $event</a>

  <p>{{ inputValue }}</p>
  <!-- Ecouter des évènements du clavier -->
  <!-- v-model permet de binder une variable réactive à un champ de formulaire -->
  <input ref="monInput" id="toto" type="text" v-model="inputValue" @keyup.enter="enterInputHandler"> 

  <!-- ref permet d'accéder à une ref d'un autre élément du template -->
  <button @click="() => console.log($refs.monInput.value)" >récupérer la valeur de l'input</button>
</template>

<style scoped>

</style>