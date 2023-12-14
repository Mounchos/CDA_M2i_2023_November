<script setup>
import { reactive, ref, computed } from 'vue';

const personne = reactive({firstName: "Jean", lastName:"Dupont", dateOfBirth: new Date(1990, 1, 1)})

function onSetAge(e) {
  // Il faut réaffecter une nouvelle date, sans quoi la réactivité n'est pas déclenchée
  personne.dateOfBirth = new Date(e.target.value, personne.dateOfBirth.getMonth(), personne.dateOfBirth.getDay());
}

const age = computed(() => {
  // On récupère la date actuelle
  let currentDate = Date.now();
  // On fait la différence de la date actuelle - la date de naissance en Epoch
  // Epoch: date à partir du 01/01/1970
  let diffDate = new Date(currentDate - personne.dateOfBirth.getTime());
  // On récupère l'année de cette date auquel on soustrait l'année EPOCH
  return diffDate.getFullYear() - 1970;
});

</script>

<template>
  <h1>{{ personne.firstName + ' ' + personne.lastName }}</h1>
  <br>
  <p>Age: {{ age }}</p>

  <label for="year">Année:</label>
  <input id="year" type="number" @input="onSetAge">

</template>

<style scoped>

</style>