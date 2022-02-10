import Loadable from 'react-loadable'
import loading from '@/components/Loading'

const Home = Loadable({ loader: () => import(/*webpackChunkName:'Home'*/'@/pages/home'), loading })
const Info = Loadable({ loader: () => import(/*webpackChunkName:'Info'*/'@/pages/info'), loading })
const Error404 = Loadable({ loader: () => import(/*webpackChunkName:'Error404'*/'@/pages/404'), loading })

export default [
  { path: "/home", component: Home, roles: ["admin"] },
  { path: "/info", component: Info, roles: ["admin"] },
  { path: "/404", component: Error404 }
]