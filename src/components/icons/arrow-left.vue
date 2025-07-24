<template>
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.75 21.25L21.25 8.75" :stroke="color" stroke-width="1.8" stroke-linecap="round"
            stroke-linejoin="round" />
        <path d="M21.25 21.25V8.75H8.75" :stroke="color" stroke-width="1.8" stroke-linecap="round"
            stroke-linejoin="round" />
    </svg>
</template>

<script>
export default {
    props: {
        size: {
            type: Number,
            default: 30
        },
        color: {
            type: String,
            default: 'black'
        }
    }
}
</script>