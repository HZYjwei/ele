<template>
  <div id="sellerPage">
    <v-header :seller="seller"/>
    <ul class="tab-menu">
      <router-link :to="{name: 'goods'}" tag="li" class="tab-item">商品</router-link>
      <router-link :to="{name: 'ratings'}" tag="li" class="tab-item">评价</router-link>
      <router-link :to="{name: 'seller'}" tag="li" class="tab-item">商家</router-link>
    </ul>
    <div class="tab-content">
      <router-view :seller="seller" />
    </div>
  </div>
</template>

<script>
import header from './components/header'

import axios from 'axios'

export default {
  data () {
    return {
      seller: {}
    }
  },
  created () {
    axios.get('/good/seller')
      .then(res => {
        if (res.data.code === 0) {
          this.seller = res.data.data
        }
      })
  },
  components: {
    'v-header': header
  }
}
</script>

<style lang="less" scoped>
@import '../../util';

#sellerPage{
  height: 100vh;
  overflow: hidden;
}
.tab{
  &-menu{
    display: flex;
    height: 80px;
    font-size: 28px;
    .border-1px(rgba(7, 17,27, 0.1))
  }
  &-item{
    flex: 1;
    text-align: center;
    color:rgb(77, 85, 93);
    line-height: 80px;
    &.active-router{
      color: rgb(240, 20, 20)
    }
  }
}
</style>
