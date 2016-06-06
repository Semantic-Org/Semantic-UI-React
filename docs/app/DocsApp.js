import 'semantic-ui-css/semantic.js'
import 'semantic-ui-css/semantic.css'
import 'highlight.js/styles/github.css'
import React, { Component } from 'react'
import { render } from 'react-dom'

// import * as stardust from 'stardust'

import NewDoc from './Components/NewDoc'
// import ComponentDoc from './Components/ComponentDoc/ComponentDoc'
import Sidebar from './Components/Sidebar/Sidebar'
import style from './Style'

class DocsApp extends Component {
  state = { menuSearch: '' };

  render() {
    // const components = Object.keys(stardust)
    //   .sort()
    // .map(name => <ComponentDoc key={name} meta={stardust[name]._meta} />)

    return (
      <div style={style.container}>
        <div style={style.menu}>
          <Sidebar />
        </div>
        <div style={style.main}>
          <NewDoc component='Label' />
        </div>
      </div>
    )
  }
}

render(<DocsApp />, document.getElementById('root'))
