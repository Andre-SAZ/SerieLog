<template>
  <section class="nova-serie-view">
    <h2>Adicionar ao Catálogo</h2>
    <SerieForm @salvar="adicionarSerie" />
  </section>
</template>

<script setup>
import { useRouter } from 'vue-router';
import SerieForm from '../components/SerieForm.vue';

const router = useRouter();

async function adicionarSerie(novaSerie) {
  await fetch('http://localhost:3000/series', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(novaSerie)
  });
  
  router.push('/');
}
</script>

<style scoped>
.nova-serie-view {
  padding-top: 20px;
}
.nova-serie-view h2 {
  text-align: center;
  margin-bottom: 30px;
  font-size: 28px;
}
</style>