<template>
  <div class="constrained bg-grey-2">
    <QLayout view="hHR lpr lfr">
      <!--// Header //-->
      <QHeader bordered class="bg-white text-primary">
        <QToolbar>
          <QBtn
            class="q-mr-sm"
            dense
            flat
            icon="mdi-menu"
            round
            @click="leftDrawerOpen = !leftDrawerOpen"
          />
          <QToolbarTitle>Vue3 + Vite + Quasar</QToolbarTitle>
        </QToolbar>
      </QHeader>

      <!--// Left drawer //-->
      <QDrawer
        v-model="leftDrawerOpen"
        content-class="bg-white"
        show-if-above
        :width="320"
        @before-hide="leftDrawerOpen = false"
      >
        Left Menu
      </QDrawer>

      <!--// Main content //-->
      <QPageContainer class="bg-grey-2">
        <router-view />
      </QPageContainer>
    </QLayout>
  </div>
</template>

<script setup lang="ts">
  import { ref } from "vue";

  const leftDrawerOpen = ref(true);
</script>

<style type="text/css">
  .constrained {
    width: 100%;
    height: 100%;
  }

  .constrained .q-layout,
  .constrained .q-header,
  .constrained .q-footer {
    margin: 0 auto;
    /* max-width: 1245px !important; */
  }

  .nav-btn {
    min-width: 90px;
  }
</style>
