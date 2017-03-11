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
      <Route path='/' render={RedirectToIntro} />
      <Route path='/introduction' component={Introduction} />
      <Route path='/usage' component={Usage} />
      <Route path='/:type/:name' component={Root} />
      <Route path='/*' component={PageNotFound} />
    </Layout>
  </BrowserRouter>
)

export default Router
