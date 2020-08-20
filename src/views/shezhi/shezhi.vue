<template>
  <div>
    <shezhiheader :title="title"></shezhiheader>
    <shezhicontent></shezhicontent>
  </div>
</template>

<script>
import shezhiheader from './components/header'
import shezhicontent from './components/shezhicontent'
export default {
  name: 'shezhi',
  components: {
    shezhiheader,
    shezhicontent
  },
  data () {
    return {
      title: '设置'
    }
  }
}
</script>
