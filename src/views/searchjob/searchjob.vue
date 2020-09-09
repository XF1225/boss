<template>
  <div>
    <searchheader></searchheader>
    <searchcontens></searchcontens>
    <searchdetail></searchdetail>
  </div>
</template>

<script>
import searchheader from './components/header'
import searchcontens from './components/searchcontens'
import searchdetail from './components/searchdetail'
export default {
  name: 'searchjob',
  components: {
    searchheader,
    searchcontens,
    searchdetail
  }
}
</script>
