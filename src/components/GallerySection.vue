<template>
    <div class="container text-center md:pt-20">
        <h4 class="w-fit md:mt-10 py-5 px-8 md:px-16 bg-arkac-blue-800 -rotate-1 text-white font-inter font-medium text-xl md:text-2xl lg:text-[36px] inline-block uppercase rounded-lg">
            {{ $t('titles.gallery') }}
        </h4>
        <Swiper 
            :modules="modules" 
            :spaceBetween="30"
            :duration="1000"
            :autoplay="{
                delay: 2500,
                disableOnInteraction: false
            }"
            :breakpoints="{
                200: {
                    slidesPerView: 1,
                    spaceBetween: 30
                },
                640: {
                    slidesPerView: 2,
                    spaceBetween: 30
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 30
                }
            }"
        >
            <SwiperSlide v-for="(slide, index) in slides" :key="index">
                <div class="py-10 md:py-20 select-none h-[600px]">
                    <img :src="slide" class="w-full h-full object-cover rounded-lg" @click="openLightbox(index)" style="cursor:pointer;">
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
import { useRouter } from 'vue-router';

export default {
    components: {
        Swiper,
        SwiperSlide
    },
    setup() {
        const router = useRouter();
        const modules = [Navigation, Pagination, Autoplay, EffectCoverflow];
        const slides = [
            '/imgs/-1/galery1.webp',
            '/imgs/-1/galery2.webp',
            '/imgs/-1/galery3.webp',
            '/imgs/-1/galery4.webp',
            '/imgs/-1/galery5.webp',
            '/imgs/-1/galery6.webp',
            '/imgs/0/galery1.webp',
            '/imgs/0/galery2.webp',
            '/imgs/0/galery3.webp',
            '/imgs/1/galery1.webp',
            '/imgs/1/galery2.webp',
            '/imgs/1/galery3.webp',
            '/imgs/1/galery4.webp',
            '/imgs/1/galery5.webp',
            '/imgs/1/galery6.webp',
            '/imgs/1/galery7.webp',
            '/imgs/2/galery1.webp',
            '/imgs/2/galery2.webp',
            '/imgs/2/galery3.webp',
            '/imgs/2/galery4.webp',
            '/imgs/2/galery5.webp',
            '/imgs/3/galery1.webp',
            '/imgs/3/galery2.webp',
            '/imgs/3/galery3.webp',
            '/imgs/3/galery4.webp',
            '/imgs/3/galery5.webp',
            '/imgs/3/galery6.webp',
            '/imgs/3/galery7.webp',
            '/imgs/3/galery8.webp',
            '/imgs/3/galery9.webp',
            '/imgs/3/galery10.webp',
            '/imgs/3/galery11.webp'
        ];
        function openLightbox(index) {
            router.push({ name: 'GalleryViewer', params: { index } });
        }
        return { modules, slides, openLightbox };
    }
}
</script>