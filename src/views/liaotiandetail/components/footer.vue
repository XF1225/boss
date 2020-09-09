<template>
  <div>
    <div class="liaotianfooter">
      <div class="changyongyu">
        <p>常用语</p>
      </div>
      <input type="text" class="faxiaoxi" placeholder="新消息">
      <div class="biaoqingfu">
        <span class="iconfont icon-xiaolian"></span>
        <span class="el-icon-circle-plus-outline"></span>
      </div>
    </div>
    <div class="kong"></div>
  </div>
</template>

<script>
export default {
  name: 'liaotianfooter'
}
</script>

<style lang="stylus" scoped>
@import '../../../assets/css/common.styl'
.liaotianfooter
  width 100%
  height 1.2rem
  display flex
  flex-direction row
  align-items center
  position fixed
  left 0
  bottom 0
  background white
  .changyongyu
    width 1.8rem
    height 1.2rem
    padding-left .2rem
    display flex
    justify-content center
    align-items center
  .changyongyu p
    padding .2rem
    font-size .32rem
    color white
    background $bgColor
    border-radius .1rem
  .faxiaoxi
    width 60%
    height .8rem
    border 0
    outline none
  .faxiaoxi::placeholder
    font-size .38rem
    color rgb(187,187,187)
  .biaoqingfu
    height 1.2rem
    display flex
    flex-direction row
    align-items center
    .icon-xiaolian
      padding 0 .1rem
    .icon-xiaolian,.el-icon-circle-plus-outline
      font-size .8rem
.kong
  width 100%
  height 1.2rem
</style>
