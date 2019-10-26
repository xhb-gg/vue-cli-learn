<template>
  <div class="user-chat-container">
    <div class="chat-list-container">
      <ul>
        <li v-for="(chat, index) in messageList" :key="index">{{chat}}</li>
      </ul>
    </div>
    <div class="chat-bottom-area flex">
      <el-input type="textarea" autosize placeholder="请输入内容" v-model="chat"></el-input>
      <el-button type="primary" plain size="mini" @click="handleSocket">发送</el-button>
    </div>
  </div>
</template>

<script>
const io = require('socket.io-client')
import protoRoot from '@/proto/proto'

let vm = ''

export default {
  name: 'userCount',
  // inheritAttrs: false,
  props: ['isUpdate', 'isRefresh'],
  inject: ['provideTestData'],
  data() {
    return {
      chat: '',
      messageList: [],
      socketId: ''
    }
  },
  created() {
    console.log('测试created与inject的先后')
  },
  mounted() {
    function selfFun(name) {
      this.name = name
    }
    let testObj = new selfFun('xuhaibin')
    console.log(Object.getPrototypeOf(testObj) === selfFun.prototype)
    vm = this
    this.socket = io('http://10.221.230.190:7777')
    this.socket.on('socketId', data => {
      this.socketId = data
    })
    this.socket.on('message', data => {
      vm.messageList.push(data)
    })
    this.socket.on('userDisconnect', data => {
      console.log('userDisconnect')
    })
  },
  methods: {
    encodeData(field, param) {
      const pbConstruct = protoRoot.lookup(field)
      const data = pbConstruct.create(param)
      return pbConstruct.encode(data).finish()
    },
    handleSocket() {
      this.$emit('update:isRefresh', !this.isRefresh)
      if (!this.chat) {
        this.$message.error('不能发送空白消息哦')
        return
      }

      this.socket.emit('open', vm.chat)
      this.chat = ''
    }
  }
}
</script>

<style lang="scss" scoped>
.user-chat-container {
  .chat-bottom-area {
    position: fixed;
    bottom: 0px;
    width: 100%;
    padding: 5px;
    border-top: 0.5px solid rgba(215, 218, 226, 0.5);
  }
}
</style>