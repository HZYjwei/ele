<template>
  <div class="topbar">
    <i class="iconfont icon-return" @click="historyBack"></i>
    <span>{{title}}</span>
  </div>
</template>
<script>
export default {
  name: 'topbar',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  methods: {
    historyBack () {
      history.back()
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../util';

.topbar{
  position: relative;
  --height: 88px;
  height: var(--height);
  line-height: var(--height);
  color:#fff;
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  .bg-img();

  .iconfont{
    position: absolute;
    left: 0;
    font-size: 40px;
    height: 100%;
    width: var(--height);
  }
}
</style>
