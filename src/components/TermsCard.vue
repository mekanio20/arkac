<template>
    <div class="container relative bg-arkac-blue-400 rounded-xl px-28 flex items-center justify-between mb-40">
        <div class="flex flex-col space-y-10 w-1/2 py-16 z-40">
            <h2 class="font-avenir font-black text-[54px]">Söwda merkeziniň düzgünleri</h2>
            <Button text="Görmek" bgColor="bg-arkac-blue-200" borderColor="border-arkac-blue-200" textColor="text-white" iconColor="white" />
        </div>
        <div class="w-[234px] self-end">
            <img src="/imgs/terms-card.png" class="w-full h-full object-cover">
        </div>
        <!-- SVGS -->
        <div class="absolute bottom-0 left-0 rounded-xl">
            <img src="/svgs/ellipse-1.svg" class="w-full h-full object-cover rounded-xl">
        </div>
        <div class="absolute bottom-0 right-0 rounded-xl">
            <img src="/svgs/ellipse-2.svg" class="w-full h-full object-cover rounded-xl">
        </div>
        <!-- Stars -->
         <div class="absolute bottom-1/2 left-10">
            <BlurStar />
         </div>
         <div class="absolute top-10 right-10">
            <BlurStar />
         </div>
         <div class="absolute top-72 right-1/2">
            <BlurStar />
         </div>
         <!-- Arrow -->
         <div class="absolute -bottom-[120px] right-0 -z-10">
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