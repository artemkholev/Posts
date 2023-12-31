<template>
  <div class="breadcrumbs-wrapper">
    <div :key="index" v-for="(breadcrumb, index) in breadcrumbs" class="breadcrumbs">
      <router-link v-if="breadcrumb.link" :to="{ path: breadcrumb.link, query: $route.query }">
        {{ breadcrumb.title + '/' }}
      </router-link>
      <p v-else>{{ breadcrumb.title }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IBreadcrumb } from '../../../../router.d.ts';
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const breadcrumbs = ref<IBreadcrumb[]>([]);

// breadcrumbs.value = route.meta.breadcrumb(route);

// watch(route, (newRoute) => {
//   breadcrumbs.value = newRoute.meta.breadcrumb(route);
// });

defineOptions({
  name: 'breadcrumb-elem',
})
</script>

<style src="./UBreadcrumb.style.scss" lang="scss" scoped></style>