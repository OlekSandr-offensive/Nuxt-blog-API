<template>
  <div class="container">
    <!-- Comments Section -->
    <div class="p-4 mb-3 bg-light rounded" v-if="comments?.length !== 0">
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
    <div v-else>No found</div>
  </div>
</template>

<script setup>
const { data: comments } = await useFetch(
  "https://62fe137ba85c52ee482f275b.mockapi.io/api/v1/comments",
);
</script>
