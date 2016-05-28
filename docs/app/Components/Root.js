import 'semantic-ui-css/semantic.js'
import 'semantic-ui-css/semantic.css'
import 'highlight.js/styles/github.css'
import _ from 'lodash'
import React, { Component, PropTypes } from 'react'
import { routerShape } from 'react-router'

import * as stardust from 'stardust'

import ComponentDoc from '../Components/ComponentDoc/ComponentDoc'
import DocsMenu from '../Components/Sidebar/Sidebar'
import style from '../Style'

const { Grid, Segment } = stardust

export default class Root extends Component {
  static contextTypes = {
    router: routerShape,
  }
  static propTypes = {
    children: PropTypes.node,
    location: PropTypes.object,
    params: PropTypes.object,
    route: PropTypes.object,
    routeParams: PropTypes.object,
  }

  state = { menuSearch: '' }

  render() {
    const { children, location, params, route, routeParams } = this.props
    const components = _.map(stardust, '_meta')
      .sort(({ name }) => name)
      .map(_meta => (
        <Grid.Row key={_meta.name} id={_meta.name}>
          <Grid.Column>
            <Segment className='basic'>
              <ComponentDoc _meta={_meta} />
            </Segment>
          </Grid.Column>
        </Grid.Row>
      ))

    return (
      <div style={style.container}>
        <div style={style.menu}>
          <DocsMenu />
        </div>
        <div style={style.main}>
          {location.pathname !== '' ? (
            <div>
              {/* TODO will cleanup, debug to prove router works */}
              <h1>router:</h1>
              <pre>{JSON.stringify(this.context.router, null, 2)}</pre>
              <h1>location:</h1>
              <pre>{JSON.stringify(location, null, 2)}</pre>
              <h1>params:</h1>
              <pre>{JSON.stringify(params, null, 2)}</pre>
              <h1>route:</h1>
              <pre>{JSON.stringify(route, null, 2)}</pre>
              <h1>routeParams:</h1>
              <pre>{JSON.stringify(routeParams, null, 2)}</pre>
              <h1>children:</h1>
              {children}
            </div>
          ) : (
            <Grid className='vertically divided padded'>
              {components}
            </Grid>
          )}
        </div>
      </div>
    )
  }
}
