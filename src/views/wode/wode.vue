<template>
  <div>
    <wodeheader></wodeheader>
    <wodecontent></wodecontent>
    <Footer></Footer>
  </div>
</template>
<script>
import wodeheader from './components/header'
import wodecontent from './components/wodecontent'
import Footer from '@/components/footer'
export default {
  name: 'wode',
  components: {
    wodeheader,
    wodecontent,
    Footer
  }
}
</script>
