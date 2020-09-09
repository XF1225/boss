<template>
  <div>
    <div class="bottomclick">
      <div class="botdetail">
        <div class="clear" @click="clearclick">清除</div>
        <div class="conform" @click="conformclick">确定</div>
      </div>
    </div>
    <div class="kong"></div>
  </div>
</template>

<script>
import { Bus } from '@/assets/js/bus'
export default {
  name: 'choicefooter',
  methods: {
    clearclick () {
      Bus.$emit('clear', '')
    },
    conformclick () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../assets/css/common.styl'
.bottomclick
  width 100%
  height 1.8rem
  position fixed
  left 0
  bottom 0
  background white
  border-top solid .02rem rgb(245,245,245)
  .botdetail
    width 90%
    height 1.8rem
    margin 0 auto
    display flex
    flex-direction row
    justify-content space-between
    align-items center
    .clear,.conform
      width 31%
      line-height 1.2rem
      background rgb(245,245,245)
      color rgb(87,87,87)
      font-size .4rem
      text-align center
      border-radius .1rem
    .conform
      width 65%
      margin-right .1rem
      background $bgColor
      color white
.kong
  width 100%
  height 1.8rem
</style>
