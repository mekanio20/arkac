<template>
    <div class="pl-10 text-center">
        <h4 class="w-fit mt-10 py-2 px-16 bg-arkac-blue-800 -rotate-1 text-white font-inter font-medium text-[52px] inline-block uppercase">
            Gallereýa</h4>
        <Swiper 
            class="py-20" 
            :modules="modules" 
            :slidesPerView="1.5"
            :spaceBetween="30"
        >
            <SwiperSlide v-for="(slide, index) in slides" :key="index">
                <div class="relative py-20 w-[862px]">
                    <img :src="slide" class="w-full object-cover">
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
</template>

<script>
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
export default {
    components: {
        Swiper,
        SwiperSlide
    },
    data() {
        return {
            modules: [Navigation, Pagination, Autoplay, EffectCoverflow],
            slides: [
                '/imgs/about-1.png',
                '/imgs/news-1.webp',
                '/imgs/news-2.webp',
            ]
        }
    }
}
</script>