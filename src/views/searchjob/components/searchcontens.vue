<template>
  <div class="searchcontens">
    <div class="details">
      <div class="main">
        <li v-for="(item,index) of maindetail" :style="item.bgcolor" :key="index">{{item.title}}</li>
      </div>
      <div class="sousuofaxian">
        <h4>搜索发现</h4>
        <div class="sousuodetail">
          <li>web前端</li>
          <li>前端开发</li>
          <li>小程序</li>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'searchcontens',
  data () {
    return {
      maindetail: [
        {
          bgcolor: 'background: rgb(255,242,224)',
          title: '涨工资'
        },
        {
          bgcolor: 'background: rgb(255,238,239)',
          title: '兼职'
        },
        {
          bgcolor: 'background: rgb(237,243,255)',
          title: '双休'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.searchcontens
  width 100%
  .details
    width 90%
    margin 0 auto
    .main,.sousuodetail
      width 100%
      height .6rem
      display flex
      flex-direction row
      align-items center
      flex-wrap wrap
    .main li,.sousuodetail li
      line-height .6rem
      font-size .35rem
      display inline-block
      padding .15rem .3rem
      border-radius .1rem
      margin .2rem .2rem 0 0
    .sousuofaxian
      width 100%
      margin-top .8rem
      display flex
      flex-direction column
    .sousuofaxian h4
      line-height 1rem
      font-size .5rem
    .sousuodetail li
      background rgb(245,245,245)
</style>
