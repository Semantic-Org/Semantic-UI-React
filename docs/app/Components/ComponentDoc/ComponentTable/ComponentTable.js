import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'
import { Table } from 'semantic-ui-react'

import { getDocProps } from 'docs/app/utils'
import ComponentTableHeader from './ComponentTableHeader'
import ComponentTableRow from './ComponentTableRow'

/**
 * Displays a table of a Component's PropTypes.
 */
const ComponentTable = ({ name }) => (
  <Table compact='very' basic='very'>
    <ComponentTableHeader />
    <Table.Body>
      {_.map(getDocProps(name), item => <ComponentTableRow {...item} key={item.name} />)}
    </Table.Body>
  </Table>
)

ComponentTable.propTypes = {
  name: PropTypes.string,
}

export default ComponentTable
