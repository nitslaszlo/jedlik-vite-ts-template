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
  VRow,
  VCol,
  VForm,
  VTextField,
  VSpacer,
  VIcon,
} from "vuetify/components";

const store = useStore();

const loggedIn = computed(() => store.getters["users/getLoggedIn"]);

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
                label="Login"
                type="text"
                :disabled="loggedIn"
              ></v-text-field>
              <v-text-field
                v-model="r.password"
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
  </v-container>
</template>

<style scoped>
.v-card-title {
  background-color: lightgray;
}
</style>
