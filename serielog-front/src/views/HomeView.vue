<template>
  <section class="home">
    <h2 class="secao-titulo">Minhas Séries</h2>

    <FiltroSeries @mudar-filtro="filtroAtual = $event" />

    <div v-if="seriesFiltradas.length > 0" class="grid-series">
      <SerieCard
        v-for="serie in seriesFiltradas"
        :key="serie.id"
        :serie="serie"
        @remover="removerSerie"
      />
    </div>
    <div v-else class="empty-state">
      <p>Nenhuma série encontrada. O catálogo está vazio ou carregando os dados do servidor.</p>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import SerieCard from '../components/SerieCard.vue';
import FiltroSeries from '../components/FiltroSeries.vue';

const series = ref([]);
const filtroAtual = ref('todas');

onMounted(async () => {
  try {
    console.log("1. Tentando conectar com a API...");
    const res = await fetch('http://localhost:3000/series');
    const data = await res.json();
    console.log("2. Dados recebidos da API:", data);
    series.value = data;
  } catch (erro) {
    console.error("ERRO: O servidor da API parece estar desligado!", erro);
  }
});

const seriesFiltradas = computed(() => {
  if (filtroAtual.value === 'assistidas') {
    return series.value.filter(serie => serie.assistida === true);
  } else if (filtroAtual.value === 'nao-assistidas') {
    return series.value.filter(serie => serie.assistida === false);
  }
  return series.value;
});

async function removerSerie(id) {
  try {
    await fetch(`http://localhost:3000/series/${id}`, { method: 'DELETE' });
    series.value = series.value.filter(serie => serie.id !== id);
  } catch (erro) {
    console.error("Falha ao processar a exclusão da série:", erro);
  }
}
</script>

<style scoped>
.secao-titulo {
  font-size: 28px;
  margin-bottom: 20px;
  color: #fff;
  border-left: 4px solid var(--netflix-red);
  padding-left: 10px;
}

.grid-series {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px;
}

.empty-state {
  text-align: center;
  padding: 50px;
  color: #808080;
  font-size: 18px;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
}
</style>