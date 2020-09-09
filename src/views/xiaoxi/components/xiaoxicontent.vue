<template>
  <div class="wrapper">
    <swiper ref="mySwiper" :options="swiperOption" v-if="list.length!=0">
      <swiper-slide v-for="(item,index) of list" :key="index">
        <div class="liaotiancont">
          <keep-alive>
            <component :is="item.component"></component>
          </keep-alive>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Bus } from '@/assets/js/bus'
import contentdetail from '../components/contentdetail'
import ganxingqu from '../components/ganxingqu'
export default {
  name: 'xiaoxicontent',
  components: {
    contentdetail,
    ganxingqu
  },
  data () {
    return {
      swiperOption: {
        loop: true,
        on: {
          slideChangeTransitionStart: function () {
            Bus.$emit('slideTab', this.realIndex)
          }
        }
      },
      list: [
        { path: '/components/contentdetail', component: contentdetail },
        { path: '/components/ganxingqu', component: ganxingqu }
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
.wrapper
  width 100%
  .liaotiancont
    width 100%
    padding-bottom 1.5rem
</style>>
