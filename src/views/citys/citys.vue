<template>
  <div>
    <citysheader></citysheader>
    <cityscontents :letter="letter" :letters="letters"></cityscontents>
    <alphabet @change="letterchange" @create="lettercreate"></alphabet>
  </div>
</template>

<script>
import citysheader from './components/header'
import cityscontents from './components/contents'
import alphabet from './components/alphabet'
export default {
  name: 'citys',
  data () {
    return {
      letter: '',
      letters: []
    }
  },
  components: {
    citysheader,
    cityscontents,
    alphabet
  },
  methods: {
    letterchange (letter) {
      this.letter = letter
    },
    lettercreate (letters) {
      this.letters = letters
    }
  }
}
</script>
