<template>
  <div class="login-bar">
      <columnItem title="钱包" img="icon-fl-renminbi" width="33.33%" class="login-bar-item">
        <div class="iconwrap" slot-scope="slotProp">
          <i class="iconfont" :class="slotProp.img" alt="" />
        </div>
      </columnItem>
      <columnItem title="红包" img="icon-hongbao" width="33.33%" class="login-bar-item">
       <div class="iconwrap" slot-scope="slotProp">
          <i class="iconfont" :class="slotProp.img" alt="" />
        </div>
      </columnItem>
      <columnItem title="金币" img="icon-gold" width="33.33%" class="login-bar-item">
        <div class="iconwrap" slot-scope="slotProp">
          <i class="iconfont" :class="slotProp.img" alt="" />
        </div>
      </columnItem>
    </div>
</template>

<script>
import columnItem from '../../components/columnItem'
export default {
  components: {
    columnItem
  }
}
</script>

<style lang="less" scoped>
.login-bar{
  display: flex;
  font-size: 24px;
  font-weight: bold;
  height: 168px;
  border-bottom: 1px solid #ddd;
  background-color: #fff;
  &-item:not(:last-child){
      border-right: 1px solid #ddd;
  }
  .iconwrap{
    border-radius: 50%;
    width: 52px;
    height: 52px;
    text-align: center;
    line-height: 52px;
    color:#fff;
    margin-bottom: 10px;
    &:nth-child(1){
      background-color: #FF9900;
    }
    &:nth-child(2){
      background-color: #FF5F3E;
    }
    &:nth-child(3){
      background-color: #6AC20B;
    }
  }
}
</style>
