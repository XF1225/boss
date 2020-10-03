<template>
  <div>
    <div class="jobsheader">
      <div class="contents">
        <div class="cont-left">
          <span class="el-icon-arrow-left" @click="toreturn"></span>
          <p class="cont-p" :style="popacity">{{title}}</p>
        </div>
        <div class="cont-right">
          <span class="iconfont icon-xing" v-show="showxing" @click="xingclick"></span>
          <span class="iconfont icon-iconfontxingxing" v-show="!showxing" @click="xingclick"></span>
          <span class="iconfont icon-fenxiang" @click="fenxiangclick"></span>
          <span class="iconfont icon-gantanhao-xianxingsanjiaokuang"></span>
        </div>
      </div>
    </div>
    <div class="kong"></div>
  </div>
</template>

<script>
import { Bus } from '../../../assets/js/bus'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'jobsheader',
  data () {
    return {
      popacity: {
        opacity: 0
      },
      title: '',
      checkbox: []
    }
  },
  computed: {
    ...mapState(['shoucangID']),
    showxing () {
      const ID = this.$route.params.id
      if (this.shoucangID.indexOf(ID) === -1) {
        return true
      } else {
        return false
      }
    }
  },
  mounted () {
    Bus.$on('conttitle', (conttitle) => {
      this.title = conttitle
    })
  },
  methods: {
    isscroll () {
      const top = document.documentElement.scrollTop || document.body.scrollTop
      if (top >= 0 && top < 40) {
        const opacity = top / 40
        this.popacity = { opacity }
      } else if (top > 40) {
        const opacity = 1
        this.popacity = { opacity }
      }
    },
    toreturn () {
      this.$router.go(-1)
      Bus.$emit('chushihua', true)
    },
    fenxiangclick () {
      Bus.$emit('fenxiang', true)
    },
    xingclick () {
      const ID = this.$route.params.id
      this.shoucang(ID)
    },
    ...mapMutations(['shoucang'])
  },
  activated () {
    addEventListener('scroll', this.isscroll)
  },
  deactivated () {
    removeEventListener('scroll', this.isscroll)
  }
}
</script>

<style lang="stylus" scoped>
.jobsheader
  width 100%
  border-bottom solid .02rem rgb(245,245,245)
  position fixed
  top 0
  left 0
  background white
  z-index 3
  .contents
    width 95%
    height 1.5rem
    margin 0 auto
    display flex
    flex-direction row
    justify-content space-between
    align-items center
    .cont-left,.cont-right
      display flex
      flex-direction row
      align-items center
      .el-icon-arrow-left
        font-size .6rem
      .cont-p
        font-size .4rem
        padding-left .1rem
      .iconfont
        font-size .6rem
        padding-left .3rem
        color rgb(87,87,87)
      .icon-iconfontxingxing
        color #FFC107
      .icon-fenxiang
        font-size .5rem
.kong
  width 100%
  height 1.5rem
</style>>
