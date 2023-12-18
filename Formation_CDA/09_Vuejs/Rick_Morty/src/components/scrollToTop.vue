<template>
    <button
        name="scrollToTop"
        type="button"
        class="fixed bottom-0 right-0 p-3 rounded-full outline-none mb-28 me-6 bg-lightBlue animate__animated animate__fadeInRight"
        @mouseenter="isHover = true"
        @mouseleave="isHover = false"
        @click="scrollToTop">
        <IconArrowBigUpFilled
            class="text-white w-7 h-7"
            v-if="isHover" />
        <IconArrowBigUp
            class="text-white w-7 h-7"
            v-else />
    </button>
</template>

<script setup>
import { IconArrowBigUpFilled } from '@tabler/icons-vue';
import { IconArrowBigUp } from '@tabler/icons-vue';
import { ref } from 'vue';

const isHover = ref(false);

const scrollToTop = () => {
    const main = document.querySelector('main').firstElementChild;
    main.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
};
</script>
