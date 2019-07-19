<template>
  <div class="page-map">
    <div
      :id="mapId"
      class="map"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'Map',
  data() {
    return {
      mapId: `l-map${new Date().getTime()}`,
      // 地图初始化参数
      mapInitOption: {
        maxZoom: 18,
        zoom: 15,
        gps: {
          x: 23.1026641055584,
          y: 113.55653029816041
        }
      },
      cloudmadeUrl:
        'http://mt0.google.cn/vt/lyrs=s,r@201&hl=zh-CN&gl=cn&x={x}&y={y}&z={z}&s=Galileo',
      cloudmade: {},
      currentMarker: {}
    }
  },
  mounted() {
    this.initMap()
  },
  methods: {
    initLayer() {
      let vm = this
      // 选择地图背景
      vm.cloudmade = new L.TileLayer(vm.cloudmadeUrl, {
        maxZoom: vm.mapInitOption.maxZoom
      })
    },
    initMap() {
      let vm = this
      vm.initLayer()
      let map = new L.Map(vm.mapId, {
        layers: [vm.cloudmade],
        center: new L.LatLng(vm.mapInitOption.gps.x, vm.mapInitOption.gps.y),
        zoom: vm.mapInitOption.zoom,
        attributionControl: false //隐藏leaflet logo
      })
      vm.initMarker()
      map.addLayer(vm.currentMarker)
    },
    initMarker() {
      let vm = this
      let myIcon = L.icon({
        iconUrl: './images/icon_location.png',
        iconSize: [20, 27]
      })
      vm.currentMarker = L.marker(
        [vm.mapInitOption.gps.x, vm.mapInitOption.gps.y],
        {
          icon: myIcon,
          draggable: true
        }
      )
    }
  }
}
</script>

<style lang="scss" scoped>
.page-map {
  .map {
    width: 400px;
    height: 400px;
    border: 1px solid #ccc;
  }
}
</style>