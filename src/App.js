import { Provider } from 'react-redux'
import Router from './router'
import store from './store'
import 'antd/dist/antd.min.css'
import './styles/index.scss'

export default () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Router/>
      </Provider>
    </div>
  )
}
