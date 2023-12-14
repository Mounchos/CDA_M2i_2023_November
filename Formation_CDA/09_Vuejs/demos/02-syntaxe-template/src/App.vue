<script setup>
  let messageHTML = "<p>Mon message</p>";
  let message = "Hello world";
  let redBackground = "background-red";
  let monLien = "https://www.m2iformation.fr"
  let isDisabled = true;

  let attributes = {class: "bold", href: monLien};

</script>

<template>

  <!-- Passe une variable de manière dynamique -->
  <!-- Interpolation de texte -->
  <h1>{{ message }}</h1>

  <!-- On peut utiliser du HTML avec la directive v-html (à proscrire) -->
  <div v-html="messageHTML"></div>

  <!-- v-bind permet de passer des variables de manière dynamiques dans les attributs -->
  <p v-bind:class="redBackground">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut excepturi aperiam, aspernatur neque incidunt ea quos ratione repellat repudiandae ipsum, quibusdam voluptatem nihil soluta odit debitis adipisci deserunt similique quas.</p>
  <a href="https://www.google.com">lien google</a>
  <a v-bind:href="monLien" target="_blank">lien dynamique</a>

  <!-- le raccourci de v-bind est ":" -->
  <a :href="monLien" target="_blank">lien dynamique</a>

  <!-- Les attributs booléen peuvent aussi être bindés -->
  <form action=""><input type="text" placeholder="say hello" :disabled="isDisabled"></form>

  <!-- On peut utiliser un objet pour binder les attributs -->
  <!-- Les clés correspondent aux noms des attributs -->
  <a v-bind="attributes">mon lien gras</a>

  <!-- Les expressions JavaScript fonctionne dans l'interpolation de texte et dans les directives -->
  <p>La taille de h1 est de: {{ message.length }} lettres</p>
  <p>h1 est: {{ message % 2 === 0 ? 'Pair' : 'Impair' }}</p>

  <p :class="message.length > 5 ? 'bold' : null">Toto</p>

</template>

<style scoped>
  h1 {
    color: #09A1F2;
  }

  .bold {
    font-weight: bold;
  }

  .background-red {
    background-color: rgb(204, 169, 169);
  }
</style>