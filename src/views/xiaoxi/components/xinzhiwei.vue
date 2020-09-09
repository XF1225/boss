<template>
  <div class="xinzhiwei">
    <div class="xzw-nav">
      <li class="nav-li" :class="{active:isactive===index}" v-for="(item,index) of xzwnav" :key="item.id" @click="xzwnavclick(index)">{{item.title}}</li>
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
                <img src="imgs/006.jpg">
                <i class="iconfont icon-vip"></i>
              </div>
              <p>赵洋洋.招聘专员</p>
            </div>
            <span class="new">new</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'xinzhiwei',
  data () {
    return {
      isactive: 0,
      xzwnav: [
        {
          id: 'X-001',
          title: '全部'
        },
        {
          id: 'X-002',
          title: '本地职位'
        }
      ]
    }
  },
  methods: {
    xzwnavclick (i) {
      this.isactive = i
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../assets/css/common.styl'
.xinzhiwei
  width 100%
  .xzw-nav
    width 90%
    margin 0 auto
    margin-top .5rem
    display flex
    flex-direction row
    align-items center
    .nav-li
      padding .15rem .2rem
      border solid .02rem rgb(127,127,127)
      border-radius .2rem
      margin-right .2rem
      font-size .35rem
    .active
      border solid .02rem $bgColor
      color $bgColor
      background rgb(235,245,248)
  .contents
    width 100%
    background rgb(245,245,245)
    .kgw-detail
      width 100%
      padding-top .2rem
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
            width .25rem
            height .25rem
            position absolute
            bottom 0
            right .05rem
            color white
            border-radius 50%
            background $bgColor
            border solid .02rem white
            font-size .1rem
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
</style>
