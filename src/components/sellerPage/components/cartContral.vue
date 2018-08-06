<template>
  <div class="cart-contral">
    <span class="decrease iconfont icon-minus2" v-show="food.count > 0" @click="remove"></span>
    <span class="count" v-show="food.count > 0">{{food.count}}</span>
    <span class="increase iconfont icon-0801zengjia" @click="add"></span>
    <!-- <span class="ball" ref="ball"></span> -->
  </div>
</template>

<script>
export default {
  name: 'cartContal',
  data () {
    return {
      addLock: false
    }
  },
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
      if (!this.addLock) {
        this.addLock = true
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
        setTimeout(() => {
          this.addLock = false
        }, 200)
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

  @keyframes parabola {
    0% {
      visibility: visible;
      right: 12px;
      bottom: 12px;
    }
    25% {
      visibility: visible;
      right: 40px;
      bottom: 70px;
    }
    100% {
      visibility: hidden;
      right: 100px;
      bottom: -700px;
    }
  }
  .ball{
    position: absolute;
    visibility: hidden;
    background-color: #00a0dc;
    border-radius: 50%;
    right: 12px;
    bottom: 12px;
    width: 46px;
    height: 46px;

    // transition: all 2s linear;
    &-end {

      animation: parabola 1.5s ease-in-out;
      // display: block;
      // left: -480px;
      // bottom: -1000px;
      // top: auto;
      // right: auto;
    }
  }
}
</style>
