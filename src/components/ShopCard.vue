<template>
    <router-link :to="`/shop/detail/${id}`" class="h-[330px] px-8 py-6 border border-arkac-gray-400 rounded-2xl flex flex-col justify-between space-y-4">
        <div class="flex space-x-2">
            <span class="px-3 py-1 text-sm bg-arkac-blue-300 text-arkac-blue-200 rounded-md">
                {{ floor }}
            </span>
            <span class="px-3 py-1 text-sm border border-blue-400 text-arkac-blue-200 rounded-md flex items-center">
                360°
                <span class="ml-2">
                    <img src="/svgs/gradus.svg">
                </span>
            </span>
        </div>
        <div class="flex items-center justify-center">
            <img :src="image" alt="Logo" class="w-24 h-24 rounded-full object-cover" />
        </div>

        <div>
            <h2 class="text-lg font-semibold">{{ name }}</h2>
            <p class="text-gray-400 text-sm mt-1">{{ category }}</p>
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
            type: String,
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