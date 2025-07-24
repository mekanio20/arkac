<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-white">
    <h2 class="text-2xl font-medium text-arkac-blue-200">{{ $t('common.loading') }}</h2>
    <!-- <div class="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div> -->
  </div>
</template>

<script>
export default {
  name: 'LoadingSpinner'
}
</script> 