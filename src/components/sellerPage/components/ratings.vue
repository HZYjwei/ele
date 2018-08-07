<template>
  <div class="ratings-wrap" ref="sellRatings">
    <div class="ratings">
      <div class="ratings-score">
        <div class="ratings-score-con">
          <h3>{{seller.score}}</h3>
          <span>综合评分</span>
          <span class="ratings-beyond">高于周边商家{{seller.rankRate}}%</span>
        </div>
        <div class="ratings-score-detail">
          <div class="ratings-score-item">
            <span class="ratings-score-tit">服务态度</span>
            <rating-star :ratings="seller.serviceScore" size="3.2vw" class="ratings-score-star"/>
            <span class="ratings-score-num">{{seller.serviceScore}}</span>
          </div>
          <div class="ratings-score-item">
            <span class="ratings-score-tit">食物评价</span>
            <rating-star :ratings="seller.foodScore" size="3.2vw" class="ratings-score-star"/>
            <span class="ratings-score-num">{{seller.foodScore}}</span>
          </div>
          <div class="ratings-score-item">
            <span class="ratings-score-tit">送达时间</span>
            <span class="ratings-score-time">{{seller.deliveryTime}}分钟</span>
          </div>
        </div>
      </div>
      <div class="ratings-com">
        <div class="ratings-com-tags">
          <div class="ratings-com-tag selected" @click="changetype('all')">
            <span>全部</span>
            <span class="ratings-com-num">57</span>
          </div>
          <div class="ratings-com-tag" @click="changetype('zan')">
            <span>满意</span>
            <span class="ratings-com-num">57</span>
          </div>
          <div class="ratings-com-tag" @click="changetype('buzan')">
            <span>不满意</span>
            <span class="ratings-com-num">57</span>
          </div>
        </div>
        <div class="ratings-com-filter">
          <i class="iconfont icon-dui" />
          <span>只看有内容的评价</span>
        </div>
      </div>
      <div class="ratings-comlist">
        <div class="ratings-comitem" v-for="comment in renderCom" :key="comment.ratetime">
          <div class="avatar">
            <img :src="comment.avatar" alt="">
          </div>
          <div class="comment">
            <div class="username">{{comment.username}}</div>
            <div class="comment-ratings">
              <rating-star size="2.667vw" :ratings="comment.score" />
              <span class="comment-time">{{comment.deliveryTime && comment.deliveryTime+"分钟送达"}}</span>
            </div>
            <div class="comment-con">
              {{comment.text}}
            </div>
            <div class="comment-tags">
              <i class="iconfont icon-zan" v-if="comment.rateType === 0" />
              <i class="iconfont icon-buzan" v-else/>
              <div class="comment-tag" v-for="(item, index) in comment.recommend" :key="index">
                {{item}}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ratingStar from '../../components/ratingStar'

import axios from 'axios'
import BScroll from 'better-scroll'

export default {

  name: "sellerRatings",
  props: {
    seller: {
      type: Object,
      require: true
    }
  },
  data() {
    return {
      comments: {},
      renderCom: {}
    }
  },
  created () {
    axios.get('/good/ratings')
      .then((res) => {
        console.log(res);
        if(res.status === 200){
          this.comments = res.data.data
          this.renderCom = this.comments
        }
      })
  },
  mounted() {
    let scroll = new BScroll(this.$refs.sellRatings, {
        click: true
      })
    console.log(scroll)
  },
  methods:{
    changetype(type) {
      switch(type) {
        case 'all': this.renderCom = this.comments; break;
        case 'zan': this.renderCom =  this.comments.filter(item => {
          return item.rateType === 0
        }); break;
        case 'buzan': this.renderCom = this.comments.filter(item => {
          return item.rateType === 1
        }); break;
      }
      console.log(type, this.renderCom)
    }
  },
  components: {
    ratingStar
  }
}
</script>

<style lang="less" scoped>
.ratings-wrap{
  height: 70vh;
  overflow: hidden;
}
.ratings{
  background-color: rgba(7, 17, 27, 0.1);
  &-score{
    display: flex;
    padding: 36px 0;
    background-color: #fff;
    &-con{
      width: 275px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      h3{
        font-size: 48px;
        color: rgb(255, 153, 0);
        line-height: 56px;
        margin-bottom: 12px;
      }
      span{
        font-size: 24px;
        color: rgb(7, 17, 27);
        line-height: 24px;
        margin-bottom: 16px;
      }
      .ratings-beyond{
        font-size: 20px;
        color:rgb(147, 153, 159);
        line-height: 20px;
        margin-bottom: 12px;
      }
    }
    &-detail{
      border-left: 1px solid rgba(7, 17, 27, 0.1);
      display: flex;
      justify-content: center;
      flex-direction: column;
      flex: 1;
      padding-left: 48px;
      .ratings-score-item{
        &:not(:last-child){
          margin-bottom: 16px;
        }
      }
      .ratings-score-star{
        margin: 0 12px;
      }
      .ratings-score-tit{
        font-size: 24px;
        color: rgb(7, 17, 27);
        line-height: 36px;
      }
      .ratings-score-num{
        font-size: 24px;
        color: rgb(255, 153, 0);
        line-height: 36px;
      }
      .ratings-score-time{
        font-size: 24px;
        color: rgb(147, 153, 159);
        line-height: 36px;
        margin-left: 12px;
      }
    }
  }
  &-com{
    overflow: hidden;
    background-color: #fff;
    margin-top: 36px;
    padding: 0 36px;
    border-top: 1px solid rgba(7, 17, 27, 0.1);
    border-bottom: 1px solid rgba(7, 17, 27, 0.1);
    &-tags{
      font-size: 0;
      padding: 36px 0;
      border-bottom: 1px solid rgba(7, 17, 27, 0.1);
    }
    &-tag{
      font-size: 24px;
      display: inline-block;
      height: 72px;
      line-height: 72px;
      padding: 0 20px;
      background-color:rgba(7, 17, 27, 0.1);
      border-radius: 10px;

      &:nth-child(n+2){
        margin-left: 12px;
      }

      &.selected{
        background-color: rgb(0, 160, 200);
        color:#fff;
      }

      .ratings-com-num{
        font-size: 18px;
      }
    }
    &-filter{
      padding: 36px 0;
      color: rgba(7, 17, 27, 0.6);
      i, span{
        vertical-align: middle;
      }
    }
  }
  &-comlist{
    background-color: #fff;
    padding: 0 36px;
    .ratings-comitem{
      display: flex;
      padding: 36px 0;
      border-bottom: 1px solid rgba(7, 17, 27, 0.1);
      .avatar{
        width:56px;
        height: 56px;
        border-radius: 50%;
        overflow: hidden;
        margin-right: 24px;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .comment{
        .username{
          font-size: 20px;
          color: rgb(7, 17, 27);
          line-height: 24px;
        }
        &-time{
          margin-left: 12px;
          font-size: 20px;
          font-weight: 200;
          color: rgb(147, 153, 159);
          line-height: 24px;
        }
        &-con{
          font-size: 24px;
          color: rgb(7, 17, 27);
          line-height: 36px;
        }
        &-tags{
          .iconfont{
            display: inline-block;
            vertical-align: middle;
            margin-top: 20px;
            line-height: 32px;
            margin-right: 12px;
          }
          .icon-zan{
            font-size: 24px;
            color: rgb(0, 160, 200);
          }
          .icon-buzan{
            font-size: 30px;
            color: rgb(183, 181, 191);
          }
        }
        &-tag{
          display: inline-block;
          vertical-align: middle;
          margin-right: 12px;
          margin-top: 16px;
          border: 1px solid rgba(7, 17, 27, 0.1);
          border-radius: 2px;
          font-size: 18px;
          color: rgb(147, 153, 159);
          line-height: 32px;
          padding: 0 12px;
          max-width: 100px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
  }
}
</style>

