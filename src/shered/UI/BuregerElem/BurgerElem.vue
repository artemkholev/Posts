<template>
  <div id="burger" :class="{ 'active' : isPanelOpen }" @click.prevent="changeSidebarPanel">
    <slot>
      <button type="button" class="burger-button" title="Menu">
        <span class="hidden">Toggle menu</span>
        <span class="burger-bar burger-bar--1" :style="{backgroundColor: isDarkStyle}"></span>
        <span class="burger-bar burger-bar--2" :style="{backgroundColor: isDarkStyle}"></span>
        <span class="burger-bar burger-bar--3" :style="{backgroundColor: isDarkStyle}"></span>
      </button>
    </slot>
  </div>
</template>

<script setup lang="ts">
import { useThemeStore } from '@/shered/store/theme';
import { useSidebarStore } from '@/shered/store/sidebar';
import { computed } from '@vue/reactivity';
import { storeToRefs } from 'pinia';

const sidebarStore = useSidebarStore();
const { isPanelOpen,  changeSidebarPanel  } = sidebarStore;

const themeStore = useThemeStore();
const { isDarkTheme } = storeToRefs(themeStore);

const isDarkStyle = computed(() => {
  return isDarkTheme.value ? 'white' : 'black';
});

defineOptions({
    name: 'burger-elem',
})
</script>

<style src="./BurgerElem.style.scss" lang="scss" scoped></style>