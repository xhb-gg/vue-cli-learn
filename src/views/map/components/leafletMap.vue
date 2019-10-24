<template>
    <div>
        <div :id="mapId" ref="cacheMap" class="cache-map" />
    </div>
</template>

<script>
import { getGeoJsonData } from '@/api/map'
import responseHandle from '@/utils/response'
import turf from 'turf'

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
        },
        onEachFeature: this.onEachFeature // 地图点击
      },
      cacheMap: {},
      adcode: 100000
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
        adcode: this.adcode
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
    },
    // 渲染地区标记文字
    renderPopupText(param) {
      const cacheMap = this.cacheMap
      const name = param.name
      const properties = param.properties
      // const level = properties.level
      let center = param.center

      if (this.regionCenterFixed(name)) {
        center = properties.center
      }

      // eslint-disable-next-line no-undef
      L.popup({
        className: 'me-leaflet-popup-text',
        closeButton: false,
        closeOnClick: false
      })
        .setLatLng([center[1], center[0]])
        .setContent(name)
        .addTo(cacheMap)
    },
    // 地区中心点修复
    regionCenterFixed(name) {
      const nameList = ['内蒙古自治区', '益阳市']
      if (nameList.includes(name)) {
        return true
      }
      return false
    },
    // feature绑定事件
    onEachFeature(feature, layer) {
      layer.on({
        // mouseover: this.highLightFeature,
        // mouseout: this.resetHighLight,
        click: this.clickToFeature
      })
    },
    clickToFeature(e) {
      const feature = e.target.feature
      const adcode = feature.properties.adcode
      const level = feature.properties.level
      if (level === 'district') return
      this.adcode = adcode
      this.cacheMap.removeLayer(this.geoLayer)
      this.handleGetGeoJsonData()
    }
  }
}
</script>

<style lang="scss">
.cache-map {
  height: 100vh;
  background: transparent;
  z-index: 1;
  .me-leaflet-popup-text {
    user-select: none;
    .leaflet-popup-tip-container {
      display: none;
    }
    .leaflet-popup-content {
      position: relative;
      top: 15px;
      left: -2px;
      margin: 0 !important;
      line-height: 0 !important;
      font-size: 12px;
      color: rgba(255, 255, 255, 0.8);
    }
    .leaflet-popup-content-wrapper,
    .leaflet-popup-tip {
      background: transparent;
      color: white;
      box-shadow: none;
      text-align: center;
    }
  }
}
</style>