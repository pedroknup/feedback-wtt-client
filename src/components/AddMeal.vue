<template>
  <div class="add-meal-wrapper" :class="{ loaded: loaded }">
    <header>
      <span>
        Add Meal <span class="type">({{ formattedType }})</span>
      </span>
      <a href="#" @click="loadMeals">Refresh</a>
    </header>
    <div class="wrapper" :class="{ loaded: loaded }">
      <UiInputText label="Meal name" v-model="nameFilter" />
      <div v-if="!isCustom" class="results-header">
        <div>
          <span>Proteins</span>
          <span>Carbs</span>
          <span>Fat</span>
        </div>
      </div>
      <div class="results-wrapper" v-if="!isCustom">
        <template v-if="!$isLoadingFoods">
          <MealBox
            v-for="meal in searchResult"
            :meal="meal"
            :key="meal._id"
            :border="false"
            :is-current-day="false"
            :is-done="false"
            :is-expanded="false"
            :selected="meal.id === selectedMealId"
            :quantity="meal.id === selectedMealId ? selectedMealQuantity : 1"
            @click="mealBoxClickHandler(meal.id)"
          />
        </template>
        <template v-else>
          <div class="loading">
            <div class="spinner"></div>
            Refreshing foods
          </div>
        </template>
      </div>
      <div class="results-wrapper" v-if="isCustom">
        <UiInputText label="Calories" v-model="meal.calories" />
        <UiInputText label="Proteins" v-model="meal.proteins" />
        <UiInputText label="Carbs" v-model="meal.carbs" />
        <UiInputText label="Fat" v-model="meal.fat" />
        <!-- <UiTextarea
          :placeholder="'Meal notes'"
          :autosize="false"
          underline
          v-model="meal.notes"
        /> -->
      </div>

      <div class="cta-wrapper">
        <button
          class="save"
          :class="{ disabled: !isCorrect }"
          @click="saveClickHandler"
        >
          Add
        </button>
        <button class="close" @click="close">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
import MealBox from './MealBox.vue'
import UiInputText from './UiInputText.vue'
export default {
  name: 'AddMeal',
  components: { UiInputText, MealBox },
  props: {
    type: { type: String }
  },
  data () {
    return {
      loaded: false,
      meal: {},
      nameFilter: '',
      selectedMealId: '',
      selectedMealQuantity: 0
    }
  },
  computed: {
    formattedType () {
      return this.type.replace(/-/g, ' ')
    },
    allFoods () {
      return [...this.$foods, ...this.$customFoods]
    },
    searchResult () {
      const filteredFoods = this.nameFilter
        ? this.allFoods.filter((food) =>
          food.name
            ? food.name.toLowerCase().includes(this.nameFilter.toLowerCase())
            : false
        )
        : this.allFoods
      return filteredFoods.sort((a, b) => {
        if (a.name < b.name) return -1
        if (a.name > b.name) return 1
        return 0
      })
    },
    isCustom () {
      return this.searchResult.length === 0
    },
    isCorrect () {
      // check if meal has every required field filled
      const isMealReady =
        this.nameFilter &&
        this.meal.calories &&
        this.meal.proteins &&
        this.meal.carbs &&
        this.meal.fat
      return this.selectedMealId || isMealReady
    }
  },
  mounted () {
    setTimeout(() => {
      this.loaded = true
    }, 1)
  },
  methods: {
    loadMeals () {
      this.$store.dispatch('weekPlan/getUpdatedMeals', this.$currentUser)
    },
    mealBoxClickHandler (id) {
      this.selectedMealId = id
      if (this.selectedMealQuantity === 9) this.selectedMealQuantity = 1
      else if (this.selectedMealQuantity === 1) this.selectedMealQuantity = 0.5
      else if (this.selectedMealQuantity === 0.5) this.selectedMealQuantity = 2
      else this.selectedMealQuantity += 1
    },
    close () {
      this.$emit('close')
    },
    saveClickHandler () {
      let shouldSave = false

      let foodToSave = this.selectedMealId
        ? this.allFoods.find((food) => food.id === this.selectedMealId)
        : this.meal
      if (!foodToSave.id) {
        foodToSave.id = Math.random().toString(16).substr(2, 10)
        foodToSave.calories = parseInt(foodToSave.calories)
        foodToSave.proteins = parseInt(foodToSave.proteins)
        foodToSave.carbs = parseInt(foodToSave.carbs)
        foodToSave.fat = parseInt(foodToSave.fat)
        foodToSave.name = foodToSave.name || this.nameFilter

        shouldSave = confirm('Would you like to save this food in the spreadsheet?')
      }

      foodToSave = {
        ...foodToSave,
        quantity: this.selectedMealQuantity
      }
      delete foodToSave._id
      this.$emit('save', { meal: foodToSave, shouldSave })
    }
  },
  watch: {
    nameFilter () {
      this.selectedMealId = ''
      this.selectedMealQuantity = 1
    },
    selectedMealId () {
      this.selectedMealQuantity = 1
    }
  }
}
</script>

<style lang="scss" scoped>
.loading {
  text-align: center;
  font-size: 20px;
  margin-top: 10px;
}

.results-header {
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #e0e0e0;
  margin-top: 4px;
  font-size: 14px;
  span {
    margin-left: 20px;
  }
}
.cta-wrapper {
  button {
    width: 100%;
    height: 40px;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    background-color: white;
    color: black;
    margin-top: 4px;
    &.save {
      background-color: #00bcd4;
      font-weight: bold;
      color: #fff;
    }
    &.close {
      margin-top: 12px;
    }
    &.disabled {
      opacity: 0.3;
      cursor: not-allowed;
    }
  }
}

header {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 16px;
  align-items: end;

  span {
    text-align: left;
    justify-content: left;
    display: flex;
    padding-top: 0;
    font-size: 24px;

    &.type {
      margin-left: 10px;
      font-size: 14px;
      margin-top: 8px;
    }
  }
}

.results-wrapper {
  margin: 16px 0 24px;
  height: 100%;
  overflow: scroll;

  > * {
    border-top: 1px solid #e6e6e6;
    padding-top: 6px;
    padding-bottom: 6px;
    &:first-child {
      border-top: none;
    }
  }
}

.wrapper {
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  background-color: white;
  margin: 12px auto;
  width: calc(100% - 24px);
  opacity: 0;
  transition: opacity 1s ease-in-out;
  transition-delay: 0.4s;
  // box-shadow: inset 0 12px 10px 5px rgba(124, 124, 124, 0.35);
  justify-content: space-between;
  &.loaded {
    opacity: 1;
  }
  max-height: calc(100vh - 100px);
}

.add-meal-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 0px;
  top: 20px;
  opacity: 0;
  z-index: 100;
  position: fixed;
  transition: opacity 0.3s ease-in-out;
  transition-delay: 0.4s;
  width: 100%;

  &.loaded {
    opacity: 1;
  }
}

.cta-wrapper {
  padding: 10px;
}
</style>
