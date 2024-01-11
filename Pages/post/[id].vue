<template>
  <div class="container">
    <div class="spinner-border text-primary" role="status" v-if="pending">
      <span class="visually-hidden">Loading...</span>
    </div>
    <button @click="$router.back()" class="btn btn-primary btn-sm">
      Go back
    </button>
    <article class="blog-post" v-if="posts?.length !== 0">
      <h2 class="blog-post-title mb-1">{{ post.title }}</h2>
      <p class="blog-post-meta">
        {{ post.createdAt.slice(0, -5).split("T").join(" ") }}
      </p>
      <p>
        <!-- Content of the article -->
        {{ post.content }}
      </p>

      <!-- Image -->
      <img v-bind:src="post.image" alt="Article Image" />
      <hr />
    </article>
    <div v-else>No found</div>
    <!-- Comments Section -->
    <TheComments />
  </div>
</template>

<script setup lang="js">
const { id } = useRoute().params
const { data: posts } = useNuxtData('posts')
const { data: post,  pending } = await useMyFetch(`/posts/${id}`, {
  key: `post-${id}`,
  default() {
    // Find the individual post from the cache and set it as the default value.
    for (let i = 0; i < posts.length; i++){
      posts[i].find(post => post.id === id)
    }
    return
  }
})
</script>
