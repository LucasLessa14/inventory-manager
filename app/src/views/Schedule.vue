<template>
  <div class="schedule">
    <HeaderBoard title="Agenda"/>

    <div class="content-board">
        oi, agenda aqui
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
.schedule {
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