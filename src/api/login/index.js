import request from '@/utils/request'

const prefix = 'user'

// 用户登录
export function userLogin(param) {
  return request({
    url: `${prefix}/login`,
    method: 'post',
    data: {
      phone: param.phone,
      password: param.password
    }
  })
}
