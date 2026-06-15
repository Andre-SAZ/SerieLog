<template>
  <ul>
    <li v-for="musica in musicas" :key="musica.id">{{ musica.titulo }}</li>
  </ul>
</template>

<script setup>
  import { ref, onMounted } from "vue";

  const musicas = ref([]);

  onMounted(async () => {
    const res = await fetch("https://api.exemplo.com/musicas");
    musicas.value = await res.json();
  });
</script>
