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
      xueliyaoqiu: [
        {
          id: 'X001',
          title: '不限',
          checked: true
        },
        {
          id: 'X002',
          title: '初中及以下',
          checked: false
        },
        {
          id: 'X003',
          title: '中专/中技',
          checked: false
        },
        {
          id: 'X004',
          title: '高中',
          checked: false
        },
        {
          id: 'X005',
          title: '大专',
          checked: false
        },
        {
          id: 'X006',
          title: '本科',
          checked: false
        },
        {
          id: 'X007',
          title: '硕士',
          checked: false
        },
        {
          id: 'X008',
          title: '博士',
          checked: false
        }
      ],
      xinzidaiyu: [
        {
          id: 'X009',
          title: '不限'
        },
        {
          id: 'X010',
          title: '3K以下'
        },
        {
          id: 'X011',
          title: '3-5K'
        },
        {
          id: 'X012',
          title: '5-10K'
        },
        {
          id: 'X013',
          title: '10-20K'
        },
        {
          id: 'X014',
          title: '20-50K'
        },
        {
          id: 'X015',
          title: '50K以上'
        }
      ],
      jingyanyaoqiu: [
        {
          id: 'X016',
          title: '不限',
          checked: true
        },
        {
          id: 'X017',
          title: '在校生',
          checked: false
        },
        {
          id: 'X018',
          title: '应届生',
          checked: false
        },
        {
          id: 'X019',
          title: '1年以内',
          checked: false
        },
        {
          id: 'X020',
          title: '1-3年',
          checked: false
        },
        {
          id: 'X021',
          title: '3-5年',
          checked: false
        },
        {
          id: 'X022',
          title: '5-10年',
          checked: false
        },
        {
          id: 'X023',
          title: '10年以上',
          checked: false
        }
      ],
      hangye: [
        {
          id: 'X024',
          title: '不限',
          checked: true
        },
        {
          id: 'X025',
          title: '电子商务',
          checked: false
        },
        {
          id: 'X026',
          title: '游戏',
          checked: false
        },
        {
          id: 'X027',
          title: '媒体',
          checked: false
        },
        {
          id: 'X028',
          title: '广告营销',
          checked: false
        },
        {
          id: 'X029',
          title: '数据服务',
          checked: false
        },
        {
          id: 'X030',
          title: '医疗健康',
          checked: false
        },
        {
          id: 'X031',
          title: '生活服务',
          checked: false
        },
        {
          id: 'X032',
          title: 'O2O',
          checked: false
        },
        {
          id: 'X033',
          title: '旅游',
          checked: false
        },
        {
          id: 'X034',
          title: '分类信息',
          checked: false
        },
        {
          id: 'X035',
          title: '音乐/视频/阅读',
          checked: false
        },
        {
          id: 'X036',
          title: '在线教育',
          checked: false
        },
        {
          id: 'X037',
          title: '社交网络',
          checked: false
        },
        {
          id: 'X038',
          title: '人力资源服务',
          checked: false
        },
        {
          id: 'X039',
          title: '企业服务',
          checked: false
        },
        {
          id: 'X040',
          title: '信息安全',
          checked: false
        },
        {
          id: 'X041',
          title: '智能硬件',
          checked: false
        },
        {
          id: 'X042',
          title: '移动互联网',
          checked: false
        },
        {
          id: 'X043',
          title: '互联网',
          checked: false
        },
        {
          id: 'X044',
          title: '计算机软件',
          checked: false
        },
        {
          id: 'X045',
          title: '通信/网络设备',
          checked: false
        },
        {
          id: 'X046',
          title: '广告/公关/会展',
          checked: false
        },
        {
          id: 'X047',
          title: '互联网金融',
          checked: false
        },
        {
          id: 'X048',
          title: '物流/仓储',
          checked: false
        },
        {
          id: 'X049',
          title: '贸易/进出口',
          checked: false
        },
        {
          id: 'X050',
          title: '咨询',
          checked: false
        },
        {
          id: 'X051',
          title: '工程施工',
          checked: false
        },
        {
          id: 'X052',
          title: '汽车生产',
          checked: false
        },
        {
          id: 'X053',
          title: '其他行业',
          checked: false
        }
      ],
      gongsiguimo: [
        {
          id: 'X054',
          title: '不限',
          checked: true
        },
        {
          id: 'X055',
          title: '0-20人',
          checked: false
        },
        {
          id: 'X056',
          title: '20-99人',
          checked: false
        },
        {
          id: 'X057',
          title: '100-499人',
          checked: false
        },
        {
          id: 'X058',
          title: '500-999人',
          checked: false
        },
        {
          id: 'X059',
          title: '1000-9999人',
          checked: false
        },
        {
          id: 'X060',
          title: '10000人以上',
          checked: false
        }
      ],
      rongzijieduan: [
        {
          id: 'X061',
          title: '不限',
          checked: true
        },
        {
          id: 'X062',
          title: '未融资',
          checked: false
        },
        {
          id: 'X063',
          title: '天使轮',
          checked: false
        },
        {
          id: 'X064',
          title: 'A轮',
          checked: false
        },
        {
          id: 'X065',
          title: 'B轮',
          checked: false
        },
        {
          id: 'X066',
          title: 'C轮',
          checked: false
        },
        {
          id: 'X067',
          title: 'D轮及以上',
          checked: false
        },
        {
          id: 'X068',
          title: '已上市',
          checked: false
        },
        {
          id: 'X069',
          title: '不需要融资',
          checked: false
        }
      ],
      xlcheckbox: [],
      jycheckbox: [],
      hycheckbox: [],
      gmcheckbox: [],
      rzcheckbox: [],
      n: 0,
      xinzinum: 0,
      checknum: 0,
      showarrow: true,
      isarrow: true
    }
  },
  methods: {
    xueliclick (i) {
      if (i !== 0) {
        this.xueliyaoqiu[0].checked = false
        this.xueliyaoqiu[i].checked = true
        this.xlcheckbox.push(this.xueliyaoqiu[i].id)
        this.xlcheckbox = [...new Set(this.xlcheckbox)]
      } else {
        this.xlcheckbox.length = 0
        this.xueliyaoqiu[0].checked = true
        this.$set(this.xueliyaoqiu[this.xueliyaoqiu.length - 1], 'checked', false)
        this.$set(this.xueliyaoqiu[this.xueliyaoqiu.length - 2], 'checked', false)
        this.$set(this.xueliyaoqiu[this.xueliyaoqiu.length - 3], 'checked', false)
        this.$set(this.xueliyaoqiu[this.xueliyaoqiu.length - 4], 'checked', false)
        this.$set(this.xueliyaoqiu[this.xueliyaoqiu.length - 5], 'checked', false)
        this.$set(this.xueliyaoqiu[this.xueliyaoqiu.length - 6], 'checked', false)
        this.$set(this.xueliyaoqiu[this.xueliyaoqiu.length - 7], 'checked', false)
      }
      this.checknum = this.xlcheckbox.length + this.xinzinum + this.jycheckbox.length + this.hycheckbox.length + this.gmcheckbox.length + this.rzcheckbox.length
      this.$emit('change', this.checknum)
    },
    xinziclick (index) {
      this.n = index
      if (this.xinzidaiyu[index].id !== 'X009') {
        this.xinzinum = 1
      } else if (index === 0) {
        this.xinzinum = 0
      }
      this.checknum = this.xlcheckbox.length + this.xinzinum + this.jycheckbox.length + this.hycheckbox.length + this.gmcheckbox.length + this.rzcheckbox.length
      this.$emit('change', this.checknum)
    },
    jingyanclick (i) {
      if (i !== 0) {
        this.jingyanyaoqiu[0].checked = false
        this.jingyanyaoqiu[i].checked = true
        this.jycheckbox.push(this.jingyanyaoqiu[i].id)
        this.jycheckbox = [...new Set(this.jycheckbox)]
      } else {
        this.jycheckbox.length = 0
        this.jingyanyaoqiu[0].checked = true
        this.$set(this.jingyanyaoqiu[this.jingyanyaoqiu.length - 1], 'checked', false)
        this.$set(this.jingyanyaoqiu[this.jingyanyaoqiu.length - 2], 'checked', false)
        this.$set(this.jingyanyaoqiu[this.jingyanyaoqiu.length - 3], 'checked', false)
        this.$set(this.jingyanyaoqiu[this.jingyanyaoqiu.length - 4], 'checked', false)
        this.$set(this.jingyanyaoqiu[this.jingyanyaoqiu.length - 5], 'checked', false)
        this.$set(this.jingyanyaoqiu[this.jingyanyaoqiu.length - 6], 'checked', false)
        this.$set(this.jingyanyaoqiu[this.jingyanyaoqiu.length - 7], 'checked', false)
      }
      this.checknum = this.xlcheckbox.length + this.xinzinum + this.jycheckbox.length + this.hycheckbox.length + this.gmcheckbox.length + this.rzcheckbox.length
      this.$emit('change', this.checknum)
    },
    hangyeclick (i) {
      if (i !== 0) {
        this.hangye[0].checked = false
        this.hangye[i].checked = true
        this.hycheckbox.push(this.hangye[i].id)
        this.hycheckbox = [...new Set(this.hycheckbox)]
      } else {
        this.hycheckbox.length = 0
        this.hangye[0].checked = true
        this.$set(this.hangye[this.hangye.length - 1], 'checked', false)
        this.$set(this.hangye[this.hangye.length - 2], 'checked', false)
        this.$set(this.hangye[this.hangye.length - 3], 'checked', false)
        this.$set(this.hangye[this.hangye.length - 4], 'checked', false)
        this.$set(this.hangye[this.hangye.length - 5], 'checked', false)
        this.$set(this.hangye[this.hangye.length - 6], 'checked', false)
        this.$set(this.hangye[this.hangye.length - 7], 'checked', false)
        this.$set(this.hangye[this.hangye.length - 8], 'checked', false)
        this.$set(this.hangye[this.hangye.length - 9], 'checked', false)
        this.$set(this.hangye[this.hangye.length - 10], 'checked', false)
        this.$set(this.hangye[this.hangye.length - 11], 'checked', false)
        this.$set(this.hangye[this.hangye.length - 12], 'checked', false)
        this.$set(this.hangye[this.hangye.length - 13], 'checked', false)
        this.$set(this.hangye[this.hangye.length - 14], 'checked', false)
        this.$set(this.hangye[this.hangye.length - 15], 'checked', false)
        this.$set(this.hangye[this.hangye.length - 16], 'checked', false)
        this.$set(this.hangye[this.hangye.length - 17], 'checked', false)
        this.$set(this.hangye[this.hangye.length - 18], 'checked', false)
        this.$set(this.hangye[this.hangye.length - 19], 'checked', false)
        this.$set(this.hangye[this.hangye.length - 20], 'checked', false)
        this.$set(this.hangye[this.hangye.length - 21], 'checked', false)
        this.$set(this.hangye[this.hangye.length - 22], 'checked', false)
        this.$set(this.hangye[this.hangye.length - 23], 'checked', false)
        this.$set(this.hangye[this.hangye.length - 24], 'checked', false)
        this.$set(this.hangye[this.hangye.length - 25], 'checked', false)
        this.$set(this.hangye[this.hangye.length - 26], 'checked', false)
        this.$set(this.hangye[this.hangye.length - 27], 'checked', false)
        this.$set(this.hangye[this.hangye.length - 28], 'checked', false)
        this.$set(this.hangye[this.hangye.length - 29], 'checked', false)
      }
      this.checknum = this.xlcheckbox.length + this.xinzinum + this.jycheckbox.length + this.hycheckbox.length + this.gmcheckbox.length + this.rzcheckbox.length
      this.$emit('change', this.checknum)
    },
    arrowclick () {
      this.showarrow = !this.showarrow
      this.isarrow = !this.isarrow
    },
    guimoclick (i) {
      if (i !== 0) {
        this.gongsiguimo[0].checked = false
        this.gongsiguimo[i].checked = true
        this.gmcheckbox.push(this.gongsiguimo[i].id)
        this.gmcheckbox = [...new Set(this.gmcheckbox)]
      } else {
        this.gmcheckbox.length = 0
        this.gongsiguimo[0].checked = true
        this.$set(this.gongsiguimo[this.gongsiguimo.length - 1], 'checked', false)
        this.$set(this.gongsiguimo[this.gongsiguimo.length - 2], 'checked', false)
        this.$set(this.gongsiguimo[this.gongsiguimo.length - 3], 'checked', false)
        this.$set(this.gongsiguimo[this.gongsiguimo.length - 4], 'checked', false)
        this.$set(this.gongsiguimo[this.gongsiguimo.length - 5], 'checked', false)
        this.$set(this.gongsiguimo[this.gongsiguimo.length - 6], 'checked', false)
      }
      this.checknum = this.xlcheckbox.length + this.xinzinum + this.jycheckbox.length + this.hycheckbox.length + this.gmcheckbox.length + this.rzcheckbox.length
      this.$emit('change', this.checknum)
    },
    rongziclick (i) {
      if (i !== 0) {
        this.rongzijieduan[0].checked = false
        this.rongzijieduan[i].checked = true
        this.rzcheckbox.push(this.rongzijieduan[i].id)
        this.rzcheckbox = [...new Set(this.rzcheckbox)]
      } else {
        this.rzcheckbox.length = 0
        this.rongzijieduan[0].checked = true
        this.$set(this.rongzijieduan[this.rongzijieduan.length - 1], 'checked', false)
        this.$set(this.rongzijieduan[this.rongzijieduan.length - 2], 'checked', false)
        this.$set(this.rongzijieduan[this.rongzijieduan.length - 3], 'checked', false)
        this.$set(this.rongzijieduan[this.rongzijieduan.length - 4], 'checked', false)
        this.$set(this.rongzijieduan[this.rongzijieduan.length - 5], 'checked', false)
        this.$set(this.rongzijieduan[this.rongzijieduan.length - 6], 'checked', false)
        this.$set(this.rongzijieduan[this.rongzijieduan.length - 7], 'checked', false)
        this.$set(this.rongzijieduan[this.rongzijieduan.length - 8], 'checked', false)
      }
      this.checknum = this.xlcheckbox.length + this.xinzinum + this.jycheckbox.length + this.hycheckbox.length + this.gmcheckbox.length + this.rzcheckbox.length
      this.$emit('change', this.checknum)
    },
    clearclick () {
      // 重置当前页面数据
      Object.assign(this.$data, this.$options.data.call(this))
      this.checknum = 0
      this.$emit('change', this.checknum)
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
  .kong
    width 100%
    height 1.5rem
</style>
