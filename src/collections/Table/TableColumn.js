import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib'

function TableColumn(props) {
  const { children, className } = props
  const classes = cx(className)
  const ElementType = getElementType(TableColumn, props)
  const rest = getUnhandledProps(TableColumn, props)

  return <ElementType {...rest} className={classes}>{children}</ElementType>
}

TableColumn._meta = {
  name: 'TableColumn',
  type: META.TYPES.COLLECTION,
  parent: 'Table',
}

TableColumn.defaultProps = {
  as: 'td',
}

TableColumn.propTypes = {
      /** An element type to render as (string or function). */
  as: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),

      /** Primary content of the TableColumn. */
  children: PropTypes.node,

      /** Classes that will be added to the TableColumn className. */
  className: PropTypes.string,
}

export default TableColumn
