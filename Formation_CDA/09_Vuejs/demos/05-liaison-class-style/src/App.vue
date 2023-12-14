<script setup>

import { ref, computed } from 'vue';

let isSelected = ref(false);
let hasError = ref(false);
let box = ref("box");
let boxColor = ref("box--blue")

let error = ref(null);

let classes = computed(() => {
  return { "selected": isSelected.value, "text-error": hasError.value && error.value }
});

function initError() {
  error.value = new Error();
}

console.log(isSelected)

</script>

<template>
  <div :class="classes">
    <p>Hello world!</p>
  </div>

  <button @click="isSelected = !isSelected">Toggle sélection</button>
  <button @click="hasError = !hasError">Toggle error</button>

  <button @click="initError">Throw Error</button>

  <div :class="[box, boxColor]">

  </div>
</template>

<style scoped>
.selected {
  border: 1px solid green;
}

.text-error {
  color: red;
}

.box {
  display: block;
  height: 100px;
  width: 100px;
}

.box--blue {
  background-color: blue;
}

</style>