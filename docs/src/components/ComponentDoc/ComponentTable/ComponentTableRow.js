import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'

import ComponentPropDefaultValue from '../ComponentProp/ComponentPropDefaultValue'
import ComponentPropDescription from '../ComponentProp/ComponentPropDescription'
import ComponentPropEnum from '../ComponentProp/ComponentPropEnum'
import ComponentPropFunctionSignature from '../ComponentProp/ComponentPropFunctionSignature'
import ComponentPropName from '../ComponentProp/ComponentPropName'

export default class ComponentTableRow extends Component {
  state = {}

  toggleEnums = () => this.setState((prevState) => ({ showEnums: !prevState.showEnums }))

  render() {
    const { defaultValue, description, name, required, tags, type, value } = this.props
    const { showEnums } = this.state

    return (
      <Table.Row key={name}>
        <Table.Cell collapsing>
          <ComponentPropName name={name} required={required} />
        </Table.Cell>
        <Table.Cell collapsing>
          <ComponentPropDefaultValue value={defaultValue} />
        </Table.Cell>
        <Table.Cell collapsing>{`{${type}}`}</Table.Cell>
        <Table.Cell>
          <ComponentPropDescription description={description} />
          <ComponentPropFunctionSignature name={name} tags={tags} />
          <ComponentPropEnum
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

ComponentTableRow.propTypes = {
  defaultValue: PropTypes.string,
  description: PropTypes.arrayOf(PropTypes.string),
  name: PropTypes.string,
  required: PropTypes.bool,
  tags: PropTypes.array,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
}
