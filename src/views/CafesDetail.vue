<template>
    <div class="w-full h-full">
        <!-- Header -->
        <Header />
        <!-- Navbar -->
        <Navbar />
        <!-- Main -->
        <div v-if="place" class="flex flex-col-reverse lg:flex-row justify-between pt-8 sm:pt-14 sm:pb-10">
            <div class="flex-1 flex flex-col space-y-4 px-4 sm:px-8 lg:pl-16 lg:pr-8 xl:pr-32">
                <!-- Shop Detail -->
                <div class="flex flex-col space-y-6 sm:space-y-10 border-b border-arkac-gray-500 pb-6 sm:pb-10">
                    <RouterSection route="/cafes" :prevRoute="$t('nav.cafes')" :nextRoute="place.name" />
                    <p
                        class="w-fit px-4 sm:px-5 py-2 bg-arkac-blue-300 text-arkac-blue-200 font-inter font-medium text-sm rounded-lg">
                        {{ place.floor }}-nji gat
                    </p>
                    <h1 class="font-inter font-medium text-3xl sm:text-4xl lg:text-[60px] uppercase leading-tight sm:leading-[64px]">
                        {{ place.name }}
                    </h1>
                    <div class="flex flex-wrap items-center gap-4 sm:gap-6">
                        <router-link to="#"
                            class="bg-arkac-blue-200 rounded-full px-6 sm:px-10 py-2 sm:py-3 font-inter font-medium text-sm text-white">
                            360<sup>0</sup>görmek
                        </router-link>
                    </div>
                </div>
                <!-- Contact -->
                <div class="flex flex-col space-y-6 sm:space-y-10 border-b border-arkac-gray-500 pb-6 sm:pb-10">
                    <div class="flex flex-col sm:flex-row sm:space-x-10 pt-4 sm:pt-6">
                        <div class="flex flex-col justify-between">
                            <h3 class="font-inter font-medium text-base sm:text-lg text-arkac-gray-1100">Telefon belgisi:</h3>
                            <h3 class="font-inter font-medium text-base sm:text-lg text-arkac-gray-1100">Iş wagty:</h3>
                            <h3 class="font-inter font-medium text-base sm:text-lg text-arkac-gray-1100">Sosial media:</h3>
                        </div>
                        <div class="flex flex-col space-y-4 sm:space-y-6 mt-4 sm:mt-0">
                            <div class="flex items-center space-x-2">
                                <p v-for="item in place.phone_numbers" :key="item.id" class="font-inter font-medium text-base sm:text-lg">{{ item.phone_number }}</p>
                            </div>
                            <div class="flex flex-col">
                                <p v-for="item in place.working_hours" :key="item.id" class="font-inter font-medium text-base sm:text-lg">
                                    {{ item.day_of_week }}: {{ item.open_time }} - {{ item.close_time }}
                                </p>
                            </div>
                            <div class="flex items-center space-x-3 sm:space-x-4">
                                <a v-if="place.social_instagram" :href="place.social_instagram" target="_blank" class="rounded-full p-2 bg-arkac-blue-900">
                                    <Instagram width="14px" height="14px" :fill="'white'" />
                                </a>
                                <a v-if="place.social_tiktok" :href="place.social_tiktok" target="_blank" class="rounded-full p-2 bg-arkac-blue-900">
                                    <Tiktok width="14px" height="14px" :fill="'white'" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Categories -->
                <div class="flex flex-wrap items-center gap-4 sm:gap-10 py-6 sm:py-8">
                    <div
                        class="rounded-full px-6 sm:px-10 py-2 sm:py-3 bg-arkac-gray-1200 text-arkac-gray-100 font-inter font-normal text-sm">
                        {{ place.category.name }}
                    </div>
                </div>
            </div>
            <div class="max-w-2xl lg:w-full container mb-6 lg:mb-0">
                <Swiper
                    :modules="modules"
                    :slides-per-view="1"
                    :space-between="0"
                    :loop="true"
                    :autoplay="{
                        delay: 3000,
                        disableOnInteraction: false,
                    }"
                    class="w-full h-full rounded-lg">
                    <SwiperSlide v-for="(item, index) in place.images" :key="index">
                        <img :src="item.image" class="w-full h-full object-contain rounded-lg">
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
        <div v-if="place" class="w-full container px-4 sm:px-6 lg:px-8 pb-20 sm:pb-40">
            <p class="font-inter text-base sm:text-lg pb-16 sm:pb-32">
                {{ place.description }}
            </p>
            <div class="">
                <h2 class="font-inter font-medium text-2xl sm:text-3xl lg:text-4xl uppercase">{{ $t('titles.cafes') }}</h2>
                <div class="w-full py-4 sm:py-6 rounded-xl mt-6 sm:mt-10 relative overflow-hidden">
                    <Swiper 
                        :modules="modules" 
                        :slides-per-view="1"
                        :space-between="20"
                        :breakpoints="{
                            '640': {
                                slidesPerView: 2,
                                spaceBetween: 20
                            },
                            '768': {
                                slidesPerView: 3,
                                spaceBetween: 30
                            },
                            '1024': {
                                slidesPerView: 4,
                                spaceBetween: 40
                            }
                        }"
                        :loop="true">
                        <SwiperSlide v-for="item in places" :key="item.id">
                            <ShopCard :img="item.img" :title="item.title" :id="item.id" :floor="item.floor"
                                :image="item.logo" :name="item.name" :category="item.category.name" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
        <!-- Footer -->
        <Footer />
    </div>
</template>

<script>
import api from '@/api/index';
import X from '@/components/icons/x.vue';
import Footer from '@/components/Footer.vue';
import Instagram from '@/components/icons/instagram.vue';
import Facebook from '@/components/icons/facebook.vue';
import Tiktok from '@/components/icons/tiktok.vue';
import Header from '@/components/Header.vue';
import Navbar from '@/components/Navbar.vue';
import ShopCard from '@/components/ShopCard.vue';
import RouterSection from '@/components/RouterSection.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default {
    name: 'CafesDetail',
    components: {
        Swiper,
        SwiperSlide,
        Header,
        Navbar,
        Footer,
        Instagram,
        Tiktok,
        X,
        Facebook,
        ShopCard,
        RouterSection
    },
    data() {
        return {
            places: [],
            place: null,
            modules: [Autoplay],
        }
    },
    methods: {
        async getCafes() {
            try {
                const response = await api.get('/places/?type_fk=3');
                this.places = response.data.results;
            } catch (error) {
                console.error('Error fetching place details:', error);
            }
        },
        async fetchPlaceDetails() {
            try {
                const response = await api.get(`/places/${this.$route.params.id}/?type_fk=3`);
                this.place = response.data;
            } catch (error) {
                console.error('Error fetching place details:', error);
            }
        },
    },
    created() {
        this.fetchPlaceDetails();
        this.getCafes()
    }
}
</script>