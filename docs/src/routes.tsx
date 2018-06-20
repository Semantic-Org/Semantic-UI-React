import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

import ExternalExampleLayout from './components/ExternalExampleLayout'
import DocsLayout from './components/DocsLayout'
import DocsRoot from './components/DocsRoot'

import Introduction from './views/Introduction'
import PageNotFound from './views/PageNotFound'
import Theming from './views/Theming'
import Usage from './views/Usage'

const RedirectToIntro = () => <Redirect to='/introduction' />

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/maximize/:exampleName' component={ExternalExampleLayout} />
      <Switch>
        <DocsLayout exact path='/' render={RedirectToIntro} />
        <DocsLayout exact path='/introduction' component={Introduction} />
        <DocsLayout exact path='/theming' component={Theming} />
        <DocsLayout exact path='/usage' component={Usage} />
        <DocsLayout exact path='/:type/:name' component={DocsRoot} sidebar />
        <DocsLayout exact path='/*' component={PageNotFound} />
      </Switch>
    </Switch>
  </BrowserRouter>
)

export default Router
