<template>
    <router-link :to="`/shop/detail/${id}`" class="h-[300px] sm:h-[320px] md:h-[350px] px-4 md:px-6 py-4 sm:py-5 md:py-6 border border-arkac-gray-400 rounded-2xl flex flex-col sm:items-start items-center justify-between space-y-0 sm:space-y-8">
        <div class="flex space-x-2">
            <span class="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-arkac-blue-300 text-arkac-blue-200 rounded-md">
                {{ floor }}-{{ $t('common.floor').toLowerCase() }}
            </span>
            <span class="px-2 sm:px-3 py-1 text-xs sm:text-sm border border-blue-400 text-arkac-blue-200 rounded-md flex items-center">
                360°
                <span class="ml-1 sm:ml-2">
                    <img src="/svgs/gradus.svg" class="w-3 h-3 sm:w-4 sm:h-4">
                </span>
            </span>
        </div>
        <div class="self-center flex items-center justify-center w-full h-40 pr-4">
            <img :src="image" alt="Logo" class="w-full h-full object-cover rounded-md" />
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