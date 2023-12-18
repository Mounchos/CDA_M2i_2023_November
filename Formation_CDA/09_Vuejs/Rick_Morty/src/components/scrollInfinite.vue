<script setup lang="ts">
import { onBeforeMount, ref, Ref, watch, onMounted } from 'vue';
import { useInfiniteScroll } from '@vueuse/core';
import scrollToTop from './scrollToTop.vue';
import spinnerLoading from './spinnerLoading.vue';
import axios from 'axios';
import card from './card.vue';
import alertError from './alertError.vue';

const props = defineProps({
    searchInputValue: {
        type: String,
        required: true,
    },
    filterData: {
        type: Object,
        required: true,
    },
});

const filterData = ref({
    gender: '',
    species: '',
    status: '',
});

const el = ref<HTMLElement | null>(null);
const page = ref(1);
const data: Ref<any[]> = ref([]);
const shouldFetchData = ref(true);
const isLoading = ref(true);
const isAlertError = ref(false);

const getCharacters = async () => {
    try {
        isLoading.value = true;

        if (!shouldFetchData.value) {
            return;
        }

        const url = 'https://rickandmortyapi.com/api/character';
        const response = await axios.get(url, {
            headers: {
                'Content-Encoding': 'gzip',
            },
            params: {
                page: page.value,
                name: props.searchInputValue,
                status: filterData.value.status,
                gender: filterData.value.gender,
                species: filterData.value.species,
            },
        });

        if (!response.data.info.next) {
            shouldFetchData.value = false;
        }

        data.value = [...data.value, ...response.data.results];
        page.value++;

        isLoading.value = false;
        isAlertError.value = false;
    } catch (error) {
        isLoading.value = false;
        isAlertError.value = true;

        if (error.status === 404) {
            console.log('Error 404');
        }
    } finally {
        isLoading.value = false;
    }
};

onBeforeMount(() => {
    useInfiniteScroll(el, getCharacters);
});

const isScrollAtTop = ref(false);

onMounted(() => {
    shouldFetchData.value = true;

    const handleScroll = () => {
        if (el.value) {
            isScrollAtTop.value = el.value.scrollTop !== 0;
        }
    };

    el.value?.addEventListener('scroll', handleScroll);
});

watch(
    () => props.filterData,
    () => {
        shouldFetchData.value = true;
        filterData.value = props.filterData.value;
        page.value = 1;
        data.value = [];
        getCharacters();
    },
    {
        deep: true,
    }
);

watch(
    () => props.searchInputValue,
    () => {
        shouldFetchData.value = true;
        page.value = 1;
        data.value = [];
        getCharacters();
    },
    {
        deep: true,
    }
);
</script>

<template>
    <div
        ref="el"
        class="flex flex-col items-center w-full h-full overflow-y-scroll">
        <div class="flex flex-wrap justify-center w-full gap-x-5 gap-y-6 item">
            <alertError v-if="isAlertError" />
            <card
                :data="item"
                v-for="item in data"
                :key="item" />
        </div>
        <spinnerLoading v-if="isLoading && !isAlertError" />
    </div>
    <scrollToTop
        v-if="isScrollAtTop"
        class="fixed hidden sm:block" />
</template>
