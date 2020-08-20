<template>
  <div class="xiaoxiheader">
    <div class="headermain">
      <div class="xiaoxicontent">
        <li :class="num == index?'active':''" class="xiaoxili" v-for="(item,index) of xiaoxili" :key="index" @click="xiaoxiclick(index)">{{item.name}}</li>
      </div>
      <span class="iconfont">&#xe618;</span>
    </div>
    <div class="kong"></div>
  </div>
</template>

<script>
import { Bus } from '@/assets/js/bus'
export default {
  name: 'xiaoxiheader',
  data () {
    return {
      xiaoxili: [
        { id: 'x001', name: '聊天' },
        { id: 'x002', name: '互动' }
      ],
      num: 0
    }
  },
  methods: {
    xiaoxiclick (index) {
      this.num = index
      Bus.$emit('changeTab', index)
    }
    /* initPage () {
      this.num = this.$route.path === '/xiaoxi/contentdetail' ? 0 : this.$route.path === '/xiaoxi/ganxingqu' ? 1 : 0
      console.log(this.$route.path)
    } */
  },
  mounted () {
    Bus.$on('slideTab', (realIndex) => {
      this.num = realIndex
    })
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../assets/css/common.styl'
.xiaoxiheader
  width 100%
  height 2rem
  .headermain
    width 100%
    height 2rem
    background $bgColor
    display flex
    flex-direction row
    justify-content space-between
    align-items center
    position fixed
    top 0
    left 0
    z-index 3
    .xiaoxicontent
      display flex
      flex-direction row
      align-items center
      .xiaoxili
        display inline-block
        padding-left .5rem
        font-size .52rem
        color rgb(175,231,228)
      .active
        color white
    .iconfont
      font-size .6rem
      color white
      padding-right .5rem
</style>>
