import React from 'react'
import { Route, IndexRedirect } from 'react-router'

import Root from './Components/Root'
import Layout from './Components/Layout'
import Introduction from './Views/Introduction'
import PageNotFound from './Views/PageNotFound'

const routes = (
  <Route path='/' component={Layout}>
    <IndexRedirect to='introduction' />

    <Route path='introduction' component={Introduction} />
    <Route path=':type/:name' component={Root} />
    <Route path='*' component={PageNotFound} />
  </Route>
)

export default routes
