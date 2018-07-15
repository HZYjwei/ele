<template>
  <div class="cart-contral">
    <span class="decrease iconfont icon-minus2" v-show="food.count > 0" @click="remove"></span>
    <span class="count" v-show="food.count > 0">{{food.count}}</span>
    <span class="increase iconfont icon-0801zengjia" @click="add"></span>
  </div>
</template>

<script>
export default {
  name: 'cartContal',
  props: {
    food: {
      type: Object
    }
  },
  methods: {
    remove (event) {
      if (event._constructed) {
        // _constructed是BScroll中的，所以有的话，表示这个组件在goods中
        if (!this.food.count === 0) {
          return undefined
        } else {
          this.food.count--
        }
      } else {
        this.food.count--
      }
    },
    add () {
      if (event._constructed) {
        if (!this.food.count) {
          this.$set(this.food, 'count')
          this.food.count = 1
        } else {
          this.food.count++
        }
      } else {
        this.food.count++
      }
    }
  }
}
</script>

<style lang="less" scoped>
.cart-contral{
  font-size: 0;
  .decrease, .increase{
    display: inline-block;
    width:48px;
    height: 48px;
    line-height: 48px;
    font-size: 48px;
    color: #00a0dc;
    padding: 12px;
    vertical-align: middle;
  }
  .count{
    display: inline-block;
    text-align: center;
    width: 24px;
    font-size: 28px;
    // line-height: 48px;
    color:rgb(147, 153, 159);
    vertical-align: middle;
  }

}
</style>
