import _ from 'lodash'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Checkbox } from 'semantic-ui-react'

import { propTypes } from 'docs/src/utils'
import ComponentTable from '../ComponentTable'
import ComponentPropsComponents from './ComponentPropsComponents'
import ComponentPropsDescription from './ComponentPropsDescription'

const propsContainerStyle = { overflowX: 'auto' }

export default class ComponentProps extends Component {
  static propTypes = {
    componentInfo: propTypes.componentInfoShape.isRequired,
    subcomponentsInfo: PropTypes.objectOf(propTypes.componentInfoShape).isRequired,
  }

  constructor(props) {
    super(props)

    this.state = { componentGroup: this.computeComponentGroup(props) }
  }

  componentWillReceiveProps(nextProps) {
    const currentName = this.props.componentInfo.displayName
    const nextName = nextProps.componentInfo.displayName

    if (currentName.displayName !== nextName) {
      this.setState({
        activeDisplayName: null,
        componentGroup: this.computeComponentGroup(nextProps),
      })
    }
  }

  computeComponentGroup = ({ componentInfo, subcomponentsInfo }) => ({
    [componentInfo.displayName]: componentInfo,
    ...subcomponentsInfo,
  })

  handleComponentClick = (e, { name }) => {
    this.setState({ activeDisplayName: name })
  }

  handleToggle = () => {
    const {
      componentInfo: { displayName },
    } = this.props
    const { activeDisplayName } = this.state

    this.setState({ activeDisplayName: activeDisplayName ? false : displayName })
  }

  render() {
    const {
      componentInfo: { displayName },
    } = this.props
    const { activeDisplayName, componentGroup } = this.state

    const displayNames = _.keys(componentGroup)
    const { docblock, props } = componentGroup[activeDisplayName] || {}
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
