<template>
    <div class="container pt-10 sm:pt-16 md:pt-20 pb-20">
        <Swiper :modules="modules" :slides-per-view="1.5" :space-between="20" :breakpoints="{
            400: {
                slidesPerView: 2,
            },
            640: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 4,
            },
            1024: {
                slidesPerView: 4.5,
            }
        }" class="mb-10 sm:mb-16 md:mb-20 select-none">
            <SwiperSlide v-for="item in categories" :key="item.id" :class="[
                'font-inter font-medium text-xl sm:text-2xl md:text-4xl text-nowrap !w-fit cursor-pointer',
                activeId === item.id ? 'text-black' : 'text-arkac-gray-300'
            ]" @click="activeId = item.id">
                {{ item.name }}
            </SwiperSlide>
        </Swiper>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
            <ShopCard v-for="item in shops" :key="item.id" :id="item.id" :floor="item.floor" :image="item.image"
                :name="item.name" :category="item.category" />
        </div>
        <div class="flex items-center justify-center py-10 sm:py-16 md:py-20">
            <Button text="Ählisini görmek" />
        </div>
    </div>
</template>

<script>
import ShopCard from './ShopCard.vue';
import Button from './base/button.vue'
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default {
    components: {
        Swiper,
        SwiperSlide,
        ShopCard,
        Button
    },
    data() {
        return {
            modules: [Navigation, Pagination],
            activeId: 1,
            categories: [
                {
                    id: 1,
                    name: 'Ählisi',
                },
                {
                    id: 2,
                    name: 'Doňdurma & Süýjülik',
                },
                {
                    id: 3,
                    name: 'Restoran',
                },
                {
                    id: 4,
                    name: 'Kafe',
                }
            ],
            shops: [
                {
                    id: 1,
                    name: 'French Bakery SeDelice',
                    category: 'Restoran & Doňdurma',
                    floor: '1-nji gat',
                    image: '/imgs/shop1.png'
                },
                {
                    id: 2,
                    name: 'French Bakery SeDelice',
                    category: 'Restoran & Doňdurma',
                    floor: '1-nji gat',
                    image: '/imgs/shop1.png'
                },
                {
                    id: 3,
                    name: 'French Bakery SeDelice',
                    category: 'Restoran & Doňdurma',
                    floor: '1-nji gat',
                    image: '/imgs/shop1.png'
                },
                {
                    id: 4,
                    name: 'French Bakery SeDelice',
                    category: 'Restoran & Doňdurma',
                    floor: '1-nji gat',
                    image: '/imgs/shop1.png'
                },
                {
                    id: 5,
                    name: 'French Bakery SeDelice',
                    category: 'Restoran & Doňdurma',
                    floor: '1-nji gat',
                    image: '/imgs/shop1.png'
                },
                {
                    id: 6,
                    name: 'French Bakery SeDelice',
                    category: 'Restoran & Doňdurma',
                    floor: '1-nji gat',
                    image: '/imgs/shop1.png'
                },
                {
                    id: 7,
                    name: 'French Bakery SeDelice',
                    category: 'Restoran & Doňdurma',
                    floor: '1-nji gat',
                    image: '/imgs/shop1.png'
                },
                {
                    id: 8,
                    name: 'French Bakery SeDelice',
                    category: 'Restoran & Doňdurma',
                    floor: '1-nji gat',
                    image: '/imgs/shop1.png'
                },
            ]
        }
    }
}
</script>