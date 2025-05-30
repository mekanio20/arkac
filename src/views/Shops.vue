<template>
    <div class="w-full h-full">
        <!-- Header -->
        <Header />
        <!-- Navbar -->
        <Navbar activePage="shops" />
        <!-- Title Section -->
        <TitleSection :title="$t('nav.shops')" :count="shopCount" isBorder />
        <!-- Main -->
        <div class="container py-10">
            <div class="flex flex-col md:flex-row items-start sm:items-center gap-4 sm:gap-6">
                <!-- Search -->
                <Search :placeholder="$t('common.shopSearch')" @search-results="handleSearchResults" />
                <div class="w-full flex flex-col sm:flex-row items-start gap-4">
                    <!-- Selection -->
                    <Selection :placeholder="$t('common.categorySelection')" :categories="categories"
                        @select="handleCategorySelect" />
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
            <div v-else-if="shopCount === 0" class="text-center py-20">
                <p class="text-arkac-gray-300 font-inter text-lg">{{ $t('common.noResults') }}</p>
            </div>
            <!-- Shop Cards -->
            <div v-else class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 pt-14 pb-20">
                <ShopCard v-for="item in shops" :key="item.id" :id="item.id" :floor="item.floor" :image="item.logo"
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
import ShopCard from '@/components/ShopCard.vue';
import Footer from '@/components/Footer.vue';
export default {
    name: 'Shops',
    components: {
        Header,
        Navbar,
        TitleSection,
        Search,
        Selection,
        ShopCard,
        Footer
    },
    data() {
        return {
            shopCount: 0,
            categories: [],
            shops: [],
            isLoading: false,
            error: null,
            selectedCategory: null,
            selectedFloor: null,
            searchQuery: '',
            floors: [
                {
                    id: 1,
                    name: '1-ji gat',
                },
                {
                    id: 2,
                    name: '2-ji gat',
                },
                {
                    id: 3,
                    name: '3-ji gat',
                },
            ],
        }
    },
    created() {
        this.getCategories()
        this.getShops(this.selectedCategory, this.selectedFloor, this.searchQuery)
    },
    methods: {
        async getCategories() {
            const response = await api.get('/places/categories/')
            this.categories = await response.data.results
        },
        async getShops(category, floor, searchQuery) {
            this.isLoading = true
            this.error = null
            try {
                let queryParams = 'type_fk=1'
                if (category) queryParams += `&category_fk=${category}`
                if (floor) queryParams += `&floor=${floor}`
                if (searchQuery) queryParams += `&search=${searchQuery}`

                const response = await api.get(`/places/?${queryParams}`)
                this.shopCount = await response.data.count
                this.shops = await response.data.results
            } catch (error) {
                console.error('Error fetching shops:', error)
                this.error = this.$t('common.error')
            } finally {
                this.isLoading = false
            }
        },
        async handleCategorySelect(category) {
            this.selectedCategory = category
            await this.getShops(this.selectedCategory, this.selectedFloor, this.searchQuery)
        },
        async handleFloorSelect(floor) {
            this.selectedFloor = floor
            await this.getShops(this.selectedCategory, this.selectedFloor, this.searchQuery)
        },
        async handleSearchResults(query) {
            this.searchQuery = query
            await this.getShops(this.selectedCategory, this.selectedFloor, this.searchQuery)
        },
    },
    watch: {
        '$i18n.locale'() {
            this.getCategories()
            this.getShops(this.selectedCategory, this.selectedFloor, this.searchQuery)
        }
    }
}
</script>