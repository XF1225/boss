<template>
  <div class="contents">
    <div class="leftdiv">
      <p class="shangquan" :class="{'active':isactive}" @click="leftclick">商圈</p>
      <p class="ditie" :class="{'active':!isactive}" @click="leftclick">地铁</p>
    </div>
    <div class="middlediv">
      <div>
        <li class="middleli" :class="num===index?'active':''" v-for="(item,index) of middles" :key="item.id" @click="middleliclick(index)">{{item.title}}</li>
      </div>
    </div>
    <div class="rightdiv">
      <div>
        <li class="rightli" :class="{active:item.checked}" v-for="(item,index) of rights" :key="item.id" @click="rightliclick(index)">{{item.title}}<i class="el-icon-check" v-show="item.checked"></i></li>
      </div>
    </div>
  </div>
</template>

<script>
import { Bus } from '@/assets/js/bus'
export default {
  name: 'contents',
  data () {
    return {
      isactive: true,
      num: 0,
      checkeds: [],
      middles: [
        {
          id: 'C000',
          title: '桂林'
        },
        {
          id: 'C001',
          title: '七星区'
        },
        {
          id: 'C002',
          title: '秀峰区'
        },
        {
          id: 'C003',
          title: '象山区'
        },
        {
          id: 'C004',
          title: '叠彩区'
        },
        {
          id: 'C005',
          title: '临桂区'
        },
        {
          id: 'C006',
          title: '灵川县'
        },
        {
          id: 'C007',
          title: '阳朔县'
        },
        {
          id: 'C008',
          title: '荔浦市'
        },
        {
          id: 'C009',
          title: '全州县'
        },
        {
          id: 'C010',
          title: '平乐县'
        },
        {
          id: 'C011',
          title: '恭城县'
        },
        {
          id: 'C012',
          title: '灌阳县'
        },
        {
          id: 'C013',
          title: '资源县'
        }
      ],
      rights: [
        {
          id: 'C014',
          title: '桂林',
          checked: true
        },
        {
          id: 'C015',
          title: '七星区',
          checked: false
        },
        {
          id: 'C016',
          title: '秀峰区',
          checked: false
        },
        {
          id: 'C017',
          title: '象山区',
          checked: false
        },
        {
          id: 'C018',
          title: '叠彩区',
          checked: false
        },
        {
          id: 'C019',
          title: '临桂区',
          checked: false
        },
        {
          id: 'C020',
          title: '灵川县',
          checked: false
        },
        {
          id: 'C021',
          title: '阳朔县',
          checked: false
        },
        {
          id: 'C022',
          title: '荔浦市',
          checked: false
        },
        {
          id: 'C023',
          title: '全州县',
          checked: false
        },
        {
          id: 'C024',
          title: '平乐县',
          checked: false
        },
        {
          id: 'C025',
          title: '恭城县',
          checked: false
        },
        {
          id: 'C026',
          title: '灌阳县',
          checked: false
        },
        {
          id: 'C027',
          title: '资源县',
          checked: false
        }
      ]
    }
  },
  mounted () {
    Bus.$emit('change', this.middles[0].title)
    Bus.$on('clear', () => {
      Object.assign(this.$data, this.$options.data.call(this))
      Bus.$emit('change', this.middles[0].title)
      Bus.$emit('changenum', this.checkeds.length)
    })
  },
  methods: {
    leftclick () {
      this.isactive = !this.isactive
    },
    middleliclick (index) {
      this.num = index
      Bus.$emit('orders', this.middles[index].title)
    },
    rightliclick (i) {
      if (i !== 0) {
        this.rights[0].checked = false
        this.rights[i].checked = !this.rights[i].checked
        if (this.rights[i].checked === true) {
          this.checkeds.push(this.rights[i].id)
          this.checkeds = [...new Set(this.checkeds)]
        } else {
          for (var j = 0; j < this.checkeds.length; j++) {
            if (this.rights[i].id === this.checkeds[j]) {
              this.checkeds.splice(j, 1)
              this.checkeds = [...new Set(this.checkeds)]
            }
          }
        }
        this.checkeds.length === 0 ? this.rights[0].checked = true : this.rights[0].checked = false
        Bus.$emit('changenum', this.checkeds.length)
      } else {
        Object.assign(this.$data, this.$options.data.call(this))
        this.checkeds = []
        this.checkeds.length = 0
        Bus.$emit('changenum', this.checkeds.length)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../assets/css/common.styl'
.active
  color $bgColor
.contents
  width 100%
  height 78vh
  display flex
  flex-direction row
  .leftdiv
    width 30%
    height 78vh
    background rgb(245,245,245)
    .shangquan,.ditie
      padding .5rem 0 .2rem .8rem
      font-size .38rem
  .middlediv::-webkit-scrollbar,.rightdiv::-webkit-scrollbar
    display none
  .middlediv,.rightdiv
    width 35%
    overflow-y scroll
  .middlediv div,.rightdiv div
    padding-bottom .2rem
    display flex
    flex-direction column
    border-right solid .02rem rgb(245,245,245)
    .middleli,.rightli
      display inline-block
      padding .5rem 0 .2rem .8rem
      font-size .35rem
    .rightli
      position relative
    .rightli i
      position absolute
      right .5rem
      font-size .4rem
</style>
