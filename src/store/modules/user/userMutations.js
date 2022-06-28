export default {
  SET_CURRENT_USER (state, currentUserData) {
    state.currentUser = currentUserData
  },
  SET_IS_LOADING (state, isLoading) {
    state.isLoading = isLoading
  },
  SET_LOGIN_ERROR (state, loginError) {
    state.loginError = loginError
  }
}
