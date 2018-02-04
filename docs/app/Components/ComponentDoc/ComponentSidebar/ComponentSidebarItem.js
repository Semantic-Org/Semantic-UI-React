import _ from 'lodash'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class ComponentSidebarItem extends Component {
  static propTypes = {
    active: PropTypes.bool,
    onClick: PropTypes.func,
    path: PropTypes.string,
    title: PropTypes.string,
  }

  handleClick = e => _.invoke(this.props, 'onClick', e, this.props)

  render() {
    const { active, path, title } = this.props

    return (
      <Menu.Item
        active={active}
        content={title}
        name={path}
        onClick={this.handleClick}
      />
    )
  }
}
