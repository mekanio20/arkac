<template>
    <div class="w-full pt-44 pb-64 overflow-hidden">
        <!--  -->
        <div class="relative flex items-center justify-center mb-8 pt-20">
            <!-- Center Social Icons -->
            <div class="container absolute -top-[150px] sm:left-1/2 right-0 transform sm:-translate-x-1/2 flex justify-end space-x-4 md:space-x-6 z-50">
                <!-- Instagram Icon -->
                <a href="#" class="text-black transition-all duration-300 hover:-translate-y-2 hover:scale-110 animate-pulse-text"
                    style="animation-delay: 0.1s" aria-label="Instagram">
                    <InstagramIcon class="w-4 h-4 md:w-6 md:h-6" />
                </a>

                <!-- TikTok Icon -->
                <a href="#" class="text-black transition-all duration-300 hover:-translate-y-2 hover:scale-110 animate-pulse-text"
                    style="animation-delay: 0.2s" aria-label="TikTok">
                    <TikTokIcon class="w-4 h-4 md:w-6 md:h-6" />
                </a>

                <!-- X Icon -->
                <a href="#" class="text-black transition-all duration-300 hover:-translate-y-2 hover:scale-110 animate-pulse-text"
                    style="animation-delay: 0.3s" aria-label="Twitter/X">
                    <XIcon class="w-4 h-4 md:w-6 md:h-6" />
                </a>

                <!-- Facebook Icon -->
                <a href="#" class="text-black transition-all duration-300 hover:-translate-y-2 hover:scale-110 animate-pulse-text"
                    style="animation-delay: 0.4s" aria-label="Facebook">
                    <FacebookIcon class="w-4 h-4 md:w-6 md:h-6" />
                </a>
            </div>
            <!-- Left image -->
            <div class="absolute left-0 -top-40 transform -translate-y-1/2 animate-float-right">
                <img :src="leftImage" class="w-32 h-32 object-cover md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-lg shadow-md" />
            </div>

            <!-- Right text -->
            <div v-if="isAbout" class="flex items-baseline text-start absolute right-0 -top-[80px] transform -translate-y-1/2 animate-float-left z-40">
                <h1 class="font-inter text-7xl font-bold md:text-8xl tracking-wider">283700m<sup>2</sup></h1>
                <p class="font-inter font-semibold text-4xl md:text-5xl tracking-wider uppercase">{{ $t('subtitles.square') }}</p>
            </div>

            <!-- Center text -->
            <div class="flex items-baseline space-x-10 text-start animate-float-right z-40">
                <h1 class="font-inter text-8xl font-bold md:text-9xl tracking-wider">350</h1>
                <p class="font-inter font-semibold text-4xl md:text-5xl tracking-wider uppercase">{{ $t('subtitles.shop') }}</p>
            </div>

            <!-- Right image -->
            <div class="absolute right-0 -top-20 transform -translate-y-1/2 animate-float-left">
                <img :src="rightImage" class="w-32 h-32 object-cover md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-lg shadow-md" />
            </div>
        </div>

        <!-- Second Row with 120 KAFE & RESTORAN -->
        <div class="relative flex items-center justify-center mt-16">
            <!-- Left image -->
            <div class="absolute left-0 bottom-10 transform translate-y-1/2 animate-float-right"
                style="animation-delay: 0.5s">
                <img :src="bottomCenterImage" class="w-24 h-24 object-cover md:w-32 md:h-32 lg:w-[150px] rounded-lg shadow-md" />
            </div>

            <!-- Center text -->
            <div class="flex items-baseline space-x-10 text-start animate-float-left  z-40">
                <h1 class="font-inter text-8xl font-bold md:text-9xl tracking-wider">120</h1>
                <p class="font-inter text-4xl md:text-5xl tracking-wider uppercase">{{ $t('subtitles.cafe') }}</p>
            </div>

            <!-- Bottom center image -->
            <div class="absolute -bottom-[150px] left-1/4 transform translate-y-1/4 animate-float-left"
                style="animation-delay: 1s">
                <img :src="bottomLeftImage" class="w-24 h-24 object-cover md:w-32 md:h-32 lg:w-40 lg:h-40 shadow-md" />
            </div>

            <!-- Right image -->
            <div class="absolute right-0 bottom-0 transform translate-y-1/2 animate-float-right"
                style="animation-delay: 1.5s">
                <img :src="bottomRightImage" class="w-24 h-24 object-cover md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-lg shadow-md" />
            </div>
        </div>
    </div>
</template>

<script>
import InstagramIcon from './icons/instagram.vue';
import TikTokIcon from './icons/tiktok.vue';
import XIcon from './icons/x.vue';
import FacebookIcon from './icons/facebook.vue';
export default {
    components: {
        InstagramIcon,
        TikTokIcon,
        XIcon,
        FacebookIcon
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