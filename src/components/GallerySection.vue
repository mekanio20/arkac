<template>
    <div class="container text-center md:pt-20 pb-20">
        <h4 class="w-fit mt-6 md:mt-10 py-2 px-8 md:px-16 bg-arkac-blue-800 -rotate-1 text-white font-inter font-medium text-3xl md:text-4xl lg:text-[52px] inline-block uppercase">
            Gallereýa</h4>
        <Swiper 
            :modules="modules" 
            :slidesPerView="1.2"
            :spaceBetween="30"
            :breakpoints="{
                640: {
                    slidesPerView: 1.2,
                    spaceBetween: 30
                },
                1024: {
                    slidesPerView: 1.2,
                    spaceBetween: 30
                }
            }"
        >
            <SwiperSlide v-for="(slide, index) in slides" :key="index">
                <div class="py-10 md:py-20 select-none">
                    <img :src="slide" class="w-full h-full object-cover rounded-lg">
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