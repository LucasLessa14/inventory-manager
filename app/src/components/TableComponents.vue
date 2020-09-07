<template>
  <table class="table is-striped is-narrow is-hoverable">
    <thead>
      <tr>
        <th v-for="(item, index) in header" :key="index" > {{ item }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="element in vetor" :key="element.id">
        <td>{{ element.name }}</td>
        <td>{{ element.amount }}</td>
        <td>{{ element.category_id }}</td>
        <td>{{ element.compartment_id }}</td>
        <td>
          <div class="buttons-list">
            <div class="edit-button"><i class="fas fa-edit"></i></div>
            <div class="remove-button"><i class="far fa-trash-alt"></i></div>
          </div>
        </td>
      </tr>
    </tbody>
    </table>
</template>

<script>
// import axios from 'axios';

export default {
  props: {
    vetor: Array,
    header: Array,
  },
  methods: {
    
  }
}
</script>

<style scoped>
.table td {
  padding: 0;
  font-size: 14px;
}

.buttons-list {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.edit-button {
  width: 30px;
  height: 30px;
  color: white;
  font-weight: 300;
  background: #67A1D7;
  padding: 5px;
  border-radius: 50%;
  margin-right: 5px;
  cursor: pointer;
  text-align: center;
}

.remove-button {
  width: 30px;
  height: 30px;
  color: white;
  font-weight: 300;
  background: #FE9393;
  padding: 5px;
  border-radius: 50%;
  margin-right: 5px;
  cursor: pointer;
  text-align: center;
}
</style>
