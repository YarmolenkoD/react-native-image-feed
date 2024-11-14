import axios from 'axios'

import { Config } from '@config'

const baseURL = Config.apiUrl || ''

const instanceCreator = (mediaType: any) =>
  axios.create({
    baseURL,
    headers: {
      'Content-Type': mediaType,
    },
  })

export const api = instanceCreator('application/json')

const configInterceptors = async (request: any) => {
  const accessToken = Config.apiKey

  if (accessToken) {
    request.headers.Authorization = accessToken
  }

  return request
}

const baseInterceptors = async (response: any) => {
  return response
}

api.interceptors.request.use(configInterceptors)

api.interceptors.response.use(baseInterceptors)
