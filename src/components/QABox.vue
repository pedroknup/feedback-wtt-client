<template>
<div class="qa-box">
  <UiInputText :label="QA.question" :error="error" v-model="answer" @keyup.enter="checkAnswer" />
</div>
</template>

<script>
import UiInputText from './UiInputText.vue'
export default {
  components: { UiInputText },
  name: 'Logo',
  props: {
    QA: {
      type: Object
    }
  },
  data: () => ({
    answer: '',
    error: null
  }),
  methods: {
    checkAnswer () {
      
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
