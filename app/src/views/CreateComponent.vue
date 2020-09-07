<template>
  <div class="create-components">
    <HeaderBoard title="Criar componente"/>

    <div class="content-board">

        <div class="style-form">
            <label>Componente</label>
            <input class="input" type="text" id="name" placeholder="Digite o nome do componente" v-model="name">

            <label>Quantidade</label>
            <input class="input" type="number" id="amount" placeholder="Digite a quantidade" v-model="amount">
            
            <div>
            <label>Categoria</label><br>
            <div class="select">
                <select v-model='category_id'>
                    <option v-for="(category, index) in categories" :key="category.id" v-bind:value="categories[index].id">
                        {{ category.name }}
                    </option>
                </select>
            </div>
            </div>

            <div>
            <label>Compartimento</label><br>
            <div class="select">
                <select v-model='compartment_id'>
                    <option v-for="(compartment, index) in compartments" :key="compartment.id" v-bind:value="compartments[index].id">
                        {{ compartment.name }}
                    </option>
                </select>
            </div>
            </div>

            <div class="buttons-itens">
                <button class="button is-info" @click="createComponent()"><i class="fas fa-plus-circle"></i>Criar componente</button>
                <router-link to="/components">
                    <button class="button is-danger"><i class="far fa-times-circle"></i>Cancelar</button>
                </router-link>
            </div>
        </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios';
import HeaderBoard from '../components/HeaderBoard.vue';

export default {
  created() {
    axios.get('http://localhost:8086/category/names').then(res => {
      this.categories = res.data;
    }).catch(err => {
      console.log(err);
    });

    axios.get('http://localhost:8086/compartment/').then(res => {
      this.compartments = res.data;
    }).catch(err => {
      console.log(err);
    });
  },
  data() {
    return {
      name: '',
      amount: 0,
      category_id: null,
      compartment_id: null,
      categories: [],
      compartments: []
    }
  },
  components: {
    HeaderBoard
  },
  methods: {
      createComponent() {
        axios.post('http://localhost:8086/component', {
            name: this.name,
            amount: this.amount,
            category_id: this.category_id,
            compartment_id: this.compartment_id
        }).then(res => {
            console.log(res);
            this.$router.push({ name: 'Components' });
        }).catch(err => {
            console.log(err);
        });
      }
  },
}
</script>

<style scoped>
.create-components {
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

.style-form {
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: 0 25%;
}

.buttons-itens {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.buttons-itens button{
    width: 50%;
    margin-top: 16px;
}

button i {
    margin-right: 8px;
}

.painel-board {
  display: flex;
  justify-content: space-between;
}
</style>