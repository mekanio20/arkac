<template>
    <div class="container">
        <div class="flex items-center justify-between">
            <h2 class="arkac-title max-w-[600px]">
                Ähli hyzmatlar <img class="w-[125px] h-[46px] object-cover inline-block" src="/imgs/arkac-2.png">
                bir söwda merkezinde
            </h2>
            <div class="flex items-center justify-center relative">
                <ArkacLoopIcon class="slow-rotate" />
                <StarIcon class="absolute left-1/2 -translate-x-1/2" />
            </div>
        </div>
        <div class="py-20">
            <div class="flex items-center gap-x-8 pb-8">
                <div class="min-w-[500px] h-[300px] rounded-lg aspect-square md:aspect-auto relative overflow-hidden group transition-all duration-300">
                    <img class="w-full h-full object-cover rounded-lg transition-transform duration-500 group-hover:scale-105 cursor-pointer" src="/imgs/b1.png">
                </div>
                <div class="w-full h-[300px] rounded-lg aspect-square md:aspect-auto relative overflow-hidden group transition-all duration-300">
                    <img class="w-full h-full object-cover rounded-lg transition-transform duration-500 group-hover:scale-105 cursor-pointer" src="/imgs/b2.png">
                </div>
                <div class="w-full h-[300px] rounded-lg aspect-square md:aspect-auto relative overflow-hidden group transition-all duration-300">
                    <img class="w-full h-full object-cover rounded-lg transition-transform duration-500 group-hover:scale-105 cursor-pointer" src="/imgs/b3.png">
                </div>
                <div class="w-full h-[300px] rounded-lg aspect-square md:aspect-auto relative overflow-hidden group transition-all duration-300">
                    <img class="w-full h-full object-cover rounded-lg transition-transform duration-500 group-hover:scale-105 cursor-pointer" src="/imgs/b4.png">
                </div>
            </div>
            <div class="flex items-center gap-x-8">
                <div class="w-full h-[300px] rounded-lg aspect-square md:aspect-auto relative overflow-hidden group transition-all duration-300">
                    <img class="w-full h-full object-cover rounded-lg transition-transform duration-500 group-hover:scale-105 cursor-pointer" src="/imgs/b5.png">
                </div>
                <div class="w-full h-[300px] rounded-lg aspect-square md:aspect-auto relative overflow-hidden group transition-all duration-300">
                    <img class="w-full h-full object-cover rounded-lg transition-transform duration-500 group-hover:scale-105 cursor-pointer" src="/imgs/b6.png">
                </div>
                <div class="w-full h-[300px] rounded-lg aspect-square md:aspect-auto relative overflow-hidden group transition-all duration-300">
                    <img class="w-full h-full object-cover rounded-lg transition-transform duration-500 group-hover:scale-105 cursor-pointer" src="/imgs/b7.png">
                </div>
                <div class="w-full h-[300px] rounded-lg aspect-square md:aspect-auto relative overflow-hidden group transition-all duration-300">
                    <img class="w-full h-full object-cover rounded-lg transition-transform duration-500 group-hover:scale-105 cursor-pointer" src="/imgs/b8.png">
                </div>
                <div class="w-full h-[300px] rounded-lg aspect-square md:aspect-auto relative overflow-hidden group transition-all duration-300">
                    <img class="w-full h-full object-cover rounded-lg transition-transform duration-500 group-hover:scale-105 cursor-pointer" src="/imgs/b9.png">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ArkacLoopIcon from './icons/arkac-loop.vue';
import StarIcon from './icons/star.vue';
export default {
    components: {
        ArkacLoopIcon,
        StarIcon,
    },
    data() {
        return {
        }
    }
}
</script>

<style scoped>
.slow-rotate {
    animation: rotate 6s linear infinite;
}

@keyframes rotate {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}
</style>