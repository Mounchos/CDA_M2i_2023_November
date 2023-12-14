<script setup>
import { inject } from 'vue';
import { useRoute, useRouter } from 'vue-router';


const {contacts} = inject('contacts');

const route = useRoute();
const router = useRouter();

const {contactId} = route.params

const contactFound = contacts.value.find(c => c.id === contactId);

if(!contactFound){
  router.push('/not-found')
}

</script>

<template>
<h1>DetailContact</h1>

<div>
  <h3> Id : {{ contactFound?.id }}</h3>
  <ul>
    <li>firstName : {{ contactFound?.firstName }}</li>
    <li>lastName :{{ contactFound?.lastName }} </li>
  </ul>
</div>


</template>

<style scoped>

</style>