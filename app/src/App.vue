<template>
  <div id="app">
    <div class="menu">
      <Menu msg="Welcome to Your Vue.js App"/>
    </div>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Menu from './components/Menu.vue'
export default {
  components: {
    Menu
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');

* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  font-family: 'Roboto', sans-serif;
}

#app {
  position: absolute;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-areas: "menu content";
  grid-template-columns: 250px 1fr;
  color: #2c3e50;
}

.menu {
  grid-area: menu;
}

.content {
  grid-area: content;
  background: #F2F2F3;
}

button i {
  margin-right: 8px;
}
</style>
