<template>
  <div>
    <searchheader></searchheader>
    <searchcontens></searchcontens>
  </div>
</template>

<script>
import searchheader from './components/header'
import searchcontens from './components/searchcontens'
export default {
  name: 'searchjob',
  components: {
    searchheader,
    searchcontens
  }
}
</script>
