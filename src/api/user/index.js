import request from '@/utils/request'
// import libRequest from '@/lib/request'

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

// 创建用户
export function createUser(param) {
  return request({
    url: `${prefix}/userList`,
    method: 'post',
    responseType: 'arraybuffer',
    data: {
      sex: param.sex,
      name: param.name,
      age: param.age
    }
  })
}

// 获取用户列表
export function getUserList(param) {
  return request({
    url: `${prefix}/userList`,
    method: 'get'
  })
}

// 获取某个用户信息
export function getUserByUserId(param) {
  return request({
    url: `${prefix}/${param.userId}`,
    method: 'get'
  })
}
