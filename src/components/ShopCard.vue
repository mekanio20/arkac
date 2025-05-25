<template>
    <router-link :to="`/shop/detail/${id}`" class="h-[280px] sm:h-[300px] md:h-[330px] px-4 md:px-6 py-4 sm:py-5 md:py-6 border border-arkac-gray-400 rounded-2xl flex flex-col sm:items-start items-center justify-between space-y-0 sm:space-y-4">
        <div class="flex space-x-2">
            <span class="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-arkac-blue-300 text-arkac-blue-200 rounded-md">
                {{ floor }}-gat
            </span>
            <span class="px-2 sm:px-3 py-1 text-xs sm:text-sm border border-blue-400 text-arkac-blue-200 rounded-md flex items-center">
                360°
                <span class="ml-1 sm:ml-2">
                    <img src="/svgs/gradus.svg" class="w-3 h-3 sm:w-4 sm:h-4">
                </span>
            </span>
        </div>
        <div class="flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24">
            <img :src="image" alt="Logo" class="w-full h-full rounded-full object-contain" />
        </div>

        <div class="sm:text-start text-center">
            <h2 class="text-base sm:text-lg font-semibold">{{ name }}</h2>
            <p class="text-gray-400 text-xs sm:text-sm mt-1">{{ category }}</p>
        </div>
    </router-link>
</template>

<script>
export default {
    props: {
        id: {
            type: Number,
            required: true
        },
        floor: {
            type: Number,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        name: {
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