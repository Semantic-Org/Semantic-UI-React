import React, { Component } from 'react'
import { Router, useRouterHistory } from 'react-router'
import { createHistory } from 'history'

import routes from './routes'

const history = useRouterHistory(createHistory)({
  basename: __BASE__,
})

export default class App extends Component {
  render() {
    return (
      <Router history={history} routes={routes} />
    )
  }
}
