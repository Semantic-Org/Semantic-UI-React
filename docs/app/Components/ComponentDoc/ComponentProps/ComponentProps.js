import _ from 'lodash'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

import ComponentTable from '../ComponentTable'
import ComponentPropsComponents from './ComponentPropsComponents'
import ComponentPropsDescription from './ComponentPropsDescription'
import ComponentPropsHeader from './ComponentPropsHeader'
import getComponentGroup from '../../../utils/getComponentGroup'

const propsContainerStyle = { overflowX: 'auto' }

export default class ComponentProps extends Component {
  static propTypes = {
    displayName: PropTypes.string.isRequired,
    props: PropTypes.arrayOf(PropTypes.object).isRequired,
  }

  componentWillMount() {
    const { displayName } = this.props

    this.setState({ componentGroup: getComponentGroup(displayName) })
  }

  componentWillReceiveProps({ displayName: next }) {
    const current = this.props.displayName

    if (current !== next) {
      this.setState({
        activeDisplayName: null,
        componentGroup: getComponentGroup(next),
      })
    }
  }

  handleComponentClick = (e, { name }) => {
    const { activeDisplayName } = this.state

    if (activeDisplayName === name) return

    this.setState({
      activeDisplayName: name,
      componentGroup: getComponentGroup(name),
    })
  }

  handleToggle = () => {
    const { displayName } = this.props
    const { activeDisplayName } = this.state

    this.setState({ activeDisplayName: activeDisplayName ? false : displayName })
  }

  render() {
    const { displayName } = this.props
    const { activeDisplayName, componentGroup } = this.state
    const displayNames = _.keys(componentGroup)
    const { docblock, props } = componentGroup[activeDisplayName] || {}
    const description = _.get(docblock, 'description', [])

    return (
      <div>
        <ComponentPropsHeader
          hasSubcomponents={displayNames.length > 1}
          showProps={!!activeDisplayName}
          onClick={this.handleToggle}
        />
        <ComponentPropsComponents
          activeDisplayName={activeDisplayName}
          displayNames={displayNames}
          onItemClick={this.handleComponentClick}
          parentDisplayName={displayName}
        />

        {activeDisplayName && (
          <div style={propsContainerStyle}>
            <ComponentPropsDescription description={_.join(description, ' ')} />
            <ComponentTable displayName={activeDisplayName} props={props} />
          </div>
        )}
      </div>
    )
  }
}
