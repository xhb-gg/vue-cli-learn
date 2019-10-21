import request from '@/utils/request'

const prefix = 'upload'

// 上传图片
export function uploadImg(param) {
  const formData = new FormData()
  formData.append('file', param.file)
  return request({
    url: `${prefix}/img`,
    method: 'post',
    hasFile: true,
    data: formData
  })
}
