import Vue from 'vue'
import axios from 'axios'
import { ApiError } from '@oit/api-error'
import { Message } from 'element-ui'
import API_SERVICE from './enum/API_SERVICE'
import API_STATUS from './enum/API_STATUS'

const axiosInstance = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
})

// 添加请求拦截器
axiosInstance.interceptors.request.use((config) => {
  config.headers.token = localStorage.getItem('token')
  return config
}, (error) => {
  return Promise.reject(new ApiError({ error }))
})

// 添加响应拦截器
axiosInstance.interceptors.response.use((response) => {
  if (response.data.head?.status !== API_STATUS.OK) {
    return Promise.reject(new ApiError({
      response,
      message: response.data.head.msg,
      status: response.data.head.status,
    }))
  }
  return response
}, async (error) => {
  return Promise.reject(new ApiError({ error }))
})

export function post(url, params = {}, config = {}) {
  const userData = {}

  params = {
    head: {
      aid: userData.id,
      cmd: config.cmd,
      ver: '1.0',
      ln: 'cn',
      mod: 'app',
      de: '2019-10-16',
      sync: 1,
      uuid: userData.brandId,
      chcode: 'ef19843298ae8f2134f',
    },
    con: params,
  }

  return axiosInstance
    .post(url, params, config)
    .then(res => res.data)
}

/**
 * 创建拼接请求服务的请求函数
 */
Object.values(API_SERVICE).forEach((service) => {
  post[service] = function (url, params, config) {
    return post(`/${service}${url}`, params, config)
  }
})

Vue.config.errorHandler = (err, vm, info) => {
  console.error(err)
  // 处理接口错误
  if (err instanceof ApiError) {
    // 输出提示消息
    Message.error(err.message)
  } else {
    Vue.util.warn(err, vm)
  }
}
