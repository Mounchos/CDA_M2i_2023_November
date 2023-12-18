<script setup>
import {RouterLink, RouterView} from "vue-router";
</script>

<template>
 <header>
  <nav>
    <ul>
      <li><RouterLink to="/">Home</RouterLink></li>
    </ul>
  </nav>
 </header>
 <main>
  <RouterView/>
 </main>
 <footer> Utopios</footer>
</template>

<style scoped>
</style>
