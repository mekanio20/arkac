<template>
    <div class="w-full h-full">
        <!-- Header -->
        <Header />
        <!-- Navbar -->
        <Navbar activePage="news" />
        <!-- Title Section -->
        <TitleSection :title="$t('common.news')" isBorder />
        <!-- Main -->
        <div class="container py-6">
            <!-- News Cards -->
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
            news: [],
            newsCount: 0,
            currentPage: 1,
        }
    },
    methods: {
        async getNews() {
            const response = await api.get(`/posts/?page=${this.currentPage}`)
            this.newsCount = await response.data.length
            this.news = await response.data
        },
        async handlePageChange(page) {
            if (page < 1 || page > this.totalPages) return
            this.currentPage = page
            await this.getNews()
        },
    },
    computed: {
        totalPages() {
            return Math.ceil(this.newsCount / 8)
        }
    },
    watch: {
        '$i18n.locale'() {
            this.getNews()
        }
    }
}
</script>