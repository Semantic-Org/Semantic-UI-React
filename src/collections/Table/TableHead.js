import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib'

function TableHead(props) {
  const { children, className } = props
  const classes = cx(className)
  const ElementType = getElementType(TableHead, props)
  const rest = getUnhandledProps(TableHead, props)

  return <ElementType {...rest} className={classes}>{children}</ElementType>
}

TableHead._meta = {
  name: 'TableHead',
  type: META.TYPES.COLLECTION,
  parent: 'Table',
}

TableHead.defaultProps = {
  as: 'thead',
}

TableHead.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),

  /** Primary content of the TableHead. */
  children: PropTypes.node,

  /** Classes that will be added to the TableHead className. */
  className: PropTypes.string,
}

export default TableHead
