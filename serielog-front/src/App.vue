<template>
  <div class="app-container">
    <header class="netflix-header">
      <h1 class="logo">SERIELOG</h1>
      <nav>
        <router-link to="/">Início</router-link>
        <router-link to="/series/nova">Adicionar Série</router-link>
      </nav>
    </header>

    <main class="main-content">
      <router-view></router-view>
    </main>
  </div>
</template>

<style scoped>
.netflix-header {
  display: flex;
  align-items: center;
  padding: 20px 40px;
  background: linear-gradient(to bottom, rgba(0,0,0,0.7) 10%, rgba(20,20,20,0));
  position: sticky;
  top: 0;
  z-index: 100;
}

.logo {
  color: var(--netflix-red);
  font-size: 32px;
  font-weight: 900;
  letter-spacing: 2px;
  margin-right: 40px;
}

nav a {
  color: #e5e5e5;
  text-decoration: none;
  margin-right: 20px;
  font-size: 16px;
  transition: color 0.3s;
}

nav a:hover, nav a.router-link-active {
  color: #fff;
  font-weight: bold;
}

.main-content {
  padding: 0 40px 40px 40px;
}
</style>