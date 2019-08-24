<template>
  <div class="page-map">
    <div
      :id="mapId"
      class="map"
    ></div>
    <button
      @click="handlePmPolygon"
      class="poly-bottom"
    >画polygon</button>
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
      cacheMap: {},
      cloudmadeUrl:
        'http://mt0.google.cn/vt/lyrs=s,r@201&hl=zh-CN&gl=cn&x={x}&y={y}&z={z}&s=Galileo',
      cloudmade: {},
      currentMarker: {},
      id: 0
    }
  },
  mounted() {
    /**
     * 原题
     *  for (var i = 0; i< 10; i++){
          setTimeout(() => {
            console.log(i);
            }, 1000)
        }
        // 全部都是10
     */
    // 方法一
    // for (var i = 0; i < 10; i++) {
    //   setTimeout(
    //     j => {
    //       console.group(j)
    //     },
    //     1000,
    //     i
    //   )
    // }
    // 方法二
    // for (let i = 0; i < 10; i++) {
    //   setTimeout(() => {
    //     console.group(i)
    //   }, 1000)
    // }
    // 方法三
    // for (var i = 0; i < 10; i++) {
    //   ;(function(i) {
    //     setTimeout(() => {
    //       console.log(i)
    //     }, 1000)
    //   })(i)
    // }
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
      let popup = L.popup()
      vm.initLayer()
      vm.cacheMap = new L.Map(vm.mapId, {
        layers: [vm.cloudmade],
        center: new L.LatLng(vm.mapInitOption.gps.x, vm.mapInitOption.gps.y),
        zoom: vm.mapInitOption.zoom,
        closePopupOnClick: false,
        attributionControl: false //隐藏leaflet logo
      })
      vm.initMarker()
      vm.cacheMap.addLayer(vm.currentMarker)
      vm.cacheMap.pm.addControls({
        position: 'topleft',
        drawCircle: false
      })
      // vm.cacheMap.on('click', e => {
      //   popup
      //     .setLatLng(e.latlng)
      //     .setContent('You clicked the map at ' + e.latlng.toString())
      //     .openOn(vm.cacheMap)
      // })
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
    },
    addPolygon() {
      let vm = this
      var polygon = L.polygon([
        [23.102, 113.08],
        [23.006, 113.06],
        [23.002, 113.047]
      ])
      polygon.bindPopup('I am a polygon.')
      // var popup = L.popup()
      //   .setLatLng([23.1026641055584, 113.55653029816041])
      //   .setContent('I am a standalone popup.')
      //   .openOn(vm.cacheMap)
      vm.cacheMap.addLayer(polygon)
    },
    handlePmPolygon() {
      let vm = this
      let map = vm.cacheMap
      map.pm.enableDraw('Polygon')
      map.on('pm:create', e => {
        e.id = ++vm.id
        console.log(777, e)
        this.handleLayer(e.layer)
      })
    },
    handleLayer(layer) {
      console.log('layer', layer._latlngs)
    }
  }
}
</script>

<style lang="scss" scoped>
.page-map {
  width: 100%;
  height: 95vh;
  position: relative;
  z-index: 99;
  .poly-bottom {
    position: absolute;
    top: 2%;
    right: 20px;
    z-index: 2000;
  }
  .map {
    width: 100%;
    height: 100%;
  }
}
</style>