<template>
  <div>
    <div class="faxianheader">
      <div class="faxiandetail">
        <h2 class="faxian-h2">发现</h2>
        <div class="faxian-search" :class="animates === true ? 'animated rubberBand' : ''">
          <span class="iconfont icon-search">&#xe629;</span>
          <input type="text" class="faxian-text" placeholder="搜索职位/公司/知识点" @click="tosousuozhiwei">
        </div>
        <span class="iconfont icon-xiaoxi">&#xe618;</span>
        <div class="userimg"><img src="imgs/006.jpg"></div>
      </div>
    </div>
    <div class="kong"></div>
  </div>
</template>

<script>
export default {
  name: 'faxianheader',
  data () {
    return {
      animates: false
    }
  },
  methods: {
    tosousuozhiwei () {
      this.animates = true
      setTimeout(() => {
        this.$router.push('/sousuozhiwei')
        this.animates = false
      }, 500)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../assets/css/common.styl'
.faxianheader
  width 100%
  height 2rem
  position fixed
  top 0
  left 0
  background $bgColor
  z-index 3
  .faxiandetail
    width 90%
    height 2rem
    margin 0 auto
    display flex
    flex-direction row
    justify-content space-between
    align-items center
    .faxian-h2
      font-size .6rem
      color white
    .faxian-search
      width 60%
      padding .1rem 0
      display flex
      flex-direction row
      align-items center
      border-radius .5rem
      background rgb(91,205,200)
      .icon-search
        font-size .5rem
        color white
        opacity .9
        padding 0 .2rem 0 .5rem
      .faxian-text
        width 70%
        font-size .35rem
        outline none
        background rgb(91,205,200)
        border 0
      .faxian-text::placeholder
        color white
        opacity .9
    .icon-xiaoxi
      font-size .6rem
      color white
    .userimg
      width .7rem
      height .7rem
      overflow hidden
      border-radius 50%
    .userimg img
      width 100%
      height 100%
.kong
  width 100%
  height 2rem
</style>>
