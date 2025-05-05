<template>
    <nav class="hidden md:block px-6 py-3 overflow-x-auto whitespace-nowrap" :class="{ 'border-b-[1px] border-arkac-gray-500': !isHomepage }">
        <div class="flex justify-center space-x-2 md:space-x-4">
            <router-link v-for="(category, index) in categories" :key="index" :to="category.url"
                class="navbar-item font-avenir font-medium text-sm md:text-base">
                {{ category.name  }}
            </router-link>
        </div>
    </nav>

    <nav class="md:hidden px-4 py-3" v-if="isMobileMenuOpen">
        <div class="flex flex-col space-y-2">
            <router-link v-for="(category, index) in categories" :key="index" :to="category.url"
                class="px-3 py-2 font-avenir font-medium rounded-md hover:bg-arkac-blue-50 text-sm">
                {{ category.name }}
            </router-link>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Navbar',
    data() {
        return {
            isMobileMenuOpen: false,
            isHomepage: true
        };
    },
    computed: {
        categories() {
            return [
                {
                    id: 1,
                    name: this.$t('categories.shops'),
                    url: '/shops'
                },
                {
                    id: 2,
                    name: this.$t('categories.cafes'),
                    url: '/cafes'
                },
                {
                    id: 3,
                    name: this.$t('categories.services'),
                    url: ''
                },
                {
                    id: 4,
                    name: this.$t('categories.cinema'),
                    url: '/films'
                },
                {
                    id: 5,
                    name: this.$t('categories.news'),
                    url: '/news'
                },
                {
                    id: 6,
                    name: this.$t('categories.about'),
                    url: '/about'
                },
                {
                    id: 7,
                    name: this.$t('categories.contact'),
                    url: '/contact'
                }
            ];
        }
    },
    created() {
        if (this.$route.name !== 'Home') {
            this.isHomepage = false;
        }
    },
    methods: {
        toggleMobileMenu() {
            this.isMobileMenuOpen = !this.isMobileMenuOpen;
        }
    }
}
</script>