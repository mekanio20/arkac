<template>
    <router-link :to="link"
        class="w-fit inline-flex items-center justify-center px-12 py-4 border-[1px] rounded-full transition-all duration-300 hover:scale-105 hover:shadow-md"
        :class="[borderColor, bgColor, textColor]">
        <span class="font-inter text-xs md:text-sm lg:text-base mr-2 md:mr-3 lg:mr-4 uppercase">{{ text }}</span>
        <ArrowRight :color="iconColor" class="w-3 h-3 md:w-4 md:h-4 transition-transform duration-300 group-hover:translate-x-1" />
    </router-link>
</template>

<script>
import ArrowRight from '@/components/icons/arrow-right.vue';
export default {
    components: {
        ArrowRight
    },
    props: {
        text: {
            type: String,
            required: true
        },
        link: {
            type: String,
            required: false
        },
        textColor: {
            type: String,
            default: "text-black"
        },
        iconColor: {
            type: String,
            default: "black"
        },
        borderColor: {
            type: String,
            default: "border-arkac-gray-200"
        },
        bgColor: {
            type: String,
            default: "bg-transparent"
        }
    }
}
</script>

<style scoped>
button:hover .w-3,
button:hover .w-4 {
    transform: translateX(4px);
}
</style>