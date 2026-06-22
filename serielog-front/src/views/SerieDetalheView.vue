<template>
  <section class="editar-serie-view">
    <h2>Editar Informações da Série</h2>
    
    <div v-if="carregado">
      <SerieForm :serieInicial="serieAtual" @salvar="atualizarSerie" />
    </div>
    <div v-else class="loading-state">
      <p>Carregando os dados da série...</p>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import SerieForm from '../components/SerieForm.vue';

const route = useRoute();
const router = useRouter();

const serieAtual = ref(null);
const carregado = ref(false);

onMounted(async () => {
  const id = route.params.id; // Pega o ID que está na URL
  try {
    const res = await fetch(`http://localhost:3000/series/${id}`);
    serieAtual.value = await res.json();
    carregado.value = true; // Avisa o template que já pode exibir o formulário preenchido
  } catch (erro) {
    console.error('Falha ao buscar os detalhes da série:', erro);
  }
});

async function atualizarSerie(dadosAtualizados) {
  const id = route.params.id;
  try {
    // Faz um PUT para substituir os dados antigos pelos novos
    await fetch(`http://localhost:3000/series/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dadosAtualizados)
    });
    
    // Manda o usuário de volta para o catálogo após salvar
    router.push('/');
  } catch (erro) {
    console.error('Falha ao atualizar a série:', erro);
  }
}
</script>

<style scoped>
.editar-serie-view {
  padding-top: 20px;
}
.editar-serie-view h2 {
  text-align: center;
  margin-bottom: 30px;
  font-size: 28px;
  color: #fff;
}
.loading-state {
  text-align: center;
  color: #888;
  font-size: 18px;
  margin-top: 50px;
}
</style>