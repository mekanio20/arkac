<template>
    <div class="container pt-10 sm:pt-16 md:pt-20 pb-20">
        <Swiper :modules="modules" :slides-per-view="1.5" :space-between="50" :breakpoints="{
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
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10 mb-10">
            <ShopCard v-for="item in shops" :key="item.id" :id="item.id" :floor="item.floor" :image="item.logo"
                :name="item.name" :category="item.category?.name" />
        </div>
        <!-- <div class="flex items-center justify-center py-10 sm:py-16 md:py-20">
            <Button link="/shops" :text="$t('common.viewAll')" />
        </div> -->
    </div>
</template>

<script>
import api from '@/api/index'
import ShopCard from './ShopCard.vue';
import Button from './base/button.vue'
import Search from './Search.vue';
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
        Button,
        Search
    },
    data() {
        return {
            modules: [Navigation, Pagination],
            activeId: null,
            shopCount: 0,
            categories: [],
            shops: [],
        }
    },
    async created() {
        this.getCategories()
    },
    methods: {
        async getShops() {
            try {
                const response = await api.get(`/places/?category_fk=${this.activeId}`)
                this.shopCount = await response.data.length
                this.shops = await response.data
            } catch (error) {
                console.error('Error fetching shops:', error)
            }
        },
        async getCategories() {
            try {
                const categories = await api.get('/places/categories')
                this.categories = await categories.data
                this.activeId = await this.categories[0].id
            } catch (error) {
                console.error('Error fetching shops:', error)
            }
        }
    },
    watch: {
        activeId() {
            this.getShops()
        }
    }
}
</script>