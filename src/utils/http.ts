import type { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import { createUniAppAxiosAdapter } from '@uni-helper/axios-adapter'
import axios from 'axios'

const RELEASE_API_BASE_PREFIX = 'https://sys1.lfqqd.com/index.php/staff/api/index'
const DEV_API_BASE_PREFIX = 'http://tk.lfqqd.com/index.php/staff/api/index'
const { envVersion } = uni.getAccountInfoSync().miniProgram

// 创建实例
export const axiosInstance = axios.create({
  adapter: createUniAppAxiosAdapter(),
  // 前缀
  baseURL: envVersion === 'release' ? RELEASE_API_BASE_PREFIX : DEV_API_BASE_PREFIX,
  // 超时
  timeout: 1000 * 30,
  // 请求头
  headers: {
    'Content-Type': 'application/json',
  },
})
// 请求拦截器
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // TODO 在这里可以加上想要在请求发送前处理的逻辑
    // TODO 比如 loading 等
    return config
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  },
)

// 响应拦截器
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.status === 200)
      return response.data

    return Promise.reject(response.data)
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  },
)

export function get<RES = any, REQ = object>(path: string, data?: REQ): Promise<RES> {
  return axiosInstance(path, {
    method: 'get',
    params: data,
  })
}
export function post<RES extends string | object>(path: string, data?: Record<string, any>): Promise<RES> {
  return axiosInstance(path, {
    method: 'post',
    data,
  })
}
