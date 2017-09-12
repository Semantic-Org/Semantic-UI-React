import PropTypes from 'prop-types'
import React, { Component } from 'react'

import { getDocSubComponents } from 'docs/app/utils'
import ComponentTable from '../ComponentTable'
import ComponentPropsComponentDescription from './ComponentPropsComponentDescription'
import ComponentPropsHeader from './ComponentPropsHeader'
import ComponentPropsComponents from './ComponentPropsComponents'

export default class ComponentProps extends Component {
  static propTypes = {
    componentName: PropTypes.string,
  }

  constructor(props) {
    super(props)

    this.state = { activeName: props.componentName }
  }

  componentWillReceiveProps({ componentName: next }) {
    const current = this.props.componentName

    if (current !== next) this.setState({ activeName: next })
  }

  handleComponentClick = (e, { name }) => this.setState({ activeName: name })

  handleToggle = () => this.setState({ activeName: this.state.activeName ? false : this.props.componentName })

  render() {
    const { componentName } = this.props
    const { activeName } = this.state
    const subComponents = getDocSubComponents(componentName)

    return (
      <div>
        <ComponentPropsHeader
          hasSubComponents={subComponents.length > 0}
          showProps={activeName}
          onClick={this.handleToggle}
        />
        <ComponentPropsComponents
          activeName={activeName}
          components={subComponents}
          onItemClick={this.handleComponentClick}
          parent={componentName}
        />

        {activeName && (
          <div>
            <ComponentPropsComponentDescription name={activeName} />
            <ComponentTable name={activeName} />
          </div>
        )}
      </div>
    )
  }
}
