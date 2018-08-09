// 主界面
// 一些不常用的的用异步加载
import Index from '../components/index'
import Home from '../components/router/home'
import Discover from '../components/router/discover'
import Order from '../components/router/order'
// import Profile from '../components/router/profile'

// 商店界面
import SellerPage from '../components/sellerPage/sellerPage'
import Goods from '../components/sellerPage/components/goods'
// import Ratings from '../components/sellerPage/components/ratings'
// import Seller from '../components/sellerPage/components/seller'
import notFound from '../components/notFound'

// 其他界面
import Login from '../components/login'
import Location from '../components/location'

const Profile = () => import('../components/router/profile')

const Ratings = () => import('../components/sellerPage/components/ratings')
const Seller = () => import('../components/sellerPage/components/seller')

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
        meta: {
          index: 1
        },
        component: Home,
        alias: '/home'
      }, {
        path: 'discover',
        name: 'discover',
        meta: {
          index: 2,
          title: '发现'
        },
        component: Discover,
        alias: '/discover'
      }, {
        path: 'order',
        name: 'order',
        meta: {
          index: 3,
          title: '订单'
        },
        component: Order,
        alias: '/order'
      }, {
        path: 'profile',
        name: 'profile',
        meta: {
          index: 4,
          title: '我的'
        },
        component: Profile,
        alias: '/profile'
      }
    ]
  }, {
    path: '/login',
    name: 'login',
    component: Login
  }, {
    path: '/location',
    name: 'location',
    component: Location
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
