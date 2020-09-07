<template>
  <div class="categories">
    <HeaderBoard title="Categorias"/>

    <div class="content-board">

      <div class="painel-board">
        <div class="field has-addons">
          <div class="control"><input class="input" type="text" placeholder="Busca por categoria"></div>
          <div class="control"><div class="button is-info"><i class="fas fa-search"></i></div></div>
        </div>

        <button class="button is-info" @click="openModalCeate()"><i class="fas fa-plus-circle"></i>Criar categoria</button>
      </div>

      <table class="table is-striped is-narrow is-hoverable">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Quantidade</th>
            <th>Descrição</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="category in categories" :key="category.id">

            <td v-if="indexEdit != category.id">{{ category.name }}</td>
            <td v-else><input class="input is-small" type="text" v-model="editName"></td>

            <td>{{ category.amount }}</td>

            <td v-if="indexEdit != category.id">{{ category.description }}</td>
            <td v-else><input class="input is-small" type="text" v-model="editDescription"></td>

            <td v-if="indexEdit != category.id">
              <div class="buttons">
                <button class="button is-small is-light is-info" @click="editItem(category.id)"><i class="fas fa-edit"></i>Editar</button>
                <button class="button is-small is-light is-danger" @click="openModalDelete(category.id)"><i class="far fa-trash-alt"></i>Deletar</button>
              </div>
            </td>

            <td v-else>
              <div class="buttons">
                <button class="button is-small is-light is-info" @click="updateItem(category.id)"><i class="fas fa-edit"></i>Atualizar</button>
                <button class="button is-small is-light is-danger" @click="editItem(category.id)"><i class="far fa-trash-alt"></i>Cancelar</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-bind:class="{ modal: true, 'is-active': modalStatusCreate }">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Criar categoria</p>
          <button class="delete" aria-label="close" @click="closeModal()"></button>
        </header>
        <section class="modal-card-body">
          <label>Nome da categoria</label>
          <input class="input" type="text" placeholder="Ex. Sistemas Embarcados" v-model="newName">
          <label>Descrição da categoria</label>
          <textarea class="textarea" placeholder="Digite uma descrição" v-model="newDescription"></textarea>
        </section>
        <footer class="modal-card-foot">
          <button class="button is-info" @click="createCategory()">Criar categoria</button>
          <button class="button" @click="closeModal()">Cancelar</button>
        </footer>
      </div>
    </div>

    <div v-bind:class="{ modal: true, 'is-active': modalStatusDelete }">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Deseja deletar essa categoria?</p>
          <button class="delete" aria-label="close" @click="closeModal()"></button>
        </header>
        <section class="modal-card-body">
          Lembre-se que essa operação é irrevessível
        </section>
        <footer class="modal-card-foot">
          <button class="button is-danger" @click="removeItem()">Quero deletar</button>
          <button class="button" @click="closeModal()">Cancelar</button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import HeaderBoard from '../components/HeaderBoard.vue';

export default {
  created() {
    axios.get('http://localhost:8086/category').then(res => {
      this.categories = res.data;
    }).catch(err => {
      console.log(err);
    });
  },
  data() {
    return {
      categories: [],
      modalStatusCreate: false,
      modalStatusDelete: false,
      indexDelete: -1,
      indexEdit: -1,
      editName: '',
      editDescription: '',
      newName: '',
      newDescription: '',
    }
  },
  components: {
    HeaderBoard,
  },
  methods: {
    createCategory() {

      var newCategory = {
        name: this.newName,
        description: this.newDescription,
        amount: 0
      }

      axios.post('http://localhost:8086/category', newCategory).then(res => {
        this.modalStatusCreate = false;
        this.categories.push(newCategory);
        console.log(res);
      }).catch(err => {
        this.modalStatusCreate = false;
        console.log(err);
      });
    },
    updateItem(){
      
      var editCategory = {
        id: this.indexEdit,
        name: this.editName,
        description: this.editDescription,
      }

      axios.put('http://localhost:8086/category', editCategory).then(res => {
        
        this.categories = this.categories.filter(category => category.id != this.indexEdit);
        this.categories.push(editCategory);
        this.indexEdit = -1;

        console.log(res);
      }).catch(err => {
        console.log(err);
      });
    },
    removeItem() {
      axios.delete('http://localhost:8086/category/'+ this.indexDelete).then(res => {
        this.categories = this.categories.filter(category => category.id != this.indexDelete);
        this.modalStatusDelete = false;
        console.log(res);
      }).catch(err => {
        this.modalStatusDelete = false;
        console.log(err);
      });
    },
    editItem(id) {
      if (this.indexEdit == id) {
        this.indexEdit = -1;
        this.editName = '';
        this.editDescription = '';
      } else {
        var category = this.categories.filter(category => category.id == id);

        this.indexEdit = id;
        this.editName = category[0].name;
        this.editDescription = category[0].description;
      }
    },
    openModalCeate() {
      this.modalStatusCreate = true;
    },
    openModalDelete(id) {
      this.modalStatusDelete = true;
      this.indexDelete = id;
    },
    closeModal() {
      this.modalStatusCreate = false;
      this.modalStatusDelete = false;
    }
  }
}
</script>

<style scoped>
.categories {
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

/* Tabela */
.buttons-list {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.button-table {
  width: 30px;
  height: 30px;
  color: white;
  font-weight: 300;
  padding: 5px;
  border-radius: 50%;
  margin-right: 5px;
  cursor: pointer;
  text-align: center;
}

.edit-button {
  background: #67A1D7;
}

.remove-button {
  background: #FE9393;
}
</style>