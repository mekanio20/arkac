<template>
  <div class="w-full h-full overflow-hidden">
    <div class="h-screen relative">
      <!-- Header -->
      <header class="py-3 md:py-5 border-b-[1px] border-white text-white">
        <div class="container flex items-center justify-between">
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
            <h1 class="text-2xl md:text-3xl font-playfair font-bold text-white">Arkaç</h1>
          </router-link>

          <!-- Right section with language and search -->
          <div class="flex items-center space-x-2 cursor-pointer">
            <LangSelector color="white" @language-changed="handleLanguageChange" />
          </div>
        </div>
        <!-- Sidebar -->
        <Sidebar :isOpen="isMobileMenuOpen" @close="toggleMobileMenu" />
      </header>
      <!-- Hero Section -->
      <HeroSection />
      <!-- Background Image -->
      <div class="absolute top-0 left-0 -z-10 w-full h-full">
        <div class="absolute top-0 left-0 w-full h-full bg-black/30 z-10"></div>
        <swiper :slidesPerView="1" :modules="modules" effect="fade" :speed="1000" :loop="true"
          :autoplay="{ delay: 5000 }" class="w-full h-full">
          <swiper-slide v-for="item in images" :key="item" class="w-full h-full">
            <img v-lazy="item" class="w-full h-full object-cover" lazy="loading">
          </swiper-slide>
        </swiper>
      </div>
      <!-- Scroll to content -->
      <div
        class="absolute -bottom-[32px] w-[50px] h-[50px] md:w-[65px] md:h-[65px] flex items-center justify-center right-1/2 left-1/2 transform -translate-x-1/2 bg-white border-[1px] border-arkac-gray-100 border-opacity-70 rounded-full cursor-pointer hover:bg-gray-50 transition-colors duration-300"
        @click="scrollToContent">
        <img src="/svgs/bottom.svg" class="w-4 h-4 md:w-6 md:h-6">
      </div>
    </div>
    <div class="bg-white" id="content-section">
      <!-- Stats Display  -->
      <StatsDisplay leftImage="/imgs/a1.png" rightImage="/imgs/a2.png" bottomCenterImage="/imgs/a3.png"
        bottomLeftImage="/imgs/a4.png" bottomRightImage="/imgs/a1.png" />
      <!-- Service Section -->
      <Service />
      <!-- Cinema Section -->
      <Cinema />
      <!-- Shop Section -->
      <Shop />
    </div>
    <!-- Footer Section -->
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Navbar from '@/components/Navbar.vue';
import HeroSection from '@/components/HeroSection.vue';
import News from '@/components/News.vue';
import Service from '@/components/Service.vue';
import StatsDisplay from '@/components/StatsDisplay.vue';
import Sidebar from '@/components/Sidebar.vue';
import Cinema from '@/components/Cinema.vue';
import Shop from '@/components/Shop.vue';
import Footer from '@/components/Footer.vue';
import locationIcon from '@/components/icons/location.vue';
import LangSelector from '@/components/LangSelector.vue';
import ClockIcon from '@/components/icons/clock.vue';
import PhoneIcon from '@/components/icons/phone.vue'

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';

export default {
  name: 'Home',
  components: {
    Navbar,
    Header,
    HeroSection,
    News,
    Service,
    Sidebar,
    StatsDisplay,
    Cinema,
    Shop,
    Footer,
    locationIcon,
    LangSelector,
    ClockIcon,
    PhoneIcon,
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      isMobileMenuOpen: false,
      isScrolling: false,
      scrollTimeout: null,
      news: [],
      movies: [],
      films: [],
      days: [],
      activeId: null,
      modules: [Autoplay, EffectFade],
      images: [
        '/imgs/hero-1.webp',
        '/imgs/hero-2.webp',
        '/imgs/hero-3.webp',
        '/imgs/hero-4.webp',
        '/imgs/hero-5.webp',
        '/imgs/hero-6.webp',
        '/imgs/hero-7.webp'
      ]
    }
  },
  // mounted() {
  //   window.addEventListener('scroll', this.handleScroll);
  // },
  // beforeUnmount() {
  //   window.removeEventListener('scroll', this.handleScroll);
  // },
  methods: {
    scrollToContent() {
      const element = document.getElementById('content-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    },
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
      document.body.style.overflow = this.isMobileMenuOpen ? 'hidden' : '';
    },
    handleLanguageChange(lang) {
      console.log('Language changed to:', lang);
    },
    handleScroll() {
      if (!this.isScrolling) {
        this.isScrolling = true;
        this.$refs.newsMarquee.stop();
      }

      // Clear the previous timeout
      if (this.scrollTimeout) {
        clearTimeout(this.scrollTimeout);
      }

      // Set a new timeout
      this.scrollTimeout = setTimeout(() => {
        this.isScrolling = false;
        this.$refs.newsMarquee.start();
      }, 150); // Resume scrolling after 150ms of no scroll activity
    },
  }
}
</script>