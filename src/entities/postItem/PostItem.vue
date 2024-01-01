<template>
  <div 
    class="post" 
    @mousedown.left="$router.push({
      name: PathNames.POST,
      params: {
        id: post.id
      },
      query: $route.query
    })"
    @mousedown.right="removePost(post)"
  >
    <div class="post__info">
      <p>{{ post.id }}</p>
      <div class="post__info-elem">
        <p><strong>Название:</strong> {{ post.title }}</p>
        <p><strong>Описание:</strong> {{ post.body }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePostsStore } from '@/shered/store/posts';
import { PathNames } from '@/shered/constants/route.constants';

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