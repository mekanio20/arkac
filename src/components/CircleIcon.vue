<template>
    <div class="circle-icon h-[50px] w-[50px] md:h-[60px] md:w-[60px] p-3 rounded-full bg-white shadow-soft overflow-hidden floating-animation">
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

<style scoped>
.floating-animation {
    animation: float 3s ease-in-out infinite;
}

@keyframes float {
    0% {
        transform: translateY(0px);
    }
    50% {
        transform: translateY(-10px);
    }
    100% {
        transform: translateY(0px);
    }
}
</style>