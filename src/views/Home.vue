<template>
  <div class="w-full h-full">
    <div class="min-h-screen relative bg-gradient-arkac">
      <!-- Header -->
      <header class="py-5 border-b-[1px] border-white">
        <div class="container flex items-center justify-between">
          <!-- Left section with hamburger and location -->
          <div class="flex items-center">
            <!-- Mobile menu button -->
            <button class="md:hidden p-2 focus:outline-none" @click="toggleMobileMenu">
              <div class="flex flex-col space-y-1">
                <div class="w-[25px] h-[2px] bg-black rounded-full"></div>
                <div class="w-[25px] h-[2px] bg-black rounded-full"></div>
                <div class="w-[15px] h-[2px] bg-gray-700 rounded-full"></div>
              </div>
            </button>
  
            <!-- Location selector -->
            <div class="md:flex hidden items-center ml-2 cursor-pointer hover:text-arkac-blue-700 transition-colors">
              <locationIcon />
              <span class="ml-3 font-inter font-medium text-base">Nirede yerleşyär?</span>
            </div>
          </div>
  
          <!-- Center logo -->
          <router-link to="/" class="absolute left-1/2 transform -translate-x-1/2">
            <h1 class="text-3xl font-playfair font-bold text-black">Arkaç</h1>
          </router-link>
  
          <!-- Right section with language and search -->
          <div class="flex items-center space-x-2 cursor-pointer">
            <!-- Language selector -->
            <button class="rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </button>
            <p class="font-inter font-medium text-base uppercase">TM</p>
          </div>
        </div>
      </header>
      <div class="container">
        <!-- Navbar -->
        <Navbar />
        <!-- Hero Section -->
        <HeroSection />
        <!-- Time Section -->
        <div class="absolute bottom-8 right-4 sm:right-8">
          <div class="inline-flex items-center py-2 px-4 bg-white rounded-full shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-black mr-2" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span class="text-sm font-avenir font-medium">10:00 - 22:00</span>
          </div>
        </div>
        <!-- Contact Button -->
        <div class="absolute bottom-20 right-4 sm:right-8">
          <button
            class="h-14 w-14 bg-arkac-blue-200 hover:bg-arkac-blue-600 rounded-full shadow-lg flex items-center justify-center transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </button>
        </div>
        <!-- Bottom icon -->
        <div
          class="absolute -bottom-[32px] w-[65px] h-[65px] flex items-center justify-center right-1/2 left-1/2 transform -translate-x-1/2 bg-white border-[1px] border-arkac-gray-100 border-opacity-70 rounded-full cursor-pointer">
          <img src="/svgs/bottom.svg">
        </div>
      </div>
    </div>
    <div class="bg-white">
      <h2 class="container arkac-title pt-14">
        Täzelikler we Çäreler
      </h2>
      <marquee direction="right" class="w-full my-14 py-4 rotate-1 arkac-news-gradient flex items-center space-x-4">
        <div class="flex items-center space-x-6">
          <p class="font-inter font-semibold text-[22px] text-white uppercase">
            Täzelikler & Çäreler
          </p>
          <img src="/svgs/thunder.svg" alt="Thunder">
          <p class="font-inter font-semibold text-[22px] text-white uppercase">
            Täzelikler & Çäreler
          </p>
          <img src="/svgs/thunder.svg" alt="Thunder">
          <p class="font-inter font-semibold text-[22px] text-white uppercase">
            Täzelikler & Çäreler
          </p>
          <img src="/svgs/thunder.svg" alt="Thunder">
          <p class="font-inter font-semibold text-[22px] text-white uppercase">
            Täzelikler & Çäreler
          </p>
          <img src="/svgs/thunder.svg" alt="Thunder">
          <p class="font-inter font-semibold text-[22px] text-white uppercase">
            Täzelikler & Çäreler
          </p>
          <img src="/svgs/thunder.svg" alt="Thunder">
        </div>
      </marquee>
      <!-- News Section -->
      <News />
      <!-- Stats Display  -->
      <StatsDisplay leftImage="/imgs/a1.png" rightImage="/imgs/a2.png" bottomCenterImage="/imgs/a3.png" bottomLeftImage="/imgs/a4.png" bottomRightImage="/imgs/a1.png" />
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
import Cinema from '@/components/Cinema.vue';
import Shop from '@/components/Shop.vue';
import Footer from '@/components/Footer.vue';
import locationIcon from '@/components/icons/location.vue';
export default {
  name: 'Home',
  components: {
    Navbar,
    Header,
    HeroSection,
    News,
    Service,
    StatsDisplay,
    Cinema,
    Shop,
    Footer,
    locationIcon
  },
  data() {
    return {
      isMobileMenuOpen: false,
    }
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    }
  }
}
</script>