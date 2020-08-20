<template>
  <div class="wrapper" ref="wrapper">
    <div>
      <div class="zhezhao"></div>
      <div class="qiuzhizhushou">
        <div class="zhushou">
          <h4>求职助手</h4>
          <p>其他/钱包<i class="iconfont">&#xe79a;</i></p>
        </div>
        <div class="jingzhengli">
          <div class="main" v-for="item of jlorjzl" :key="item.id">
            <div class="desc">
              <p>{{item.title}}</p>
              <span>{{item.detail}}</span>
            </div>
            <div :class="item.classname">
                <span :class="item.classicon"></span>
            </div>
          </div>
        </div>
      </div>
      <div class="wodecontent">
        <div class="contentmore" v-for="item of contentmore" :key="item.name">
          <div class="cont-detail" v-for="items of item.more" :key="items.id">
            <div class="cont-left">
                <span :class="items.classicon"></span>
                <p>{{items.title}}</p>
            </div>
            <div class="cont-right">
                <span>{{items.desc}}</span>
                <i class="iconfont icon-youbian"></i>
            </div>
          </div>
        </div>
        <div class="kefutime">
          客服电话 400-065-5799  工作时间 9：30-18：30
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { Bus } from '@/assets/js/bus'
export default {
  name: 'wodecontent',
  data () {
    return {
      jlorjzl: [
        {
          id: 'j001',
          title: '简历刷新',
          detail: '提升简历活跃',
          classname: 'jl-icon',
          classicon: 'iconfont icon-wodejianli'
        },
        {
          id: 'j002',
          title: '竞争力分析',
          detail: '洞悉职业竞争',
          classname: 'jzl-icon',
          classicon: 'iconfont icon-message_5'
        }
      ],
      contentmore: [
        {
          more: [
            { id: '0001', classicon: 'iconfont icon-accessories', title: '附件简历', desc: '已上传1份' },
            { id: '0002', classicon: 'iconfont icon-jiahao1', title: '管理求职意向', desc: '离职-随时到岗' }
          ]
        },
        {
          more: [
            { id: '0003', classicon: 'iconfont icon-bixin', title: '我的发现', desc: '' },
            { id: '0004', classicon: 'iconfont icon-zhuye', title: '个人主页', desc: '' },
            { id: '0005', classicon: 'iconfont icon-wenda', title: '牛人问答', desc: '' }
          ]
        },
        {
          more: [
            { id: '0006', classicon: 'iconfont icon-puguang', title: '提升简历曝光', desc: '' }
          ]
        },
        {
          more: [
            { id: '0007', classicon: 'iconfont icon-bangzhu', title: '帮助与反馈', desc: '' },
            { id: '0008', classicon: 'iconfont icon-kefu', title: '我的客服', desc: '' },
            { id: '0009', classicon: 'iconfont icon-xinbaniconshangchuan-', title: '关于', desc: '' }
          ]
        }
      ]
    }
  },
  methods: {
    initscroll () {
      if (!this.scroll) {
        this.scroll = new Bscroll(this.$refs.wrapper, { probeType: 3 })
        this.scroll.on('scroll', (pos) => {
          if (Math.abs(pos.y) > 180) {
            Bus.$emit('getshowheader', false)
          } else {
            Bus.$emit('getshowheader', true)
          }
        })
      } else { this.scroll.refresh() }
    }
  },
  mounted () {
    this.initscroll()
  }
}
</script>

<style lang="stylus" scoped>
.wrapper
  width 100%
  height 6.5rem
  position absolute
  top 7.5rem
.wrapper div
  width 100%
  height auto
  background white
  position relative
  .zhezhao
    width 100%
    height 2rem
    position absolute
    background white
    top 0
    left 0
  .qiuzhizhushou
    width 100%
    padding-bottom .5rem
    .zhushou
      width 90%
      height 1.5rem
      margin 0 auto
      display flex
      flex-direction row
      justify-content space-between
      align-items center
    .zhushou h4
      font-size .5rem
    .zhushou p
      font-size .4rem
      color rgb(179,179,179)
      display flex
      flex-direction row
      justify-content center
      align-items center
    .zhushou i
      font-style normal
    .jingzhengli
      width 90%
      margin 0 auto
      display flex
      flex-direction row
      justify-content space-between
      align-items center
      .main
        width 47%
        height 1.8rem
        border solid .05rem rgb(249,249,249)
        border-radius .3rem
        display flex
        flex-direction row
        align-items center
        justify-content space-around
        box-shadow 0 .2rem .2rem .05rem rgb(225,225,225)
        .desc
          width 60%
          display flex
          flex-direction column
          padding-left .3rem
        .desc p
          font-size .45rem
          padding-bottom .2rem
        .desc span
          font-size .33rem
          color rgb(179,179,179)
        .jl-icon,.jzl-icon
          width 1.1rem
          height 1.1rem
          margin-right .3rem
          background linear-gradient(45deg,rgba(76,137,220,1),rgba(136,185,237,.7))
          border-radius .4rem
          display flex
          justify-content center
          align-items center
        .jzl-icon
          background linear-gradient(45deg,rgba(50,189,159,1),rgba(110,209,187,.7))
        .jl-icon span,.jzl-icon span
          color white
          font-size .6rem
  .wodecontent
    width 100%
    .contentmore:last-of-type
      border 0
    .contentmore
      width 90%
      margin 0 auto
      border-bottom solid .01rem rgb(245,245,245)
      .cont-detail
        height 1.2rem
        display flex
        flex-direction row
        justify-content space-around
        align-items center
        .cont-left,.cont-right
          display flex
          flex-direction row
          align-items center
        .cont-right
          justify-content flex-end
        .cont-left span
          font-size .5rem
        .cont-left p
          font-size .4rem
          padding-left .3rem
        .cont-right span,.cont-right i
          font-size .35rem
          color rgb(179,179,179)
        .cont-right i
          font-size .5rem
    .kefutime
      width 100%
      height 2.2rem
      display flex
      justify-content center
      align-items center
      font-size .35rem
      color rgb(179,179,179)
</style>>
