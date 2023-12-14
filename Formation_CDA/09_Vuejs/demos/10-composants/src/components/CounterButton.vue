<script setup>
    import { ref } from 'vue';
    const props = defineProps(['color', 'increment', 'defaultValue']);
    const counter = ref(+props.defaultValue)

</script>

<template>
    <button @click="counter+=+props.increment" :class="props.color">{{ counter }}</button>
</template>

<style scoped>
    .red {
        background-color: red;
    }

    button {
        padding: 10px 20px;
    }
</style>