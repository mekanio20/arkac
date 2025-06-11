<template>
    <footer class="relative bg-[url('/imgs/footer.webp')] bg-cover bg-no-repeat">
        <div class="absolute -top-[90px] left-0 right-0 h-[200px] bg-white clip-path-wave"></div>
        <div
            class="absolute left-1/2 transform -translate-x-1/2 flex items-center space-x-4 md:space-x-6 lg:space-x-10 justify-center">
            <a href="https://www.instagram.com/arkach.sdm" target="_blank">
                <img src="/svgs/instagram.svg" alt="Instagram" class="w-4 h-4 md:w-6 md:h-6 cursor-pointer">
            </a>
            <a href="https://www.tiktok.com/@arkach.sdam" target="_blank">
                <img src="/svgs/tiktok.svg" alt="Tiktok" class="w-4 h-4 md:w-6 md:h-6 cursor-pointer">
            </a>
        </div>
        <div class="container mx-auto pt-20 md:pt-40 pb-8 px-4">
            <div class="flex flex-col lg:flex-row lg:space-y-0 space-y-10 justify-between md:pt-6 pt-20 pb-10">
                <div class="flex-1 space-y-10">
                    <h2
                        class="font-inter font-medium text-xl md:text-2xl lg:text-3xl uppercase leading-normal md:leading-[42px] text-left">
                        Magtymguly şaýoly, Aşgabat, Тürkmenistan
                    </h2>

                    <div class="md:flex justify-start hidden">
                        <router-link to="/contact"
                            class="inline-flex items-center space-x-3 px-4 md:px-6 py-2 md:py-3 arkac-button-gradient text-white rounded-full hover:bg-blue-500 transition-colors duration-500">
                            <Mail class="w-4 h-4 md:w-5 md:h-5" />
                            <span class="font-avenir font-medium text-sm md:text-base mt-1">
                                {{ $t('nav.contact') }}
                            </span>
                        </router-link>
                    </div>
                </div>
                <div class="flex-1 flex flex-col md:flex-row justify-between">
                    <!-- Middle Column - First Link Group -->
                    <div class="w-full md:w-1/3 mb-8 md:mb-0">
                        <ul class="space-y-3 md:space-y-4">
                            <li v-for="item in _1categories" :key="item.id" class="flex items-center space-x-2">
                                <FooterStar class="w-3 h-3 md:w-4 md:h-4" />
                                <router-link :to="item.url"
                                    class="font-inter text-sm md:text-base lg:text-[17px] hover:text-blue-500 transition-colors duration-300">
                                    {{ $t(`nav.${item.lang_name}`) }}
                                </router-link>
                            </li>
                        </ul>
                    </div>
                    <!-- Right Column - Second Link Group -->
                    <div class="w-full md:w-1/3">
                        <ul class="space-y-3 md:space-y-4">
                            <li v-for="item in _2categories" :key="item.id" class="flex items-center space-x-2">
                                <FooterStar class="w-3 h-3 md:w-4 md:h-4" />
                                <router-link :to="item.url"
                                    class="font-inter text-sm md:text-base lg:text-[17px] hover:text-blue-500 transition-colors duration-300">
                                    {{ $t(`nav.${item.lang_name}`) }}
                                </router-link>
                            </li>
                            <div class="flex items-center space-x-2">
                                <FooterStar class="w-3 h-3 md:w-4 md:h-4" />
                                <router-link to="/schema/-1"
                                    class="font-inter text-sm md:text-base lg:text-[17px] hover:text-blue-500 transition-colors duration-300">
                                    {{ $t('common.schema') }}
                                </router-link>
                            </div>
                            <div class="flex items-center space-x-2">
                                <FooterStar class="w-3 h-3 md:w-4 md:h-4" />
                                <router-link to="/contact"
                                    class="font-inter text-sm md:text-base lg:text-[17px] hover:text-blue-500 transition-colors duration-300">
                                    {{ $t('common.location') }}
                                </router-link>
                            </div>
                        </ul>
                    </div>
                </div>
                <div class="w-full md:hidden block">
                    <router-link to="/contact"
                        class="w-full inline-flex items-center justify-center space-x-3 px-4 md:px-6 py-2 md:py-3 arkac-button-gradient text-white rounded-full hover:bg-blue-500 transition-colors duration-300">
                        <Mail class="w-4 h-4 md:w-5 md:h-5" />
                        <span class="font-avenir font-medium text-sm md:text-base mt-1">
                            {{ $t('nav.contact') }}
                        </span>
                    </router-link>
                </div>
            </div>

            <!-- Bottom section with copyright and back to top -->
            <div
                class="border-t border-white mt-8 md:mt-12 pt-4 md:pt-8 flex justify-between items-center space-y-4 md:space-y-0">
                <p class="arkac-text-gradient font-inter font-medium text-base md:text-lg uppercase">
                    © Arkaç, 2025
                </p>
                <button @click="scrollToTop"
                    class="bg-blue-400 text-white p-2 md:p-3 rounded-full hover:bg-blue-500 transition-colors duration-300 focus:outline-none">
                    <svg class="h-5 w-5 md:h-6 md:w-6" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 15.8335V4.16683" stroke="white" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path d="M15.8334 10L10.0001 4.16667L4.16675 10" stroke="white" stroke-width="1.5"
                            stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
            </div>
        </div>
    </footer>
</template>

<script>
import FooterStar from './icons/footer_star.vue';
import InstagramIcon from './icons/instagram.vue';
import TiktokIcon from './icons/tiktok.vue';
import Mail from './icons/mail.vue';
export default {
    name: 'Footer',
    components: {
        FooterStar,
        Mail,
        InstagramIcon,
        TiktokIcon,
    },
    data() {
        return {
            _1categories: [
                {
                    id: 1,
                    lang_name: 'shops',
                    url: '/shops'
                },
                {
                    id: 2,
                    lang_name: 'cafes',
                    url: '/cafes'
                },
                {
                    id: 4,
                    lang_name: 'cinema',
                    url: '/films'
                },
                {
                    id: 5,
                    lang_name: 'news',
                    url: '/news'
                },
            ],
            _2categories: [
                {
                    id: 6,
                    lang_name: 'about',
                    url: '/about'
                },
                {
                    id: 7,
                    lang_name: 'contact',
                    url: '/contact'
                },
            ]
        }
    },
    methods: {
        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    }
}
</script>

<style scoped>
.clip-path-wave {
    clip-path: ellipse(50% 50% at 50% 50%);
}
</style>