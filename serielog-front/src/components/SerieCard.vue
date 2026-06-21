<template>
  <div class="card">
    <div class="card-content">
      <h3>{{ serie.titulo }}</h3>
      <p class="meta-info">
        <span class="ano">{{ serie.ano }}</span>
        <span class="nota">Nota: {{ serie.nota }}</span>
      </p>
      <p class="genero">{{ serie.genero }}</p>
      <p class="status" :class="{ assistida: serie.assistida }">
        {{ serie.assistida ? 'Assistida' : 'Minha Lista' }}
      </p>
    </div>
    <div class="card-actions">
      <router-link :to="`/series/${serie.id}`" class="btn-editar">Editar</router-link>
      <button @click="$emit('remover', serie.id)" class="btn-remover">Remover</button>
    </div>
  </div>
</template>

<script setup>
defineProps({ serie: Object });
defineEmits(['remover']);
</script>

<style scoped>
.card {
  background-color: var(--card-bg);
  border-radius: 6px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 200px;
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0,0,0,0.5);
  z-index: 10;
}

.card-content {
  padding: 20px;
}

h3 {
  font-size: 20px;
  margin-bottom: 10px;
  color: #fff;
}

.meta-info {
  font-size: 14px;
  color: #aaa;
  margin-bottom: 8px;
  display: flex;
  gap: 15px;
}

.nota { 
  color: #fff; 
  font-weight: bold; 
}

.genero { 
  font-size: 14px; 
  color: #ccc; 
  margin-bottom: 10px; 
}

.status {
  display: inline-block;
  font-size: 12px;
  padding: 3px 8px;
  border-radius: 3px;
  background-color: #555;
  color: #fff;
}

.status.assistida {
  background-color: var(--netflix-red);
  color: white;
}

.card-actions {
  padding: 15px;
  background-color: rgba(0,0,0,0.2);
  display: flex;
  gap: 10px;
}

.btn-editar, .btn-remover {
  flex: 1;
  text-align: center;
  padding: 8px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 14px;
  text-decoration: none;
}

.btn-editar {
  background-color: transparent;
  color: #e5e5e5;
  border: 1px solid #e5e5e5;
}

.btn-editar:hover {
  background-color: #e5e5e5;
  color: #141414;
}

.btn-remover {
  background-color: transparent;
  color: #aaa;
  border: 1px solid #aaa;
}

.btn-remover:hover {
  background-color: var(--netflix-red);
  color: white;
  border-color: var(--netflix-red);
}
</style>