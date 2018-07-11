<template>
  <div>
    <router-view></router-view>
    <div class="tabBar">
      <ul>
        <router-link :to="{path: '/home'}" tag="LI">
          <span>首页</span>
        </router-link>
        <router-link :to="{path: '/discover'}" tag="LI">
          <span>发现</span>
        </router-link>
        <router-link :to="{path: '/order'}" tag="LI">
          <span>订单</span>
        </router-link>
        <router-link :to="{path: '/profile'}" tag="LI">
          <span>我的</span>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<style lang="less" scoped>
.tabBar {
  position: fixed;
  width: 100%;
  bottom: 0;
  height: 100px;
  line-height: 100px;
  ul {
    display: flex;
    li {
      flex: 1;
      text-align: center;
      span {
        font-size: 24px;
      }
    }
  }
}
</style>
