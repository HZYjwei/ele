<template>
  <div id="header">
    <div class="content-wrapper">
      <div class="content-avatar">
        <img :src="seller.avatar" alt="">
      </div>
      <div class="content-detail">
        <div class="content-detail-tit">
          <ifont value="品牌" bgcolor="red" />
          <span class="">{{seller.name}}</span>
        </div>
        <div class="content-detail-msg">
          <span>{{seller.description}} / {{costTime}}</span>
        </div>
        <div class="content-detail-discount" v-if="showSupport && showSupport.type" @click="showMore">
          <ifont :value="showSupport.type"/>
          <span>{{showSupport.description}}</span>
          <div class="content-detail-discount-more">
            <span>{{seller.supports.length}}个</span>
            <i class="iconfont icon-more"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="bulletin-wrapper">
      <div class="bulletin-con"  @click="showMore">
        <ifont value="公告" bgcolor="#fff" color="#000"></ifont>
        <span>{{seller.bulletin}}</span>
      </div>
      <i class="iconfont icon-more"></i>
    </div>
    <div class="header-bg" :style="{backgroundImage: 'url('+seller.avatar+')'}"></div>
  </div>
</template>

<script>
import ifont from '../../components/ifont'
export default {
  data () {
    return {
      showSupport: {},
      timer: null
    }
  },
  props: {
    seller: {
      type: Object,
      required: true
    }
  },
  computed: {
    costTime () {
      var str = ''
      if (this.seller.deliveryTime / 60 > 1) {
        str += Math.floor(this.seller.deliveryTime / 60) + '小时'
      }
      str += this.seller.deliveryTime % 60 + '分钟送达'
      return str
    }
  },
  methods: {
    autoGetSupprot () {
      this.timer = setTimeout(() => {
        this.getRandomSupport()
        this.timer = this.autoGetSupprot()
      }, 5000)
    },
    getRandomSupport () {
      let len = this.seller.supports.length
      let num = Math.floor(Math.random() * len)
      this.showSupport = this.seller.supports[num]
    },
    showMore () {
      this.$emit('showMsg')
    }
  },
  watch: {
    // props中的属性不一定什么时候传入
    seller () {
      clearTimeout(this.timer)
      if (this.seller.supports && this.seller.supports.length > 0) {
        this.getRandomSupport()
        this.autoGetSupprot()
      }
    }
  },
  components: {
    ifont
  }
}
</script>

<style lang="less" scoped>
#header {
  position: relative;
  overflow: hidden;
  background: rgba(7, 17, 27, 0.5);
  .content {

    &-wrapper {
      position: relative;
      display: flex;
      padding: 48px 48px 36px 48px;
    }
    &-avatar{
      display: inline-block;
      vertical-align: top;
      width: 128px;
      height: 128px;
      border-radius: 4px;
      overflow: hidden;
      img{
        width: 100%;
        height: 100%;
      }
    }
    &-detail{
      display: inline-block;
      vertical-align: top;
      margin-left: 32px;
      color: #fff;
      overflow: hidden;
      &-tit{
        font-weight: bold;
        span{
          margin-left: 12px;
          font-size: 32px;
          line-height: 36px;
        }
      }
      &-msg{
        margin-top: 16px;
        font-size: 24px;
        font-weight: 200;
        line-height: 24px;
      }
      &-discount{
        // position: relative;
        font-size: 20px;
        font-weight: 200;
        line-height: 24px;
        margin-top: 20px;
        white-space: nowrap;
        width: 50vw;
        overflow: hidden;
        text-overflow: ellipsis;

        &-more{
          position: absolute;
          right: 24px;
          bottom: 36px;
          display: inline-block;
          border-radius: 100px;
          padding: 14px;
          background: rgba(0, 0, 0, .2);

          .icon-more{
            font-size: 20px;
          }
        }
      }
    }
  }
  .bulletin{
    &-wrapper{
      display: flex;
      align-items: center;
      padding: 8px 24px;
      height: 40px;
      background: rgba(7, 17, 27, 0.2);

      .icon-more{
        font-size: 20px;
        color: #fff;
      }
    }
    &-con{
      display: flex;
      align-items: center;
      height: 100%;
      flex: 1;
      span{
        width: 80vw;
        margin-left: 10px;
        font-size: 20px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        color:#fff;
      }
    }

  }
  .header-bg{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: top / cover no-repeat;
    z-index: -1;
  }
}
</style>
