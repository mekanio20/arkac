<template>
    <div class="w-full h-full">
        <!-- Header -->
        <Header />
        <!-- Navbar -->
        <Navbar activePage="cinema" />
        <!-- Main -->
        <div class="container px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
            <!-- Title -->
            <h2
                class="flex items-center justify-center font-inter font-medium text-3xl sm:text-4xl lg:text-5xl uppercase">
                {{ $t('nav.cinema') }}🍿
            </h2>
            <!-- Main -->
            <div class="py-4 sm:py-6 px-10 md:px-20 rounded-xl mb-6 sm:mb-8 md:mb-10 my-8 sm:my-10 md:my-14 relative overflow-hidden"
                style="background-image: url('/svgs/bg.svg'); background-size: cover; background-position: center;">
                <Swiper :modules="modules" :slides-per-view="1" :space-between="20" :breakpoints="{
                    300: {
                        slidesPerView: 1,
                        spaceBetween: 20
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 20
                    },
                    1024: {
                        slidesPerView: 6,
                        spaceBetween: 20
                    }
                }" :navigation="{ nextEl: '.custom-next', prevEl: '.custom-prev' }">
                    <SwiperSlide v-for="item in days" :key="item.id" @click="changeActiveId(item.id)"
                        :class="[item.id === activeId ? 'bg-white text-black' : 'bg-transparent']"
                        class="border border-white rounded-xl px-10 py-6 sm:px-6 flex text-start flex-col space-y-1 sm:space-y-2 bg-transparent cursor-pointer hover:bg-white hover:text-black transition-all duration-300">
                        <p class="font-inter font-medium text-base sm:text-lg">{{ formatDate(item.date) }}</p>
                        <p class="font-inter font-bold text-base sm:text-lg">{{ getRelativeDay(item.date) }}</p>
                    </SwiperSlide>
                </Swiper>
                <div class="custom-prev">
                    <Prev class="w-4 h-4 sm:w-6 sm:h-6" />
                </div>
                <div class="custom-next">
                    <Next class="w-4 h-4 sm:w-6 sm:h-6" />
                </div>
            </div>
            <!-- Movies -->
            <div
                class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 pt-8 sm:pt-10 pb-20">
                <CinemaCard v-for="item in movies" :key="item.movie_fk.id" :img="item.movie_fk.image"
                    :title="item.movie_fk.title" :category="item.movie_fk.subtitle" :time="item.time" />
            </div>
            <!-- Pagination -->
            <div v-if="filmsCount > 0" class="flex justify-center items-center gap-4 pb-20">
                <button @click="handlePageChange(currentPage - 1)" :disabled="currentPage === 1"
                    class="px-4 py-2 rounded-lg border border-arkac-blue-200 disabled:opacity-50 disabled:cursor-not-allowed">
                    <svg class="w-6 h-6 text-arkac-blue-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                        width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M5 12h14M5 12l4-4m-4 4 4 4" />
                    </svg>
                </button>
                <span class="text-arkac-gray-300">{{ currentPage }} / {{ totalPages }}</span>
                <button @click="handlePageChange(currentPage + 1)" :disabled="currentPage === totalPages"
                    class="px-4 py-2 rounded-lg border border-arkac-blue-200 disabled:opacity-50 disabled:cursor-not-allowed">
                    <svg class="w-6 h-6 text-arkac-blue-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                        width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M19 12H5m14 0-4 4m4-4-4-4" />
                    </svg>
                </button>
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
import TitleSection from '@/components/TitleSection.vue';
import Footer from '@/components/Footer.vue';
import CinemaCard from '@/components/CinemaCard.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Prev from '@/components/icons/prev.vue';
import Next from '@/components/icons/next.vue';
export default {
    name: 'Films',
    components: { Header, Navbar, TitleSection, Footer, CinemaCard, Swiper, SwiperSlide, Prev, Next },
    data() {
        return {
            days: [],
            films: [],
            movies: [],
            activeId: null,
            modules: [Navigation, Pagination],
            filmsCount: 0,
            currentPage: 1,
        }
    },
    created() {
        this.getFilms()
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
        getRelativeDay(dateString) {
            const turkmenDays = [
                'Ýekşenbe', 'Duşenbe', 'Sişenbe', 'Çarşenbe', 'Penşenbe', 'Anna', 'Şenbe'
            ];

            const russianDays = [
                'Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'
            ];

            const englishDays = [
                'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
            ];

            const getDaysArray = () => {
                const currentLang = this.$i18n.locale;
                switch (currentLang) {
                    case 'RU':
                        return russianDays;
                    case 'EN':
                        return englishDays;
                    default:
                        return turkmenDays;
                }
            };

            const days = getDaysArray();

            const inputDate = new Date(dateString);
            const currentDate = new Date();

            const normalizeDate = (d) => new Date(d.getFullYear(), d.getMonth(), d.getDate());

            const normalizedInput = normalizeDate(inputDate);
            const normalizedToday = normalizeDate(currentDate);

            const oneDayInMs = 24 * 60 * 60 * 1000;
            const diffInMs = normalizedInput - normalizedToday;

            const currentLang = this.$i18n.locale;
            let yesterday, todayText, tomorrow;

            switch (currentLang) {
                case 'RU':
                    yesterday = 'Вчера';
                    todayText = 'Сегодня';
                    tomorrow = 'Завтра';
                    break;
                case 'EN':
                    yesterday = 'Yesterday';
                    todayText = 'Today';
                    tomorrow = 'Tomorrow';
                    break;
                default:
                    yesterday = 'Düýn';
                    todayText = 'Şu gün';
                    tomorrow = 'Ertir';
            }

            if (diffInMs === -oneDayInMs) {
                return yesterday;
            } else if (diffInMs === 0) {
                return todayText;
            } else if (diffInMs === oneDayInMs) {
                return tomorrow;
            } else {
                return days[inputDate.getDay()];
            }
        },
        changeActiveId(id) {
            this.activeId = id
            this.movies = this.films.find(item => item.id === this.activeId).movie_sessions
        },
        async getFilms() {
            try {
                const response = await api.get(`/cinema/cinema-sessions/?page=${this.currentPage}`)
                this.filmsCount = await response.data.count
                this.films = await response.data.results
                this.days = await response.data.results
                this.activeId = this.films[0].id
                this.changeActiveId(this.activeId)
            } catch (error) {
                console.error('Error fetching films:', error);
            }
        },
        async handlePageChange(page) {
            if (page < 1 || page > this.totalPages) return
            this.currentPage = page
            await this.getFilms()
        },
    },
    computed: {
        totalPages() {
            return Math.ceil(this.filmsCount / 8)
        }
    },
    watch: {
        '$i18n.locale'() {
            this.getFilms()
        }
    }
}
</script>

<style scoped>
.custom-prev,
.custom-next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    color: white;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 10;
    border-radius: 50%;
    user-select: none;
}

@media (min-width: 640px) {

    .custom-prev,
    .custom-next {
        width: 40px;
        height: 40px;
    }
}

.custom-prev {
    left: 5px;
}

.custom-next {
    right: 5px;
}

@media (min-width: 640px) {
    .custom-prev {
        left: 10px;
    }

    .custom-next {
        right: 10px;
    }
}
</style>