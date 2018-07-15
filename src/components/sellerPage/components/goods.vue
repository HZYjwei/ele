<template>
  <div id="goods">
    <div class="menu-wrapper" ref="menuWrap">
      <div v-for="(item, index) in goods" :key="index" class="menu-item" :class="{current : index === currentIndex}" @click="selectIndex(index, $event)">
        <div class="text-wrap">
          <div>
          <ifont v-if="item.type !== -1" :value="item.type"/>
          {{item.name}}
          </div>
        </div>
      </div>
    </div>
    <div class="foods-wrapper" ref="foodWrap">
      <ul>
        <li v-for="(items, index) in goods" :key="index + items.name" class="foods-type-item">
          <div class="items-title">{{items.name}}</div>
          <ul>
            <li v-for="(goods, gindex) in items.foods" :key="goods + gindex" class="item-content-wrap">
              <div class="goods-avatar">
                <img :src="goods.image" alt="">
              </div>
              <div class="goods-content">
                <h3 class="goods-name">{{goods.name}}</h3>
                <div v-if="goods.description" class="goods-des">{{goods.description}}</div>
                <div class="goods-ratings">
                  <span>月售{{goods.sellCount}}份</span><span>好评率{{goods.rating}}%</span>
                </div>
                <div class="prices">
                  <span class="goods-price">￥{{goods.price}}</span><del v-if="goods.oldPrice" class="goods-oldprice">￥{{goods.oldPrice}}</del>
                </div>
              </div>
              <div class="cartcontral-wrap">
                <cart-contral :food=goods />
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <shopcart :selectFoods=selectFoods :deliveryPrice="seller.deliveryPrice" :minPrice="seller.minPrice"></shopcart>
  </div>
</template>

<script>
import ifont from '../../components/ifont'
import shopcart from './shopcart'
import cartContral from './cartContral'

import Vue from 'Vue'
import axios from 'axios'
import BScroll from 'better-scroll'
export default {
  props: {
    seller: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      goods: [],
      heightList: [],
      scrollY: 0
      // currentIndex: 0
    }
  },
  created () {
    axios.get('/good/goods')
      .then(res => {
        if (res.data.code === 0) {
          this.goods = res.data.data
          // console.log(this.goods)
          Vue.nextTick(() => {
            this._initscroll()
            this._caculateHeight()
          })
        }
      })
  },
  methods: {
    selectIndex ($index, $event) {
      if (!$event._constructed) {
        return undefined
      }

      let foodList = this.$refs.foodWrap.getElementsByClassName('foods-type-item')
      this.foodScroll.scrollToElement(foodList[$index], 300)
    },
    _initscroll () {
      this.menuScroll = new BScroll(this.$refs.menuWrap, {
        click: true
      })
      this.foodScroll = new BScroll(this.$refs.foodWrap, {
        probeType: 3,
        click: true
      })
      this.foodScroll.on('scroll', (pos) => {
        this.scrollY = Math.abs(Math.round(pos.y))
      })
    },
    _caculateHeight () {
      let foodList = this.$refs.foodWrap.getElementsByClassName('foods-type-item')
      let height = 0
      this.heightList.push(height)
      for (let i = 0; i < foodList.length; i++) {
        let item = foodList[i]
        // height += item.clientHeight
        //  clientHeight === offsetHeight 但是取数的时候默认取证
        // 导致计算结果会差几px，所以先computedStyle相加，再Math.round
        height += parseFloat(window.getComputedStyle(item, null)['height'])
        this.heightList.push(height)
      }
      for (let i = 0; i < this.heightList.length; i++) {
        this.heightList[i] = Math.round(this.heightList[i])
      }
    }
  },
  computed: {
    currentIndex: {
      get () {
        for (let i = 0; i < this.heightList.length; i++) {
          let height1 = this.heightList[i]
          let height2 = this.heightList[i + 1]
          if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
            return i
          }
        }
      }
    },
    selectFoods () {
      let foods = []
      if (this.goods.length !== 0) {
        this.goods.forEach(good => {
          good.foods.forEach(food => {
            if (food.count) {
              foods.push(food)
            }
          })
        })
      }
      return foods
    }
  },
  components: {
    ifont,
    shopcart,
    cartContral
  }
}
</script>

<style lang="less" scoped>
#goods{
  display: flex;
  height: calc(67vh);
  overflow: auto;
  .menu-wrapper{
    width: 160px;
    font-size: 24px;
    line-height: 28px;
    font-weight: 200;
    color: rgb(40, 20, 20);

    .menu-item{
      padding: 0 24px;
      height: 108px;
      background-color: #f3f3f7;
      .text-wrap{
        display: flex;
        width: 112px;
        box-sizing: border-box;
        height: 100%;
        justify-content: center;
        border-bottom: 1px solid rgba(7, 17, 27, 0.1);
        align-items: center;
      }
      &.current{
        margin-top: -1px;
        background-color: #fff;
        font-weight: 700;
        .text-wrap{
          border: none;
        }
      }
    }
  }
  .foods-wrapper{
    flex: 1;
    // height: 70vh;
    // overflow: auto;
    .items-title{
      height: 52px;
      padding-left: 28px;
      font-size: 24px;
      color: rgb(147, 153, 159);
      line-height: 52px;
      background-color: #f3f5f7;
      border-left: 4px solid #d9dde1;
    }
    .item-content-wrap{
      position: relative;
      display: flex;
      box-sizing: border-box;
      margin: 0 36px;
      padding: 36px 0;
      border-bottom: 1px solid rgba(7, 17, 27, 0.1);
      &:last-child{
        border: none;
      }
      .cartcontral-wrap{
        position: absolute;
        right: 0;
        bottom: 26px;
      }
    }
    .goods{
      &-avatar{
        width: 114px;
        height: 114px;
        img{
          width: 100%;
          height: 100%;
        }
      }
      &-content{
        margin-top: 4px;
        margin-left: 20px;
      }
      &-name{
        // margin-top: 4px;
        font-size: 28px;
        color: rgb(7, 17, 27);
        line-height: 28px;
      }
      &-des, &-ratings{
        margin-top: 16px;
        font-size: 20px;
        color: rgb(147, 153, 159);
        line-height: 20px;
        span:nth-child(n + 2){
          margin-left: 24px;
        }
      }
      &-price{
        font-size: 30px;
        line-height: 48px;
        font-weight: 700;
        color: rgb(240, 20, 20)
      }
      &-oldprice{
        font-size: 20px;
        margin-left: 16px;
        vertical-align: text-top;
        color: rgb(147, 153, 159);
      }
    }
  }
}
</style>
