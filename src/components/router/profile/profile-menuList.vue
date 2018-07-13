<template>
  <div class="login-menu-wrap">
      <div class="login-menu-module">
        <row-item title="我的地址">
          <i class="iconfont icon-dizhi" />
        </row-item>
      </div>
      <div class="login-menu-module">
        <row-item title="金币商城">
          <i class="iconfont icon-bag" />
        </row-item>
        <row-item title="分享拿5元现金">
          <i class="iconfont icon-presentfill" />
        </row-item>
      </div>
      <div class="login-menu-module">
        <row-item title="我的客服">
          <i class="iconfont icon-erji" />
        </row-item>
      </div>
    </div>
</template>

<script>

import rowItem from '../../components/rowItem'
export default {
  components: {
    rowItem
  }
}
</script>

<style lang="less" scoped>
.login-menu{
  &-wrap{
    .icon-dizhi, .icon-erji{
      color: #4AA5F0;
    }
    .icon-bag{
      color: #94D94A;
    }
    .icon-presentfill{
      color:#FC7B53;
    }
  }
  &-module{
    margin-top: 20px;
    font-size: 32px;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    background-color: #fff;
  }
}
</style>
