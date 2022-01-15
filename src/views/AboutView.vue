<script setup lang="ts">
import { VContainer, VBtn, VAlert } from "vuetify/components";
</script>

<template>
  <v-container class="page text-center">
    <img src="/src/assets/Jedlik.png" />
    <h1>This is about us!</h1>

    <v-btn color="jedlikBlue" to="/" class="ma-3"> Back to home </v-btn>

    <h1>Colors of light theme</h1>
    <v-alert color="primary">primary</v-alert>
    <v-alert color="background">background</v-alert>
    <v-alert color="error">error</v-alert>
    <v-alert color="danger">danger</v-alert>
    <v-alert color="info">info</v-alert>
    <v-alert color="secondary">secondary</v-alert>
    <v-alert color="success">success</v-alert>
    <v-alert color="surface">surface</v-alert>
    <v-alert color="warning">warning</v-alert>
    <v-alert color="jedlikRed">jedlikRed</v-alert>
    <v-alert color="jedlikBlue">jedlikBlue</v-alert>
  </v-container>
</template>

<style scoped>
h1 {
  color: gray;
}
img {
  height: 200px;
}
</style>
