<script setup lang="ts">
import { computed, reactive } from "vue";
import { useStore } from "vuex";
import {
  VContainer,
  VBtn,
  VCard,
  VCardTitle,
  VCardText,
  VCardActions,
  VDialog,
  VRow,
  VCol,
  VForm,
  VTextField,
  VSpacer,
  VIcon,
  VProgressLinear,
} from "vuetify/components";

const store = useStore();

const loggedIn = computed(() => store.getters["users/getLoggedIn"]);
const isLoading = computed(() => store.getters["users/getLoading"]);
const errorMsg = computed(() => store.getters["users/getErrorMsg"]);
const isErrorMsg = computed(() => store.getters["users/getErrorMsg"] != "");

interface IReactiveData {
  email: string;
  password: string;
}

const r = reactive<IReactiveData>({
  email: "student001@jedlik.eu",
  password: "student001",
});
</script>

<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col xs="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-card-title v-if="!loggedIn"
            >Login form <v-icon>mdi-login</v-icon></v-card-title
          >
          <v-card-title v-else
            >Logout form <v-icon>mdi-logout</v-icon></v-card-title
          >
          <v-card-text>
            <v-form>
              <v-text-field
                v-model="r.email"
                name="login"
                :label="loggedIn ? 'Logged user´s email' : 'E-mail'"
                type="text"
                :disabled="loggedIn"
              ></v-text-field>
              <v-text-field
                v-model="r.password"
                v-if="!loggedIn"
                id="password"
                name="password"
                label="Password"
                type="password"
                :disabled="loggedIn"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              v-if="!loggedIn"
              color="success"
              @click="
                store.dispatch('users/loginUser', {
                  email: r.email,
                  password: r.password,
                })
              "
              >Login</v-btn
            >
            <v-btn
              v-else
              color="warning"
              class="mt-3"
              @click="store.dispatch('users/logOut')"
              >Log out</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <!-- Dialog1: Wait for login response -->
    <v-dialog v-model="isLoading" hide-overlay persistent>
      <v-card color="primary">
        <v-card-text>
          Please wait...
          <v-progress-linear
            indeterminate
            color="white"
            class="mb-0"
          ></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>
    <!-- Dialog 2: Show error messages -->
    <v-dialog v-model="isErrorMsg">
      <v-card>
        <v-card-title> Error </v-card-title>
        <v-card-text>{{ errorMsg }}</v-card-text>
        <v-card-actions>
          <v-btn
            color="primary"
            text
            @click="store.dispatch('users/clearErrorMsg')"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<style scoped>
.v-card-title {
  background-color: lightgray;
}
</style>
