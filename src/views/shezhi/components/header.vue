<template>
  <div>
    <div class="shezhiheader">
      <div class="header-desc">
        <span class="el-icon-arrow-left" @click="shezhigoback"></span>
        <h4 class="header-h4">{{title}}</h4>
      </div>
    </div>
    <div class="kong"></div>
  </div>
</template>

<script>
export default {
  name: 'shezhiheader',
  props: {
    title: String
  },
  methods: {
    shezhigoback () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="stylus" scoped>
.shezhiheader
  width 100%
  border-bottom solid .02rem rgb(235,235,235)
  background white
  position fixed
  top 0
  left 0
  z-index 3
  .header-desc
    width 90%
    height 1.5rem
    margin 0 auto
    display flex
    flex-direction row
    align-items center
    position relative
    .el-icon-arrow-left
      font-size .6rem
      position absolute
      left 0
    .header-h4
      width 100%
      font-size .45rem
      display flex
      justify-content center
      align-items center
.kong
  width 100%
  height 1.5rem
</style>>
