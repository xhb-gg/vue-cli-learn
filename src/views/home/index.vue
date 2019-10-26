<template>
  <div id="homePage">
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
    <el-button type="primary" @click="handleAttriChange">改变</el-button>-->
    <!-- <el-button type="primary" size="small" @click="getStudentListData">proto</el-button> -->
    <user-chat :isRefresh.sync="isRefresh" :isUpdate="true" placeholder="Enter your message"></user-chat>
    <!-- <base-input v-model="testValue"></base-input> -->
    <!-- <div class="flex flex-center-v">
      <span>好友列表：</span>
      <base-select :selectList="friendList" v-model="currentFriendId"></base-select>
    </div>-->
  </div>
</template>

<script>
import { getStudentList } from '@/api/student/index'
import userChat from './components/userChat'
import baseInput from './components/baseInput'
import baseSelect from './components/baseSelect'
import axios from 'axios'
import protoRoot from '@/proto/proto'
import protobuf from 'protobufjs'
import AddDom from './components/addDom'

let socket = null

socket = new WebSocket('ws://10.221.230.148:8001')

socket.onopen = function() {
  console.log('socket已经建立连接')
}

export default {
  name: 'home',
  components: { userChat, baseInput, baseSelect },
  provide: function() {
    return {
      provideTestData: 'xixi'
    }
  },
  data() {
    return {
      message: '',
      messageList: [],
      attributeName: 'title',
      value: 'ff',
      userCount: 'user-count',
      testValue: 'haha',
      friendList: [
        {
          label: '张三',
          value: '1'
        },
        {
          label: '李四',
          value: '2'
        }
      ],
      currentFriendId: '1',
      isRefresh: false
    }
  },
  mounted() {
    let dom = new AddDom('p', 'homePage')
    dom.init()

    this.$once('hook:beforeDestroy', function() {
      console.log('this.$once的用法')
    })

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
        // console.log('hobbies', this.name)
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

      // Web Socket 已连接上，使用 send() 方法发送数据
      socket.send(outerData)
      socket.onmessage = function(evt) {
        const data = evt.data
        let fileReader = new FileReader()
        fileReader.onload = function() {
          let arrayBuffer = this.result
          let protoFrame = protoRoot.lookup('Proto.Frame')
          let frameDataResponse = protoFrame.decode(new Uint8Array(arrayBuffer))
          let protoTest = protoRoot.lookup('TestOne.S2C')
          let testDataResponse = protoTest.decode(frameDataResponse.payload)
        }
        fileReader.readAsArrayBuffer(data)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>