<template>
  <div class="contents">
    <div class="qzqw">
      <div class="qzqw-top">
        <h2>想找什么工作?</h2>
        <div>
          <p class="qzqw-num">1</p>
          <span>/</span>
          <p class="qzqw-mone">3</p>
        </div>
      </div>
      <span class="qzqw-detail">添加多个求职期望，可获得更多精准高薪工作机会</span>
    </div>
    <div class="jobname">
      <div class="jobname-left">
        <div>
            <p>[上海]</p>
            <p>移动web前端</p>
        </div>
        <span>8-12K 行业不限</span>
      </div>
      <i class="el-icon-arrow-right"></i>
    </div>
    <div class="jxtj">
      <div>
        <span class="el-icon-circle-plus"></span>
        <h4>继续添加求职期望</h4>
      </div>
    </div>
    <div class="qzzt">
      <p>求职状态</p>
      <div>
        <span>离职-随时到岗</span>
        <i class="el-icon-arrow-right"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'contents'
}
</script>

<style lang="stylus" scoped>
@import '../../../assets/css/common.styl'
.contents
  width 100%
  .qzqw
    width 90%
    margin 0 auto
    display flex
    flex-direction column
    .qzqw-top
      width 100%
      display flex
      flex-direction row
      justify-content space-between
      align-items center
    .qzqw-top h2
      font-size .55rem
    .qzqw-top div
      height .5rem
      display flex
      flex-direction row
      font-size .4rem
      align-items center
    .qzqw-top span
      height .35rem
      overflow hidden
      padding 0 .03rem
    .qzqw-num
      color $bgColor
    .qzqw-detail
      font-size .35rem
      padding .3rem 0 1rem 0
      color rgb(87,87,87)
  .jobname
    width 90%
    height 1.5rem
    margin 0 auto
    display flex
    flex-direction row
    justify-content space-between
    align-items center
    .jobname-left
      width 100%
      display flex
      flex-direction column
    .jobname-left div
      display flex
      flex-direction row
      font-size .38rem
    .jobname-left span
      font-size .3rem
      padding-top .2rem
      color rgb(127,127,127)
  .jobname i
    font-size .5rem
    color rgb(127,127,127)
  .jxtj
    width 90%
    height 1.5rem
    margin 0 auto
    border dashed .02rem $bgColor
    border-radius .1rem
    display flex
    justify-content center
    align-items center
  .jxtj div
    display flex
    flex-direction row
    justify-content center
    align-items center
    color $bgColor
  .jxtj span
    font-size .5rem
    padding-right .1rem
  .jxtj h4
    font-size .38rem
  .qzzt
    width 90%
    height 1.5rem
    margin 0 auto
    display flex
    flex-direction row
    justify-content space-between
    align-items center
    border-bottom solid .02rem rgb(245,245,245)
  .qzzt p
    font-size .38rem
  .qzzt div
    display flex
    flex-direction row
    align-items center
    color rgb(87,87,87)
  .qzzt i
    font-size .4rem
    color rgb(127,127,127)
</style>
