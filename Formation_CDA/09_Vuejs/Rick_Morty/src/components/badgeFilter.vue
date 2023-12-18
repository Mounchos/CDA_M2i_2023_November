<script setup>
import { IconX } from '@tabler/icons-vue';

const props = defineProps({
    filterName: {
        type: String,
        required: true,
    },
});

const emit = defineEmits(['removeFilter']);
</script>
<template>
    <div
        class="flex items-center justify-between w-full gap-2 px-3 py-1 text-white rounded-lg bg-neutral-800 superSmall:w-fit animate__animated animate__fadeInDown">
        <template v-if="filterName == 'alive'">Vivo</template>
        <template v-else-if="filterName == 'dead'">Morto</template>

        <template v-else-if="filterName == 'human'">Humano</template>
        <template v-else-if="filterName == 'robot'">Robô</template>
        <template v-else-if="filterName == 'Mythological Creature'"
            >Mitologico</template
        >

        <template v-else-if="filterName == 'female'">Feminino</template>
        <template v-else-if="filterName == 'male'">Masculino</template>
        <template v-else-if="filterName == 'genderless'">Sem Gênero</template>

        <template v-else-if="filterName == 'unknown'">Desconhecido</template>

        <template v-else>
            {{ filterName.charAt(0).toUpperCase() + filterName.slice(1) }}
        </template>

        <button
            name="remove-filter"
            type="button"
            class="outline-none"
            @click="emit('removeFilter', filterName)">
            <IconX />
        </button>
    </div>
</template>
