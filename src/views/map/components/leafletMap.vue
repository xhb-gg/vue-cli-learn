<template>
    <div>
        <div :id="mapId" ref="cacheMap" class="cache-map" />
    </div>
</template>

<script>
import { getGeoJsonData } from '@/api/map'
import responseHandle from '@/utils/response'

// 地图配置
const mapParams = {
  options: {
    center: [23.131082, 113.26568], // 地图中心点
    zoomControl: false, // 去掉缩放按钮
    doubleClickZoom: false, // 关闭双击缩放
    attributionControl: false, // 隐藏leaflet logo,
    preferCanvas: true, // 渲染在canvas
    dragging: true, // 是否可以使用鼠标/触摸拖动地图
    scrollWheelZoom: 'center', // 是否可以使用鼠标滚轮缩放地图
    minZoom: 3 // 最小缩放值
  }
}

export default {
  name: 'leafletMap',
  data() {
    return {
      mapId: 'leaflet',
      // geojson配置
      mapGeoJson: {
        style: {
          fillColor: 'rgba(52,59,72,1)',
          fillOpacity: 1,
          weight: 1,
          color: 'rgba(28,214,255,1)'
        }
      },
      cacheMap: {}
    }
  },
  mounted() {
    this.initMap()
    this.handleGetGeoJsonData()
  },
  methods: {
    initMap() {
      this.cacheMap = L.map(this.mapId, mapParams.options)
    },
    async handleGetGeoJsonData() {
      const resp = await getGeoJsonData({
        adcode: 100000
      })
      const features = resp.features
      this.geoLayer = L.geoJson(features, this.mapGeoJson).addTo(this.cacheMap)
      this.cacheMap.fitBounds(this.geoLayer.getBounds())

      // 渲染地区标记文字
      features.forEach(item => {
        const properties = item.properties
        const name = properties.name
        const center = turf.center(item).geometry.coordinates
        this.renderPopupText({
          center: center,
          name: name,
          properties: properties
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.cache-map {
  height: 100vh;
  background: transparent;
  z-index: 1;
}
</style>