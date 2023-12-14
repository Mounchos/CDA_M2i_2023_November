<script setup>
import { RouterLink, RouterView } from 'vue-router';

</script>

<template>
<header>
  <nav>
    <ul>
      <li><RouterLink to="/">Home</RouterLink></li>
      <li><RouterLink to="/about">About</RouterLink></li>
      <li><RouterLink to="/contact">Contacts</RouterLink></li>
    </ul>
  </nav>
</header>
<main>
  <RouterView/>
</main>
<footer>footer</footer>
</template>

<style>
body,
html {
  margin: 0;
}

#app {
  height: 100dvh;

  display: grid;
  grid-template: 6dvh 1fr 6dvh / 1fr;
}
</style>


<style scoped>

* {
  font-family: monospace;
}

header,
footer {
  background-color: rgb(32, 32, 111);
}

nav ul {
  list-style: none;
  padding-inline: 2%;
  display: flex;
  gap: 0 1%;
  align-items: center;
}

li a {
  color: hsl(0, 0%, 90%);
  text-decoration: none;
  font-size: 0.9rem;
  transition: transform 200ms ease, color 200ms ease;
  position: relative;
}

li a::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 0;
  width: 0%;
  border-bottom: 1px solid hsl(0, 0%, 90%);
  transition: width 200ms ease, border-color 200ms ease;
}

li a:hover {
  transform: scale(1.1);
  color: rgb(255, 89, 0);
}

li a.router-link-exact-active {
  color: red;
}

li a:hover::after {
  width: 100%;
  border-color: rgb(255, 89, 0);
}

li a.router-link-exact-active::after {
  border-color: red;
  width: 100%;
}


main {
  margin-inline: 1vw;
}
</style>
