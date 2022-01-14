<script setup lang="ts">
import { VContainer, VAlert } from "vuetify/components";
</script>

<template>
  <v-container class="page text-center">
    <h1 class="text-h4">Home</h1>
    <v-alert color="primary">primary</v-alert>
    <v-alert color="background">background</v-alert>
    <v-alert color="error">error</v-alert>
    <v-alert color="info">info</v-alert>
    <v-alert color="secondary">secondary</v-alert>
    <v-alert color="success">success</v-alert>
    <v-alert color="surface">surface</v-alert>
    <v-alert color="warning">warning</v-alert>
    <v-alert color="mycolor1">mycolor1</v-alert>
  </v-container>
</template>
