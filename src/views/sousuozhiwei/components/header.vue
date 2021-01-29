<template>
  <div>
    <div class="sousuoheader">
      <div class="details">
        <div class="sousuoleft" :class="animates === true ? 'animated slideOutLeft' : ''">
          <i class="el-icon-search"></i>
          <input type="text" class="sousuoipt" placeholder="搜索职位/公司/知识点" v-model="inptval" v-focus>
          <i class="el-icon-close" v-show="showclose" @click="close"></i>
        </div>
        <span class="quxiao" @click="toback">取消</span>
      </div>
    </div>
    <div class="kong"></div>
  </div>
</template>

<script>
export default {
  name: 'sousuoheader',
  data () {
    return {
      inptval: '',
      animates: false
    }
  },
  computed: {
    showclose () {
      if (this.inptval === '') {
        return false
      } else {
        return true
      }
    }
  },
  methods: {
    close () {
      this.inptval = ''
    },
    toback () {
      this.animates = true
      setTimeout(() => {
        this.$router.go(-1)
        this.animates = false
      }, 1000)
    }
  }
}
</script>

<style lang="stylus" scoped>
@keyframes anime {
  0% {
    transform scaleX(1)
  }
  50% {
    transform scaleX(.8)
  }
  100% {
    transform scaleX(.6)
  }
}
.sousuoheader
  width 100%
  height 2rem
  background white
  position fixed
  .details
    width 90%
    height 2rem
    margin 0 auto
    display flex
    flex-direction row
    justify-content center
    align-items center
    position relative
    .sousuoleft
      width 90%
      padding .1rem 0
      margin-right 1rem
      background rgb(240,240,240)
      border-radius .5rem
      display flex
      flex-direction row
      align-items center
      animation-duration 5s
      .el-icon-search
        font-size .3rem
        padding 0 .3rem
        color rgb(127,127,127)
      .sousuoipt
        width 80%
        border 0
        outline none
        background rgb(240,240,240)
      .sousuoipt::placeholder
        font-size .35rem
        color rgb(127,127,127)
      .el-icon-close
        color rgb(127,127,127)
    .quxiao
      font-size .35rem
      position absolute
      right 0
    .quxiaoanimate
      animation anime .5s ease
.kong
  width 100%
  height 2rem
</style>
