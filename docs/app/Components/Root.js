import 'semantic-ui-css/semantic.css'
import 'highlight.js/styles/github.css'
import _ from 'lodash/fp'
import React, { Component, PropTypes } from 'react'
import { routerShape } from 'react-router'

import { typeOrder } from 'docs/app/utils'
import * as stardust from 'stardust'

import ComponentDoc from 'docs/app/Components/ComponentDoc/ComponentDoc'
import DocsMenu from 'docs/app/Components/Sidebar/Sidebar'
import style from 'docs/app/Style'
import META from 'src/utils/Meta'

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

  renderComponentDocs = () => {
    return _.flow(
      _.flatMap(_.flow(
        (type) => _.filter(META.isType(type), stardust),    // get component array by type
        _.filter(META.isParent),                            // parents only
        _.sortBy('_meta.name')                              // sorted
      )),
      _.map(({ _meta }) => (
        <Grid.Row key={_meta.name} id={_meta.name}>
          <Grid.Column>
            <Segment className='basic'>
              <ComponentDoc _meta={_meta} />
            </Segment>
          </Grid.Column>
        </Grid.Row>
      )),
    )(typeOrder)
  }

  render() {
    return (
      <div style={style.container}>
        <div style={style.menu}>
          <DocsMenu />
        </div>
        <div style={style.main}>
          <Grid className='vertically divided padded'>
            {this.renderComponentDocs()}
          </Grid>
        </div>
      </div>
    )
  }
}
