<template>
    <div class="w-full h-full">
        <!-- Header -->
        <Header />
        <!-- Navbar -->
        <Navbar />
        <!-- Main -->
        <div class="pb-40 pt-14">
            <div class="container">
                <RouterSection route="/news" prevRoute="Dükanlar" nextRoute="LUSIO представляет Slow Life" />
                <div class="py-10 flex items-center space-x-6 justify-center">
                    <div class="border border-arkac-gray-200 rounded-full px-10 py-3 font-inter text-sm uppercase">
                        {{ $t('common.news') }}
                    </div>
                    <div class="border border-arkac-gray-200 rounded-full px-10 py-3 font-inter text-sm uppercase">
                        15 Aprel, 2025
                    </div>
                </div>
                <h1 class="font-inter font-medium text-[52px] text-center uppercase">Межсезонная распродажа в ELIS</h1>
                <div class="w-full my-14 h-[460px]">
                    <img class="w-full h-full object-cover rounded-lg" src="/imgs/news-1.png">
                </div>
                <div class="pt-4">
                    <h3 class="font-inter font-semibold text-2xl">Новая линия украшений UNOde50 Ser Camaleónica
                        призывает нас к переменам.</h3>
                    <p class="font-inter font-medium text-lg py-10">
                        Быть «хамелеоном» – значит быть разным и готовым открывать новые грани своей личности.
                        Настроение волшебства и чудесных превращений в новых украшениях UNOde50 создают удивительные
                        кристаллы-хамелеоны. Позолоченные или посеребренные кольца, серьги, браслеты и ожерелья с
                        кристаллами-хамелеонами – это яркий и стильный акцент, который гармонично впишется как в
                        повседневный образ, так и в вечерний наряд. Наденьте его – и пусть каждый момент станет
                        волшебным.
                    </p>
                </div>
                <div class="pt-20">
                    <h2 class="font-inter font-medium text-4xl uppercase">{{ $t('titles.shops') }}</h2>
                    <div class="w-full py-6 rounded-xl mt-10 relative overflow-hidden">
                        <Swiper :modules="modules" :slides-per-view="4" :space-between="40" :loop="true">
                            <SwiperSlide v-for="item in news" :key="item.id">
                                <NewsCard :id="item.id" :title="item.title" :date="item.date" :image="item.image"
                                    :category="item.category" />
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
import Header from '@/components/Header.vue';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import RouterSection from '@/components/RouterSection.vue';
import NewsCard from '@/components/NewsCard.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
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
            news: [
                {
                    title: 'Все для твоего яркого макияжа по акции 1+1=3!',
                    category: 'Çäreler',
                    date: '23.03.2025',
                    image: '/imgs/news-1.webp'
                },
                {
                    title: 'В SUNLIGHT -50% на всё!',
                    category: 'Täzelikler',
                    date: '23.03.2025',
                    image: '/imgs/news-2.webp'
                },
                {
                    title: 'Все для твоего яркого макияжа по акции 1+1=3!',
                    category: 'Çäreler',
                    date: '23.03.2025',
                    image: '/imgs/news-3.webp'
                },
                {
                    title: 'В SUNLIGHT -50% на всё!',
                    category: 'Täzelikler',
                    date: '23.03.2025',
                    image: '/imgs/news-4.webp'
                }
            ]
        }
    }
}
</script>