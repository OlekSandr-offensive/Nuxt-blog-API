<script setup lang="js">
defineProps(['error']);


const handleError = () => clearError({ redirect: "/" });
</script>

<template>
  <div class="container">
    <div class="card mx-auto bottom-50 text-center" style="width: 18rem">
      <h2 class="card-title">{{ error.statusCode }}</h2>
      <p>Ooops.</p>
      <p>{{ error.statusMessage }}</p>
      <button @click="handleError" class="btn btn-primary btn-sm">
        Go back
      </button>
    </div>
  </div>
</template>
