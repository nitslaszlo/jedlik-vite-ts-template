<script setup lang="ts">
defineProps({
  msg: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="content">
    <a class="logo-link" href="https://vitejs.dev/">
      <img class="logo" alt="Vite logo" src="./../assets/svg/vite.svg" />
    </a>
    <a class="logo-link" href="https://v3.vuejs.org/">
      <img class="logo" alt="Vue 3 logo" src="./..//assets/svg/vue.svg" />
    </a>
    <a class="logo-link" href="https://www.typescriptlang.org/">
      <img class="logo" alt="TS logo" src="./../assets/svg/ts.svg" />
    </a>
    <a class="logo-link" href="https://eslint.org//">
      <img class="logo" alt="E.S. Lint logo" src="./../assets/svg/eslint.svg" />
    </a>
    <a class="logo-link" href="https://prettier.io/">
      <img
        class="logo"
        alt="Prettier logo"
        src="./../assets/svg/prettier.svg"
      />
    </a>
    <h1>{{ msg }}</h1>
    <h1>Welcome to Vite + Vue 3 + Typescript</h1>
  </div>
</template>

<style scoped>
.content {
  text-align: center;
  margin-top: 60px;
}

.logo {
  height: 56px;
  width: 56px;
}

.logo-link {
  background-color: lightgray;
  border-radius: 50%;
  padding: 8px;
  margin-left: 16px;
}
</style>
