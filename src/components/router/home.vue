<template>
  <div class="home">
    <top-bar></top-bar>
    <mint-swipe :swipeItems="mintSwipe"></mint-swipe>
    <hot :hotarr="hot" />
    <shopList />
  </div>
</template>

<script>
import axios from 'axios'

import hot from './home/hot'
import mintSwipe from './home/mintSwipe'
import shopList from './home/shopList'
import topBar from './home/topBar'

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
    topBar
  },
  created () {
    axios.get('/home')
      .then(res => {
        const {hot, mintSwipe, shops} = res.data.data
        this.hot = hot
        console.log(hot)
        this.mintSwipe = mintSwipe

        this.shops = shops
      })
  }
}
</script>
