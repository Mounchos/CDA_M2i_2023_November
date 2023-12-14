<script setup>
import { inject } from 'vue';


const {contacts} = inject('contacts');

</script>

<template>
<h1>ContactView</h1>

<h3> - Liste contact - </h3>
<ul>
  <li v-for="c of contacts"><RouterLink :to="`/contact/${c.id}`">{{c.firstName + ' ' + c.lastName }}</RouterLink></li>
</ul>


</template>

<style scoped>

</style>