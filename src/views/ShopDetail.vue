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
                    <div class="flex items-center space-x-4">
                        <!-- Arrow Left -->
                        <svg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_174_4285)">
                                <path
                                    d="M-0.00202847 3.49938C0.0023222 3.37168 0.049715 3.24872 0.133112 3.14878L2.79952 0.261235C2.89412 0.169365 3.02103 0.114211 3.15573 0.106422C3.29044 0.098634 3.42339 0.138763 3.52892 0.219062C3.62446 0.32184 3.67678 0.454721 3.67582 0.59212C3.67486 0.729519 3.62069 0.861722 3.52373 0.963275L1.6491 2.99084H10.4999C10.634 3.00116 10.7591 3.0593 10.8503 3.15369C10.9415 3.24808 10.9922 3.37179 10.9922 3.50021C10.9922 3.62863 10.9415 3.75235 10.8503 3.84673C10.7591 3.94112 10.634 3.99926 10.4999 4.00958H1.65083L3.52546 6.03714C3.61567 6.14178 3.66542 6.27286 3.66637 6.40837C3.66731 6.54388 3.6194 6.67558 3.53066 6.78136C3.42576 6.8631 3.29248 6.90414 3.15732 6.89633C3.02216 6.88852 2.89504 6.83241 2.80125 6.73919L0.134845 3.85164C0.043788 3.75521 -0.00518227 3.62917 -0.00202847 3.49938Z"
                                    fill="black" />
                            </g>
                            <defs>
                                <clipPath id="clip0_174_4285">
                                    <rect width="11" height="7" fill="white" transform="matrix(-1 0 0 1 11 0)" />
                                </clipPath>
                            </defs>
                        </svg>
                        <p class="font-inter font-light text-sm uppercase">
                            Dükanlar
                        </p>
                        <span class="font-inter font-light text-sm uppercase">/</span>
                        <p class="font-inter font-light text-sm uppercase">
                            LUSIO представляет Slow Life
                        </p>
                    </div>
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
import Header from '@/components/Header.vue';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import Instagram from '@/components/icons/instagram.vue';
import Tiktok from '@/components/icons/tiktok.vue';
import X from '@/components/icons/x.vue';
import Facebook from '@/components/icons/facebook.vue';
import ShopCard from '@/components/ShopCard.vue';
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
        ShopCard
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