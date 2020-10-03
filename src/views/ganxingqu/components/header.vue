<template>
  <div>
    <div class="ganxingquheader">
      <div class="details">
        <span class="el-icon-arrow-left" @click="toup"></span>
        <h4>我感兴趣的职位</h4>
      </div>
    </div>
    <div class="kong"></div>
  </div>
</template>

<script>
export default {
  name: 'ganxingquheader',
  methods: {
    toup () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="stylus" scoped>
.ganxingquheader
  width 100%
  height 1.2rem
  background white
  position fixed
  top 0
  left 0
  border-bottom solid .02rem rgb(245,245,246)
  .details
    width 90%
    margin 0 auto
    height 1.2rem
    position relative
    display flex
    flex-direction row
    justify-content center
    align-items center
  .details span
    position absolute
    left 0
    font-size .5rem
  .details h4
    font-size .45rem
.kong
  width 100%
  height 1.2rem
</style>
