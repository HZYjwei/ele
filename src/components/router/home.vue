<template>
  <div class="home">
    <top-bar></top-bar>
    <mint-swipe></mint-swipe>
    <hot />
    <shopList />
  </div>
</template>

<script>
import hot from './home/hot'
import mintSwipe from './home/mintSwipe'
import shopList from './home/shopList'
import topBar from './home/topBar'

export default {
  name: 'home',
  components: {
    hot,
    mintSwipe,
    shopList,
    topBar
  }
}
</script>
