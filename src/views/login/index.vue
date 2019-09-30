<template>
  <div class="login-container">
    <div class="login-body__right">
      <el-form
        class
        auto-complete="on"
        :model="loginForm"
        :rules="loginRules"
        ref="loginForm"
        label-position="left"
      >
        <h3 class="title">看测者后台管理系统</h3>
        <el-form-item prop="phone">
          <el-input
            name="phone"
            type="text"
            v-model="loginForm.phone"
            autocomplete
            placeholder="请输入账号"
          >
            <i slot="prefix" class="el-input__icon svg-container">
              <i class="el-icon-user-solid svg-container-phone"></i>
            </i>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            name="password"
            :type="pwdType"
            @keyup.enter.native="handleLogin"
            v-model="loginForm.password"
            autocomplete
            placeholder="请输入密码"
            autofocus
          >
            <i slot="prefix" class="el-input__icon svg-container">
              <i class="el-icon-goods svg-container-phone"></i>
            </i>
            <!-- <span
              slot="suffix"
              class="el-input__icon show-pwd"
              @click="showPwd"
              v-if="pwdType !== 'text'"
            >
              <svg-icon icon-class="eye"/>
            </span>
            <span slot="suffix" class="el-input__icon show-pwd" @click="showPwd" v-else>
              <svg-icon icon-class="show"/>
            </span> -->
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            class="login-btn"
            type="primary"
            style="width:100%;"
            :loading="loading"
            @click="handleLogin"
          >登&nbsp;录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { userLogin } from '@/api/login'
import responseHandler from '@/utils/response'
import Cookie from 'js-cookie'

export default {
  name: 'login',
  data() {
    const validatePass = (rule, value, callback) => {
      if (value.length < 5) {
        callback(new Error('密码不能小于6位'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        phone: '',
        password: ''
      },
      loginRules: {
        phone: [
          {
            required: true,
            trigger: 'blur',
            message: '请输入手机号码'
            // validator: validatePhone
          }
        ],
        password: [
          {
            required: true,
            trigger: 'blur',
            validator: validatePass
          }
        ]
      },
      loading: false,
      pwdType: 'password'
    }
  },
  mounted() {
    // var inFifteenMinutes = new Date(new Date().getTime() + 5 * 60 * 1000);
    // Cookie.set('name', 'haibin', { expires: inFifteenMinutes })
  },
  methods: {
    showPwd() {
      if (this.pwdType === 'password') {
        this.pwdType = 'text'
      } else {
        this.pwdType = 'password'
      }
    },
    handleLogin() {
      // console.log(Cookie.get('name'))
      this.$refs.loginForm.validate(async valid => {
        if (valid) {
          const resp = await userLogin({
            ...this.loginForm
          })
          responseHandler(resp, () => {
            const data = resp.data
            if(data && Object.keys(data).length) {
              this.$store.commit('SET_TOKEN', data.token)
              this.$store.commit('SET_USERINFO', data)
            }
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.login-container {
  position: relative;
  height: 100vh;
  width: 100%;
  background-color: rgb(240, 242, 245);
  background-image: url("./images/bg_all.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: fixed;
  .login-body__right {
    // margin-top: 133px;
    position: absolute;
    left: 62%;
    top: 30%;
    .title {
      color: rgba(87, 160, 254, 0.9);
      font-size: 22px;
      font-family: "微软雅黑";
      font-weight: normal;
      margin-bottom: 40px;
    }
    .svg-container {
      height: 42px;
      width: 30px;
      display: inline-block;
      text-align: left;
      .svg-container-phone {
        width: 13px;
        height: 11px;
        display: inline-block;
        padding-right: 8px;
        border-right: 2px solid #BBBBBB;
        box-sizing: content-box;
      }
      .svg-container-password {
        width: 10px;
        height: 12px;
        display: inline-block;
        padding-right: 8px;
        border-right: 2px solid #BBBBBB;
        box-sizing: content-box;
      }
    }
  }
}
</style>

<style lang="scss">
$light_gray: rgba(0, 0, 0, 0.85);

/* reset element-ui css */
.login-container {
  .el-input {
    height: 42px;
    width: 320px;
    margin-top: 20px;
    .el-input__prefix {
      top: 1px;
      width: 40px;
      text-align: left;
    }
    input {
      -webkit-appearance: none;
      border: none;
      border-bottom: 1px solid #d2d2d2 !important;
      border-radius: 0px;
      padding-left: 35px;
      height: 42px;
      &:focus {
        border: none;
      }
      &:-webkit-autofill {
        -webkit-box-shadow: 0 0 0px 1000px #fff inset !important;
        -webkit-text-fill-color: $light_gray !important;
      }
    }
  }
  .el-form-item {
    border-radius: 5px;
    color: #454545;
  }
  .login-btn {
    border: 1px solid #57a0fe;
    margin-top: 20px;
    background: #57a0fe;
    height: 40px;
    font-size: 17px;
    font-family: "微软雅黑";
    box-sizing: border-box;
  }
}
</style>