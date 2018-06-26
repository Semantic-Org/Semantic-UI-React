import AnchorJS from 'anchor-js'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Head, withRouter, withSiteData } from 'react-static'

import Sidebar from 'docs/src/components/Sidebar/Sidebar'
import style from 'docs/src/Style'
import { docTypes, scrollToAnchor } from 'docs/src/utils'

const anchors = new AnchorJS({
  icon: '#',
})

class DocsLayout extends Component {
  static propTypes = {
    additionalTitle: PropTypes.string,
    children: PropTypes.node,
    componentMenu: docTypes.componentMenu.isRequired,
    location: PropTypes.object.isRequired,
    sidebar: PropTypes.bool,
    title: PropTypes.string.isRequired,
    versions: docTypes.versions,
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

  render() {
    const { additionalTitle, children, componentMenu, sidebar, title, versions } = this.props
    const mainStyle = sidebar ? style.sidebarMain : style.main

    return (
      <div style={style.container}>
        <Head>
          <title>
            {additionalTitle ? `${additionalTitle} - ` : ''}
            {title}
          </title>
        </Head>
        <Sidebar componentMenu={componentMenu} style={style.menu} version={versions.suir} />
        <div style={mainStyle}>{children}</div>
      </div>
    )
  }
}

export default withSiteData(withRouter(DocsLayout))
