<template>
  <div id="map"></div>
</template>

<script>
import BMap from 'BMap'
export default {
  name: 'Map',
  methods: {
    createMap () {
      // 创建Map实例
      var map = new BMap.Map('map')
      // 初始化地图,设置中心点坐标和地图级别
      map.centerAndZoom(new BMap.Point(116.404, 39.915), 11)
      map.addControl(new BMap.NavigationControl()) // 添加平移缩放控件
      map.addControl(new BMap.ScaleControl()) // 添加比例尺控件
      map.addControl(new BMap.OverviewMapControl()) // 添加缩略地图控件
      var marker = new BMap.Marker(new BMap.Point(116.404, 39.915), 11) // 创建标注
      map.addOverlay(marker) // 将标注添加到地图中
      // 设置地图显示的城市 此项是必须设置的
      map.setCurrentCity('北京')
      // 开启鼠标滚轮缩放
      map.enableScrollWheelZoom(true)
    }
  },
  mounted () {
    this.$nextTick(function () {
      this.createMap()
    })
  }
}
</script>

<style lang="stylus" scoped>
#map
  min-height 3rem
</style>>
