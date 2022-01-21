// 引入createStore, 创建store对象
import { createStore, applyMiddleware } from 'redux'
// 引入redux-thunk, 用于支持异步action
import thunk from 'redux-thunk'
// 引入redux-devtools-extension
import { composeWithDevTools } from 'redux-devtools-extension'
import reducers from './reducers'

//  applyMiddleware(thunk)
export default createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))

// 不使用异步action
// export default createStore(allReducer, composeWithDevTools())

// 不使用redux开发者工具
// export default createStore(allReducer, applyMiddleware(thunk))