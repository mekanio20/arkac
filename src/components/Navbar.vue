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
            isHomepage: true,
            categories: [
                {
                    id: 1,
                    name: 'Dükanlar',
                    url: '/shops'
                },
                {
                    id: 2,
                    name: 'Kafe we restoranlar',
                    url: '/cafes'
                },
                {
                    id: 3,
                    name: 'Hyzmatlar',
                    url: ''
                },
                {
                    id: 4,
                    name: 'Kinoteatr',
                    url: '/films'
                },
                {
                    id: 5,
                    name: 'Täzelikler we Çäreler',
                    url: '/news'
                },
                {
                    id: 6,
                    name: 'Biz barada',
                    url: '/about'
                },
                {
                    id: 7,
                    name: 'Habarlaşmak',
                    url: '/contact'
                }
            ]
        };
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