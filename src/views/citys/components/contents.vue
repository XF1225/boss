<template>
  <div class="cityscontents" ref="wrapper">
    <div class="citysdetail">
      <div class="dangqian">
        <h3 class="dangqian-h3">当前城市</h3>
        <div class="dangqian-desc" @click="toup">
          <span>{{city}}</span>
        </div>
      </div>
      <div class="remen" v-for="(item,index) of hotcity" :key="index">
        <h3 class="remen-h3">{{item.initial}}</h3>
        <div class="remen-desc">
          <span v-for="items of item.hotlist" :key="items.code" @click="cityclick(items.name)">{{items.name}}</span>
        </div>
      </div>
      <div class="numsdesc" v-for="item of citys" :key="item.initial" ref="item.initial">
        <h3 class="nums-h3">{{item.initial}}</h3>
        <div class="nums-desc">
          <span v-for="items of item.list" :key="items.name" @click="cityclick(items.name)">{{items.name}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Bscroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'cityscontents',
  props: {
    letter: String,
    letters: Array
  },
  data () {
    return {
      hotcity: [],
      citys: []
    }
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    getcitys () {
      axios.get('/api/city.json').then(
        this.getcitysSucc
      )
    },
    getcitysSucc (res) {
      this.hotcity = res.data.hotcity
      this.citys = res.data.citys
    },
    toup () {
      this.$router.go(-1)
    },
    cityclick (city) {
      this.changeCity(city)
      this.$router.go(-1)
    },
    ...mapMutations(['changeCity'])
  },
  mounted () {
    this.getcitys()
    this.scroll = new Bscroll(this.$refs.wrapper, { click: true })
  },
  watch: {
    letter () {
      if (this.letter) {
        for (var i = 0; i < this.letters.length; i++) {
          if (this.letters[i] === this.letter) {
            const element = this.$refs['item.initial'][i]
            this.scroll.scrollToElement(element)
          }
        }
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.cityscontents
  width 100%
  height 90vh
  position absolute
  left 0
  bottom 0
  .citysdetail
    width 90%
    margin 0 auto
    .dangqian,.remen,.numsdesc
      width 100%
      display flex
      flex-direction column
      .dangqian-h3,.remen-h3,.nums-h3
        line-height 1rem
        margin-bottom .2rem
        font-size .5rem
      .dangqian-desc,.remen-desc,.nums-desc
        width 100%
        text-align center
        display flex
        flex-direction row
        flex-wrap wrap
      .dangqian-desc span,.remen-desc span,.nums-desc span
        width 31.1%
        padding .3rem 0
        display block
        border-radius .05rem
        margin 0 .3rem .3rem 0
        font-size .38rem
        background rgb(245,245,245)
      .remen-desc span:nth-child(3n),.nums-desc span:nth-child(3n)
        margin-right 0
</style>
