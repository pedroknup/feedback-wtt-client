<template>
  <div class="wrapper">
    <div class="qa-box-list">
      <QABox :QA="QA" v-for="QA in $currentQA" :key="QA._id"></QABox>
    </div>
    <footer>
      <button>Enviar</button>
    </footer>
  </div>
</template>

<script>
import QABox from './QABox.vue'
export default {
  components: { QABox },
  name: 'QABoxList',
  methods: {
    checkAnswer () {}
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;

  .qa-box-list {
    flex: 1;
  }

  footer {
    margin-top: 8px;
    border-top: 1px solid #ccc;
    padding: 16px 8px;

    button {
      width: 100%;
      background-color: #4caf50;
      color: white;
      padding: 14px 20px;
      border: none;
      cursor: pointer;
    }
  }
}
</style>
