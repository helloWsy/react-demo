import 'ol/ol.css'
import { Map, View } from 'ol'
import TileLayer from 'ol/layer/Tile'
import MAP_URL from './map-url'
import Overlay from "ol/Overlay"
import { defaults as defaultControls } from 'ol/control'
import { defaults as defaultInteraction } from 'ol/interaction'

const BaseMap = {
  name: MAP_URL.BASE_MAP.name,
  layer: new TileLayer({
    className: 'bw',
    source: MAP_URL.TDT_EMAP.source,
    name: MAP_URL.TDT_EMAP.name
  })
}
const BaseMapAnno = {
  name: MAP_URL.BASE_MAP_ANNO.name,
  layer: new TileLayer({
    className: 'bz',
    source: MAP_URL.TDT_EMAP_ANNO.source,
    name: MAP_URL.TDT_EMAP_ANNO.name
  })
}
const ImageMap = {
  name: MAP_URL.IMG_MAP.name,
  layer: new TileLayer({
    source: MAP_URL.TDT_IMG.source,
    name: MAP_URL.TDT_IMG.name,
    visible: false
  })
}
const ImageMapAnno = {
  name: MAP_URL.IMG_MAP_ANNO.name,
  layer: new TileLayer({
    source: MAP_URL.TDT_IMG_ANNO.source,
    name: MAP_URL.TDT_IMG_ANNO.name,
    visible: false
  })
}

const HOME_POS = {
  center: [120.08737861546985, 30.89616752387274],
  zoom: 11
}

const projection = 'EPSG:4326'

const view = new View({
  projection,
  center: HOME_POS.center,
  zoom: HOME_POS.zoom,
  maxZoom: 20,
  minZoom: 6,
  // extent: [ 117, 20, 125, 35 ],
  multiWorld: true
})

class MyMap {
  constructor(mapId) {
    
    this._map = new Map({
      target: mapId,
      view,
      controls: defaultControls({
        attribution: false,
        rotate: false,
        zoom: false,
        scale: true
      }),
      interactions: defaultInteraction({
        pinchRotate: false,
        altShiftDragRotate: false,
        onFocusOnly: true,
        keyboard: false,
        shiftDragZoom: false,
        pinchZoom: true,
        scaleLine: true
      })
    })

    this._layerList = []

    this.addLayer(BaseMap)
    this.addLayer(BaseMapAnno)
    this.addLayer(ImageMap)
    this.addLayer(ImageMapAnno)
    
  }

  isExist(name) {
    return this._layerList.find(layer => layer.name === name)
  }
  
  addLayer({ name, layer }) {
    if (this.isExist(name)) {
      return false
    }
    this._map.addLayer(layer)
    this._layerList.push({
      name,
      layer
    })
    return layer
  }

  addOverlay(element) {
    const overlay = new Overlay({
      element, //绑定 Overlay 对象和 DOM 对象的
      autoPan: true, // 定义弹出窗口在边缘点击时候可能不完整 设置自动平移效果
      autoPanAnimation: {
        duration: 250 //自动平移效果的动画时间 9毫秒
      }
    })
    this._map.addOverlay(overlay)
    return overlay
  }

  removeLayerByName(name) {
    const layer = this.isExist(name)

    this._layerList = this._layerList.filter(v => v.name !== name)
    return layer ? this._map.removeLayer(layer.layer) : undefined
  }

  removeAllLayer() {
    this._layerList.map(v => {
      this._map.removeLayer(v.layer)
    })
    this._layerList = []
  }

  getMap() {
    return this._map
  }

  goHome = (HOME_POS = {
    center: [120.08737861546985, 30.89616752387274],
    zoom: 11
  }) => {
    this._map.getView().animate({ center: HOME_POS.center, zoom: HOME_POS.zoom, duration: 300 })
  }

  location = (center, zoom) => {
    this._map.getView().animate({ center, zoom, duration: 300 })
  }

}

export default MyMap
