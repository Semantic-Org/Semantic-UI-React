import React from 'react'
import { Route, IndexRedirect } from 'react-router'

import Root from 'docs/app/Components/Root'
import Layout from 'docs/app/Components/Layout'
import ComponentDoc from 'docs/app/Components/ComponentDoc/ComponentDoc'
import PageNotFound from 'docs/app/Components/PageNotFound/PageNotFound'

// TODO remove these once PRs are merged and docs are updated to use index.js files
import { Button, Input, List, Segment } from 'stardust'
const ButtonDoc = () => <ComponentDoc _meta={Button._meta} />
const InputDoc = () => <ComponentDoc _meta={Input._meta} />
const ListDoc = () => <ComponentDoc _meta={List._meta} />
const SegmentDoc = () => <ComponentDoc _meta={Segment._meta} />

const routes = (
  <Route path='/' component={Layout}>
    <IndexRedirect to='elements/button' />

    {/* TODO remove routes once open PRs are merged and docs are updated to use index.js files */}
    <Route path='elements'>
      <Route path='button' component={ButtonDoc} />
      <Route path='input' component={InputDoc} />
      <Route path='list' component={ListDoc} />
      <Route path='segment' component={SegmentDoc} />
    </Route>

    {/* v1 Routes */}
    <Route path=':type'>
      <Route path=':name' component={Root} />
    </Route>

    <Route path='*' component={PageNotFound} />
  </Route>
)

export default routes
