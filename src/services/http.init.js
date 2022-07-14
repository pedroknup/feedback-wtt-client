/**
 * HTTP request layer
 * if auth is required return patched axios instance(with access token in headers)
 * else return clear axios instance
 */

import axios from 'axios'

// import { AuthService } from '@/services/auth.service'
require('dotenv').config()

const { VUE_APP_API_URL } = process.env

export class Http {
  constructor (user) {
    this.instance = axios.create({
      baseURL: VUE_APP_API_URL,
      headers: {
        'x-apikey': '59a7ad19f5a9fa0808f11931',
        user: user,
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
      }
    })

    return this.init()
  }

  init () {
    // if (this.isAuth) {
    //   this.instance.interceptors.request.use(request => {
    //     request.headers.authorization = AuthService.getBearer()
    //     // if access token expired and refreshToken is exist >> go to API and get new access token
    //     if (AuthService.isAccessTokenExpired() && AuthService.hasRefreshToken()) {
    //       return AuthService.debounceRefreshTokens()
    //         .then(response => {
    //           AuthService.setBearer(response.data.accessToken)
    //           request.headers.authorization = AuthService.getBearer()
    //           return request
    //         }).catch(error => Promise.reject(error))
    //     } else {
    //       return request
    //     }
    //   }, error => {
    //     return Promise.reject(error)
    //   })
    // }

    return this.instance
  }
}
