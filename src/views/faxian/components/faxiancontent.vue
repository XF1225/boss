<template>
  <div class="faxiancontent">
    <div class="faxian-detail" v-for="(item,index) of faxiancontent" :key="item.id">
      <div class="faxian-desc">
        <div class="faxian-youzhi">
          <span><i :class="item.rticon"></i>{{item.rttitle}}</span>
        </div>
        <div class="faxian-title">
          <div class="title-left">
            <span>#</span>
            <p>{{item.titleleft}}</p>
          </div>
          <span :class="item.iconmore"></span>
        </div>
        <div class="userdesc">
          <div class="userimg"><img :src="item.userimg"><span :class="item.iconvip"></span></div>
          <div class="userdis"><h4>{{item.userdis}}</h4><span>{{item.usertitle}}</span></div>
        </div>
        <div>
          <div class="faxian-main">
            <p :class="item.chakan?'main':'main2'">{{item.faxianmain}}</p>
            <span class="chakan" @click="chakanclick(index)" v-show="item.showcha">{{item.defaultcha1}}</span>
            <span class="chakan" @click="chakanclick(index)" v-show="!item.showcha">{{item.defaultcha2}}</span>
          </div>
          <div :class="{'wenda':item.iswenda}">
            <div class="tiwen">
              <div><span>{{item.wen}}</span></div>
              <p>{{item.tiwen}}</p>
            </div>
            <span class="huida">{{item.huida}}<i :class="item.youbian"></i></span>
          </div>
        </div>
        <div>
          <div :class="{'maintitle':item.ishas}">{{item.maintitle}}</div>
          <div class="maincontent">
            <li v-for="(items,index) of item.maincontent" :key="index">{{items}}</li>
          </div>
        </div>
        <div class="cont-bottom">
          <div class="bottom-left">
            <div class="dianzan">
              <span :class="item.dianzan"></span>
              <p>{{item.dianzannum}}</p>
            </div>
            <div class="contwen">
              <span :class="item.icondesc"></span>
              <p>{{item.contwen}}</p>
            </div>
          </div>
          <div class="bottom-right">
            <span :class="item.iconxin"></span>
            <p>{{item.iconxintitle}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'faxiancontent',
  data () {
    return {
      faxiancontent: []
    }
  },
  methods: {
    getdata () {
      this.$getdata('/api/mock.json').then(res => {
        this.faxiancontent = res.faxiancontent
      })
    },
    chakanclick (index) {
      this.faxiancontent[index].showcha = !this.faxiancontent[index].showcha
      this.faxiancontent[index].chakan = !this.faxiancontent[index].chakan
    }
  },
  mounted () {
    this.getdata()
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../assets/css/common.styl'
.faxiancontent
  width 100%
  margin .01rem 0 1.2rem 0
  display flex
  flex-direction column
  background rgb(245,245,245)
  z-index 2
  .faxian-detail
    width 100%
    margin-bottom .12rem
    background white
    .faxian-desc
      width 90%
      margin 0 auto
      display flex
      flex-direction column
      .faxian-youzhi
        width 100%
        height .6rem
        color rgb(193,141,57)
        display flex
        justify-content flex-end
        align-items center
      .faxian-youzhi span
        display block
        margin-top -.02rem
        line-height .6rem
        font-size .32rem
        background rgb(253,245,210)
        padding 0 .2rem
        border-radius 0 0 .2rem .2rem
        .icon-1
          font-size .32rem
          padding-right .05rem
      .faxian-title
        width 100%
        height .6rem
        display flex
        flex-direction row
        justify-content space-between
        align-items center
        .title-left
          height .6rem
          display flex
          flex-direction row
          align-items center
          background rgb(245,245,245)
          padding 0 .15rem
          border-radius .5rem
          font-size .33rem
        .title-left span
          width .4rem
          height .4rem
          display flex
          justify-content center
          align-items center
          background $bgColor
          color white
          border-radius 50%
        .title-left p
          padding 0 .1rem
        .icon-more
          color rgb(172,172,172)
          font-size .4rem
      .userdesc
        width 100%
        height 1.5rem
        display flex
        flex-direction row
        align-items center
        .userimg
          width .9rem
          height .9rem
          border-radius 50%
          overflow hidden
          position relative
        .userimg img
          width 100%
          height 100%
        .icon-vip
          width .3rem
          height .3rem
          display flex
          justify-content center
          align-items center
          position absolute
          right .05rem
          bottom .05rem
          background $bgColor
          color white
          border solid .02rem white
          border-radius 50%
          font-size .2rem
        .userdis
          display flex
          flex-direction column
          padding-left .2rem
        .userdis h4
          font-size .4rem
          padding-bottom .15rem
        .userdis span
          font-size .35rem
          color rgb(127,127,127)
      .faxian-main
        width 100%
        .main
          width 100%
          line-height .6rem
          font-size .35rem
          word-break break-all
          display -webkit-box
          overflow hidden
          -webkit-box-orient vertical
          -webkit-line-clamp 3
        .main2
          width 100%
          line-height .6rem
          font-size .35rem
          word-break break-all
        .chakan
          line-height .6rem
          color $bgColor
          display flex
          justify-content flex-end
      .wenda
        width 100%
        padding .3rem 0
        border-radius .1rem
        background rgb(245,245,245)
        .tiwen
          line-height .6rem
          width 100%
          display flex
          flex-direction row
          align-items flex-start
        .tiwen span
          padding .03rem .05rem
          margin 0 .3rem
          font-size .25rem
          color $bgColor
          border solid .02rem $bgColor
          border-radius .1rem
        .tiwen p
          font-size .4rem
          font-weight bold
          line-height .6rem
          word-break break-all
          display -webkit-box
          overflow hidden
          -webkit-box-orient vertical
          -webkit-line-clamp 2
        .huida
          font-size .33rem
          color rgb(179,179,179)
          margin-left .3rem
          padding-top .15rem
          display flex
          flex-direction row
          align-items center
      .maintitle
        width 100%
        padding-bottom .5rem
        font-size .4rem
      .maincontent
        width 100%
        display flex
        flex-direction column
      .maincontent li
        height 1rem
        line-height 1rem
        display inline-block
        font-size .35rem
        border solid .02rem rgb(147,147,147)
        border-radius .2rem
        margin-top .2rem
        padding-left .3rem
      .cont-bottom
        width 100%
        height 1.2rem
        display flex
        flex-direction row
        justify-content space-between
        align-items center
        .bottom-left
          display flex
          flex-direction row
          align-items center
          color rgb(127,127,127)
          font-size .35rem
          .dianzan,.contwen
            display flex
            flex-direction row
            align-items center
          .dianzan p,.contwen p,.icon-icon_good,.icon-xiaoxi2
            padding-right .15rem
        .bottom-right
          display flex
          flex-direction row
          align-items center
          color $bgColor
          border solid .02rem $bgColor
          border-radius .1rem
          padding .05rem .2rem
        .bottom-right p
          font-size .35rem
        .icon-bixin
          font-size .5rem
</style>>
