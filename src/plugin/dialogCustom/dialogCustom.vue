<template>
  <el-dialog
    :title="title"
    :visible.sync="dialogVisible"
    width="30%"
    center
    custom-class="custom-dialog-prompt"
    @close="handleClose"
  >
    <!-- <span>{{message}}</span> -->
    <div style="padding: 0 10px;">
      <div class="tip-img-container">
        <img :src="tipImg" alt="提示图片" />
      </div>
      <div class="sub-tip">温馨提示</div>
      <div class="sub-title">{{message}}</div>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button class="custom-button-cancel" size="small" @click="handleClose">{{cancelButtonText}}</el-button>
      <el-button class="custom-button-confirm" size="small" type="primary" @click="handleConfirm">{{confirmButtonText}}</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  name: 'dialogCustom',
  data() {
    return {
      tipImg: './images/delete_warn.png',
      title: '',
      dialogVisible: false,
      message: '',
      cancelButtonText: '取消',
      confirmButtonText: '确定',
      cancelCallback: null,
      confirmCallback: null
    }
  },
  methods: {
    handleClose() {
      this.dialogVisible = false
      if(typeof this.cancelCallback === 'function') {
        this.cancelCallback(this)
      }
    },
    handleConfirm() {
      this.dialogVisible = false
      if(typeof this.confirmCallback === 'function') {
        this.confirmCallback(this)
      }
    }
  }
}
</script>

<style lang="scss">
.el-dialog__wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.custom-dialog-prompt {
  .el-dialog__body {
    text-align: center !important;
  }
  .tip-img-container {
    margin: 10px 0 25px;
    img {
      width: 59px;
      height: 59px;
    }
  }
  .sub-tip {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 15px;
    letter-spacing: 1px;
  }
  .sub-title {
    color: #a9adb7;
    line-height: 30px;
  }
}
</style>