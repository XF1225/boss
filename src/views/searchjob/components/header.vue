<template>
  <div class="search-header">
    <div class="details">
      <div class="search-left">
        <router-link tag="div" to="/citys">
          <p>{{this.city}}</p>
          <span class="el-icon-caret-bottom"></span>
        </router-link>
        <input type="text" class="qingshuru" placeholder="请输入职位或公司" v-model="showclose" v-focus>
        <i class="el-icon-close" v-show="close" @click="cleaript"></i>
      </div>
      <p class="quxiao" @click="toup">取消</p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'searchheader',
  data () {
    return {
      showclose: ''
    }
  },
  methods: {
    toup () {
      this.$router.go(-1)
    },
    cleaript () {
      this.showclose = ''
    }
  },
  computed: {
    close () {
      if (this.showclose === '') {
        return false
      } else {
        return true
      }
    },
    ...mapState(['city'])
  }
}
</script>

<style lang="stylus" scoped>
.search-header
  width 100%
  height 1.5rem
  .details
    width 90%
    height 1.5rem
    margin 0 auto
    display flex
    flex-direction row
    justify-content space-between
    align-items center
    .search-left
      width 90%
    .search-left,.search-left div
      display flex
      flex-direction row
      align-items center
    .search-left p
      max-width 1.5rem
      height .6rem
      overflow hidden
      text-overflow ellipsis
      white-space nowrap
      display flex
      align-items center
    .search-left p,.quxiao
      font-size .38rem
    .search-left span
      font-size .3rem
      padding 0 .2rem 0 .05rem
    .search-left i
      font-size .3rem
      padding .1rem
      background rgb(245,245,245)
      border-radius 50%
    .qingshuru
      width 75%
      line-height .8rem
      border 0
      outline none
    .qingshuru::placeholder
      font-size .35rem
      color rgb(189,189,189)
</style>
