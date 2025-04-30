<template>
    <div class="circle-icon h-[50px] w-[50px] md:h-[60px] md:w-[60px] p-3 rounded-full bg-white shadow-soft overflow-hidden">
        <img :src="imageUrl" :alt="alt" class="h-full w-full object-cover" />
    </div>
</template>

<script>
export default {
    name: 'CircleIcon',
    props: {
        imageUrl: {
            type: String,
            required: true
        },
        alt: {
            type: String,
            default: 'Featured item'
        }
    }
}
</script>