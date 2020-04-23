<template>
  <div class="user-list-container">
    <ul>
      <li v-for="(user, index) in userData" :key="index" @click="handleUserInfo(user)">
        <slot name="item" :userItem="user">{{user.name}}</slot>
      </li>
    </ul>
  </div>
</template>

<script>
import { getUserByUserId } from '@/api/user'
import responseHandler from '@/utils/response'

export default {
  name: 'userIist',
  props: {
    userData: {
      type: Array,
      default: () => []
    }
  },
  mounted() {
    // 对象key表达式
    const o = {
      [2 > 5 ? 'name' : '']: 'xuhaibin',
      age: 25
    }
  },
  methods: {
    async handleUserInfo(user) {
      const resp = await getUserByUserId({
        userId: user.user_id
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>