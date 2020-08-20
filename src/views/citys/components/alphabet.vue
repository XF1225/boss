<template>
  <div class="alphabet">
    <span v-for="item of letters" :key="item" ref="item"
    @click="letterclick" @touchstart="tstart" @touchmove="tmove" @touchend="tend">{{item}}</span>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'alphabet',
  data () {
    return {
      alphabet: [],
      touchstatus: false,
      startY: 0,
      timer: null
    }
  },
  updated () {
    this.startY = this.$refs.item[0].offsetTop
  },
  computed: {
    letters () {
      const letters = []
      for (var i = 0; i < this.alphabet.length; i++) {
        letters.push(this.alphabet[i].initial)
      }
      this.$emit('create', letters)
      return letters
    }
  },
  methods: {
    getalphabet () {
      axios.get('/api/city.json').then(this.getalphabetSucc)
    },
    getalphabetSucc (res) {
      this.alphabet = res.data.citys
    },
    letterclick (e) {
      this.$emit('change', e.target.innerText)
    },
    tstart () {
      this.touchstatus = true
    },
    tmove (e) {
      if (this.touchstatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 51.6
          const index = Math.floor((touchY - this.startY) / 16.67) - 3
          console.log(index)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },
    tend () {
      this.touchstatus = false
    }
  },
  mounted () {
    this.getalphabet()
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../assets/css/common.styl'
.alphabet
  width .5rem
  position fixed
  top 2.5rem
  right 0
  display flex
  flex-direction column
  justify-content center
  align-items center
.alphabet span
  line-height .5rem
  font-size .38rem
  color $bgColor
</style>
