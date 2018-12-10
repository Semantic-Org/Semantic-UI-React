import React from 'react'
import ReactDOM from 'react-dom'
import faker from 'faker'

import App from './App'

export default App

if (process.env.FAKER_SEED) {
  faker.seed(parseInt(process.env.FAKER_SEED, 10))
}

if (typeof document !== 'undefined') {
  const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate || ReactDOM.render
  const render = Component => renderMethod(<Component />, document.getElementById('root'))

  render(App)
}
