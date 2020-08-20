<template>
  <div>
    <sousuoheader/>
    <sousuocontents/>
  </div>
</template>

<script>
import sousuoheader from './components/header'
import sousuocontents from './components/contents'
export default {
  name: 'sousuozhiwei',
  components: {
    sousuoheader,
    sousuocontents
  }
}
</script>
