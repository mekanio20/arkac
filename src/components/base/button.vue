<template>
    <button
        class="inline-flex items-center justify-center px-12 py-4 border-[1px] border-arkac-gray-200 rounded-full text-black transition-colors">
        <span class="font-inter text-sm mr-4 uppercase">ählisini görmek</span>
        <ArrowRight />
    </button>
</template>

<script>
import ArrowRight from '@/components/icons/arrow-right.vue';
export default {
    components: {
        ArrowRight
    }
}
</script>