<template>
  <div id="container" class="w-full h-full"></div>
</template>

<script>
import AMapLoader from '@amap/amap-jsapi-loader'

export default {
  name: 'MapContainer',
  data() {
    return {
      //此处不声明 map 对象，可以直接使用 this.map赋值或者采用非响应式的普通对象来存储。
      //map:null,
    }
  },
  mounted() {
    //DOM初始化完成进行地图初始化
    this.initAMap()
  },
  methods: {
    initAMap() {
      AMapLoader.load({
        key: '6c854c3a7f356cb86c7faabf5e1cf8a3', // 申请好的Web端开发者Key，首次调用 load 时必填
        version: '2.0', // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins: ['AMap.Scale', 'AMap.ToolBar', 'AMap.HawkEye'], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
      })
        .then((AMap) => {
          this.map = new AMap.Map('container', {
            //设置地图容器id
            viewMode: '3D', //是否为3D地图模式
            zoom: 17, //初始化地图级别
            zooms: [5, 22],
            center: [113.287219, 23.009961], //初始化地图中心点位置
          })
          // 创建一个 icon
          var endIcon = new AMap.Icon({
            size: new AMap.Size(25, 34),
            image: '//a.amap.com/jsapi_demos/static/demo-center/icons/dir-marker.png',
            imageSize: new AMap.Size(135, 40),
            imageOffset: new AMap.Pixel(-95, -3),
          })
          const marker = new AMap.Marker({
            position: new AMap.LngLat(113.287219, 23.009961), // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
            icon: endIcon,
            offset: new AMap.Pixel(-13, -30),
            title: '广州市益华数字科技有限公司',
          })
          this.map.add(marker)
          // 同时引入工具条插件，比例尺插件和鹰眼插件
          // AMap.plugin(['AMap.ToolBar', 'AMap.Scale', 'AMap.HawkEye', 'AMap.MapType', 'AMap.Geolocation'], () => {
          //   // 在图面添加工具条控件，工具条控件集成了缩放、平移、定位等功能按钮在内的组合控件
          this.map.addControl(
            new AMap.ToolBar({
              position: {
                top: '10px',
                right: '10px',
              },
            })
          )

          // 在图面添加比例尺控件，展示地图在当前层级和纬度下的比例尺
          this.map.addControl(
            new AMap.Scale({
              position: {
                bottom: '10px',
                right: '10px',
              },
            })
          )

          // 在图面添加鹰眼控件，在地图右下角显示地图的缩略图
          this.map.addControl(
            new AMap.HawkEye({
              isOpen: true,
              position: {
                bottom: '10px',
                left: '10px',
              },
            })
          )

          // 在图面添加类别切换控件，实现默认图层与卫星图、实施交通图层之间切换的控制
          // this.map.addControl(new AMap.MapType())

          // 在图面添加定位控件，用来获取和展示用户主机所在的经纬度位置
          // this.map.addControl(new AMap.Geolocation())
          // })
        })
        .catch((e) => {
          console.log(e)
        })
    },
  },
}
</script>

<style scoped lang="scss"></style>
