<script setup lang="ts">
  import JedlikCimer from "/src/assets/Jedlik.png";
</script>

<template>
  <div class="d-flex flex-column align-items-center justify-content-center" style="height: 90vh">
    <h1>About Page</h1>
    <img alt="Jedlik Címer" :src="JedlikCimer" />
  </div>
</template>

<style scoped>
  h1 {
    color: gray;
  }
  img {
    height: 200px;
  }
</style>
