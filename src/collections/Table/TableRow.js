import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
  useKeyOnly,
} from '../../lib'

function TableRow(props) {
  const {
    children,
    className,
    negative,
    positive,
  } = props
  const classes = cx(
    useKeyOnly(negative, 'negative'),
    useKeyOnly(positive, 'positive'),
    className,
  )

  const ElementType = getElementType(TableRow, props)
  const rest = getUnhandledProps(TableRow, props)

  return <ElementType {...rest} className={classes}>{children}</ElementType>
}

TableRow._meta = {
  name: 'TableRow',
  type: META.TYPES.COLLECTION,
  parent: 'Table',
}

TableRow.defaultProps = {
  as: 'tr',
}

TableRow.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content of the TableRow. */
  children: PropTypes.node,

  /** Classes that will be added to the TableRow className. */
  className: PropTypes.string,

  /** A row may let a user know whether a value is bad. */
  negative: PropTypes.bool,

  /** A row may let a user know whether a value is good. */
  positive: PropTypes.bool,
}

export default TableRow
