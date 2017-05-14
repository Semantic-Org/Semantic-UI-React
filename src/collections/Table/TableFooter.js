import React from 'react'

import { customPropTypes, META } from '../../lib'
import TableHeader from './TableHeader'

/**
 * A table can have a footer.
 */
function TableFooter(props) {
  return <TableHeader {...props} />
}

TableFooter._meta = {
  name: 'TableFooter',
  type: META.TYPES.COLLECTION,
  parent: 'Table',
}

TableFooter.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,
}

TableFooter.defaultProps = {
  as: 'tfoot',
}

export default TableFooter
