import PropTypes from 'prop-types'
import React from 'react'

import { getUnhandledProps } from '../../lib'
import TableHeader from './TableHeader'

/**
 * A table can have a footer.
 */
function TableFooter(props) {
  const { as } = props
  const rest = getUnhandledProps(TableFooter, props)

  return <TableHeader {...rest} as={as} />
}

TableFooter.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,
}

TableFooter.defaultProps = {
  as: 'tfoot',
}

export default TableFooter
