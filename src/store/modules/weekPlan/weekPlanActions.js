import { WeekPlanService } from '@/services/weekPlan.service'
import { calculateDayMacros } from '../../../utils/calculateDayMacros'
export default {
  loadCurrentWeekPlan ({ commit, dispatch }) {
    try {
      const weekPlanLocal = JSON.parse(localStorage.getItem('plan'))
      dispatch('calculateProgress', { root: false })
      return commit('SET_CURRENT_WEEK_PLAN', weekPlanLocal)
    } catch (error) {
      dispatch(
        'toast/fire',
        { type: 'error', message: error.message },
        { root: true }
      )
    }
  },
  getUpdatedWeekPlan ({ commit, dispatch }, userId) {
    return WeekPlanService.fetchWeekPlan(userId)
      .then((weekPlan) => {
        commit('SET_CURRENT_WEEK_PLAN', weekPlan.data)
      })
      .catch((error) =>
        dispatch(
          'toast/fire',
          { type: 'error', message: error.message },
          { root: true }
        )
      )
  },
  getUpdatedMeta ({ commit, dispatch }, userId) {
    const metaLocal = JSON.parse(localStorage.getItem('meta'))
    metaLocal && commit('SET_CURRENT_META', metaLocal)

    return WeekPlanService.fetchMeta(userId)
      .then((meta) => {
        meta = meta.data
        let shouldUpdateMeta = false
        if (metaLocal === null) {
          shouldUpdateMeta = true
        } else {
          if (metaLocal._id !== meta._id) {
            shouldUpdateMeta = true
          }
        }
        console.log('is online')
        commit('SET_IS_ONLINE', true)
        if (shouldUpdateMeta) {
          console.log('Week updated!')
          commit('SET_FINISHED_MEALS', [])
          dispatch('getUpdatedWeekPlan', userId, { root: false })
          dispatch(
            'toast/fire',
            { type: 'success', message: 'Week plan updated!' },
            { root: true }
          )
          localStorage.setItem('meta', JSON.stringify(meta))
          return commit('SET_CURRENT_META', meta)
        }
      })
      .catch((error) => {
        commit('SET_IS_ONLINE', false)
        dispatch(
          'toast/fire',
          { type: 'error', message: error.message },
          { root: true }
        )
      })
  },

  async saveCustomMeal ({ commit, dispatch }, { user: userId, meal: food }) {
    try {
      const response = await WeekPlanService.saveCustomFood(userId, food)
      dispatch(
        'toast/fire',
        { type: 'success', message: 'Food saved!' },
        { root: true }
      )
      commit('ADD_FOOD', food)
      return response
    } catch (error) {
      dispatch(
        'toast/fire',
        { type: 'error', message: error.message },
        { root: true }
      )
    }
  },

  async getUpdatedMeals ({ commit, dispatch }, userId) {
    try {
      commit('SET_LOADING_FOODS', true)
      const response = await WeekPlanService.getFoods(userId)
      const foods = response.data
      const allFoods = foods
        .sort((a, b) => {
          if (a.name < b.name) {
            return -1
          }
          if (a.name > b.name) {
            return 1
          }
          return 0
        })
        .map((food) => ({
          ...food,
          id: food._id,
          _id: undefined
        }))
      commit('SET_LOADING_FOODS', false)
      commit('SET_FOODS', allFoods)
    } catch (error) {
      commit('SET_LOADING_FOODS', false)
      dispatch(
        'toast/fire',
        { type: 'error', message: error.message },
        { root: true }
      )
      const localFoods = JSON.parse(localStorage.getItem('foods'))
      commit('SET_FOODS', localFoods)
    }
  },
  removeCustomMeal ({ commit, state, dispatch }, { id: mealId, day }) {
    const _state = Object.create(state)
    const _weekPlan = { ..._state.plan }
    let meals = { ..._weekPlan[day] }.meals
    meals = meals.filter((m) => {
      return m.id !== mealId
    })
    const newMacros = calculateDayMacros(_weekPlan[day])
    _weekPlan[day] = {
      meals,
      ...newMacros
    }
    commit('SET_CURRENT_WEEK_PLAN', Object.create(_weekPlan))
    dispatch('calculateProgress', { root: false })
  },
  finishMeal ({ commit, dispatch }, mealId) {
    commit('ADD_FINISHED_MEAL', mealId)
    dispatch('calculateProgress', { root: false })
  },
  removeFinishedMeal ({ commit, dispatch }, mealId) {
    commit('REMOVE_FINISHED_MEAL', mealId)
    dispatch('calculateProgress', { root: false })
  },
  loadFinishedMeals ({ commit }) {
    let finishedMeals = JSON.parse(localStorage.getItem('finishedMeals'))
    if (!finishedMeals) {
      finishedMeals = []
    }
    localStorage.setItem('finishedMeals', JSON.stringify(finishedMeals))
    commit('SET_FINISHED_MEALS', finishedMeals)
  },
  calculateProgress ({ commit, state }) {
    if (!state.plan) return

    const progress = {
      monday: calculateProgressByDay(
        'monday',
        state.plan,
        state.doneMeals,
        state.meta
      ),
      tuesday: calculateProgressByDay(
        'tuesday',
        state.plan,
        state.doneMeals,
        state.meta
      ),
      wednesday: calculateProgressByDay(
        'wednesday',
        state.plan,
        state.doneMeals,
        state.meta
      ),
      thursday: calculateProgressByDay(
        'thursday',
        state.plan,
        state.doneMeals,
        state.meta
      ),
      friday: calculateProgressByDay(
        'friday',
        state.plan,
        state.doneMeals,
        state.meta
      ),
      saturday: calculateProgressByDay(
        'saturday',
        state.plan,
        state.doneMeals,
        state.meta
      ),
      sunday: calculateProgressByDay(
        'sunday',
        state.plan,
        state.doneMeals,
        state.meta
      )
    }
    const caloriesProgress = {
      monday: calculateCaloriesDay(state.plan.monday, state.doneMeals),
      tuesday: calculateCaloriesDay(state.plan.tuesday, state.doneMeals),
      wednesday: calculateCaloriesDay(state.plan.wednesday, state.doneMeals),
      thursday: calculateCaloriesDay(state.plan.thursday, state.doneMeals),
      friday: calculateCaloriesDay(state.plan.friday, state.doneMeals),
      saturday: calculateCaloriesDay(state.plan.saturday, state.doneMeals),
      sunday: calculateCaloriesDay(state.plan.sunday, state.doneMeals)
    }
    commit('SET_PROGRESS', progress)
    commit('SET_CALORIES_PROGRESS', caloriesProgress)
  }
}

const calculateCaloriesDay = (dayMeals, doneMeals) => {
  if (!dayMeals) return 0

  const finishedMeals = dayMeals.meals.filter((meal) =>
    doneMeals.includes(meal.id)
  )

  return finishedMeals.reduce((acc, meal) => acc + meal.calories, 0)
}

const calculateProgressByDay = (day, plan, doneMeals, goal) => {
  const dayMeals = plan[day].meals
  if (!dayMeals) return 0

  const finishedMeals = dayMeals.filter((meal) => doneMeals.includes(meal.id))

  const caloriesProgress = finishedMeals.reduce(
    (acc, meal) => acc + meal.calories * meal.quantity,
    0
  )
  const caloriesGoal = goal.calories

  const carbsProgress = finishedMeals.reduce(
    (acc, meal) => acc + meal.carbs * meal.quantity,
    0
  )
  const carbsGoal = goal.carbs

  const proteinProgress = finishedMeals.reduce(
    (acc, meal) => acc + meal.proteins * meal.quantity,
    0
  )
  const proteinGoal = goal.proteins

  const fatProgress = finishedMeals.reduce(
    (acc, meal) => acc + meal.fat * meal.quantity,
    0
  )
  const fatGoal = goal.fat

  const percentageCalories = (caloriesProgress / caloriesGoal) * 100
  const percentageCarbs = (carbsProgress / carbsGoal) * 100
  const percentageProtein = (proteinProgress / proteinGoal) * 100
  const percentageFat = (fatProgress / fatGoal) * 100

  if (caloriesGoal > 0) {
    const averagePercentage =
      (percentageCalories +
        percentageCarbs +
        percentageProtein +
        percentageFat) /
      4
    return averagePercentage
  }
  return 0
}
