import axios from 'axios'
import protoRoot from '@/proto/proto'

// params是object类型的请求参数
// school.PBStudentListReq 是定义好的请求体model
// school.PBStudentListRsp 是定义好的响应model
// getStudentList 是接口名称

// 请求体message
const PBMessageRequest = protoRoot.lookup('TestOne.C2S')

const httpService = axios.create({
  baseURL: 'ws://10.221.230.148:8001',
  timeout: 45000,
  method: 'post',
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/octet-stream'
  },
  transformRequest: function(data) {
    return PBMessageRequest.encode(data).finish()
  },
  responseType: 'arraybuffer'
})

export function getStudentList(params) {
  return httpService({
    method: 'post',
    data: {
      name: params.name,
      password: params.password,
      version: params.version
    }
  })
}
