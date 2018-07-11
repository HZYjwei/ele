<template>
  <div class="hot-item">
    <h3 class="hot-item-title" :style="num && {color: 'red'}">{{ title }}</h3>
    <div class="hot-item-msg">{{ msg }}</div>
    <div class="hot-item-gobuy">{{gobuy}}</div>
    <img :src="img" alt="title">
  </div>
</template>

<script>
export default {
  props: {
    'img': {
      type: String
    },
    'msg': {
      type: String,
      required: true
    },
    'num': {
      type: Number,
      required: true
    },
    'title': {
      type: String,
      required: true
    }
  },
  computed: {
    gobuy () {
      if (this.num > 0) {
        return this.num + '正在抢 >'
      }
      return '立即抢购 >'
    }
  }
}
</script>

<style lang="less" scoped>
.hot-item{
  position: relative;
  padding: 24px 0 0 30px;
  background-image: linear-gradient(0deg,#f4f4f4 5%,#fafafa 95%);
  height: 256px;
  &:not(:last-child){
      margin-right: 6px;
  }

  &-title{
    color:#333;
    font-size: 34px;
    margin-bottom: 10px;
  }
  &-msg{
    font-size: 26px;
    margin-bottom: 18px;
  }
  &-gobuy{
    font-size: 24px;
    font-weight: 700;
    color: #af8260;
  }
  img{
    position: absolute;
    bottom: 0;
    right: 0;
    width: 240px;
    height: 160px;
  }
}
</style>
