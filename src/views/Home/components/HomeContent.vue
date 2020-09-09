<template>
  <div class="HomeContent">
    <div>
      <div class="scroll-img" v-show="showscrollimg"><img src="imgs/loading.gif"></div>
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
                  <img src="imgs/006.jpg">
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
      HomeContent: []
    }
  },
  methods: {
    getdata () {
      this.$getdata('/api/mock.json').then(res => {
        this.HomeContent = res.HomeContent
      })
    },
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
    this.getdata()
    Bus.$on('checknums', (checknum) => {
      if (checknum !== 0) {
        this.showscrollimg = true
        setTimeout(() => {
          this.showscrollimg = false
          Bus.$emit('changegengxin', true)
        }, 2000)
      }
      this.HomeContent = []
      setTimeout(() => {
        this.getdata()
      }, 1000)
    })
    Bus.$on('scrollimg', () => {
      this.showscrollimg = true
      setTimeout(() => {
        this.showscrollimg = false
      }, 2000)
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
