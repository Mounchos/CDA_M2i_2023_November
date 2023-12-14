<script setup>
import { ref } from 'vue';

let age = ref(0);
let ok = ref(true);
let prenoms = ref(["Arthur", "Antoine", "Ihab"]);

let produits = ref([{ id: 1, name: "telephone" }, { id: 40, name: "souris" }, { id: 34, name: "clavier" }])


</script>

<template>
  <h1>Welcome to my super site</h1>
  <input :input="age" @change="e => age = e.target.value" type="text">

  <div>{{ age >= 18 ? "légal" : "illégal" }}</div>

  <div v-if="age > 18">
    <p>Vous avez l'âge légal pour commander de l'alcool</p>
  </div>
  <div v-else-if="age == 18">
    <p>C'est ok mais bon attention quand même</p>
  </div>
  <div v-else>
    <p>Accès interdit</p>
  </div>

  <div v-show="ok">
    <p>Ceci est secret</p>
  </div>

  <div>
    <button @click="ok = !ok">afficher</button>
  </div>

  <div>
    <ul>
      <li  v-for="prenom in prenoms">{{ prenom }}</li>
    </ul>
  </div>

  <div>
    <!-- Quand le paramètre n'est pas utilisé on met le caractère "_" -->
    <ul>
      <li v-for="(_, index) in prenoms">{{ index }}</li>
    </ul>
  </div>



  <div>
    <h2>Produits</h2>
    <ul v-for="produit in produits" :key="produit.id">
      <li><span class="bold">{{ produit.id }}</span> {{ produit.name }}</li>
    </ul>
  </div>
</template>

<style scoped>
  .bold {
    font-weight: bold;
  }
</style>