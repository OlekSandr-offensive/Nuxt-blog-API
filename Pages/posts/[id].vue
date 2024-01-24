<template>
  <div class="container">
    <div class="spinner-border text-primary" role="status" v-if="pending">
      <span class="visually-hidden">Loading...</span>
    </div>
    <button @click="$router.back()" class="btn btn-primary btn-sm">
      Go back
    </button>
    <article class="blog-post" v-if="posts?.length !== 0">
      <h2 class="blog-post-title mb-1">{{ posts.title }}</h2>
      <p class="blog-post-meta">
        {{ posts.createdAt.slice(0, -5).split("T").join(" ") }}
      </p>
      <p>
        <!-- Content of the article -->
        {{ posts.content }}
      </p>

      <!-- Image -->
      <img v-bind:src="posts.image" alt="Article Image" />
      <hr />
    </article>
    <div v-else>No found</div>
    <!-- Comments Section -->
    <TheComments />
  </div>
</template>

<script setup lang="js">
const { id } = useRoute().params
const url = 'https://62fe137ba85c52ee482f275b.mockapi.io/api/v1/posts/' + id;

const { pending, data: posts } = await useFetch(url, { key: id });

if (!posts.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found',
    fatal: true
  })
}
</script>
