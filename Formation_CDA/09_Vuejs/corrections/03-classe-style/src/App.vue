<script setup>

import { ref, reactive, computed } from 'vue';

let isRed = ref(false);
let color = ref("red");
let background = ref("#00FF00");

function changeColor() {
    color.value = color.value === "red" ? "blue" : "red";
}

</script>

<template>
    <h1>CSS inline et par classe</h1>

    <p :class="{ red: isRed }" @click="isRed = !isRed">Ce texte doit passer du noir au rouge</p>
    <p :style="{ color, 'background-color': background }" @click="changeColor">Ce texte doit passer du rouge au bleu</p>
    <p style="color: red;">Ce texte est juste rouge</p>
</template>

<style scoped>
.red {
    color: red;
}
</style>