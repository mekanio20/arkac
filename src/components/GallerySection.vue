<template>
    <div class="container text-center md:pt-20 pb-20">
        <h4 class="w-fit mt-6 md:mt-10 py-6 px-10 md:px-20 bg-arkac-blue-800 -rotate-1 text-white font-inter font-medium text-3xl md:text-4xl lg:text-[52px] inline-block uppercase">
            {{ $t('titles.gallery') }}
        </h4>
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
                <div class="py-10 md:py-20 select-none h-[750px]">
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
                '/imgs/galery-1.webp',
                '/imgs/galery-2.webp',
                '/imgs/galery-3.webp',
                '/imgs/galery-4.webp',
                '/imgs/galery-5.webp',
                '/imgs/galery-6.webp',
                '/imgs/galery-7.webp',
                '/imgs/galery-8.webp',
                '/imgs/galery-9.webp',
                '/imgs/galery-10.webp',
                '/imgs/galery-11.webp',
                '/imgs/galery-12.webp',
                '/imgs/galery-13.webp',
                '/imgs/galery-14.webp',
                '/imgs/galery-15.webp',
                '/imgs/galery-16.webp',
                '/imgs/galery-17.webp',
                '/imgs/galery-18.webp',
                '/imgs/galery-19.webp',
                '/imgs/galery-20.webp',
                '/imgs/galery-21.webp',
                '/imgs/galery-22.webp',
                '/imgs/galery-23.webp',
                '/imgs/galery-24.webp',
                '/imgs/galery-25.webp',
                '/imgs/galery-26.webp',
                '/imgs/galery-27.webp',
                '/imgs/galery-28.webp',
                '/imgs/galery-29.webp',
                '/imgs/galery-30.webp',
                '/imgs/galery-31.webp',
                '/imgs/galery-32.webp'
            ]
        }
    }
}
</script>