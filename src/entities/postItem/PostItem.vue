<template>
  <div class="post">
    <div class="post__info">
      <p>{{ post.id }}</p>
      <div class="post__info-elem">
        <p><strong>Название:</strong> {{ post.title }}</p>
        <p><strong>Описание:</strong> {{ post.body }}</p>
      </div>
    </div>
    <div class="post__button" @click="removePost(post)">
    
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePostsStore } from '@/shered/store/posts';

defineProps({
  post: {
    type: Object,
    required: true,
  }
})

const postsStore = usePostsStore();
const { removePost } = postsStore;
</script>

<style src="./PostItem.style.scss" lang="scss" scoped></style>