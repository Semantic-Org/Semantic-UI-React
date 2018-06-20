import _ from 'lodash'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Checkbox } from 'semantic-ui-react'

import { getComponentGroup } from 'docs/src/utils'
import ComponentTable from '../ComponentTable'
import ComponentPropsComponents from './ComponentPropsComponents'
import ComponentPropsDescription from './ComponentPropsDescription'

const propsContainerStyle: any = { overflowX: 'auto' }

export default class ComponentProps extends Component<any, any> {
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
    this.setState({ activeDisplayName: name })
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
    const { docblock, props } = (componentGroup[activeDisplayName] || {}) as any
    const description = _.get(docblock, 'description', [])

    return (
      <div>
        <Checkbox slider checked={!!activeDisplayName} label="Props" onClick={this.handleToggle} />
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
