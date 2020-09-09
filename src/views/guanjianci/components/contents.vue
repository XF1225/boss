<template>
  <div class="guanjianciconts">
    <div class="zhezhaoceng" v-show="showzhezhaoceng" @touchmove.prevent>
      <div class="searchconts">
        <div class="searchleft">
          <input type="text" class="searchinpt" placeholder="搜索关键词" v-model="inpt">
          <i class="el-icon-close" v-show="showclose" @click="qingkongclick"></i>
        </div>
        <span class="quxiao" @click="quxiaoclick">取消</span>
      </div>
    </div>
    <div class="zhezhaoceng2" v-show="showzhezhaoceng2" @touchmove.prevent>
      <div class="wenxintishi">
        <h4 class="wxts-h4">温馨提示</h4>
        <p class="wxts-p">选择关键词，可进行职位筛选，我们将为你匹配更精准的职位</p>
        <span class="wxts-span" @click="knowclick">好的，我知道了</span>
      </div>
    </div>
    <div class="details">
      <div class="sousuogjc" v-show="showsousuo" @click="searckclick">
        <span class="el-icon-search"></span>
        <input type="text" class="sousuoinpt" placeholder="搜索关键词">
      </div>
      <div class="qianduangoujia">
        <div class="qdgj-row">
          <h4 class="qdgj-h4">web前端构架</h4>
          <div class="qdgj-right">
            <i v-show="this.qdgjchecked.length">{{this.qdgjchecked.length}}</i>
            <b v-show="!this.qdgjchecked.length"></b>
            <span v-show="showarrow" class="el-icon-arrow-down" @click="arrowclick"></span>
            <span v-show="!showarrow" class="el-icon-arrow-up" @click="arrowclick"></span>
          </div>
        </div>
        <div class="qdgj-desc" :class="isarrow===true?'hywidth':''">
          <li class="qdgj-li" :class="{active:item.checked}" v-for="(item,index) of qianduangoujia" :key="item.id" @click="goujiaclick(index)">{{item.title}}</li>
        </div>
      </div>
      <div class="kaifayuyan">
        <div class="kfyy-row">
          <h4 class="kfyy-h4">开发语言</h4>
          <div class="kfyy-right">
            <i v-show="this.kfyychecked.length">{{this.kfyychecked.length}}</i>
            <b v-show="!this.kfyychecked.length"></b>
            <span v-show="showarrow" class="el-icon-arrow-down" @click="arrowclick"></span>
            <span v-show="!showarrow" class="el-icon-arrow-up" @click="arrowclick"></span>
          </div>
        </div>
        <div class="kfyy-desc" :class="isarrow===true?'hywidth':''">
          <li class="kfyy-li" :class="{active:item.checked}" v-for="(item,index) of kaifayuyan" :key="item.id" @click="yuyanclick(index)">{{item.title}}</li>
        </div>
      </div>
      <div class="changyongku">
        <div class="cyk-row">
          <h4 class="cyk-h4">前端常用库</h4>
          <div class="cyk-right">
            <i v-show="this.cykchecked.length">{{this.cykchecked.length}}</i>
            <b v-show="!this.cykchecked.length"></b>
            <span v-show="showarrow" class="el-icon-arrow-down" @click="arrowclick"></span>
            <span v-show="!showarrow" class="el-icon-arrow-up" @click="arrowclick"></span>
          </div>
        </div>
        <div class="cyk-desc" :class="isarrow===true?'hywidth':''">
          <li class="cyk-li" :class="{active:item.checked}" v-for="(item,index) of changyongku" :key="item.id" @click="changyongkuclick(index)">{{item.title}}</li>
        </div>
      </div>
      <div class="qianduanxiangmu">
        <div class="qdxm-row">
          <h4 class="qdxm-h4">前端项目</h4>
          <div class="qdxm-right">
            <i v-show="this.qdxmchecked.length">{{this.qdxmchecked.length}}</i>
          </div>
        </div>
        <div class="qdxm-desc">
          <li class="qdxm-li" :class="{active:item.checked}" v-for="(item,index) of qianduanxiangmu" :key="item.id" @click="xiangmuclick(index)">{{item.title}}</li>
        </div>
      </div>
      <div class="biaozhunguifan">
        <div class="bzgf-row">
          <h4 class="bzgf-h4">前端标准/规范</h4>
          <div class="bzgf-right">
            <i v-show="this.bzgfchecked.length">{{this.bzgfchecked.length}}</i>
          </div>
        </div>
        <div class="bzgf-desc">
          <li class="bzgf-li" :class="{active:item.checked}" v-for="(item,index) of biaozhunguifan" :key="item.id" @click="guifanclick(index)">{{item.title}}</li>
        </div>
      </div>
      <div class="changyongzujian">
        <div class="cyzj-row">
          <h4 class="cyzj-h4">web前端常用组件</h4>
          <div class="cyzj-right">
            <i v-show="this.cyzjchecked.length">{{this.cyzjchecked.length}}</i>
          </div>
        </div>
        <div class="cyzj-desc">
          <li class="cyzj-li" :class="{active:item.checked}" v-for="(item,index) of changyongzujian" :key="item.id" @click="zujianclick(index)">{{item.title}}</li>
        </div>
      </div>
       <div class="changyongyinqing">
        <div class="cyyq-row">
          <h4 class="cyyq-h4">前端常用引擎</h4>
          <div class="cyyq-right">
            <i v-show="this.cyyqchecked.length">{{this.cyyqchecked.length}}</i>
          </div>
        </div>
        <div class="cyyq-desc">
          <li class="cyyq-li" :class="{active:item.checked}" v-for="(item,index) of changyongyinqing" :key="item.id" @click="yinqingclick(index)">{{item.title}}</li>
        </div>
      </div>
      <div class="guanjianci">
        <div class="gjc-row">
          <h4 class="gjc-h4">推荐关键词</h4>
          <div class="gjc-right">
            <i v-show="this.gjcchecked.length">{{this.gjcchecked.length}}</i>
            <b v-show="!this.gjcchecked.length"></b>
            <span v-show="showarrow" class="el-icon-arrow-down" @click="arrowclick"></span>
            <span v-show="!showarrow" class="el-icon-arrow-up" @click="arrowclick"></span>
          </div>
        </div>
        <div class="gjc-desc" :class="isarrow===true?'hywidth':''">
          <li class="gjc-li" :class="{active:item.checked}" v-for="(item,index) of guanjianci" :key="item.id" @click="guanjianciclick(index)">{{item.title}}</li>
        </div>
      </div>
    </div>
    <div>
      <div class="bottomclick">
        <div class="yixuan" v-show="this.checkedtitle.length">
          <p class="yixuan-p">已选</p>
          <div class="yixuan-cont">
            <div class="yixuan-desc">
              <li class="yixuan-li" v-for="(item,index) of checkedtitle" :key="index" @click="yixuanli(item)">{{item}}<i class="el-icon-close"></i></li>
            </div>
          </div>
        </div>
        <div class="botdetail">
          <div class="clear" @click="clearclick">清除</div>
          <div class="conform" @click="conformclick">确定</div>
        </div>
        <p class="zuiduonum" v-show="chaoguo">最多选择5个关键词</p>
      </div>
      <div class="kong">
        <div class="kong-top" v-show="this.checkedtitle.length"></div>
        <div class="kong-bottom"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { Bus } from '@/assets/js/bus'
// var aa = require('@/assets/js/base')
// import { goujiaclick, yuyanclick, changyongkuclick, xiangmuclick, guifanclick, zujianclick, yinqingclick, guanjianciclick } from '@/assets/js/base'
export default {
  name: 'guanjianciconts',
  data () {
    return {
      inpt: '',
      showzhezhaoceng: false,
      showzhezhaoceng2: true,
      showsousuo: true,
      qianduangoujia: [],
      kaifayuyan: [],
      changyongku: [],
      biaozhunguifan: [],
      changyongzujian: [],
      changyongyinqing: [],
      qianduanxiangmu: [],
      guanjianci: [],
      qdgjchecked: [],
      kfyychecked: [],
      cykchecked: [],
      qdxmchecked: [],
      bzgfchecked: [],
      cyzjchecked: [],
      cyyqchecked: [],
      gjcchecked: [],
      n: 0,
      checknum: 0,
      checkedtitle: [],
      showarrow: true,
      isarrow: true,
      chaoguo: false
    }
  },
  methods: {
    goujiaclick (i) {
      this.qianduangoujia[i].checked = !this.qianduangoujia[i].checked
      if (this.qianduangoujia[i].checked === true) {
        if (this.checknum <= 4) {
          this.qdgjchecked.push(this.qianduangoujia[i].title)
          this.qdgjchecked = [...new Set(this.qdgjchecked)]
        } else {
          this.chaoguo = true
          setTimeout(() => { this.chaoguo = false }, 3000)
          this.qianduangoujia[i].checked = false
          return false
        }
      } else {
        for (var j = 0; j < this.qdgjchecked.length; j++) {
          if (this.qianduangoujia[i].title === this.qdgjchecked[j]) {
            this.qdgjchecked.splice(j, 1)
            this.qdgjchecked = [...new Set(this.qdgjchecked)]
          }
        }
      }
      this.checknum = this.qdgjchecked.length + this.kfyychecked.length + this.cykchecked.length + this.qdxmchecked.length + this.bzgfchecked.length + this.cyzjchecked.length + this.cyyqchecked.length + this.gjcchecked.length
      this.checkedtitle = [...this.qdgjchecked, ...this.kfyychecked, ...this.cykchecked, ...this.qdxmchecked, ...this.bzgfchecked, ...this.cyzjchecked, ...this.cyyqchecked, ...this.gjcchecked]
      this.$emit('change', this.checknum)
    },
    yuyanclick (i) {
      this.kaifayuyan[i].checked = !this.kaifayuyan[i].checked
      if (this.kaifayuyan[i].checked === true) {
        if (this.checknum <= 4) {
          this.kfyychecked.push(this.kaifayuyan[i].title)
          this.kfyychecked = [...new Set(this.kfyychecked)]
        } else {
          this.chaoguo = true
          setTimeout(() => { this.chaoguo = false }, 3000)
          this.kaifayuyan[i].checked = false
          return false
        }
      } else {
        for (var j = 0; j < this.kfyychecked.length; j++) {
          if (this.kaifayuyan[i].title === this.kfyychecked[j]) {
            this.kfyychecked.splice(j, 1)
            this.kfyychecked = [...new Set(this.kfyychecked)]
          }
        }
      }
      this.checknum = this.qdgjchecked.length + this.kfyychecked.length + this.cykchecked.length + this.qdxmchecked.length + this.bzgfchecked.length + this.cyzjchecked.length + this.cyyqchecked.length + this.gjcchecked.length
      this.checkedtitle = [...this.qdgjchecked, ...this.kfyychecked, ...this.cykchecked, ...this.qdxmchecked, ...this.bzgfchecked, ...this.cyzjchecked, ...this.cyyqchecked, ...this.gjcchecked]
      this.$emit('change', this.checknum)
    },
    changyongkuclick (i) {
      this.changyongku[i].checked = !this.changyongku[i].checked
      if (this.changyongku[i].checked === true) {
        if (this.checknum <= 4) {
          this.cykchecked.push(this.changyongku[i].title)
          this.cykchecked = [...new Set(this.cykchecked)]
        } else {
          this.chaoguo = true
          setTimeout(() => { this.chaoguo = false }, 3000)
          this.changyongku[i].checked = false
          return false
        }
      } else {
        for (var j = 0; j < this.cykchecked.length; j++) {
          if (this.changyongku[i].title === this.cykchecked[j]) {
            this.cykchecked.splice(j, 1)
            this.cykchecked = [...new Set(this.cykchecked)]
          }
        }
      }
      this.checknum = this.qdgjchecked.length + this.kfyychecked.length + this.cykchecked.length + this.qdxmchecked.length + this.bzgfchecked.length + this.cyzjchecked.length + this.cyyqchecked.length + this.gjcchecked.length
      this.checkedtitle = [...this.qdgjchecked, ...this.kfyychecked, ...this.cykchecked, ...this.qdxmchecked, ...this.bzgfchecked, ...this.cyzjchecked, ...this.cyyqchecked, ...this.gjcchecked]
      this.$emit('change', this.checknum)
    },
    xiangmuclick (i) {
      this.qianduanxiangmu[i].checked = !this.qianduanxiangmu[i].checked
      if (this.qianduanxiangmu[i].checked === true) {
        if (this.checknum <= 4) {
          this.qdxmchecked.push(this.qianduanxiangmu[i].title)
          this.qdxmchecked = [...new Set(this.qdxmchecked)]
        } else {
          this.chaoguo = true
          setTimeout(() => { this.chaoguo = false }, 3000)
          this.qianduanxiangmu[i].checked = false
          return false
        }
      } else {
        for (var j = 0; j < this.qdxmchecked.length; j++) {
          if (this.qianduanxiangmu[i].title === this.qdxmchecked[j]) {
            this.qdxmchecked.splice(j, 1)
            this.qdxmchecked = [...new Set(this.qdxmchecked)]
          }
        }
      }
      this.checknum = this.qdgjchecked.length + this.kfyychecked.length + this.cykchecked.length + this.qdxmchecked.length + this.bzgfchecked.length + this.cyzjchecked.length + this.cyyqchecked.length + this.gjcchecked.length
      this.checkedtitle = [...this.qdgjchecked, ...this.kfyychecked, ...this.cykchecked, ...this.qdxmchecked, ...this.bzgfchecked, ...this.cyzjchecked, ...this.cyyqchecked, ...this.gjcchecked]
      this.$emit('change', this.checknum)
    },
    guifanclick (i) {
      this.biaozhunguifan[i].checked = !this.biaozhunguifan[i].checked
      if (this.biaozhunguifan[i].checked === true) {
        if (this.checknum <= 4) {
          this.bzgfchecked.push(this.biaozhunguifan[i].title)
          this.bzgfchecked = [...new Set(this.bzgfchecked)]
        } else {
          this.chaoguo = true
          setTimeout(() => { this.chaoguo = false }, 3000)
          this.biaozhunguifan[i].checked = false
          return false
        }
      } else {
        for (var j = 0; j < this.bzgfchecked.length; j++) {
          if (this.biaozhunguifan[i].title === this.bzgfchecked[j]) {
            this.bzgfchecked.splice(j, 1)
            this.bzgfchecked = [...new Set(this.bzgfchecked)]
          }
        }
      }
      this.checknum = this.qdgjchecked.length + this.kfyychecked.length + this.cykchecked.length + this.qdxmchecked.length + this.bzgfchecked.length + this.cyzjchecked.length + this.cyyqchecked.length + this.gjcchecked.length
      this.checkedtitle = [...this.qdgjchecked, ...this.kfyychecked, ...this.cykchecked, ...this.qdxmchecked, ...this.bzgfchecked, ...this.cyzjchecked, ...this.cyyqchecked, ...this.gjcchecked]
      this.$emit('change', this.checknum)
    },
    zujianclick (i) {
      this.changyongzujian[i].checked = !this.changyongzujian[i].checked
      if (this.changyongzujian[i].checked === true) {
        if (this.checknum <= 4) {
          this.cyzjchecked.push(this.changyongzujian[i].title)
          this.cyzjchecked = [...new Set(this.cyzjchecked)]
        } else {
          this.chaoguo = true
          setTimeout(() => { this.chaoguo = false }, 3000)
          this.changyongzujian[i].checked = false
          return false
        }
      } else {
        for (var j = 0; j < this.cyzjchecked.length; j++) {
          if (this.changyongzujian[i].title === this.cyzjchecked[j]) {
            this.cyzjchecked.splice(j, 1)
            this.cyzjchecked = [...new Set(this.cyzjchecked)]
          }
        }
      }
      this.checknum = this.qdgjchecked.length + this.kfyychecked.length + this.cykchecked.length + this.qdxmchecked.length + this.bzgfchecked.length + this.cyzjchecked.length + this.cyyqchecked.length + this.gjcchecked.length
      this.checkedtitle = [...this.qdgjchecked, ...this.kfyychecked, ...this.cykchecked, ...this.qdxmchecked, ...this.bzgfchecked, ...this.cyzjchecked, ...this.cyyqchecked, ...this.gjcchecked]
      this.$emit('change', this.checknum)
    },
    yinqingclick (i) {
      this.changyongyinqing[i].checked = !this.changyongyinqing[i].checked
      if (this.changyongyinqing[i].checked === true) {
        if (this.checknum <= 4) {
          this.cyyqchecked.push(this.changyongyinqing[i].title)
          this.cyyqchecked = [...new Set(this.cyyqchecked)]
        } else {
          this.chaoguo = true
          setTimeout(() => { this.chaoguo = false }, 3000)
          this.changyongyinqing[i].checked = false
          return false
        }
      } else {
        for (var j = 0; j < this.cyyqchecked.length; j++) {
          if (this.changyongyinqing[i].title === this.cyyqchecked[j]) {
            this.cyyqchecked.splice(j, 1)
            this.cyyqchecked = [...new Set(this.cyyqchecked)]
          }
        }
      }
      this.checknum = this.qdgjchecked.length + this.kfyychecked.length + this.cykchecked.length + this.qdxmchecked.length + this.bzgfchecked.length + this.cyzjchecked.length + this.cyyqchecked.length + this.gjcchecked.length
      this.checkedtitle = [...this.qdgjchecked, ...this.kfyychecked, ...this.cykchecked, ...this.qdxmchecked, ...this.bzgfchecked, ...this.cyzjchecked, ...this.cyyqchecked, ...this.gjcchecked]
      this.$emit('change', this.checknum)
    },
    guanjianciclick (i) {
      this.guanjianci[i].checked = !this.guanjianci[i].checked
      if (this.guanjianci[i].checked === true) {
        if (this.checknum <= 4) {
          this.gjcchecked.push(this.guanjianci[i].title)
          this.gjcchecked = [...new Set(this.gjcchecked)]
        } else {
          this.chaoguo = true
          setTimeout(() => { this.chaoguo = false }, 3000)
          this.guanjianci[i].checked = false
          return false
        }
      } else {
        for (var j = 0; j < this.gjcchecked.length; j++) {
          if (this.guanjianci[i].title === this.gjcchecked[j]) {
            this.gjcchecked.splice(j, 1)
            this.gjcchecked = [...new Set(this.gjcchecked)]
          }
        }
      }
      this.checknum = this.qdgjchecked.length + this.kfyychecked.length + this.cykchecked.length + this.qdxmchecked.length + this.bzgfchecked.length + this.cyzjchecked.length + this.cyyqchecked.length + this.gjcchecked.length
      this.checkedtitle = [...this.qdgjchecked, ...this.kfyychecked, ...this.cykchecked, ...this.qdxmchecked, ...this.bzgfchecked, ...this.cyzjchecked, ...this.cyyqchecked, ...this.gjcchecked]
      this.$emit('change', this.checknum)
    },
    arrowclick () {
      this.showarrow = !this.showarrow
      this.isarrow = !this.isarrow
    },
    getdata () {
      this.$getdata('/api/mock.json').then(res => {
        this.qianduangoujia = res.qianduangoujia
        this.kaifayuyan = res.kaifayuyan
        this.changyongku = res.changyongku
        this.biaozhunguifan = res.biaozhunguifan
        this.changyongzujian = res.changyongzujian
        this.changyongyinqing = res.changyongyinqing
        this.qianduanxiangmu = res.qianduanxiangmu
        this.guanjianci = res.guanjianci
      })
    },
    clearclick () {
      // 重置当前页面数据
      // Object.assign(this.$data, this.$options.data.call(this))
      this.getdata()
      this.checknum = 0
      this.qdgjchecked.length = this.kfyychecked.length = this.cykchecked.length = this.qdxmchecked.length = this.bzgfchecked.length = this.cyzjchecked.length = this.cyyqchecked.length = this.gjcchecked.length = 0
      this.checkedtitle = []
      this.$emit('change', this.checknum)
    },
    conformclick () {
      this.$router.go(-1)
      Bus.$emit('checknums', this.checknum)
    },
    qingkongclick () {
      this.inpt = ''
    },
    quxiaoclick () {
      this.showzhezhaoceng = false
      this.showsousuo = true
    },
    searckclick () {
      this.showsousuo = false
      this.showzhezhaoceng = true
    },
    yixuanli (item) {
      for (var i = 0; i < this.checkedtitle.length; i++) {
        if (item === this.checkedtitle[i]) {
          this.checkedtitle.splice(i, 1)
          this.checknum--
          this.$emit('change', this.checknum)
          if (this.checknum === 0) {
            this.clearclick()
          }
        }
      }
    },
    knowclick () {
      this.showzhezhaoceng2 = false
    }
  },
  computed: {
    showclose () {
      if (this.inpt === '') {
        return false
      } else {
        return true
      }
    }
  },
  mounted () {
    this.getdata()
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../assets/css/common.styl'
.guanjianciconts
  width 100%
  .zhezhaoceng,.zhezhaoceng2
    width 100%
    height 100vh
    background rgba(0,0,0,.5)
    position fixed
    top 0
    left 0
    z-index 3
    .searchconts
      width 100%
      height 1.5rem
      background white
      display flex
      flex-direction row
      justify-content space-between
      align-items center
      .searchleft
        width 85%
        height 1rem
        display flex
        flex-direction row
        justify-content space-between
        align-items center
        .searchinpt
          width 85%
          line-height 1rem
          padding-left .5rem
          outline none
          border 0
        .searchinpt::placeholder
          font-size .35rem
          color rgb(187,187,187)
        .el-icon-close
          font-size .3rem
          padding .06rem
          border-radius 50%
          display flex
          justify-content center
          align-items center
          color white
          background #8b8b8d
      .quxiao
        padding-right .5rem
        font-size .35rem
        color rgb(127,127,127)
  .zhezhaoceng2
    display flex
    justify-content center
    align-items center
    z-index 3
    .wenxintishi
      width 85%
      background white
      .wxts-h4
        line-height 1.5rem
        padding-left .5rem
        font-size .45rem
      .wxts-p
        width 90%
        margin 0 auto
        color rgb(87,87,87)
        word-break break-all
        line-height .6rem
        font-size .36rem
      .wxts-span
        width 90%
        height 1.8rem
        margin 0 auto
        display flex
        justify-content flex-end
        align-items center
        font-size .38rem
        color $bgColor
  .details
    width 90%
    margin 0 auto
    display flex
    flex-direction column
    .sousuogjc
      width 100%
      height .8rem
      display flex
      flex-direction row
      align-items center
      .el-icon-search
        font-size .5rem
        color rgb(127,127,127)
        padding-right .15rem
      .sousuoinpt
        outline none
        border 0
      .sousuoinpt::placeholder
        font-size .35rem
        color rgb(187,187,187)
    .qianduangoujia,.kaifayuyan,.changyongku,.qianduanxiangmu,.biaozhunguifan,.changyongzujian,.changyongyinqing,.guanjianci
      width 100%
      display flex
      flex-direction column
      .qdgj-row,.kfyy-row,.cyk-row,.qdxm-row,.bzgf-row,.cyzj-row,.cyyq-row,.gjc-row
        width 100%
        height 1.2rem
        display flex
        flex-direction row
        justify-content space-between
        align-items center
        .qdgj-right,.kfyy-right,.cyk-right,.qdxm-right,.bzgf-right,.cyzj-right,.cyyq-right,.gjc-right
          width 1.2rem
          display flex
          flex-direction row
          justify-content space-between
          align-items center
        .qdgj-right i,.kfyy-right i,.cyk-right i,.qdxm-right i,.bzgf-right i,.cyzj-right i,.cyyq-right i,.gjc-right i
          width .5rem
          height .5rem
          display flex
          justify-content center
          align-items center
          margin-right .15rem
          font-size .33rem
          font-style normal
          border-radius 50%
          color white
          background $bgColor
        .el-icon-arrow-down,.el-icon-arrow-up
          color rgb(87,87,87)
          font-size .4rem
          margin-right .1rem
      .qdgj-h4,.kfyy-h4,.cyk-h4,.qdxm-h4,.bzgf-h4,.cyzj-h4,.cyyq-h4,.gjc-h4
        line-height 1.2rem
        font-size .4rem
      .hywidth
        height 36vw
        padding-bottom .2rem
        overflow hidden
      .qdgj-desc,.kfyy-desc,.cyk-desc,.qdxm-desc,.bzgf-desc,.cyzj-desc,.cyyq-desc,.gjc-desc
        width 100%
        text-align center
        display flex
        flex-direction row
        flex-wrap wrap
        .qdgj-li,.kfyy-li,.cyk-li,.qdxm-li,.bzgf-li,.cyzj-li,.cyyq-li,.gjc-li
          width 30.6%
          padding .3rem 0
          display block
          border-radius .05rem
          margin 0 .3rem .3rem 0
          font-size .38rem
          background rgb(245,245,245)
          overflow hidden
          white-space nowrap
          text-overflow ellipsis
        .qdgj-li:nth-child(3n),.kfyy-li:nth-child(3n),.cyk-li:nth-child(3n),.qdxm-li:nth-child(3n),.bzgf-li:nth-child(3n),.cyzj-li:nth-child(3n),.cyyq-li:nth-child(3n),.gjc-li:nth-child(3n)
          margin-right 0
        .active
          background rgb(231,248,247)
          border solid .02rem $bgColor
          color $bgColor
  .bottomclick
    width 100%
    position fixed
    left 0
    bottom 0
    background white
    .yixuan
      width 100%
      height 1rem
      padding-top .2rem
      display flex
      flex-direction row
      align-items center
      .yixuan-p
        width 1.2rem
        height .6rem
        line-height .6rem
        margin-left .5rem
        font-size .35rem
        border-right solid .01rem rgb(210,210,210)
      .yixuan-cont::-webkit-scrollbar
        display none
      .yixuan-cont
        width 80%
        margin-left .3rem
        overflow-x scroll
        .yixuan-desc
          width 150%
          height 1rem
          display flex
          flex-direction row
          align-items center
          .yixuan-li:last-of-type
            margin 0
          .yixuan-li
            font-size .32rem
            display block
            padding .15rem .2rem
            margin-right .2rem
            color $bgColor
            background rgb(231,248,247)
            border-radius .3rem
            .el-icon-close
              font-size .28rem
              padding-left .1rem
              color $bgColor
    .botdetail
      width 90%
      height 1.8rem
      margin 0 auto
      display flex
      flex-direction row
      justify-content space-between
      align-items center
      border-top solid .02rem rgb(245,245,245)
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
      top 10%
      left 30%
      color white
      background rgba(0,0,0,.6)
      border-radius .2rem
  .kong
    width 100%
    display flex
    flex-direction column
    .kong-top,.kong-bottom
      width 100%
      height 1rem
    .kong-bottom
      height 1.8rem
</style>
