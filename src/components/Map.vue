<template>
  <div class="Maps">
    <baidu-map v-for="item of HomeContent" :key="item.id"
    :scroll-wheel-zoom="true"
    :center="item.jingweidu" :zoom="15" class="bm-view">
    <bm-marker
    :position="item.jingweidu"
    animation="BMAP_ANIMATION_BOUNCE"
    :title="item.area+item.contconp.split(' ')[0]"
    >
    <bm-label :content="item.area+item.contconp.split(' ')[0]" :labelStyle="{color: 'red', border: 0, padding: '.15rem', 'border-radius': '.2rem', fontSize : '.35rem'}" :offset="{width: -50, height: 30}"/>
    <bm-scale anchor="BMAP_ANCHOR_BOTTOM_LEFT" :offset="{width: 70, height: 0}"></bm-scale>
    <!-- 比例尺控件 -->
    <bm-navigation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" enableGeolocation></bm-navigation>
    <!-- 缩放控件 -->
    <bm-map-type :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']" anchor="BMAP_ANCHOR_TOP_LEFT"></bm-map-type>
    <!-- 在地图左上角加入地图类型控件 -->
    <bm-geolocation anchor="BMAP_ANCHOR_TOP_RIGHT" :showAddressBar="true" :autoLocation="true"  :offset="{width: 10, height: 10}"></bm-geolocation>
    <!-- 在地图右下角加入定位控件 -->
    <!-- <bm-panorama anchor="BMAP_ANCHOR_BOTTOM_RIGHT"></bm-panorama> -->
    <!-- 插入全景控件 -->
    </bm-marker>
    </baidu-map>
  </div>
</template>

<script>
export default {
  name: 'Map',
  props: {
    HomeContent: Array
  }
}
</script>

<style lang="stylus" scoped>
.bm-view
  width 100%
  height 5rem
</style>>
