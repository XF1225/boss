<template>
  <div>
    <tongzhiheader></tongzhiheader>
    <tongzhicontents></tongzhicontents>
  </div>
</template>

<script>
import tongzhiheader from './components/header'
import tongzhicontents from './components/contents'
export default {
  name: 'suoyoutongzhi',
  components: {
    tongzhiheader,
    tongzhicontents
  }
}
</script>
