<template>
  <div class="whatjobheader">
    <span class="el-icon-arrow-left" @click="toup"></span>
  </div>
</template>

<script>
export default {
  name: 'whatjobheader',
  methods: {
    toup () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="stylus" scoped>
.whatjobheader
  width 100%
  height 2rem
.whatjobheader span
  font-size .55rem
  padding .5rem 0 0 .5rem
</style>
