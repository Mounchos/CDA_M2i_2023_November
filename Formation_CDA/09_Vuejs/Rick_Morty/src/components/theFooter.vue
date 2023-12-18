<script setup>
import btnFooter from './btnFooter.vue';
</script>

<template>
    <footer
        class="flex flex-col items-center justify-between w-full px-0 py-2 space-y-2 overflow-hidden text-4xl h-28 superSmall:h-full bg-darkGreen superSmall:px-10 superSmall:flex-row superSmall:space-y-0 superSmall:py-0">
        <btnFooter
            class="animate__fadeInLeft"
            btnText="GitHub Do Projeto"
            btnLink="https://github.com/ericrq/RickAndMorty" />

        <btnFooter
            class="animate__fadeInRight"
            btnText="GitHub Da API"
            btnLink="https://github.com/afuh/rick-and-morty-api" />
    </footer>
</template>
