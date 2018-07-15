<template>
  <div class="collapse-item" :style="{maxHeight: modeStyle}" @click.stop="changeMode">
    <ul class="collapse-content" ref="coll" >
      <li v-for="(item, index) in collapse" :key="index" >
        <ifont :value="item.msg"></ifont>
        <span>{{item.discount}}</span>
      </li>
    </ul>
    <div v-if="max < collapse.length">{{collapse.length}}个活动<i class="iconfont icon-triangle-arrow-d"/></div>
  </div>
</template>

<script>
import ifont from '../../../components/ifont'

export default {
  props: {
    collapse: {
      type: Array,
      required: true
    },
    max: {
      type: Number,
      default: 999
    }
  },
  data () {
    return {
      collMaxHeight: 'none',
      modeStyle: 'none'
    }
  },
  methods: {
    changeMode (e) {
      this.modeStyle = this.modeStyle === 'none' ? this.collMaxHeight : 'none'
    }
  },
  // created () {
  //   this.$nextTick( () => {
  //     this.collMaxHeight = this.$refs.coll ? this.$refs.coll.children[0].offsetHeight * this.max + 'px' : '0'
  //     this.modeStyle = this.collMaxHeight
  //   })
  // },
  mounted () {
    this.collMaxHeight = this.$refs.coll ? this.$refs.coll.children[0].offsetHeight * this.max + 'px' : '0'
    this.modeStyle = this.collMaxHeight
  },
  components: {
    ifont
  }
}
</script>

<style lang="less" scoped>
.collapse{
  &-item {
    overflow: hidden;
    display: flex;
    width: 100%;
    font-size: 22px;
    margin-top: 10px;
    .iconfont{
      font-size: 22px;
    }
  }
  &-content{
    flex: 1;
    li{
      padding: 5px 0;
    }
  }
}
</style>
