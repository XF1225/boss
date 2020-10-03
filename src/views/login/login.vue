<template>
  <div>
    <loginheader></loginheader>
    <logincontents></logincontents>
  </div>
</template>

<script>
import loginheader from './components/header'
import logincontents from './components/contents'
export default {
  name: 'login',
  components: {
    loginheader,
    logincontents
  }
}
</script>
