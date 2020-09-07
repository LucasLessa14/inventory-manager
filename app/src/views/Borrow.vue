<template>
  <div class="borrow">
    <HeaderBoard title="Fazer empréstimo"/>

    <div class="content-board">
        oi
    </div>

  </div>
</template>

<script>
import HeaderBoard from '../components/HeaderBoard.vue';

export default {
  components: {
    HeaderBoard
  }
}
</script>

<style scoped>
.borrow {
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