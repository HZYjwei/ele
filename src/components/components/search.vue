<template>
  <div class="search">
    <i class="icon-0201chazhao iconfont" />
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    textAlign: {
      type: String,
      default: 'left'
    },
    fontSize: {
      type: Number,
      required: true
    }
  }
}
</script>

<style lang="less" scoped>
  .search{
    width: 100%;
    background-color: #fff;
  }
</style>
