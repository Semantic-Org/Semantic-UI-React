import React from 'react'
import { Route, IndexRedirect } from 'react-router'

import Root from './Components/Root'
import Layout from './Components/Layout'
import ComponentDoc from './Components/ComponentDoc/ComponentDoc'
import Introduction from './Views/Introduction'
import PageNotFound from './Views/PageNotFound'
import ComponentExplorer from './Views/ComponentExplorer'
import Sandbox from './Views/Sandbox'

// TODO remove List once PR is merged and docs are updated to use index.js files
import { List } from 'stardust'
const ListDoc = () => <ComponentDoc _meta={List._meta} />

const routes = (
  <Route path='/' component={Layout}>
    <IndexRedirect to='introduction' />

    <Route path='introduction' component={Introduction} />
    <Route path='component-explorer' component={ComponentExplorer} />
    <Route path='sandbox' component={Sandbox} />
    {/* TODO remove List route once open PR is merged and docs are updated to use index.js files */}
    <Route path='elements'>
      <Route path='list' component={ListDoc} />
    </Route>

    {/* v1 Routes */}
    <Route path=':type/:name' component={Root} />
    <Route path='*' component={PageNotFound} />
  </Route>
)

export default routes
