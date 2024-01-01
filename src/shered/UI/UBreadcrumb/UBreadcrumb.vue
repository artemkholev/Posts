<template>
  <div :class="breadcrumbsClasses">
    <div :key="index" v-for="(breadcrumb, index) in breadcrumbs" class="breadcrumbs">
      <router-link v-if="breadcrumb.link" :to="{ path: breadcrumb.link, query: $route.query }">
        {{ breadcrumb.title + '/' }}
      </router-link>
      <p class="lastTitle" v-else>{{ breadcrumb.title }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IBreadcrumb } from '../../../../router.d.ts';
import { computed, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useThemeStore } from '@/shered/store/theme';
import { storeToRefs } from 'pinia';

const themeStore = useThemeStore();
const { isDarkTheme } = storeToRefs(themeStore);
const breadcrumbsClasses = computed(() => {
  return { 'breadcrumbs-wrapper': true, ['dark-breadcrumbs']: isDarkTheme.value };
});

const route = useRoute();

const breadcrumbs = ref<IBreadcrumb[]>([]);

breadcrumbs.value = route.meta.breadcrumb(route);

watch(route, (newRoute) => {
  breadcrumbs.value = newRoute.meta.breadcrumb(route);
});

defineOptions({
  name: 'breadcrumb-elem',
})
</script>

<style src="./UBreadcrumb.style.scss" lang="scss" scoped></style>