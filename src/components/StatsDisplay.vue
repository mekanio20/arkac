<template>
    <div class="w-full pt-44 pb-64 overflow-hidden">
        <!--  -->
        <div class="relative flex items-center justify-center mb-8 pt-20">
            <!-- Center Social Icons -->
            <div class="container absolute -top-[120px] sm:left-1/2 right-0 transform sm:-translate-x-1/2 flex justify-center space-x-4 md:space-x-6 z-50">
                <!-- Instagram Icon -->
                <a href="https://www.instagram.com/arkach.sdm" target="_blank" class="text-black transition-all duration-100 hover:-translate-y-2 hover:scale-110 animate-pulse-text"
                    style="animation-delay: 1s" aria-label="Instagram">
                    <InstagramIcon class="w-4 h-4 md:w-6 md:h-6" />
                </a>
                <!-- TikTok Icon -->
                <a href="https://www.tiktok.com/@arkach.sdam" target="_blank" class="text-black transition-all duration-100 hover:-translate-y-2 hover:scale-110 animate-pulse-text"
                    style="animation-delay: 1s" aria-label="TikTok">
                    <TikTokIcon class="w-4 h-4 md:w-6 md:h-6" />
                </a>
            </div>
            <!-- Left image -->
            <div class="absolute left-0 -top-40 transform -translate-y-1/2 animate-float-right">
                <img :src="leftImage" class="w-32 h-32 object-cover md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-lg shadow-md" />
            </div>

            <!-- Right text -->
            <div v-if="isAbout" class="flex items-baseline text-start absolute right-0 -top-[80px] transform -translate-y-1/2 animate-float-left z-40">
                <h1 class="font-inter text-9xl font-bold md:text-[170px] tracking-wider">283700m<sup>2</sup></h1>
                <p class="font-inter font-semibold text-4xl md:text-5xl tracking-wider uppercase">{{ $t('subtitles.square') }}</p>
            </div>

            <!-- Center text -->
            <div class="flex items-baseline space-x-10 text-start animate-float-right z-40">
                <h1 class="font-inter text-9xl font-bold md:text-[170px] tracking-wider">61</h1>
                <p class="font-inter font-semibold text-4xl md:text-5xl tracking-wider uppercase">{{ $t('subtitles.shop') }}</p>
            </div>

            <!-- Right image -->
            <div class="absolute right-0 -top-20 transform -translate-y-1/2 animate-float-left">
                <img :src="rightImage" class="w-32 h-32 object-cover md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-lg shadow-md" />
            </div>
        </div>

        <!-- Second Row with 10 KAFE & RESTORAN -->
        <div class="relative flex items-center justify-center mt-20">
            <!-- Left image -->
            <div class="absolute left-0 bottom-10 transform translate-y-1/2 animate-float-right"
                style="animation-delay: 1s">
                <img :src="bottomCenterImage" class="w-24 h-24 object-cover md:w-32 md:h-32 lg:w-[150px] rounded-lg shadow-md" />
            </div>

            <!-- Center text -->
            <div class="flex items-baseline space-x-10 text-start animate-float-left z-40">
                <h1 class="font-inter text-9xl font-bold md:text-[170px] tracking-wider">10</h1>
                <p class="font-inter text-4xl font-semibold md:text-5xl tracking-wider uppercase">{{ $t('subtitles.cafe') }}</p>
            </div>

            <!-- Bottom center image -->
            <div class="absolute -bottom-[150px] left-1/4 transform translate-y-1/4 animate-float-left"
                style="animation-delay: 1s">
                <img :src="bottomLeftImage" class="w-24 h-24 object-cover md:w-32 md:h-32 lg:w-40 lg:h-40 shadow-md" />
            </div>

            <!-- Right image -->
            <div class="absolute right-0 bottom-0 transform translate-y-1/2 animate-float-right"
                style="animation-delay: 1s">
                <img :src="bottomRightImage" class="w-24 h-24 object-cover md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-lg shadow-md" />
            </div>
        </div>
    </div>
</template>

<script>
import InstagramIcon from './icons/instagram.vue';
import TikTokIcon from './icons/tiktok.vue';
export default {
    components: {
        InstagramIcon,
        TikTokIcon,
    },
    props: {
        isAbout: {
            type: Boolean,
            default: false
        },
        leftImage: {
            type: String,
            required: true
        },
        rightImage: {
            type: String,
            required: true
        },
        bottomCenterImage: {
            type: String,
            required: true
        },
        bottomRightImage: {
            type: String,
            required: true
        },
        bottomLeftImage: {
            type: String,
            required: true
        }
    }
}
</script>