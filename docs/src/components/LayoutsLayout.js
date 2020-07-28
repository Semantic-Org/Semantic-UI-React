import PropTypes from 'prop-types'
import React, { createElement, PureComponent } from 'react'
import { Link, withRouteData } from 'react-static'
import { Button } from 'semantic-ui-react'

import { repoURL } from 'docs/src/utils'
import { isBrowser } from 'src/lib'

const docsButtonStyle = {
  position: 'fixed',
  margin: '2em',
  bottom: 0,
  left: 0,
  animation: 'back-to-docs 1.5s ease-in-out infinite',
  zIndex: 6,
}

const style = (
  <style>
    {`
    @keyframes back-to-docs {
        0% { transform: translateY(0); }
        50% { transform: translateY(0.35em); }
        100% { transform: translateY(0); }
    }
  `}
  </style>
)

class LayoutsLayout extends PureComponent {
  constructor(props) {
    super(props)

    this.state = { component: require(`docs/src/layouts/${props.componentFilename}`).default }
  }

  componentDidMount() {
    if (isBrowser()) window.scrollTo(0, 0)
  }

  componentDidUpdate() {
    if (isBrowser()) window.scrollTo(0, 0)
  }

  render() {
    const { componentFilename } = this.props
    const { component } = this.state

    return (
      <div>
        {style}
        {createElement(component)}

        <div style={docsButtonStyle}>
          <Button as={Link} to='/layouts' color='teal' icon='left arrow' content='Layouts' />
          <Button
            as={Link}
            to={`${repoURL}/blob/master/docs/src/layouts/${componentFilename}`}
            icon='github'
            content='Source'
            secondary
            target='_blank'
          />
        </div>
      </div>
    )
  }
}

LayoutsLayout.propTypes = {
  componentFilename: PropTypes.string.isRequired,
}

export default withRouteData(LayoutsLayout)
