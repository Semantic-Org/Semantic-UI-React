import 'semantic-ui-css/semantic.css'
import 'highlight.js/styles/github.css'
import React, { Component, PropTypes } from 'react'

import Sidebar from 'docs/app/Components/Sidebar/Sidebar'
import style from 'docs/app/Style'
import { Grid } from 'stardust'

export default class Root extends Component {
  static propTypes = {
    children: PropTypes.node,
  }

  render() {
    return (
      <div style={style.container}>
        <Sidebar style={style.menu} />
        <div style={style.main}>
          <Grid className='padded'>
            <Grid.Column>
              {this.props.children}
            </Grid.Column>
          </Grid>
        </div>
      </div>
    )
  }
}
