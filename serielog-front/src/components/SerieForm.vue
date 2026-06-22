<template>
  <form @submit.prevent="enviarFormulario" class="netflix-form">
    <div class="form-group">
      <label>Título da Série</label>
      <input type="text" v-model="dados.titulo" required placeholder="Ex: Stranger Things" />
    </div>

    <div class="form-row">
      <div class="form-group">
        <label>Gênero</label>
        <input type="text" v-model="dados.genero" required />
      </div>
      <div class="form-group">
        <label>Ano</label>
        <input type="number" v-model="dados.ano" required />
      </div>
    </div>

    <div class="form-group">
      <label>Nota (0 a 10)</label>
      <input type="number" v-model="dados.nota" step="0.1" min="0" max="10" required />
    </div>

    <div class="form-checkbox">
      <input type="checkbox" id="assistida" v-model="dados.assistida" />
      <label for="assistida">Série já finalizada</label>
    </div>

    <button type="submit" class="btn-submit">Salvar Série</button>
  </form>
</template>

<script setup>
import { ref, watch } from 'vue';

// 1. Prepara o formulário para receber os dados de uma série já existente (se houver)
const props = defineProps({
  serieInicial: {
    type: Object,
    default: () => ({ titulo: '', genero: '', ano: null, nota: null, assistida: false })
  }
});

const emit = defineEmits(['salvar']);

// 2. Cria os dados do formulário baseados na prop recebida
const dados = ref({ ...props.serieInicial });

// 3. Fica observando: se a série demorar um pouquinho para carregar da API, 
// ele atualiza os campos automaticamente assim que ela chegar.
watch(() => props.serieInicial, (novosDados) => {
  dados.value = { ...novosDados };
}, { deep: true, immediate: true });

function enviarFormulario() {
  emit('salvar', dados.value);
}
</script>

<style scoped>
.netflix-form {
  background-color: var(--card-bg);
  padding: 40px;
  border-radius: 8px;
  max-width: 600px;
  margin: 0 auto;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

.form-row {
  display: flex;
  gap: 20px;
}
.form-row .form-group { flex: 1; }

label {
  color: #aaa;
  margin-bottom: 8px;
  font-size: 14px;
}

input[type="text"], input[type="number"] {
  background-color: var(--input-bg);
  border: none;
  color: #fff;
  padding: 12px;
  border-radius: 4px;
  font-size: 16px;
  outline: none;
}

input:focus {
  background-color: #444;
}

.form-checkbox {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 30px;
}

.btn-submit {
  width: 100%;
  background-color: var(--netflix-red);
  color: white;
  border: none;
  padding: 15px;
  font-size: 18px;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.btn-submit:hover {
  background-color: var(--netflix-red-hover);
}
</style>