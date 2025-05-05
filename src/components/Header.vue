<template>
    <header class="py-3 md:py-5 border-b-[1px] border-arkac-gray-500">
        <div class="container flex items-center justify-between relative">
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
                <div class="ml-2 md:flex hidden items-center space-x-4 lg:space-x-10">
                    <div class="cursor-pointer flex items-center hover:text-arkac-blue-700 transition-colors">
                        <locationIcon />
                        <span class="ml-2 lg:ml-3 font-inter font-medium text-sm lg:text-base">{{ $t('common.location') }}</span>
                    </div>
                    <div class="flex items-start space-x-2">
                        <ClockIcon />
                        <span class="mt-[1px] text-xs lg:text-sm font-inter font-medium">{{ $t('common.workingHours') }}</span>
                    </div>
                </div>
            </div>

            <!-- Center logo -->
            <router-link to="/" class="absolute left-1/2 transform -translate-x-1/2">
                <h1 class="text-2xl md:text-3xl font-playfair font-bold arkac-text-gradient">Arkaç</h1>
            </router-link>

            <!-- Right section with language and search -->
            <div class="flex items-center md:space-x-4 lg:space-x-10">
                <p class="hidden md:block font-inter font-medium text-sm lg:text-base">
                    {{ $t('common.view360') }}
                </p>
                <div class="hidden md:flex items-center space-x-1 cursor-pointer">
                    <schemaIcon />
                    <p class="font-inter font-medium text-sm lg:text-base">{{ $t('common.schema') }}</p>
                </div>
                <LangSelector @language-changed="handleLanguageChange" />
            </div>
        </div>

        <!-- Sidebar -->
        <Sidebar :isOpen="isMobileMenuOpen" @close="toggleMobileMenu" />
    </header>
</template>

<script>
import locationIcon from './icons/location.vue';
import schemaIcon from './icons/schema.vue';
import Sidebar from './Sidebar.vue';
import LangSelector from './LangSelector.vue';
import ClockIcon from './icons/clock.vue';

export default {
    name: 'Header',
    components: {
        locationIcon,
        schemaIcon,
        Sidebar,
        LangSelector,
        ClockIcon
    },
    data() {
        return {
            isMobileMenuOpen: false,
        };
    },
    methods: {
        toggleMobileMenu() {
            this.isMobileMenuOpen = !this.isMobileMenuOpen;
            // Prevent body scroll when sidebar is open
            document.body.style.overflow = this.isMobileMenuOpen ? 'hidden' : '';
        },
        handleLanguageChange(lang) {
            this.$i18n.locale = lang;
        }
    }
}
</script>

<style scoped>
.arkac-text-gradient {
    background: linear-gradient(90deg, #1E3A8A 0%, #3B82F6 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
</style>