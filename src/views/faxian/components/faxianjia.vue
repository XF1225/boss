<template>
  <div class="faxianjia">
    <span class="iconfont">&#xe627;</span>
  </div>
</template>

<script>
export default {
  name: 'faxianjia'
}
</script>

<style lang="stylus" scoped>
.faxianjia
  width 1.3rem
  height 1.3rem
  display flex
  justify-content center
  align-items center
  border-radius 50%
  position fixed
  bottom 1.8rem
  right .6rem
  background linear-gradient(135deg,rgb(0,218,198),rgb(0,200,220))
  box-shadow 0 .02rem .02rem .02rem rgb(245,245,245)
  .iconfont
    font-size .6rem
    font-weight bold
    color white
</style>>
