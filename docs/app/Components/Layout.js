import 'semantic-ui-css/semantic.css'
import 'highlight.js/styles/github.css'
import AnchorJS from 'anchor-js'
import React, { Component, PropTypes } from 'react'

import Sidebar from 'docs/app/Components/Sidebar/Sidebar'
import style from 'docs/app/Style'
import { Grid } from 'stardust'
import TAAttribution from 'docs/app/Components/TAAttribution/TAAttribution'

const anchors = new AnchorJS({
  icon: '#',
})

export default class Root extends Component {
  static propTypes = {
    children: PropTypes.node,
  }

  resetPage = () => {
    anchors.add('h2, h3, h4, h5, h6')
    window.scrollTo(0, 0)
  }

  componentDidMount() {
    this.resetPage()
  }

  componentDidUpdate(prevProps, prevState) {
    this.resetPage()
  }

  render() {
    return (
      <div style={style.container}>
        <Sidebar style={style.menu} />
        <div style={style.main}>
          <Grid padded>
            <Grid.Column>
              {this.props.children}
            </Grid.Column>
          </Grid>
          <TAAttribution />
        </div>
      </div>
    )
  }
}
