<template>
  <div id="plugin-container">
    <el-upload
      class="upload-demo"
      drag
      :show-file-list="false"
      action
      :http-request="beforeUploadOss"
    >
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">
        将文件拖到此处，或
        <em>点击上传</em>
      </div>
      <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
    <img :src="imgSrc" alt />
    <!-- <el-tabs v-model="activeName">
      <el-tab-pane
        :label="tab.label"
        :name="tab.value"
        v-for="(tab, index) in tabList"
        :key="index"
      >
        <keep-alive>
          <component :is="activeName"></component>
        </keep-alive>
      </el-tab-pane>
    </el-tabs>-->
    <!-- <details>
      <summary>查看代码示例</summary>
    </details>-->
  </div>
</template>

<script>
import { uploadImg } from '@/api/upload'
import responseHandler from '@/utils/response'
import componentA from './components/componentA'
import componentB from './components/componentB'
import moment from 'moment'

export default {
  name: 'pluginPage',
  components: { componentA, componentB },
  data() {
    return {
      temp: {
        file: ''
      },
      fileList: [],
      activeName: 'component-a',
      tabList: [
        {
          label: '组件A',
          value: 'component-a'
        },
        {
          label: '组件B',
          value: 'component-b'
        }
      ],
      imgSrc: ''
    }
  },
  mounted() {
    // var str = 'visit microsoft!'
    // console.log(
    //   str.replace(/\b\w/g, word => {
    //     return word.toUpperCase()
    //   })
    // )
    // let i = 0
    // for (let i = 0; i < 3; i++) {
    //   const log = () => {
    //     console.log('i的值', i)
    //   }
    //   setTimeout(log, 100)
    // }
    const o = { name: 'xuhaibin' }
    function Person(name = 'test') {
      this.name = name
    }
  },
  methods: {
    beforeUploadOss(param) {
      this.temp.file = param.file
      if (this.temp.file.type.indexOf('image') === -1) {
        this.handleUploadImg(this.temp.file)
      } else {
        const reader = new FileReader()
        const img = new Image()
        const vm = this
        reader.onload = e => {
          img.src = e.target.result
        }
        img.onload = function() {
          const [targetWidth, targetHeight] = vm.handleRatioScale(
            this.width,
            this.height
          )
          // canvas 对图片进行缩放
          const canvas = document.createElement('canvas')
          const ctx = canvas.getContext('2d')
          canvas.width = targetWidth
          canvas.height = targetHeight
          ctx.clearRect(0, 0, targetWidth, targetHeight)
          ctx.drawImage(img, 0, 0, targetWidth, targetHeight)
          canvas.toBlob(blob => {
            const file = vm.blobToFile(blob, vm.temp.file.name)
            vm.handleUploadImg(file)
          }, vm.temp.file.type || 'image/png')
        }
        reader.readAsDataURL(param.file)
      }
    },
    // 等比例缩放图片比例
    handleRatioScale(width, height, maxWidth = 600, maxHeight = 600) {
      let targetWidth = width
      let targetHeight = height
      if (targetWidth > maxWidth || targetHeight > maxHeight) {
        if (targetWidth / maxWidth > targetHeight / maxHeight) {
          targetWidth = maxWidth
          targetHeight = Math.round(maxWidth * (height / width))
        } else {
          targetHeight = maxHeight
          targetWidth = Math.round(maxHeight * (width / height))
        }
      }
      return [targetWidth, targetHeight]
    },
    // 将blob转换为file
    blobToFile(theBlob, fileName = '', fileType = 'image') {
      theBlob.lastModifiedDate = new Date()
      theBlob.name = fileName
      return theBlob
    },
    async handleUploadImg(file) {
      const resp = await uploadImg({
        file
      })
      responseHandler.bind(this)(resp, () => {
        const data = resp.data
        if (data) {
          this.fileList.push(data)
        }
      })
    }
  }
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