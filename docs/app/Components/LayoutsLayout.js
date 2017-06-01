import React, { Component, PropTypes } from 'react'
import { NavLink, Route } from 'react-router-dom'

import { Button } from 'src'
import { getUnhandledProps } from 'src/lib'

const docsButtonStyle = {
  position: 'fixed',
  margin: '2em',
  bottom: 0,
  left: 0,
  animation: 'back-to-docs 1.5s ease-in-out infinite',
  boxShadow: '0 0.2em 0.5em rgba(0, 32, 48, 0.3)',
  zIndex: 6,
}

const DocsButton = () => (
  <Button
    as={NavLink}
    to='/layouts'
    circular
    color='teal'
    size='large'
    icon='left arrow'
    content='All Layouts'
    style={docsButtonStyle}
  />
)

const style = (
  <style>{`
    @keyframes back-to-docs {
        0% { transform: translateY(0); }
        50% { transform: translateY(0.35em); }
        100% { transform: translateY(0); }
    }
  `}</style>
)

export default class LayoutsLayout extends Component {
  static propTypes = {
    component: PropTypes.func,
  }

  renderChildren = props => {
    const { component: Children } = this.props

    return (
      <div>
        {style}
        <Children {...props} />
        <DocsButton />
      </div>
    )
  }

  render() {
    const rest = getUnhandledProps(LayoutsLayout, this.props)

    return <Route {...rest} render={this.renderChildren} />
  }
}
