<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="isRouterActive"/>
    </keep-alive>
  </div>
</template>
<script>
export default {
  provide () {
    return {
      reload: this.reload
    }
  },
  data () {
    return {
      isRouterActive: true
    }
  },
  methods: {
    reload () {
      this.isRouterActive = false
      this.$nextTick(function () {
        this.isRouterActive = true
      })
    }
  }
}
</script>
<style lang="stylus">
/* #app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px */
</style>
