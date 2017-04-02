import React from 'react'
import {
  BrowserRouter,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom'
import Root from './Components/Root'
import Layout from './Components/Layout'
import ExternalExampleLayout from './Components/ExternalExampleLayout'
import Introduction from './Views/Introduction'
import Usage from './Views/Usage'
import PageNotFound from './Views/PageNotFound'

const RedirectToIntro = () => <Redirect to='introduction' />

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/maximize/:kebabCaseName' component={ExternalExampleLayout} />
      <Layout>
        <Switch>
          <Route exact path='/' render={RedirectToIntro} />
          <Route exact path='/introduction' component={Introduction} />
          <Route exact path='/usage' component={Usage} />
          <Route exact path='/:type/:name' component={Root} />
          <Route exact path='/*' component={PageNotFound} />
        </Switch>
      </Layout>
    </Switch>
  </BrowserRouter>
)

export default Router
