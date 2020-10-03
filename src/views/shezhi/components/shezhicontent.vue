<template>
  <div class="shezhicontent">
    <div class="detail">
      <div class="shezhidesc" v-for="item of shezhidetail" :key="item.id">
        <div class="shezhirow" v-for="(items,index) of item.detail" :key="index" @click="todetail(items.id)">
          <p>{{items.title}}</p>
          <span>{{items.rowright}}<i class="el-icon-arrow-right"></i></span>
        </div>
      </div>
      <div class="outlogin">
        <div class="tuichu" @click="confromclick">
          <input type="button" class="tcdl" value="退出登录">
        </div>
      </div>
      <div class="confrom" v-show="confrom" @touchmove.prevent>
        <div class="wenxintishi">
          <div class="details">
            <h4 class="details-h4">温馨提示</h4>
            <p class="details-p">确定要退出登录？</p>
            <div class="details-div">
              <p class="quxiao" @click="cancel">取消</p>
              <p class="queding" @click="sure">确定</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'shezhicontent',
  data () {
    return {
      shezhidetail: [
        {
          detail: [
            {
              id: 'S001',
              title: '账号与绑定',
              rowright: ''
            },
            {
              id: 'S002',
              title: '通知与提醒',
              rowright: ''
            },
            {
              id: 'S003',
              title: '隐私设置',
              rowright: ''
            }
          ]
        },
        {
          detail: [
            {
              id: 'S004',
              title: '直直红包设置',
              rowright: ''
            }
          ]
        },
        {
          detail: [
            {
              id: 'S005',
              title: '打招呼语',
              rowright: ''
            }
          ]
        },
        {
          detail: [
            {
              id: 'S006',
              title: '帮助与反馈',
              rowright: ''
            },
            {
              id: 'S007',
              title: '版本更新',
              rowright: '8.071'
            },
            {
              id: 'S008',
              title: '切换身份',
              rowright: '牛人'
            }
          ]
        }
      ],
      confrom: false
    }
  },
  methods: {
    todetail (id) {
      this.$router.push(`/shezhidetail/${id}`)
    },
    confromclick () {
      this.confrom = true
    },
    cancel () {
      this.confrom = false
    },
    sure () {
      this.confrom = false
      localStorage.removeItem('token')
      location.reload()
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../assets/css/common.styl'
.shezhicontent
  width 100%
  .detail
    width 90%
    margin 0 auto
    .shezhidesc
      width 100%
      display flex
      flex-direction column
      border-bottom solid .02rem rgb(235,235,235)
      .shezhirow
        width 100%
        height 1.8rem
        display flex
        flex-direction row
        justify-content space-between
        align-items center
      .shezhirow p
        font-size .43rem
      .shezhirow span
        font-size .35rem
        color rgb(147,147,147)
        display flex
        flex-direction row
        align-items center
      .shezhirow i
        font-size .5rem
        padding-left .1rem
        color rgb(189,189,189)
    .outlogin
      width 100%
      height 3rem
      display flex
      justify-content center
      align-items flex-end
      .tuichu
        width 95%
        height 1.2rem
        margin 0 auto
        padding-bottom .5rem
        .tcdl
          width 100%
          height 100%
          border 0
          border-radius .2rem
          background rgb(245,245,245)
          outline none
          font-size .45rem
    .confrom
      width 100%
      height 100vh
      position fixed
      left 0
      top 0
      background rgba(0,0,0,.6)
      z-index 3
      display flex
      justify-content center
      align-items center
      .wenxintishi
        width 85%
        background white
        .details
          width 90%
          margin 0 auto
          .details-h4
            margin-top .3rem
            line-height 1.5rem
            font-size .5rem
          .details-p
            font-size .38rem
            color rgb(87,87,87)
          .details-div
            margin-top .5rem
            height 1.5rem
            display flex
            flex-direction row
            justify-content flex-end
            align-items center
            font-size .4rem
            .quxiao
              color rgb(127,127,127)
              margin-right .5rem
            .queding
              color $bgColor
</style>
