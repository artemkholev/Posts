<template>
  <component :is="$route.meta.layout || 'div'" v-cloak>
    <router-view />
  </component>
</template>

<style src="./index.scss" lang="scss" scoped></style>