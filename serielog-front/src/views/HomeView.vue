<template>
  <div>
    <h2>Minhas Séries</h2>
    <ul>
      <li v-for="serie in series" :key="serie.id">
        {{ serie.titulo }} - Nota: {{ serie.nota }}
      </li>
    </ul>
  </div>
</template>

<script setup>
  import { ref, onMounted } from "vue";

  const series = ref([]);

  onMounted(async () => {
    try {
      const res = await fetch("http://localhost:3000/series");
      series.value = await res.json();
    } catch (erro) {
      console.log("Erro ao buscar as séries:", erro);
    }
  });
</script>