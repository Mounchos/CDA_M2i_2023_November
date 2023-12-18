<script setup>
import scrollInfinite from './components/scrollInfinite.vue';
import theFooter from './components/theFooter.vue';
import theHeader from './components/theHeader.vue';
import searchBar from './components/searchBar.vue';
import badgeFilter from './components/badgeFilter.vue';
import { ref } from 'vue';

const searchInputValue = ref('');

const filterData = ref({
    gender: '',
    species: '',
    status: '',
});

const onInputSearchUpdate = (value) => {
    searchInputValue.value = value;
};

const onUpdateFilterData = (value) => {
    filterData.value = value;
};

const removeFilter = (key) => {
    filterData.value.value[key] = '';
};
</script>

<template>
    <div
        class="grid items-stretch content-center justify-center w-screen h-screen grid-flow-row gap-y-3 gap-x-0 justify-items-stretch bg-neutral-950"
        :id="
            filterData.value &&
            Object.values(filterData.value).some((value) => value !== '')
                ? 'gridContainer'
                : 'gridContainerNoFilters'
        ">
        <theHeader
            class="header"
            v-once />
        <div class="z-10 searchBar animate__animated animate__fadeInDown">
            <searchBar
                @update:searchInputValue="onInputSearchUpdate"
                @update:filterData="onUpdateFilterData" />
        </div>

        <div
            class="flex flex-col items-center justify-center w-full gap-3 badgesBar superSmall:flex-row"
            v-if="
                filterData.value &&
                Object.values(filterData.value).some((value) => value !== '')
            "
            :id="
                filterData.value &&
                Object.values(filterData.value).some((value) => value !== '')
                    ? 'gridContainerNoFilters'
                    : 'gridContainer'
            ">
            <template v-for="(value, key) in filterData.value">
                <badgeFilter
                    v-if="value !== ''"
                    :filterName="value"
                    @removeFilter="removeFilter(key)" />
            </template>
        </div>
        <main class="cards">
            <scrollInfinite
                :searchInputValue="searchInputValue"
                :filterData="filterData" />
        </main>
        <!-- <theFooter
            class="footer"
            v-once /> -->
    </div>
</template>

<style scoped>
#gridContainer {
    grid-template-areas:
        'header header header header header header'
        '. searchBar searchBar searchBar searchBar .'
        '. badgesBar badgesBar badgesBar badgesBar .'
        '. cards cards cards cards .'
        '. cards cards cards cards .'
        '. cards cards cards cards .'
        '. cards cards cards cards .'
        'footer footer footer footer footer footer';
    grid-template-columns: 0.5fr repeat(4, 1fr) 0.5fr;
    grid-template-rows: 0.5fr repeat(2, 0.2fr) repeat(4, 1fr) 0.5fr;
}

#gridContainerNoFilters {
    grid-template-areas:
        'header header header header header header'
        '. searchBar searchBar searchBar searchBar .'
        '. cards cards cards cards .'
        '. cards cards cards cards .'
        '. cards cards cards cards .'
        '. cards cards cards cards .'
        '. cards cards cards cards .'
        'footer footer footer footer footer footer';
    grid-template-columns: 0.5fr repeat(4, 1fr) 0.5fr;
    grid-template-rows: 0.5fr repeat(2, 0.2fr) repeat(4, 1fr) 0.5fr;
}

.header {
    grid-area: header;
}

.searchBar {
    grid-area: searchBar;
}

.badgesBar {
    grid-area: badgesBar;
}

.cards {
    grid-area: cards;
}

.cards::-webkit-scrollbar {
    display: none;
}

.footer {
    grid-area: footer;
}
</style>
