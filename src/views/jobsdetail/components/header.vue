<template>
  <div>
    <div class="jobsheader">
      <div class="contents">
        <div class="cont-left">
          <span class="el-icon-arrow-left" @click="toreturn"></span>
          <p class="cont-p" :style="popacity">前端开发工程师</p>
        </div>
        <div class="cont-right">
          <span class="iconfont icon-xing"></span>
          <span class="iconfont icon-fenxiang"></span>
          <span class="iconfont icon-gantanhao-xianxingsanjiaokuang"></span>
        </div>
      </div>
    </div>
    <div class="kong"></div>
  </div>
</template>

<script>
export default {
  name: 'jobsheader',
  data () {
    return {
      popacity: {
        opacity: 0
      }
    }
  },
  methods: {
    isscroll () {
      const top = document.documentElement.scrollTop || document.body.scrollTop
      if (top >= 0 && top < 40) {
        const opacity = top / 40
        this.popacity = { opacity }
      } else if (top > 40) {
        const opacity = 1
        this.popacity = { opacity }
      }
    },
    toreturn () {
      this.$router.go(-1)
    }
  },
  activated () {
    addEventListener('scroll', this.isscroll)
  },
  deactivated () {
    removeEventListener('scroll', this.isscroll)
  }
}
</script>

<style lang="stylus" scoped>
.jobsheader
  width 100%
  border-bottom solid .02rem rgb(245,245,245)
  position fixed
  top 0
  left 0
  background white
  z-index 3
  .contents
    width 95%
    height 1.5rem
    margin 0 auto
    display flex
    flex-direction row
    justify-content space-between
    align-items center
    .cont-left,.cont-right
      display flex
      flex-direction row
      align-items center
      .el-icon-arrow-left
        font-size .6rem
      .cont-p
        font-size .4rem
        padding-left .1rem
      .iconfont
        font-size .6rem
        padding-left .3rem
        color rgb(87,87,87)
      .icon-fenxiang
        font-size .5rem
.kong
  width 100%
  height 1.5rem
</style>>
