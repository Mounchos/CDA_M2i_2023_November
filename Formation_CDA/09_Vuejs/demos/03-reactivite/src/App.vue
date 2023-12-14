<script setup>
import {ref, reactive, computed} from 'vue';

let count = ref(0);
// {value: 0}
count.value = 3;

// pas pratique !
let personne = ref({id: 1, firstName:"toto", lastName:"tata"});
// personne.value.firstName;
// {value: {id: 1, firstName:"toto", lastName:"tata"}}

let personne1 = reactive({id: 2, firstName:"jean", lastName:"dupont"})
// {id: 2, firstName:"jean", lastName:"dupont"}
// personne1.firstName

function addOne(e) {
  console.log(e);
  count.value++;
}


</script>

<template>
  <h1>Bienvenue sur mon compteur de la mort</h1>

  <div>
    <span class="important">{{ count }}</span>
    <button v-on:click="addOne">add 1</button>
  </div>

  <div>
    <h2>{{ personne1.firstName }}</h2>
  </div>

</template>

<style scoped>
  .important {
    color: red;
    font-size: 12rem;
  }
</style>
