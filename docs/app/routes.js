import React from 'react'
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom'

import ExternalExampleLayout from './Components/ExternalExampleLayout'
import DocsLayout from './Components/DocsLayout'
import DocsRoot from './Components/DocsRoot'
import LayoutsLayout from './Components/LayoutsLayout'
import LayoutsRoot from './Components/LayoutsRoot'

import Introduction from './Views/Introduction'
import Layouts from './Views/Layouts'
import PageNotFound from './Views/PageNotFound'
import Usage from './Views/Usage'

const RedirectToIntro = () => <Redirect to='/introduction' />

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/maximize/:kebabCaseName' component={ExternalExampleLayout} />
      <Switch>
        <DocsLayout exact path='/' render={RedirectToIntro} />
        <DocsLayout exact path='/introduction' component={Introduction} />
        <DocsLayout exact path='/layouts' component={Layouts} />
        <LayoutsLayout exact path='/layouts/:name' component={LayoutsRoot} />
        <DocsLayout exact path='/usage' component={Usage} />
        <DocsLayout exact path='/:type/:name' component={DocsRoot} />
        <DocsLayout exact path='/*' component={PageNotFound} />
      </Switch>
    </Switch>
  </BrowserRouter>
)

export default Router
