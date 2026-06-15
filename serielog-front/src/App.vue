<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <nav>
    <RouterLink to="/">Início</RouterLink>
    <RouterLink to="/playlists/nova">Nova Playlist</RouterLink>
  </nav>

  <RouterView />
</template>

<style scoped>
nav {
  display: flex;
  gap: 20px; /* Cria um espaço de 20px entre os links */
  margin-bottom: 20px; /* Dá um espaço entre o menu e a lista de séries */
  justify-content: center;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
</style>
