import axios from 'axios'
import store from '@/store'
import { getToken, koaToken } from '@/utils/auth'

// 创建axios实例
const service = axios.create({
  baseURL: 'http://10.221.230.190:8000' || process.env.BASE_API, // api的base_url // http://10.221.230.69:8060 https://api.farm.stdag.cn/v1(http://47.106.82.25:8060/swagger-ui.html)
  timeout: 5000, // 请求超时时间
  withCredentials: false
})

// request拦截器
service.interceptors.request.use(
  config => {
    const token = 'Bearer ' + (store.getters.token || getToken(koaToken))
    config.headers['Authorization'] = token
    if (config.hasFile) {
      config.headers['Content-Type'] = `multipart/form-data;`
    }
    return config
  },
  error => {
    console.log(error) // for debug
  }
)

// respone拦截器
service.interceptors.response.use(
  response => {
    if (
      response.status === 200 &&
      response.data &&
      response.data.code === 401
    ) {
      store.dispatch('logout').then(resp => {
        location.reload()
      })
    }
    return response.data
  },
  error => {
    console.log(error)
  }
)

export default service
