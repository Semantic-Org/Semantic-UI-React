import _ from 'lodash'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Checkbox } from 'semantic-ui-react'

import { docTypes } from 'docs/src/utils'
import ComponentTable from '../ComponentTable'
import ComponentPropsComponents from './ComponentPropsComponents'
import ComponentPropsDescription from './ComponentPropsDescription'

const propsContainerStyle = { overflowX: 'auto' }

export default class ComponentProps extends Component {
  static propTypes = {
    componentsInfo: PropTypes.objectOf(docTypes.componentInfoShape).isRequired,
    displayName: PropTypes.string.isRequired,
  }

  state = {
    activeDisplayName: null,
  }

  componentWillReceiveProps(nextProps) {
    const currentName = this.props.displayName
    const nextName = nextProps.displayName

    if (currentName.displayName !== nextName) {
      this.setState({ activeDisplayName: null })
    }
  }

  handleComponentClick = (e, { name }) => {
    this.setState({ activeDisplayName: name })
  }

  handleToggle = () => {
    const { displayName } = this.props
    const { activeDisplayName } = this.state

    this.setState({ activeDisplayName: activeDisplayName ? false : displayName })
  }

  render() {
    const { displayName, componentsInfo } = this.props
    const { activeDisplayName } = this.state

    const displayNames = _.keys(componentsInfo)
    const { docblock, props } = componentsInfo[activeDisplayName] || {}
    const description = _.get(docblock, 'description', [])

    return (
      <div>
        <Checkbox slider checked={!!activeDisplayName} label='Props' onClick={this.handleToggle} />
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
