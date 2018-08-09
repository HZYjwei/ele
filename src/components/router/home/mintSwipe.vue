<template>
  <div>
    <div class="block">
      <el-carousel height="130px" indicator-position="outside">
        <el-carousel-item v-for="(item, index) in newSwipeItems" :key="index">
          <div class="mintItem-wrap">
            <template v-for="mintItem in item" >
              <mintItem v-bind="mintItem" :key="mintItem.title" class="mintItem">
                <template slot-scope="slotProps">
                  <img :src="slotProps.img" alt="" class="mintImg">
                </template>
              </mintItem>
            </template>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
/**
 * 主页的轮播图，用了element-UI
 */
import mintItem from '../../components/columnItem'

export default {
  props: {
    swipeItems: {
      type: Array,
      required: true
    }
  },
  computed: {
    newSwipeItems () {
      let newSwipeItems = {}
      let arr = []
      // 每个item的平均宽度：20%
      newSwipeItems = this.swipeItems.map(item => Object.assign(item, {width: '20%'}))
      // 分成arr[[10个],[]], 做轮播
      for (let i = 0; i < newSwipeItems.length; i += 10) {
        arr.push(newSwipeItems.slice(i, i + 10))
      }
      return arr
    }
  },
  components: {
    mintItem
  }
}
</script>

<style lang="less" scoped>
.mintItem-wrap{
  display: flex;
  color:#666;
  font-size: 24px;
  flex-wrap: wrap;
  .mintItem{
    margin-top: 10px;
  }
  .mintImg{
    width: 90px;
    height: 90px;
  }
}
</style>
