// 主界面
import Index from '../components/index'
import Home from '../components/router/home'
import Discover from '../components/router/discover'
import Order from '../components/router/order'
import Profile from '../components/router/profile'

// 商店界面
import SellerPage from '../components/sellerPage/sellerPage'
import Goods from '../components/sellerPage/components/goods'
import Ratings from '../components/sellerPage/components/ratings'
import Seller from '../components/sellerPage/components/seller'
import notFound from '../components/notFound'

const routes = [
  {
    path: '/sellerPage',
    name: 'sellerPage',
    component: SellerPage,
    children: [
      {
        path: 'goods',
        name: 'goods',
        component: Goods
      }, {
        path: 'ratings',
        name: 'ratings',
        component: Ratings
      }, {
        path: 'seller',
        name: 'seller',
        component: Seller
      }
    ]
  }, {
    path: '/index',
    name: 'index',
    component: Index,
    children: [
      {
        path: 'home',
        name: 'home',
        component: Home,
        alias: '/home'
      }, {
        path: 'discover',
        name: 'discover',
        component: Discover,
        alias: '/discover'
      }, {
        path: 'order',
        name: 'order',
        component: Order,
        alias: '/order'
      }, {
        path: 'profile',
        name: 'profile',
        component: Profile,
        alias: '/profile'
      }
    ]
  }, {
    path: '/err',
    name: 'err',
    component: notFound
  }, {
    path: '*',
    redirect (to) {
      if (to.path === '/') {
        return { name: 'home' }
      } else {
        return { name: 'err' }
      }
    }
  }
]

export default routes
