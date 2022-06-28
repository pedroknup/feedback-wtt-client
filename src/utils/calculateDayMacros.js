const calculateDayMacros = ({ meals }) => {
  if (!meals) return {}
  const calories = meals.reduce((acc, meal) => {
    const mealCalories = meal !== undefined ? meal.calories * meal.quantity : 0
    return acc + mealCalories
  }, 0)

  const proteins = meals.reduce((acc, meal) => {
    const mealProteins = meal !== undefined ? meal.proteins * meal.quantity : 0

    return acc + mealProteins
  }, 0)

  // sum up all the carbs for the day
  const carbs = meals.reduce((acc, meal) => {
    const mealCarbs = meal !== undefined ? meal.carbs * meal.quantity : 0
    return acc + mealCarbs
  }, 0)

  // sum up all the fat for the day
  const fat = meals.reduce((acc, meal) => {
    const mealFat = meal !== undefined ? meal.fat * meal.quantity : 0
    return acc + mealFat
  }, 0)

  return {
    calories,
    proteins,
    carbs,
    fat
  }
}

export { calculateDayMacros }
