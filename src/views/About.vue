<template>
    <div class="w-full overflow-hidden">
        <div class="min-h-screen relative bg-gradient-arkac overflow-hidden">
            <!-- Header -->
            <Header />

            <!-- Blur Stars - Responsive positioning -->
            <div class="absolute top-48 left-1/5 md:left-1/4 lg:left-80 animate-float">
                <BlurStar />
            </div>
            <div class="absolute top-72 -left-4 animate-float" style="animation-delay: 1s;">
                <BlurStar />
            </div>
            <div class="absolute top-[550px] left-28 animate-float" style="animation-delay: 2s;">
                <BlurStar />
            </div>
            <div class="absolute top-48 right-1/5 md:right-1/4 lg:right-64 animate-float"
                style="animation-delay: 0.5s;">
                <BlurStar />
            </div>
            <div class="absolute top-72 -right-4 animate-float" style="animation-delay: 1.5s;">
                <BlurStar />
            </div>
            <div class="absolute top-[550px] right-28 animate-float" style="animation-delay: 2.5s;">
                <BlurStar />
            </div>
            <div class="absolute top-[650px] left-1/2 -translate-x-1/2 animate-float" style="animation-delay: 3s;">
                <BlurStar />
            </div>

            <!-- Navbar -->
            <Navbar />

            <!-- Hero Section -->
            <div class="flex flex-col items-center mt-[280px] md:mt-[200px] lg:mt-[150px] text-center px-4">
                <div class="flex flex-col md:flex-row items-center md:items-baseline md:space-x-4 lg:space-x-8">
                    <h1
                        class="font-playfair font-bold text-6xl sm:text-8xl md:text-[120px] lg:text-[140px] arkac-text-gradient pb-2 leading-tight">
                        Arkaç</h1>
                    <img class="w-32 h-auto sm:w-40 md:w-[150px] lg:w-[190px] md:h-[60px] inline-block"
                        src="/imgs/arkac.png" alt="Arkaç">
                </div>
                <p class="font-playfair font-medium text-3xl sm:text-5xl md:text-7xl lg:text-[94px] !leading-none mt-4">
                    {{ $t('subtitles.heroSubtitle') }}</p>
            </div>
        </div>

        <!-- Marquee Section -->
        <div class="w-full py-2 md:py-4 mb-20 md:mb-40 rotate-1 arkac-news-gradient overflow-hidden">
            <marquee direction="right" class="animate-marquee flex items-center space-x-6">
                <div class="flex items-center space-x-6 whitespace-nowrap">
                    <p class="font-inter font-semibold text-lg md:text-[22px] text-white uppercase">
                        {{ $t('nav.news') }}
                    </p>
                    <img src="/svgs/thunder.svg" alt="Thunder" class="w-6 h-6 md:w-auto md:h-auto">
                    <p class="font-inter font-semibold text-lg md:text-[22px] text-white uppercase">
                        {{ $t('nav.news') }}
                    </p>
                    <img src="/svgs/thunder.svg" alt="Thunder" class="w-6 h-6 md:w-auto md:h-auto">
                    <p class="font-inter font-semibold text-lg md:text-[22px] text-white uppercase">
                        {{ $t('nav.news') }}
                    </p>
                    <img src="/svgs/thunder.svg" alt="Thunder" class="w-6 h-6 md:w-auto md:h-auto">
                    <p class="font-inter font-semibold text-lg md:text-[22px] text-white uppercase">
                        {{ $t('nav.news') }}
                    </p>
                    <img src="/svgs/thunder.svg" alt="Thunder" class="w-6 h-6 md:w-auto md:h-auto">
                    <p class="font-inter font-semibold text-lg md:text-[22px] text-white uppercase">
                        {{ $t('nav.news') }}
                    </p>
                    <img src="/svgs/thunder.svg" alt="Thunder" class="w-6 h-6 md:w-auto md:h-auto">
                </div>
            </marquee>
        </div>

        <!-- About Section -->
        <div class="container relative pb-20 md:pb-40 lg:pb-60 px-4 md:px-8">
            <div class="flex flex-col lg:flex-row lg:items-start lg:space-x-10 space-y-8 lg:space-y-0">
                <div class="flex-1">
                    <h4
                        class="w-fit py-2 px-6 bg-arkac-blue-800 -rotate-1 text-white font-inter font-semibold text-lg inline-block mb-4">
                        Arkac
                    </h4>
                    <span class="font-inter font-normal text-lg md:text-xl lg:text-[22px] block">
                        {{ $t('subtitles.subtitle3') }}
                    </span>
                </div>
                <div class="flex-1 flex flex-col space-y-6 md:space-y-8 lg:space-y-10">
                    <p class="font-inter font-normal text-lg md:text-xl lg:text-[22px]">
                        {{ $t('subtitles.subtitle4') }}
                    </p>
                    <p class="font-inter font-normal text-lg md:text-xl lg:text-[22px]">
                        {{ $t('subtitles.subtitle5') }}
                    </p>
                    <p class="font-inter font-normal text-lg md:text-xl lg:text-[22px]">
                        {{ $t('subtitles.subtitle6') }}
                    </p>
                </div>
            </div>

            <div class="hidden lg:block absolute bottom-20 md:bottom-[130px] left-1/4 lg:left-[400px]">
                <Arrow class="animate-float" />
            </div>

            <div class="absolute -bottom-8 md:bottom-10 lg:bottom-20 -left-16 hidden md:block">
                <div class="flex items-center justify-center !relative">
                    <ArkacLoopIcon class="slow-rotate w-24 h-24 md:w-32 md:h-32 lg:w-auto lg:h-auto" />
                    <StarIcon class="absolute left-1/2 -translate-x-1/2 animate-pulse-soft" />
                </div>
            </div>
        </div>

        <!-- Stats Display -->
        <StatsDisplay :isAbout="true" leftImage="/imgs/b4.png" rightImage="/imgs/b2.png"
            bottomCenterImage="/imgs/b3.png" bottomLeftImage="/imgs/b4.png" bottomRightImage="/imgs/b4.png" />

        <!-- Terms Card -->
        <div class="container px-4 md:px-8">
            <TermsCard />
        </div>

        <!-- Gallery Section -->
        <GallerySection />

        <!-- Footer Section -->
        <Footer />
    </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import BlurStar from '@/components/icons/blur_star.vue';
import ArkacLoopIcon from '@/components/icons/arkac-loop.vue';
import StarIcon from '@/components/icons/star.vue';
import Arrow from '@/components/icons/arrow.vue';
import StatsDisplay from '@/components/StatsDisplay.vue';
import TermsCard from '@/components/TermsCard.vue';
import GallerySection from '@/components/GallerySection.vue';
export default {
    name: 'About',
    components: {
        Navbar,
        Header,
        Footer,
        BlurStar,
        Arrow,
        ArkacLoopIcon,
        StarIcon,
        StatsDisplay,
        TermsCard,
        GallerySection
    },
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