<template>
  <div>
    <div class="citysheader">
      <div class="details">
        <span class="el-icon-close" @click="toup"></span>
        <h3 class="header-title">选择城市</h3>
      </div>
    </div>
    <div class="kong"></div>
  </div>
</template>

<script>
export default {
  name: 'citysheader',
  methods: {
    toup () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="stylus" scoped>
.citysheader
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
    .header-title
      width 100%
      text-align center
      font-size .5rem
.kong
  width 100%
  height 1.5rem
</style>
