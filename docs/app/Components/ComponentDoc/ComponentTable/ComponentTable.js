import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'
import { Table } from 'semantic-ui-react'

import ComponentTableHeader from './ComponentTableHeader'
import ComponentTableRow from './ComponentTableRow'

/**
 * Displays a table of a Component's PropTypes.
 */
const ComponentTable = ({ props }) => (
  <Table compact='very' basic='very'>
    <ComponentTableHeader />
    <Table.Body>
      {_.map(props, ({ name, ...rest }) => <ComponentTableRow {...rest} key={name} name={name} />)}
    </Table.Body>
  </Table>
)

ComponentTable.propTypes = {
  props: PropTypes.arrayOf(PropTypes.object),
}

export default ComponentTable
