import { BaseService } from './base.service'
import { ErrorWrapper, ResponseWrapper } from './util'

export class QAService extends BaseService {
  static get entity () {
    return 'qa'
  }

  static async fetchQA (userId) {
    try {
      const response = await this.request(userId).get(
        `${this.entity}/`
      )
      return new ResponseWrapper(response, response.data)
    } catch (error) {
      const message = error.response.data
        ? error.response.data.error
        : error.response.statusText
      throw new ErrorWrapper(error, message)
    }
  }

  static async fetchMeta (userId) {
    try {
      const response = await this.request(userId).get(`${this.entity}/meta`)
      return new ResponseWrapper(response, response.data)
    } catch (error) {
      const message = error.response.data
        ? error.response.data.error
        : error.response.statusText
      throw new ErrorWrapper(error, message)
    }
  }

  static async saveCustomFood (userId, food) {
    try {
      const response = await this.request(userId).post(`${this.entity}/food`, food)
      return new ResponseWrapper(response, response.data)
    } catch (error) {
      const message = error.response.data
        ? error.response.data.error
        : error.response.statusText
      throw new ErrorWrapper(error, message)
    }
  }
}
