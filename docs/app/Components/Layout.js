import 'semantic-ui-css/semantic.css'
import AnchorJS from 'anchor-js'
import React, { Component, PropTypes } from 'react'

import Sidebar from 'docs/app/Components/Sidebar/Sidebar'
import style from 'docs/app/Style'
import TAAttribution from 'docs/app/Components/TAAttribution/TAAttribution'
import { scrollToAnchor } from 'docs/app/utils'

const anchors = new AnchorJS({
  icon: '#',
})

export default class Layout extends Component {
  static propTypes = {
    children: PropTypes.node,
  }

  componentDidMount() {
    this.resetPage()
  }

  componentDidUpdate(prevProps, prevState) {
    this.resetPage()
  }

  componentWillUnmount() {
    clearTimeout(this.scrollStartTimeout)
  }

  resetPage = () => {
    // only reset the page when changing routes
    if (this.pathname === location.pathname) return

    clearTimeout(this.scrollStartTimeout)

    scrollTo(0, 0)

    anchors.add('h2, h3, h4, h5, h6')
    anchors.remove([1, 2, 3, 4, 5, 6].map(n => `.rendered-example h${n}`).join(', '))
    anchors.remove('.no-anchor')

    this.scrollStartTimeout = setTimeout(scrollToAnchor, 500)
    this.pathname = location.pathname
  }

  render() {
    return (
      <div style={style.container}>
        <Sidebar style={style.menu} />
        <div style={style.main}>
          {this.props.children}
          <TAAttribution />
        </div>
      </div>
    )
  }
}
