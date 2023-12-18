<script setup>
import { ref } from 'vue';
import { IconBrandGithub } from '@tabler/icons-vue';
import { IconBrandGithubFilled } from '@tabler/icons-vue';

const props = defineProps({
    btnText: {
        type: String,
    },
    btnLink: {
        type: String,
    },
});

const isHover = ref(false);
</script>

<template>
    <a
        @mouseenter="isHover = true"
        @mouseleave="isHover = false"
        class="flex items-center justify-between w-10/12 p-2 text-base text-white cursor-pointer white bg-lightBlue rounded-xl superSmall:w-48 animate__animated"
        target="_blank"
        :href="btnLink">
        {{ btnText }}

        <IconBrandGithubFilled v-if="isHover" />

        <IconBrandGithub v-else />
    </a>
</template>
