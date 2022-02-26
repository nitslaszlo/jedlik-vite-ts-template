<script setup lang="ts">
  import { ref } from "vue";
  const version = ref(5);
</script>
<template>
  <div class="d-flex flex-column align-items-center justify-content-center" style="height: 90vh">
    <h1 class="display-1">Start Page</h1>
    <p>with Bootstrap {{ version }}</p>
  </div>
</template>
