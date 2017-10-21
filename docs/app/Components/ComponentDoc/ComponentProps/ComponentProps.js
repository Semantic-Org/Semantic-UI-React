import _ from 'lodash'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

import ComponentTable from '../ComponentTable'
import ComponentPropsComponents from './ComponentPropsComponents'
import ComponentPropsDescription from './ComponentPropsDescription'
import ComponentPropsHeader from './ComponentPropsHeader'

export default class ComponentProps extends Component {
  static propTypes = {
    componentGroup: PropTypes.arrayOf(PropTypes.object),
    componentName: PropTypes.string,
    props: PropTypes.arrayOf(PropTypes.object),
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
    const { componentGroup, componentName } = this.props
    const { activeName } = this.state
    const { description, props } = componentGroup[activeName] || {}

    return (
      <div>
        <ComponentPropsHeader
          hasSubComponents={componentGroup.length > 1}
          showProps={activeName}
          onClick={this.handleToggle}
        />
        <ComponentPropsComponents
          activeName={activeName}
          components={_.keys(componentGroup)}
          onItemClick={this.handleComponentClick}
          parent={componentName}
        />

        {activeName && (
          <div>
            <ComponentPropsDescription description={description} />
            <ComponentTable name={activeName} props={props} />
          </div>
        )}
      </div>
    )
  }
}
