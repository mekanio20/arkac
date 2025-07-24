<template>
    <div class="!w-full !h-full">
        <LoadingSpinner v-if="loading" />
        <RouterView />
    </div>
</template>

<script>
import { RouterView } from 'vue-router'
import LoadingSpinner from './components/LoadingSpinner.vue'
import { ref, onMounted } from 'vue'
import router from './router'

const loading = ref(false)

export default {
    name: "App",
    components: {
        RouterView,
        LoadingSpinner
    },
    setup() {
        onMounted(() => {
            router.beforeEach((to, from, next) => {
                loading.value = true
                next()
            })
            router.afterEach(() => {
                setTimeout(() => { loading.value = false }, 400) // kısa bir gecikme ile daha yumuşak geçiş
            })
        })
        return { loading }
    }
}
</script>

<style></style>