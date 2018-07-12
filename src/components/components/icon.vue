<template>
  <i :style="styleobj">{{value}}</i>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: '#fff'
    },
    bgcolor: {
      type: String,
      default: 'rgb(112, 188, 70)'
    }
  },
  computed: {
    styleobj () {
      return {
        color: this.color,
        backgroundColor: this.bgcolor
      }
    }
  }
}
</script>

<style lang="less" scoped>
  i{
    display: inline-block;
    width: 28px;
    height: 28px;
    line-height: 28px;
    font-style: normal;
    padding: 2px;
    // box-sizing: border-box;
    border-radius: 8px;
    text-align:center;
  }
</style>
