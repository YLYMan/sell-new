import Vue from 'vue'
import Router from 'vue-router'
import Goods from 'components/goods/goods.vue'
import Seller from 'components/seller/seller.vue'
import Ratings from 'components/ratings/ratings.vue'

Vue.use(Router)

export default new Router({
  mode: 'history', // 配置路由模式: history: 依赖 HTML5 History API 和服务器配置
  base: process.env.BASE_URL, // 应用的基路径
  routes: [
    {
      path: '/goods',
      name: 'goods',
      component: Goods
    },
    {
      path: '/seller',
      name: 'seller',
      component: Seller
    },
    {
      path: '/ratings',
      name: 'ratings',
      component: Ratings
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ],
  linkActiveClass: 'active' // 全局配置 <router-link> 的默认“激活 class 类名”
})
