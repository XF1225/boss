<template>
  <div class="liaotianconts">
    <div class="liaotiandesc" v-for="item of HomeContent" :key="item.id">
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
          <p>9月8日 13:16 由你发起的沟通</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'liaotianconts',
  props: {
    HomeContent: Array
  },
  computed: {
    midldesc () {
      const aa = this.HomeContent[0].contkeys
      return [this.HomeContent[0].area, ...aa.splice(0, 2)]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../assets/css/common.styl'
.liaotianconts
  width 100%
  height 100vh
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
</style>
