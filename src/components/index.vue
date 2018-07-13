<template>
  <div class="index">
    <router-view class="index-wrap"></router-view>
    <div class="tabBar">
      <ul>
        <template v-for="item in indexBar">
          <router-link :to="{path: item.path}" tag="LI" :key="item.title">
            <columnItem :title="item.title" :img="item.img" width="100%" class="indexbar">
              <img :src="slotProps.img" alt=""  slot-scope="slotProps">
            </columnItem>
          </router-link>
        </template>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

import columnItem from './components/columnItem'

export default {
  data () {
    return {
      indexBar: []
    }
  },
  created () {
    axios.get('/indexBar').then(res => { this.indexBar = res.data.data.indexBar })
  },
  components: {
    columnItem
  }
}
</script>

<style lang="less" scoped>
.index-wrap{
  padding-bottom: 100px;
}
.tabBar {
  position: fixed;
  display: flex;
  width: 100%;
  bottom: 0;
  align-items: center;
  width: 100%;
  height: 100px;
  line-height: 100px;
  background-color: #fff;
  z-index:999;
  ul {
    flex: 1;
    display: flex;
    li {
      flex: 1;
      text-align: center;
      img{
        width: 36.36px;
        height: 36.36px;
      }
      .indexbar{
        font-size: 24px;
        line-height: 38px;
      }
      span {
        font-size: 24px;
      }
    }
  }
}
</style>
