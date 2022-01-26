<script setup lang="ts">
  import {
    VBtn,
    VCard,
    VCardActions,
    VCardText,
    VCardTitle,
    VDialog,
    VRow,
    VSpacer,
  } from "vuetify/components";
  import { computed } from "vue";
  const props = defineProps({
    modelValue: {
      type: Boolean,
      default: false,
      required: true,
    },
    postid: {
      type: String,
      required: true,
    },
  });
  const emit = defineEmits(["update:modelValue"]);

  const show = computed({
    get() {
      return props.modelValue;
    },
    set(value: boolean) {
      return emit("update:modelValue", value);
    },
  });
</script>

<template>
  <v-row justify="center">
    <v-dialog v-model="show" persistent>
      <v-card>
        <v-card-title class="text-h5"> Editing dialog </v-card-title>
        <v-card-text>Post id: {{ props.postid }}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" @click="show = false"> Save </v-btn>
          <v-btn color="green darken-1" @click="show = false"> Cancel </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
