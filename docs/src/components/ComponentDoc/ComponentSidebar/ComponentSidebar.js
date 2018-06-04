import _ from 'lodash'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Accordion, Menu, Sticky } from 'semantic-ui-react'

import menuInfo from 'docs/src/menuInfo.json'
import ComponentSideBarSection from './ComponentSidebarSection'

const sidebarStyle = {
  background: '#fff',
  boxShadow: '0 2px 2px rgba(0, 0, 0, 0.1)',
  paddingLeft: '1em',
  paddingBottom: '0.1em',
  paddingTop: '0.1em',
}

class ComponentSidebar extends Component {
  static propTypes = {
    activePath: PropTypes.string,
    componentName: PropTypes.string,
    examplesRef: PropTypes.object,
    onItemClick: PropTypes.func,
  }

  state = {}

  constructor(props) {
    super(props)

    this.state = { sections: this.computeSections(props) }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ sections: this.computeSections(nextProps) })
  }

  computeSections = ({ componentName }) => _.get(menuInfo, componentName)

  handleItemClick = (e, { path }) => _.invoke(this.props, 'onItemClick', e, { path })

  render() {
    const { activePath, examplesRef } = this.props
    const { sections } = this.state

    return (
      <Sticky context={examplesRef} offset={15}>
        <Menu as={Accordion} fluid style={sidebarStyle} text vertical>
          {_.map(sections, ({ examples, name }) => (
            <ComponentSideBarSection
              activePath={activePath}
              examples={examples}
              key={name}
              name={name}
              onItemClick={this.handleItemClick}
            />
          ))}
        </Menu>
      </Sticky>
    )
  }
}

export default ComponentSidebar
