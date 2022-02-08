import 'ol/ol.css'
import XYZ from 'ol/source/XYZ'

const token = '644e8cbd42b1b9d7ab763afef6bb328a'
const token_img = 'ca5e9180d37b55b0c9d57cf3b470e566'

export default {
  BASE_MAP: {
    name: '底图'
  },

  BASE_MAP_ANNO: {
    name: '底图助记'
  },
  
  IMG_MAP: {
    name: '影像底图'
  },

  IMG_MAP_ANNO: {
    name: '影像底图助记'
  },

  TDT_EMAP: {
    name: '天地图矢量',
    source: new XYZ({
      projection: 'EPSG:4326',
      crossOrigin: 'anonymous',
      url: 'http://t{0-6}.tianditu.gov.cn/vec_c/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=vec&STYLE=default&TILEMATRIXSET=c&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=' + token,
      maxZoom: 18
    }),
    renderBuffer: Infinity
  },

  TDT_EMAP_ANNO: {
    name: '天地图矢量助记',
    source: new XYZ({
      projection: 'EPSG:4326',
      crossOrigin: 'anonymous',
      url: 'http://t{0-6}.tianditu.gov.cn/cva_c/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cva&STYLE=default&TILEMATRIXSET=c&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=' + token
    })
  },

  TDT_IMG: {
    name: '天地图影像',
    source: new XYZ({
      projection: 'EPSG:4326',
      crossOrigin: 'anonymous',
      url: 'http://t{0-6}.tianditu.gov.cn/img_c/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=img&STYLE=default&TILEMATRIXSET=c&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=' + token_img,
      maxZoom: 18
    })
  },

  TDT_IMG_ANNO: {
    name: '天地图影像助记',
    source: new XYZ({
      projection: 'EPSG:4326',
      crossOrigin: 'anonymous',
      url: 'http://t0.tianditu.gov.cn/cia_c/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cia&STYLE=dark&TILEMATRIXSET=c&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=' + token_img,
      minZoom: 12
    })
  }
}