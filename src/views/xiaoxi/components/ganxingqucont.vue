<template>
  <div class="ganxingqucont">
    <div class="gxq-img"><img src="imgs/ganxingqu.png"></div>
    <h5 class="gxq-h5">还没有Boss对你感兴趣哦，快去主动联系吧！</h5>
    <div class="zhaozhiwei">
      <router-link tag="p" to="/">找职位</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ganxingqucont'
}
</script>

<style lang="stylus" scoped>
@import '../../../assets/css/common.styl'
.ganxingqucont
  width 100%
  height 70vh
  background rgb(245,245,246)
  display flex
  flex-direction column
  align-items center
  .gxq-img
    width 100%
    padding-top 2rem
    display flex
    justify-content center
  .gxq-img img
    width 40%
    height auto
  .gxq-h5
    width 85%
    line-height .6rem
    margin 0 auto
    padding .4rem 0
    font-size .42rem
    color rgb(87,87,87)
    text-align center
  .zhaozhiwei
    width 100%
    height 1rem
    display flex
    justify-content center
    align-items center
  .zhaozhiwei p
    width 30%
    line-height 1rem
    font-size .4rem
    text-align center
    background $bgColor
    color white
    border-radius 2rem
</style>
