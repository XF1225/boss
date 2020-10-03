<template>
  <div>
    <div class="liaotianheader">
      <div class="htop">
        <span class="el-icon-arrow-left" @click="toup"></span>
        <div class="hdesc" v-for="item of HomeContent" :key="item.id">
          <h4>{{item.contp.split('.')[0]}}</h4>
          <p>{{item.contconp.split(' ')[0]}}.{{item.contp.split('.')[1]}}</p>
        </div>
        <span class="el-icon-more"></span>
      </div>
      <div class="tubiao">
        <div class="tubiaodesc" v-for="item of tubiaodesc" :key="item.id">
          <span :class="item.icon"></span>
          <p>{{item.name}}</p>
        </div>
      </div>
      <div class="shoufeijubao" v-show="showjubao">
        <p>该BOSS所招聘过程中若向你收费，请举报。</p>
        <span class="el-icon-close" @click="closeclick"></span>
      </div>
    </div>
    <div class="kong">
      <div class="kong-top"></div>
      <div class="kong-bottom" v-show="showjubao"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'liaotianheader',
  props: {
    HomeContent: Array
  },
  data () {
    return {
      tubiaodesc: [
        {
          id: 'B001',
          icon: 'el-icon-mobile',
          name: '电话号'
        },
        {
          id: 'B002',
          icon: 'el-icon-chat-dot-round',
          name: '微信号'
        },
        {
          id: 'B003',
          icon: 'el-icon-document',
          name: '发简历'
        },
        {
          id: 'B004',
          icon: 'el-icon-circle-close',
          name: '不感兴趣'
        }
      ],
      showjubao: true
    }
  },
  methods: {
    toup () {
      this.$router.go(-1)
    },
    closeclick () {
      this.showjubao = false
    }
  }
}
</script>

<style lang="stylus" scoped>
.liaotianheader
  width 100%
  position fixed
  z-index 3
  .htop
    width 100%
    height 1.5rem
    display flex
    flex-direction row
    justify-content space-between
    align-items center
    background white
    .el-icon-arrow-left
      padding-left .5rem
      font-size .5rem
      font-weight bold
      color rgb(87,87,87)
    .el-icon-more
      padding-right .5rem
      font-size .4rem
      color rgb(87,87,87)
    .hdesc
      display flex
      flex-direction column
      align-items center
    .hdesc h4
      font-size .4rem
      padding-bottom .15rem
    .hdesc p
      font-size .32rem
      color rgb(87,87,87)
  .tubiao
    width 100%
    height 1.5rem
    display flex
    flex-direction row
    justify-content space-around
    align-items center
    background white
    .tubiaodesc
      display flex
      flex-direction column
      align-items center
    .tubiaodesc:last-of-type span
      color red
    .tubiaodesc:last-of-type p
      color rgb(87,87,87)
    .tubiaodesc span,.tubiaodesc p
      font-size .5rem
      color rgb(187,187,187)
    .tubiaodesc p
      font-size .32rem
      padding-top .2rem
    .active
      color red
  .shoufeijubao
    width 100%
    height 1rem
    display flex
    flex-direction row
    justify-content space-between
    align-items center
    background rgb(255,168,48)
  .shoufeijubao p
    font-size .35rem
    color white
    padding-left .8rem
  .shoufeijubao span
    font-size .5rem
    color white
    padding-right .8rem
.kong
  width 100%
  .kong-top
    width 100%
    height 3rem
  .kong-bottom
    width 100%
    height 1rem
</style>
