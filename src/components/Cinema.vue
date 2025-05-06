<template>
    <div class="container">
        <!-- Center -->
        <h2 class="flex items-center justify-center font-inter font-medium text-[30px] sm:text-[40px] md:text-[46px] tracking-[1px] sm:tracking-[2px] uppercase pt-6 sm:pt-8 md:pt-10">
            {{ $t('titles.cinema') }}
            <span class="ml-2">🍿</span>
        </h2>
        <div class="py-4 sm:py-6 px-10 md:px-20 rounded-xl mb-6 sm:mb-8 md:mb-10 my-8 sm:my-10 md:my-14 relative overflow-hidden" style="background-image: url('/svgs/bg.svg'); background-size: cover; background-position: center;">
            <Swiper 
                :modules="modules" 
                :slides-per-view="1"
                :space-between="20"
                :breakpoints="{
                    300: {
                        slidesPerView: 1,
                        spaceBetween: 20
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 20
                    }
                }"
                :navigation="{ nextEl: '.custom-next', prevEl: '.custom-prev' }">
                <SwiperSlide v-for="item in days" :key="item.id"
                    class="border border-white rounded-xl p-3 sm:p-4 flex text-center flex-col space-y-1 sm:space-y-2 bg-transparent cursor-pointer hover:bg-white hover:text-black transition-all duration-300">
                    <p class="font-inter font-medium text-base sm:text-lg">{{ item.date }}</p>
                    <p class="font-inter font-bold text-base sm:text-lg">{{ item.day }}</p>
                </SwiperSlide>
            </Swiper>
            <div class="custom-prev">
                <Prev class="w-4 h-4 sm:w-6 sm:h-6" />
            </div>
            <div class="custom-next">
                <Next class="w-4 h-4 sm:w-6 sm:h-6" />
            </div>
        </div>
        <div class="w-full py-4 sm:py-6 rounded-xl my-6 sm:my-8 md:my-10 relative overflow-hidden">
            <Swiper 
                :modules="modules" 
                :space-between="20"
                :breakpoints="{
                    400: {
                        slidesPerView: 2,
                    },
                    600: {
                        slidesPerView: 3,
                    },
                    768: {
                        slidesPerView: 4,
                    },
                    1024: {
                        slidesPerView: 5,
                    }
                }"
                :loop="true">
                <SwiperSlide v-for="item in movies" :key="item.id">
                    <CinemaCard :img="item.img" :title="item.title" :category="item.category" />
                </SwiperSlide>
            </Swiper>
            <div class="flex items-center justify-center pt-10 sm:pt-16 md:pt-20">
                <Button text="Ählisini görmek" />
            </div>
        </div>
    </div>
</template>

<script>
import CinemaCard from './CinemaCard.vue';
import Button from './base/button.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Prev from './icons/prev.vue';
import Next from './icons/next.vue';

export default {
    components: {
        CinemaCard,
        Button,
        Swiper,
        SwiperSlide,
        Prev,
        Next,
    },
    data() {
        return {
            modules: [Navigation, Pagination],
            days: [
                { id: 1, date: '21 mart', day: 'Şu gün' },
                { id: 2, date: '22 mart', day: 'Ertir' },
                { id: 3, date: '23 mart', day: 'Sişenbe' },
                { id: 4, date: '24 mart', day: 'Ertir' },
                { id: 5, date: '25 mart', day: 'Sişenbe' },
                { id: 6, date: '21 mart', day: 'Şu gün' },
                { id: 7, date: '22 mart', day: 'Ertir' },
                { id: 8, date: '23 mart', day: 'Sişenbe' },
                { id: 9, date: '24 mart', day: 'Ertir' },
                { id: 10, date: '25 mart', day: 'Sişenbe' },
            ],
            movies: [
                {
                    id: 1,
                    img: '/imgs/sinema1.png',
                    title: 'Пальма-2',
                    category: 'Фильмы, Драма, Семейный, 6+'
                },
                {
                    id: 2,
                    img: '/imgs/sinema2.png',
                    title: 'Пальма-2',
                    category: 'Фильмы, Драма, Семейный, 6+'
                },
                {
                    id: 3,
                    img: '/imgs/sinema1.png',
                    title: 'Пальма-2',
                    category: 'Фильмы, Драма, Семейный, 6+'
                },
                {
                    id: 4,
                    img: '/imgs/sinema2.png',
                    title: 'Пальма-2',
                    category: 'Фильмы, Драма, Семейный, 6+'
                },
                {
                    id: 5,
                    img: '/imgs/sinema1.png',
                    title: 'Пальма-2',
                    category: 'Фильмы, Драма, Семейный, 6+'
                },
                {
                    id: 6,
                    img: '/imgs/sinema2.png',
                    title: 'Пальма-2',
                    category: 'Фильмы, Драма, Семейный, 6+'
                },
                {
                    id: 7,
                    img: '/imgs/sinema1.png',
                    title: 'Пальма-2',
                    category: 'Фильмы, Драма, Семейный, 6+'
                },
                {
                    id: 8,
                    img: '/imgs/sinema2.png',
                    title: 'Пальма-2',
                    category: 'Фильмы, Драма, Семейный, 6+'
                },
                {
                    id: 9,
                    img: '/imgs/sinema1.png',
                    title: 'Пальма-2',
                    category: 'Фильмы, Драма, Семейный, 6+'
                },
                {
                    id: 10,
                    img: '/imgs/sinema2.png',
                    title: 'Пальма-2',
                    category: 'Фильмы, Драма, Семейный, 6+'
                },
            ]
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