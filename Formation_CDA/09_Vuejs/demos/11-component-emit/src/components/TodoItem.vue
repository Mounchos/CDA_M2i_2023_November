<script setup>
import {defineProps} from 'vue';

const props = defineProps({
  todo: {
    type: String,
    required: true,
  },
  index: {
    type: Number,
    required: true
  }
})

</script>

<template>
  
 <li class="d-flex flex-row justify-content-between my-2">
  <div>
{{ todo.text }}
  </div>
  <div>
    <button class="btn btn-danger mx-2" @click="$emit('remove-todo', index)">Remove</button>
  </div>
 </li>
</template>

<style scoped>

</style>
