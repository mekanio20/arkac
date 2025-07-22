<template>
    <div class="container relative bg-arkac-blue-400 rounded-xl px-6 md:px-12 lg:px-28 flex flex-col md:flex-row items-center justify-between mb-10">
        <div class="flex flex-col space-y-10 w-full sm:w-1/2 md:w-3/4 py-20 md:py-32 z-40">
            <h2 class="font-avenir font-black text-3xl md:text-4xl lg:text-[54px] text-center md:text-left md:!leading-[58px] !leading-[40px]">
                {{ $t('titles.terms') }}
            </h2>
            <div class="flex justify-center md:justify-start">
                <Button :link="'/terms'" text="Görmek" bgColor="bg-arkac-blue-200" borderColor="border-arkac-blue-200" textColor="text-white" iconColor="white" />
            </div>
        </div>
        <div class="w-full md:w-[234px] md:block hidden self-end">
            <img src="/imgs/terms-card.webp" class="w-full h-full object-cover">
        </div>
        <!-- SVGS -->
        <div class="absolute bottom-0 left-0 rounded-xl">
            <img src="/svgs/ellipse-1.svg" class="w-full h-full object-cover rounded-xl">
        </div>
        <div class="absolute bottom-0 right-0 rounded-xl">
            <img src="/svgs/ellipse-2.svg" class="w-full h-full object-cover rounded-xl">
        </div>
        <!-- Stars -->
        <div class="absolute bottom-1/2 left-4 md:left-10">
            <BlurStar class="w-6 h-6 md:w-8 md:h-8" />
        </div>
        <div class="absolute top-4 md:top-10 right-4 md:right-10">
            <BlurStar class="w-6 h-6 md:w-8 md:h-8" />
        </div>
        <div class="absolute top-40 md:top-72 right-1/2">
            <BlurStar class="w-6 h-6 md:w-8 md:h-8" />
        </div>
        <!-- Arrow -->
        <div class="md:block hidden absolute -bottom-[120px] right-0 -z-10">
            <Arrow class="rotate-[160deg]" />
        </div>
    </div>
</template>

<script>
import Button from './base/button.vue';
import BlurStar from './icons/blur_star.vue';
import Arrow from './icons/arrow.vue';
export default {
    components: {
        Button,
        BlurStar,
        Arrow
    }
}
</script>