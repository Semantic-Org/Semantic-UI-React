import React from 'react'
import { Route } from 'react-router'

import Root from './Components/Root'
import ButtonExamples from './Examples/elements/Button/ButtonExamples'

const redirect = to => (nextState, replace) => replace(to)

const routes = (
  <Route path='/' component={Root}>
    <Route path='elements'>
      <Route path='button' component={ButtonExamples} />
    </Route>
    <Route path='*' onEnter={redirect('/')} />
  </Route>
)

export default routes
