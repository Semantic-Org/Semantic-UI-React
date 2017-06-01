import React from 'react'
import {
  BrowserRouter,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom'

import ExternalExampleLayout from './Components/ExternalExampleLayout'
import Layout from './Components/Layout'
import Root from './Components/Root'

import Introduction from './Views/Introduction'
import Layouts from './Views/Layouts'
import PageNotFound from './Views/PageNotFound'
import Usage from './Views/Usage'

const RedirectToIntro = () => <Redirect to='introduction' />

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/maximize/:kebabCaseName' component={ExternalExampleLayout} />
      <Layout>
        <Switch>
          <Route exact path='/' render={RedirectToIntro} />
          <Route exact path='/introduction' component={Introduction} />
          <Route exact path='/layouts' component={Layouts} />
          <Route exact path='/usage' component={Usage} />
          <Route exact path='/:type/:name' component={Root} />
          <Route exact path='/*' component={PageNotFound} />
        </Switch>
      </Layout>
    </Switch>
  </BrowserRouter>
)

export default Router
