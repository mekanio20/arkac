<template>
    <div class="w-full h-full">
        <!-- Header -->
        <Header />
        <!-- Navbar -->
        <Navbar activePage="cafes" />
        <!-- Title Section -->
        <TitleSection :title="$t('nav.cafes')" :count="cafesCount" isBorder />
        <!-- Main -->
        <div class="container px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10">
            <!-- Search and Filters Section -->
            <div class="flex flex-col md:flex-row items-start sm:items-center gap-4 sm:gap-6">
                <!-- Search -->
                <Search :placeholder="$t('common.search')" @search-results="handleSearchResults" />
                <div class="w-full flex flex-col sm:flex-row items-start gap-4">
                    <!-- Selection -->
                    <Selection :placeholder="$t('common.selection')" :categories="categories"
                        @select="handleCategorySelect" :isCategory="true" />
                    <!-- Selection floor -->
                    <Selection :placeholder="$t('common.floor')" :categories="floors" @select="handleFloorSelect" />
                </div>
            </div>
            <!-- Loading State -->
            <div v-if="isLoading" class="flex justify-center items-center py-20">
                <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-arkac-blue-200"></div>
            </div>
            <!-- Error State -->
            <div v-else-if="error" class="text-center py-20">
                <p class="text-red-500 font-inter text-lg">{{ error }}</p>
            </div>
            <!-- No Results -->
            <div v-else-if="cafesCount === 0" class="text-center py-20">
                <p class="text-arkac-gray-300 font-inter text-lg">{{ $t('common.noResults') }}</p>
            </div>
            <!-- Cafes Cards -->
            <div v-else
                class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 pt-8 sm:pt-10 lg:pt-14 pb-12 sm:pb-16 lg:pb-20">
                <CafesCard v-for="item in shops" :key="item.id" :id="item.id" :floor="item.floor" :image="item.logo"
                    :name="item.name" :category="item.category?.name" />
            </div>
        </div>
        <!-- Footer -->
        <Footer />
    </div>
</template>

<script>
import api from '@/api/index';
import Header from '@/components/Header.vue';
import Navbar from '@/components/Navbar.vue';
import TitleSection from '@/components/TitleSection.vue';
import Search from '@/components/Search.vue';
import Selection from '@/components/Selection.vue';
import CafesCard from '@/components/CafesCard.vue';
import Footer from '@/components/Footer.vue';
export default {
    name: 'Cafes',
    components: {
        Header,
        Navbar,
        TitleSection,
        Search,
        Selection,
        CafesCard,
        Footer
    },
    data() {
        return {
            cafesCount: 0,
            currentPage: 1,
            categories: [],
            shops: [],
            isLoading: false,
            error: null,
            selectedCategory: null,
            selectedFloor: null,
            searchQuery: '',
            floors: [
                {
                    id: 0,
                    name: this.$t('common.floor-1'),
                },
                {
                    id: 1,
                    name: this.$t('common.floor1'),
                },
                {
                    id: 2,
                    name: this.$t('common.floor2'),
                },
                {
                    id: 3,
                    name: this.$t('common.floor3'),
                },
            ],
        }
    },
    created() {
        this.getCategories()
        this.getCafes(this.selectedCategory, this.selectedFloor, this.searchQuery)
    },
    methods: {
        async getCategories() {
            const response = await api.get('/places/categories/')
            this.categories = await response.data
        },
        async getCafes(category, floor, searchQuery) {
            this.isLoading = true
            this.error = null
            try {
                let queryParams = `type_fk=3&page=${this.currentPage}`
                if (category) queryParams += `&category_fk=${category}`
                if (typeof floor === 'number') queryParams += `&floor=${floor === 0 ? -1 : floor}`
                if (searchQuery) queryParams += `&search=${searchQuery}`

                const response = await api.get(`/places/?${queryParams}`)
                this.cafesCount = await response.data.length
                this.shops = await response.data
            } catch (error) {
                console.error('Error fetching cafes:', error)
                this.error = this.$t('common.error')
            } finally {
                this.isLoading = false
            }
        },
        async handleCategorySelect(category) {
            this.selectedCategory = category
            await this.getCafes(this.selectedCategory, this.selectedFloor, this.searchQuery)
        },
        async handleFloorSelect(floor) {
            this.selectedFloor = floor
            await this.getCafes(this.selectedCategory, this.selectedFloor, this.searchQuery)
        },
        async handleSearchResults(query) {
            this.searchQuery = query
            await this.getCafes(this.selectedCategory, this.selectedFloor, this.searchQuery)
        },
        async handlePageChange(page) {
            if (page < 1 || page > this.totalPages) return
            this.currentPage = page
            await this.getCafes(this.selectedCategory, this.selectedFloor, this.searchQuery)
        },
    },
    computed: {
        totalPages() {
            return Math.ceil(this.cafesCount / 8)
        }
    },
    watch: {
        '$i18n.locale'() {
            window.location.reload()
        }
    }
}
</script>