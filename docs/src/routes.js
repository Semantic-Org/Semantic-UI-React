import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

import ExternalExampleLayout from './components/ExternalExampleLayout'
import DocsLayout from './components/DocsLayout'
import DocsRoot from './components/DocsRoot'
import LayoutsLayout from './components/layoutsLayout'
import LayoutsRoot from './components/layoutsRoot'

import Introduction from './Views/Introduction'
import Layouts from './Views/layouts'
import PageNotFound from './Views/PageNotFound'
import Theming from './Views/Theming'
import Usage from './Views/Usage'

const RedirectToIntro = () => <Redirect to='/introduction' />

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/maximize/:exampleName' component={ExternalExampleLayout} />
      <Switch>
        <DocsLayout exact path='/' render={RedirectToIntro} />
        <DocsLayout exact path='/introduction' component={Introduction} />
        <DocsLayout exact path='/layouts' component={Layouts} />
        <LayoutsLayout exact path='/layouts/:name' component={LayoutsRoot} sidebar />
        <DocsLayout exact path='/theming' component={Theming} />
        <DocsLayout exact path='/usage' component={Usage} />
        <DocsLayout exact path='/:type/:name' component={DocsRoot} sidebar />
        <DocsLayout exact path='/*' component={PageNotFound} />
      </Switch>
    </Switch>
  </BrowserRouter>
)

export default Router
