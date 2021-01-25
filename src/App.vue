<template>
  <div id="app" class="d-flex flex-column min-vh-100">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
  @import './assets/overrides.css';
</style>