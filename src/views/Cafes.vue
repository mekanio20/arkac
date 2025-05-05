<template>
    <div class="w-full h-full">
        <!-- Header -->
        <Header />
        <!-- Navbar -->
        <Navbar />
        <!-- Title Section -->
        <TitleSection title="KAFE we restoranlar" count="120" isBorder />
        <!-- Main -->
        <div class="container px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10">
            <!-- Search and Filters Section -->
            <div class="flex flex-col md:flex-row items-start sm:items-center gap-4 sm:gap-6">
                <!-- Search -->
                <Search placeholder="Gözlemek" />
                <div class="w-full flex flex-col sm:flex-row items-start gap-4">
                    <!-- Selection -->
                    <Selection placeholder="Görnüşini saýlamak" :categories="categories" />
                    <!-- Selection floor -->
                    <Selection placeholder="Gat" :categories="floors" />
                </div>
            </div>
            <!-- Shop Cards -->
            <div
                class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 pt-8 sm:pt-10 lg:pt-14 pb-12 sm:pb-16 lg:pb-20">
                <CafesCard v-for="item in shops" :key="item.id" :id="item.id" :floor="item.floor" :image="item.image" :name="item.name"
                    :category="item.category" />
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
            categories: [
                {
                    id: 1,
                    name: 'Aýal egin-eşik',
                },
                {
                    id: 2,
                    name: 'Kosmetika we parfumeriýa',
                },
                {
                    id: 3,
                    name: 'Çağa egin-eşik',
                },
                {
                    id: 4,
                    name: 'Elektronika we öý enjamlary',
                },
                {
                    id: 5,
                    name: 'Gurlyşyk harytlary',
                },
                {
                    id: 6,
                    name: 'Öý haýwanlar üçin',
                },
            ],
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
            shops: [
                {
                    id: 1,
                    name: 'French Bakery SeDelice',
                    category: 'Restoran & Doňdurma',
                    floor: '1-nji gat',
                    image: '/imgs/shop1.png'
                },
                {
                    id: 2,
                    name: 'French Bakery SeDelice',
                    category: 'Restoran & Doňdurma',
                    floor: '1-nji gat',
                    image: '/imgs/shop1.png'
                },
                {
                    id: 3,
                    name: 'French Bakery SeDelice',
                    category: 'Restoran & Doňdurma',
                    floor: '1-nji gat',
                    image: '/imgs/shop1.png'
                },
                {
                    id: 4,
                    name: 'French Bakery SeDelice',
                    category: 'Restoran & Doňdurma',
                    floor: '1-nji gat',
                    image: '/imgs/shop1.png'
                },
                {
                    id: 5,
                    name: 'French Bakery SeDelice',
                    category: 'Restoran & Doňdurma',
                    floor: '1-nji gat',
                    image: '/imgs/shop1.png'
                },
                {
                    id: 6,
                    name: 'French Bakery SeDelice',
                    category: 'Restoran & Doňdurma',
                    floor: '1-nji gat',
                    image: '/imgs/shop1.png'
                },
                {
                    id: 7,
                    name: 'French Bakery SeDelice',
                    category: 'Restoran & Doňdurma',
                    floor: '1-nji gat',
                    image: '/imgs/shop1.png'
                },
                {
                    id: 8,
                    name: 'French Bakery SeDelice',
                    category: 'Restoran & Doňdurma',
                    floor: '1-nji gat',
                    image: '/imgs/shop1.png'
                },
            ]
        }
    }
}
</script>