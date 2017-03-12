import React from 'react'
import {
  BrowserRouter,
  Route,
  Redirect,
} from 'react-router-dom'
import Root from './Components/Root'
import Layout from './Components/Layout'
import Introduction from './Views/Introduction'
import Usage from './Views/Usage'
import PageNotFound from './Views/PageNotFound'

const RedirectToIntro = () => <Redirect to='introduction' />

const Router = () => (
  <BrowserRouter>
    <Layout>
      <Route exact path='/' render={RedirectToIntro} />
      <Route exact path='/introduction' component={Introduction} />
      <Route exact path='/usage' component={Usage} />
      <Route exact path='/:type/:name' component={Root} />
      <Route exact path='/*' component={PageNotFound} />
    </Layout>
  </BrowserRouter>
)

export default Router
