<template>
  <div v-show="showyincang">
    <div class="yincang">
      <div><i>x</i><p>您已对人才经纪人隐藏简历</p></div>
      <span>取消隐藏</span>
    </div>
    <div class="kong"></div>
  </div>
</template>

<script>
export default {
  name: 'yincang',
  data () {
    return {
      showyincang: true
    }
  }
}
</script>

<style lang="stylus" scoped>
.yincang
  width 100%
  height .95rem
  display flex
  flex-direction row
  justify-content space-between
  align-items center
  background rgb(255,245,237)
  position fixed
  z-index 3
.yincang div
  height .95rem
  display flex
  flex-direction row
  justify-content center
  align-items center
.yincang i
  display flex
  justify-content center
  align-items center
  font-size .4rem
  font-style normal
  padding 0 .4rem .05rem .5rem
  color rgb(255,170,50)
.yincang p
  font-size .33rem
  color rgb(255,170,50)
.yincang span
  padding .12rem .22rem
  margin-right .5rem
  font-size .3rem
  color white
  background rgb(255,170,50)
  border-radius .3rem
.kong
  width 100%
  height .95rem
</style>>
