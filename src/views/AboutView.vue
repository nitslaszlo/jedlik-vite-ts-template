<script setup lang="ts">
import { VContainer, VBtn, VAlert } from "vuetify/components";
import { useI18n } from "vue-i18n";
let { t } = useI18n({
  inheritLocale: true,
  useScope: "global", // Change to "local" if you want to add <i18n></i18n> locally
});
</script>

<template>
  <v-container class="page text-center">
    <img src="/src/assets/Jedlik.png" />
    <h1>{{ t("aboutMsg") }}</h1>

    <v-btn color="jedlikBlue" to="/" class="ma-3">{{ t("backToHome") }}</v-btn>

    <h1>{{ t("colorsOfTheme") }}</h1>
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
