import Mock from 'mockjs'
import shop from './shop'
import home from './home'
import indexBar from './indexBar'

// index
Mock.mock('/ele/indexBar', {
  code: 0,
  codeMsg: '成功',
  data: indexBar
})

// home
Mock.mock('/ele/home', {
  code: 0,
  codeMsg: '成功',
  data: home
})

// shop
Mock.mock('/ele/good/seller', {
  code: 0,
  codeMsg: '成功',
  data: shop.seller
})

Mock.mock('/ele/good/goods', {
  code: 0,
  codeMsg: '成功',
  data: shop.goods
})

Mock.mock('/ele/good/ratings', {
  code: 0,
  codeMsg: '成功',
  data: shop.ratings
})
