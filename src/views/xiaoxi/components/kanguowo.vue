<template>
  <div class="kanguowo">
    <div class="kgw-yc">
      <div class="details">
        <div class="yincang">
          <div class="yc-top">
            <div>
              <i class="iconfont icon-dunpai"></i>
              <p>简历已隐藏</p>
            </div>
            <span>前往隐私设置</span>
          </div>
          <div class="yc-desc">除了与你沟通的人外，将不会有更多的Boss和人才经纪人看到你的简历</div>
        </div>
      </div>
    </div>
    <div class="contents">
      <div class="kgw-detail">
        <div class="kgw-desc">
          <div class="kgw-title">
            <h4>Web前端（双休+六险一金）</h4>
            <span>12-18K</span>
          </div>
          <div class="kgw-xinxi">亿达信息 不需要融资</div>
          <div class="kgw-weizhi">
            <li>上海市 闸北区 科技园</li>
            <li>3-5年</li>
            <li>本科</li>
          </div>
          <div class="kgw-zhaopin">
            <div class="zp-left">
              <div>
                <img src="@/assets/imgs/006.jpg">
                <i class="iconfont icon-vip"></i>
              </div>
              <p>赵洋洋.招聘专员</p>
            </div>
            <span class="new">new</span>
          </div>
          <div class="chakanni">查看了您</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'kanguowo'
}
</script>

<style lang="stylus" scoped>
@import '../../../assets/css/common.styl'
.kanguowo
  width 100%
  .kgw-yc
    width 100%
    height 2.8rem
    background rgb(245,245,246)
  .details
    width 100%
    height 2.6rem
    background white
    .yc-top,.yc-top div
      height 1.2rem
      display flex
      flex-direction row
      justify-content space-between
      align-items center
    .yc-top div
      padding-left .5rem
    .yc-top i
      font-size .45rem
      padding-right .1rem
    .yc-top p
      font-size .4rem
    .yc-top span
      font-size .35rem
      padding-right .5rem
      color $bgColor
    .yc-desc
      width 90%
      line-height .5rem
      margin 0 auto
      font-size .35rem
  .contents
    width 100%
    background rgb(245,245,245)
    .kgw-detail
      width 100%
      padding .3rem 0
      background white
      margin-bottom .2rem
      .kgw-desc
        width 90%
        margin 0 auto
        display flex
        flex-direction column
        .kgw-title
          width 100%
          height 1rem
          display flex
          flex-direction row
          justify-content space-between
          align-items center
        .kgw-title h4
          width 55%
          font-size .43rem
          overflow hidden
          text-overflow ellipsis
          white-space nowrap
        .kgw-title span
          font-size .38rem
          color $bgColor
        .kgw-xinxi
          width 100%
          padding-bottom .3rem
          font-size .38rem
        .kgw-weizhi
          width 100%
          display flex
          flex-direction row
          align-items center
        .kgw-weizhi li
          font-size .32rem
          padding .1rem .2rem
          margin-right .15rem
          background rgb(245,245,245)
        .kgw-zhaopin
          width 100%
          height 1.5rem
          display flex
          flex-direction row
          justify-content space-between
          align-items center
          border-bottom solid .02rem rgb(245,245,245)
          .zp-left
            display flex
            flex-direction row
            align-items center
          .zp-left div
            width .7rem
            height .7rem
            border-radius 50%
            overflow hidden
            position relative
          .zp-left img
            width 100%
            height 100%
          .zp-left i
            width .3rem
            height .3rem
            position absolute
            bottom 0
            right .05rem
            color white
            border-radius 50%
            background $bgColor
            border solid .02rem white
            font-size .2rem
            display flex
            justify-content center
            align-items center
          .zp-left p
            padding-left .2rem
            font-size .32rem
          .new
            font-size .3rem
            padding .05rem .1rem
            border-radius .3rem
            color white
            background red
        .chakanni
          width 100%
          height 1rem
          line-height 1rem
          font-size .32rem
          color rgb(127,127,127)
          padding-bottom .3rem
</style>
