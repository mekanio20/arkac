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
            <!-- Pagination -->
            <div v-if="newsCount > 0" class="flex justify-center items-center gap-4 pb-20">
                <button @click="handlePageChange(currentPage - 1)" :disabled="currentPage === 1"
                    class="px-4 py-2 rounded-lg border border-arkac-blue-200 disabled:opacity-50 disabled:cursor-not-allowed">
                    <svg class="w-6 h-6 text-arkac-blue-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                        width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M5 12h14M5 12l4-4m-4 4 4 4" />
                    </svg>
                </button>
                <span class="text-arkac-gray-300">{{ currentPage }} / {{ totalPages }}</span>
                <button @click="handlePageChange(currentPage + 1)" :disabled="currentPage === totalPages"
                    class="px-4 py-2 rounded-lg border border-arkac-blue-200 disabled:opacity-50 disabled:cursor-not-allowed">
                    <svg class="w-6 h-6 text-arkac-blue-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                        width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M19 12H5m14 0-4 4m4-4-4-4" />
                    </svg>
                </button>
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
            this.newsCount = await response.data.count
            this.news = await response.data.results
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