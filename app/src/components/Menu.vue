<template>
  <div class="menu">
    <header>LCF</header>

    <ul>
      <li><router-link :to="{name: 'Categories'}"><i class="fas fa-chart-pie"></i>Dashboard</router-link></li>
      <li><router-link :to="{name: 'Components'}"><i class="fas fa-link"></i>Componentes</router-link></li>
      <li><router-link :to="{name: 'Categories'}"><i class="fas fa-stream"></i>Categorias</router-link></li>
      <li><router-link :to="{name: 'Compartments'}"><i class="fas fa-th"></i>Compartimentos</router-link></li>
      <li><router-link :to="{name: 'Borrow'}"><i class="far fa-address-card"></i>Empréstimos</router-link></li>
      <li><router-link :to="{name: 'Schedule'}"><i class="fas fa-calendar-week"></i>Agenda</router-link></li>
      <li><router-link :to="{name: 'Compartments'}"><i class="far fa-file-alt"></i>Blog</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.menu {
  background: #67A1D7;
  height: 100%;
}

.menu header{
  font-size: 22px;
  color: white;
  text-align: center;
  line-height: 70px;
  background: #5D8DBA;
  user-select: none;
}

.menu ul a {
  display: flex;
  align-items: center;
  padding-left: 20px;
  height: 100%;
  width: 100%;
  line-height: 65px;
  font-size: 20px;
  color: white;
  box-sizing: border-box;
  border-top: 1px solid rgba(255,255,255,0.1);
  border-bottom: 1px solid #5D8DBA;
  transition: .4s;
}

.menu li:hover a {
  padding-left: 32px;
}

.menu ul a i {
  margin-right: 8px;
}
</style>
