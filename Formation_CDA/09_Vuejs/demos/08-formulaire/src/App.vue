<script setup>

import { ref } from 'vue';

let gender = ref("");
let firstName = ref("");
let lastName = ref("");
let checked = ref(false)
let activity = ref("");
let lazyTrim = ref("");

</script>

<template>
  <form @submit.prevent="console.log(`${gender} ${firstName}`)">
    <label for="gender">mr</label>
    <input type="radio" value="mr" v-model="gender">

    <label for="">mme</label>
    <input type="radio" value="mme" v-model="gender">

    <label for="">non binaire</label>
    <input type="radio" value="non binaire" v-model="gender">

    <div>
      <label for="">firstName</label>
      <input type="text" name="" id="" v-model.lazy="firstName">
    </div>

    <div>
      <label for="">lastName</label>
      <input type="text" name="" id="" v-model.lazy="lastName">
    </div>

    <div>
      <input type="checkbox" id="checkbox" v-model="checked" />
      <label for="checkbox">Accepter les condition</label>
    </div>

    <div>
      <label for="">{{ lazyTrim }}</label>
      <input v-model.lazy.trim="lazyTrim">
    </div>

    <div>
      <select v-model="activity">
        <option disabled value="">Sélectionner une option</option>
        <option>Aquaplaning</option>
        <option>Lancer de haches</option>
        <option>Cacahuètes</option>
      </select>
    </div>

    <button type="submit">Envoyer le formulaire</button>
  </form>
</template>

<style scoped></style>