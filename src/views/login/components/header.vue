<template>
  <div class="loginheader">
    <span class="el-icon-arrow-left" @click="toup"></span>
  </div>
</template>

<script>
export default {
  name: 'loginheader',
  methods: {
    toup () {
      console.log('0')
    }
  }
}
</script>

<style lang="stylus" scoped>
.loginheader
  width 100%
  line-height 1.2rem
  font-size .5rem
  padding-left .5rem
</style>
