import axios from 'axios'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url // http://10.221.230.69:8060 https://api.farm.stdag.cn/v1(http://47.106.82.25:8060/swagger-ui.html)
  timeout: 5000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(config => {
  return config
}, error => {
  console.log(error) // for debug
})

// respone拦截器
service.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    console.log(error)
  }
)

export default service
