<template>
  <div class="ltcontent">
    <searchnav></searchnav>
    <div class="xinfabu">
      <div class="xinfabucont">
        <span class="iconfont">&#xe627;</span>
        <div class="xinfabudetail">
          <p class="xinzhiwei"><span>成都宇创科技</span>发布了新职位</p>
          <span class="xfb"><i>25</i>位Boss新发布</span>
        </div>
        <i class="timei">16:27</i>
      </div>
    </div>
    <div class="contents">
        <div class="conts-detail" v-for="item of contents" :key="item.id" @click="liaotiandesc(item.id)">
        <div class="conts-img"><img :src="item.touxiaoicon"></div>
        <div class="conts-main">
          <p class="conts-name">{{item.name}}<span>{{item.zhaopinzhe}}</span></p>
          <p class="conts-zhaohu"><span>{{item.zhaohu}}</span>{{item.liaotiancont}}</p>
        </div>
        <span class="conts-time">{{item.contstime}}</span>
        </div>
    </div>
  </div>
</template>

<script>
import searchnav from '../components/searchnav'
export default {
  name: 'contentdetail',
  components: { searchnav },
  data () {
    return {
      contents: []
    }
  },
  methods: {
    getdata () {
      this.$getdata('/api/mock.json').then(res => {
        this.contents = res.contents
      })
    },
    liaotiandesc (id) {
      this.$router.push(`/liaotiandetail/${id}`)
      window.scrollTo(0, 0)
    }
  },
  mounted () {
    this.getdata()
  }
}
</script>

<style lang="stylus" scoped>
.ltcontent
  width 100%
  .xinfabu,.contents
    width 100%
    .xinfabucont,.conts-detail
      width 90%
      height 2rem
      margin 0 auto
      display flex
      flex-direction row
      justify-content space-between
      align-items center
      .iconfont,.conts-img
        width 1.4rem
        height 1.4rem
        background linear-gradient(45deg,rgb(255,172,53),rgb(255,204,88))
        border-radius 50%
        display flex
        justify-content center
        align-items center
        color white
        font-size .6rem
        font-weight bolder
        overflow hidden
      .xinfabudetail
        display flex
        flex-direction column
        .xinzhiwei
          display flex
          flex-direction row
          align-items center
          font-size .45rem
          padding-bottom .15rem
        .xinzhiwei span
          padding-right .2rem
        .xfb,.conts-zhaohu
          display flex
          flex-direction row
          align-items center
          font-size .4rem
          color rgb(153,153,153)
          padding-top .15rem
        .xfb i
          font-style normal
      .timei,.conts-time
        font-size .35rem
        color rgb(153,153,153)
        font-style normal
        padding-bottom .65rem
      .conts-img img
        width 100%
        height 100%
    .conts-main
      width 70%
      margin-right -.6rem
      .conts-name
        display flex
        flex-direction row
        align-items center
        font-size .45rem
        padding-bottom .15rem
      .conts-name span
        color rgb(153,153,153)
        font-size .33rem
        padding-left .2rem
      .conts-zhaohu
        padding-top .15rem
        overflow hidden
        text-overflow ellipsis
        white-space nowrap
        color rgb(153,153,153)
        font-size .4rem
      .conts-zhaohu span
        padding 0 .05rem
        font-size .38rem
        color rgb(180,180,180)
</style>>
