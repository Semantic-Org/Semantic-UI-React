import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

export default App

// Render your app
if (typeof document !== 'undefined') {
  const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate || ReactDOM.render

  const render = (Component) => {
    renderMethod(<Component />, document.getElementById('root'))
  }

  render(App)

  if (module.hot) {
    module.hot.accept('./App', () => render(require('./App').default))
  }
}
