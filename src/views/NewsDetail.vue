<template>
    <div class="w-full h-full">
        <!-- Header -->
        <Header />
        <!-- Navbar -->
        <Navbar />
        <!-- Main -->
        <div class="pb-40 pt-14">
            <div class="container">
                <RouterSection route="/news" :prevRoute="$t('nav.news')" :nextRoute="item.title" />
                <div
                    class="py-10 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 justify-center">
                    <div
                        class="border border-arkac-gray-200 rounded-full px-6 sm:px-10 py-2 sm:py-3 font-inter text-xs sm:text-sm uppercase">
                        {{ item.type === 'event' ? $t('titles.event') : $t('common.news') }}
                    </div>
                    <div
                        class="border border-arkac-gray-200 rounded-full px-6 sm:px-10 py-2 sm:py-3 font-inter text-xs sm:text-sm uppercase">
                        {{ formatDate(item.date) }}
                    </div>
                </div>
                <h1
                    class="font-inter font-medium text-2xl sm:text-4xl md:text-[52px] text-center uppercase px-4 sm:!leading-[70px]">
                    {{ item.title }}</h1>
                <div class="w-full my-8 sm:my-14 h-[300px] sm:h-[460px]">
                    <img class="w-full h-full object-contain rounded-lg" :src="item.thumbnail">
                </div>
                <div class="pt-4 px-4 sm:px-0">
                    <p class="font-inter font-medium text-base sm:text-lg pb-6 sm:pb-10">
                        {{ item.content }}
                    </p>
                </div>
                <div class="pt-10 sm:pt-20 px-4 sm:px-0">
                    <h2 class="font-inter font-medium text-2xl sm:text-4xl uppercase">{{ $t('nav.news') }}</h2>
                    <div class="w-full py-4 sm:py-6 rounded-xl mt-6 sm:mt-10 relative overflow-hidden">
                        <Swiper :modules="modules" :slides-per-view="1" :space-between="20" :breakpoints="{
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
                        }">
                            <SwiperSlide v-for="item in news" :key="item.id">
                                <NewsCard :id="item.id" :title="item.title" :date="item.date" :image="item.thumbnail"
                                    :category="item.type" />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
        <!-- Footer -->
        <Footer />
    </div>
</template>

<script>
import api from '@/api/index'
import Header from '@/components/Header.vue';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import RouterSection from '@/components/RouterSection.vue';
import NewsCard from '@/components/NewsCard.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
export default {
    name: 'NewsDetail',
    components: {
        Swiper,
        SwiperSlide,
        Header,
        Navbar,
        Footer,
        RouterSection,
        NewsCard
    },
    data() {
        return {
            item: {},
            news: [],
            modules: [Navigation, Pagination, Autoplay],
        }
    },
    created() {
        this.fetchPlaceDetails()
        this.getNews()
    },
    methods: {
        formatDate(dateString) {
            const turkmenMonths = [
                'ýanwar', 'fewral', 'mart', 'aprel', 'maý', 'iýun',
                'iýul', 'awgust', 'sentýabr', 'oktýabr', 'noýabr', 'dekabr'
            ];

            const russianMonths = [
                'январь', 'февраль', 'март', 'апрель', 'май', 'июнь',
                'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'
            ];

            const englishMonths = [
                'january', 'february', 'march', 'april', 'may', 'june',
                'july', 'jugust', 'september', 'october', 'november', 'december'
            ];

            const getMonthsArray = () => {
                const currentLang = this.$i18n.locale;
                switch (currentLang) {
                    case 'RU':
                        return russianMonths;
                    case 'EN':
                        return englishMonths;
                    default:
                        return turkmenMonths;
                }
            };

            const months = getMonthsArray();

            const date = new Date(dateString);
            const day = date.getDate();
            const month = months[date.getMonth()];

            return `${day} ${month}`;
        },
        async fetchPlaceDetails() {
            try {
                const response = await api.get(`/posts/${this.$route.params.id}`);
                this.item = response.data;
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching place details:', error);
            }
        },
        async getNews() {
            const response = await api.get('/posts/')
            this.news = await response.data.results
        }
    },
    watch: {
        '$i18n.locale'() {
            this.fetchPlaceDetails()
            this.getNews()
        }
    }
}
</script>