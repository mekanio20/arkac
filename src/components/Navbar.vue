<template>
    <nav class="hidden md:block px-6 py-3 overflow-x-auto whitespace-nowrap"
        :class="{ 'border-b-[1px] border-arkac-gray-500': !isHomepage }">
        <div class="flex justify-center space-x-2 lg:space-x-3">
            <router-link v-for="(category, index) in categories" :key="index" :to="category.url"
                :class="{ 'text-arkac-blue-700': activePage === category.lang_name, 'text-white hover:text-arkac-blue-100': color === 'white' }"
                class="navbar-item font-avenir font-medium lg:text-base text-sm">
                {{ $t(`nav.${category.lang_name}`) }}
            </router-link>
        </div>
    </nav>

    <nav class="md:hidden px-4 py-3" v-if="isMobileMenuOpen">
        <div class="flex flex-col space-y-2">
            <router-link v-for="(category, index) in categories" :key="index" :to="category.url"
                :class="{ 'text-arkac-blue-700': activePage === category.lang_name }"
                class="px-3 py-2 font-avenir font-medium rounded-md hover:bg-arkac-blue-50 text-sm">
                {{ $t(`nav.${category.lang_name}`) }}
            </router-link>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Navbar',
    props: {
        color: {
            type: String,
            default: '#000'
        },
        activePage: {
            type: String
        }
    },
    data() {
        return {
            isMobileMenuOpen: false,
            isHomepage: true,
            categories: [
                {
                    id: 1,
                    lang_name: 'shops',
                    url: '/shops'
                },
                {
                    id: 2,
                    lang_name: 'cafes',
                    url: '/cafes'
                },
                {
                    id: 4,
                    lang_name: 'cinema',
                    url: '/films'
                },
                {
                    id: 5,
                    lang_name: 'news',
                    url: '/news'
                },
                {
                    id: 6,
                    lang_name: 'about',
                    url: '/about'
                },
                {
                    id: 7,
                    lang_name: 'contact',
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