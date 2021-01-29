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

</style>
