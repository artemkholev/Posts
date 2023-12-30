<template>
  <div class="page_wrapper" >
    <HeaderPage/>
    <ContentPage>
      <slot></slot>
    </ContentPage>
    <FooterPage/>
  </div>
</template>

<script setup lang="ts">
import HeaderPage from '@/widgets/header/HeaderComponent.vue';
import FooterPage from '@/widgets/footer/FooterComponent.vue';
import ContentPage from '@/widgets/content/ContentComponent.vue';
</script>

<style src="./MainLayout.style.scss" lang="scss" scoped></style>