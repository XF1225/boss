import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home/Home')
  },
  {
    path: '/wode',
    name: 'wode',
    component: () => import('../views/wode/wode')
  },
  {
    path: '/xiaoxi',
    name: 'xiaoxi',
    component: () => import('../views/xiaoxi/xiaoxi'),
    children: [
      {
        path: 'contentdetail',
        component: () => import('../views/xiaoxi/components/contentdetail')
      },
      {
        path: 'ganxingqu',
        component: () => import('../views/xiaoxi/components/ganxingqu')
      },
      {
        path: 'kanguowo',
        component: () => import('../views/xiaoxi/components/kanguowo')
      },
      {
        path: 'xinzhiwei',
        component: () => import('../views/xiaoxi/components/xinzhiwei')
      }
    ]
  },
  {
    path: '/faxian',
    name: 'faxian',
    component: () => import('../views/faxian/faxian')
  },
  {
    path: '/shezhi',
    name: 'shezhi',
    component: () => import('../views/shezhi/shezhi')
  },
  {
    path: '/shezhidetail/:id',
    name: 'shezhidetail',
    component: () => import('../views/shezhidetail/shezhidetail')
  },
  {
    path: '/jobsdetail/:id',
    name: 'jobsdetail',
    component: () => import('../views/jobsdetail/jobsdetail')
  },
  {
    path: '/whatjob',
    name: 'whatjob',
    component: () => import('../views/whatjob/whatjob')
  },
  {
    path: '/searchjob',
    name: 'searchjob',
    component: () => import('../views/searchjob/searchjob')
  },
  {
    path: '/sousuozhiwei',
    name: 'sousuozhiwei',
    component: () => import('../views/sousuozhiwei/sousuozhiwei')
  },
  {
    path: '/citys',
    name: 'citys',
    component: () => import('../views/citys/citys')
  },
  {
    path: '/shaixuan',
    name: 'shaixuan',
    component: () => import('../views/shaixuan/shaixuan')
  },
  {
    path: '/guanjianci',
    name: 'guanjianci',
    component: () => import('../views/guanjianci/guanjianci')
  },
  {
    path: '/faxianjia',
    name: 'faxianjia',
    component: () => import('../views/faxianjia/faxianjia')
  },
  {
    path: '/citychoice',
    name: 'citychoice',
    component: () => import('../views/citychoice/citychoice')
  },
  {
    path: '/liaotiandetail/:id',
    name: 'liaotiandetail',
    component: () => import('../views/liaotiandetail/liaotiandetail')
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
