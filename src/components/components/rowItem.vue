<template>
  <div class="rowItem">
    <div>
      <slot></slot>
      <span>{{ title }}</span>
    </div>
    <i class="iconfont icon-more"></i>
  </div>
</template>

<script>
/**
 * 这是一个上下布局的组件，用slot-scope
*/
export default {
  props: {
    'title': {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="less" scoped>
  .rowItem{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 28px 20px;
    &:not(:last-child){
      border-bottom: 1px solid #eee;
    }
  }
</style>
