<template>
  <div class="content-tabs">
    <div v-for="(category, index) in categories" :key="index">
    <div v-bind:class="{ 'box-tab': true, 'active-tab': index == selectCategory }" @click="updateCategory(index)">
        <div>{{ category.name }}</div>
        <div class="amount">{{ category.amount }}</div>
    </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  created() {
    axios.get('http://localhost:8086/category/names').then(res => {
      this.categories = res.data;
    }).catch(err => {
      console.log(err);
    });
  },
  data() {
    return {
      categories: [],
      selectCategory: 0
    }
  },
  methods: {
    updateCategory(index) {
      this.selectCategory = index;
    }
  }
}
</script>

<style scoped>
.content-tabs {
  display: flex;
  flex-direction: row;
  margin: 10px 20px 0 20px;
}

.box-tab {
  display: flex;
  padding: 8px 16px;
  margin-right: 16px;
  border: 1px solid #c3c3c3;
  border-bottom: none;
  border-radius: 8px 8px 0 0;
  cursor: pointer;
  background: #67A1D7;
  color: white;
  font-weight: 700;
}

.box-tab:hover {
  color: rgba(0, 0, 0, 0.35);
  transition: 0.4s;
}

.amount {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
  background: #f76a6a;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  color: white;
  font-size: 12px;
}

.active-tab {
  color: rgba(0, 0, 0, 0.5);
  background: white;
  border: 1px solid white;
}
</style>
