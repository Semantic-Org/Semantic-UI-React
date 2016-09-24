import React from 'react'

import { customPropTypes, META } from '../../lib'
import TableHeader from './TableHeader'

function TableFooter(props) {
  const { as } = props

  return <TableHeader {...props} as={as} />
}

TableFooter._meta = {
  name: 'TableFooter',
  type: META.TYPES.COLLECTION,
  parent: 'Table',
}

TableFooter.defaultProps = {
  as: 'tfoot',
}

TableFooter.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,
}

export default TableFooter
