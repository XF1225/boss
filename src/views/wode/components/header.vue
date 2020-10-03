<template>
  <div class="wodeheader">
    <div class="header1" v-show="showheader" ref="headerheight">
      <div class="header-top">
        <span class="iconfont saoyisao">&#xe606;</span>
        <router-link tag="span" to="/shezhi" class="iconfont shezhi">&#xe63f;</router-link>
      </div>
      <div class="kong2"></div>
      <div class="header-name">
        <div class="username">
          <h2>张秋千</h2>
          <p :style="header1"><span class="iconfont">&#xe63a;</span>我的在线简历</p>
        </div>
        <div class="userimg" :style="header1"><img src="imgs/006.jpg"></div>
      </div>
      <div class="header-desc">
        <li v-for="item of wodeuserdesc" :key="item.id" :style="header1" @click="todetails(item.id)">
          <span>{{item.num}}</span>
          <i>{{item.title}}</i>
        </li>
      </div>
      <div class="header-vip">
        <div class="vip-content">
          <div class="left">
            <span class="iconfont">&#xe61d;</span>
            <p>升级VIP专享超值权益</p>
          </div>
          <div class="right">
            <p>去升级</p>
            <span class="iconfont quzuobian">&#xe79a;</span>
          </div>
        </div>
        <div class="vip-hidden">
          <div class="vip-line"></div>
          <div class="viphuiyuan">
            <p>6项VIP专属权益，每天仅需3直豆</p>
            <span>VIP会员</span>
          </div>
        </div>
      </div>
    </div>
    <div class="header2" v-show="!showheader" :style="header2">
      <div class="detail">
        <h4>张秋千</h4>
        <div class="right2">
          <span class="iconfont saoyisao">&#xe606;</span>
          <router-link tag="span" to="/shezhi" class="iconfont shezhi">&#xe63f;</router-link>
        </div>
      </div>
      <div class="kong"></div>
    </div>
  </div>
</template>

<script>
import { Bus } from '@/assets/js/bus'
export default {
  name: 'wodeheader',
  data () {
    return {
      wodeuserdesc: [],
      showheader: true,
      header1: {
        opacity: 1
      },
      header2: {
        opacity: 0
      }
    }
  },
  methods: {
    getdata () {
      this.$getdata('/api/mock.json').then(res => {
        this.wodeuserdesc = res.wodeuserdesc
        this.$set(this.wodeuserdesc[3], 'num', this.$store.state.shoucangID.length)
        this.$set(this.wodeuserdesc[0], 'num', res.contents.length)
      })
    },
    scrolltop () {
      const top = document.documentElement.scrollTop || document.body.scrollTop
      if (top >= 0 && top <= 170) {
        const opacity = 1 - (top / 170)
        this.header1 = { opacity }
        this.showheader = true
      } else if (top > 170) {
        const opacity = top / 170
        this.opacity = opacity > 1 ? 1 : opacity
        this.header2 = { opacity }
        this.showheader = false
      }
    },
    todetails (id) {
      if (id === 'w001') {
        this.$router.push('/xiaoxi')
      } else if (id === 'w004') {
        this.$router.push('/ganxingqu')
      }
    }
  },
  activated () {
    this.getdata()
    addEventListener('scroll', this.scrolltop)
  },
  deactivated () {
    removeEventListener('scroll', this.scrolltop)
  },
  mounted () {
    Bus.$on('getshowheader', (aa) => {
      this.showheader = aa
      const opacity = 1
      this.header2 = { opacity }
    })
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../assets/css/common.styl'
.wodeheader
  width 100%
  .header1
    width 100%
    height 9.5rem
    background $bgColor
    .header-top
      width 100%
      height 1.5rem
      display flex
      flex-direction row
      justify-content flex-end
      align-items flex-end
      position fixed
      z-index 3
      .saoyisao,.shezhi
        font-size .7rem
        color white
        padding-right .5rem
      .saoyisao
        padding-right .3rem
    .kong2
      width 100%
      height 1.5rem
    .header-name
      width 90%
      margin 0 auto
      height 2.5rem
      display flex
      flex-direction row
      justify-content space-between
      align-items center
      .username
        height 2.5rem
        display flex
        flex-direction column
        justify-content center
      .username h2
        font-size: .7rem
        color white
        padding-bottom .2rem
      .username p
        font-size .35rem
        color white
        opacity .9
        display flex
        flex-direction row
        align-items center
        padding-top .2rem
      .iconfont
        font-size .37rem
        padding-right .2rem
      .userimg
        width 1.8rem
        height 1.8rem
        overflow hidden
      .userimg img
        width 100%
        height 100%
        border-radius 50%
    .header-desc
      width 100%
      height 2rem
      display flex
      flex-direction row
      justify-content space-around
      align-items center
    .header-desc li
      height 2rem
      display flex
      flex-direction column
      justify-content center
      align-items center
      color white
    .header-desc span
      font-size .5rem
    .header-desc i
      font-size .32rem
      font-style normal
      padding-top .2rem
      opacity .6
  .header-vip
    width 100%
    padding-top .2rem
  .vip-content
    width 90%
    margin 0 auto
    height 1.3rem
    background rgb(38,38,38)
    border-radius .2rem .2rem 0 0
    display flex
    flex-direction row
    justify-content space-between
    align-items center
    .left
      display flex
      flex-direction row
      align-items center
      font-size .4rem
      color rgb(223,161,120)
      .iconfont
        padding 0 .2rem 0 .3rem
    .right
      display flex
      flex-direction row
      align-items center
      margin-right .3rem
      font-size .35rem
      padding .1rem .2rem
      border-radius .3rem
      background linear-gradient(to right,rgb(228,165,124),rgb(247,209,182))
    .quzuobian
      font-size .3rem
      font-weight bolder
  .vip-hidden
    width 90%
    margin 0 auto
    height 2rem
    background rgb(38,38,38)
    .vip-line
      width 90%
      margin 0 auto
      height .01rem
      background rgba(179,179,179,.1)
    .viphuiyuan
      width 100%
      height 1.5rem
      display flex
      flex-direction row
      justify-content space-between
      align-items center
    .viphuiyuan p
      font-size .3rem
      color rgba(223,161,120,.8)
      padding-left .5rem
    .viphuiyuan span
      font-size .7rem
      color rgba(179,179,179,.1)
      padding-top .5rem
  .header2
    width 100%
    height 2rem
    .detail
      width 100%
      height 2rem
      background $bgColor
      display flex
      flex-direction row
      justify-content space-between
      align-items center
      position fixed
      top 0
      left 0
      z-index 3
    .detail h4
      font-size .45rem
      color white
      padding-left .5rem
    .right2
      height 1.5rem
      display flex
      flex-direction row
      justify-content flex-end
      align-items center
      .saoyisao,.shezhi
        font-size .7rem
        color white
        padding-right .5rem
      .saoyisao
        padding-right .3rem
    .kong
      width 100%
      height 1.5rem
</style>>
