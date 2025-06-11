<template>
  <div class="w-full h-full overflow-hidden">
    <div class="h-screen relative bg-gradient-arkac">
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
            <div class="hidden z-10 md:flex items-center ml-2 cursor-pointer hover:text-arkac-gray-200 transition-colors">
              <locationIcon color="white" />
              <span class="ml-3 font-inter font-medium text-base">{{ $t('common.location') }}</span>
            </div>
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
      <div class="container">
        <!-- Navbar -->
        <Navbar color="white" />
        <!-- Hero Section -->
        <HeroSection />
        <!-- Time Section -->
        <div class="absolute bottom-4 md:bottom-8 right-4 sm:right-8">
          <div class="flex items-center space-x-1 py-1.5 md:py-2 px-3 md:px-4 bg-white rounded-full shadow-md">
            <ClockIcon class="mb-[3px]" />
            <span class="text-xs md:text-sm font-avenir font-medium mt-[1px]">09:00 - 23:00</span>
          </div>
        </div>
        <!-- Contact Button -->
        <div class="absolute bottom-16 md:bottom-20 right-4 sm:right-8">
          <a href="tel:+99312276860"
            class="h-10 w-10 md:h-12 md:w-12 bg-arkac-blue-200 hover:bg-arkac-blue-600 rounded-full shadow-lg flex items-center justify-center transition-all duration-300">
            <PhoneIcon />
          </a>
        </div>
        <!-- Bottom icon -->
        <div
          class="absolute -bottom-[32px] w-[50px] h-[50px] md:w-[65px] md:h-[65px] flex items-center justify-center right-1/2 left-1/2 transform -translate-x-1/2 bg-white border-[1px] border-arkac-gray-100 border-opacity-70 rounded-full cursor-pointer hover:bg-gray-50 transition-colors duration-300"
          @click="scrollToContent">
          <img src="/svgs/bottom.svg" class="w-4 h-4 md:w-6 md:h-6">
        </div>
      </div>
    </div>
    <div class="bg-white" id="content-section">
      <h2 class="container arkac-title pt-8 md:pt-14">
        {{ $t('nav.news') }}
      </h2>
      <marquee ref="newsMarquee" direction="right"
        class="w-full my-8 md:my-14 py-3 md:py-4 rotate-1 arkac-news-gradient flex items-center space-x-4">
        <div class="flex items-center space-x-4 md:space-x-6">
          <p class="font-inter font-medium text-base md:text-[22px] text-white uppercase">
            {{ $t('nav.news') }}
          </p>
          <img src="/svgs/thunder.svg" alt="Thunder" class="w-4 h-4 md:w-6 md:h-6">
          <p class="font-inter font-medium text-base md:text-[22px] text-white uppercase">
            {{ $t('nav.news') }}
          </p>
          <img src="/svgs/thunder.svg" alt="Thunder" class="w-4 h-4 md:w-6 md:h-6">
          <p class="font-inter font-medium text-base md:text-[22px] text-white uppercase">
            {{ $t('nav.news') }}
          </p>
          <img src="/svgs/thunder.svg" alt="Thunder" class="w-4 h-4 md:w-6 md:h-6">
          <p class="font-inter font-medium text-base md:text-[22px] text-white uppercase">
            {{ $t('nav.news') }}
          </p>
          <img src="/svgs/thunder.svg" alt="Thunder" class="w-4 h-4 md:w-6 md:h-6">
          <p class="font-inter font-medium text-base md:text-[22px] text-white uppercase">
            {{ $t('nav.news') }}
          </p>
          <img src="/svgs/thunder.svg" alt="Thunder" class="w-4 h-4 md:w-6 md:h-6">
        </div>
      </marquee>
      <!-- News Section -->
      <News />
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
    PhoneIcon
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
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
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