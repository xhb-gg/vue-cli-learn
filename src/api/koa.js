import request from '@/utils/request'

// const prefix = 'common'

// 获取定义的数据采集类型
export function getList () {
  return request({
    url: `list`,
    method: 'get'
  })
}
