<template>
  <div>
    <HomeHeader></HomeHeader>
    <HomeNav></HomeNav>
    <yincang></yincang>
    <gengxin></gengxin>
    <HomeContent></HomeContent>
    <Footer></Footer>
  </div>
</template>

<script>
import HomeHeader from './components/HomeHeader'
import HomeNav from './components/HomeNav'
import yincang from '@/components/yincang'
import gengxin from '@/components/gengxin'
import HomeContent from './components/HomeContent'
// import bscroll from './components/bscroll'
import Footer from '@/components/footer'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeNav,
    yincang,
    gengxin,
    HomeContent,
    Footer
  }
}
</script>
