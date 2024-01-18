<template>
  <div class="container">
    <div class="spinner-border text-primary" role="status" v-if="pending">
      <span class="visually-hidden">Loading...</span>
    </div>
    <ul
      style="list-style: none; padding: 0; margin: 0"
      v-if="posts?.length !== 0"
    >
      <li
        class="blog-post-title mb-1"
        v-for="post of posts"
        v-bind:key="post.id"
      >
        <NuxtLink :to="`/post/${post.id}`" class="custom"
          >{{ post.title }}
        </NuxtLink>
      </li>
    </ul>
    <div v-else>No found</div>
  </div>
</template>

<script setup lang="js">

const endpoint = "posts";

const { data: posts, pending} = await useMyFetch(endpoint, {key: 'posts'});
</script>

<style scoped>
.custom {
  text-decoration: none;
  color: #727272;
}
.custom:hover {
  opacity: 0.5;
  color: teal;
}
</style>
