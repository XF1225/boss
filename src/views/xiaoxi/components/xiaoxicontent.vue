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
      ],
      contents: [
        {
          id: 'L001',
          touxiaoicon: require('@/assets/imgs/006.jpg'),
          name: '唐坤河',
          zhaopinzhe: '拓保软件.招聘主管',
          zhaohu: '[新招呼]',
          liaotiancont: '您好，看了你的简历，很想跟你仔细',
          contstime: '10:35'
        },
        {
          id: 'L002',
          touxiaoicon: require('@/assets/imgs/006.jpg'),
          name: '李女士',
          zhaopinzhe: '联龙博通.招聘者',
          zhaohu: '',
          liaotiancont: '可以的啊',
          contstime: '10:30'
        },
        {
          id: 'L003',
          touxiaoicon: require('@/assets/imgs/006.jpg'),
          name: '周女士',
          zhaopinzhe: '天宇智能.HR',
          zhaohu: '[新招呼]',
          liaotiancont: '您好，方便聊聊吗？',
          contstime: '10:30'
        },
        {
          id: 'L004',
          touxiaoicon: require('@/assets/imgs/006.jpg'),
          name: '石女士',
          zhaopinzhe: '捷任贤.人事专员',
          zhaohu: '[微笑]',
          liaotiancont: '好的吧',
          contstime: '10:24'
        },
        {
          id: 'L005',
          touxiaoicon: require('@/assets/imgs/006.jpg'),
          name: '梁先生',
          zhaopinzhe: '迈思科技.人力资源主管',
          zhaohu: '[新招呼]',
          liaotiancont: '您好，最近是在找新工作吗',
          contstime: '10:23'
        },
        {
          id: 'L006',
          touxiaoicon: require('@/assets/imgs/035.jpg'),
          name: '唐坤河',
          zhaopinzhe: '拓保软件.招聘主管',
          zhaohu: '[新招呼]',
          liaotiancont: '您好，看了你的简历，很想跟你仔细',
          contstime: '10:20'
        },
        {
          id: 'L007',
          touxiaoicon: require('@/assets/imgs/035.jpg'),
          name: '李女士',
          zhaopinzhe: '联龙博通.招聘者',
          zhaohu: '',
          liaotiancont: '可以的啊',
          contstime: '10:20'
        },
        {
          id: 'L008',
          touxiaoicon: require('@/assets/imgs/035.jpg'),
          name: '周女士',
          zhaopinzhe: '天宇智能.HR',
          zhaohu: '[新招呼]',
          liaotiancont: '您好，方便聊聊吗？',
          contstime: '10:20'
        },
        {
          id: 'L009',
          touxiaoicon: require('@/assets/imgs/035.jpg'),
          name: '石女士',
          zhaopinzhe: '捷任贤.人事专员',
          zhaohu: '[微笑]',
          liaotiancont: '好的吧',
          contstime: '10:17'
        },
        {
          id: 'L010',
          touxiaoicon: require('@/assets/imgs/035.jpg'),
          name: '梁先生',
          zhaopinzhe: '迈思科技.人力资源主管',
          zhaohu: '[新招呼]',
          liaotiancont: '您好，最近是在找新工作吗',
          contstime: '10:05'
        }
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
