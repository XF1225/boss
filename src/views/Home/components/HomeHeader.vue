<template>
  <div class="headercontent">
    <div class="HomeHeader" v-show="showheader" :style="opacityheader1">
      <h2 class="header-h2">移动web前端</h2>
      <div class="header-div">
        <span class="iconfont header-jia" @click="towhatjob">&#xe627;</span>
        <i class="header-i"></i>
        <router-link tag="span" to="/searchjob" class="iconfont header-search">&#xe629;</router-link>
      </div>
    </div>
    <div class="HomeHeader" v-show="!showheader" :style="opacityheader2">
      <h2 class="header-h2 h22">移动web前端</h2>
      <div class="header-div div2">
        <span class="iconfont header-jia" @click="towhatjob">&#xe627;</span>
        <i class="header-i"></i>
        <router-link tag="span" to="/searchjob" class="iconfont header-search">&#xe629;</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  data () {
    return {
      showheader: true,
      opacityheader1: {
        opacity: 1
      },
      opacityheader2: {
        opacity: 0
      }
    }
  },
  methods: {
    scrollheader () {
      const top = document.documentElement.scrollTop || document.body.scrollTop
      if (top > 5) {
        let opacity = top / 5
        opacity = opacity > 1 ? 1 : opacity
        this.opacityheader2 = { opacity }
        this.showheader = false
      } else if (top >= 0 && top <= 5) {
        const opacity1 = 1 - (top / 5)
        const opacity2 = (top / 5)
        this.opacityheader1 = { opacity1 }
        this.opacityheader2 = { opacity2 }
        this.showheader = true
      }
    },
    towhatjob () {
      this.$router.push('/whatjob')
    }
  },
  activated () {
    addEventListener('scroll', this.scrollheader)
  },
  deactivated () {
    removeEventListener('scroll', this.scrollheader)
  }
}
</script>
<style lang="stylus" scoped>
@import '../../../assets/css/common.styl'
.headercontent
  width 100%
  height 2rem
  .HomeHeader
    width 100%
    height 2rem
    background $bgColor
    display flex
    flex-direction row
    justify-content space-between
    align-items flex-end
    z-index 3
    position fixed
    .header-h2
      color white
      font-size .52rem
      font-weight 400
      padding 0 0 .4rem .5rem
    .h22
      font-size .46rem
      padding 0 0 .3rem .5rem
    .header-div
      color white
      display flex
      flex-direction row
      align-items center
      padding 0 .5rem .5rem 0
      .header-i
        width 1.2px
        height .5rem
        background white
        opacity .2
        font-style normal
      .iconfont
        font-size .65rem
      .header-jia
        padding-right .15rem
      .header-search
        padding-left .15rem
    .div2
      padding 0 .5rem .45rem 0
</style>
