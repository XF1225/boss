<template>
  <div>
    <guanjianciheader :checknum="checknum"></guanjianciheader>
    <guanjianciconts @change="checknumclick"></guanjianciconts>
  </div>
</template>

<script>
import guanjianciheader from './components/header'
import guanjianciconts from './components/contents'
export default {
  name: 'guanjianci',
  components: {
    guanjianciheader,
    guanjianciconts
  },
  data () {
    return {
      checknum: 0
    }
  },
  methods: {
    checknumclick (checknum) {
      this.checknum = checknum
    }
  }
}
</script>
