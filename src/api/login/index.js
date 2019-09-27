import request from '@/utils/request'

// const prefix = 'common'

// 用户登录
export function userLogin (param) {
  return request({
    url: `login`,
    method: 'post',
    data: {
      phone: param.phone,
      password: param.password
    }
  })
}
