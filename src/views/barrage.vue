<template>
  <div class="page-barrage">
    <div ref="barr" class="barrage-custom" v-for="(item, index) in barrageList" :key="index">
      <transition
        name="barrage-move"
        @before-enter="beforeEnter"
        @enter="handleEneter"
        @after-enter="afterEnter"
        @after-leave="afterLeave"
      >
        <div :data-index="index" :class="'barrage-box-' + index" v-if="item.show" @mousemove="handleMousemove(index)" @mouseout="handleMouseout(index)">
          <div class="barrage-box-content">{{item.content}}</div>
        </div>
      </transition>
    </div>
    <!-- <el-button @click="handleStatusChange">改变状态</el-button> -->
  </div>
</template>

<script>
export default {
  name: 'barrage',
  data() {
    return {
      barrageList: [
        {
          content: '这是弹幕一',
          show: false
        },
        {
          content: '这是弹幕二',
          show: false
        }
      ]
    }
  },
  mounted() {
    let len = this.barrageList.length
    for(let i = 0; i < len; i++) {
      setTimeout(() => {
        this.barrageList[i].show = true
      }, i * 10)
    }
  },
  methods: {
    beforeEnter(el) {
    },
    handleEneter(el) {
      let child = (el.querySelector('.barrage-box-content').offsetWidth * 2 - document.body.clientWidth + 'px')
      console.log(7777, child)
      el.style.transform = `translateX(${child})`
    },
    afterEnter(el) {
      this.barrageList[el.dataset.index].show = false
    },
    afterLeave(el) {
      this.barrageList[el.dataset.index].show = true
    },
    handleMousemove(index) {
      this.barrageList[index].show = false
    },
    handleMouseout(index) {
      this.barrageList[index].show = true
    }
  }
}
</script>

<style lang="scss" scoped>
.page-barrage {
  width: 100%;
  .barrage-custom {
    width: 100%;
    overflow: hidden;
    .barrage-box {
      transform: translateX(100%);
      .barrage-box-content {
        display: inline-block;
        white-space: nowrap;
        background-color: rgba(0, 0, 0, 0.38);
        height: 48px;
        line-height: 48px;
        padding: 0 5px;
        border-radius: 24px;
        border: 1px solid rgba(255, 255, 255, 1);
        color: rgba(255, 255, 255, 1);
      }
    }
  }
  .barrage-move-enter-active {
    opacity: 0.8;
    transition: all 5s ease-in;
  }
  .barrage-move-leave-active {
    // opacity: 0;
    // transform: translateX(100%);
    transition: all 0.2s ease-in;
  }
}
</style>