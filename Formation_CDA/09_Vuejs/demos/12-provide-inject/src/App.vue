<script setup>
import { provide, ref } from 'vue';
import ChildComponentA from './components/ChildComponentA.vue'
import ChildComponentB from './components/ChildComponentB.vue'


const nickname = ref('');

function updateNickname(data){
  nickname.value = data;
  console.log("nickname : " + nickname.value);
}


provide('nickname', {
  nickname, updateNickname
})



</script>

<template>
<div class="flex-container">

<ChildComponentA/>
<ChildComponentB/>
</div>
</template>

<style scoped>
.flex-container{
  display: flex;
  width: 90%;
  margin-inline: auto;
  gap: 10px;
}


</style>
