<template>
    <div class="flex flex-col space-y-2 bg-arkac-gray-600 rounded-lg">
        <div class="w-full h-[250px] rounded-lg pb-4">
            <img class="w-full h-full object-contain rounded-lg" :src="img">
        </div>
        <div class="px-4 flex flex-col space-y-2 pb-4">
            <h4 class="font-inter font-semibold text-lg">{{ title }}</h4>
            <p class="font-inter font-medium text-sm text-arkac-gray-100">{{ category }}</p>
            <p class="font-inter font-medium text-sm text-arkac-gray-100">{{ time }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CinemaCard',
    props: {
        img: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        category: {
            type: String,
            required: true
        },
        time: {
            type: String,
            required: true
        }
    }
}
</script>