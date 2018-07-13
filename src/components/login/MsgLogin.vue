<template>
  <div class="msg-input-wrap">
    <el-input placeholder="请输入内容" class="el-input">
      <span slot="suffix">获取验证码</span>
    </el-input>
    <el-input placeholder="验证码" class="el-input">
    </el-input>
    <section class="msg-hint">
      温馨提示：未注册饿了么帐号的手机号，登录时将自动注册，且代表您已同意
    </section>
    <el-button type="success" class="msg-button">登录</el-button>
  </div>
</template>

<style lang="less">
.msg-input-wrap{
  width: 80vw;
  .msg-hint{
    font-size: 22px;
    color: #bbb;
    margin-bottom: 30px;
  }
  .el-input{
    height: 80px;
    line-height: 80px;
    font-size: 28px;
    margin-bottom: 26px;
    &__inner{
      height: 100%;
    }
  }
  .el-button{
    width: 100%;
    padding: 20px 0;
    font-size: 36px;
  }
}
</style>
