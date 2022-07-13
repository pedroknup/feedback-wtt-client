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
    commit('SET_IS_LOADING_QA', true)
    return QAService.fetchQA(userId)
      .then((qa) => {
        console.log('qa', qa)
        commit('SET_IS_LOADING_QA', false)
        commit('SET_CURRENT_QA', qa.data)
      })
      .catch((error) => {
        commit('SET_IS_LOADING_QA', false)
        dispatch(
          'toast/fire',
          { type: 'error', message: error.message },
          { root: true }
        )
      }
      )
  },

  saveAnswers ({ commit, dispatch }, { user: userId, answers }) {
    commit('SET_IS_LOADING_QA', true)
    return QAService.writeAnswers(userId, answers)
      .then((qa) => {
        commit('SET_IS_LOADING_QA', false)
        commit('SET_CURRENT_QA', qa.data)
        dispatch(
          'toast/fire',
          { type: 'success', message: 'Feedback concluído' },
          { root: true }
        )
      })
      .catch((error) => {
        commit('SET_IS_LOADING_QA', false)
        dispatch(
          'toast/fire',
          { type: 'error', message: error.message },
          { root: true }
        )
      }
      )
  }
}
