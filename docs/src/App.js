import React from 'react'
import { hot } from 'react-hot-loader'
import { Route, Router, Switch } from 'react-static'
import Routes from 'react-static-routes'

import ExternalExampleLayout from './components/ExternalExampleLayout'

const App = () => (
  <Router>
    <Switch>
      <Route exact path='/maximize/:exampleName' component={ExternalExampleLayout} />
      <Switch>
        <Routes />
      </Switch>
    </Switch>
  </Router>
)

export default hot(module)(App)
