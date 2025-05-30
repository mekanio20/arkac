<template>
    <div class="w-full h-full">
        <!-- Header -->
        <Header />
        <!-- Navbar -->
        <Navbar />
        <!-- Title Section -->
        <div class="flex items-center justify-center">
            <TitleSection title="SDAM-yň shemasy" isBorder />
        </div>
        <!-- Main -->
        <div class="container py-10">
            <div class="w-full flex items-center justify-center space-x-4">
                <div v-for="item in floors" :key="item" @click="activeFloor = item" :class="[activeFloor === item ? 'text-white bg-arkac-blue-200 font-bold' : 'text-black bg-arkac-gray-800 font-medium']" class="sm:px-10 px-8 py-3 rounded-full font-inter lg:text-lg sm:text-base text-sm cursor-pointer">
                    {{ item }}
                </div>
            </div>
            <div class="py-20">
                <img v-for="item in floors" :key="item" v-show="activeFloor === item" :src="`/imgs/${item}.webp`" class="w-full h-full object-contain">
            </div>
        </div>
        <!-- Footer -->
        <Footer />
    </div>
</template>

<script>
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
            activeFloor: -1,
            floors: [-1, 1, 2, 3]
        }
    },
    watch: {
        activeFloor() {
            this.$router.push('/schema/' + this.activeFloor)
        }
    }
}
</script>