<template>
    <div class="w-full h-full">
        <div class="min-h-screen relative bg-gradient-arkac">
            <!-- Header -->
            <Header />
            <!-- Blur Stars -->
            <div class="absolute top-48 left-80">
                <BlurStar />
            </div>
            <div class="absolute top-72 -left-4">
                <BlurStar />
            </div>
            <div class="absolute top-[550px] left-28">
                <BlurStar />
            </div>

            <div class="absolute top-48 right-64">
                <BlurStar />
            </div>
            <div class="absolute top-72 -right-4">
                <BlurStar />
            </div>
            <div class="absolute top-[550px] right-28">
                <BlurStar />
            </div>
            <div class="absolute top-[650px] right-[600px]">
                <BlurStar />
            </div>

            <!-- Navbar -->
            <Navbar />
            <!-- Hero Section -->
            <div class="flex flex-col items-center mt-[100px] text-center">
                <div class="flex items-baseline space-x-8">
                    <h1 class="font-playfair font-bold text-[140px] arkac-text-gradient leading-tight">Arkaç</h1>
                    <img class="w-[190x] h-[60px] inline-block" src="/imgs/arkac.png" alt="Arkaç">
                </div>
                <p class="font-playfair font-medium text-[94px] !leading-none">söwda dynç alyş merkezi</p>
            </div>
        </div>
        <!-- Marquee Section -->
        <marquee direction="right" class="w-full py-4 mb-40 rotate-1 arkac-news-gradient flex items-center space-x-4">
            <div class="flex items-center space-x-6">
                <p class="font-inter font-semibold text-[22px] text-white uppercase">
                    Täzelikler & Çäreler
                </p>
                <img src="/svgs/thunder.svg" alt="Thunder">
                <p class="font-inter font-semibold text-[22px] text-white uppercase">
                    Täzelikler & Çäreler
                </p>
                <img src="/svgs/thunder.svg" alt="Thunder">
                <p class="font-inter font-semibold text-[22px] text-white uppercase">
                    Täzelikler & Çäreler
                </p>
                <img src="/svgs/thunder.svg" alt="Thunder">
                <p class="font-inter font-semibold text-[22px] text-white uppercase">
                    Täzelikler & Çäreler
                </p>
                <img src="/svgs/thunder.svg" alt="Thunder">
                <p class="font-inter font-semibold text-[22px] text-white uppercase">
                    Täzelikler & Çäreler
                </p>
                <img src="/svgs/thunder.svg" alt="Thunder">
            </div>
        </marquee>
        <!-- About Section -->
        <div class="container relative pb-60">
            <div class="flex items-start space-x-10">
                <div class="flex-1">
                    <h4
                        class="w-fit py-2 px-6 bg-arkac-blue-800 -rotate-1 text-white font-inter font-semibold text-lg inline-block">
                        Arkac</h4>
                    <span class="font-inter font-normal text-[22px]">
                        söwda merkezi müşderilerimize ýokary hilli harytlary, döwrebap hyzmatlary hem-de ýakymly söwda
                        tejribesini hödürleýän häzirki zaman söwda meýdançasydyr.
                    </span>
                </div>
                <div class="flex-1 flex flex-col space-y-10">
                    <p class="font-inter font-normal text-[22px]">
                        Biz müşderilerimiziň wagtyny has amatly, söwdasyny bolsa has lezzetli we ýakymly etmek üçin
                        hemişe täze mümkinçilikleri döretmäge çalyşýarys.
                    </p>
                    <p class="font-inter font-normal text-[22px]">
                        Arkaç — diňe bir söwda merkezi däl, eýsem, dostlukly atmosferasy bilen ýürekleriňizi özüne çeken
                        bir giňişlikdir.
                    </p>
                    <p class="font-inter font-normal text-[22px]">
                        Siziň rahatlygyňyz we kanagatlanmagyňyz — biziň baş maksadymyz!
                    </p>
                </div>
            </div>
            <div class="absolute bottom-40 left-[400px]">
                <Arrow />
            </div>
            <div class="absolute bottom-20 -left-16">
                <div class="flex items-center justify-center !relative">
                    <ArkacLoopIcon class="slow-rotate" />
                    <StarIcon class="absolute left-1/2 -translate-x-1/2" />
                </div>
            </div>
        </div>
        <!-- Stats Display -->
        <StatsDisplay :isAbout="true" leftImage="/imgs/b4.png" rightImage="/imgs/b2.png" bottomCenterImage="/imgs/b3.png" bottomLeftImage="/imgs/b4.png" bottomRightImage="/imgs/b4.png" />
        <!-- Terms Card -->
        <div class="container">
            <TermsCard />
        </div>
        <!-- Gallery Section -->
        <GallerySection class="pb-40" />
        <!-- Footer Section -->
        <Footer />
    </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import BlurStar from '@/components/icons/blur_star.vue';
import ArkacLoopIcon from '@/components/icons/arkac-loop.vue';
import StarIcon from '@/components/icons/star.vue';
import Arrow from '@/components/icons/arrow.vue';
import StatsDisplay from '@/components/StatsDisplay.vue';
import TermsCard from '@/components/TermsCard.vue';
import GallerySection from '@/components/GallerySection.vue';
export default {
    name: 'About',
    components: {
        Navbar,
        Header,
        Footer,
        BlurStar,
        Arrow,
        ArkacLoopIcon,
        StarIcon,
        StatsDisplay,
        TermsCard,
        GallerySection
    },
}
</script>

<style scoped>
.slow-rotate {
    animation: rotate 6s linear infinite;
}

@keyframes rotate {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}
</style>