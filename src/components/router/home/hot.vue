<template>
    <div class="hot">
      <template v-for="item in hotarr">
        <hot-item v-bind="item" :key="item.title" class="hot-flex"></hot-item>
      </template>
    </div>
</template>

<script>
import hotItem from './components/hot-item'

export default {
  props: {
    hotarr: {
      type: Array,
      required: true
    }
  },
  components: {
    hotItem
  }
}
</script>

<style lang="less" scoped>
.hot{
  display: flex;
  margin-bottom: 16px;
  padding: 0 20px;

  &-flex{
    flex:1;
  }
}
</style>
