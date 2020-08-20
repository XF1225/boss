<template>
  <div class="bscroll" v-show="showbscroll">
    <div class="bscroll-cont">
      <div class="bscroll-icon">
        <span class="el-icon-loading"></span>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'bscroll',
  data () {
    return {
      showbscroll: false
    }
  },
  mounted () {
    this.scroll = new Bscroll('.bscroll', {
      probeType: 3,
      pullDownRefresh: {
        threshold: 50, // 触发pullingDown事件的位置
        stop: 40// 下拉回弹后停留的位置
      }
    })
    /* this.scroll.on('scroll', (pos) => {
      console.log(pos.y)
      if (pos.y < 0) {
        // setTimeout(() => { this.scroll.refresh() }, 3500)
        // https://blog.csdn.net/a787373009/article/details/102683135
        this.showbscroll = false
      }
    }) */
  }
}
</script>

<style lang="stylus" scoped>
.bscroll
  width 100%
  height 2rem
  background yellow
  position fixed
  top 4rem
  .bscroll-cont
    width 100%
    height 500vh
    position sticky
    background red
    .bscroll-icon
      width .8rem
      height .8rem
      background white
      border-radius 50%
      display flex
      justify-content center
      align-items center
      box-shadow .02rem .02rem .1rem.02rem rgb(127,127,127)
      position absolute
      top 0
      left 50%
      transform translate(-50%,0)
    .bscroll-icon span
      font-size .6rem
      color blue
</style>>
