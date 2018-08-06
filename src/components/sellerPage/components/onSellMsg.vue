<template>
  <div class="onsell" >
    <div class="onsell-con">
      <div class="onsell-title">
        <h3>{{seller.name}}</h3>
        <rating-star :ratings="seller.score || 5" size="7.4vw"/>
      </div>
      <div class="onsell-module">
        <div class="onsell-module-title">
          <span class="line"></span>
          <span class="title-con">优惠信息</span>
          <span class="line"></span>
        </div>
        <ul class="onsell-module-con">
          <li class="onsell-discount-item" v-for="(item,index) in seller.supports" :key="index">
            <ifont :value="item.type" :color="colorList[index % 3]" bgcolor="#fff"/>
            <span class="onsell-discount-msg">{{item.description}}</span>
          </li>
        </ul>
      </div>
      <div class="onsell-module">
        <div class="onsell-module-title">
          <span class="line"></span>
          <span class="title-con">商家公告</span>
          <span class="line"></span>
        </div>
        <div class="onsell-module-con">
          <article>{{seller.bulletin}}</article>
        </div>
      </div>
    </div>
    <div class="onsell-close iconfont icon-close" @click="hideOnSell"></div>
  </div>
</template>

<script>
import ratingStar from '../../components/ratingStar'
import ifont from '../../components/ifont'

export default {
  props: {
    seller: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      colorList: ['red', 'green', 'blue']
    }
  },
  components: {
    ratingStar,
    ifont
  },
  methods: {
    hideOnSell () {
      console.log(1)
      this.$emit('hideMsg')
    }
  }
}
</script>

<style lang="less" scoped>
  .onsell{
    position: fixed;
    top: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(7 , 17, 27, 0.8);
    // filter: blur(10px);
    color: #fff;
    z-index: 999;
    &-con{
      margin: 120px 72px 64px;
    }
    &-title{
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      h3{
        font-size: 32px;
        font-weight: 700;
        line-height: 32px;
        margin-bottom: 32px;
      }
    }
    &-module{
      &-title{
        margin-top: 48px;
        display: flex;
        align-items: center;
        .line{
          height: 0px;
          width: 224px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        }
        .title-con{
          font-size: 28px;
          font-weight: 700;
          line-break: 28px;
          margin: 0 24px;
          white-space: nowrap;
        }
      }

      &-con{
          margin-top: 48px;
          padding: 0 24px;

        article{
          font-size: 24px;
          font-weight: 200;
          line-height: 48px;
        }
        .onsell-discount{
          &-item{
            &:not(:last-child){
              margin-bottom: 24px;
            }
          }

          &-msg{
            font-size: 24px;
            font-weight: 200;
            line-height: 24px;
          }
        }
      }

    }
    &-close{
      position: absolute;
      width: 100%;
      text-align: center;
      font-size: 64px;
      color: rgba(255, 255, 255, 0.5);
      bottom: 64px;
    }

  }
</style>
