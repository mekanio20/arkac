<template>
    <div class="w-full h-full">
        <!-- Header -->
        <Header />
        <!-- Navbar -->
        <Navbar />
        <!-- Title Section -->
        <TitleSection :title="$t('common.news')" isBorder />
        <!-- Main -->
        <div class="container py-6">
            <!-- Shop Cards -->
            <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 pt-6 pb-20">
                <NewsCard v-for="(item, index) in news" :key="index" :id="item.id" :title="item.title" :date="item.date"
                    :image="item.thumbnail" :category="item.type" />
            </div>
        </div>
        <!-- Footer -->
        <Footer />
    </div>
</template>

<script>
import api from '@/api/index'
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
    created() {
        this.getNews()
    },
    data() {
        return {
            news: []
        }
    },
    methods: {
        async getNews() {
            const response = await api.get('/posts/')
            console.log(response);
            this.news = await response.data.results
        }
    }
}
</script>