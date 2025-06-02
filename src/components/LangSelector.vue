<template>
  <div class="relative">
    <!-- Language Button -->
    <button @click="toggleDropdown" class="flex items-center space-x-2 focus:outline-none">
      <LangIcon :color="color" />
      <span class="font-inter font-medium text-sm lg:text-base uppercase">{{ currentLang }}</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" :class="{ 'transform rotate-180': isOpen }" fill="none"
        viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>

    <!-- Dropdown Menu -->
    <div v-if="isOpen" class="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg py-2 z-50">
      <button v-for="lang in languages" :key="lang.code" @click="selectLanguage(lang.code)" 
        v-show="lang.code !== currentLang"
        class="w-full px-4 py-2 text-left hover:bg-gray-100 transition-colors flex items-center space-x-2 text-black">
        <span class="font-inter font-medium text-sm">{{ lang.name }}</span>
      </button>
    </div>
  </div>
</template>

<script>
import LangIcon from './icons/lang.vue';

export default {
  name: 'LangSelector',
  components: {
    LangIcon
  },
  props: {
    color: {
      type: String,
      default: '#000'
    }
  },
  data() {
    return {
      isOpen: false,
      currentLang: 'TK',
      languages: [
        { code: 'TK', name: 'Türkmen' },
        { code: 'EN', name: 'English' },
        { code: 'RU', name: 'Русский' },
        // { code: 'TR', name: 'Türkçe' }
      ]
    }
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
    selectLanguage(code) {
      this.currentLang = code;
      this.isOpen = false;
      this.$i18n.locale = code;
      localStorage.setItem('selectedLanguage', code);
      this.$emit('language-changed', code);
    }
  },
  mounted() {
    const savedLang = localStorage.getItem('selectedLanguage');
    if (savedLang) {
      this.currentLang = savedLang;
      this.$i18n.locale = savedLang;
    }
    
    document.addEventListener('click', (e) => {
      if (!this.$el.contains(e.target)) {
        this.isOpen = false;
      }
    });
  },
  beforeUnmount() {
    document.removeEventListener('click', this.closeDropdown);
  }
}
</script> 