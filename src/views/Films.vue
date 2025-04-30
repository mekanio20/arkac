<template>
    <div class="w-full h-full">
        <!-- Header -->
        <Header />
        <!-- Navbar -->
        <Navbar />
        <!-- Main -->
        <div class="container py-10">
            <!-- Title -->
            <h2 class="flex items-center justify-center font-inter font-medium text-5xl uppercase pt-10">
                KINOTEATR
                🍿</h2>
            <!-- Main -->
            <div class="w-full py-6 px-20 rounded-xl mb-10 my-14 relative overflow-hidden"
                style="background-image: url('/svgs/bg.svg'); background-size: cover; background-position: center;">
                <Swiper :modules="modules" :slides-per-view="6" :space-between="10" :loop="true"
                    :navigation="{ nextEl: '.custom-next', prevEl: '.custom-prev' }">
                    <SwiperSlide v-for="item in days" :key="item.id"
                        class="border border-white rounded-xl p-4 flex text-center flex-col space-y-2 bg-transparent cursor-pointer hover:bg-white hover:text-black transition-all duration-300">
                        <p class="font-inter font-medium text-lg">{{ item.date }}</p>
                        <p class="font-inter font-bold text-lg">{{ item.day }}</p>
                    </SwiperSlide>
                </Swiper>
                <div class="custom-prev">
                    <Prev />
                </div>
                <div class="custom-next">
                    <Next />
                </div>
            </div>
            <!-- Movies -->
            <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 pt-14">
                <CinemaCard v-for="item in movies" :key="item.id" :img="item.img" :title="item.title"
                    :category="item.category" />
            </div>
            <div class="flex items-center justify-center pt-20 pb-20">
                <Button />
            </div>
        </div>
        <!-- Footer -->
        <Footer />
    </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Navbar from '@/components/Navbar.vue';
import TitleSection from '@/components/TitleSection.vue';
import Footer from '@/components/Footer.vue';
import CinemaCard from '@/components/CinemaCard.vue';
import Button from '@/components/base/button.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Prev from '@/components/icons/prev.vue';
import Next from '@/components/icons/next.vue';
export default {
    name: 'Films',
    components: { Header, Navbar, TitleSection, Footer, CinemaCard, Button, Swiper, SwiperSlide, Prev, Next },
    data() {
        return {
            modules: [Navigation, Pagination],
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
            ],
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
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 10;
    border-radius: 50%;
    user-select: none;
}

.custom-prev {
    left: 10px;
}

.custom-next {
    right: 10px;
}
</style>