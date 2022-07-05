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
    return QAService.fetchQA(userId)
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

  saveAnswers ({ commit, dispatch }, { user: userId, answers }) {
    return QAService.writeAnswers(userId, answers)
      .then((qa) => {
        commit('SET_CURRENT_QA', qa.data)
        dispatch(
          'toast/fire',
          { type: 'success', message: 'Answers saved!' },
          { root: true }
        )
      })
      .catch((error) =>
        dispatch(
          'toast/fire',
          { type: 'error', message: error.message },
          { root: true }
        )
      )
  }
}
