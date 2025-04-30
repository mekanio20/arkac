<template>
    <header class="py-5 border-b-[1px] border-arkac-gray-500">
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
                <div
                    class="ml-2 md:flex hidden items-center space-x-10">
                    <div class="cursor-pointer flex items-center hover:text-arkac-blue-700 transition-colors">
                        <locationIcon />
                        <span class="ml-3 font-inter font-medium text-base">Nirede yerleşyär?</span>
                    </div>
                    <div class="flex items-start space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-black mt-[1px]" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span class="mt-[1px] text-sm font-inter font-medium">10:00 - 22:00</span>
                    </div>
                </div>
            </div>

            <!-- Center logo -->
            <router-link to="/" class="absolute left-1/2 transform -translate-x-1/2">
                <h1 class="text-3xl font-playfair font-bold arkac-text-gradient">Arkaç</h1>
            </router-link>

            <!-- Right section with language and search -->
            <div class="flex items-center space-x-16">
                <p class="font-inter font-medium text-base">
                    360° görmek
                </p>
                <div class="flex items-center space-x-1 cursor-pointer">
                    <schemaIcon />
                    <p class="font-inter font-medium text-base">SDAM-yň shemasy</p>
                </div>
                <div class="flex items-center space-x-2 cursor-pointer">
                    <!-- Language selector -->
                    <button class="rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-700" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                    </button>
                    <p class="font-inter font-medium text-base uppercase">TM</p>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import locationIcon from './icons/location.vue';
import schemaIcon from './icons/schema.vue';
export default {
    name: 'Header',
    components: {
        locationIcon,
        schemaIcon
    },
    data() {
        return {
            isMobileMenuOpen: false,
        };
    },
    methods: {
        toggleMobileMenu() {
            this.isMobileMenuOpen = !this.isMobileMenuOpen;
        }
    }
}
</script>