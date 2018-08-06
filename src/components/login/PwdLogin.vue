<template>
  <div class="msg-input-wrap">
    <el-input placeholder="手机/邮箱/用户名" class="el-input" v-model="userName">
    </el-input>
    <el-input placeholder="密码" class="el-input" v-model="userPwd">
    </el-input>
    <el-button type="success" class="msg-button" @click="loginByAccount">登录</el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userName: undefined,
      userPwd: ''
    }
  },
  methods: {
    loginByAccount () {
      // 假装请求了
      this.$store.commit('setSignIn', this.userName)
      console.log(this.$store.getters.getUserInfo)
    }
  }
}
</script>
