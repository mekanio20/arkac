<template>
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 25.3332L6.66666 15.9998L16 6.6665" :stroke="color" stroke-width="2.2" stroke-linecap="round"
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