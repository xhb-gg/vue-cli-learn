<template>
  <div class="toast">
    <p>{{message}}<i class="el-icon-close" @click="handleClose"></i></p>
  </div>
</template>
<script>
export default {
  name: "Toast",
  data() {
    return {
      message: '默认值',
      onClose: null,
      duration: 2000,
      closed: false
    }
  },
  mounted() {
    setTimeout(() => {
      // 3s 后通过父级移除子元素的方式来移除该组件实例和 DOM 节点
      if(!this.closed) {
        this.close()
        this.$destroy(true);
        this.$el.parentNode.removeChild(this.$el);
      }

    }, this.duration);
  },
  methods: {
    close() {
      if(typeof this.onClose === 'function') {
        this.onClose(this)
      }
    },
    handleClose() {
      this.closed = true
      this.close()
      this.$destroy(true)
      this.$el.parentNode.removeChild(this.$el)
    }
  },
};
</script>
<style lang="scss" scoped>
.toast {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  color: #fff;
  z-index: 9999;
  background: transparent;
  > p {
    padding: 12px 22px;
    font-size: 18px;
    border-radius: 4px;
    background: rgba(17, 17, 17, 0.7);
  }
}
</style>
