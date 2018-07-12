<template>
  <div>
    <template v-for="shopItem in shopList">
      <shop-item :key="shopItem.name" v-bind="shopItem"></shop-item>
    </template>
  </div>
</template>

<script>
import shopItem from './components/shop-item'
export default {
  props: {
    shopList: {
      type: Array,
      required: true
    }
  },
  components: {
    shopItem
  }
}
</script>
