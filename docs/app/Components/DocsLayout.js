import AnchorJS from 'anchor-js'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Sidebar from 'docs/app/Components/Sidebar/Sidebar'
import style from 'docs/app/Style'
import { scrollToAnchor } from 'docs/app/utils'
import { getUnhandledProps } from 'src/lib'

const anchors = new AnchorJS({
  icon: '#',
})

export default class DocsLayout extends Component {
  static propTypes = {
    component: PropTypes.func,
    render: PropTypes.func,
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
    const { component: Children, render } = this.props

    if (render) return render()
    return (
      <div style={style.container}>
        <Sidebar style={style.menu} />
        <div style={style.main}>
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
