import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Icon, Menu } from 'semantic-ui-react'

import ComponentControlsToolTip from './ComponentControlsToolTip'

export default class ComponentControlsCopyLink extends Component {
  state = {}

  static propTypes = {
    anchorName: PropTypes.string,
    onClick: PropTypes.func,
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.active !== nextState.active
  }

  componentDidMount() {
    this.mounted = true
  }

  componentWillUnmount() {
    this.mounted = false
  }

  handleClick = (e) => {
    const { onClick } = this.props

    e.preventDefault()
    onClick()

    this.setState({ active: true })
    setTimeout(this.resetActive, 3000)
  }

  resetActive = () => this.mounted && this.setState({ active: false })

  render() {
    const { anchorName } = this.props
    const { active } = this.state

    return (
      <ComponentControlsToolTip content={active ? ' Copied Link!' : 'Direct link'}>
        <Menu.Item href={`#${anchorName}`} onClick={this.handleClick}>
          <Icon
            color={active ? 'green' : 'grey'}
            fitted
            name='linkify'
            size='large'
          />
        </Menu.Item>
      </ComponentControlsToolTip>
    )
  }
}
