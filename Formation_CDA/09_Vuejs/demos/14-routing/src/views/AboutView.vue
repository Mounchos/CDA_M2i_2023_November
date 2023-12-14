<script setup>
import { RouterLink, RouterView } from 'vue-router';


</script>

<template>
  <div class="flex-container">
    <div>
<h1>AboutView</h1>
<ul>
  <li> <RouterLink to="/about/first">First</RouterLink></li>
  <li> <RouterLink to="/about/second">Second</RouterLink></li>
</ul>
</div>
<RouterView/>
</div>
</template>

<style scoped>
.flex-container {
  display: flex;
  gap: 0 5%;
}
</style>