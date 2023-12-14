<script setup>

import {inject} from 'vue'

const nickname = inject('nickname').nickname;

</script>

<template>
  <div class="component">
    <h1>ChildComponentA</h1>
    <p><b>Valeur du nickname :</b> {{ nickname }} </p>
  </div>

</template>

<style scoped>
.component{
  background-color: rgb(166, 215, 177);
  border-radius: 5px;
  border: green solid 1px;
  padding: 10px 20px;
  margin: 10px auto;
  box-sizing: border-box;
  width: 80%;
  color: green;
  font-family: monospace;

}

</style>
