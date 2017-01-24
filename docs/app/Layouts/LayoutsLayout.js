import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

import { Button } from 'src'

const style = (
  <style>{`
    @keyframes back-to-docs {
        0% { transform: translateY(0); }
        50% { transform: translateY(0.35em); }
        100% { transform: translateY(0); }
    }
  `}</style>
)

const docsButtonStyle = {
  position: 'fixed',
  margin: '2em',
  bottom: 0,
  left: 0,
  animation: 'back-to-docs 1.5s ease-in-out infinite',
  boxShadow: '0 0.2em 0.5em rgba(0, 32, 48, 0.3)',
}

const DocsButton = () => (
  <Button
    as={Link}
    to='layouts'
    circular
    color='teal'
    size='large'
    icon='left arrow'
    content='All Layouts'
    style={docsButtonStyle}
  />
)

class LayoutsLayout extends Component {
  static propTypes = {
    children: PropTypes.node,
  }

  render() {
    return (
      <div>
        {style}
        {this.props.children}
        <DocsButton />
      </div>
    )
  }
}

export default LayoutsLayout
