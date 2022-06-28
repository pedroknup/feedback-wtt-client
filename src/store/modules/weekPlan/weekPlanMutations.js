export default {
  ADD_CUSTOM_MEAL (state, { meal, day, type, shouldSave }) {
    let differentMealsCount = -1
    let correctedIndex = null
    let currentMeal = null
    for (
      let i = 0;
      i < state.plan[day].meals.length && correctedIndex === null;
      i++
    ) {
      if (i === 0) {
        differentMealsCount = 0
      } else {
        if (
          state.plan[day].meals[i].meal !== state.plan[day].meals[i - 1].meal
        ) {
          differentMealsCount++
        }
      }
      if (differentMealsCount === type.index) {
        currentMeal = state.plan[day].meals[i].meal
        correctedIndex = i
      }
    }
    meal.meal = currentMeal
    const meals = [
      ...state.plan[day].meals.slice(0, correctedIndex + 1),
      meal,
      ...state.plan[day].meals.slice(correctedIndex + 1)
    ]
    state.plan[day].meals = meals
    state.plan[day].calories += meal.calories
    state.plan[day].proteins += meal.proteins
    state.plan[day].carbs += meal.carbs
    state.plan[day].fat += meal.fat

    localStorage.setItem('plan', JSON.stringify(state.plan))
  },
  SET_CURRENT_WEEK_PLAN (state, weekPlan) {
    if (!weekPlan) return

    const weekDays = [
      'monday',
      'tuesday',
      'wednesday',
      'thursday',
      'friday',
      'saturday',
      'sunday'
    ]
    let shouldUpdate = true
    weekDays.forEach((day) => {
      if (!weekPlan[day]) {
        shouldUpdate = false
      }
    })
    const finalWeekPlan = {
      monday: weekPlan.monday,
      tuesday: weekPlan.tuesday,
      wednesday: weekPlan.wednesday,
      thursday: weekPlan.thursday,
      friday: weekPlan.friday,
      saturday: weekPlan.saturday,
      sunday: weekPlan.sunday
    }
    if (shouldUpdate) {
      state.plan = finalWeekPlan
      localStorage.setItem('plan', JSON.stringify(finalWeekPlan))
    }
  },
  SET_CURRENT_META (state, meta) {
    state.meta = meta
  },
  ADD_FINISHED_MEAL (state, mealId) {
    const mealIds = state.doneMeals
    mealIds.push(mealId)
    state.doneMeals = mealIds
    localStorage.setItem('finishedMeals', JSON.stringify(mealIds))
  },
  REMOVE_FINISHED_MEAL (state, mealId) {
    const mealIds = state.doneMeals.filter((id) => id !== mealId)
    state.doneMeals = mealIds
    localStorage.setItem('finishedMeals', JSON.stringify(mealIds))
  },
  SET_FINISHED_MEALS (state, mealIds) {
    state.doneMeals = mealIds
    localStorage.setItem('finishedMeals', JSON.stringify(mealIds))
  },
  SET_PROGRESS (state, progress) {
    state.progress = progress
  },
  SET_CALORIES_PROGRESS (state, progress) {
    state.caloriesProgress = progress
  },
  SET_LOADING_FOODS (state, isLoading) {
    state.isLoadingFoods = isLoading
  },
  SET_FOODS (state, foods) {
    state.foods = foods
    localStorage.setItem('foods', JSON.stringify(foods))
  },
  ADD_FOOD (state, food) {
    state.foods.push(food)
    localStorage.setItem('foods', JSON.stringify(state.foods))
  },
  ADD_LOCAL_PLAN (state, plan) {
    const plans = state.plans
    plans.push(plan)
    state.plans = plans
    localStorage.setItem('plans', JSON.stringify(plans))
  },
  ADD_LOCAL_FOOD (state, food) {
    const localFoods = state.localFoods
    localFoods.push(food)
    state.localFoods = localFoods
    localStorage.setItem('localFoods', JSON.stringify(localFoods))
  },
  SET_CUSTOM_FOODS (state, customFoods) {
    state.localFoods = customFoods
    localStorage.setItem('customFoods', JSON.stringify(customFoods))
  },
  ADD_CUSTOM_FOOD (state, food) {
    const customFoods = state.customFoods
    customFoods.push(food)
    state.customFoods = customFoods
    localStorage.setItem('customFoods', JSON.stringify(customFoods))
  },
  SET_IS_ONLINE (state, isOnline) {
    state.isOnline = isOnline
  }
}
