import { QAService } from '@/services/qa.service'
export default {
  loadCurrentQA ({ commit, dispatch }) {
    try {
      const qaLocal = JSON.parse(localStorage.getItem('qa'))
      return commit('SET_CURRENT_QA', qaLocal)
    } catch (error) {
      dispatch(
        'toast/fire',
        { type: 'error', message: error.message },
        { root: true }
      )
    }
  },
  getUpdatedQA ({ commit, dispatch }, userId) {
    return QAService.fetchWeekPlan(userId)
      .then((qa) => {
        commit('SET_CURRENT_QA', qa.data)
      })
      .catch((error) =>
        dispatch(
          'toast/fire',
          { type: 'error', message: error.message },
          { root: true }
        )
      )
  },

  async saveCustomMeal ({ commit, dispatch }, { user: userId, meal: food }) {
    try {
      const response = await QAService.saveCustomFood(userId, food)
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
  }
}
