import React, { Component } from 'react'

import { getUnhandledProps } from 'src/lib'
import { Icon, Image } from 'src'

const containerStyle = {
  position: 'fixed',
  padding: '0.5em',
  paddingBottom: '0.35em',
  width: '20em',
  right: '1em',
  bottom: 0,
  zIndex: 1000000,
  fontSize: '0.85em',
  textAlign: 'center',
  color: '#999',
  background: '#fff',
  boxShadow: '0 0 4px rgba(0, 0, 0, 0.2)',
}

const containerHoverStyle = {
  boxShadow: '0 0 8px rgba(0, 0, 0, 0.3)',
  color: undefined,
  opactiy: 1,
}

const imageStyle = {
  width: '9em',
  margin: '0 0 0.25em 0.25em',
}

const defaultState = {
  iconColor: 'grey',
  style: containerStyle,
}
class TAAttribution extends Component {
  state = defaultState

  handleMouseEnter = () => {
    this.setState({
      iconColor: 'red',
      style: {
        ...containerStyle,
        ...containerHoverStyle,
      },
    })
  }
  handleMouseLeave = () => {
    this.setState(defaultState)
  }

  render() {
    const rest = getUnhandledProps(TAAttribution, this.props)

    return (
      <a
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        href='http://technologyadvice.com/careers/'
        target='_blank'
        style={this.state.style}
        {...rest}
      >
        Made with
        &nbsp;<Icon name='heart' color={this.state.iconColor} />
        at&nbsp;
        <Image
          inline
          verticalAlign='middle'
          style={imageStyle}
          src='/assets/technologyadvice-logo-dark.png'
        />
      </a>
    )
  }
}

export default TAAttribution
