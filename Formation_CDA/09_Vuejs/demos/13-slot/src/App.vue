<script setup>
import ButtonComponent from './components/ButtonComponent.vue';
import ButtonComponent2 from './components/ButtonComponent2.vue';


</script>

<template>

<ButtonComponent :buttonStyle="{backgroundColor: 'blue'}">
  </ButtonComponent>
  <ButtonComponent>
Cliquez sur moi
</ButtonComponent>
<ButtonComponent>
<span>Nouveau text</span>
</ButtonComponent>
<ButtonComponent>
<img src="./assets/vue.svg"/> bouton avec icon
</ButtonComponent>


<ButtonComponent2>
  <template #icon>
    <img src="./assets/vue.svg"/>
  </template>
  <template v-slot:text>
  Bouton avec icon
  </template>
</ButtonComponent2>


<ButtonComponent2>
 
  <template v-slot:text>
  Bouton sans icon
  </template>
</ButtonComponent2>
</template>

<style scoped>

</style>
