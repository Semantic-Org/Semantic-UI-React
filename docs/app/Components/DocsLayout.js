import AnchorJS from 'anchor-js'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Route } from 'react-router-dom'

import Sidebar from 'docs/app/Components/Sidebar/Sidebar'
import { scrollToAnchor } from 'docs/app/utils'
import { getUnhandledProps } from 'src/lib'

const anchors = new AnchorJS({
  icon: '#',
})

const SIDEBAR_WIDTH = 250

const style = {}
style.menu = {
  position: 'fixed',
  top: 0,
  bottom: 0,
  left: 0,
  width: SIDEBAR_WIDTH,
  paddingBottom: '1em',
  // match menu background
  // prevents a white background when items are filtered out by search
  background: '#1B1C1D',
  overflowY: 'scroll',
}

style.sidebarMain = {
  marginLeft: SIDEBAR_WIDTH,
  minWidth: SIDEBAR_WIDTH + 300,
}

style.main = {
  ...style.sidebarMain,
  maxWidth: SIDEBAR_WIDTH + 900,
}

class DocsLayout extends Component {
  static propTypes = {
    component: PropTypes.func,
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
    render: PropTypes.func,
    sidebar: PropTypes.bool,
  }

  componentDidMount() {
    this.resetPage()
  }

  componentDidUpdate() {
    this.resetPage()
  }

  componentWillUnmount() {
    clearTimeout(this.scrollStartTimeout)
  }

  resetPage = () => {
    const { location } = this.props
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

  renderChildren = (props) => {
    const { component: Children, render, sidebar } = this.props
    const mainStyle = sidebar ? style.sidebarMain : style.main

    if (render) return render()
    return (
      <div>
        <Sidebar style={style.menu} />
        <div style={mainStyle}>
          <Children {...props} />
        </div>
      </div>
    )
  }

  render() {
    const rest = getUnhandledProps(DocsLayout, this.props)

    return <Route {...rest} render={this.renderChildren} />
  }
}

export default withRouter(DocsLayout)
