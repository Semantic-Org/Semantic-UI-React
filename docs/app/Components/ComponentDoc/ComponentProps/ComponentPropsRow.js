import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'

import ComponentPropsDefaultValue from './ComponentPropsDefaultValue'
import ComponentPropsDescription from './ComponentPropsDescription'
import ComponentPropsEnum from './ComponentPropsEnum'
import ComponentPropsFunctionSignature from './ComponentPropsFunctionSignature'
import ComponentPropsName from './ComponentPropsName'

export default class ComponentPropsRow extends Component {
  static propTypes = {
    defaultValue: PropTypes.string,
    description: PropTypes.string,
    name: PropTypes.string,
    required: PropTypes.bool,
    tags: PropTypes.object,
    type: PropTypes.string,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
  }

  state = {}

  toggleEnums = () => this.setState({ showEnums: !this.state.showEnums })

  render() {
    const { defaultValue, description, name, required, tags, type, value } = this.props
    const { showEnums } = this.state

    return (
      <Table.Row key={name}>
        <Table.Cell collapsing>
          <ComponentPropsName name={name} required={required} />
        </Table.Cell>
        <Table.Cell collapsing>
          <ComponentPropsDefaultValue value={defaultValue} />
        </Table.Cell>
        <Table.Cell collapsing>{`{${type}}`}</Table.Cell>
        <Table.Cell>
          <ComponentPropsDescription description={description} />
          <ComponentPropsFunctionSignature name={name} tags={tags} />
          <ComponentPropsEnum
            showAll={showEnums}
            toggle={this.toggleEnums}
            type={type}
            values={value}
          />
        </Table.Cell>
      </Table.Row>
    )
  }
}
