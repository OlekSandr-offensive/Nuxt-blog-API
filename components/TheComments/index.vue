<template>
  <div class="container">
    <!-- Comments Section -->
    <div class="p-4 mb-3 bg-light rounded">
      <h3 class="fst-italic">Comments</h3>

      <!-- Single Comment -->
      <div class="comment" v-for="comment of comments" v-bind:key="comment.id">
        <img v-bind:src="comment.avatar" alt="User Avatar" />
        <div class="comment-details">
          <p>
            <strong>{{ comment.name }}</strong>
          </p>
          <p class="blog-post-meta">
            {{ comment.createdAt.slice(0, -5).split("T").join(" ") }}
          </p>
          <p>
            {{ comment.comment }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const endpoint = "comments";
const { data: comments } = await useMyFetch(endpoint);
</script>
