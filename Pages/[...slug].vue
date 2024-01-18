<template>
  <div class="container">
    <div class="card mx-auto bottom-50 text-center" style="width: 18rem">
      <h2 class="card-title">Ooops.</h2>
      <p>Page Not Found</p>
      <button @click="handleError" class="btn btn-primary btn-sm">
        Go back
      </button>
    </div>
  </div>
</template>

<script setup lang="js">

const handleError = () => clearError({ redirect: "/" });
</script>
