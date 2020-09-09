import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Router from 'vue-router'
import store from './store'
import 'lib-flexible/flexible'
import './assets/css/reset.css'
import './assets/css/border.css'
import './assets/css/iconfont.css'
import animate from 'animate.css'
import 'swiper/dist/css/swiper.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import elementui from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import { getdata } from './utils/request'
import BaiduMap from 'vue-baidu-map'
Vue.use(BaiduMap, {
  ak: 'gxVZ3ULbiEDzCo97xsQS1t1n6M79hUZM'
})
Vue.use(elementui)
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false
Vue.use(animate)
Vue.prototype.$getdata = getdata
// 解决【vue-router】"Uncaught (in promise) undefined"问题 先引入vue-router
const routerMethods = ['push', 'replace']
routerMethods.forEach(method => {
  const originalCall = Router.prototype[method]
  Router.prototype[method] = function (location, onResolve, onReject) {
    if (onResolve || onReject) {
      return originalCall.call(this, location, onResolve, onReject)
    }
    return originalCall.call(this, location).catch(err => err)
  }
})

// 注册一个全局自定义指令 `v-focus`来聚焦元素
Vue.directive('focus', {
  inserted: function (el) {
    el.focus()
  }
})

new Vue({
  router,
  axios,
  store,
  render: h => h(App)
}).$mount('#app')
