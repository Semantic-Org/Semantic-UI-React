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
    displayName: PropTypes.string,
    props: PropTypes.arrayOf(PropTypes.object),
  }

  componentWillMount() {
    const { displayName } = this.props

    this.setState({ componentGroup: getComponentGroup(displayName) })
  }

  componentWillReceiveProps({ displayName: next }) {
    const current = this.props.displayName

    if (current !== next) {
      this.setState({ componentGroup: getComponentGroup(next) })
    }
  }

  handleComponentClick = (e, { name }) => {
    this.setState({
      activeName: name,
      componentGroup: getComponentGroup(name),
    })
  }

  handleToggle = () => {
    const { displayName } = this.props
    const { activeName } = this.state

    this.setState({ activeName: activeName ? false : displayName })
  }

  render() {
    const { displayName } = this.props
    const { activeName, componentGroup } = this.state
    const componentNames = _.keys(componentGroup)
    const { description, props } = componentGroup[activeName] || {}

    return (
      <div>
        <ComponentPropsHeader
          hasSubcomponents={componentNames.length > 1}
          showProps={!!activeName}
          onClick={this.handleToggle}
        />
        <ComponentPropsComponents
          activeName={activeName}
          components={componentNames}
          onItemClick={this.handleComponentClick}
          parent={displayName}
        />

        {activeName && (
          <div style={propsContainerStyle}>
            <ComponentPropsDescription description={_.join(description, ' ')} />
            <ComponentTable name={activeName} props={props} />
          </div>
        )}
      </div>
    )
  }
}
