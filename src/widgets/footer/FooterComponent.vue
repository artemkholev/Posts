<template>
  <div :class="footerClasses">
    <div class="footer-info">
      <p>Posts</p>
    </div>
    
    <p class="footer__name-company">© Posts, {{ new Date().getFullYear()  }}</p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import { storeToRefs } from 'pinia';
import { useThemeStore } from '@/shered/store/theme';

const themeStore = useThemeStore();
const { isDarkTheme } = storeToRefs(themeStore);

const footerClasses = computed(() => {
  return { footer: true, ['dark-footer']: isDarkTheme.value };
});
</script>


<style src="./FooterComponent.style.scss" lang="scss" scoped></style>