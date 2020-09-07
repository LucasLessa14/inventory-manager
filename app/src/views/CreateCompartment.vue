<template>
  <div class="create-components">
    <HeaderBoard title="Criar compartimento"/>

    <div class="content-board">

        <div class="style-form">
            <label>Compartimento</label>
            <input class="input" type="text" placeholder="Ex. Armário 01 - Gaveta 02" v-model="name">

            <label>Descrição</label>
            <textarea class="textarea" type="text" placeholder="Digite uma descrição" v-model="description">
            </textarea>

            <div class="buttons-itens">
                <button class="button is-info" @click="createComponent()"><i class="fas fa-plus-circle"></i>Criar componente</button>
                <router-link to="/compartments">
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
  data() {
    return {
      name: '',
      description: ''
    }
  },
  components: {
    HeaderBoard
  },
  methods: {
      createComponent() {
        axios.post('http://localhost:8086/compartment', {
            name: this.name,
            description: this.description
        }).then(res => {
            console.log(res);
            this.$router.push({ name: 'Compartments' });
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