<template>
  <div class="faxiannav">
    <div class="navcontent">
      <li class="navli" v-for="item of navcontent" :key="item.id">
        <span :class="item.icon"></span>
        <p>{{item.name}}</p>
      </li>
    </div>
  </div>
</template>

<script>
export default {
  name: 'faxiannav',
  data () {
    return {
      navcontent: [
        {
          id: 'N001',
          icon: 'iconfont icon-gongsi',
          name: '公司'
        },
        {
          id: 'N002',
          icon: 'iconfont icon-hot',
          name: '热榜'
        },
        {
          id: 'N003',
          icon: 'iconfont icon-wenda1',
          name: '等你来答'
        },
        {
          id: 'N004',
          icon: 'iconfont icon-tianchongxing-',
          name: '职场小课'
        },
        {
          id: 'N005',
          icon: 'iconfont icon-qiuzhizhuangtai',
          name: '求职攻略'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.faxiannav
  width 100%
  height 2.2rem
  .navcontent
    width 90%
    height 2.2rem
    margin 0 auto
    display flex
    flex-direction row
    justify-content space-between
    align-items center
    border-bottom solid .01rem rgb(232,232,232)
    .navli
      display flex
      flex-direction column
      justify-content center
      align-items center
    .navli span
      font-size .7rem
      padding-bottom .3rem
    .navli p
      font-size .35rem
    .icon-gongsi
      color rgb(52,217,179)
    .icon-hot
      color rgb(255,177,100)
    .icon-wenda1
      color rgb(255,110,102)
    .icon-tianchongxing-
      color rgb(255,219,7)
    .icon-qiuzhizhuangtai
      color rgb(55,216,182)
</style>>
