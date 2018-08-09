<template>
  <div class="login-wrap">
    <div class="login">
      <div class="login-title">
        <span :class="current===MSG && 'active'" @click="changMode(MSG)">短信登录</span>
        <span :class="current===PWD && 'active'" @click="changMode(PWD)">密码登录</span>
      </div>
      <component :is="loginCom" @deltaroute="deltaRoute"></component>
    </div>
  </div>
</template>

<script>
import MsgLogin from './login/MsgLogin'
import PwdLogin from './login/PwdLogin'

export default {
  data () {
    return {
      MSG: 'msg',
      PWD: 'pwd',
      loginCom: MsgLogin,
      current: this.MSG,
      lastRoute: {}
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.lastRoute = from
    })
  },
  methods: {
    changMode (type) {
      this.current = type
      if (type === this.PWD) {
        this.loginCom = PwdLogin
      } else if (type === this.MSG) {
        this.loginCom = MsgLogin
      }
    },
    deltaRoute () {
      // console.log(this.$route)
      this.$router.push({path: this.lastRoute.path})
    }
  },
  comopnents: {
    MsgLogin,
    PwdLogin
  }
}
</script>

<style lang="less" scoped>
.login-wrap{
  display: flex;
  justify-content: center;
  margin-top: 30vh;
  width: 100vw;
  height: 100vh;
  .login{
    &-title{
      margin-bottom: 30px;
      text-align: center;
      span{
        padding: 4px 0;
        margin: 0 20px;
        color: #2395ff;
        // font-size: 24px;
        font-weight: bold;
        border-bottom: 4px solid transparent;
        &.active{
          border-bottom: 4px solid #2395ff;
        }
      }
    }
  }
}
</style>
