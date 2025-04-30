<template>
    <div :class="{ 'border-b border-gray-200': isBorder }" class="py-8">
        <div class="container flex items-center" :class="count ? 'justify-between' : 'justify-center'">
            <h2 class="font-inter font-medium text-[68px] uppercase leading-[130%]">{{ title }}</h2>
            <p v-if="count" class="font-inter font-semibold text-[68px] tracking-[2px] leading-[130%] text-arkac-blue-200">{{ count }}</p>
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