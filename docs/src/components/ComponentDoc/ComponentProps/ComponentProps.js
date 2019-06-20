import keys from 'lodash/keys'
import get from 'lodash/get'
import join from 'lodash/join'
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

  state = {}

  static getDerivedStateFromProps(props, state) {
    return {
      displayName: props.displayName,
      activeDisplayName: props.displayName === state.displayName ? state.activeDisplayName : null,
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

    const displayNames = keys(componentsInfo)
    const { docblock, props } = componentsInfo[activeDisplayName] || {}
    const description = get(docblock, 'description', [])

    return (
      <React.Fragment>
        <Checkbox slider checked={!!activeDisplayName} label='Props' onChange={this.handleToggle} />
        <ComponentPropsComponents
          activeDisplayName={activeDisplayName}
          displayNames={displayNames}
          onItemClick={this.handleComponentClick}
          parentDisplayName={displayName}
        />

        {activeDisplayName && (
          <div style={propsContainerStyle}>
            <ComponentPropsDescription description={join(description, ' ')} />
            <ComponentTable displayName={activeDisplayName} props={props} />
          </div>
        )}
      </React.Fragment>
    )
  }
}
