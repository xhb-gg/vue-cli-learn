<template>
  <div>
    <vue-baberrage class="barrage-custom" :boxHeight="boxHeight" :isShow="barrageIsShow" :barrageList="barrageList" :loop="barrageLoop"></vue-baberrage>
  </div>
</template>

<script>
import { MESSAGE_TYPE } from 'vue-baberrage'

export default {
  data() {
    let w = document.documentElement.clientWidth || document.body.clientWidth
    return {
      msg: 'Hello vue-baberrage',
      barrageIsShow: true,
      currentId: 0,
      barrageLoop: true,
      barrageList: [],
      boxHeight: w * 0.38
    }
  },
  mounted() {
      this.reviewList = [
          "表情还有问题喔",
          "是兄弟，来评论我",
          "你好啊",
          "天气真好",
          "我在",
          "高山有机茶园???"
      ]
      let len = this.reviewList.length
      for(let i = 0; i < this.reviewList.length; i++) {
        let strLen = this.reviewList[i].length
        this.init(strLen)
      }
  },
  methods: {
    init(i) {
      this.barrageList.push({
        id: ++this.currentId,
        avatar: '#',
        msg: this.msg + this.currentId,
        time: i,
        type: MESSAGE_TYPE.NORMAL
      })
    }
  }
}
</script>

<style lang="scss">
.barrage-custom {
}
</style>