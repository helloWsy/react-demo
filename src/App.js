import 'antd/dist/antd.min.css'
import './styles/index.scss'
import RouterMap from './router'
import { Provider } from 'react-redux'
import store from './redux/store'

export default () => {
  return (
    <div className="App">
      <Provider store={store}>
        <RouterMap />
      </Provider>
    </div>
  )
}
