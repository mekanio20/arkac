<template>
    <div class="flex items-center bg-arkac-gray-600 rounded-xl px-8 py-4 w-[310px]">
        <input type="text" v-model="search" :placeholder="placeholder"
            class="bg-transparent focus:outline-none w-full text-arkac-gray-700 placeholder-arkac-gray-700 pr-2 font-inter font-medium text-base" />
        <SearchIcon />
    </div>
</template>

<script>
import SearchIcon from '@/components/icons/search.vue';
export default {
    components: {
        SearchIcon
    },
    props: {
        placeholder: {
            type: String,
            default: null
        }
    }
}
</script>