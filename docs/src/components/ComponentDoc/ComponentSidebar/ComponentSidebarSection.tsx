import _ from 'lodash'
import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import { Accordion, Icon, Menu } from 'semantic-ui-react'

import { examplePathToHash } from 'docs/src/utils'

export default class ComponentSidebarSection extends PureComponent<any, any> {
  static propTypes = {
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

  constructor(props) {
    super(props)
    this.state = {
      isActiveByProps: this.isActiveAccordion(),
    }
  }

  componentWillReceiveProps(nextProps) {
    const isActiveByProps = this.isActiveAccordion(nextProps)
    const didCloseByProps = this.state.isActiveByProps && !isActiveByProps

    // We allow the user to open accordions, but we close them when we scroll passed them
    this.setState(prevState => ({
      isActiveByProps,
      isActiveByUser: didCloseByProps ? false : prevState.isActiveByUser,
    }))
  }

  handleItemClick = examplePath => e => {
    _.invoke(this.props, 'onItemClick', e, { examplePath })
  }

  handleTitleClick = () => {
    this.setState(prevState => ({ isActiveByUser: !prevState.isActiveByUser }))
  }

  isActiveAccordion = (props = this.props) =>
    (props.examples || []).findIndex(item => {
      const exampleHash = examplePathToHash(item.examplePath)
      return exampleHash === props.activePath
    }) !== -1

  render() {
    const { activePath, examples, sectionName } = this.props
    const { isActiveByProps, isActiveByUser } = this.state

    const active = isActiveByUser || isActiveByProps

    return (
      <Menu.Item>
        <Accordion.Title active={active} onClick={this.handleTitleClick}>
          <b>{sectionName}</b>
          <Icon name="dropdown" />
        </Accordion.Title>
        <Accordion.Content as={Menu.Menu} active={active}>
          {_.map(examples, ({ title, examplePath }) => (
            <Menu.Item
              key={examplePath}
              active={activePath === examplePathToHash(examplePath)}
              content={title}
              onClick={this.handleItemClick(examplePath)}
            />
          ))}
        </Accordion.Content>
      </Menu.Item>
    )
  }
}
