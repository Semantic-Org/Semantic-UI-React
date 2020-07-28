import _ from 'lodash'
import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import { Accordion, Icon, Menu } from 'semantic-ui-react'

export default class ComponentSidebarSection extends PureComponent {
  state = {}

  static getDerivedStateFromProps(props, state) {
    const isActiveByProps = (props.examples || []).some(
      (item) => item.examplePath === props.activePath,
    )
    const didCloseByProps = state.isActiveByProps && !isActiveByProps

    // We allow the user to open accordions, but we close them when we scroll passed them
    return {
      isActiveByProps,
      isActiveByUser: didCloseByProps ? false : state.isActiveByUser,
    }
  }

  handleItemClick = (examplePath) => (e) => {
    _.invoke(this.props, 'onItemClick', e, { examplePath })
  }

  handleTitleClick = () => {
    this.setState((prevState) => ({ isActiveByUser: !prevState.isActiveByUser }))
  }

  render() {
    const { activePath, examples, sectionName } = this.props
    const { isActiveByProps, isActiveByUser } = this.state

    const active = isActiveByUser || isActiveByProps

    return (
      <Menu.Item>
        <Accordion.Title active={active} onClick={this.handleTitleClick}>
          <b>{sectionName}</b>
          <Icon name='dropdown' />
        </Accordion.Title>
        <Accordion.Content as={Menu.Menu} active={active}>
          {_.map(examples, ({ title, examplePath }) => (
            <Menu.Item
              key={examplePath}
              active={activePath === examplePath}
              content={title}
              onClick={this.handleItemClick(examplePath)}
            />
          ))}
        </Accordion.Content>
      </Menu.Item>
    )
  }
}

ComponentSidebarSection.propTypes = {
  activePath: PropTypes.string,
  examples: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      examplePath: PropTypes.string,
    }),
  ),
  sectionName: PropTypes.string,
  onItemClick: PropTypes.func,
  onTitleClick: PropTypes.func,
}
