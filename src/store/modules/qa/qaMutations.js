export default {
  SET_CURRENT_QA (state, qa) {
    if (!qa) return

    state.qa = qa
    localStorage.setItem('qa', JSON.stringify(qa))
  },
  SET_IS_LOADING_QA (state, isLoading) {
    state.isLoadingQA = isLoading
  }
}
