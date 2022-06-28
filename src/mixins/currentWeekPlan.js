export default {
  computed: {
    $currentWeekPlan () {
      return this.$store.state.weekPlan.plan || {
        monday: {
          calories: 0,
          proteins: 0,
          carbs: 0,
          fat: 0,
          meals: []
        },
        tuesday: {
          calories: 0,
          proteins: 0,
          carbs: 0,
          fat: 0,
          meals: []
        },
        wednesday: {
          calories: 0,
          proteins: 0,
          carbs: 0,
          fat: 0,
          meals: []
        },
        thursday: {
          calories: 0,
          proteins: 0,
          carbs: 0,
          fat: 0,
          meals: []
        },
        friday: {
          calories: 0,
          proteins: 0,
          carbs: 0,
          fat: 0,
          meals: []
        },
        saturday: {
          calories: 0,
          proteins: 0,
          carbs: 0,
          fat: 0,
          meals: []
        },
        sunday: {
          calories: 0,
          proteins: 0,
          carbs: 0,
          fat: 0,
          meals: []
        }
      }
    },
    $foods () {
      return this.$store.state.weekPlan.foods
    },
    $customFoods () {
      return this.$store.state.weekPlan.customFoods
    },
    $isLoadingFoods () {
      return this.$store.state.weekPlan.isLoadingFoods
    },
    $isOnline () {
      return this.$store.state.weekPlan.isOnline
    }
  }
}
