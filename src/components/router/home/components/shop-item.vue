<template>
  <div @click="gotoshop" class="shop-item">
    <img :src="shopAvatar" alt="">
    <div class="shop-item-con">
      <div class="shop-item-detail">
        <div class="shop-item-name">{{name}}</div>
        <div class="shop-item-con-row">
          <div>
            <rating-start :ratings="ratings" :size="size"></rating-start>
            <span>{{ratings}}</span>
            <span>月售{{onsale}}单</span>
          </div>
        </div>
        <div class="shop-item-con-row">
          <div>
            <span>￥{{beyond}}起送</span>
            <span>配送费￥{{postage}}</span>
          </div>
          <div>
            <span>{{distance}}</span>
            <span>{{time}}</span>
          </div>
        </div>
      </div>
      <collapse-item :max="collmax" :collapse="activities" />
    </div>
  </div>
</template>

<script>
import ratingStart from '../../../components/ratingStar'
import collapseItem from './collapseItem'

export default {
  props: {
    name: {
      type: String,
      required: true
    },
    shopAvatar: {
      type: String,
      required: true
    },
    distance: {
      type: String,
      required: true
    },
    activities: {
      type: Array,
      required: true
    },
    tag: {
      type: Array,
      required: true
    },
    beyond: {
      type: Number,
      required: true
    },
    postage: {
      type: Number,
      required: true
    },
    ratings: {
      type: Number,
      required: true
    },
    time: {
      type: String,
      required: true
    },
    onsale: {
      type: Number,
      required: true
    },
    brand: {
      type: Boolean
    },
    courier: {
      type: Boolean
    }
  },
  data () {
    return {
      size: '2.6667vw',
      collmax: 2
    }
  },
  methods: {
    gotoshop () {
      this.$router.push({name: 'goods'})
    }
  },
  components: {
    ratingStart,
    collapseItem
  }
}
</script>

<style lang="less" scoped>
.shop-item {
  display: flex;
  padding: 30px 20px;
  border-bottom: 1px solid #eee;
  img {
    width: 130px;
    height: 130px;
    border: 1px solid #eee;
  }
  &-con {
    flex: 1;
    margin-left: 20px;
    font-size: 0;
    color: #666;

    &-row {
      display: flex;
      margin: 20px 0;
      justify-content: space-between;
      span{
        font-size: 22px;
        padding: 0 5px;
      }
      span:first-child{
        border-right: 1px solid #999;
      }
    }
  }
  &-detail{
      border-bottom: 1px solid #eee;
  }
  &-name {
    font-size: 30px;
    color: #333;
    font-weight: 700;
  }
}
</style>
