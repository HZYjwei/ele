<template>
  <div class="profile">
    <header>
      <top-bar :title="title"></top-bar>
    </header>
    <router-link :to="{name: 'login'}" tag="div" class="login-wrap">
      <div>
        <i class="iconfont icon-changyonglogo40"></i>
        <div class="login-con">
          <h3>{{loginInfo || '登录/注册'}}</h3>
          <i class="iconfont icon-phone"></i><span>登陆后享受更多特权</span>
        </div>
      </div>
      <i class="iconfont icon-more"></i>
    </router-link>
    <profile-bar></profile-bar>
    <profile-menu-list></profile-menu-list>
  </div>
</template>

<script>
import topBar from '../components/topBar'
import profileBar from './profile/profile-bar'
import profileMenuList from './profile/profile-menuList'

export default {
  data () {
    return {
      title: '',
      loginInfo: ''
    }
  },
  created () {
    this.title = this.$router.currentRoute.meta.title
    this.loginInfo = this.$store.getters.getUserInfo
  },
  components: {
    topBar,
    profileBar,
    profileMenuList
  }
}
</script>

<style lang="less" scoped>
@import '../../util';

.profile{
  min-height: calc(100vh - 100px);
  background-color: #F5F5F5;
}
.login-wrap{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 30px;
  .bg-img();
  color: #fff;
  .icon-changyonglogo40{
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    line-height: 120px;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    font-size: 120px;
    background-color: #C4E7F5;
  }
  .login-con{
    display: inline-block;
    margin-left: 20px;
    vertical-align: middle;
    font-size: 24px;
    h3{
      margin-bottom: 8px;
      font-size: 42px;
    }
  }
}
</style>
