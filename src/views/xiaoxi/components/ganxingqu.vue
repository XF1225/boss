<template>
  <div>
    <hudongnav></hudongnav>
    <div class="wrapper">
    <swiper ref="mySwiper" :options="swiperOption">
      <swiper-slide v-for="(item,index) of list" :key="index">
        <div class="liaotiancont">
          <keep-alive>
            <component :is="item.component"></component>
          </keep-alive>
        </div>
      </swiper-slide>
    </swiper>
  </div>
  </div>
</template>

<script>
import { Bus } from '@/assets/js/bus'
import hudongnav from './hudongnav'
import ganxingqucont from '../components/ganxingqucont'
import kanguowo from '../components/kanguowo'
import xinzhiwei from '../components/xinzhiwei'
export default {
  name: 'ganxingqu',
  components: {
    hudongnav,
    ganxingqucont,
    kanguowo,
    xinzhiwei
  },
  data () {
    return {
      swiperOption: {
        on: {
          slideChangeTransitionStart: function () {
            Bus.$emit('slideTab', this.realIndex)
          }
        }
      },
      list: [
        { path: '/components/ganxingqucont', component: ganxingqucont },
        { path: '/components/kanguowo', component: kanguowo },
        { path: '/components/xinzhiwei', component: xinzhiwei }
      ]
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted () {
    Bus.$on('changeTab', (index) => {
      this.swiper.slideTo(index, 0, false)
    })
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../assets/css/common.styl'
.ganxingqu
  width 100%
  height 70vh
  background rgb(245,245,246)
  display flex
  flex-direction column
  align-items center
  .gxq-img
    width 100%
    padding-top 2rem
    display flex
    justify-content center
  .gxq-img img
    width 40%
    height auto
  .gxq-h5
    width 85%
    line-height .6rem
    margin 0 auto
    padding .4rem 0
    font-size .42rem
    color rgb(87,87,87)
    text-align center
  .zhaozhiwei
    width 100%
    height 1rem
    display flex
    justify-content center
    align-items center
  .zhaozhiwei p
    width 30%
    line-height 1rem
    font-size .4rem
    text-align center
    background $bgColor
    color white
    border-radius 2rem
</style>
