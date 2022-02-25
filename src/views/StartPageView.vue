<script setup lang="ts">
  import { ref } from "vue";
  const version = ref(5);
</script>
<template>
  <div class="d-flex flex-column align-items-center justify-center" style="height: 100vh">
    <h1 class="display-1">{{ $t("startPage") }}</h1>
    <p>with Bootstrap {{ version }}</p>
  </div>
</template>
