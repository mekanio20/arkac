<template>
    <div class="w-full h-full">
        <!-- Header -->
        <Header />
        <!-- Navbar -->
        <Navbar />
        <!-- Main -->
        <div class="flex justify-between pt-14 pb-20">
            <div class="flex-1 flex flex-col space-y-4 pl-16 pr-32">
                <!-- Shop Detail -->
                <div class="flex flex-col space-y-10 border-b border-arkac-gray-500 pb-10">
                    <RouterSection route="/shops" prevRoute="Dükanlar" nextRoute="LUSIO представляет Slow Life" />
                    <p
                        class="w-fit px-5 py-2 bg-arkac-blue-300 text-arkac-blue-200 font-inter font-medium text-sm rounded-lg">
                        1-nji gat
                    </p>
                    <h1 class="font-inter font-medium text-[60px] uppercase leading-[64px]">
                        Bath & Body Works
                    </h1>
                    <div class="flex items-center space-x-6">
                        <router-link to="#"
                            class="bg-arkac-blue-200 rounded-full px-10 py-3 font-inter font-medium text-sm text-white">
                            360<sup>0</sup>görmek
                        </router-link>
                        <router-link to="#"
                            class="border border-arkac-gray-200 rounded-full px-10 py-3 font-inter font-medium text-sm text-arkac-gray-1000">
                            Shemada görmek
                        </router-link>
                    </div>
                </div>
                <!-- Contact -->
                <div class="flex flex-col space-y-10 border-b border-arkac-gray-500 pb-10">
                    <div class="flex space-x-10 pt-6">
                        <div class="flex flex-col space-y-6">
                            <h3 class="font-inter font-medium text-lg text-arkac-gray-1100">Telefon belgisi:</h3>
                            <h3 class="font-inter font-medium text-lg text-arkac-gray-1100">Iş wagty:</h3>
                            <h3 class="font-inter font-medium text-lg text-arkac-gray-1100">Sosial media:</h3>
                        </div>
                        <div class="flex flex-col space-y-6">
                            <p class="font-inter font-medium text-lg">+99361 616161</p>
                            <p class="font-inter font-medium text-lg">Вс-Чт: 10:00-22:00,Пт-Сб: 10:00-23:00</p>
                            <div class="flex items-center space-x-4">
                                <div class="rounded-full p-2 bg-arkac-blue-900">
                                    <Instagram width="14px" height="14px" :fill="'white'" />
                                </div>
                                <div class="rounded-full p-2 bg-arkac-blue-900">
                                    <Tiktok width="14px" height="14px" :fill="'white'" />
                                </div>
                                <div class="rounded-full p-2 bg-arkac-blue-900">
                                    <X width="14px" height="14px" :fill="'white'" />
                                </div>
                                <div class="rounded-full p-2 bg-arkac-blue-900">
                                    <Facebook width="14px" height="14px" :fill="'white'" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Categories -->
                <div class="flex items-center space-x-10 py-8">
                    <div
                        class="rounded-full px-10 py-3 bg-arkac-gray-1200 text-arkac-gray-100 font-inter font-normal text-sm">
                        Öý hojalyk harytlary
                    </div>
                    <div
                        class="rounded-full px-10 py-3 bg-arkac-gray-1200 text-arkac-gray-100 font-inter font-normal text-sm">
                        Kosmetika we parfumeriýa
                    </div>
                </div>
            </div>
            <div class="flex-1 w-full">
                <img src="/imgs/shop-detail-1.png" class="w-full h-full object-cover">
            </div>
        </div>
        <div class="w-full container pb-40">
            <p class="font-inter text-lg pb-32">
                Dükanymyz müşderilere ýokary hilli harytlary hödürlemek maksady bilen döredildi. Biziň maksadymyz –
                adamlaryň gündelik durmuşyny ýeňilleşdirmek we olara gerekli zatlaryny amatly bahadan üpjün etmekdir.
                <br> <br>
                Müşderilerimiziň ynamy biziň üçin örän möhümdir. Şonuň üçin hem biz hil, hyzmat we amatlylyk babatda iň
                gowusyny hödürlemäge çalyşýarys.
                <br> <br>
                Dükanymyza gelip görmegiňizi sabyrsyzlyk bilen garaşýarys!
            </p>
            <div class="">
                <h2 class="font-inter font-medium text-4xl uppercase">Meňzeş dükanlar</h2>
                <div class="w-full py-6 rounded-xl mt-10 relative overflow-hidden">
                    <Swiper :modules="modules" :slides-per-view="4" :space-between="40" :loop="true">
                        <SwiperSlide v-for="item in shops" :key="item.id">
                            <ShopCard :img="item.img" :title="item.title" :id="item.id" :floor="item.floor"
                                :image="item.image" :name="item.name" :category="item.category" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
        <!-- Footer -->
        <Footer />
    </div>
</template>

<script>
import X from '@/components/icons/x.vue';
import Footer from '@/components/Footer.vue';
import Instagram from '@/components/icons/instagram.vue';
import Facebook from '@/components/icons/facebook.vue';
import Tiktok from '@/components/icons/tiktok.vue';
import Header from '@/components/Header.vue';
import Navbar from '@/components/Navbar.vue';
import ShopCard from '@/components/ShopCard.vue';
import RouterSection from '@/components/RouterSection.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
export default {
    name: 'ShopDetail',
    components: {
        Swiper,
        SwiperSlide,
        Header,
        Navbar,
        Footer,
        Instagram,
        Tiktok,
        X,
        Facebook,
        ShopCard,
        RouterSection
    },
    data() {
        return {
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
    },
}
</script>