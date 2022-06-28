export default {
  SET_CURRENT_USER (state, currentUserData) {
    if (typeof currentUserData === 'string') return

    console.log('setting current user', currentUserData)
    state.currentUser = currentUserData
    localStorage.setItem('user', currentUserData)
  },
  SET_IS_LOADING (state, isLoading) {
    state.isLoading = isLoading
  },
  SET_LOGIN_ERROR (state, loginError) {
    state.loginError = loginError
  }
}
