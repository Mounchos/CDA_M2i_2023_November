<script setup>


</script>

<template>

<button class="btn btn-primary">
  <span v-if="$slots.icon">
    <slot name="icon"></slot>
  </span>
<span>
  <slot name="text">Defaut value</slot>
</span>

</button>


</template>

<style scoped>

</style>
