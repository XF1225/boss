<template>
  <div>
    <shezhiheader :title="title"></shezhiheader>
    <contents></contents>
  </div>
</template>

<script>
import shezhiheader from '../shezhi/components/header'
import contents from './components/contents'
export default {
  name: 'shezhidetail',
  components: {
    shezhiheader,
    contents
  },
  data () {
    return {
      title: '账号与绑定'
    }
  },
  activated () {
    switch (this.$route.params.id) {
      case 'S001':
        this.title = '账号与绑定'
        break
      case 'S002':
        this.title = '通知与提醒'
        break
      case 'S003':
        this.title = '隐私设置'
        break
      case 'S004':
        this.title = '直直红包设置'
        break
      case 'S005':
        this.title = '打招呼语'
        break
      case 'S006':
        this.title = '帮助与反馈'
        break
      case 'S007':
        this.title = '版本更新'
        break
      case 'S008':
        this.title = '切换身份'
        break
    }
  }
}
</script>
