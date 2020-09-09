function goujiaclick (i) {
  if (this.qianduangoujia[i].checked === true) {
    if (this.checknum <= 4) {
      this.qianduangoujia[i].checked = !this.qianduangoujia[i].checked
      this.qdgjchecked.push(this.qianduangoujia[i].id)
      this.qdgjchecked = [...new Set(this.qdgjchecked)]
    } else {
      console.log('超过了')
      this.qianduangoujia[i].checked = false
      return false
    }
  } else {
    for (var j = 0; j < this.qdgjchecked.length; j++) {
      if (this.qianduangoujia[i].id === this.qdgjchecked[j]) {
        this.qdgjchecked.splice(j, 1)
        this.qdgjchecked = [...new Set(this.qdgjchecked)]
      }
    }
  }
  this.checknum = this.qdgjchecked.length + this.kfyychecked.length + this.cykchecked.length + this.qdxmchecked.length + this.bzgfchecked.length + this.cyzjchecked.length + this.cyyqchecked.length + this.gjcchecked.length
  this.$emit('change', this.checknum)
}
function yuyanclick (i) {
  this.kaifayuyan[i].checked = !this.kaifayuyan[i].checked
  if (this.kaifayuyan[i].checked === true) {
    if (this.checknum <= 4) {
      this.kfyychecked.push(this.kaifayuyan[i].id)
      this.kfyychecked = [...new Set(this.kfyychecked)]
    } else {
      console.log('超过了')
      this.kaifayuyan[i].checked = false
      return false
    }
  } else {
    for (var j = 0; j < this.kfyychecked.length; j++) {
      if (this.kaifayuyan[i].id === this.kfyychecked[j]) {
        this.kfyychecked.splice(j, 1)
        this.kfyychecked = [...new Set(this.kfyychecked)]
      }
    }
  }
  this.checknum = this.qdgjchecked.length + this.kfyychecked.length + this.cykchecked.length + this.qdxmchecked.length + this.bzgfchecked.length + this.cyzjchecked.length + this.cyyqchecked.length + this.gjcchecked.length
  this.$emit('change', this.checknum)
}
function changyongkuclick (i) {
  this.changyongku[i].checked = !this.changyongku[i].checked
  if (this.changyongku[i].checked === true) {
    if (this.checknum <= 4) {
      this.cykchecked.push(this.changyongku[i].id)
      this.cykchecked = [...new Set(this.cykchecked)]
    } else {
      console.log('超过了')
      this.changyongku[i].checked = false
      return false
    }
  } else {
    for (var j = 0; j < this.cykchecked.length; j++) {
      if (this.changyongku[i].id === this.cykchecked[j]) {
        this.cykchecked.splice(j, 1)
        this.cykchecked = [...new Set(this.cykchecked)]
      }
    }
  }
  this.checknum = this.qdgjchecked.length + this.kfyychecked.length + this.cykchecked.length + this.qdxmchecked.length + this.bzgfchecked.length + this.cyzjchecked.length + this.cyyqchecked.length + this.gjcchecked.length
  this.$emit('change', this.checknum)
}
function xiangmuclick (i) {
  this.qianduanxiangmu[i].checked = !this.qianduanxiangmu[i].checked
  if (this.qianduanxiangmu[i].checked === true) {
    if (this.checknum <= 4) {
      this.qdxmchecked.push(this.qianduanxiangmu[i].id)
      this.qdxmchecked = [...new Set(this.qdxmchecked)]
    } else {
      console.log('超过了')
      this.qianduanxiangmu[i].checked = false
      return false
    }
  } else {
    for (var j = 0; j < this.qdxmchecked.length; j++) {
      if (this.qianduanxiangmu[i].id === this.qdxmchecked[j]) {
        this.qdxmchecked.splice(j, 1)
        this.qdxmchecked = [...new Set(this.qdxmchecked)]
      }
    }
  }
  this.checknum = this.qdgjchecked.length + this.kfyychecked.length + this.cykchecked.length + this.qdxmchecked.length + this.bzgfchecked.length + this.cyzjchecked.length + this.cyyqchecked.length + this.gjcchecked.length
  this.$emit('change', this.checknum)
}
function guifanclick (i) {
  this.biaozhunguifan[i].checked = !this.biaozhunguifan[i].checked
  if (this.biaozhunguifan[i].checked === true) {
    if (this.checknum <= 4) {
      this.bzgfchecked.push(this.biaozhunguifan[i].id)
      this.bzgfchecked = [...new Set(this.bzgfchecked)]
    } else {
      console.log('超过了')
      this.biaozhunguifan[i].checked = false
      return false
    }
  } else {
    for (var j = 0; j < this.bzgfchecked.length; j++) {
      if (this.biaozhunguifan[i].id === this.bzgfchecked[j]) {
        this.bzgfchecked.splice(j, 1)
        this.bzgfchecked = [...new Set(this.bzgfchecked)]
      }
    }
  }
  this.checknum = this.qdgjchecked.length + this.kfyychecked.length + this.cykchecked.length + this.qdxmchecked.length + this.bzgfchecked.length + this.cyzjchecked.length + this.cyyqchecked.length + this.gjcchecked.length
  this.$emit('change', this.checknum)
}
function zujianclick (i) {
  this.changyongzujian[i].checked = !this.changyongzujian[i].checked
  if (this.changyongzujian[i].checked === true) {
    if (this.checknum <= 4) {
      this.cyzjchecked.push(this.changyongzujian[i].id)
      this.cyzjchecked = [...new Set(this.cyzjchecked)]
    } else {
      console.log('超过了')
      this.changyongzujian[i].checked = false
      return false
    }
  } else {
    for (var j = 0; j < this.cyzjchecked.length; j++) {
      if (this.changyongzujian[i].id === this.cyzjchecked[j]) {
        this.cyzjchecked.splice(j, 1)
        this.cyzjchecked = [...new Set(this.cyzjchecked)]
      }
    }
  }
  this.checknum = this.qdgjchecked.length + this.kfyychecked.length + this.cykchecked.length + this.qdxmchecked.length + this.bzgfchecked.length + this.cyzjchecked.length + this.cyyqchecked.length + this.gjcchecked.length
  this.$emit('change', this.checknum)
}
function yinqingclick (i) {
  this.changyongyinqing[i].checked = !this.changyongyinqing[i].checked
  if (this.changyongyinqing[i].checked === true) {
    if (this.checknum <= 4) {
      this.cyyqchecked.push(this.changyongyinqing[i].id)
      this.cyyqchecked = [...new Set(this.cyyqchecked)]
    } else {
      console.log('超过了')
      this.changyongyinqing[i].checked = false
      return false
    }
  } else {
    for (var j = 0; j < this.cyyqchecked.length; j++) {
      if (this.changyongyinqing[i].id === this.cyyqchecked[j]) {
        this.cyyqchecked.splice(j, 1)
        this.cyyqchecked = [...new Set(this.cyyqchecked)]
      }
    }
  }
  this.checknum = this.qdgjchecked.length + this.kfyychecked.length + this.cykchecked.length + this.qdxmchecked.length + this.bzgfchecked.length + this.cyzjchecked.length + this.cyyqchecked.length + this.gjcchecked.length
  this.$emit('change', this.checknum)
}
function guanjianciclick (i) {
  this.guanjianci[i].checked = !this.guanjianci[i].checked
  if (this.guanjianci[i].checked === true) {
    if (this.checknum <= 4) {
      this.gjcchecked.push(this.guanjianci[i].id)
      this.gjcchecked = [...new Set(this.gjcchecked)]
    } else {
      console.log('超过了')
      this.guanjianci[i].checked = false
      return false
    }
  } else {
    for (var j = 0; j < this.gjcchecked.length; j++) {
      if (this.guanjianci[i].id === this.gjcchecked[j]) {
        this.gjcchecked.splice(j, 1)
        this.gjcchecked = [...new Set(this.gjcchecked)]
      }
    }
  }
  this.checknum = this.qdgjchecked.length + this.kfyychecked.length + this.cykchecked.length + this.qdxmchecked.length + this.bzgfchecked.length + this.cyzjchecked.length + this.cyyqchecked.length + this.gjcchecked.length
  this.$emit('change', this.checknum)
}
module.exports = { goujiaclick, yuyanclick, changyongkuclick, xiangmuclick, guifanclick, zujianclick, yinqingclick, guanjianciclick }
