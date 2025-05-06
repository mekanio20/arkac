<template>
    <div class="container my-16 sm:my-20 md:my-32">
        <!-- Top Row -->
        <div class="grid lg:grid-cols-2 grid-cols-1 items-start gap-4 sm:gap-6 mb-8 sm:mb-14">
            <!-- First News -->
            <div class="relative flex items-center justify-center group cursor-pointer">
                <img src="/imgs/news-1.webp" class="w-full h-[300px] sm:h-[400px] md:h-[475px] object-cover rounded-[10px]" />
                <!-- Arrow icon -->
                <div class="absolute top-4 sm:top-5 right-4 sm:right-5">
                    <div class="bg-white opacity-75 rounded-full w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] flex items-center justify-center">
                        <ArrowLeft class="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                </div>
                <div class="absolute bottom-4 bg-white w-[90%] mx-auto opacity-75 px-4 sm:px-6 md:px-10 py-4 sm:py-5 md:py-[25px] rounded-lg">
                    <h3 class="font-inter font-semibold text-base sm:text-lg mb-2 sm:mb-3">Открытый шахматный турнир "City Open"</h3>
                    <div class="flex items-center font-inter font-medium text-sm sm:text-base">
                        <span class="text-arkac-blue-200">Täzelikler</span>
                        <span class="mx-2"> - </span>
                        <span class="text-arkac-gray-100">23.03.2025</span>
                    </div>
                </div>
            </div>
            <!-- Second News -->
            <div class="grid sm:grid-cols-2 grid-cols-1 gap-4 sm:gap-6">
                <NewsCard title="Все для твоего яркого макияжа по акции 1+1=3!" date="23.03.2025"
                    image="/imgs/news-2.webp" category="Çäreler" />
                <NewsCard title="В SUNLIGHT -50% на всё!" date="23.03.2025" image="/imgs/news-3.webp"
                    category="Täzelikler" />
            </div>
        </div>

        <!-- Bottom Row -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <NewsCard v-for="(item, index) in bottomNewsItems" :key="index" :id="item.id" :title="item.title" :date="item.date"
                :image="item.image" :category="item.category" />
        </div>

        <!-- View All Button -->
        <div class="text-center mt-10 sm:mt-14 md:mt-16">
            <Button :text="$t('common.viewAll')" />
        </div>
    </div>
</template>

<script>
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
    data() {
        return {
            bottomNewsItems: [
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