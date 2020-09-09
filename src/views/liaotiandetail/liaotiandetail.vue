<template>
  <div>
    <liaotianheader :HomeContent="HomeContent"></liaotianheader>
    <liaotianconts :HomeContent="HomeContent"></liaotianconts>
    <liaotianfooter></liaotianfooter>
  </div>
</template>

<script>
import liaotianheader from './components/header'
import liaotianconts from './components/contents'
import liaotianfooter from './components/footer'
export default {
  name: 'liaotiandetail',
  data () {
    return {
      HomeContent: []
    }
  },
  components: {
    liaotianheader,
    liaotianconts,
    liaotianfooter
  },
  activated () {
    this.getdata()
  },
  methods: {
    getdata () {
      this.$getdata('/api/mock.json').then(res => {
        this.HomeContent = res.HomeContent.filter(item => item.id === this.$route.params.id)
      })
    }
  }
}
</script>
