<template>
  <div>
    <jobsheader></jobsheader>
    <jobscontents></jobscontents>
  </div>
</template>

<script>
import jobsheader from './components/header'
import jobscontents from './components/contents'
export default {
  name: 'jobsdetail',
  components: {
    jobsheader,
    jobscontents
  }
}
</script>
