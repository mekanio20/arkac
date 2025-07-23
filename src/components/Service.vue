<template>
    <div class="container">
        <div class="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
            <h2 class="arkac-title sm:max-w-[600px] sm:w-auto text-center sm:text-left">
                {{ $t('titles.allService') }} <img
                    class="w-[100px] sm:w-[125px] h-[35px] sm:h-[46px] object-cover inline-block"
                    src="/imgs/arkac-3.webp">
                {{ $t('titles.shopTitle') }}
            </h2>
            <div class="sm:flex hidden items-center justify-center relative w-16 h-16 sm:w-auto sm:h-auto">
                <ArkacLoopIcon class="slow-rotate w-12 h-12 sm:w-auto sm:h-auto" />
                <StarIcon class="absolute left-1/2 -translate-x-1/2 w-6 h-6 sm:w-auto sm:h-auto" />
            </div>
        </div>
        <div class="py-10 sm:py-16 md:py-20">
            <!-- First Row -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 pb-4 sm:pb-8">
                <router-link to="/cafes"
                    class="w-full h-[200px] sm:h-[300px] rounded-lg aspect-square md:aspect-auto relative overflow-hidden group transition-all duration-300">
                    <img class="w-full h-full object-cover rounded-lg transition-transform duration-500 group-hover:scale-105 cursor-pointer"
                        src="/imgs/cafes.webp">
                    <div class="absolute inset-0 bg-black bg-opacity-40 transition duration-300 rounded-lg"></div>
                    <div class="absolute inset-0 flex items-center justify-center rounded-lg">
                        <span
                            class="text-white text-xl font-semibold drop-shadow-md group-hover:scale-105 transition-transform duration-300">
                            {{ $t('nav.cafes') }}
                        </span>
                    </div>
                </router-link>
                <router-link to="/films"
                    class="w-full h-[200px] sm:h-[300px] rounded-lg aspect-square md:aspect-auto relative overflow-hidden group transition-all duration-300">
                    <img class="w-full h-full object-cover rounded-lg transition-transform duration-500 group-hover:scale-105 cursor-pointer"
                        src="/imgs/cinema.webp">
                    <div class="absolute inset-0 bg-black bg-opacity-40 transition duration-300 rounded-lg"></div>
                    <div class="absolute inset-0 flex items-center justify-center rounded-lg">
                        <span
                            class="text-white text-xl font-semibold drop-shadow-md group-hover:scale-105 transition-transform duration-300">
                            {{ $t('nav.cinema') }}
                        </span>
                    </div>
                </router-link>
                <router-link to="/shops?category=4"
                    class="w-full h-[200px] sm:h-[300px] rounded-lg aspect-square md:aspect-auto relative overflow-hidden group transition-all duration-300">
                    <img class="w-full h-full object-cover rounded-lg transition-transform duration-500 group-hover:scale-105 cursor-pointer"
                        src="/imgs/home.webp">
                    <div class="absolute inset-0 bg-black bg-opacity-40 transition duration-300 rounded-lg"></div>
                    <div class="absolute inset-0 flex items-center justify-center rounded-lg">
                        <span
                            class="text-white text-xl font-semibold drop-shadow-md group-hover:scale-105 transition-transform duration-300">
                            {{ $t('categories.furniture') }}
                        </span>
                    </div>
                </router-link>
                <router-link to="/shops?category=9"
                    class="w-full h-[200px] sm:h-[300px] rounded-lg aspect-square md:aspect-auto relative overflow-hidden group transition-all duration-300">
                    <img class="w-full h-full object-cover rounded-lg transition-transform duration-500 group-hover:scale-105 cursor-pointer"
                        src="/imgs/fashion.webp">
                    <div class="absolute inset-0 bg-black bg-opacity-40 transition duration-300 rounded-lg"></div>
                    <div class="absolute inset-0 flex items-center justify-center rounded-lg">
                        <span
                            class="text-white text-xl font-semibold drop-shadow-md group-hover:scale-105 transition-transform duration-300">
                            {{ $t('categories.technica') }}
                        </span>
                    </div>
                </router-link>
            </div>
            <!-- Second Row -->
            <div class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8">
                <router-link to="/shops?category=8"
                    class="w-full h-[200px] sm:h-[300px] rounded-lg aspect-square md:aspect-auto relative overflow-hidden group transition-all duration-300">
                    <img class="w-full h-full object-cover rounded-lg transition-transform duration-500 group-hover:scale-105 cursor-pointer"
                        src="/imgs/beauty.webp">
                    <div class="absolute inset-0 bg-black bg-opacity-40 transition duration-300 rounded-lg"></div>
                    <div class="absolute inset-0 flex items-center justify-center rounded-lg">
                        <span
                            class="text-white text-xl font-semibold drop-shadow-md group-hover:scale-105 transition-transform duration-300">
                            {{ $t('categories.beauty') }}
                        </span>
                    </div>
                </router-link>
                <router-link to="/shops?category=5"
                    class="w-full h-[200px] sm:h-[300px] rounded-lg aspect-square md:aspect-auto relative overflow-hidden group transition-all duration-300">
                    <img class="w-full h-full object-cover rounded-lg transition-transform duration-500 group-hover:scale-105 cursor-pointer"
                        src="/imgs/clothes.webp">
                    <div class="absolute inset-0 bg-black bg-opacity-40 transition duration-300 rounded-lg"></div>
                    <div class="absolute inset-0 flex items-center justify-center rounded-lg">
                        <span
                            class="text-white text-xl font-semibold drop-shadow-md group-hover:scale-105 transition-transform duration-300">
                            {{ $t('categories.clothes') }}
                        </span>
                    </div>
                </router-link>
                <router-link to="/shops?category=5"
                    class="w-full h-[200px] sm:h-[300px] rounded-lg aspect-square md:aspect-auto relative overflow-hidden group transition-all duration-300">
                    <img class="w-full h-full object-cover rounded-lg transition-transform duration-500 group-hover:scale-105 cursor-pointer"
                        src="/imgs/child.webp">
                    <div class="absolute inset-0 bg-black bg-opacity-40 transition duration-300 rounded-lg"></div>
                    <div class="absolute inset-0 flex items-center justify-center rounded-lg">
                        <span
                            class="text-white text-xl font-semibold drop-shadow-md group-hover:scale-105 transition-transform duration-300">
                            {{ $t('categories.childClothes') }}
                        </span>
                    </div>
                </router-link>
                <router-link to="/shops?category=5"
                    class="w-full h-[200px] sm:h-[300px] rounded-lg aspect-square md:aspect-auto relative overflow-hidden group transition-all duration-300">
                    <img class="w-full h-full object-cover rounded-lg transition-transform duration-500 group-hover:scale-105 cursor-pointer"
                        src="/imgs/girl.webp">
                    <div class="absolute inset-0 bg-black bg-opacity-40 transition duration-300 rounded-lg"></div>
                    <div class="absolute inset-0 flex items-center justify-center rounded-lg">
                        <span
                            class="text-white text-xl font-semibold drop-shadow-md group-hover:scale-105 transition-transform duration-300">
                            {{ $t('categories.girlClothes') }}
                        </span>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import ArkacLoopIcon from './icons/arkac-loop.vue';
import StarIcon from './icons/star.vue';
export default {
    components: {
        ArkacLoopIcon,
        StarIcon,
    },
    data() {
        return {
        }
    }
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