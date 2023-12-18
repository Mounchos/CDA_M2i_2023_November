<script setup>
import { IconAlertCircleFilled } from '@tabler/icons-vue';
</script>

<template>
    <div
        class="p-2 text-red-700 bg-red-100 border rounded animate__animated animate__fadeInDown"
        role="alert">
        <span
            class="flex items-center justify-between w-full gap-2 text-red-700">
            <IconAlertCircleFilled />
            Nenhum Resultado Encontrado
        </span>
    </div>
</template>
