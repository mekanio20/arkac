<template>
    <div :class="{ 'border-b border-gray-200': isBorder }" class="py-8 sm:py-10 md:py-12">
        <div class="container flex items-center" :class="count >= 0 ? 'justify-between' : 'justify-center'">
            <h2 class="font-inter font-medium text-3xl sm:text-5xl md:text-[68px] uppercase leading-[130%] text-center sm:text-left">{{ title }}</h2>
            <p v-if="count" class="font-inter font-semibold text-3xl sm:text-5xl md:text-[68px] tracking-[1px] sm:tracking-[2px] leading-[130%] text-arkac-blue-200 mt-2 sm:mt-0 text-center sm:text-left">{{ count }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TitleSection',
    props: {
        title: {
            type: String,
            required: true
        },
        isBorder: {
            type: Boolean,
            default: false
        },
        count: {
            type: Number,
            default: 0
        }
    }
}
</script>