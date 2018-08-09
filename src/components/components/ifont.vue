<template>
  <i :style="styleobj" ref="i">{{value}}</i>
</template>

<script>
/**
 * 一些标签字体
 */
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
    // width: 28px;
    // line-height: 30px;
    font-size: 22px;
    font-style: normal;
    padding: 2px;
    // box-sizing: border-box;
    border-radius: 4px;
    text-align:center;
  }
</style>
