<template>
    <footer class="relative bg-[url('/imgs/footer.png')] bg-cover bg-no-repeat">
        <div class="absolute -top-[90px] left-0 right-0 h-[200px] bg-white clip-path-wave"></div>
        <div class="absolute left-1/2 transform -translate-x-1/2 flex items-center space-x-4 md:space-x-6 lg:space-x-10 justify-center">
            <img src="/svgs/instagram.svg" alt="Instagram" class="w-4 h-4 md:w-6 md:h-6">
            <img src="/svgs/tiktok.svg" alt="Tiktok" class="w-4 h-4 md:w-6 md:h-6">
            <img src="/svgs/x.svg" alt="X" class="w-4 h-4 md:w-6 md:h-6">
            <img src="/svgs/facebook.svg" alt="Facebook" class="w-4 h-4 md:w-6 md:h-6">
        </div>
        <div class="container mx-auto pt-20 md:pt-40 pb-8 px-4">
            <div class="flex flex-col lg:flex-row lg:space-y-0 space-y-10 justify-between md:pt-0 pt-20 pb-10">
                <div class="flex-1 space-y-10">
                    <h2 class="font-inter font-medium text-xl md:text-2xl lg:text-3xl uppercase leading-normal md:leading-[42px] text-left">
                        MAGTYMGULY ŞAÝOLY,<br>
                        AŞGABAT, TÜRKMENISTAN
                    </h2>

                    <div class="md:flex justify-start hidden">
                        <router-link to="/contact"
                            class="inline-flex items-center space-x-3 px-4 md:px-6 py-2 md:py-3 arkac-button-gradient text-white rounded-full hover:bg-blue-500 transition-colors duration-300">
                            <Mail class="w-4 h-4 md:w-5 md:h-5" />
                            <span class="font-avenir font-medium text-sm md:text-base mt-1">
                                Habarlaşmak
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
                                    {{ item.name }}
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
                                    {{ item.name }}    
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="w-full md:hidden block">
                        <router-link to="/contact"
                            class="w-full inline-flex items-center justify-center space-x-3 px-4 md:px-6 py-2 md:py-3 arkac-button-gradient text-white rounded-full hover:bg-blue-500 transition-colors duration-300">
                            <Mail class="w-4 h-4 md:w-5 md:h-5" />
                            <span class="font-avenir font-medium text-sm md:text-base mt-1">
                                Habarlaşmak
                            </span>
                        </router-link>
                    </div>
            </div>

            <!-- Bottom section with copyright and back to top -->
            <div class="border-t border-white mt-8 md:mt-12 pt-4 md:pt-8 flex justify-between items-center space-y-4 md:space-y-0">
                <p class="arkac-text-gradient font-inter font-medium text-base md:text-lg uppercase">© ARKAÇ, 2025</p>
                <button @click="scrollToTop"
                    class="bg-blue-400 text-white p-2 md:p-3 rounded-full hover:bg-blue-500 transition-colors duration-300 focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
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
import FacebookIcon from './icons/facebook.vue';
import XIcon from './icons/x.vue';
import Mail from './icons/mail.vue';
import { routerKey } from 'vue-router';
export default {
    name: 'Footer',
    components: {
        FooterStar,
        Mail,
        InstagramIcon,
        TiktokIcon,
        FacebookIcon,
        XIcon,
    },
    data() {
        return {
            _1categories: [
                {
                    id: 1,
                    name: 'Dükanlar',
                    url: '/shops'
                },
                {
                    id: 2,
                    name: 'Kafe we restoranlar',
                    url: '/cafes'
                },
                {
                    id: 3,
                    name: 'Hyzmatlar',
                    url: ''
                },
                {
                    id: 4,
                    name: 'Kinoteatr',
                    url: '/films'
                },
                {
                    id: 5,
                    name: 'Täzelikler we Çäreler',
                    url: '/news'
                }
            ],
            _2categories: [
                {
                    id: 6,
                    name: 'Biz barada',
                    url: '/about'
                },
                {
                    id: 7,
                    name: 'Habarlaşmak',
                    url: '/contact'
                },
                {
                    id: 8,
                    name: 'Shema',
                    url: ''
                },
                {
                    id: 9,
                    name: 'Nirede ýerleşýär?',
                    url: ''
                }
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