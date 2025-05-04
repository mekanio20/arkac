<template>
    <router-link :to="`/news/detail/${id}`" class="flex flex-col justify-between space-y-4 sm:space-y-6">
        <div class="relative flex items-center justify-center group cursor-pointer">
            <img :src="image" class="w-full h-[200px] sm:h-[250px] md:h-[285px] object-cover rounded-[10px]" />
            <!-- Arrow icon -->
            <div class="absolute top-4 sm:top-5 right-4 sm:right-5">
                <div class="bg-white opacity-75 rounded-full w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] flex items-center justify-center">
                    <ArrowLeft class="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
            </div>
        </div>
        <h3 class="font-inter font-semibold text-base sm:text-lg">
            {{ title }}
        </h3>
        <div class="flex items-center font-inter font-medium text-sm sm:text-base">
            <span class="text-arkac-blue-200">{{ category }}</span>
            <span class="mx-2"> - </span>
            <span class="text-arkac-gray-100">{{ date }}</span>
        </div>
    </router-link>
</template>

<script>
import ArrowLeft from '@/components/icons/arrow-left.vue';
export default {
    components: {
        ArrowLeft
    },
    props: {
        id: {
            type: Number,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        date: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        category: {
            type: String,
            required: true
        }
    }
}
</script>