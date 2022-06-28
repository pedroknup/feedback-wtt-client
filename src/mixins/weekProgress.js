export default {
  computed: {
    $weekProgress () {
      return this.$store.state.weekPlan.progress
    },
    $caloriesProgress () {
      return this.$store.state.weekPlan.caloriesProgress
    }
  }
}
