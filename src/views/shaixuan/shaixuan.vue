<template>
  <div>
    <shaixuanheader :checknum="checknum"></shaixuanheader>
    <shaixuanconts @change="checknumclick"></shaixuanconts>
  </div>
</template>

<script>
import shaixuanheader from './components/header'
import shaixuanconts from './components/contents'
export default {
  name: 'shaixuan',
  components: {
    shaixuanheader,
    shaixuanconts
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
