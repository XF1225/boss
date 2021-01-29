<template>
  <div class="searchcontens" v-show="showsearchcontens">
    <div class="details">
      <div class="main">
        <li v-for="(item,index) of maindetail" :style="item.bgcolor" :key="index" @click="mainclick(index)">{{item.title}}</li>
      </div>
      <div class="lishisousuo" v-show="this.list.length">
        <div class="lishitop">
          <h4>历史搜索</h4>
          <span class="el-icon-delete" @click="deletelist"></span>
        </div>
        <div class="lishibot">
          <li class="lishili" v-for="(item,index) of this.list" :key="index" @click="listclick(index)">{{item}}</li>
        </div>
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
import { Bus } from '@/assets/js/bus'
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
      ],
      showsearchcontens: true,
      list: []
    }
  },
  activated () {
    if (localStorage.getItem('list') === null) {
      return false
    } else {
      this.list = localStorage.getItem('list').replace(/[`~!@#$%^&*()_"{}\\/;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘'，。、]/g, '')
      this.list = this.list.split(',').filter(item => {
        return item && item.trim()
      })
    }
  },
  mounted () {
    Bus.$on('values', (inputval) => {
      for (var i = 0; i < this.list.length; i++) {
        if (this.list[i] === inputval.trim()) {
          return false
        }
      }
      this.list.push(inputval)
      localStorage.setItem('list', JSON.stringify(this.list))
    })
    Bus.$on('changeshow', () => {
      this.showsearchcontens = false
    })
    Bus.$on('clear', () => {
      this.showsearchcontens = true
    })
  },
  methods: {
    mainclick (index) {
      Bus.$emit('changeshow', false)
      Bus.$emit('scrollimg', false)
      Bus.$emit('changeinpt', this.maindetail[index].title)
    },
    listclick (index) {
      if (this.list.length <= 1) {
        Bus.$emit('changeshow', false)
        Bus.$emit('scrollimg', false)
        Bus.$emit('changeinpt', this.list[index])
        return false
      }
      Bus.$emit('changeshow', false)
      Bus.$emit('scrollimg', false)
      Bus.$emit('changeinpt', this.list[index])
      this.list = [...this.list.splice(index, 1), ...this.list]
      localStorage.setItem('list', JSON.stringify(this.list))
    },
    deletelist () {
      this.list = []
      localStorage.setItem('list', JSON.stringify(this.list))
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
    .main
      margin-bottom .8rem
    .main,.sousuodetail
      width 100%
      height .5rem
      display flex
      flex-direction row
      align-items center
      flex-wrap wrap
    .main li,.sousuodetail li
      line-height .5rem
      font-size .35rem
      display inline-block
      padding .15rem .3rem
      border-radius .1rem
      margin .2rem .2rem 0 0
    .lishisousuo
      width 100%
      .lishitop
        width 100%
        height 1.2rem
        display flex
        flex-direction row
        justify-content space-between
        align-items center
      .lishitop h4
        font-size .45rem
      .lishitop span
        font-size .38rem
        color rgb(127,127,127)
      .lishibot
        width 100%
        display flex
        flex-direction row
        align-items center
        flex-wrap wrap
        margin-bottom .2rem
        .lishili
          line-height .5rem
          display block
          font-size .35rem
          padding .15rem .3rem
          border-radius .1rem
          margin .2rem .2rem 0 0
          background rgb(245,245,245)
    .sousuofaxian
      width 100%
      padding-bottom .5rem
      display flex
      flex-direction column
    .sousuofaxian h4
      line-height 1rem
      font-size .45rem
    .sousuodetail li
      background rgb(245,245,245)
</style>
