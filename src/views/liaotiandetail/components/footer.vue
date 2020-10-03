<template>
  <div>
    <div class="liaotianfooter">
     <div class="footer-top">
        <div class="changyongyu">
          <p>常用语</p>
        </div>
        <input type="text" class="faxiaoxi" placeholder="新消息" v-model="inptval" ref="inpt" @keyup.enter="pushinptval">
        <div class="biaoqingfu">
          <span class="iconfont icon-xiaolian" @click="showbiaoqingfu"></span>
          <span class="el-icon-circle-plus-outline"></span>
        </div>
     </div>
     <div class="footer-bot" v-show="showbot">
      <li v-for="(item,index) in faceList" :key="index" @click="getfaceList(index)">{{item.char}}</li>
     </div>
    </div>
    <div class="kong">
      <div class="kong-top"></div>
      <div class="kong-bot" v-show="showbot"></div>
    </div>
  </div>
</template>

<script>
import { Bus } from '../../../assets/js/bus'
export default {
  name: 'liaotianfooter',
  data () {
    return {
      inptval: '',
      showbot: false,
      faceList: []
    }
  },
  mounted () {
    this.getdata()
    Bus.$on('closebqf', () => {
      if (this.showbot === true) {
        this.showbot = false
      }
    })
  },
  methods: {
    getdata () {
      this.$getdata('/api/emoji.json').then(res => {
        this.faceList = res.splice(0, 100)
      })
    },
    pushinptval () {
      Bus.$emit('pushval', this.inptval)
      this.inptval = ''
      this.showbot = false
    },
    getfaceList (i) {
      this.inptval = this.inptval + this.faceList[i].char
      this.$refs.inpt.focus()
    },
    showbiaoqingfu () {
      this.showbot = !this.showbot
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../assets/css/common.styl'
.liaotianfooter
  width 100%
  position fixed
  left 0
  bottom 0
  .footer-top
    width 100%
    height 1.2rem
    display flex
    flex-direction row
    align-items center
    background white
    .changyongyu
      width 1.8rem
      height 1.2rem
      padding-left .2rem
      display flex
      justify-content center
      align-items center
    .changyongyu p
      padding .2rem
      font-size .32rem
      color white
      background $bgColor
      border-radius .1rem
    .faxiaoxi
      width 60%
      height .8rem
      border 0
      outline none
    .faxiaoxi::placeholder
      font-size .38rem
      color rgb(187,187,187)
    .biaoqingfu
      height 1.2rem
      display flex
      flex-direction row
      align-items center
      .icon-xiaolian
        padding 0 .1rem
      .icon-xiaolian,.el-icon-circle-plus-outline
        font-size .8rem
  .footer-bot::-webkit-scrollbar
    display none
  .footer-bot
    width 100%
    height 4.3rem
    padding-top .3rem
    background white
    display flex
    flex-direction row
    align-items center
    flex-wrap wrap
    overflow-y scroll
  .footer-bot li
    width 11%
    height 1rem
    display flex
    justify-content center
    align-items center
    font-size .7rem
.kong
  width 100%
  .kong-top
    width 100%
    height 1.2rem
  .kong-bot
    width 100%
    height 4.3rem
</style>
