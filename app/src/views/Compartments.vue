<template>
  <div class="compartments">
    
      <HeaderBoard title="Compartimentos"/>

      <div class="content-board">

        <div class="painel-board">
          <div class="field has-addons">
            <div class="control"><input class="input" type="text" placeholder="Busca por compartimento"></div>
            <div class="control"><div class="button is-info"><i class="fas fa-search"></i></div></div>
          </div>

          <router-link to="/compartments/create">
            <button class="button is-info"><i class="fas fa-plus-circle"></i>Criar compartimento</button>
          </router-link>
        </div>

        <TableDefault v-bind:header="tags" v-bind:vetor="compartments" />
      </div>

  </div>
</template>

<script>
import axios from 'axios';
import TableDefault from '../components/TableDefault.vue';
import HeaderBoard from '../components/HeaderBoard.vue';

export default {
  created() {
    axios.get('http://localhost:8086/compartment').then(res => {
      this.compartments = res.data;
    }).catch(err => {
      console.log(err);
    });
  },
  data() {
    return {
      compartments: [],
      tags: ['Nome', 'Quantidade', 'Descrição', 'Ações']
    }
  },
  components: {
    HeaderBoard,
    TableDefault
  }
}
</script>

<style scoped>
.compartments {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 10px;
}

.content-board {
  border-radius: 8px;
  margin: 0 20px 30px 20px;
  padding: 40px 20px;
  background: white;
}

.painel-board {
  display: flex;
  justify-content: space-between;
}
</style>