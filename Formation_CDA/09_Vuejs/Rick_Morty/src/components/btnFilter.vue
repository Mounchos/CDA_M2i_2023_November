<script setup>
import { IconAdjustmentsHorizontal } from '@tabler/icons-vue';
import { IconCaretDownFilled } from '@tabler/icons-vue';
import { IconCircleFilled } from '@tabler/icons-vue';
import { IconCaretUpFilled } from '@tabler/icons-vue';
import { IconUserFilled } from '@tabler/icons-vue';
import { IconAlienFilled } from '@tabler/icons-vue';
import { onMounted, ref, watch } from 'vue';
import { IconQuestionMark } from '@tabler/icons-vue';
import { IconGenderFemale } from '@tabler/icons-vue';
import { IconGenderMale } from '@tabler/icons-vue';
import { IconGenderGenderless } from '@tabler/icons-vue';
import { IconPawFilled } from '@tabler/icons-vue';

const isMainFilterOpen = ref(false);
const isSpeciesFilterOpen = ref(false);
const isStatusFilterOpen = ref(false);
const isGenderFilterOpen = ref(false);
const formWidth = ref(0);
const isMobile = ref(false);
const searchLabel = ref(null);

onMounted(() => {
    document.addEventListener('click', (event) => {
        const btnElement = event.target.closest('[name="filter-button"]');
        const dropdownElement = event.target.closest('#dropdownFilter');

        if (dropdownElement) {
            return;
        }

        if (event.target.closest('svg')) {
            return;
        }

        if (btnElement) {
            return;
        } else {
            isMainFilterOpen.value = false;
            isSpeciesFilterOpen.value = false;
            isStatusFilterOpen.value = false;
            isGenderFilterOpen.value = false;
        }
    });
});

const emit = defineEmits(['update:filterData']);

const filterData = ref({
    gender: '',
    species: '',
    status: '',
});

const emitFilters = (event, filter) => {
    filterData.value[filter] = event.target.value;
    emit('update:filterData', filterData);
};

watch(isMainFilterOpen, () => {
    formWidth.value = document
        .querySelector('[name="searchBar"]')
        .getBoundingClientRect().width;

    // on resize
    window.addEventListener('resize', () => {
        formWidth.value = document
            .querySelector('[name="searchBar"]')
            .getBoundingClientRect().width;

        isMobile.value = window.innerWidth <= 475;

        if (!isMobile.value) {
            formWidth.value = 200;
        }

        if (isMainFilterOpen.value && isMobile.value) {
            searchLabel.value = document.querySelector('[name="searchLabel"]');
            searchLabel.value.style.borderBottomLeftRadius = '0';
        } else if (isMainFilterOpen.value && !isMobile.value) {
            searchLabel.value = document.querySelector('[name="searchLabel"]');
            searchLabel.value.style.borderBottomLeftRadius = '0.5rem';
        } else {
            searchLabel.value = document.querySelector('[name="searchLabel"]');
            searchLabel.value.style.borderBottomLeftRadius = '0.5rem';
        }
    });

    isMobile.value = window.innerWidth <= 475;

    if (!isMobile.value) {
        formWidth.value = 200;
    }

    if (isMainFilterOpen.value && isMobile.value) {
        searchLabel.value = document.querySelector('[name="searchLabel"]');
        searchLabel.value.style.borderBottomLeftRadius = '0';
    }

    if (!isMainFilterOpen.value && isMobile.value) {
        searchLabel.value = document.querySelector('[name="searchLabel"]');
        searchLabel.value.style.borderBottomLeftRadius = '0.5rem';
    }
});
</script>

<template>
    <div class="relative">
        <button
            name="filter-button"
            aria-label="Filtrar"
            type="button"
            class="h-full p-2 border-none outline-none bg-neutral-800"
            @click="
                (isMainFilterOpen = !isMainFilterOpen),
                    (isSpeciesFilterOpen = false),
                    (isStatusFilterOpen = false),
                    (isGenderFilterOpen = false)
            "
            :class="isMainFilterOpen ? 'rounded-t-lg' : 'rounded-lg'">
            <IconAdjustmentsHorizontal />
        </button>

        <div
            ref="dropdownFilter"
            id="dropdownFilter"
            :style="`width: ${formWidth}px`"
            v-if="isMainFilterOpen"
            class="absolute right-0 flex items-center justify-center py-3 rounded-b-lg w-52 bg-neutral-800">
            <ul
                class="flex flex-col items-center justify-center w-full space-y-2">
                <li class="w-full px-5 space-y-2 rounded-xl">
                    <button
                        name="species"
                        type="button"
                        @click="
                            (isSpeciesFilterOpen = !isSpeciesFilterOpen),
                                (isStatusFilterOpen = false),
                                (isGenderFilterOpen = false)
                        "
                        class="flex items-center justify-between w-full px-3 py-1 text-black border-none outline-none bg-slate-50 rounded-xl">
                        Species
                        <IconCaretUpFilled v-if="isSpeciesFilterOpen" />
                        <IconCaretDownFilled v-else />
                    </button>
                    <ul
                        v-if="isSpeciesFilterOpen"
                        class="flex flex-col items-center justify-center w-full space-y-2">
                        <li class="w-full rounded-xl">
                            <button
                                name="human"
                                type="button"
                                value="human"
                                @click="
                                    (event) => emitFilters(event, 'species')
                                "
                                class="flex items-center justify-between w-full px-3 py-1 text-black border-none outline-none bg-slate-50 rounded-xl">
                                Human
                                <IconUserFilled />
                            </button>
                        </li>
                        <li class="w-full rounded-xl">
                            <button
                                name="alien"
                                type="button"
                                value="alien"
                                @click="
                                    (event) => emitFilters(event, 'species')
                                "
                                class="flex items-center justify-between w-full px-3 py-1 text-black border-none outline-none bg-slate-50 rounded-xl">
                                Alien
                                <IconAlienFilled />
                            </button>
                        </li>
                        <li class="w-full rounded-xl">
                            <button
                                name="robot"
                                type="button"
                                value="robot"
                                @click="
                                    (event) => emitFilters(event, 'species')
                                "
                                class="flex items-center justify-between w-full px-3 py-1 text-black border-none outline-none bg-slate-50 rounded-xl">
                                Robot
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    height="24">
                                    <path
                                        d="M12,2A2,2 0 0,1 14,4C14,4.74 13.6,5.39 13,5.73V7H14A7,7 0 0,1 21,14H22A1,1 0 0,1 23,15V18A1,1 0 0,1 22,19H21V20A2,2 0 0,1 19,22H5A2,2 0 0,1 3,20V19H2A1,1 0 0,1 1,18V15A1,1 0 0,1 2,14H3A7,7 0 0,1 10,7H11V5.73C10.4,5.39 10,4.74 10,4A2,2 0 0,1 12,2M7.5,13A2.5,2.5 0 0,0 5,15.5A2.5,2.5 0 0,0 7.5,18A2.5,2.5 0 0,0 10,15.5A2.5,2.5 0 0,0 7.5,13M16.5,13A2.5,2.5 0 0,0 14,15.5A2.5,2.5 0 0,0 16.5,18A2.5,2.5 0 0,0 19,15.5A2.5,2.5 0 0,0 16.5,13Z" />
                                </svg>
                            </button>
                        </li>
                        <li class="w-full rounded-xl">
                            <button
                                name="animal"
                                type="button"
                                value="animal"
                                @click="
                                    (event) => emitFilters(event, 'species')
                                "
                                class="flex items-center justify-between w-full px-3 py-1 text-black border-none outline-none bg-slate-50 rounded-xl">
                                Animal
                                <IconPawFilled />
                            </button>
                        </li>
                        <li class="w-full rounded-xl">
                            <button
                                name="mythological creature"
                                type="button"
                                value="Mythological Creature"
                                @click="
                                    (event) => emitFilters(event, 'species')
                                "
                                class="flex items-center justify-between w-full px-3 py-1 text-black border-none outline-none bg-slate-50 rounded-xl">
                                Mythological creature
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    height="24">
                                    >
                                    <path
                                        d="M12,2A9,9 0 0,0 3,11V22L6,19L9,22L12,19L15,22L18,19L21,22V11A9,9 0 0,0 12,2M9,8A2,2 0 0,1 11,10A2,2 0 0,1 9,12A2,2 0 0,1 7,10A2,2 0 0,1 9,8M15,8A2,2 0 0,1 17,10A2,2 0 0,1 15,12A2,2 0 0,1 13,10A2,2 0 0,1 15,8Z" />
                                </svg>
                            </button>
                        </li>
                        <li class="w-full rounded-xl">
                            <button
                                name="unknown"
                                type="button"
                                value="unknown"
                                @click="
                                    (event) => emitFilters(event, 'species')
                                "
                                class="flex items-center justify-between w-full px-3 py-1 text-black border-none outline-none bg-slate-50 rounded-xl">
                                Unknown
                                <IconQuestionMark />
                            </button>
                        </li>
                    </ul>
                </li>
                <li class="w-full px-5 space-y-2 rounded-xl">
                    <button
                        name="status"
                        type="button"
                        @click="
                            (isStatusFilterOpen = !isStatusFilterOpen),
                                (isSpeciesFilterOpen = false),
                                (isGenderFilterOpen = false)
                        "
                        class="flex items-center justify-between w-full px-3 py-1 text-black border-none outline-none bg-slate-50 rounded-xl">
                        Status
                        <IconCaretUpFilled v-if="isStatusFilterOpen" />
                        <IconCaretDownFilled v-else />
                    </button>
                    <ul
                        v-if="isStatusFilterOpen"
                        class="flex flex-col items-center justify-center w-full space-y-2">
                        <li class="w-full rounded-xl">
                            <button
                                name="alive"
                                type="button"
                                value="alive"
                                @click="(event) => emitFilters(event, 'status')"
                                class="flex items-center justify-between w-full px-3 py-1 text-black border-none outline-none bg-slate-50 rounded-xl">
                                Alive
                                <IconCircleFilled class="text-green-500" />
                            </button>
                        </li>
                        <li class="w-full rounded-xl">
                            <button
                                name="dead"
                                type="button"
                                value="dead"
                                @click="(event) => emitFilters(event, 'status')"
                                class="flex items-center justify-between w-full px-3 py-1 text-black border-none outline-none bg-slate-50 rounded-xl">
                                Dead
                                <IconCircleFilled class="text-red-500" />
                            </button>
                        </li>
                        <li class="w-full rounded-xl">
                            <button
                                name="unknown"
                                type="button"
                                value="unknown"
                                @click="(event) => emitFilters(event, 'status')"
                                class="flex items-center justify-between w-full px-3 py-1 text-black border-none outline-none bg-slate-50 rounded-xl">
                                Unknown
                                <IconCircleFilled class="text-gray-500" />
                            </button>
                        </li>
                    </ul>
                </li>
                <li class="w-full px-5 space-y-2 rounded-xl">
                    <button
                        name="gender"
                        type="button"
                        @click="
                            (isGenderFilterOpen = !isGenderFilterOpen),
                                (isStatusFilterOpen = false),
                                (isSpeciesFilterOpen = false)
                        "
                        class="flex items-center justify-between w-full px-3 py-1 text-black border-none outline-none bg-slate-50 rounded-xl">
                        Gender
                        <IconCaretUpFilled v-if="isGenderFilterOpen" />
                        <IconCaretDownFilled v-else />
                    </button>
                    <ul
                        v-if="isGenderFilterOpen"
                        class="flex flex-col items-center justify-center w-full space-y-2">
                        <li class="w-full rounded-xl">
                            <button
                                name="female"
                                type="button"
                                value="female"
                                @click="(event) => emitFilters(event, 'gender')"
                                class="flex items-center justify-between w-full px-3 py-1 text-black border-none outline-none bg-slate-50 rounded-xl">
                                Female
                                <IconGenderFemale />
                            </button>
                        </li>
                        <li class="w-full rounded-xl">
                            <button
                                name="male"
                                type="button"
                                value="male"
                                @click="(event) => emitFilters(event, 'gender')"
                                class="flex items-center justify-between w-full px-3 py-1 text-black border-none outline-none bg-slate-50 rounded-xl">
                                Male
                                <IconGenderMale />
                            </button>
                        </li>
                        <li class="w-full rounded-xl">
                            <button
                                name="genderless"
                                type="button"
                                value="genderless"
                                @click="(event) => emitFilters(event, 'gender')"
                                class="flex items-center justify-between w-full px-3 py-1 text-black border-none outline-none bg-slate-50 rounded-xl">
                                Genderless
                                <IconGenderGenderless />
                            </button>
                        </li>
                        <li class="w-full rounded-xl">
                            <button
                                name="unknown"
                                type="button"
                                value="unknown"
                                @click="(event) => emitFilters(event, 'gender')"
                                class="flex items-center justify-between w-full px-3 py-1 text-black border-none outline-none bg-slate-50 rounded-xl">
                                Unknown
                                <IconQuestionMark />
                            </button>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>
