<template>
    <div class="flex flex-col space-y-3">
        <div class="w-full h-[250px] rounded-lg">
            <img class="w-full h-full object-cover rounded-lg" :src="img">
        </div>
        <h4 class="font-inter font-semibold text-lg">{{ title }}</h4>
        <p class="font-inter font-medium text-sm text-arkac-gray-100">{{ category }}</p>
        <p class="font-inter font-medium text-sm text-arkac-gray-100">{{ time }}</p>
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