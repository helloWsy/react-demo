
import MyMap from './myMap'

// 管理全部的地图对象
const mapObjects = { /* [mapId]: null */ }

// 创建一个地图对象
const createMap = mapId => new MyMap(mapId)

const destroyMap = mapId => delete mapObjects[mapId]

const getMapObj = mapId => mapObjects[mapId]

export default {
  createMap,
  destroyMap,
  getMapObj
}
