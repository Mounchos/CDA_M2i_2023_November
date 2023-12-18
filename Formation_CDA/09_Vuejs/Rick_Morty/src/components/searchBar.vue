<script setup>
import { IconSearch } from '@tabler/icons-vue';
import btnFilter from './btnFilter.vue';
import { ref } from 'vue';

const searchInputValue = ref('');

const filterData = ref({
    gender: '',
    species: '',
    status: '',
});

const emits = defineEmits(['update:searchInputValue', 'update:filterData']);

const onInputSearch = (e) => {
    searchInputValue.value = e.target.value;
    emits('update:searchInputValue', searchInputValue.value);
};

const onUpdateFilterData = (value) => {
    filterData.value = value;
    emits('update:filterData', filterData.value);
};
</script>
<template>
    <div class="flex items-center justify-center w-full h-full">
        <form
            name="searchBar"
            @submit.prevent
            @keydown.enter.prevent
            autocomplete="off"
            class="flex items-center justify-between w-full h-full text-white rounded-lg bg-neutral-800">
            <label
                name="searchLabel"
                for="search"
                class="flex items-center justify-center h-full p-2 rounded-lg bg-neutral-800">
                <IconSearch />
            </label>
            <input
                placeholder="Enter character name"
                v-model="searchInputValue"
                @input="onInputSearch"
                class="w-full h-full p-2 border-none outline-none bg-neutral-800 placeholder-slate-50 opacity-60"
                type="text"
                name="search"
                id="search" />
            <btnFilter @update:filterData="onUpdateFilterData" />
        </form>
    </div>
</template>
