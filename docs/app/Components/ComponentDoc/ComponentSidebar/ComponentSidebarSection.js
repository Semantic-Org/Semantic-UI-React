import _ from 'lodash'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Accordion, Icon, Menu } from 'semantic-ui-react'

import { pure } from 'docs/app/HOC'
import ComponentSidebarItem from './ComponentSidebarItem'

class ComponentSidebarSection extends Component {
  static propTypes = {
    activePath: PropTypes.string,
    examples: PropTypes.object,
    name: PropTypes.string,
    onItemClick: PropTypes.func,
    onTitleClick: PropTypes.func,
  }

  handleItemClick = (e, itemProps) => _.invoke(this.props, 'onItemClick', e, itemProps)

  handleTitleClick = e => _.invoke(this.props, 'onTitleClick', e, this.props)

  render() {
    const { activePath, examples, name } = this.props
    const active = _.find(examples, { path: activePath })

    return (
      <Menu.Item>
        <Accordion.Title active={active} onClick={this.handleTitleClick}>
          <b>{name}</b>
          <Icon name='dropdown' />
        </Accordion.Title>
        <Accordion.Content as={Menu.Menu} active={active}>
          {_.map(examples, ({ title, path }) => (
            <ComponentSidebarItem
              active={activePath === path}
              key={path}
              onClick={this.handleItemClick}
              path={path}
              title={title}
            />
          ))}
        </Accordion.Content>
      </Menu.Item>
    )
  }
}

export default pure(ComponentSidebarSection)
