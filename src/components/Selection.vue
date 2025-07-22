<template>
    <div ref="selection" class="relative text-left" :class="[isCategory ? 'w-[250px]' : 'md:w-fit w-full']">
        <button @click="toggle"
            class="w-full font-inter font-medium md:text-base text-sm bg-arkac-gray-800 text-arkac-gray-700 rounded-lg px-8 py-4 text-left flex justify-between items-center !cursor-pointer">
            {{ selected.name || placeholder }}
            <svg :class="{ 'rotate-180 transform duration-300': open }" class="w-4 h-4 ml-2 transform duration-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke="#444444">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
        </button>

        <div v-if="open" class="absolute mt-2 w-full h-[230px] rounded-lg bg-arkac-gray-800 z-10 overflow-y-auto">
            <ul>
                <li v-for="category in categories" :key="category.id" @click="select(category)" :class="[
                    'text-nowrap overflow-hidden text-ellipsis cursor-pointer px-6 py-4 hover:bg-arkac-blue-300 hover:text-arkac-blue-200 font-inter font-medium md:text-base sm:text-sm text-xs',
                    selected.id === category.id ? 'bg-arkac-blue-300 text-arkac-blue-200' : 'text-arkac-gray-700'
                ]">
                    {{ category.name }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            open: false,
            selected: '',
        }
    },
    props: {
        placeholder: {
            type: String,
            default: 'Select Category'
        },
        categories: {
            type: Array,
            default: []
        },
        isCategory: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        toggle() {
            this.open = !this.open;
        },
        select(category) {
            this.selected = category;
            this.$emit('select', category.id);
            this.open = false;
        }
    },
    mounted() {
        document.addEventListener('click', (e) => {
            if (!this.$refs.selection.contains(e.target)) {
                this.open = false;
            }
        });
    }
}
</script>