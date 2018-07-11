import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'

Vue.use(Router)
const router = new Router({
  mode: 'hash',
  scrollBehavior (to, from, pos) {
    if (!pos) {
      return { x: 0, y: 0 }
    } else {
      return pos
    }
  },
  routes,
  linkActiveClass: 'router',
  linkExactActiveClass: 'active-router'
})

export default router
