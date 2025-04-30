<template>
    <section class="relative px-4 pt-6 pb-16 flex flex-col items-center">
        <!-- Left side -->
        <CircleIcon class="absolute left-[25px] top-[80px]"
            imageUrl="/imgs/icon-1.png" alt="Clothing item" />

        <CircleIcon class="absolute left-[50px] top-[260px]"
            imageUrl="/imgs/icon-2.png" alt="Clothing item" />

        <CircleIcon class="absolute left-[100px] top-[490px]"
            imageUrl="/imgs/icon-3.png" alt="Clothing item" />
        
        <!-- Right side -->
        <CircleIcon class="absolute right-[25px] top-[80px]"
            imageUrl="/imgs/icon-4.png" alt="Clothing item" />

        <CircleIcon class="absolute right-[50px] top-[260px]"
            imageUrl="/imgs/icon-5.png" alt="Clothing item" />

        <CircleIcon class="absolute right-[100px] top-[490px]"
            imageUrl="/imgs/icon-6.png" alt="Clothing item" />

        <!-- Main logo and headline -->
        <div class="relative z-10 mt-[60px] text-center">
            <div class="flex items-center justify-center space-x-4">
                <h2 class="font-playfair font-bold md:text-[94px] arkac-text-gradient">Arkaç</h2>
                <div class="mt-4 h-[50px] w-[150px] overflow-hidden rounded-full">
                    <img src="/imgs/arkac.png" alt="Mall view"
                        class="h-full w-full object-cover" />
                </div>
            </div>

            <h3 class="text-5xl md:text-6xl font-inter font-normal tracking-[2px]">söwda dynç alyş merkezi</h3>

            <p class="my-[70px] max-w-2xl mx-auto text-center text-lg text-arkac-gray-100">
                Çäksiz söwda mümkinçilikleri, lezzetli naharlar we gyzykly dynç alyş bilen
                ajaýyp tejribäni başdan geçiriň - hemmesi bir ýerde, size ýakyn!
            </p>

            <!-- Action buttons -->
            <div class="flex flex-col sm:flex-row justify-center mt-10 space-y-4 sm:space-y-0 sm:space-x-6">
                <button class="btn arkac-button-gradient flex items-center justify-center text-white">
                    <span class="font-avenir font-semibold">360° görmek</span>
                </button>

                <button class="px-8 py-3 rounded-full font-medium transition-all duration-300 bg-white flex items-center justify-center">
                    <schemaIcon />
                    <span class="font-avenir">SDAM-yň shemasy</span>
                </button>
            </div>
        </div>
    </section>
</template>

<script>
import CircleIcon from './CircleIcon.vue';
import schemaIcon from './icons/schema.vue';
export default {
    name: 'HeroSection',
    components: {
        CircleIcon,
        schemaIcon
    }
}
</script>