<template>
  <div class="HomeContent">
    <div>
      <div class="scroll-img" v-show="showscrollimg"><img src="@/assets/imgs/loading.gif"></div>
      <div class="wrapper">
        <div class="cont-detail" v-for="item of HomeContent" :key="item.id">
          <div class="cont-main" @click="tocontdetail(item.id)">
            <div class="cont-title">
              <h2>{{item.conttitle}}</h2>
              <h4>{{item.contprice}}</h4>
            </div>
            <div class="cont-keys">
              <li v-for="(items, index) of item.contkeys" :key=index>{{items}}</li>
            </div>
            <div class="cont-conp">
              <P>{{item.contconp}}</P>
              <span>{{item.conpnum}}</span>
            </div>
            <div class="cont-name">
              <div class="cont-left">
                <div class="cont-img">
                  <img src="@/assets/imgs/006.jpg">
                  <i class="iconfont zhuanshi">&#xe61d;</i>
                </div>
                <p class="cont-p">{{item.contp}}</p>
              </div>
              <div class="cont-right">
                {{item.area}}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Bus } from '@/assets/js/bus'
import Bscroll from 'better-scroll'
export default {
  name: 'HomeContent',
  data () {
    return {
      showscrollimg: false,
      HomeContent: [
        {
          id: '1001',
          conttitle: '中级前端工程师',
          contprice: '11-14K',
          contkeys: ['3-5年', '大专', 'JavaScript', 'Webpack', 'HTML'],
          contconp: '网联商务',
          conpnum: '100-499人',
          contp: '张亚茹.人事专员',
          area: '北京'
        },
        {
          id: '1002',
          conttitle: '移动端开发工程师',
          contprice: '10-15K',
          contkeys: ['1-3年', '大专', '移动端', '小程序', 'Android'],
          contconp: '天津图灵健康 未融资',
          conpnum: '0-20人',
          contp: '孙颖.人力资源',
          area: '天津 武清区 北郊'
        },
        {
          id: '1003',
          conttitle: 'WEB前端开发工程师',
          contprice: '9-14K',
          contkeys: ['1-3年', '大专', 'saas软件', '小程序', 'JavaScript'],
          contconp: '上海三高计算机 已上市',
          conpnum: '500-999人',
          contp: 'Ariei.人事',
          area: '上海'
        },
        {
          id: '1004',
          conttitle: '前端工程师',
          contprice: '10-15K',
          contkeys: ['5-10年', '本科', 'JavaScript', 'Vue.js', 'CSS3'],
          contconp: '直真科技 未融资',
          conpnum: '500-999人',
          contp: '文盼.招聘者',
          area: '重庆 江北区 观音桥'
        },
        {
          id: '1005',
          conttitle: 'web前端工程师',
          contprice: '10-15K',
          contkeys: ['1-3年', '大专', 'Webpack', 'ES6', 'Vue.js'],
          contconp: '维度云医 不需要融资',
          conpnum: '1000-9999人',
          contp: '郑女士.HR',
          area: '哈尔滨 道里区'
        },
        {
          id: '1006',
          conttitle: '前端工程师',
          contprice: '4-6K',
          contkeys: ['经验不限', '学历不限', 'JavaScript', 'ES6', 'jQuery'],
          contconp: '林谷科技',
          conpnum: '0-20人',
          contp: 'sunny.人事专员',
          area: '吉林 昌邑区'
        },
        {
          id: '1007',
          conttitle: '微信小程序开发',
          contprice: '10-13K',
          contkeys: ['3-5年', '中专/技校', '小程序', 'CSS3'],
          contconp: '斑马数据',
          conpnum: '20-99人',
          contp: '王利达.经理',
          area: '沈阳 沈河区 市府'
        },
        {
          id: '1008',
          conttitle: 'web前端（乌兰察布）',
          contprice: '10-15K',
          contkeys: ['5-10年', '本科', '后端开发', 'jQuery', 'H5'],
          contconp: '贵州东方国信 未融资',
          conpnum: '1000-9999人',
          contp: '刘璇.人资专员',
          area: '呼和浩特'
        },
        {
          id: '1009',
          conttitle: '前端工程师',
          contprice: '8-12K',
          contkeys: ['3-5年', '本科', 'Webpack', 'ES6', 'CSS3'],
          contconp: '路上餐饮集团 不需要融资',
          conpnum: '1000-9999人',
          contp: '贾女士.招聘主管',
          area: '乌鲁木齐'
        },
        {
          id: '1010',
          conttitle: '网页前端设计',
          contprice: '8-13K',
          contkeys: ['3-5年', '大专', 'JavaScript', 'CSS3', 'HTML'],
          contconp: '兴睿网络',
          conpnum: '0-20人',
          contp: '阳春花.经理',
          area: '西宁 城西区'
        },
        {
          id: '1011',
          conttitle: 'web前端工程师',
          contprice: '8-12K',
          contkeys: ['3-5年', '本科', 'JavaScript', 'React', 'HTML'],
          contconp: '威力传动',
          conpnum: '100-499人',
          contp: '张先生.项目经理',
          area: '银川 西夏区'
        },
        {
          id: '1012',
          conttitle: '前端开发工程师',
          contprice: '14-20K',
          contkeys: ['3-5年', '本科', 'JavaScript', '网络协议', 'HTML'],
          contconp: '中软国际 已上市',
          conpnum: '10000人以上',
          contp: '胥虹颖.招聘主管',
          area: '兰州 城关区'
        },
        {
          id: '1013',
          conttitle: '高级前端开发工程师',
          contprice: '12-18K.15薪',
          contkeys: ['5-10年', '大专', 'Webpack', 'H5', 'Gulp'],
          contconp: '畅移信息 B轮',
          conpnum: '100-499人',
          contp: '魏颖慧.HRBP',
          area: '西安'
        },
        {
          id: '1014',
          conttitle: '前端开发工程师',
          contprice: '10-15K.14薪',
          contkeys: ['5-10年', '本科', '后端开发', 'ES6', '数据交互'],
          contconp: '深大智能 C轮',
          conpnum: '500-999人',
          contp: '梁女士.招聘专家',
          area: '太原'
        },
        {
          id: '1015',
          conttitle: 'web前端',
          contprice: '8-12K',
          contkeys: ['1-3年', '大专', 'HTML', 'ES6', 'JavaScript'],
          contconp: '华腾 未融资',
          conpnum: '20-99人',
          contp: '周阳.互联网运营经理',
          area: '石家庄'
        },
        {
          id: '1016',
          conttitle: 'web前端',
          contprice: '8-12K',
          contkeys: ['3-5年', '大专', 'JavaScript', 'ES6', 'Webpack'],
          contconp: '犇犇科技 不需要融资',
          conpnum: '100-499人',
          contp: '范经理',
          area: '郑州 二七区 大学路'
        },
        {
          id: '1017',
          conttitle: '前端开发工程师',
          contprice: '15-20K',
          contkeys: ['经验不限', '本科', 'JavaScript', '软件', '混合开发'],
          contconp: '山东瑞合 不需要融资',
          conpnum: '20-99人',
          contp: '冯承敏.人力资源主管',
          area: '济南'
        },
        {
          id: '1018',
          conttitle: '前端开发工程师',
          contprice: '8-12K',
          contkeys: ['5-10年', '本科', 'CSS3', 'AJAX', 'jQuery'],
          contconp: '城市云',
          conpnum: '100-499人',
          contp: '黄磊.HRBP',
          area: '合肥'
        }
      ]
    }
  },
  methods: {
    tocontdetail (id) {
      this.$router.push(`/jobsdetail/${id}`)
      window.scrollTo(0, 0)
    },
    initscroll () {
      if (!this.scroll) {
        this.scroll = new Bscroll('.HomeContent', {
          probeType: 1,
          click: true,
          bounce: false,
          pullDownRefresh: {
            threshold: 50, // 触发pullingDown事件的位置
            stop: 40// 下拉回弹后停留的位置
          }
        })
        this.scroll.on('scroll', (pos) => {
          if (pos.y === 0) {
            this.showscrollimg = true
            setTimeout(() => {
              this.showscrollimg = false
              Bus.$emit('changegengxin', true)
            }, 2000)
          }
        })
      } else {
        setTimeout(() => {
          this.scroll.refresh()
        }, 2000)
      }
    }
  },
  mounted () {
    this.initscroll()
    Bus.$on('checknums', (checknum) => {
      if (checknum !== 0) {
        this.showscrollimg = true
        setTimeout(() => {
          this.showscrollimg = false
          Bus.$emit('changegengxin', true)
        }, 2000)
      }
    })
  }
}
</script>

<style lang="stylus" scoped>
.HomeContent
  width 100%
  height 10rem
  position relative
  .scroll-img
    width 100%
    height 3rem
    display flex
    justify-content center
    align-items center
    position fixed
    z-index 5
  .scroll-img img
    width .9rem
    height .9rem
    border-radius 50%
    background white
    padding .13rem
    box-shadow 0 .05rem .1rem .05rem rgb(245,245,245)
  .wrapper
    display flex
    flex-direction column
    background rgb(245,245,245)
    margin-bottom 1.5rem
    .cont-detail:last-of-type
      margin-bottom 0
    .cont-detail
      width 100%
      background white
      margin-bottom .2rem
      .cont-main
        width 90%
        margin 0 auto
        padding-bottom .2rem
        display flex
        flex-direction column
        .cont-title
          height 1.1rem
          padding-top .2rem
          display flex
          flex-direction row
          justify-content space-between
          align-items center
        .cont-title h2
          width 45%
          font-size .46rem
          overflow hidden
          white-space nowrap
          text-overflow ellipsis
        .cont-title h4
          font-size .4rem
          font-weight 500
          color rgb(55,194,188)
        .cont-keys
          height .8rem
          display flex
          flex-direction row
          align-items center
          font-size .32rem
          color rgb(127,127,127)
        .cont-keys li
          display inline-block
          padding .15rem .2rem
          margin-right .2rem
          border-radius .08rem
          background rgb(245,245,245)
        .cont-conp
          height .8rem
          display flex
          flex-direction row
          align-items center
        .cont-conp p, .cont-conp span
          font-size .35rem
        .cont-conp span
          color rgb(127,127,127)
          padding-left .3rem
        .cont-name
          height 1rem
          display flex
          flex-direction row
          justify-content space-between
          align-items center
          .cont-left
            display flex
            flex-direction row
            align-items center
            .cont-img
              position relative
            .cont-img img
              width .7rem
              height .7rem
              border-radius 50%
              background red
            .zhuanshi
              width .3rem
              height .3rem
              border solid .02rem white
              border-radius 50%
              background rgb(55,194,188)
              font-size .2rem
              color white
              display flex
              justify-content center
              align-items center
              position absolute
              bottom 0
              right 0
            .cont-p
              font-size .32rem
              padding-left .3rem
          .cont-right
            font-size .32rem
            color rgb(127,127,127)
</style>>
