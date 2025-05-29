<template>
    <div class="container my-16">
        <!-- Top Row -->
        <div class="grid lg:grid-cols-2 grid-cols-1 items-start gap-4 sm:gap-6 mb-8 sm:mb-14">
            <!-- First News -->
            <router-link :to="`/news/detail/${firstNew.id}`" v-if="firstNew" class="relative flex items-center justify-center group cursor-pointer overflow-hidden rounded-[10px]">
                <img :src="firstNew.thumbnail" class="w-full h-[300px] sm:h-[400px] md:h-[475px] object-cover rounded-[10px] transition-all duration-300 group-hover:scale-110 group-hover:brightness-90" />
                <!-- Arrow icon -->
                <div class="absolute top-4 sm:top-5 right-4 sm:right-5">
                    <div class="bg-white opacity-75 rounded-full w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                        <ArrowLeft class="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                </div>
                <div class="absolute bottom-4 bg-white w-[90%] mx-auto opacity-75 px-4 sm:px-6 md:px-10 py-4 sm:py-5 md:py-[25px] rounded-lg">
                    <h3 class="font-inter font-semibold text-base sm:text-lg mb-2 sm:mb-3">{{ firstNew.title }}</h3>
                    <div class="flex items-center font-inter font-medium text-sm sm:text-base">
                        <span class="text-arkac-blue-200 uppercase">{{ firstNew.type }}</span>
                        <span class="mx-2"> - </span>
                        <span class="text-arkac-gray-100">{{ firstNew.date }}</span>
                    </div>
                </div>
            </router-link>
            <!-- Second News -->
            <div v-if="secondNew?.id || thirdNew?.id" class="grid sm:grid-cols-2 grid-cols-1 gap-4 sm:gap-6">
                <NewsCard v-if="secondNew?.id" :id="secondNew.id" :title="secondNew.title" :date="secondNew.date"
                    :image="secondNew.thumbnail" :category="secondNew.type" />
                <NewsCard v-if="thirdNew?.id" :id="thirdNew.id" :title="thirdNew.title" :date="thirdNew.date" :image="thirdNew.thumbnail"
                    :category="thirdNew.type" />
            </div>
        </div>

        <!-- Bottom Row -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <NewsCard v-for="(item, index) in news" :key="index" :id="item.id" :title="item.title" :date="item.date"
                :image="item.image" :category="item.category" />
        </div>

        <!-- View All Button -->
        <div class="text-center mt-10 sm:mt-14 md:mt-16">
            <Button link="/news" :text="$t('common.viewAll')" />
        </div>
    </div>
</template>

<script>
import api from '@/api/index'
import NewsCard from '@/components/NewsCard.vue';
import ArrowLeft from '@/components/icons/arrow-left.vue';
import ArrowRight from '@/components/icons/arrow-right.vue';
import Button from '@/components/base/button.vue';
export default {
    components: {
        NewsCard,
        ArrowLeft,
        ArrowRight,
        Button
    },
    created() {
        this.getNews()
    },
    data() {
        return {
            news: [],
            firstNew: {},
            secondNew: {},
            thirdNew: {}
        }
    },
    methods: {
        async getNews() {
            const response = await api.get('/posts/')
            this.firstNew = await response.data.results[0] || {}
            this.secondNew = await response.data.results[1] || {}
            this.thirdNew = await response.data.results[2] || {}
            this.news = await response.data.results?.slice(3)
        }
    }
}
</script>