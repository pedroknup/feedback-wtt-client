<template>
  <div class="main-wrapper">
    <div
      v-if="plan && meals.length > 0"
      class="wrapper-day-plan"
      :class="{ show: show, 'add-meal': type !== null }"
    >
      <day-plan-list
        v-for="(plan, index) in meals"
        :key="`${plan.name}-${index}`"
        :ref="`plan-list-${plan.name}-${index}`"
        :plan="plan.meals"
        :type="plan.name || 'UNNAMED MEAL'"
        @add-click="addClickHandler(plan.name, index)"
        @delete="deleteHandler"
      />
    </div>
    <div class="no-meals-found" v-else>No meals found</div>
    <AddMeal
      :type="type.name"
      @save="saveMealHandler"
      @close="addMealCloseHandler"
      v-if="type"
    />
    <DietDayStats :open="show && !type" v-if="plan" :diet="plan" />
  </div>
</template>

<script>
import gsap from 'gsap/all'
import DietDayStats from './DietDayStats.vue'
import MealBox from './MealBox.vue'
import AddMeal from './AddMeal.vue'
import DayPlanList from './DayPlanList.vue'

export default {
  name: 'DayPlan',

  props: {
    name: { type: String }
  },
  data () {
    return {
      show: false,
      type: null,
      background: null
    }
  },
  components: {
    DietDayStats,
    AddMeal,
    // SwipeOut,
    DayPlanList
    // UiBaseIcon
  },
  watch: {
    type (type) {
      this.$emit('isAddingMeal', !!type)
    }
  },
  computed: {
    meals () {
      const mealsByMeal = []
      let currentMealName
      this.plan.meals.forEach((plan) => {
        if (plan.meal !== currentMealName) {
          currentMealName = plan.meal
          mealsByMeal.push({
            name: currentMealName,
            meals: []
          })
        }
        mealsByMeal[mealsByMeal.length - 1].meals.push(plan)
      })
      return mealsByMeal
    },
    plan () {
      return this.$currentWeekPlan[this.name.toLowerCase()]
    }
  },
  mounted () {
    setTimeout(() => {
      this.show = true
    }, 1)
  },
  methods: {
    deleteHandler ({ id, type }) {
      this.$store.dispatch('weekPlan/removeCustomMeal', {
        type: type.toLowerCase(),
        id,
        day: this.name.toLowerCase()
      })
    },
    itemClick () {
      console.log('click')
    },
    saveMealHandler ({ meal, shouldSave }) {
      this.$store.commit('weekPlan/ADD_CUSTOM_MEAL', {
        meal,
        day: this.name.toLowerCase(),
        type: this.type
      })
      if (shouldSave) {
        this.$store.dispatch('weekPlan/saveCustomMeal', {
          user: this.$currentUser,
          meal
        })
      }
      this.$store.dispatch('weekPlan/calculateProgress')
      this.addMealCloseHandler()
    },
    mealBoxClickHandler (mealId) {
      // check if meal is done
      const isDone = this.$finishedMeals.includes(mealId)
      if (isDone) {
        this.$store.dispatch('weekPlan/removeFinishedMeal', mealId)
      } else {
        this.$store.dispatch('weekPlan/finishMeal', mealId)
      }
    },
    isMealDone (meal) {
      return !!this.$finishedMeals.find((_meal) => _meal === meal.id)
    },
    addMealCloseHandler () {
      const planList =
        this.$refs[`plan-list-${this.type.name}-${this.type.index}`][0]
      if (planList) {
        planList.collapseButtonBackground()
        this.type = null
      }
    },

    addClickHandler (type, index) {
      this.type = { name: type, index }
    }
  }
}
</script>

<style lang="scss" scoped>
.no-meals-found {
  padding: 20px;
  text-align: center;
  font-size: 1.2rem;

  background-color: #f5f5f5af;
  height: 100vh;
}
.action-buttons-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.action-button {
  width: 50px;
  height: 50px;
  // avocado green color
  $avocado-green: #66bc24;

  background-color: $avocado-green;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 4px;
  border: none;
  color: white;
  margin-left: 8px;

  &.delete {
    background-color: #ff3d00;
  }
}

.title-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2px 10px;
  margin-bottom: -1px;
  background: #f5f5f5;
  button {
    background: #ffa000;
    margin: 4px;
    border: 1px solid transparent;
    border-radius: 3px;
    padding: 5px 10px;
    font-size: 12px;
    color: #333;
    cursor: pointer;
    position: relative;
    z-index: 2;
    user-select: none;

    .text {
      transition: opacity 0.3s ease;
      text-transform: uppercase;
      font-size: 8px;
      z-index: 10;
      color: white;
      user-select: none;
    }
  }
  .background-button {
    position: absolute;
    top: 50%;
    left: 50%;
    background-color: #ffa000;
    width: 10px;
    height: 10px;
    z-index: 1;
    border-radius: 50%;
  }
}
.button-wrapper {
  position: relative;
}
.main-wrapper {
  height: 100vh;
  max-height: calc(var($max-height) - 50px);
  z-index: 1;
  .title {
    font-size: 12px;
    margin: 8px;
  }
}
.wrapper-day-plan {
  background-color: white;
  $margin-top: 64px;
  height: calc(100vh - 64px);
  overflow: scroll;
  z-index: 2;
  position: fixed;
  top: $margin-top;
  bottom: 200px;
  left: -10px;
  right: -10px;
  opacity: 0;
  transition: all 0.2s ease-in-out;
  transition-delay: 0s;
  padding: 10px;
  padding-bottom: 250px;

  overflow: scroll;

  &.show {
    opacity: 1;
  }
  &.add-meal {
    height: 100vh;
    top: 0;
    bottom: 0px;
    transition: top 0.2s ease-in-out;
  }

  .meals-wrapper {
    // > div:not(:first-child):not(:last-child) {
    > div:not(:first-child) {
      margin-top: 1px;
      border-top: 1px solid #f5f5f5;
    }
  }
}
</style>
