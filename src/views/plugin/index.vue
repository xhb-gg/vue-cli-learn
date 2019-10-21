<template>
    <div>
      <el-upload
        class="upload-demo"
        drag
        action
        :http-request="beforeUploadOss"
        multiple>
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>

      {{fileList}}

      <ul class="img-container flex">
        <li v-for="(img, index) in fileList" :key="index">
          <img :src="img" alt="">
        </li>
      </ul>
    </div>
</template>

<script>
import { uploadImg } from '@/api/upload'
import responseHandler from '@/utils/response'

export default {
  name: 'pluginPage',
  data() {
    return {
      temp: {
        file: ''
      },
      fileList: []
    }
  },
  mounted() {
    var str = 'visit microsoft!'
    console.log(
      str.replace(/\b\w/g, word => {
        return word.toUpperCase()
      })
    )

    // let i = 0
    for(let i = 0; i < 3; i++) {
      const log = () => {
        console.log('i的值', i)
      }
      setTimeout(log, 100)
    }
  },
  methods: {
    beforeUploadOss(param) {
      this.temp.file = param.file
      this.handleUploadImg()
    },
    async handleUploadImg() {
      const resp = await uploadImg({
        ...this.temp
      })
      responseHandler.bind(this)(resp, () => {
        const data = resp.data
        if(data) {
          this.fileList.push(data)
        }
      })
    }
  },
}
</script>

<style lang="scss" scoped>
.img-container {
  img {
    width: 60px;
    height: 60px;
    object-fit: cover;
  }
}
</style>