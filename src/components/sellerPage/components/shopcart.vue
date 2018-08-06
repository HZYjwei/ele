<template>
  <div class="shopcart">
    <div class="shopcart-content">
      <div class="icon-cart-wrap" @click="showMore = !showMore">
        <div class="iconfont icon-cart" :class="{noCount : totalCount > 0}"></div>
        <div class="total-count" v-show="totalCount > 0">{{totalCount}}</div>
      </div>

      <div class="deliver">
        <div :class="{price: true, 'noCount': totalCount > 0}">￥{{totalPrice}}</div>
        <div class="deliveryPrice">另需配送费{{deliveryPrice}}元</div>
      </div>
      <div class="deliver-base" :class="{'payfor': minPrice <= totalPrice}">
        {{inform}}
      </div>
    </div>
    <div class="cart-list-wrap" v-show="showMore && totalCount > 0">
      <div class="cart-bg" @click="showMore = !showMore"></div>
      <div class="cart-list">
        <div class="cart-list-header">
          <span class="cart-title">购物车</span><span class="clear" @click="clearCount">清空</span>
        </div>
        <div class="food-list-items">
          <div class="food-item" v-for="food in selectFoods" :key="food.name">
            <span class="food-title">{{food.name}}</span>
            <div class="food-price-wrap">
              <span class="food-price">￥{{food.price * food.count}}</span>
              <cart-contral class="food-cartcontral" :food=food />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cartContral from './cartContral'
export default {
  data () {
    return {
      showMore: false
    }
  },
  props: {
    minPrice: {
      type: Number
    },
    deliveryPrice: {
      type: Number
    },
    selectFoods: {
      type: Array,
      defaul () {
        return {
          count: 0,
          price: 0
        }
      }
    }
  },
  methods: {
    clearCount () {
      this.selectFoods.forEach(food => {
        food.count = 0
        this.showMore = !this.showMore
      })
    }
  },
  computed: {
    totalCount () {
      let totalCount = 0
      this.selectFoods.forEach(food => {
        totalCount += food.count
      })
      return totalCount
    },
    totalPrice () {
      let totalPrice = 0
      this.selectFoods.forEach(food => {
        totalPrice += food.count * food.price
      })
      return totalPrice
    },
    inform () {
      if (this.totalPrice < this.minPrice) {
        return `还差${this.minPrice - this.totalPrice}元起送`
      } else {
        return '立即支付'
      }
    }
  },
  components: {
    cartContral
  }
}
</script>

<style lang="less" scoped>
.shopcart {
  position: fixed;
  width: 100%;
  height: 96px;
  bottom: 0;
  left: 0;
  &-content{
    width: 100%;
    height: 100%;
    line-height: 96px;
    color:#80858A;
    display: flex;
    background-color: #141d27;
    .icon-cart-wrap{
      position: relative;
      width: 160px;
      .icon-cart{
        position: absolute;
        text-align: center;
        line-height: 88px;
        font-size: 60px;
        left: 24px;
        bottom: 4px;
        width: 88px;
        height: 88px;
        border-radius: 50%;
        border: 12px solid #141d27;
        background-color: #2B343C;
        color:#80858A;
        &.noCount{
          background-color: #00a0bc;
          color: #fff;
        }
      }
      .total-count{
        position: absolute;
        right: 0;
        top: -12px;
        text-align: center;
        color: #fff;
        width: 48px;
        height: 32px;
        font-size: 16px;
        font-weight: 700;
        line-height: 32px;
        box-shadow: 0 4px 8px 0 rbga(0, 0, 0, .4);
        background-color: red;
        border-radius: 16px;
      }
    }
    .deliver{
      display: flex;
      flex: 1;
      align-items: center;
      padding: 24px 0 24px;
      .price{
        display: inline-block;
        line-height: 48px;
        font-size: 32px;
        font-weight: bolder;
        color: rgba(255, 255, 255, .2);
        border-right:  1px solid rgba(255, 255, 255, 0.1);
        padding-right: 14px;
        &.noCount{
          color:#fff;
        }
      }
      .deliveryPrice{
        padding-left: 24px;
        line-height: 20px;
        font-size: 24px;
        color: rgba(255, 255, 255, 0.4);
        // font-weight: 700;
      }
    }
    .deliver-base{
      width: 210px;
      padding: 0 16px;
      line-height: 96px;
      font-size: 24px;
      text-align: center;
      color: rgba(255, 255, 255, 0.1);
      font-weight: 700;
      background-color: #2b333b;
      &.payfor{
        background-color: red;
        color: #fff;
      }
    }
  }

}

.cart-list-wrap{
  position: fixed;
  top: 0;
  bottom: 96px;
  width: 100%;
  display: flex;
  flex-direction: column;
  z-index: -1;
  .cart-bg{
    flex: 1;
    background-color: rgba(7, 17, 27, 0.6);
  }
  .cart-list{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: auto;
    background-color: #fff;
    max-height: 434px;
    &-header{
      display: flex;
      justify-content: space-between;
      height: 80px;
      line-height: 80px;
      padding: 0 36px;
      box-sizing: border-box;
      border-bottom: 1px solid rgba(7, 17, 27, .1);
      background-color: #f3f5f7;
      .cart-title{
        font-size: 28px;
        font-weight: 200;
        color: rgb(7, 17, 27);
      }
      .clear{
        font-size: 24px;
        color: rgb(0, 160, 220);
      }
    }
    .food-item{
      // width: 100%;
      display: flex;
      justify-content: space-between;
      height: 96px;
      line-height: 96px;
      margin: 0 36px;
      border-bottom: 1px solid rgba(7, 17, 27, .1);
      .food-title{
        font-size: 28px;
        color:rgb(7, 17, 27);
      }
      .food-price-wrap{
        display: flex;
        .food-price{
          font-size: 28px;
          font-weight: 700;
          color: rgb(240, 20, 20)
        }
        .food-cartcontral{
          position: relative;
        }
      }
    }
  }
}
</style>
