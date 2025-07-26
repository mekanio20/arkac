<template>
    <router-link :to="`/gallery-viewer/${index}`" class="h-[300px] sm:h-[350px] md:h-[380px] px-4 md:px-6 py-4 sm:py-5 md:py-6 border border-arkac-gray-400 rounded-2xl flex flex-col sm:items-start items-center justify-between space-y-0 sm:space-y-8">
        <div class="self-center flex items-center justify-center w-full h-full">
            <img :src="image" alt="Logo" class="w-full h-full object-cover rounded-md" />
        </div>
    </router-link>
</template>

<script>
export default {
    props: {
        index: {
            type: Number,
            required: true
        },
        image: {
            type: String,
            required: true
        }
    }
}
</script>