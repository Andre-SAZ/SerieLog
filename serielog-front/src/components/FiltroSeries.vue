<template>
  <div class="filtro-container">
    <select id="status-filtro" @change="$emit('mudar-filtro', $event.target.value)">
      <option value="todas">Todas as Séries</option>
      <option value="assistidas">Já Assistidas</option>
      <option value="nao-assistidas">Minha Lista (Não Assistidas)</option>
    </select>
  </div>
</template>

<script setup>
defineEmits(['mudar-filtro']);
</script>

<style scoped>
.filtro-container {
  margin-bottom: 30px;
}

select {
  background-color: var(--input-bg);
  color: #fff;
  border: 1px solid #555;
  padding: 10px 15px;
  border-radius: 4px;
  font-size: 16px;
  outline: none;
  cursor: pointer;
}

select:focus {
  border-color: var(--netflix-red);
}
</style>