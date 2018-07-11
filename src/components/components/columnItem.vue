<template>
  <div class="columnItem" :style="{width: width}">
    <slot :img="img"></slot>
    <span>{{ title }}</span>
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
    },
    'img': {
      type: String,
      required: true
    },
    'width': {
      type: String,
      default: '25%'
    }
  }
}
</script>

<style lang="less" scoped>
  .columnItem{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
