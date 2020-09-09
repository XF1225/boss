<template>
  <div class="shaixuanconts">
    <div class="details">
      <div class="xueliyaoqiu">
        <h4 class="xlyq-h4">学历要求</h4>
        <div class="xlyq-desc">
          <li class="xlyq-li" :class="{active:item.checked}" v-for="(item,index) of xueliyaoqiu" :key="item.id" @click="xueliclick(index)">{{item.title}}</li>
        </div>
      </div>
      <div class="xinzidaiyu">
        <h4 class="xzdy-h4">薪资待遇<span>(单选)</span></h4>
        <div class="xzdy-desc">
          <li class="xzdy-li" :class="n===index?'active': ''" v-for="(item,index) of xinzidaiyu" :key="item.id" @click="xinziclick(index)">{{item.title}}</li>
        </div>
      </div>
      <div class="jingyanyaoqiu">
        <h4 class="jyyq-h4">经验要求</h4>
        <div class="jyyq-desc">
          <li class="jyyq-li" :class="{active:item.checked}" v-for="(item,index) of jingyanyaoqiu" :key="item.id" @click="jingyanclick(index)">{{item.title}}</li>
        </div>
      </div>
      <div class="hangye">
        <div class="hy-row">
          <h4 class="hy-h4">行业</h4>
          <span v-show="showarrow" class="el-icon-arrow-down" @click="arrowclick"></span>
          <span v-show="!showarrow" class="el-icon-arrow-up" @click="arrowclick"></span>
        </div>
        <div class="hy-desc" :class="isarrow===true?'hywidth':''">
          <li class="hy-li" :class="{active:item.checked}" v-for="(item,index) of hangye" :key="item.id" @click="hangyeclick(index)">{{item.title}}</li>
        </div>
      </div>
      <div class="gongsiguimo">
        <h4 class="gsgm-h4">公司规模</h4>
        <div class="gsgm-desc">
          <li class="gsgm-li" :class="{active:item.checked}" v-for="(item,index) of gongsiguimo" :key="item.id" @click="guimoclick(index)">{{item.title}}</li>
        </div>
      </div>
      <div class="rongzijieduan">
        <h4 class="rzjd-h4">融资阶段</h4>
        <div class="rzjd-desc">
          <li class="rzjd-li" :class="{active:item.checked}" v-for="(item,index) of rongzijieduan" :key="item.id" @click="rongziclick(index)">{{item.title}}</li>
        </div>
      </div>
    </div>
    <div>
      <div class="bottomclick">
        <div class="botdetail">
          <div class="clear" @click="clearclick">清除</div>
          <div class="conform" @click="conformclick">确定</div>
        </div>
        <p class="zuiduonum" v-show="chaoguo">最多筛选5个</p>
      </div>
      <div class="kong"></div>
    </div>
  </div>
</template>

<script>
import { Bus } from '@/assets/js/bus'
export default {
  name: 'shaixuanconts',
  data () {
    return {
      xueliyaoqiu: [],
      xinzidaiyu: [],
      jingyanyaoqiu: [],
      hangye: [],
      gongsiguimo: [],
      rongzijieduan: [],
      xlcheckbox: [],
      jycheckbox: [],
      hycheckbox: [],
      gmcheckbox: [],
      rzcheckbox: [],
      n: 0,
      xinzinum: 0,
      checknum: 0,
      showarrow: true,
      isarrow: true,
      chaoguo: false
    }
  },
  mounted () {
    this.getdata()
  },
  methods: {
    getdata () {
      this.$getdata('/api/mock.json').then(res => {
        this.xueliyaoqiu = res.xueliyaoqiu
        this.xinzidaiyu = res.xinzidaiyu
        this.jingyanyaoqiu = res.jingyanyaoqiu
        this.hangye = res.hangye
        this.gongsiguimo = res.gongsiguimo
        this.rongzijieduan = res.rongzijieduan
      })
    },
    xueliclick (i) {
      if (i !== 0) {
        this.xueliyaoqiu[0].checked = false
        this.xueliyaoqiu[i].checked = !this.xueliyaoqiu[i].checked
        if (this.xueliyaoqiu[i].checked === true) {
          if (this.checknum <= 4) {
            this.xlcheckbox.push(this.xueliyaoqiu[i].id)
            this.xlcheckbox = [...new Set(this.xlcheckbox)]
          } else {
            this.chaoguo = true
            setTimeout(() => { this.chaoguo = false }, 3000)
            this.xueliyaoqiu[i].checked = false
          }
        } else {
          for (var j = 0; j < this.xlcheckbox.length; j++) {
            if (this.xueliyaoqiu[i].id === this.xlcheckbox[j]) {
              this.xlcheckbox.splice(j, 1)
              this.xlcheckbox = [...new Set(this.xlcheckbox)]
            }
          }
        }
      } else {
        this.$getdata('/api/mock.json').then(res => {
          this.xueliyaoqiu = res.xueliyaoqiu
        })
        this.xlcheckbox.length = 0
        this.$emit('change', this.checknum)
      }
      this.xlcheckbox.length === 0 ? this.xueliyaoqiu[0].checked = true : this.xueliyaoqiu[0].checked = false
      this.checknum = this.xlcheckbox.length + this.xinzinum + this.jycheckbox.length + this.hycheckbox.length + this.gmcheckbox.length + this.rzcheckbox.length
      this.$emit('change', this.checknum)
    },
    xinziclick (index) {
      if (this.checknum <= 4) {
        this.n = index
        index === 0 ? this.xinzinum = 0 : this.xinzinum = 1
        this.checknum = this.xlcheckbox.length + this.xinzinum + this.jycheckbox.length + this.hycheckbox.length + this.gmcheckbox.length + this.rzcheckbox.length
        this.$emit('change', this.checknum)
      } else if (this.checknum > 4 && this.xinzinum !== 0) {
        this.n = index
        if (index === 0) {
          this.xinzinum = 0
          this.checknum = this.xlcheckbox.length + this.xinzinum + this.jycheckbox.length + this.hycheckbox.length + this.gmcheckbox.length + this.rzcheckbox.length
          this.$emit('change', this.checknum)
        }
      } else {
        this.chaoguo = true
        setTimeout(() => { this.chaoguo = false }, 3000)
      }
    },
    jingyanclick (i) {
      if (i !== 0) {
        this.jingyanyaoqiu[0].checked = false
        this.jingyanyaoqiu[i].checked = !this.jingyanyaoqiu[i].checked
        if (this.jingyanyaoqiu[i].checked === true) {
          if (this.checknum <= 4) {
            this.jycheckbox.push(this.jingyanyaoqiu[i].id)
            this.jycheckbox = [...new Set(this.jycheckbox)]
          } else {
            this.chaoguo = true
            setTimeout(() => { this.chaoguo = false }, 3000)
            this.jingyanyaoqiu[i].checked = false
          }
        } else {
          for (var j = 0; j < this.jycheckbox.length; j++) {
            if (this.jingyanyaoqiu[i].id === this.jycheckbox[j]) {
              this.jycheckbox.splice(j, 1)
              this.jycheckbox = [...new Set(this.jycheckbox)]
            }
          }
        }
      } else {
        this.$getdata('/api/mock.json').then(res => {
          this.jingyanyaoqiu = res.jingyanyaoqiu
        })
        this.jycheckbox.length = 0
        this.$emit('change', this.checknum)
      }
      this.jycheckbox.length === 0 ? this.jingyanyaoqiu[0].checked = true : this.jingyanyaoqiu[0].checked = false
      this.checknum = this.xlcheckbox.length + this.xinzinum + this.jycheckbox.length + this.hycheckbox.length + this.gmcheckbox.length + this.rzcheckbox.length
      this.$emit('change', this.checknum)
    },
    hangyeclick (i) {
      if (i !== 0) {
        this.hangye[0].checked = false
        this.hangye[i].checked = !this.hangye[i].checked
        if (this.hangye[i].checked === true) {
          if (this.checknum <= 4) {
            this.hycheckbox.push(this.hangye[i].id)
            this.hycheckbox = [...new Set(this.hycheckbox)]
          } else {
            this.chaoguo = true
            setTimeout(() => { this.chaoguo = false }, 3000)
            this.hangye[i].checked = false
          }
        } else {
          for (var j = 0; j < this.hycheckbox.length; j++) {
            if (this.hangye[i].id === this.hycheckbox[j]) {
              this.hycheckbox.splice(j, 1)
              this.hycheckbox = [...new Set(this.hycheckbox)]
            }
          }
        }
      } else {
        this.$getdata('/api/mock.json').then(res => {
          this.hangye = res.hangye
        })
        this.hycheckbox.length = 0
        this.$emit('change', this.checknum)
      }
      this.hycheckbox.length === 0 ? this.hangye[0].checked = true : this.hangye[0].checked = false
      this.checknum = this.xlcheckbox.length + this.xinzinum + this.jycheckbox.length + this.hycheckbox.length + this.gmcheckbox.length + this.rzcheckbox.length
      this.$emit('change', this.checknum)
    },
    guimoclick (i) {
      if (i !== 0) {
        this.gongsiguimo[0].checked = false
        this.gongsiguimo[i].checked = !this.gongsiguimo[i].checked
        if (this.gongsiguimo[i].checked === true) {
          if (this.checknum <= 4) {
            this.gmcheckbox.push(this.gongsiguimo[i].id)
            this.gmcheckbox = [...new Set(this.gmcheckbox)]
          } else {
            this.chaoguo = true
            setTimeout(() => { this.chaoguo = false }, 3000)
            this.gongsiguimo[i].checked = false
          }
        } else {
          for (var j = 0; j < this.gmcheckbox.length; j++) {
            if (this.gongsiguimo[i].id === this.gmcheckbox[j]) {
              this.gmcheckbox.splice(j, 1)
              this.gmcheckbox = [...new Set(this.gmcheckbox)]
            }
          }
        }
      } else {
        this.$getdata('/api/mock.json').then(res => {
          this.gongsiguimo = res.gongsiguimo
        })
        this.gmcheckbox.length = 0
        this.$emit('change', this.checknum)
      }
      this.gmcheckbox.length === 0 ? this.gongsiguimo[0].checked = true : this.gongsiguimo[0].checked = false
      this.checknum = this.xlcheckbox.length + this.xinzinum + this.jycheckbox.length + this.hycheckbox.length + this.gmcheckbox.length + this.rzcheckbox.length
      this.$emit('change', this.checknum)
    },
    rongziclick (i) {
      if (i !== 0) {
        this.rongzijieduan[0].checked = false
        this.rongzijieduan[i].checked = !this.rongzijieduan[i].checked
        if (this.rongzijieduan[i].checked === true) {
          if (this.checknum <= 4) {
            this.rzcheckbox.push(this.rongzijieduan[i].id)
            this.rzcheckbox = [...new Set(this.rzcheckbox)]
          } else {
            this.chaoguo = true
            setTimeout(() => { this.chaoguo = false }, 3000)
            this.rongzijieduan[i].checked = false
          }
        } else {
          this.rongzijieduan[i].checked = false
          for (var j = 0; j < this.rzcheckbox.length; j++) {
            if (this.rongzijieduan[i].id === this.rzcheckbox[j]) {
              this.rzcheckbox.splice(j, 1)
              this.rzcheckbox = [...new Set(this.rzcheckbox)]
            }
          }
        }
      } else {
        this.$getdata('/api/mock.json').then(res => {
          this.rongzijieduan = res.rongzijieduan
        })
        this.rzcheckbox.length = 0
        this.$emit('change', this.checknum)
      }
      this.rzcheckbox.length === 0 ? this.rongzijieduan[0].checked = true : this.rongzijieduan[0].checked = false
      this.checknum = this.xlcheckbox.length + this.xinzinum + this.jycheckbox.length + this.hycheckbox.length + this.gmcheckbox.length + this.rzcheckbox.length
      this.$emit('change', this.checknum)
    },
    clearclick () {
      // 重置当前页面数据
      // Object.assign(this.$data, this.$options.data.call(this))
      this.getdata()
      this.n = this.checknum = this.xlcheckbox.length = this.xinzinum = this.jycheckbox.length = this.hycheckbox.length = this.gmcheckbox.length = this.rzcheckbox.length = 0
      this.$emit('change', this.checknum)
    },
    arrowclick () {
      this.showarrow = !this.showarrow
      this.isarrow = !this.isarrow
    },
    conformclick () {
      this.$router.go(-1)
      Bus.$emit('checknums', this.checknum)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../assets/css/common.styl'
.shaixuanconts
  width 100%
  .details
    width 90%
    margin 0 auto
    display flex
    flex-direction column
    .rongzijieduan
      margin-bottom .8rem
    .xueliyaoqiu,.xinzidaiyu,.jingyanyaoqiu,.hangye,.gongsiguimo,.rongzijieduan
      width 100%
      display flex
      flex-direction column
      .hy-row
        width 100%
        height 1.2rem
        display flex
        flex-direction row
        justify-content space-between
        align-items center
        .hy-h4
          line-height 1.2rem
          font-size .4rem
        .el-icon-arrow-down,.el-icon-arrow-up
          color rgb(87,87,87)
          font-size .4rem
          margin-right .1rem
      .xzdy-h4 span
        padding-left .1rem
        font-size .32rem
        color rgb(87,87,87)
      .xlyq-h4,.xzdy-h4,.jyyq-h4,.gsgm-h4,.rzjd-h4
        line-height 1.2rem
        font-size .4rem
      .hywidth
        height 36vw
        padding-bottom .2rem
        overflow hidden
      .xlyq-desc,.xzdy-desc,.jyyq-desc,.hy-desc,.gsgm-desc,.rzjd-desc
        width 100%
        text-align center
        display flex
        flex-direction row
        flex-wrap wrap
        .xlyq-li,.xzdy-li,.jyyq-li,.hy-li,.gsgm-li,.rzjd-li
          width 30.6%
          padding .3rem 0
          display block
          border-radius .05rem
          margin 0 .3rem .3rem 0
          font-size .38rem
          background rgb(245,245,245)
        .xlyq-li:nth-child(3n),.xzdy-li:nth-child(3n),.jyyq-li:nth-child(3n),.hy-li:nth-child(3n),.gsgm-li:nth-child(3n),.rzjd-li:nth-child(3n)
          margin-right 0
        .active
          background white
          border solid .02rem $bgColor
          color $bgColor
  .bottomclick
    width 100%
    height 1.8rem
    position fixed
    left 0
    bottom 0
    background white
    border-top solid .02rem rgb(245,245,245)
    .botdetail
      width 90%
      height 1.8rem
      margin 0 auto
      display flex
      flex-direction row
      justify-content space-between
      align-items center
      .clear,.conform
        width 31%
        line-height 1.2rem
        background rgb(245,245,245)
        color rgb(87,87,87)
        font-size .4rem
        text-align center
        border-radius .1rem
      .conform
        width 65%
        margin-right .1rem
        background $bgColor
        color white
    .zuiduonum
      width 35%
      height 1rem
      line-height 1rem
      font-size .35rem
      text-align center
      position absolute
      top -45%
      left 30%
      color white
      background rgba(0,0,0,.6)
      border-radius .2rem
  .kong
    width 100%
    height 1.5rem
</style>
