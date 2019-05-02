import AnchorJS from 'anchor-js'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Head, withRouter } from 'react-static'

import style from 'docs/src/Style'
import { scrollToAnchor } from 'docs/src/utils'
import { isBrowser } from 'src/lib'

const anchors = new AnchorJS({
  icon: '#',
})

class DocsLayout extends Component {
  static propTypes = {
    additionalTitle: PropTypes.string,
    children: PropTypes.node,
    location: PropTypes.object.isRequired,
    sidebar: PropTypes.bool,
    title: PropTypes.string.isRequired,
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

    if (isBrowser()) window.scrollTo(0, 0)

    anchors.add('h2, h3, h4, h5, h6')
    anchors.remove([1, 2, 3, 4, 5, 6].map((n) => `.rendered-example h${n}`).join(', '))
    anchors.remove('.no-anchor')

    this.scrollStartTimeout = setTimeout(scrollToAnchor, 500)
    this.pathname = location.pathname
  }

  render() {
    const { additionalTitle, children, sidebar, title } = this.props
    const mainStyle = sidebar ? style.sidebarMain : style.main

    return (
      <React.Fragment>
        <Head>
          <title>
            {additionalTitle ? `${additionalTitle} - ` : ''}
            {title}
          </title>
        </Head>
        <div style={mainStyle}>{children}</div>
      </React.Fragment>
    )
  }
}

export default withRouter(DocsLayout)
