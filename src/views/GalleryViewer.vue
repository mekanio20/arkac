<template>
  <div class="fixed inset-0 bg-black flex flex-col items-center justify-center z-50">
    <button @click="goBack" class="absolute top-6 left-6 text-white text-3xl">&larr;</button>
    <div class="flex items-center justify-center w-full h-full">
      <button @click="prevImage" class="p-2 absolute left-4"><Prev color="white" v-if="currentIndex > 0" /></button>
      <img :src="currentImage" class="max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-2xl" />
      <button @click="nextImage" class="p-2 absolute right-4"><Next color="white" v-if="currentIndex < slides.length - 1" /></button>
    </div>
    <div class="absolute bottom-8 text-white text-lg pb-2">{{ currentIndex + 1 }} / {{ slides.length }}</div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import Next from '@/components/icons/next.vue';
import Prev from '@/components/icons/prev.vue';

const slides = [
  '/imgs/-1/galery1.webp',
  '/imgs/-1/galery2.webp',
  '/imgs/-1/galery3.webp',
  '/imgs/-1/galery4.webp',
  '/imgs/-1/galery5.webp',
  '/imgs/-1/galery6.webp',
  '/imgs/0/galery1.webp',
  '/imgs/0/galery2.webp',
  '/imgs/0/galery3.webp',
  '/imgs/1/galery1.webp',
  '/imgs/1/galery2.webp',
  '/imgs/1/galery3.webp',
  '/imgs/1/galery4.webp',
  '/imgs/1/galery5.webp',
  '/imgs/1/galery6.webp',
  '/imgs/1/galery7.webp',
  '/imgs/2/galery1.webp',
  '/imgs/2/galery2.webp',
  '/imgs/2/galery3.webp',
  '/imgs/2/galery4.webp',
  '/imgs/2/galery5.webp',
  '/imgs/3/galery1.webp',
  '/imgs/3/galery2.webp',
  '/imgs/3/galery3.webp',
  '/imgs/3/galery4.webp',
  '/imgs/3/galery5.webp',
  '/imgs/3/galery6.webp',
  '/imgs/3/galery7.webp',
  '/imgs/3/galery8.webp',
  '/imgs/3/galery9.webp',
  '/imgs/3/galery10.webp',
  '/imgs/3/galery11.webp'
];

export default {
  components: { Next, Prev },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const currentIndex = ref(Number(route.params.index) || 0);

    const currentImage = computed(() => slides[currentIndex.value]);

    function prevImage() {
      if (currentIndex.value > 0) {
        currentIndex.value--;
      }
    }
    function nextImage() {
      if (currentIndex.value < slides.length - 1) {
        currentIndex.value++;
      }
    }
    function goBack() {
      router.back();
    }

    return { currentImage, prevImage, nextImage, currentIndex, slides, goBack };
  }
}
</script> 