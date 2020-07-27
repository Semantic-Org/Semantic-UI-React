import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Icon, Menu } from 'semantic-ui-react'

export default class ComponentControlsCopyLink extends Component {
  state = {}

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.active !== nextState.active
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutId)
  }

  handleClick = (e) => {
    const { onClick } = this.props

    e.preventDefault()
    onClick()

    this.setState({ active: true })
    this.timeoutId = setTimeout(() => this.setState({ active: false }), 3000)
  }

  render() {
    const { anchorName } = this.props
    const { active } = this.state

    return (
      <Menu.Item href={`#${anchorName}`} onClick={this.handleClick}>
        <Icon color={active ? 'green' : 'grey'} fitted name='linkify' size='large' />
        {active ? ' Copied!' : 'Permalink'}
      </Menu.Item>
    )
  }
}

ComponentControlsCopyLink.propTypes = {
  anchorName: PropTypes.string,
  onClick: PropTypes.func,
}
