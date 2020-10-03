<template>
  <div>
    <ganxingquheader></ganxingquheader>
    <ganxingqucont></ganxingqucont>
  </div>
</template>

<script>
import ganxingquheader from './components/header'
import ganxingqucont from './components/contents'
export default {
  name: 'ganxingqu',
  components: {
    ganxingquheader,
    ganxingqucont
  }
}
</script>
