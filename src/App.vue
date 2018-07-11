<template>
  <div id="app">
      <router-view></router-view>
      <!-- <seller-page /> -->
  </div>
</template>

<script>
import sellerPage from './components/sellerPage/sellerPage'

export default {
  name: 'App',
  components: {
    sellerPage
  }
}
</script>

<style>
/* @import './assets/init_css/style.css'; */
@import './assets/init_css/normalize.css';
</style>
