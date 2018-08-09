<template>
  <div class="filterBar">
    <ul class="filterBar-show">
      <v-touch tag="li" :class="check===1 && 'active'" @tap="check=1">配送最快<i class="iconfont icon-triangle-arrow-d"></i></v-touch>
      <v-touch tag="li" :class="check===2 && 'active'" @tap="check=2">好评优先</v-touch>
      <v-touch tag="li" :class="check===3 && 'active'" @tap="check=3"> 距离最远</v-touch>
      <v-touch tag="li" :class="check===4 && 'active'" @tap="check=4">筛选<i class="iconfont icon-shaixuan"></i></v-touch>
    </ul>
  </div>
</template>

<script>
/**
 * ele么的主页的筛选组件
 */
export default {
  data () {
    return {
      check: 1
    }
  }
}
</script>

<style lang="less" scoped>
.filterBar{

  &-show{
    height: 80px;
    line-height: 80px;
    display: flex;
    border-bottom: 1px solid #ddd;
    li{
      flex: 1;
      text-align: center;
      color: #666;
      &.active{
        font-weight: 700;
        color: #000;
      }
    }
  }
}
</style>
