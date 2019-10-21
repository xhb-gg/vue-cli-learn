<template>
    <div>
        <p>首页</p>
        <el-input
            type="textarea"
            :rows="2"
            placeholder="请输入内容"
            v-model="message">
        </el-input>
        <el-button type="primary" size="small" @click="handleSocket">发送</el-button>
        <p>消息列表</p>
        <ul>
            <li v-for="(message, index) in messageList" :key="index">{{message}}</li>
        </ul>
    </div>
</template>

<script>
const io = require('socket.io-client')

let vm = ''

export default {
  name: 'home',
  data() {
    return {
      message: '',
      messageList: []
    }
  },
  mounted() {
    vm = this
    this.socket = io('http://10.221.230.190:7777')
    this.socket.on('message', data => {
      console.log('server socket message', data)
      vm.messageList.push(data)
    })
  },
  methods: {
    handleSocket() {
      this.socket.emit('postMessage', { message: vm.message })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>