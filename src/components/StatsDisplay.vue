<template>
    <div class="w-full pt-40 pb-72 overflow-hidden">
        <!--  -->
        <div class="relative flex items-center justify-center mb-8 pt-20">
            <!-- Center Social Icons -->
            <div class="absolute -top-[150px] left-1/2 transform -translate-x-1/2 flex justify-center space-x-6 z-50">
                <!-- Instagram Icon -->
                <a href="#" class="text-black transition-transform duration-300 hover:scale-110 animate-pulse-text"
                    style="animation-delay: 0.1s" aria-label="Instagram">
                    <InstagramIcon />
                </a>

                <!-- TikTok Icon -->
                <a href="#" class="text-black transition-transform duration-300 hover:scale-110 animate-pulse-text"
                    style="animation-delay: 0.2s" aria-label="TikTok">
                    <TikTokIcon />
                </a>

                <!-- X Icon -->
                <a href="#" class="text-black transition-transform duration-300 hover:scale-110 animate-pulse-text"
                    style="animation-delay: 0.3s" aria-label="Twitter/X">
                    <XIcon />
                </a>

                <!-- Facebook Icon -->
                <a href="#" class="text-black transition-transform duration-300 hover:scale-110 animate-pulse-text"
                    style="animation-delay: 0.4s" aria-label="Facebook">
                    <FacebookIcon />
                </a>
            </div>
            <!-- Left image -->
            <div class="absolute left-0 -top-40 transform -translate-y-1/2 animate-float-right">
                <img :src="leftImage" class="rounded-lg shadow-md" />
            </div>

            <!-- Right text -->
            <div v-if="isAbout" class="flex items-baseline text-start absolute right-0 -top-[80px] transform -translate-y-1/2 animate-float-left z-40">
                <h1 class="font-inter text-7xl font-bold md:text-8xl tracking-wider">283700m<sup>2</sup></h1>
                <p class="font-inter font-semibold text-4xl md:text-5xl tracking-wider">MEÝDANY</p>
            </div>

            <!-- Center text -->
            <div class="flex items-baseline space-x-10 text-start animate-float-right z-40">
                <h1 class="font-inter text-8xl font-bold md:text-9xl tracking-wider">350</h1>
                <p class="font-inter font-semibold text-4xl md:text-5xl tracking-wider">DÜKAN</p>
            </div>

            <!-- Right image -->
            <div class="absolute right-0 -top-20 transform -translate-y-1/2 animate-float-left">
                <img :src="rightImage" class="rounded-lg shadow-md" />
            </div>
        </div>

        <!-- Second Row with 120 KAFE & RESTORAN -->
        <div class="relative flex items-center justify-center mt-16">
            <!-- Left image -->
            <div class="absolute left-0 bottom-10 transform translate-y-1/2 animate-float-right"
                style="animation-delay: 0.5s">
                <img :src="bottomCenterImage" class=" w-[150px] rounded-lg shadow-md" />
            </div>

            <!-- Center text -->
            <div class="flex items-baseline space-x-10 text-start animate-float-left  z-40">
                <h1 class="font-inter text-8xl font-bold md:text-9xl tracking-wider">120</h1>
                <p class="font-inter text-4xl md:text-5xl tracking-wider">KAFE & RESTORAN</p>
            </div>

            <!-- Bottom center image -->
            <div class="absolute -bottom-[150px] left-1/4 transform translate-y-1/4 animate-float-left"
                style="animation-delay: 1s">
                <img :src="bottomLeftImage" class="shadow-md" />
            </div>

            <!-- Right image -->
            <div class="absolute right-0 bottom-0 transform translate-y-1/2 animate-float-right"
                style="animation-delay: 1.5s">
                <img :src="bottomRightImage" class="rounded-lg shadow-md" />
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