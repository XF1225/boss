<template>
  <div class="liaotianconts" @click="closebiaoqingfu">
    <div class="liaotiandesc" v-for="item of HomeContent" :key="item.id" @click="toup">
      <div class="htops">
        <h4>{{item.conttitle}}</h4>
        <p>{{item.contprice}}</p>
      </div>
      <div class="compname">
        <p>{{item.contconp}}</p>
      </div>
      <div class="midldesc">
        <li v-for="(item,index) of midldesc" :key="index">{{item}}</li>
      </div>
      <div class="jianchengdesc">
        <div class="touxiang">
          <img src="/imgs/006.jpg">
        </div>
        <div class="chenghu">{{item.contp}}</div>
      </div>
      <div class="bottoms">
        <div class="bot-desc">
          <p>{{nowtimes1}} 由你发起的沟通</p>
        </div>
      </div>
    </div>
    <div class="liaotiandetail">
      <div class="duihua" v-show="showduihua" v-for="(item,index) of duihua" :key="index">
        <span class="nowtimes">{{nowtimes}}</span>
        <div class="wenzibiaoqing">
          <div class="wzbq-desc">{{item}}</div>
        </div>
        <div class="touxiang2">
          <img src="/imgs/006.jpg">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Bus } from '../../../assets/js/bus'
export default {
  name: 'liaotianconts',
  data () {
    return {
      showduihua: false,
      duihua: []
    }
  },
  props: {
    HomeContent: Array
  },
  computed: {
    midldesc () {
      const aa = this.HomeContent[0].contkeys
      return [this.HomeContent[0].area, ...aa.splice(0, 2)]
    },
    nowtimes1 () {
      const Month = new Date().getMonth() + 1
      const Dates = new Date().getDate()
      const Hours = new Date().getHours()
      const Minutes = new Date().getMinutes()
      if (Hours < 10) {
        return Month + '月' + Dates + '日' + ' ' + '0' + Hours + ':' + Minutes
      }
      if (Minutes < 10) {
        return Month + '月' + Dates + '日' + ' ' + Hours + ':' + '0' + Minutes
      }
      return Month + '月' + Dates + '日' + ' ' + Hours + ':' + Minutes
    },
    nowtimes () {
      const obj1 = new Date().getHours()
      const obj2 = new Date().getMinutes()
      if (obj1 < 10) {
        return '0' + obj1 + ':' + obj2
      }
      if (obj2 < 10) {
        return obj1 + ':' + '0' + obj2
      }
      return obj1 + ':' + obj2
    }
  },
  mounted () {
    Bus.$on('pushval', (inptval) => {
      this.showduihua = true
      this.duihua.push(inptval)
    })
  },
  methods: {
    toup () {
      this.$router.go(-1)
    },
    closebiaoqingfu () {
      Bus.$emit('closebqf', false)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../assets/css/common.styl'
.liaotianconts
  width 100%
  height 150vh
  background rgb(245,245,245)
  position relative
  .liaotiandesc
    width 90%
    height 5.2rem
    margin 0 auto
    border-radius .2rem
    background white
    position absolute
    left 50%
    top .8rem
    transform translate(-50%)
    .htops
      width 100%
      height 1rem
      display flex
      flex-direction row
      justify-content space-between
      align-items center
    .htops h4
      font-size .4rem
      padding-left .3rem
    .htops p
      font-size .38rem
      padding-right .3rem
      color $bgColor
    .compname
      width 100%
      padding .1rem 0 .3rem 0
    .compname p
      font-size .38rem
      padding-left .3rem
    .midldesc
      height .8rem
      padding-left .3rem
      display flex
      flex-direction row
      align-items center
      font-size .35rem
      color rgb(127,127,127)
    .midldesc li
      display inline-block
      padding .15rem .2rem
      margin-right .2rem
      border-radius .08rem
      background rgb(245,245,245)
    .jianchengdesc
      width 100%
      height 1.5rem
      display flex
      flex-direction row
      align-items center
      .touxiang
        width .7rem
        height .7rem
        margin-left .3rem
        border-radius 50%
        overflow hidden
      .touxiang img
        width 100%
        height 100%
      .chenghu
        font-size .35rem
        padding-left .5rem
        color rgb(127,127,127)
    .bottoms
      width 100%
      .bot-desc
        width 92%
        line-height 1.2rem
        margin 0 auto
        border-top solid .02rem rgb(231,231,231)
      .bot-desc p
        font-size .32rem
        color rgb(157,157,157)
  .liaotiandetail
    width 100%
    position absolute
    right .5rem
    top 7.5rem
    .duihua
      margin-bottom 1rem
      display flex
      flex-direction row
      justify-content flex-end
      align-items center
      position relative
      .nowtimes
        position absolute
        top -.6rem
        left 45%
        width 1.5rem
        line-height .5rem
        color rgb(127,127,127)
      .wenzibiaoqing
        max-width 70%
        overflow hidden
        position relative
        .wzbq-desc
          line-height .5rem
          padding .3rem
          font-size .38rem
          border-radius .2rem .2rem 0 .2rem
          color white
          background $bgColor
      .touxiang2
        margin-left .3rem
        width .9rem
        height .9rem
        overflow hidden
        border-radius 50%
      .touxiang2 img
        width 100%
        height 100%
</style>
