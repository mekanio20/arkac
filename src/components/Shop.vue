<template>
    <div class="container pt-20 pb-20">
        <Swiper :modules="modules" :slides-per-view="4.5" :space-between="100" class="mb-20">
            <SwiperSlide v-for="item in categories" :key="item.id" :class="[
                'font-inter font-medium text-4xl text-nowrap !w-fit cursor-pointer',
                activeId === item.id ? 'text-black' : 'text-arkac-gray-300'
                ]" @click="activeId = item.id">
                {{ item.name }}
            </SwiperSlide>
        </Swiper>
        <div class="grid grid-cols-4 gap-10">
            <ShopCard v-for="item in shops" :key="item.id" :floor="item.floor" :image="item.image" :name="item.name" :category="item.category" />
        </div>
        <div class="flex items-center justify-center py-20">
            <Button />
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