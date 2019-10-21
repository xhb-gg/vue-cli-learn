import request from '@/utils/request'

// const prefix = 'common'

// 获取地图数据
export function getGeoJsonData(param) {
  return request({
    url: `http://datavmap-public.oss-cn-hangzhou.aliyuncs.com/areas/children/${param.adcode}.json`,
    method: 'get'
  })
}
