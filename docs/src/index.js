import '@babel/polyfill'

import React from 'react'
import ReactDOM from 'react-dom'

import 'node_modules/@fortawesome/fontawesome-free/less/fontawesome.less'
import 'node_modules/@fortawesome/fontawesome-free/less/brands.less'
import 'node_modules/@fortawesome/fontawesome-free/less/regular.less'
import 'node_modules/@fortawesome/fontawesome-free/less/solid.less'
import 'node_modules/@fortawesome/fontawesome-free/less/v4-shims.less'

import App from './App'
import '../../themes/src/semantic.less'

export default App

if (typeof document !== 'undefined') {
  const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate || ReactDOM.render
  const render = Component => renderMethod(<Component />, document.getElementById('root'))

  render(App)
}
