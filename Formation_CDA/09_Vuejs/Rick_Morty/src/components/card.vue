<script setup>
import { IconCircleFilled } from '@tabler/icons-vue';
import { IconUserFilled } from '@tabler/icons-vue';
import { IconGenderMale } from '@tabler/icons-vue';
import { IconGenderFemale } from '@tabler/icons-vue';
import { IconWorld } from '@tabler/icons-vue';
import { IconQuestionMark } from '@tabler/icons-vue';
import { IconAlienFilled } from '@tabler/icons-vue';
import { IconPawFilled } from '@tabler/icons-vue';

const props = defineProps({
    data: {
        type: Object,
        required: true,
    },
});
</script>

<template>
    <div
        class="flex flex-col items-center h-fit superSmall:flex-row w-full superSmall:w-[400px] animate__animated animate__fadeInUp">
        <div
            class="w-full overflow-hidden duration-500 origin-center rounded-lg cursor-pointer">
            <img
                class="w-full h-full origin-center rounded-lg cursor-pointer superSmall:duration-500 superSmall:hover:scale-110"
                :src="data.image"
                alt="rick and morty avatar" />
        </div>
        <div
            class="w-[95%] px-4 py-2 text-xl font-semibold text-white rounded-b-lg bg-neutral-800 superSmall:rounded-r-lg superSmall:rounded-bl-none">
            <h1 class="font-bold text-center truncate border-b-2 borde-white">
                {{
                    data.name.length > 15 ? data.name.split(' ')[0] : data.name
                }}
            </h1>
            <ul
                class="flex flex-col items-start justify-center gap-1 mt-2 text-lg font-semibold font-roboto">
                <li
                    class="flex items-center justify-start cursor-pointer superSmall:duration-500 superSmall:hover:scale-110">
                    <IconCircleFilled
                        class="me-1"
                        :class="
                            data.status === 'Alive'
                                ? 'text-green-400'
                                : data.status === 'Dead'
                                ? 'text-red-400'
                                : 'text-gray-400'
                        " />

                    <template v-if="data.status === 'Alive'">Alive</template>
                    <template v-if="data.status === 'Dead'">Dead</template>
                    <template v-if="data.status === 'unknown'"
                        >Unknown</template
                    >
                </li>
                <li
                    class="flex items-center justify-start cursor-pointer superSmall:duration-500 superSmall:hover:scale-110">
                    <IconUserFilled
                        class="me-1"
                        v-if="data.species === 'Human'" />
                    <IconAlienFilled
                        v-else-if="data.species === 'Alien'"
                        class="me-1" />
                    <svg
                        v-else-if="data.species === 'Mythological Creature'"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        class="me-1"
                        width="24"
                        height="24">
                        >
                        <path
                            fill="#fff"
                            d="M12,2A9,9 0 0,0 3,11V22L6,19L9,22L12,19L15,22L18,19L21,22V11A9,9 0 0,0 12,2M9,8A2,2 0 0,1 11,10A2,2 0 0,1 9,12A2,2 0 0,1 7,10A2,2 0 0,1 9,8M15,8A2,2 0 0,1 17,10A2,2 0 0,1 15,12A2,2 0 0,1 13,10A2,2 0 0,1 15,8Z" />
                    </svg>
                    <svg
                        v-else-if="data.species === 'Robot'"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        class="me-1"
                        width="24"
                        height="24">
                        <path
                            fill="#fff"
                            d="M12,2A2,2 0 0,1 14,4C14,4.74 13.6,5.39 13,5.73V7H14A7,7 0 0,1 21,14H22A1,1 0 0,1 23,15V18A1,1 0 0,1 22,19H21V20A2,2 0 0,1 19,22H5A2,2 0 0,1 3,20V19H2A1,1 0 0,1 1,18V15A1,1 0 0,1 2,14H3A7,7 0 0,1 10,7H11V5.73C10.4,5.39 10,4.74 10,4A2,2 0 0,1 12,2M7.5,13A2.5,2.5 0 0,0 5,15.5A2.5,2.5 0 0,0 7.5,18A2.5,2.5 0 0,0 10,15.5A2.5,2.5 0 0,0 7.5,13M16.5,13A2.5,2.5 0 0,0 14,15.5A2.5,2.5 0 0,0 16.5,18A2.5,2.5 0 0,0 19,15.5A2.5,2.5 0 0,0 16.5,13Z" />
                    </svg>
                    <IconPawFilled
                        v-else-if="data.species === 'Animal'"
                        class="me-1" />

                    <IconQuestionMark
                        v-else
                        class="me-1" />

                    <template v-if="data.species.split(' ')[0] === 'Human'"
                        >Human</template
                    >
                    <template v-else-if="data.species.split(' ')[0] === 'Robot'"
                        >Robot</template
                    >
                    <template
                        v-else-if="data.species.split(' ')[0] === 'unknown'"
                        >Unknown</template
                    >
                    <template
                        v-else-if="
                            data.species.split(' ')[0] === 'Mythological'
                        "
                        >Mythological</template
                    >
                    <template
                        v-else-if="data.species.split(' ')[0] === 'Humanoid'"
                        >Humanoid</template
                    >
                    <template v-else>{{ data.species.split(' ')[0] }}</template>
                </li>
                <li
                    class="flex items-center justify-start cursor-pointer superSmall:duration-500 superSmall:hover:scale-110">
                    <IconGenderMale
                        v-if="data.gender === 'Male'"
                        class="me-1" />
                    <IconGenderFemale
                        v-else-if="data.gender === 'Female'"
                        class="me-1" />
                    <IconQuestionMark
                        v-else
                        class="me-1" />

                    <template v-if="data.gender === 'Male'">
                        Male
                    </template>

                    <template v-else-if="data.gender === 'Female'">
                        Female
                    </template>

                    <template v-else-if="data.gender === 'Genderless'">
                        Genderless
                    </template>

                    <template v-else-if="data.gender === 'unknown'">
                        Unknown
                    </template>

                    <template v-else>{{ data.gender }}</template>
                </li>
                <li
                    class="flex items-center justify-start cursor-pointer superSmall:duration-500 superSmall:hover:scale-110"
                    :class="
                        data.location.name === 'Post-Apocalyptic'
                            ? ''
                            : 'text-base'
                    ">
                    <IconQuestionMark
                        v-if="data.location.name === 'unknown'"
                        class="me-1" />
                    <IconWorld
                        v-else
                        class="me-1" />
                    <template
                        v-if="
                            data.location.name.split(' ')[0] ===
                            'Post-Apocalyptic'
                        "
                        >Post-Apocalyptic</template
                    >
                    <template
                        v-else-if="
                            data.location.name.split(' ')[0] === 'unknown'
                        "
                        >Unknown</template
                    >
                    <template
                        v-else-if="data.location.name.split(' ')[0] === 'Earth'"
                        >Earth</template
                    >
                    <template v-else>
                        {{
                            data.location.name.split(' ').slice(0, 1).join(' ')
                        }}
                    </template>
                </li>
            </ul>
        </div>
    </div>
</template>
