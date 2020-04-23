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
    <!-- <user-chat
      :isRefresh.sync="isRefresh"
      :isUpdate="true"
      placeholder="Enter your message"
    ></user-chat> -->
    <!-- <base-input v-model="testValue"></base-input> -->
    <!-- <div class="flex">
      <span>好友列表：</span>
      <base-select
        :selectList="friendList"
        v-model="currentFriendId"
      ></base-select>
    </div> -->
    <!-- <page-sticky></page-sticky> -->
  </div>
</template>

<script>
import userChat from './components/userChat'
import baseInput from './components/baseInput'
import baseSelect from './components/baseSelect'
import pageSticky from './components/pageSticky'
import AddDom from './components/addDom'

export default {
  name: 'home',
  components: { userChat, baseInput, baseSelect, pageSticky },
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
    this.$once('hook:beforeDestroy', function() {
      console.log('this.$once的用法')
    })

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
  },
  methods: {
    handleAttriChange() {
      this.attributeName = 'href'
    }
  }
}
</script>

<style lang="scss" scoped></style>
