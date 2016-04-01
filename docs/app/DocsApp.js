import 'semantic-ui-css/semantic.js'
import 'semantic-ui-css/semantic.css'
import 'highlight.js/styles/github.css'
import React, { Component } from 'react'
import { render } from 'react-dom'

import * as stardust from 'stardust'

import ComponentDoc from './Components/ComponentDoc/ComponentDoc'
import DocsMenu from './Components/Sidebar/Sidebar'
import style from './Style'

const { Grid } = stardust

class DocsApp extends Component {
  state = { menuSearch: '' };

  render() {
    const components = Object.keys(stardust)
      .sort()
      .map(name => <ComponentDoc key={name} meta={stardust[name]._meta} />)

    return (
      <div style={style.container}>
        <div style={style.menu}>
          <DocsMenu />
        </div>
        <div style={style.main}>
          <Grid className='padded'>
            <Grid.Column>
              {components}
            </Grid.Column>
          </Grid>
        </div>
      </div>
    )
  }
}

render(<DocsApp />, document.getElementById('root'))
