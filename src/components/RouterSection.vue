<template>
    <div class="flex items-center space-x-2 sm:space-x-4">
        <!-- Arrow Left -->
        <svg width="9" height="6" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[9px] h-[6px] sm:w-[11px] sm:h-[7px]">
            <g clip-path="url(#clip0_174_4285)">
                <path
                    d="M-0.00202847 3.49938C0.0023222 3.37168 0.049715 3.24872 0.133112 3.14878L2.79952 0.261235C2.89412 0.169365 3.02103 0.114211 3.15573 0.106422C3.29044 0.098634 3.42339 0.138763 3.52892 0.219062C3.62446 0.32184 3.67678 0.454721 3.67582 0.59212C3.67486 0.729519 3.62069 0.861722 3.52373 0.963275L1.6491 2.99084H10.4999C10.634 3.00116 10.7591 3.0593 10.8503 3.15369C10.9415 3.24808 10.9922 3.37179 10.9922 3.50021C10.9922 3.62863 10.9415 3.75235 10.8503 3.84673C10.7591 3.94112 10.634 3.99926 10.4999 4.00958H1.65083L3.52546 6.03714C3.61567 6.14178 3.66542 6.27286 3.66637 6.40837C3.66731 6.54388 3.6194 6.67558 3.53066 6.78136C3.42576 6.8631 3.29248 6.90414 3.15732 6.89633C3.02216 6.88852 2.89504 6.83241 2.80125 6.73919L0.134845 3.85164C0.043788 3.75521 -0.00518227 3.62917 -0.00202847 3.49938Z"
                    fill="black" />
            </g>
            <defs>
                <clipPath id="clip0_174_4285">
                    <rect width="11" height="7" fill="white" transform="matrix(-1 0 0 1 11 0)" />
                </clipPath>
            </defs>
        </svg>
        <router-link :to="route" class="font-inter font-light text-[10px] sm:text-sm uppercase hover:text-arkac-blue-200 transition-colors duration-300">
            {{ prevRoute }}
        </router-link>
        <span class="font-inter font-light text-[10px] sm:text-sm uppercase">/</span>
        <p class="font-inter font-light text-[10px] sm:text-sm uppercase">
            {{ nextRoute }}
        </p>
    </div>
</template>

<script>
export default {
    props: {
        route: {
            name: String,
            required: true
        },
        prevRoute: {
            type: String,
            required: true
        },
        nextRoute: {
            type: String,
            required: true
        }
    }
}
</script>