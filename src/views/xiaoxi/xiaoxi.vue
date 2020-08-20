<template>
  <div>
    <xiaoxiheader></xiaoxiheader>
    <xiaoxicontent></xiaoxicontent>
    <Footer></Footer>
  </div>
</template>

<script>
import xiaoxiheader from './components/xiaoxiheader'
import xiaoxicontent from './components/xiaoxicontent'
import Footer from '@/components/footer'
export default {
  name: 'xiaoxi',
  components: {
    xiaoxiheader,
    xiaoxicontent,
    Footer
  }
}
</script>
