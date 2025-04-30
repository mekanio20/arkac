<template>
    <div class="w-full h-full">
        <!-- Header -->
        <Header />
        <!-- Navbar -->
        <Navbar />
        <!-- Title Section -->
        <TitleSection title="KAFE we restoranlar" isBorder />
        <!-- Main -->
        <div class="container py-10">
            <div class="flex items-center justify-start space-x-4">
                <!-- Search -->
                <Search placeholder="Gözlemek" />
                <!-- Selection -->
                <Selection placeholder="Görnüşini saýlamak" :categories="categories" />
                <!-- Selection floor -->
                <Selection placeholder="Gat" :categories="floors" />
            </div>
            <!-- Shop Cards -->
            <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 pt-14 pb-20">
                <ShopCard v-for="item in shops" :key="item.id" :floor="item.floor" :image="item.image" :name="item.name"
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
import ShopCard from '@/components/ShopCard.vue';
import Footer from '@/components/Footer.vue';
export default {
    name: 'Cafes',
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