<template>
  <div>
    <choiceheader></choiceheader>
    <contents></contents>
    <choicefooter></choicefooter>
  </div>
</template>

<script>
import choiceheader from './components/header'
import contents from './components/contents'
import choicefooter from './components/footer'
export default {
  name: 'citychoice',
  components: {
    choiceheader,
    contents,
    choicefooter
  }
}
</script>
