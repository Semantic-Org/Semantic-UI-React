import _ from 'lodash'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Accordion, Menu, Sticky } from 'semantic-ui-react'

import exampleMenu from 'docs/app/exampleMenu'
import ComponentSidebarSection from './ComponentSidebarSection'

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
    displayName: PropTypes.string,
    examplesRef: PropTypes.object,
    onItemClick: PropTypes.func,
  }

  state = {}

  constructor(props) {
    super(props)

    this.state = { sections: exampleMenu[props.displayName] }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ sections: exampleMenu[nextProps.displayName] })
  }

  render() {
    const { activePath, examplesRef, onItemClick } = this.props
    const { sections } = this.state

    return (
      <Sticky context={examplesRef} offset={15}>
        <Menu as={Accordion} fluid style={sidebarStyle} text vertical>
          {_.map(sections, ({ examples, sectionName }) => (
            <ComponentSidebarSection
              activePath={activePath}
              examples={examples}
              key={sectionName}
              sectionName={sectionName}
              onItemClick={onItemClick}
            />
          ))}
        </Menu>
      </Sticky>
    )
  }
}

export default ComponentSidebar
