<script setup>
import CounterButton from './components/CounterButton.vue';
</script>

<template>
  <CounterButton color="red" increment="1" default-value="0"></CounterButton> 
  <CounterButton color="blue" increment="2" default-value="10"> </CounterButton> 

</template>

<style scoped></style>