<template>
  <div class="fenxiang" @click="quxiaoclick">
    <div class="fenxiangcont">
      <div class="cont-top">
        <div class="cont-desc" v-for="item of fenxiangcont" :key="item.id">
          <span :class="item.icon"></span>
          <p>{{item.title}}</p>
        </div>
      </div>
      <p class="cont-bot" @click="quxiaoclick">取消</p>
    </div>
  </div>
</template>

<script>
import { Bus } from '../assets/js/bus'
export default {
  name: 'fenxiang',
  data () {
    return {
      fenxiangcont: [
        {
          id: 'F001',
          icon: 'iconfont icon-iconfontzhizuobiaozhunbduan32 backcolors1',
          title: '微信好友'
        },
        {
          id: 'F002',
          icon: 'iconfont icon-weixinpengyouquan backcolors2',
          title: '微信朋友圈'
        },
        {
          id: 'F003',
          icon: 'iconfont icon-QQ backcolors3',
          title: 'QQ好友'
        },
        {
          id: 'F004',
          icon: 'iconfont icon-lianjie backcolors4',
          title: '复制链接'
        }
      ]
    }
  },
  methods: {
    quxiaoclick () {
      Bus.$emit('closefenxiang', false)
    }
  }
}
</script>

<style lang="stylus" scoped>
.fenxiang
  width 100%
  height 100vh
  background rgba(0,0,0,.5)
  position fixed
  top 0
  z-index 5
  .fenxiangcont
    width 100%
    background white
    position absolute
    left 0
    bottom 0
    .cont-top
      width 100%
      height 1.5rem
      padding .6rem 0
      display flex
      flex-direction row
      justify-content space-around
      align-items center
      .cont-desc
        display flex
        flex-direction column
        justify-content center
        align-items center
      .cont-desc span
        padding .26rem
        font-size .6rem
        color white
        border-radius 50%
      .cont-desc p
        padding .2rem 0
        font-size .37rem
      .backcolors1
        background rgb(4,184,12)
      .backcolors2
        background rgb(103,190,30)
      .backcolors3
        background rgb(2,179,227)
      .backcolors4
        background rgb(55,194,188)
    .cont-bot
      width 100%
      line-height 1.5rem
      text-align center
      font-size .4rem
      color rgb(187,187,187)
      border-top solid .02rem rgb(245,245,245)
</style>
