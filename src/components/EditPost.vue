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
  import ConfirmDialog from "./ConfirmDialog.vue";

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
  const emit = defineEmits(["update:modelValue", "close"]);

  const show = computed({
    get() {
      return props.modelValue;
    },
    set(value: boolean) {
      return emit("update:modelValue", value);
    },
  });
  const post = computed(() => props.post);
  const origTitle = post.value.title;
  const origContent = post.value.content;
  const showConfirm = ref(false);
  const resultConfirm = ref(false);

  function savePost() {
    showConfirm.value = true;
  }

  function cancelPressed() {
    post.value.title = origTitle;
    post.value.content = origContent;
    show.value = false;
    emit("close");
  }

  // function closePressed() {
  //   show.value = false;
  //   emit("close");
  // }

  function confirmSavePost() {
    if (resultConfirm.value) {
      store.dispatch("posts/editPostById", {
        id: post.value._id,
        title: post.value.title,
        content: post.value.content,
      });
      show.value = false;
      emit("close");
    } else {
      showConfirm.value = false;
    }
  }
</script>

<template>
  <v-row justify="center">
    <v-dialog v-model="show" persistent>
      <v-card>
        <v-card-title class="text-h5"> Post: {{ post._id }} </v-card-title>
        <!-- <v-card-text>Post: {{ props.post }}</v-card-text> -->
        <v-text-field v-model="post.title" class="mb-1" label="Title"></v-text-field>
        <v-textarea v-model="post.content" filled label="Content" rows="6" shaped></v-textarea>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" @click="savePost"> Save </v-btn>
          <v-btn color="blue darken-1" @click="cancelPressed"> Cancel </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <ConfirmDialog
      v-model="showConfirm"
      v-model:result="resultConfirm"
      title="Save changes"
      @close="confirmSavePost"
    />
  </v-row>
</template>
