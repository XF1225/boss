<template>
  <div class="searchnav">
    <div class="search">
      <div class="searchcont">
        <span class="iconfont">&#xe629;</span>
        <input type="text" class="searhtext" placeholder="通过姓名或公司搜索联系人">
      </div>
    </div>
    <div class="nav">
      <div>
        <div class="navli">
          <li v-for="(item,index) of navli" :key="item.id" :class="num == index?'active':''" @click="changenavli(index)">{{item.name}}</li>
        </div>
        <p class="jisu">极速处理<i class="jisunum" v-show="jisunum">.1</i></p>
      </div>
      <div class="kong"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'searchnav',
  data () {
    return {
      jisunum: false,
      navli: [
        { id: 'n001', name: '全部' },
        { id: 'n002', name: '招呼' },
        { id: 'n003', name: '沟通中' }
      ],
      num: 0
    }
  },
  methods: {
    changenavli (index) {
      this.num = index
    }
  }
}
</script>

<style lang="stylus" scoped>
.searchnav
  width 100%
  display flex
  flex-direction column
  border-bottom solid .02rem rgb(232,232,232)
  .search
    width 100%
    height 1.5rem
    display flex
    justify-content center
    align-items center
    .searchcont
      width 90%
      height .8rem
      margin 0 auto
      border solid .04rem rgb(232,232,232)
      border-radius .1rem
      display flex
      flex-direction row
      align-items center
      .iconfont
        font-size .5rem
        padding 0 .1rem 0 .3rem
        color rgb(153,153,153)
      .searhtext
        width 80%
        border 0
        font-size .4rem
        outline none
      .searhtext::placeholder
        color rgb(153,153,153)
  .nav
    width 100%
    height 1.3rem
  .nav div
    width 90%
    height 1.3rem
    margin 0 auto
    display flex
    flex-direction row
    align-items center
    .navli
      width 70%
      display flex
      flex-direction row
      color rgb(102,102,102)
      margin-left -.01rem
    .navli li
      padding-right .6rem
      font-size .43rem
    .active
      color rgb(0,0,0)
      font-weight bold
    .jisu
      padding .15rem .2rem
      border solid .03rem rgb(225,225,225)
      border-radius .1rem
      font-size .35rem
      color rgb(102,102,102)
      display flex
      justify-content flex-end
</style>>
