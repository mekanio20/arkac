<template>
    <footer class="relative bg-[url('/imgs/footer.png')] bg-cover bg-no-repeat">
        <div class="absolute -top-[90px] left-0 right-0 h-[200px] bg-white clip-path-wave"></div>
        <div class="absolute left-1/2 transform -translate-x-1/2 flex items-center space-x-10 justify-center">
            <img src="/svgs/instagram.svg" alt="Instagram">
            <img src="/svgs/tiktok.svg" alt="Tiktok">
            <img src="/svgs/x.svg" alt="X">
            <img src="/svgs/facebook.svg" alt="Facebook">
        </div>
        <div class="container mx-auto pt-40 pb-8 px-4">
            <div class="flex justify-between md:flex-row pb-10">
                <div class="flex-1">
                    <h2 class="font-inter font-medium text-3xl mb-6 uppercase leading-[42px]">
                        MAGTYMGULY ŞAÝOLY,<br>
                        AŞGABAT, TÜRKMENISTAN
                    </h2>

                    <router-link to="/contact"
                        class="inline-flex items-center space-x-3 px-6 py-3 arkac-button-gradient text-white rounded-full hover:bg-blue-500 transition-colors duration-300">
                        <Mail />
                        <span class="font-avenir font-medium text-base mt-1">
                            Habarlaşmak
                        </span>
                    </router-link>
                </div>
                <div class="flex-1 flex justify-between">
                    <!-- Middle Column - First Link Group -->
                    <div class="w-full md:w-1/3 mb-8 md:mb-0">
                        <ul class="space-y-4">
                            <li v-for="item in _1categories" :key="item.id" class="flex items-center space-x-2">
                                <FooterStar />
                                <router-link :to="item.url"
                                    class="font-inter text-[17px] hover:text-blue-500 transition-colors duration-300">
                                    {{ item.name }}
                                </router-link>
                            </li>
                        </ul>
                    </div>
                    <!-- Right Column - Second Link Group -->
                    <div class="w-full md:w-1/3">
                        <ul class="space-y-4">
                            <li v-for="item in _2categories" :key="item.id" class="flex items-center space-x-2">
                                <FooterStar />
                                <router-link :to="item.url"
                                    class="font-inter text-[17px] hover:text-blue-500 transition-colors duration-300">
                                    {{ item.name }}    
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- Bottom section with copyright and back to top -->
            <div class="border-t border-white mt-12 pt-8 flex justify-between items-center">
                <p class="arkac-text-gradient font-inter font-medium text-lg uppercase">© ARKAÇ, 2025</p>
                <button @click="scrollToTop"
                    class="bg-blue-400 text-white p-3 rounded-full hover:bg-blue-500 transition-colors duration-300 focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
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