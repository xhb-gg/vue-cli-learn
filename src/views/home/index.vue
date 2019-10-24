<template>
    <div>
        <!-- <p>首页</p>
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
        <p :[attributeName]="value">变量</p>
        <el-button type="primary" @click="handleAttriChange">改变</el-button> -->
        <!-- <el-button type="primary" size="small" @click="getStudentListData">proto</el-button> -->
        <user-chat></user-chat>
    </div>
</template>

<script>
import { getStudentList } from '@/api/student/index'
import userChat from './components/userChat'
import axios from 'axios'
import protoRoot from '@/proto/proto'
import protobuf from 'protobufjs'

export default {
  name: 'home',
  components: { userChat },
  data() {
    return {
      message: '',
      messageList: [],
      attributeName: 'title',
      value: 'ff',
      userCount: 'user-count'
    }
  },
  mounted() {
    var obj = {
      name: 'xu',
      printName() {
        console.log('name', this.name)
      }
    }

    var newObj = {
      name: 'xuhaibin'
    }

    var newPrintName = obj.printName.bind(newObj)

    newPrintName()

    class Person {
      constructor() {
        this.hobbies = []
      }

      addHobby(hobby) {
        this.hobbies.push(hobby)
      }

      static showHobby() {
        // static 中的this指向函数本身
        console.log('hobbies', this.name)
      }
    }

    const star = new Person()
    star.addHobby('唱歌')

    const student = new Person()
    student.addHobby('读书')
    Person.showHobby()
  },
  methods: {
    handleAttriChange() {
      this.attributeName = 'href'
    },
    encodeData(field, param) {
      const pbConstruct = protoRoot.lookup(field)
      const data = pbConstruct.create(param)
      return pbConstruct.encode(data).finish()
    },
    handleEncodeData(data) {
      const pbConstruct = protoRoot.lookup('Proto.Frame')
      const outterData = pbConstruct.decode(data)
      let protoTest = protoRoot.lookup('TestOne.S2C')
      let testDataResponse = protoTest.decode(outterData.payload)
      console.log(999, testDataResponse)
    },
    getStudentListData() {
      const field = {
        name: 'xuhaibin',
        password: '123456',
        version: '1'
      }
      const innerData = this.encodeData('TestOne.C2S', field)
      const outer = {
        messageType: 'TestOne',
        payload: innerData
      }
      const outerData = this.encodeData('Proto.Frame', outer)
      let vm = this
      const socket = new WebSocket('ws://10.221.230.148:8001')
      socket.onopen = function() {
        // Web Socket 已连接上，使用 send() 方法发送数据
        socket.send(outerData)
        console.log('数据发送中...')
      }
      socket.onmessage = function(evt) {
        vm.handleEncodeData(outerData)
        const data = evt.data

        let fileReader = new FileReader()
        fileReader.onload = function() {
          let arrayBuffer = this.result
          let protoFrame = protoRoot.lookup('Proto.Frame')
          let frameDataResponse = protoFrame.decode(new Uint8Array(arrayBuffer))
          let protoTest = protoRoot.lookup('TestOne.S2C')
          let testDataResponse = protoTest.decode(frameDataResponse.payload)
          console.log(frameDataResponse)
          console.log(testDataResponse)
        }
        fileReader.readAsArrayBuffer(data)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>