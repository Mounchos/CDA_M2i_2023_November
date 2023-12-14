<script setup>
 import { inject } from 'vue';
const updateNickname = inject("nickname").updateNickname;

</script>

<template>
  <div class="sub-component">
    <h3>GrandChildComponentA</h3>
   <div>
    <label>Nickname : </label>
    <input type="text" id="nickname" @input="updateNickname($event.target.value)"/>
   </div>
  </div>

</template>

<style scoped>
.sub-component {
  background-color: rgb(214, 160, 160);
  border-radius: 5px;
  border: red solid 1px;
  padding: 10px 20px;
  margin: 10px auto;
  box-sizing: border-box;
  color: red;
  font-family: monospace;
}

</style>
