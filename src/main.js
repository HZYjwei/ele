// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import { Carousel, CarouselItem, Input, Button } from 'element-ui'
import VueTouch from 'vue-touch'
import FastClick from 'fastclick'
import router from './router'
import store from './store'
// import './assets/viewport-units-buggyfill'
// import './assets/viewport-units-buggyfill.hacks'
import axios from 'axios'
import axiosconfig from './axios.config'
import '../mock'

Vue.config.productionTip = false

// ElementUI跑马灯
Vue.use(Carousel)
Vue.use(CarouselItem)

Vue.use(Input)
Vue.use(Button)

// Vue手机事件
Vue.use(VueTouch, {name: 'v-touch'})

// 解决手机300ms延迟
FastClick.attach(document.body)

// window.onload = function () {
//   window.viewportUnitsBuggyfill.init({
//     hacks: window.viewportUnitsBuggyfillHacks
//   })
// }

// axios({
//   ...axiosconfaxig
// })
axios.defaults = Object.assign(axios.defaults, axiosconfig)

// axios拦截器，超时的时候自动重发
axios.interceptors.response.use(undefined, function axiosRetryInterceptor (err) {
  var config = err.config
  if (!config || !config.retry) return Promise.reject(err)

  config.__retryCount = config.__retryCount || 0

  if (config.__retryCount > config.retry) {
    return Promise.reject(err)
  }
  // 当retry为false, 或者当前的次数大于限制数的时候
  config.__retryCount += 1
  var backoff = new Promise(function (resolve) {
    setTimeout(function () {
      resolve()
    }, config.retryDelay || 1)
  })

  return backoff.then(function () {
    return axios(config)
  })
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
