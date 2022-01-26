<script setup lang="ts">
  import { computed, ref } from "vue";
  import {
    VBtn,
    VCard,
    VCardActions,
    VCardTitle,
    VDialog,
    VRow,
    VSpacer,
    VTextarea,
    VTextField,
  } from "vuetify/components";

  import { useStore } from "vuex";
  const store = useStore();

  const props = defineProps({
    modelValue: {
      type: Boolean,
      default: false,
      required: true,
    },
    post: {
      type: Object,
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
  const post = computed(() => props.post);
  const title = ref(post.value.title);
  const content = ref(post.value.content);

  function deletePost() {
    store.dispatch("posts/deletePostById", {
      id: post.value._id,
    });
    show.value = false;
  }

  function savePost() {
    post.value.title = title;
    post.value.content = content;
    show.value = false;
  }
</script>

<template>
  <v-row justify="center">
    <v-dialog v-model="show" persistent>
      <v-card>
        <v-card-title class="text-h5"> Post: {{ post._id }} </v-card-title>
        <!-- <v-card-text>Post: {{ props.post }}</v-card-text> -->
        <v-text-field v-model="title" class="mb-1" label="Title"></v-text-field>
        <v-textarea v-model="content" filled label="Content" rows="6" shaped></v-textarea>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" @click="savePost"> Save </v-btn>
          <v-btn color="red darken-1" @click="deletePost"> Delete </v-btn>
          <v-btn color="blue darken-1" @click="show = false"> Cancel </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
