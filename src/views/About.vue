<template>
    <div class="w-full overflow-hidden">
        <div class="min-h-screen relative overflow-hidden">
            <!-- Header -->
            <header class="text-white">
                <div class="py-3 md:py-5 border-b-[1px] border-white">
                    <div class="container flex items-center justify-between ">
                        <!-- Left section with hamburger and location -->
                        <div class="flex items-center">
                            <!-- Mobile menu button -->
                            <button class="z-10 md:hidden p-2 focus:outline-none" @click="toggleMobileMenu">
                                <div class="flex flex-col space-y-1">
                                    <div class="w-[25px] h-[2px] bg-white rounded-full"></div>
                                    <div class="w-[25px] h-[2px] bg-white rounded-full"></div>
                                    <div class="w-[15px] h-[2px] bg-white rounded-full"></div>
                                </div>
                            </button>

                            <!-- Location -->
                            <router-link to="/contact"
                                class="hidden z-10 md:flex items-center ml-2 cursor-pointer hover:text-arkac-gray-200 transition-colors">
                                <locationIcon color="white" />
                                <span class="ml-3 font-inter font-medium text-base">{{ $t('common.location') }}</span>
                            </router-link>
                        </div>

                        <!-- Center logo -->
                        <router-link to="/" class="absolute left-1/2 transform -translate-x-1/2">
                            <!-- <h1 class="text-2xl md:text-3xl font-playfair font-bold text-white">Arkaç</h1> -->
                            <img class="w-[92px]" src="/svgs/logo-white.svg">
                        </router-link>

                        <!-- Right section with language and search -->
                        <div class="flex items-center space-x-2 cursor-pointer">
                            <LangSelector color="white" @language-changed="handleLanguageChange" />
                        </div>
                    </div>
                </div>
                <!-- Navbar -->
                <Navbar />
                <!-- Sidebar -->
                <Sidebar :isOpen="isMobileMenuOpen" @close="toggleMobileMenu" />
            </header>
            <!-- Hero Section -->
            <HeroSection />
            <!-- Background Image -->
            <div class="absolute top-0 left-0 -z-10 w-full h-full">
                <swiper :slidesPerView="1" :modules="modules" effect="fade" :speed="1000" :loop="true"
                    :autoplay="{ delay: 5000 }" class="w-full h-full">
                    <swiper-slide v-for="item in images" :key="item" class="w-full h-full">
                        <img v-lazy="item" class="w-full h-full object-cover" lazy="loading">
                    </swiper-slide>
                </swiper>
            </div>
        </div>

        <!-- Marquee Section -->
        <div class="w-full py-2 md:py-4 mb-20 md:mb-40 rotate-1 arkac-news-gradient overflow-hidden">
            <marquee direction="right" class="animate-marquee flex items-center space-x-6">
                <div class="flex items-center space-x-6 whitespace-nowrap">
                    <p class="font-inter font-semibold text-lg md:text-[22px] text-white uppercase">
                        {{ $t('nav.about') }}
                    </p>
                    <img src="/svgs/thunder.svg" alt="Thunder" class="w-6 h-6 md:w-auto md:h-auto">
                    <p class="font-inter font-semibold text-lg md:text-[22px] text-white uppercase">
                        {{ $t('nav.about') }}
                    </p>
                    <img src="/svgs/thunder.svg" alt="Thunder" class="w-6 h-6 md:w-auto md:h-auto">
                    <p class="font-inter font-semibold text-lg md:text-[22px] text-white uppercase">
                        {{ $t('nav.about') }}
                    </p>
                    <img src="/svgs/thunder.svg" alt="Thunder" class="w-6 h-6 md:w-auto md:h-auto">
                    <p class="font-inter font-semibold text-lg md:text-[22px] text-white uppercase">
                        {{ $t('nav.about') }}
                    </p>
                    <img src="/svgs/thunder.svg" alt="Thunder" class="w-6 h-6 md:w-auto md:h-auto">
                    <p class="font-inter font-semibold text-lg md:text-[22px] text-white uppercase">
                        {{ $t('nav.about') }}
                    </p>
                    <img src="/svgs/thunder.svg" alt="Thunder" class="w-6 h-6 md:w-auto md:h-auto">
                </div>
            </marquee>
        </div>

        <!-- About Section -->
        <div class="container relative pb-20 md:pb-40 lg:pb-60 px-4 md:px-8">
            <div class="flex flex-col lg:flex-row lg:items-start lg:space-x-10 space-y-8 lg:space-y-0">
                <div class="flex-1">
                    <!-- <h4
                        class="w-fit py-2 px-6 bg-arkac-blue-800 -rotate-1 text-white font-inter font-semibold text-lg inline-block mb-4">
                        Arkaç
                    </h4> -->
                    <div class="w-fit py-2 inline-block">
                        <img src="/svgs/logo-blue.svg">
                    </div>
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
        <StatsDisplay :isAbout="true" leftImage="/imgs/cafes.webp" rightImage="/imgs/cinema.webp"
            bottomCenterImage="/imgs/clothes.webp" bottomLeftImage="/imgs/cafes.webp"
            bottomRightImage="/imgs/cafes.webp" />

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
import HeroSection from '@/components/HeroSection.vue';
import LangSelector from '@/components/LangSelector.vue';
import GallerySection from '@/components/GallerySection.vue';
import locationIcon from '@/components/icons/location.vue';
import ClockIcon from '@/components/icons/clock.vue';
import PhoneIcon from '@/components/icons/phone.vue';
import Sidebar from '@/components/Sidebar.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';

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
        GallerySection,
        LangSelector,
        HeroSection,
        locationIcon,
        ClockIcon,
        PhoneIcon,
        Sidebar,
        Swiper,
        SwiperSlide
    },
    data() {
        return {
            isMobileMenuOpen: false,
            modules: [Autoplay, EffectFade],
            images: [
                '/imgs/arkac-light.webp',
                '/imgs/arkac-dark.webp'
            ]
        }
    },
    methods: {
        toggleMobileMenu() {
            this.isMobileMenuOpen = !this.isMobileMenuOpen;
            document.body.style.overflow = this.isMobileMenuOpen ? 'hidden' : '';
        },
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