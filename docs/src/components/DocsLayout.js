import AnchorJS from 'anchor-js'
import { withRouter } from 'next/router'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

import PageLayout from 'docs/src/components/PageLayout'
import Sidebar from 'docs/src/components/Sidebar/Sidebar'
import style from 'docs/src/Style'
import { scrollToAnchor } from 'docs/src/utils'

const anchors = new AnchorJS({
  icon: '#',
})

class DocsLayout extends Component {
  static propTypes = {
    children: PropTypes.node,
    router: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }).isRequired,
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
    const {
      router: { pathname },
    } = this.props

    // only reset the page when changing routes
    if (this.pathname === pathname) return

    clearTimeout(this.scrollStartTimeout)

    scrollTo(0, 0)

    anchors.add('h2, h3, h4, h5, h6')
    anchors.remove([1, 2, 3, 4, 5, 6].map(n => `.rendered-example h${n}`).join(', '))
    anchors.remove('.no-anchor')

    this.scrollStartTimeout = setTimeout(scrollToAnchor, 500)
    this.pathname = pathname
  }

  render() {
    const { children, router, sidebar, ...rest } = this.props
    const mainStyle = sidebar ? style.sidebarMain : style.main

    return (
      <PageLayout {...rest}>
        <div style={style.container}>
          <Sidebar router={router} style={style.menu} />
          <div style={mainStyle}>{children}</div>
        </div>
      </PageLayout>
    )
  }
}

export default withRouter(DocsLayout)
