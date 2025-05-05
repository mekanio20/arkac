<template>
    <div class="w-full h-full">
        <!-- Header -->
        <Header />
        <!-- Navbar -->
        <Navbar />
        <!-- Title Section -->
        <TitleSection title="Täzelikler" isBorder />
        <!-- Main -->
        <div class="container py-10">
            <!-- Shop Cards -->
            <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 pt-14 pb-20">
                <NewsCard v-for="(item, index) in bottomNewsItems" :key="index" :id="item.id" :title="item.title" :date="item.date"
                    :image="item.image" :category="item.category" />
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
import TitleSection from '@/components/TitleSection.vue';
import NewsCard from '@/components/NewsCard.vue';
export default {
    name: 'News',
    components: {
        Header,
        Navbar,
        Footer,
        TitleSection,
        NewsCard
    },
    data() {
        return {
            bottomNewsItems: [
                {
                    id: 1,
                    title: 'Все для твоего яркого макияжа по акции 1+1=3!',
                    category: 'Çäreler',
                    date: '23.03.2025',
                    image: '/imgs/news-1.webp'
                },
                {
                    id: 2,
                    title: 'В SUNLIGHT -50% на всё!',
                    category: 'Täzelikler',
                    date: '23.03.2025',
                    image: '/imgs/news-2.webp'
                },
                {
                    id: 3,
                    title: 'Все для твоего яркого макияжа по акции 1+1=3!',
                    category: 'Çäreler',
                    date: '23.03.2025',
                    image: '/imgs/news-3.webp'
                },
                {
                    id: 4,
                    title: 'В SUNLIGHT -50% на всё!',
                    category: 'Täzelikler',
                    date: '23.03.2025',
                    image: '/imgs/news-4.webp'
                },
                {
                    id: 5,
                    title: 'В SUNLIGHT -50% на всё!',
                    category: 'Täzelikler',
                    date: '23.03.2025',
                    image: '/imgs/news-5.webp'
                },
                {
                    id: 6,
                    title: 'В SUNLIGHT -50% на всё!',
                    category: 'Täzelikler',
                    date: '23.03.2025',
                    image: '/imgs/news-6.webp'
                },
                {
                    id: 7,
                    title: 'В SUNLIGHT -50% на всё!',
                    category: 'Täzelikler',
                    date: '23.03.2025',
                    image: '/imgs/news-1.webp'
                },
                {
                    id: 8,
                    title: 'В SUNLIGHT -50% на всё!',
                    category: 'Täzelikler',
                    date: '23.03.2025',
                    image: '/imgs/news-2.webp'
                }
            ]
        }
    }
}
</script>