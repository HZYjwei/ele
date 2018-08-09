<template>
  <div class="order">
    <header>
      <top-bar :title="title"></top-bar>
    </header>
    <div class="order-module" ref="order">
      <div>
        <div class="order-hty-tit">历史订单</div>
        <div class="order-hty-item" v-for="order in orders" :key="order.createTime">
          <div class="order-hty-avatar">
            <img :src="order.shop.avatar" alt="">
          </div>
          <div class="order-hty-msg">
            <div class="order-hty-msg-line">
              <div class="order-hty-name">
                <div><span>{{order.shop.name}}</span><i class="iconfont icon-more"></i></div>
                <span class="order-hty-delivery">分钟前到</span>
              </div>
              <span class="order-hty-state">订单已送达</span>
            </div>
            <div class="order-hty-msg-line food">
              <span>{{order[0].name}} 等2件商品</span>
              <span class="price">￥ 13.0</span>
            </div>
            <div class="order-hty-msg-line tags">
              <div class="order-hty-msg-tag" @click="getAgain(order)">再来一单</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * 订单窗口
 * 若由goods页面跳转会先将数据添加到Vuex中，
 * 再判断用户登录情况，是否跳转登录
 */
import topBar from '../components/topBar'
import { deepClone } from '../../assets/util/util'
import BScroll from 'better-scroll'

export default {
  data () {
    return {
      title: '',
      orders: []
    }
  },
  beforeRouteEnter (to, from, next) {
    // console.log(to, from)
    // beforeRouteEnter的异步回调在mounted之后
    next(vm => {
      // console.log(vm._isMounted) //true
      if (from.name === 'goods') {
        vm.$store.commit('setSelected', to.params)
      }
      let userInfo = vm.$store.getters.getUserInfo
      if (!userInfo) {
        next({ name: 'login' })
      }
    })
  },
  created () {
    this.title = this.$router.currentRoute.meta.title
    // console.log('created'+this._isMounted)
    this.$nextTick(() => {
      this.orders = this.$store.getters.getSelected
    })
    // 第一次跳转的时候，会刷新不了，用nextTick解决
  },
  mounted () {
    new BScroll(this.$refs.order, {
      click: true
    })
  },
  methods: {
    /**
     * 如果Array为[0,1,2,3], a.shop = 'a'
     * es6方法中{...[]}会丢失其原型，及length
     * 所以只能深度克隆
     */
    getAgain (order) {
      let newOrder = []
      deepClone(order, newOrder)
      newOrder.createTime = new Date().getTime()
      this.$store.commit('setSelected', newOrder)
    }
  },
  components: {
    topBar
  }
}
</script>

<style lang="less" scoped>
.order {
  &-module {
    padding: 0 20px;
    height: calc(100vh - 188px);
  }
  &-hty {
    font-size: 24px;
    line-height: 24px;

    &-tit {
      font-size: 36px;
      font-weight: 600;
      line-height: 72px;
    }
    &-item {
      display: flex;
      padding-top: 20px;
    }
    &-msg {
      flex: 1;
      border-bottom: 1px solid rgba(7, 17, 27, 0.1);
      padding-bottom: 20px;
      &-line {
        display: flex;
        justify-content: space-between;
        &.food {
          font-size: 24px;
          font-weight: 400;
          line-height: 72px;
          .price {
            font-weight: 700;
          }
        }
        &.tags {
          flex-direction: row-reverse;
        }
      }
      &-tag {
        border: 1px solid rgba(7, 17, 27, 0.1);
        padding: 10px;
        font-size: 24px;
      }
    }
    &-avatar {
      width: 70px;
      height: 70px;
      border-radius: 5px;
      overflow: hidden;
      img {
        widows: 100%;
        height: 100%;
      }
    }
    &-name {
      flex: 1;
      margin-left: 20px;
    }
    &-delivery {
      font-size: 20px;
      line-height: 24px;
      vertical-align: bottom;
      color: rgba(7, 17, 27, 0.4);
    }
  }
}
</style>
