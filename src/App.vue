<script setup lang="ts"></script>

<template>
  <nav class="navbar navbar-expand-md navbar-dark sticky-top bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Jedlik Vizsga</a>
      <button
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
        class="navbar-toggler"
        data-bs-target="#navbarCollapse"
        data-bs-toggle="collapse"
        type="button"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div id="navbarCollapse" class="collapse navbar-collapse">
        <ul class="navbar-nav me-auto mb-md-0">
          <li class="nav-item mx-1">
            <router-link to="/">Home</router-link>
          </li>
          <li class="nav-item mx-1">
            <router-link to="/about">About</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="container-fluid">
    <router-view />
  </div>
</template>

<style></style>
