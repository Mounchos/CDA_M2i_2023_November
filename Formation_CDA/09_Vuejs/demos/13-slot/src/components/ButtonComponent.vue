<script setup>

import {defineProps} from 'vue';

const props = defineProps({
buttonStyle: Object
})

</script>

<template>

<button class="btn" :style="buttonStyle">
<slot> Default Button text</slot>
</button>


</template>

<style scoped>

</style>
