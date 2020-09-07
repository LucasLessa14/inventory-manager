<template>
  <div class="components">
    
    <HeaderBoard title="Componentes"/>
    <CategoriesTab />

    <div class="content-board">

      <div class="painel-board">
        <div class="field has-addons">
          <div class="control"><input class="input" type="text" placeholder="Busca por componente"></div>
          <div class="control"><div class="button is-info"><i class="fas fa-search"></i></div></div>
        </div>

        <router-link to="/components/create">
          <button class="button is-info"><i class="fas fa-plus-circle"></i>Criar componente</button>
        </router-link>
      </div>
      
      <TableComponents v-bind:header="tags" v-bind:vetor="components" />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import TableComponents from '../components/TableComponents.vue';
import HeaderBoard from '../components/HeaderBoard.vue';
import CategoriesTab from '../components/CategoriesTab.vue'

export default {
  created() {
    axios.get('http://localhost:8086/component').then(res => {
      this.components = res.data;
    }).catch(err => {
      console.log(err);
    });
  },
  data() {
    return {
      components: [],
      tags: ['Nome', 'Categoria', 'Compartimento', 'Quantidade', 'Ações']
    }
  },
  components: {
    HeaderBoard,
    TableComponents,
    CategoriesTab
  }
}
</script>

<style scoped>
.components {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 10px;
}

.content-board {
  border-radius: 0 8px 8px 8px;
  margin: 0 20px 30px 20px;
  padding: 40px 20px;
  background: white;
}

.painel-board {
  display: flex;
  justify-content: space-between;
}
</style>