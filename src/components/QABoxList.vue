<template>
  <div class="wrapper">
    <div class="qa-box-list">
      <QABox
        :QA="QA"
        v-for="(QA, index) in $currentQA"
        :ref="`qa${index}`"
        :key="QA._id"
      ></QABox>
    </div>
    <footer>
      <button @click="handleSubmitClick">Enviar</button>
    </footer>
  </div>
</template>

<script>
import QABox from './QABox.vue'
export default {
  components: { QABox },
  name: 'QABoxList',
  methods: {
    checkAnswer () {},
    handleSubmitClick () {
      const answers = []
      for (let i = 0; i < this.$currentQA.length; i++) {
        const qaBox = this.$refs[`qa${i}`][0]
        if (qaBox.answer) {
          answers.push(qaBox.answer)
        }
      }

      this.$store.dispatch('qa/saveAnswers', { user: this.$currentUser.sheet, answers })
    }
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
