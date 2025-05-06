<template>
    <section class="relative px-2 sm:px-4 flex flex-col items-center justify-center min-h-screen">
        <!-- Left side -->
        <CircleIcon class="absolute left-[25px] sm:top-[80px] top-[90px]" imageUrl="/imgs/icon-1.png"
            alt="Clothing item" />

        <CircleIcon class="absolute sm:left-[50px] left-[-40px] sm:top-[260px] top-[270px]" imageUrl="/imgs/icon-2.png"
            alt="Clothing item" />

        <CircleIcon class="absolute sm:left-[100px] left-[40px] md:top-[490px] top-[600px]" imageUrl="/imgs/icon-3.png"
            alt="Clothing item" />

        <!-- Right side -->
        <CircleIcon class="absolute right-[25px] sm:top-[80px] top-[90px]" imageUrl="/imgs/icon-4.png"
            alt="Clothing item" />

        <CircleIcon class="absolute sm:right-[50px] right-[-40px] sm:top-[260px] top-[270px]"
            imageUrl="/imgs/icon-5.png" alt="Clothing item" />

        <CircleIcon class="absolute sm:right-[100px] right-[40px] md:top-[490px] top-[600px]"
            imageUrl="/imgs/icon-6.png" alt="Clothing item" />

        <!-- Main logo and headline -->
        <div class="relative z-10 text-center md:mb-52 sm:mb-40 mb-20">
            <div class="flex items-center justify-center space-x-2 sm:space-x-4">
                <h2 class="font-playfair font-bold text-5xl sm:text-7xl md:text-[94px] arkac-text-gradient pb-1">Arkaç
                </h2>
                <div
                    class="mt-2 sm:mt-4 h-[30px] w-[90px] sm:h-[50px] sm:w-[150px] overflow-hidden rounded-full sm:block hidden">
                    <img src="/imgs/arkac.png" alt="Mall view" class="h-full w-full object-cover" />
                </div>
            </div>

            <h3 class="text-3xl sm:text-4xl md:text-6xl font-inter font-normal tracking-[1px] sm:tracking-[2px]">
                {{ $t('subtitles.heroSubtitle') }}
            </h3>

            <p class="my-8 sm:my-[70px] max-w-2xl mx-auto text-center text-base sm:text-lg text-arkac-gray-100 px-4">
                {{ $t('subtitles.subtitle2') }}
            </p>

            <!-- Action buttons -->
            <div class="flex flex-col sm:flex-row justify-center mt-6 sm:mt-10 space-y-4 sm:space-y-0 sm:space-x-6">
                <button class="btn arkac-button-gradient flex items-center justify-center text-white py-2 sm:py-3 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-arkac-primary/30">
                    <span class="font-avenir font-semibold text-sm sm:text-base">{{ $t('common.view360') }}</span>
                </button>

                <button
                    class="px-6 sm:px-8 py-2 sm:py-3 rounded-full font-medium transition-all duration-300 bg-white flex items-center justify-center hover:scale-105 hover:shadow-lg hover:bg-gray-50">
                    <schemaIcon class="w-4 h-4 sm:w-5 sm:h-5" />
                    <span class="font-avenir text-sm sm:text-base">{{ $t('common.schema') }}</span>
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