<template>
    <div v-if="isOpen" class="fixed inset-0 !z-50">
        <!-- Backdrop -->
        <div class="absolute inset-0 bg-black bg-opacity-50" @click="close"></div>

        <!-- Sidebar -->
        <div class="absolute right-0 top-0 h-full w-full bg-white shadow-lg transform transition-transform duration-300"
            :class="{ 'translate-x-0': isOpen, 'translate-x-full': !isOpen }">

            <!-- Header -->
            <div class="flex items-center justify-between p-4 border-b border-arkac-gray-500">
                <div class="flex items-center space-x-6">
                    <button @click="close" class="hover:bg-gray-100 rounded-full transition-colors">
                        <CloseIcon />
                    </button>
                    <router-link to="/" class="font-playfair font-bold text-2xl arkac-text-gradient">Arkaç</router-link>
                </div>
                <SchemaIcon />
            </div>

            <!-- Header Links -->
            <div class="flex items-center justify-between p-4 border-b border-arkac-gray-500">
                <div class="cursor-pointer flex items-center hover:text-arkac-blue-700 transition-colors">
                    <locationIcon />
                    <span class="ml-2 lg:ml-3 font-inter font-medium text-sm lg:text-base">{{ $t('common.location') }}</span>
                </div>
                <div class="flex items-start space-x-2">
                    <ClockIcon />
                    <span class="mt-[1px] text-xs lg:text-sm font-inter font-medium">{{ $t('common.workingHours') }}</span>
                </div>
            </div>

            <!-- Navigation Links -->
            <nav class="pt-8">
                <div class="space-y-4">
                    <router-link v-for="(category, index) in categories" :key="index" :to="category.url"
                        class="block px-4 py-3 font-inter font-medium text-base rounded-lg hover:bg-arkac-blue-50 transition-colors"
                        @click="close">
                        {{ $t(`nav.${category.key}`) }}
                    </router-link>
                </div>
            </nav>

            <!-- Contact Section -->
            <div class="pt-10 px-4">
                <div class="space-y-6">
                    <!-- Social Media -->
                    <div class="flex items-center space-x-4 pt-2">
                        <a href="#">
                            <Instagram width="14px" fill="#27B7F2" />
                        </a>
                        <a href="#">
                            <Tiktok width="14px" fill="#27B7F2" />
                        </a>
                        <a href="#">
                            <X width="14px" fill="#27B7F2" />
                        </a>
                        <a href="#">
                            <Facebook width="14px" fill="#27B7F2" />
                        </a>
                    </div>
                    <!-- Location -->
                    <p class="font-inter font-medium text-sm text-arkac-gray-1300 uppercase text-left">
                        MAGTYMGULY ŞAÝOLY,
                        AŞGABAT, TÜRKMENISTAN
                    </p>
                    <!-- 360 -->
                    <button class="w-full btn arkac-button-gradient flex items-center justify-center text-white py-2 sm:py-3">
                        <span class="font-avenir font-semibold text-sm sm:text-base">{{ $t('common.view360') }}</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import locationIcon from './icons/location.vue';
import Instagram from './icons/instagram.vue';
import Tiktok from './icons/tiktok.vue';
import X from './icons/x.vue';
import Facebook from './icons/facebook.vue';
import SchemaIcon from './icons/schema.vue';
import ClockIcon from './icons/clock.vue';
import CloseIcon from './icons/close.vue';

export default {
    name: 'Sidebar',
    components: {
        locationIcon,
        Instagram,
        Tiktok,
        X,
        Facebook,
        SchemaIcon,
        ClockIcon,
        CloseIcon
    },
    props: {
        isOpen: {
            type: Boolean,
            required: true
        }
    },
    data() {
        return {
            categories: [
                {
                    id: 1,
                    key: 'shops',
                    url: '/shops'
                },
                {
                    id: 2,
                    key: 'cafes',
                    url: '/cafes'
                },
                {
                    id: 3,
                    key: 'services',
                    url: ''
                },
                {
                    id: 4,
                    key: 'cinema',
                    url: '/films'
                },
                {
                    id: 5,
                    key: 'news',
                    url: '/news'
                },
                {
                    id: 6,
                    key: 'about',
                    url: '/about'
                },
                {
                    id: 7,
                    key: 'contact',
                    url: '/contact'
                }
            ]
        }
    },
    methods: {
        close() {
            this.$emit('close');
        }
    }
}
</script>
