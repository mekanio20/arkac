<template>
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_62_4725)">
            <path
                d="M14 6.66667C14 11.3333 8 15.3333 8 15.3333C8 15.3333 2 11.3333 2 6.66667C2 5.07537 2.63214 3.54924 3.75736 2.42403C4.88258 1.29881 6.4087 0.666666 8 0.666666C9.5913 0.666666 11.1174 1.29881 12.2426 2.42403C13.3679 3.54924 14 5.07537 14 6.66667Z"
                :stroke="color" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path
                d="M8 8.66667C9.10457 8.66667 10 7.77124 10 6.66667C10 5.5621 9.10457 4.66667 8 4.66667C6.89543 4.66667 6 5.5621 6 6.66667C6 7.77124 6.89543 8.66667 8 8.66667Z"
                :stroke="color" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </g>
        <defs>
            <clipPath id="clip0_62_4725">
                <rect width="16" height="16" fill="white" />
            </clipPath>
        </defs>
    </svg>
</template>

<script>
export default {
    props: {
        color: {
            type: String,
            default: '#000'
        }
    }
}
</script>