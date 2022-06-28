export default {
  computed: {
    $finishedMeals () {
      return this.$store.state.weekPlan.doneMeals
    }
  }
}
