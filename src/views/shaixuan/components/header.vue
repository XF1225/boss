<template>
  <div>
    <div class="shaixuanheader">
      <div class="details">
        <span class="el-icon-close" @click="toup"></span>
        <div class="headertitle">
          <h3 class="header-title">筛选</h3>
          <div class="header-num" v-show="showchecknum">
            <i>.</i>
            <span>{{checknum}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="kong"></div>
  </div>
</template>

<script>
export default {
  name: 'shaixuanheader',
  props: {
    checknum: Number
  },
  methods: {
    toup () {
      this.$router.go(-1)
    }
  },
  computed: {
    showchecknum () {
      if (this.checknum === 0) {
        return false
      } else {
        return true
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../assets/css/common.styl'
.shaixuanheader
  width 100%
  height 1.5rem
  background white
  position fixed
  z-index 3
  .details
    width 90%
    height 1.5rem
    margin 0 auto
    display flex
    flex-direction row
    align-items center
    position relative
    .el-icon-close
      font-size .6rem
      position absolute
    .headertitle
      width 100%
      display flex
      flex-direction row
      justify-content center
      align-items center
      .header-title
        font-size .5rem
      .header-num
        display flex
        flex-direction row
        justify-content center
      .header-num i
        height .3rem
        line-height .3rem
        padding 0 .08rem
        font-weight bolder
      .header-num span
        font-size .45rem
        color $bgColor
.kong
  width 100%
  height 1.5rem
</style>
