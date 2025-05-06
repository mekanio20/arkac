<template>
    <div class="w-full h-full">
        <!-- Header -->
        <Header />
        <!-- Navbar -->
        <Navbar />
        <!-- Main -->
        <div class="flex flex-col-reverse lg:flex-row justify-between pt-8 sm:pt-14 pb-10 sm:pb-20">
            <div class="flex-1 flex flex-col space-y-4 px-4 sm:px-8 lg:pl-16 lg:pr-8 xl:pr-32">
                <!-- Shop Detail -->
                <div class="flex flex-col space-y-6 sm:space-y-10 border-b border-arkac-gray-500 pb-6 sm:pb-10">
                    <RouterSection route="/cafes" prevRoute="Kafelar" nextRoute="LUSIO представляет Slow Life" />
                    <p
                        class="w-fit px-4 sm:px-5 py-2 bg-arkac-blue-300 text-arkac-blue-200 font-inter font-medium text-sm rounded-lg">
                        1-nji gat
                    </p>
                    <h1 class="font-inter font-medium text-3xl sm:text-4xl lg:text-[60px] uppercase leading-tight sm:leading-[64px]">
                        Bath & Body Works
                    </h1>
                    <div class="flex flex-wrap items-center gap-4 sm:gap-6">
                        <router-link to="#"
                            class="bg-arkac-blue-200 rounded-full px-6 sm:px-10 py-2 sm:py-3 font-inter font-medium text-sm text-white">
                            360<sup>0</sup>görmek
                        </router-link>
                        <router-link to="#"
                            class="border border-arkac-gray-200 rounded-full px-6 sm:px-10 py-2 sm:py-3 font-inter font-medium text-sm text-arkac-gray-1000">
                            Shemada görmek
                        </router-link>
                    </div>
                </div>
                <!-- Contact -->
                <div class="flex flex-col space-y-6 sm:space-y-10 border-b border-arkac-gray-500 pb-6 sm:pb-10">
                    <div class="flex flex-col sm:flex-row sm:space-x-10 pt-4 sm:pt-6">
                        <div class="flex flex-col space-y-4 sm:space-y-6">
                            <h3 class="font-inter font-medium text-base sm:text-lg text-arkac-gray-1100">{{ $t('contact.phone') }}</h3>
                            <h3 class="font-inter font-medium text-base sm:text-lg text-arkac-gray-1100">{{ $t('contact.work') }}</h3>
                            <h3 class="font-inter font-medium text-base sm:text-lg text-arkac-gray-1100">{{ $t('contact.social') }}</h3>
                        </div>
                        <div class="flex flex-col space-y-4 sm:space-y-6 mt-4 sm:mt-0">
                            <p class="font-inter font-medium text-base sm:text-lg">+99361 616161</p>
                            <p class="font-inter font-medium text-base sm:text-lg">{{ $t('contact.clock') }}</p>
                            <div class="flex items-center space-x-3 sm:space-x-4">
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
                <div class="flex flex-wrap items-center gap-4 sm:gap-10 py-6 sm:py-8">
                    <div
                        class="rounded-full px-6 sm:px-10 py-2 sm:py-3 bg-arkac-gray-1200 text-arkac-gray-100 font-inter font-normal text-sm">
                        Öý hojalyk harytlary
                    </div>
                    <div
                        class="rounded-full px-6 sm:px-10 py-2 sm:py-3 bg-arkac-gray-1200 text-arkac-gray-100 font-inter font-normal text-sm">
                        Kosmetika we parfumeriýa
                    </div>
                </div>
            </div>
            <div class="flex-1 lg:w-full container mb-6 lg:mb-0">
                <img src="/imgs/shop-detail-1.png" class="w-full h-[300px] sm:h-[400px] rounded-lg lg:h-full object-cover">
            </div>
        </div>
        <div class="w-full container px-4 sm:px-6 lg:px-8 pb-20 sm:pb-40">
            <p class="font-inter text-base sm:text-lg pb-16 sm:pb-32">
                Dükanymyz müşderilere ýokary hilli harytlary hödürlemek maksady bilen döredildi. Biziň maksadymyz –
                adamlaryň gündelik durmuşyny ýeňilleşdirmek we olara gerekli zatlaryny amatly bahadan üpjün etmekdir.
                <br> <br>
                Müşderilerimiziň ynamy biziň üçin örän möhümdir. Şonuň üçin hem biz hil, hyzmat we amatlylyk babatda iň
                gowusyny hödürlemäge çalyşýarys.
                <br> <br>
                Dükanymyza gelip görmegiňizi sabyrsyzlyk bilen garaşýarys!
            </p>
            <div class="">
                <h2 class="font-inter font-medium text-2xl sm:text-3xl lg:text-4xl uppercase">{{ $t('titles.cafes') }}</h2>
                <div class="w-full py-4 sm:py-6 rounded-xl mt-6 sm:mt-10 relative overflow-hidden">
                    <Swiper 
                        :modules="modules" 
                        :slides-per-view="1"
                        :space-between="20"
                        :breakpoints="{
                            '640': {
                                slidesPerView: 2,
                                spaceBetween: 20
                            },
                            '768': {
                                slidesPerView: 3,
                                spaceBetween: 30
                            },
                            '1024': {
                                slidesPerView: 4,
                                spaceBetween: 40
                            }
                        }"
                        :loop="true">
                        <SwiperSlide v-for="item in shops" :key="item.id">
                            <CafesCard :img="item.img" :title="item.title" :id="item.id" :floor="item.floor"
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
import CafesCard from '@/components/CafesCard.vue';
import RouterSection from '@/components/RouterSection.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
export default {
    name: 'CafesDetail',
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
        CafesCard,
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