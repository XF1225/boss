<template>
  <div>
    <whatjobheader></whatjobheader>
    <contents></contents>
  </div>
</template>

<script>
import whatjobheader from './components/header'
import contents from './components/contents'
export default {
  name: 'whatjob',
  components: {
    whatjobheader,
    contents
  }
}
</script>
