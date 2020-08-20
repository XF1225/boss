<template>
  <div class="sousuocontents">
    <div class="zuijinsuosuo">
      <div class="zuijin-top">
        <h4>最近搜索</h4>
        <span class="el-icon-delete"></span>
      </div>
      <div class="zuijin-bottom">
        <li>前端</li>
      </div>
    </div>
    <div class="remenxiaoke">
      <h4 class="xiaoke-h4">热门小课</h4>
      <div class="xiaoke-desc">
        <div>
          <li v-for="item of remenxiaoke" :key="item.id" ><img :src="item.xiaokeimgs"></li>
        </div>
      </div>
    </div>
    <div class="remenhuati" v-for="(item,index) of remen" :key="index">
      <div class="details">
        <h4 class="huati-h4">{{item.title}}</h4>
        <div class="huati-desc">
          <div class="huati-row" v-for="items of item.list" :key="items.id">
            <p>{{items.title}}</p>
            <div>
              <span>{{items.remennum}}</span>
              <a :class="items.hdclassname">{{items.huida}}</a>
              <i :class="items.gzclassname">{{items.guanzhu}}</i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sousuocontents',
  data () {
    return {
      remenxiaoke: [
        {
          id: 'K0001',
          xiaokeimgs: require('@/assets/imgs/zhichang.jpg')
        },
        {
          id: 'K0002',
          xiaokeimgs: require('@/assets/imgs/siwei.jpg')
        },
        {
          id: 'K0003',
          xiaokeimgs: require('@/assets/imgs/duanshipin.jpg')
        },
        {
          id: 'K0004',
          xiaokeimgs: require('@/assets/imgs/wanzhuanppt.jpg')
        },
        {
          id: 'K0005',
          xiaokeimgs: require('@/assets/imgs/zhichangxiezuoke.jpg')
        }
      ],
      remen: [
        {
          title: '热门话题',
          list: [
            {
              id: 'T0001',
              title: 'Excel公式大全',
              remennum: '117个知识点',
              hdclassname: '',
              huida: '',
              gzclassname: 'guanzhu',
              guanzhu: '10W+关注'
            },
            {
              id: 'T0002',
              title: '新媒体运营常见面试题',
              remennum: '224个知识点',
              hdclassname: '',
              huida: '',
              gzclassname: 'guanzhu',
              guanzhu: '10W+关注'
            },
            {
              id: 'T0003',
              title: '人力资源常用术语大全',
              remennum: '131个知识点',
              hdclassname: '',
              huida: '',
              gzclassname: '',
              guanzhu: ''
            }
          ]
        },
        {
          title: '热门问题',
          list: [
            {
              id: 'T0004',
              title: '离职员工再入职，是否还需要试用期',
              remennum: '272个回答',
              hdclassname: 'huida',
              huida: '很多Boss回答',
              gzclassname: 'guanzhu',
              guanzhu: '700+关注'
            },
            {
              id: 'T0005',
              title: '做分页，做在前端好还是后端好？为什么？',
              remennum: '110个回答',
              hdclassname: 'huida',
              huida: '很多移动开发回答',
              gzclassname: 'guanzhu',
              guanzhu: '700+关注'
            },
            {
              id: 'T0006',
              title: 'HR在执行裁员工作时，是否会担心自己将来和被裁员工有相同遭遇？',
              remennum: '255给回答',
              hdclassname: '',
              huida: '',
              gzclassname: '',
              guanzhu: ''
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../assets/css/common.styl'
.sousuocontents
  width 100%
  .zuijinsuosuo
    width 100%
    margin .3rem 0
    display flex
    flex-direction column
    .zuijin-top
      height 1.2rem
      display flex
      flex-direction row
      justify-content space-between
      align-items center
    .zuijin-top h4
      padding-left .5rem
      font-size .45rem
    .zuijin-top span
      font-size .35rem
      color rgb(127,127,127)
      padding-right .5rem
    .zuijin-bottom
      margin-left .5rem
      display flex
      flex-direction row
      align-items center
    .zuijin-bottom li
      font-size .35rem
      display inline-block
      padding .2rem .35rem
      margin-right .2rem
      border-radius .1rem
      background rgb(245,245,245)
  .remenxiaoke
    width 100%
    display flex
    flex-direction column
    .xiaoke-h4
      line-height .8rem
      padding-left .5rem
      font-size .45rem
    .xiaoke-desc::-webkit-scrollbar
      display none
    .xiaoke-desc
      width 95%
      margin .3rem 0 0 .5rem
      overflow-x scroll
    .xiaoke-desc div
      width 180%
      display flex
      flex-direction row
      align-items center
    .xiaoke-desc li
      width 33%
      height 18vw
      margin-right .2rem
      border-radius .15rem
      overflow hidden
      display inline-block
    .xiaoke-desc img
      width 100%
      height 100%
  .remenhuati
    width 100%
    .details
      width 90%
      margin 0 auto
      .huati-h4
        line-height .8rem
        font-size .45rem
        padding-top .5rem
      .huati-desc
        width 100%
        display flex
        flex-direction column
        .huati-row
          width 100%
          height 1.8rem
          display flex
          flex-direction column
          justify-content center
          border-bottom solid .02rem rgb(245,245,245)
        .huati-row p
          line-height .5rem
          font-size .38rem
          font-weight bold
          padding-bottom .15rem
        .huati-row div
          display flex
          flex-direction row
          align-items center
        .huati-row span
          font-size .32rem
          color rgb(189,189,189)
        .huati-row i, .huati-row a
          font-size .35rem
          font-style normal
          margin-left .1rem
          color $bgColor
        .huati-row a
          color blue
        .huida
          padding .1rem
          background rgb(241,246,255)
        .guanzhu
          padding .1rem
          background rgb(230,246,235)
</style>
