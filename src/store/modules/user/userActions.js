import { UsersService } from '@/services/users.service'

export default {
  getCurrent ({ commit }) {
    const user = localStorage.getItem('user')
    commit('SET_CURRENT_USER', user)
    return user
  },
  login ({ commit }, user) {
    commit('SET_IS_LOADING', true)
    return UsersService.login(user)
      .then((response) => {
        commit('SET_IS_LOADING', false)
        commit('weekPlan/SET_CURRENT_META', response.data, { root: true })
        localStorage.setItem('user', user)
        commit('SET_CURRENT_USER', user)
        return response.data
      })
      .catch((e) => {
        commit('SET_IS_LOADING', false)
        commit('SET_LOGIN_ERROR', e.message)
        throw e
      })
  }
}
