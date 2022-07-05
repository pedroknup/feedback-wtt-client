export default {
  computed: {
    $currentQA () {
      return this.$store.state.qa.qa
    },
    $isLoadingQA () {
      return this.$store.state.qa.isLoadingQA
    },
    $isOnline () {
      return this.$store.state.qa.weekPlan.isOnline
    }
  }
}
