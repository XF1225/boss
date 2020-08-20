<template>
  <div>
    <faxianheader></faxianheader>
    <faxiannav></faxiannav>
    <faxiancontent></faxiancontent>
    <faxianjia></faxianjia>
    <Footer></Footer>
  </div>
</template>

<script>
import faxianheader from './components/header'
import faxiannav from './components/faxiannav'
import faxiancontent from './components/faxiancontent'
import faxianjia from './components/faxianjia'
import Footer from '@/components/footer'
export default {
  name: 'faxian',
  components: {
    faxianheader,
    faxiannav,
    faxiancontent,
    faxianjia,
    Footer
  }
}
</script>
