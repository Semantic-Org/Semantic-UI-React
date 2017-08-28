import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'
import { Table } from 'semantic-ui-react'

import { updateForKeys } from 'docs/app/HOC'
import ComponentPropsDefaultValue from './ComponentPropsDefaultValue'
import ComponentPropsDescription from './ComponentPropsDescription'
import ComponentPropsEnum from './ComponentPropsEnum'
import ComponentPropsFunctionSignature from './ComponentPropsFunctionSignature'
import ComponentPropsName from './ComponentPropsName'

const ComponentPropsRow = ({ defaultValue, description, name, onToggleEnum, required, showEnums, tags, type, value }) =>
  (
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
          toggle={onToggleEnum}
          type={type}
          values={value}
        />
      </Table.Cell>
    </Table.Row>
  )

ComponentPropsRow.propTypes = {
  defaultValue: PropTypes.string,
  description: PropTypes.string,
  name: PropTypes.string,
  onToggleEnum: PropTypes.func,
  required: PropTypes.bool,
  showEnums: PropTypes.bool,
  tags: PropTypes.object,
  type: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
}

export default updateForKeys(_.without(ComponentPropsRow.handledProps, 'onToggleEnum'))(ComponentPropsRow)
