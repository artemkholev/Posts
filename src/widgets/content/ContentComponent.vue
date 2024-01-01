<template>
  <sidebar-elem>
    <div :class="sidebarClasses">
      <h1 :style="{color: 'greenyellow'}">Menu</h1>
        <ul 
          class="sidebar-panel-nav"
          @click="changeSidebarPanel" 
        >
          <li :style="{margin: '15px'}">
            <router-link 
              to="/"
              :style="{color: 'greenyellow', textDecoration: 'none'}"
            >
              Главная
            </router-link>
          </li>
          <li :style="{margin: '15px'}">
            <router-link 
              to="/posts"
              :style="{color: 'greenyellow', textDecoration: 'none'}"
            >
              Посты
            </router-link>
          </li>
        </ul>
    </div>
  </sidebar-elem>

  <div :class="contentClasses">
    <breadcrumb-elem/>
      <!-- {{ $route.meta.title }} -->
      <!-- <v-divider v-if="$route.meta.title"></v-divider> -->
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { computed } from '@vue/reactivity';
import { storeToRefs } from 'pinia';
import { useThemeStore } from '@/shered/store/theme';
import router from '@/pages/index';
import { useSidebarStore } from '@/shered/store/sidebar';

const themeStore = useThemeStore();
const { isDarkTheme } = storeToRefs(themeStore);

const contentClasses = computed(() => {
  return { content: true, ['dark-content']: isDarkTheme.value };
});

const sidebarClasses = computed(() => {
  return { sidebar: true, ['dark-sidebar']: isDarkTheme.value };
});

const sidebarStore = useSidebarStore();
const { changeSidebarPanel  } = sidebarStore;
</script>

<style src="./ContentComponent.style.scss" lang="scss" scoped />