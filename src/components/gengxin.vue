<template>
  <div v-show="showgengxin">
    <div class="gengxin">
      <div class="animate"></div>
      <p class="gengxin-cont">推荐职位已更新</p>
    </div>
    <div class="kong"></div>
  </div>
</template>
<script>
import { Bus } from '@/assets/js/bus'
export default {
  name: 'gengxin',
  data () {
    return {
      showgengxin: false
    }
  },
  mounted () {
    Bus.$on('changegengxin', () => {
      this.showgengxin = true
      setTimeout(() => {
        this.showgengxin = false
      }, 2000)
    })
  }
}
</script>
<style lang="stylus" scoped>
@keyframes anime {
    0% {
      transform scaleX(1)
    }
    50% {
      transform scaleX(1.8)
    }
    100% {
      transform scaleX(2.5)
    }
  }
  .gengxin
    width 100%
    height .8rem
    position fixed
    z-index 3
    .animate
      width 40%
      height .8rem
      margin 0 auto
      background rgb(55,194,188)
      animation anime .5s ease forwards
    .gengxin-cont
      width 100%
      height .8rem
      line-height .8rem
      text-align center
      color white
      font-size .35rem
      position absolute
      top 50%
      left 50%
      transform translate(-50%,-50%)
  .kong
    width 100%
    height .8rem
</style>
