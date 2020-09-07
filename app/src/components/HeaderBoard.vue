<template>
  <div class="label">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  }
}
</script>

<style scoped>
.label {
  margin: 40px 20px;
  border-bottom: 1px solid rgba(0,0,0,0.1);
}

.label h1 {
  text-align: start;
  color: #686868;
  font-weight: 400;
}
</style>
