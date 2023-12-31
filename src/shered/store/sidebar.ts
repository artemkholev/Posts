import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useSidebarStore = defineStore('sidebar', () => {
  const isNavOpen = ref<boolean>(false);

  const changeSidebarPanel = () => {
    isNavOpen.value = !isNavOpen.value;
  };

  const isPanelOpen = computed(() => {
    return isNavOpen;
  });
  return { isPanelOpen,  changeSidebarPanel };
});