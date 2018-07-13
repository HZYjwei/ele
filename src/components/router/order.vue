<template>
  <div>
    <header>
      <top-bar :title="title"></top-bar>
    </header>
  </div>
</template>

<script>
import topBar from '../components/topBar'

export default {
  data () {
    return {
      title: ''
    }
  },
  created () {
    this.title = this.$router.currentRoute.meta.title
  },
  components: {
    topBar
  }
}
</script>

<style lang="less" scoped>

</style>
