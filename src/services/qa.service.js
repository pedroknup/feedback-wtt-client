import { BaseService } from './base.service'
import { ErrorWrapper, ResponseWrapper } from './util'

export class QAService extends BaseService {
  static get entity () {
    return '/qa'
  }

  static async fetchQA (userId) {
    try {
      const response = await this.request(userId).get(
        `${this.entity}/`
      )
      return new ResponseWrapper(response, response.data.QA)
    } catch (error) {
      const message = error.response.data
        ? error.response.data.error
        : error.response.statusText
      throw new ErrorWrapper(error, message)
    }
  }

  static async writeAnswers (userId, answers) {
    try {
      const response = await this.request(userId).post(
        `${this.entity}/`,
        { answers }
      )
      return new ResponseWrapper(response, response.data)
    } catch (error) {
      const message = error.response.data
        ? error.response.data.error
        : error.response.statusText
      throw new ErrorWrapper(error, message)
    }
  }
}
