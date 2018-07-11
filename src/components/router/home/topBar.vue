<template>
  <div class="header">
    <header>
      <div class="location">
        <i class="iconfont icon-dingwei"></i>
        <span>{{location.address}}</span>
        <i class="iconfont icon-triangle-arrow-d"></i>
      </div>
    </header>
    <div class="search-wrap">
      <search v-bind="searchConfig" class="search">
        <slot>
          <span>搜索饿了么商家、商品名称</span>
        </slot>
      </search>
    </div>
  </div>
</template>

<script>
import search from '../../components/search'
export default {
  data () {
    return {
      location: {
        pos: {x: 0, y: 0},
        address: '浙江大学西溪校区'
      }
    }
  },
  components: {
    search
  }
}
</script>

<style lang="less" scoped>
  @import '../../../util';
  .header{
    padding: 20px 28px 0;
    .bg-img();

    .location{
      display: flex;
      align-items: center;
      overflow: hidden;
      white-space: nowrap;

      color:#fff;
      font-size: 34px;
      font-weight: bold;
      span{
        display: inline-block;
        max-width: 380px;
        padding: 0 10px;
      }
      .icon-dingwei{
        font-size: 31px;
      }
    }

    .search-wrap{
      padding: 15px 0;

      .search{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 72px;
        line-height: 72px;
        font-size: 28px;
        color: #999;
        text-align: center;
      }
    }
  }
</style>
