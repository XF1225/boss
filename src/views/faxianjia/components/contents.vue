<template>
  <div class="faxianjiaconts">
    <div class="faxianjia-top">
      <span class="el-icon-arrow-down" @click="toup"></span>
    </div>
    <div class="chitang">
      <h4 class="chitang-h4">Hi,张秋千</h4>
      <p class="chitang-p">欢迎来到知识的池塘</p>
    </div>
    <div class="fenxiangortiwen">
      <div class="fenxiang">
        <span class="el-icon-s-opportunity"></span>
        <p>分享知识点</p>
      </div>
      <div class="tiwen">
        <span class="el-icon-question"></span>
        <p>提个好问题</p>
      </div>
    </div>
    <div class="dengnilaida">
      <div class="details">
        <h4 class="dnld-h4">等你来答</h4>
        <div class="dnld-desc" v-for="(item,index) of dengnilaida" :key="index">
          <div class="dnld-top">
            <span class="wen">问</span>
            <p class="wenmain">{{item.title}}</p>
          </div>
          <div class="dnld-bot">
            <div>
              <span>已有{{item.huidanum}}个回答</span>
              <i class="el-icon-arrow-right"></i>
            </div>
            <p>写回答</p>
          </div>
        </div>
      </div>
    </div>
    <div class="gengduowenti">
      <p>更多问题等你来答</p>
      <span class="el-icon-right"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'faxianjiaconts',
  data () {
    return {
      dengnilaida: [
        {
          title: '被入职三个月的实习生表白了，我该怎么办？',
          huidanum: '384'
        },
        {
          title: '在职场中，哪一种更容易找到工作？',
          huidanum: '62'
        },
        {
          title: '教招考试一定要求专业对口吗？',
          huidanum: '7'
        }
      ]
    }
  },
  methods: {
    toup () {
      this.$router.go(-1)
    }
  },
  mounted () {
    window.scrollTo(0, 0)
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../assets/css/common.styl'
.faxianjiaconts
  width 100%
  height 100vh
  border-radius .5rem .5rem 0 0
  .faxianjia-top
    width 100%
    height 1rem
    position fixed
    top 0
    left 0
    background white
    display flex
    justify-content center
    align-items center
    border-radius .5rem .5rem 0 0
    .el-icon-arrow-down
      width 1rem
      display block
      font-size 1rem
      color rgb(127,127,127)
  .chitang
    width 100%
    padding-top 80%
    .chitang-h4,.chitang-p
      width 60%
      margin 0 auto
      line-height 1rem
      font-size .5rem
    .chitang-p
      line-height .6rem
      font-size .35rem
      color rgb(127,127,127)
  .fenxiangortiwen
    width 90%
    margin 0 auto
    padding 1rem 0 2rem 0
    display flex
    flex-direction row
    justify-content space-around
    align-items center
    .fenxiang,.tiwen
      display flex
      flex-direction column
      align-items center
    .fenxiang span,.tiwen span
      font-size .8rem
      padding .4rem
      color white
      background linear-gradient(135deg,rgb(255,203,66),rgb(255,150,49))
      border-radius 50%
    .tiwen span
      background linear-gradient(135deg,rgb(80,205,255),rgb(75,160,255))
    .fenxiang p,.tiwen p
      font-size .35rem
      padding-top .3rem
  .dengnilaida
    width 100%
    .details
      width 85%
      margin 0 auto
      display flex
      flex-direction column
      border-top solid .02rem rgb(245,245,245)
      .dnld-h4
        line-height 1.5rem
        font-size .4rem
      .dnld-desc
        padding-top .2rem
        display flex
        flex-direction column
        border-bottom solid .02rem rgb(245,245,245)
        .dnld-top
          display flex
          flex-direction row
          align-items flex-start
          .wen
            font-size .3rem
            color $bgColor
            padding .06rem
            margin-top .08rem
            border solid .02rem $bgColor
            border-radius .1rem
          .wenmain
            font-size .4rem
            line-height .6rem
            padding-left .2rem
        .dnld-bot
          padding .3rem 0
          display flex
          flex-direction row
          justify-content space-between
          align-items center
        .dnld-bot div
          display flex
          flex-direction row
          align-items center
          font-size .35rem
          color rgb(127,127,127)
        .dnld-bot i
          padding-left .1rem
        .dnld-bot p
          font-size .3rem
          padding .15rem .2rem
          color $bgColor
          border solid .02rem $bgColor
          border-radius .1rem
  .gengduowenti
    width 85%
    margin 0 auto
    padding-bottom .5rem
    line-height 1.2rem
    display flex
    flex-direction row
    align-items center
    font-size .35rem
    color $bgColor
  .gengduowenti span
    padding-left .1rem
</style>
