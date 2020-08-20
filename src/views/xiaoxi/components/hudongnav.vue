<template>
  <div class="hudongnav">
    <li class="nav-li" v-for="(item,index) of hudongnav" :key="item.id" :class="num===index?'active':''" @click="hudongnavclick(index)">{{item.title}}</li>
  </div>
</template>

<script>
import { Bus } from '@/assets/js/bus'
export default {
  name: 'hudongnav',
  data () {
    return {
      num: 0,
      hudongnav: [
        {
          id: 'H001',
          title: '对我感兴趣'
        },
        {
          id: 'H002',
          title: '看过我'
        },
        {
          id: 'H003',
          title: '新职位'
        }
      ]
    }
  },
  methods: {
    hudongnavclick (i) {
      this.num = i
      Bus.$emit('changeTab', i)
    }
  },
  mounted () {
    Bus.$on('slideTab', (realIndex) => {
      this.num = realIndex
    })
  }
}
</script>

<style lang="stylus" scoped>
.hudongnav
  width 100%
  height 1rem
  display flex
  flex-direction row
  align-items center
  background white
  border-bottom solid .03rem rgb(245,245,246)
  .nav-li
    font-size .38rem
    color rgb(198,198,198)
    padding 0 .2rem 0 .5rem
  .active
    font-weight bold
    color rgb(0,0,0)
</style>
