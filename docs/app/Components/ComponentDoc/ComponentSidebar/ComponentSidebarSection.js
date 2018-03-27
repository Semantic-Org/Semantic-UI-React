import _ from 'lodash'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Accordion, Icon, Menu } from 'semantic-ui-react'

import { pure } from 'docs/app/HOC'
import ComponentSidebarItem from './ComponentSidebarItem'

class ComponentSidebarSection extends Component {
  static propTypes = {
    activePath: PropTypes.string,
    examples: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string,
      path: PropTypes.string,
    })),
    name: PropTypes.string,
    onItemClick: PropTypes.func,
    onTitleClick: PropTypes.func,
  }

  state = {}

  componentWillReceiveProps(nextProps) {
    const { activePath, examples } = nextProps
    const isActiveByProps = !!_.find(examples, { path: activePath })

    const didCloseByProps = this.state.isActiveByProps && !isActiveByProps

    // We allow the user to open accordions, but we close them when we scroll passed them
    this.setState(prevState => ({
      isActiveByProps,
      isActiveByUser: didCloseByProps ? false : prevState.isActiveByUser,
    }))
  }

  handleItemClick = (e, itemProps) => _.invoke(this.props, 'onItemClick', e, itemProps)

  handleTitleClick = () => this.setState(prevState => ({ isActiveByUser: !prevState.isActiveByUser }))

  render() {
    const { activePath, examples, name } = this.props
    const { isActiveByProps, isActiveByUser } = this.state

    const active = isActiveByUser || isActiveByProps

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
