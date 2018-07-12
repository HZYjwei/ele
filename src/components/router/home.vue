<template>
  <div class="home">
    <top-bar></top-bar>
    <mint-swipe :swipeItems="mintSwipe"></mint-swipe>
    <hot :hotarr="hot" />
    <div class="shop-recommend">推荐商家</div>
    <filter-bar />
    <shopList :shopList="shops" />
  </div>
</template>

<script>
import axios from 'axios'

import hot from './home/hot'
import mintSwipe from './home/mintSwipe'
import shopList from './home/shopList'
import topBar from './home/topBar'
import filterBar from './home/filterBar'

export default {
  name: 'home',
  data () {
    return {
      hot: [],
      mintSwipe: [],
      shops: []
    }
  },
  components: {
    hot,
    mintSwipe,
    shopList,
    topBar,
    filterBar
  },
  created () {
    axios.get('/home')
      .then(res => {
        const {hot, mintSwipe, shops} = res.data.data
        this.hot = hot

        this.mintSwipe = mintSwipe

        this.shops = shops
      })
  }
}
</script>

<style lang="less" scoped>
.shop-recommend{
  display: flex;
  justify-content: center;
  align-items: center;
  color:#000;
  .line(){
    content: '';
    display: block;
    width: 40px;
    height: 2px;
    background-color: #999;
  }

  &:before{
    .line();
    margin-right: 20px
  }
  &:after{
    .line();
    margin-left: 20px;
  }
}
</style>
