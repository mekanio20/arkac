<template>
    <section class="relative px-2 sm:px-4 flex flex-col items-center justify-center min-h-screen">
        <!-- Main logo and headline -->
        <div class="relative z-10 text-center md:mb-52 sm:mb-40 mb-20">
            <div class="flex items-center justify-center space-x-2 sm:space-x-4">
                <!-- <h2 class="font-playfair font-bold text-5xl sm:text-7xl md:text-[94px] text-white pb-1">Arkaç
                </h2> -->
                <img class="lg:w-[343px] sm:w-[280px] w-[230px]" src="/svgs/logo-white.svg" />
                <div
                    class="mt-2 sm:mt-4 h-[30px] w-[90px] sm:h-[50px] sm:w-[150px] overflow-hidden rounded-full sm:block hidden">
                    <img src="/imgs/arkac-3.webp" alt="Mall view" class="h-full w-full object-cover" />
                </div>
            </div>

            <h3
                class="text-2xl sm:text-3xl sm:w-full w-[200px] mx-auto md:text-5xl font-inter font-medium tracking-[1px] sm:tracking-[2px] text-white">
                {{ $t('subtitles.heroSubtitle') }}
            </h3>

            <p
                class="my-8 sm:my-[50px] sm:w-[600px] max-w-[400px] mx-auto text-center text-medium sm:text-base text-sm px-4 text-white">
                {{ $t('subtitles.subtitle2') }}
            </p>

            <!-- Action buttons -->
            <div
                class="flex flex-col sm:flex-row justify-center mt-6 sm:mt-10 space-y-4 sm:space-y-0 sm:space-x-6 sm:w-full w-[300px] mx-auto">
                <router-link to="/360"
                    class="btn arkac-button-gradient flex items-center justify-center text-white py-2 sm:py-3 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-arkac-primary/30">
                    <span class="font-avenir font-semibold text-sm sm:text-base">{{ $t('common.view360') }}</span>
                </router-link>

                <router-link to="/schema/-1"
                    class="btn transition-all duration-300 bg-white flex items-center justify-center hover:scale-105 hover:shadow-lg hover:bg-gray-50">
                    <schemaIcon class="w-4 h-4 sm:w-5 sm:h-5" />
                    <span class="font-avenir text-sm sm:text-base">{{ $t('common.schema') }}</span>
                </router-link>
            </div>

        </div>
        <div class="w-full absolute md:bottom-40 bottom-20 sm:right-10 flex sm:flex-col flex-row sm:items-end sm:space-y-4 space-y-0 items-center sm:justify-end justify-between sm:px-0 px-10">
            <!-- Phone -->
            <a href="tel:+99312276860" class="p-3 rounded-full bg-arkac-blue-200">
                <phoneIcon />
            </a>
            <!-- Clock -->
            <div class="px-3 py-2 rounded-full bg-white flex items-center space-x-2">
                <clockIcon />
                <span class="text-[12px] text-nowrap">10:00 - 22:00</span>
            </div>
        </div>
    </section>
</template>

<script>
import CircleIcon from './CircleIcon.vue';
import schemaIcon from './icons/schema.vue';
import phoneIcon from './icons/phone.vue';
import clockIcon from './icons/clock.vue';
export default {
    name: 'HeroSection',
    components: {
        CircleIcon,
        schemaIcon,
        phoneIcon,
        clockIcon
    }
}
</script>