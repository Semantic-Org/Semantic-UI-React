import _ from 'lodash'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

import ComponentTable from '../ComponentTable'
import ComponentPropsComponents from './ComponentPropsComponents'
import ComponentPropsDescription from './ComponentPropsDescription'
import ComponentPropsHeader from './ComponentPropsHeader'

const propsContainerStyle = { overflowX: 'auto' }

export default class ComponentProps extends Component {
  static propTypes = {
    componentGroup: PropTypes.objectOf(
      PropTypes.shape({
        description: PropTypes.arrayOf(PropTypes.string),
        props: PropTypes.array,
      }),
    ),
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

  handleToggle = () =>
    this.setState({ activeName: this.state.activeName ? false : this.props.componentName })

  render() {
    const { componentGroup, componentName } = this.props
    const { activeName } = this.state
    const { description, props } = componentGroup[activeName] || {}
    const componentNames = _.keys(componentGroup)

    return (
      <div>
        <ComponentPropsHeader
          hasSubComponents={componentNames.length > 1}
          showProps={!!activeName}
          onClick={this.handleToggle}
        />
        <ComponentPropsComponents
          activeName={activeName}
          components={componentNames}
          onItemClick={this.handleComponentClick}
          parent={componentName}
        />

        {activeName && (
          <div style={propsContainerStyle}>
            <ComponentPropsDescription description={description} />
            <ComponentTable name={activeName} props={props} />
          </div>
        )}
      </div>
    )
  }
}
