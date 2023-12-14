<script setup>
defineProps(['customer', 'details'])
</script>

<template>
  <div class="card">
    <h2>{{ customer.name }}</h2>
    <p>{{ customer.email }}</p>
    <p>{{ customer.phone }}</p>
    <button @click="showDetails(customer.id)">Cliquez pour plus de détails</button>
    <div v-if="details.id === customer.id">
      <p v-for="(value, key) in details" :key="key">{{ key }}: {{ value }}</p>
    </div>
  </div>
</template>
