import { UsersService } from '@/services/users.service'

export default {
  loadCurrentUser ({ commit }) {
    const user = localStorage.getItem('user')
    commit('SET_CURRENT_USER', JSON.stringify(user))
    return user
  },
  login ({ commit }, user) {
    commit('SET_IS_LOADING', true)
    return UsersService.login(user)
      .then((response) => {
        commit('SET_IS_LOADING', false)
        commit('qa/SET_CURRENT_QA', response.data.QA, { root: true })
        localStorage.setItem('user', user)
        commit('SET_CURRENT_USER', response.data.user)
        return response.data
      })
      .catch((e) => {
        commit('SET_IS_LOADING', false)
        commit('SET_LOGIN_ERROR', e.message)
        throw e
      })
  }
}
